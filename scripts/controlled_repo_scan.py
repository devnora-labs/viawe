#!/usr/bin/env python3
"""
Via-We controlled repository scanner.

WHY THIS EXISTS
---------------
Four scans on this project returned confident FALSE CLEAN results:

  1. a `find | xargs | awk` pipeline silently produced 0 where a direct search
     returned 4 (real PII reached a commit before it was caught);
  2. `git grep -E` silently ignored `\\b` — POSIX ERE has no word-boundary
     escape — so every phone and CIN scan returned 0 regardless of content;
  3. a glob stored in a shell variable did not expand, so ripgrep received a
     literal `docs/product/*.md` and matched nothing;
  4. `mapfile` was used under zsh (it is bash-only), producing an empty file
     list — and, separately, unquoted `$FILES` does not word-split in zsh.

Each failure produced a zero that looked like proof.

GOVERNING RULE
--------------
A scan's zero is worthless without a demonstration that the scan can find a
planted positive. This tool refuses to report a clean result unless its
pattern first matches a control fixture it creates and then deletes.

Python owns file enumeration and matching, so results are identical under
zsh, bash and CI, and filenames containing spaces or shell metacharacters are
safe. Git file lists are read NUL-delimited.

Exit codes
----------
  0  scan valid, zero matches
  1  scan valid, matches found
  3  CONTROL NOT PROVEN — the scan is INVALID and its result must be discarded
  4  no files were scanned (an empty scope is not a clean result)
  5  runtime error (invalid regex, git unavailable, unreadable scope)
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

EXIT_CLEAN = 0
EXIT_MATCHES = 1
EXIT_CONTROL_FAILED = 3
EXIT_NO_FILES = 4
EXIT_ERROR = 5

DEFAULT_EXCLUDES = [".git", ".agents", ".claude", "node_modules", ".next", "private"]

# Extensions treated as binary and skipped rather than decoded as text.
BINARY_SUFFIXES = {
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".pdf", ".ai", ".eps",
    ".zip", ".gz", ".woff", ".woff2", ".ttf", ".otf", ".db", ".sqlite", ".mp4",
}


class ScanError(Exception):
    """Raised for conditions that invalidate the scan rather than fail it."""


def redact(text: str, keep: int = 3) -> str:
    """
    Reduce a matched value to a shape, never the value.

    A phone number becomes `630…933`, an email `via…com`. Enough to locate the
    problem; not enough to leak it into a report or a terminal transcript.
    """
    stripped = text.strip()
    if len(stripped) <= keep * 2:
        return "…" * len(stripped)
    return f"{stripped[:keep]}…{stripped[-keep:]}"


def git_file_list(mode: str, repo_root: Path) -> List[Path]:
    """Read a NUL-delimited file list from git. Never shell-split."""
    if mode == "tracked":
        cmd = ["git", "ls-files", "-z"]
    elif mode == "staged":
        cmd = ["git", "diff", "--cached", "--name-only", "-z"]
    else:
        raise ScanError(f"unknown git mode: {mode}")

    try:
        completed = subprocess.run(
            cmd, cwd=str(repo_root), capture_output=True, check=True
        )
    except (OSError, subprocess.CalledProcessError) as exc:
        raise ScanError(f"git file listing failed: {exc}") from exc

    names = [n for n in completed.stdout.decode("utf-8", "replace").split("\0") if n]
    return [repo_root / n for n in names]


def walk_paths(inputs: List[str], excludes: List[str]) -> List[Path]:
    files: List[Path] = []
    for raw in inputs:
        path = Path(raw)
        if not path.exists():
            raise ScanError(f"scope path does not exist: {raw}")
        if path.is_file():
            files.append(path)
            continue
        for candidate in sorted(path.rglob("*")):
            if candidate.is_symlink():
                continue
            if not candidate.is_file():
                continue
            if any(part in excludes for part in candidate.parts):
                continue
            files.append(candidate)
    return files


def select_files(args: argparse.Namespace, repo_root: Path) -> List[Path]:
    excludes = list(DEFAULT_EXCLUDES) + list(args.exclude or [])

    if args.tracked_only:
        candidates = git_file_list("tracked", repo_root)
    elif args.staged_only:
        candidates = git_file_list("staged", repo_root)
    else:
        candidates = walk_paths(args.paths or ["."], excludes)

    selected: List[Path] = []
    for path in candidates:
        if any(part in excludes for part in path.parts):
            continue
        if path.suffix.lower() in BINARY_SUFFIXES:
            continue
        if not path.exists() or not path.is_file():
            continue
        selected.append(path)
    return selected


def compile_pattern(pattern: str, ignore_case: bool) -> "re.Pattern[str]":
    flags = re.IGNORECASE if ignore_case else 0
    try:
        return re.compile(pattern, flags)
    except re.error as exc:
        raise ScanError(f"invalid regex: {exc}") from exc


def scan_files(
    files: List[Path], regex: "re.Pattern[str]", show_values: bool
) -> List[Dict[str, Any]]:
    findings: List[Dict[str, Any]] = []
    for path in files:
        try:
            text = path.read_text(encoding="utf-8")
        except (OSError, UnicodeDecodeError):
            continue
        for number, line in enumerate(text.splitlines(), start=1):
            for match in regex.finditer(line):
                value = match.group(0)
                findings.append(
                    {
                        "path": str(path),
                        "line": number,
                        "match": value if show_values else redact(value),
                    }
                )
    return findings


def prove_control(
    regex: "re.Pattern[str]", control_text: str
) -> Tuple[bool, Optional[str]]:
    """
    Create a temporary fixture, prove the pattern matches it, delete it.

    The fixture is removed in `finally` so it cannot survive an exception —
    a leaked fixture containing planted PII shapes would be worse than the
    problem this tool exists to solve.
    """
    handle = tempfile.NamedTemporaryFile(
        mode="w", suffix=".control.txt", delete=False, encoding="utf-8"
    )
    fixture = Path(handle.name)
    try:
        handle.write(control_text)
        handle.close()
        detected = bool(regex.search(fixture.read_text(encoding="utf-8")))
        return detected, str(fixture)
    finally:
        try:
            fixture.unlink()
        except OSError:
            pass


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Scan the repository with a MANDATORY positive control. A zero "
            "result is reported as INVALID unless the pattern first matches a "
            "planted fixture."
        )
    )
    parser.add_argument("--pattern", required=True, help="Python regex to search for")
    parser.add_argument(
        "--control",
        required=True,
        help="text planted in a temporary fixture that the pattern MUST match",
    )
    parser.add_argument("paths", nargs="*", help="files or directories (default: .)")
    parser.add_argument("--tracked-only", action="store_true", help="git ls-files -z")
    parser.add_argument(
        "--staged-only", action="store_true", help="git diff --cached --name-only -z"
    )
    parser.add_argument("--exclude", action="append", help="additional excluded path part")
    parser.add_argument("--ignore-case", action="store_true")
    parser.add_argument(
        "--show-values",
        action="store_true",
        help="print full matches (default redacts; use only for non-sensitive patterns)",
    )
    parser.add_argument("--json", action="store_true")
    parser.add_argument("--label", default="scan", help="name shown in the report")
    args = parser.parse_args(argv)

    if args.tracked_only and args.staged_only:
        print("ERROR: --tracked-only and --staged-only are mutually exclusive", file=sys.stderr)
        return EXIT_ERROR

    repo_root = Path.cwd()
    shell_runtime = f"python{sys.version_info.major}.{sys.version_info.minor}"

    try:
        regex = compile_pattern(args.pattern, args.ignore_case)
        control_ok, fixture_path = prove_control(regex, args.control)
        files = select_files(args, repo_root)
    except ScanError as exc:
        report: Dict[str, Any] = {
            "label": args.label,
            "verdict": "RUNTIME ERROR",
            "error": str(exc),
        }
        print(json.dumps(report, indent=2) if args.json else f"ERROR: {exc}", file=sys.stderr)
        return EXIT_ERROR

    if not control_ok:
        verdict = "INVALID SCAN — CONTROL NOT PROVEN"
        report = {
            "label": args.label,
            "verdict": verdict,
            "control_detected": False,
            "note": "the pattern did not match its own control fixture; discard any result",
        }
        print(json.dumps(report, indent=2) if args.json else f"{verdict}: {args.label}", file=sys.stderr)
        return EXIT_CONTROL_FAILED

    if not files:
        verdict = "NO FILES SCANNED — empty scope is not a clean result"
        report = {
            "label": args.label,
            "verdict": verdict,
            "control_detected": True,
            "files_scanned": 0,
        }
        print(json.dumps(report, indent=2) if args.json else f"{verdict}: {args.label}", file=sys.stderr)
        return EXIT_NO_FILES

    findings = scan_files(files, regex, args.show_values)

    scope = (
        "tracked-only" if args.tracked_only
        else "staged-only" if args.staged_only
        else ", ".join(args.paths or ["."])
    )
    report = {
        "label": args.label,
        "verdict": "MATCHES FOUND" if findings else "CLEAN (control proven)",
        "scope": scope,
        "file_source": "git -z" if (args.tracked_only or args.staged_only) else "pathlib walk",
        "matcher": "python re",
        "runtime": shell_runtime,
        "control_detected": True,
        "control_fixture": fixture_path,
        "control_fixture_removed": True,
        "files_scanned": len(files),
        "matches": len(findings),
        "exclusions": DEFAULT_EXCLUDES + list(args.exclude or []),
        "findings": findings,
        "exit_status": EXIT_MATCHES if findings else EXIT_CLEAN,
    }

    if args.json:
        print(json.dumps(report, indent=2))
    else:
        print(f"[{args.label}] {report['verdict']}")
        print(f"  scope       : {report['scope']}")
        print(f"  file source : {report['file_source']}")
        print(f"  matcher     : {report['matcher']}   runtime: {report['runtime']}")
        print(f"  control     : PROVEN (fixture created and removed)")
        print(f"  files       : {report['files_scanned']}")
        print(f"  matches     : {report['matches']}")
        for finding in findings:
            print(f"    {finding['path']}:{finding['line']}  {finding['match']}")

    return EXIT_MATCHES if findings else EXIT_CLEAN


if __name__ == "__main__":
    sys.exit(main())
