#!/usr/bin/env python3
"""
Via-We document frontmatter auditor.

WHY THIS EXISTS
---------------
A naive scan such as `rg '^status:' <file>` or `grep '^status:' <file>` will
classify the ACTIVE governance policy as `superseded`, because that document
contains a sample YAML block in its own body demonstrating how to mark a
document superseded. The match is content, not metadata.

This auditor reads status ONLY from the opening YAML frontmatter block:
  * the block must begin at line 1 with a bare `---`
  * parsing stops at the matching closing `---`
  * any `status:` appearing after that block is content and is IGNORED

Each declared status is then mapped onto a canonical lifecycle class, so
`current` and `accepted` both report as ACTIVE and an unrecognised value is
reported rather than silently accepted.

Stdlib only. No dependencies. Python owns file enumeration, so behaviour is
identical under zsh, bash and CI, and filenames containing spaces or shell
metacharacters are handled safely.

Exit codes
----------
  0  audit completed; no malformed frontmatter and no policy violation
  1  malformed opening frontmatter, or an explicit policy violation
  2  usage / runtime error (bad path, unreadable input)

Note that STATUS-UNDECLARED is NOT an error. Many legitimate Via-We documents
(root contracts, prompts) carry no frontmatter; they are classified via the
authority map, not via this tool.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

FRONTMATTER_FENCE = "---"
MARKDOWN_SUFFIXES = {".md", ".markdown", ".mdx"}

# Directories never walked. `.git` is excluded because its contents are not
# project documents; the vendored skill trees are excluded because they are
# third-party and are not governed by Via-We's authority model.
SKIP_DIRS = {".git", ".agents", ".claude", "node_modules", ".next", "private"}

STATUS_UNDECLARED = "STATUS-UNDECLARED"

# Canonical status vocabulary, defined in
# docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md §4.
#
# `status:` is not free text. Every declared value maps to exactly one
# lifecycle class, so "is this document active?" has one deterministic answer
# rather than a per-reader judgement about whether `current`, `live` or
# `active` meant the same thing. An unrecognised value is REPORTED, never
# guessed at — that is how a typo becomes a silent authority change.
STATUS_LIFECYCLE = {
    "current": "ACTIVE",
    "accepted": "ACTIVE",
    "proposed": "PROPOSED",
    "superseded": "SUPERSEDED",
    "historical": "HISTORICAL",
}

LIFECYCLE_UNDECLARED = "UNDECLARED"
LIFECYCLE_UNRECOGNISED = "UNRECOGNISED-STATUS-VALUE"


def classify_lifecycle(status: str) -> str:
    """Map a declared status value onto its lifecycle class."""
    if status == STATUS_UNDECLARED:
        return LIFECYCLE_UNDECLARED
    return STATUS_LIFECYCLE.get(status.strip().lower(), LIFECYCLE_UNRECOGNISED)


class FrontmatterResult:
    """One audited document."""

    def __init__(self, path: Path) -> None:
        self.path = path
        self.status: str = STATUS_UNDECLARED
        self.authority: Optional[str] = None
        self.has_frontmatter: bool = False
        self.malformed: bool = False
        self.malformed_reason: Optional[str] = None
        self.duplicate_keys: List[str] = []
        self.body_status_mentions: int = 0
        self.read_error: Optional[str] = None

    @property
    def lifecycle(self) -> str:
        return classify_lifecycle(self.status)

    @property
    def authority_label(self) -> Optional[str]:
        """`1` renders as `LEVEL 1`; a non-numeric value is passed through."""
        if self.authority is None or not self.authority.strip():
            return None
        value = self.authority.strip()
        return f"LEVEL {value}" if value.isdigit() else value

    def to_dict(self) -> Dict[str, Any]:
        return {
            "path": str(self.path),
            "status": self.status,
            "lifecycle": self.lifecycle,
            "authority": self.authority,
            "authority_label": self.authority_label,
            "has_frontmatter": self.has_frontmatter,
            "malformed": self.malformed,
            "malformed_reason": self.malformed_reason,
            "duplicate_keys": self.duplicate_keys,
            "body_status_mentions": self.body_status_mentions,
            "read_error": self.read_error,
        }


def split_frontmatter(text: str) -> Tuple[Optional[List[str]], List[str], Optional[str]]:
    """
    Return (frontmatter_lines, body_lines, malformed_reason).

    frontmatter_lines is None when the document has no opening block at all,
    which is a legitimate state, not an error.
    """
    lines = text.splitlines()

    if not lines:
        return None, [], None

    # The opening fence must be the very first line. A `---` appearing later in
    # the document is a horizontal rule or an example, never metadata.
    if lines[0].strip() != FRONTMATTER_FENCE:
        return None, lines, None

    for index in range(1, len(lines)):
        if lines[index].strip() == FRONTMATTER_FENCE:
            return lines[1:index], lines[index + 1 :], None

    return None, lines, "opening '---' has no matching closing '---'"


def parse_simple_metadata(
    frontmatter_lines: List[str],
) -> Tuple[Dict[str, str], List[str], Optional[str]]:
    """
    Parse only the flat `key: value` pairs Via-We actually uses.

    This is deliberately NOT a YAML parser. Nested structures, anchors, block
    scalars and flow collections are out of scope; encountering one is reported
    rather than guessed at.
    """
    metadata: Dict[str, str] = {}
    duplicates: List[str] = []

    for raw in frontmatter_lines:
        line = raw.rstrip()

        if not line.strip() or line.lstrip().startswith("#"):
            continue

        # A nested key (indented) belongs to a structure this parser does not
        # model. Skip it rather than mis-attributing it to the top level.
        if line[:1].isspace():
            continue

        if ":" not in line:
            return metadata, duplicates, f"unparseable frontmatter line: {line[:40]!r}"

        key, _, value = line.partition(":")
        key = key.strip()
        value = value.strip().strip("'\"")

        if not key:
            return metadata, duplicates, "empty key in frontmatter"

        if key in metadata:
            duplicates.append(key)

        metadata[key] = value

    return metadata, duplicates, None


def count_body_status_mentions(body_lines: List[str]) -> int:
    """
    Count `status:` occurrences in the body.

    Purely informational. It exists so the auditor can DEMONSTRATE that a
    document containing a body-level `status: superseded` still reports its
    true opening status — the exact false positive this tool prevents.
    """
    return sum(1 for line in body_lines if line.lstrip().startswith("status:"))


def audit_file(path: Path) -> FrontmatterResult:
    result = FrontmatterResult(path)

    try:
        text = path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as exc:
        result.read_error = f"{type(exc).__name__}: {exc}"
        return result

    frontmatter_lines, body_lines, malformed_reason = split_frontmatter(text)

    if malformed_reason:
        result.malformed = True
        result.malformed_reason = malformed_reason
        result.body_status_mentions = count_body_status_mentions(body_lines)
        return result

    result.body_status_mentions = count_body_status_mentions(body_lines)

    if frontmatter_lines is None:
        return result

    result.has_frontmatter = True
    metadata, duplicates, parse_error = parse_simple_metadata(frontmatter_lines)

    if parse_error:
        result.malformed = True
        result.malformed_reason = parse_error
        return result

    result.duplicate_keys = duplicates
    result.status = metadata.get("status") or STATUS_UNDECLARED
    result.authority = metadata.get("authority")

    return result


def collect_paths(inputs: List[str]) -> Tuple[List[Path], List[str]]:
    """Expand inputs to markdown files. Python enumerates — never the shell."""
    files: List[Path] = []
    errors: List[str] = []

    for raw in inputs:
        path = Path(raw)

        if not path.exists():
            errors.append(f"path does not exist: {raw}")
            continue

        if path.is_file():
            files.append(path)
            continue

        for candidate in sorted(path.rglob("*")):
            if not candidate.is_file():
                continue
            if candidate.suffix.lower() not in MARKDOWN_SUFFIXES:
                continue
            if any(part in SKIP_DIRS for part in candidate.parts):
                continue
            files.append(candidate)

    return files, errors


def render_text(results: List[FrontmatterResult], errors: List[str]) -> None:
    width = max((len(str(r.path)) for r in results), default=4)
    width = min(width, 66)

    print(
        f"{'PATH'.ljust(width)}  {'STATUS'.ljust(18)}  "
        f"{'LIFECYCLE'.ljust(25)}  {'AUTHORITY'.ljust(9)}  NOTES"
    )
    print(
        f"{'-' * width}  {'-' * 18}  {'-' * 25}  {'-' * 9}  {'-' * 40}"
    )

    for result in results:
        notes: List[str] = []
        if result.read_error:
            notes.append(f"UNREADABLE ({result.read_error})")
        if result.malformed:
            notes.append(f"MALFORMED: {result.malformed_reason}")
        if result.duplicate_keys:
            notes.append(f"DUPLICATE KEYS: {', '.join(result.duplicate_keys)}")
        if result.lifecycle == LIFECYCLE_UNRECOGNISED:
            notes.append(f"status value {result.status!r} is not in the canonical vocabulary")
        if result.body_status_mentions:
            notes.append(
                f"{result.body_status_mentions} body-level 'status:' mention(s) IGNORED"
            )
        if not result.has_frontmatter and not result.malformed:
            notes.append("no opening frontmatter")

        print(
            f"{str(result.path)[:width].ljust(width)}  "
            f"{result.status.ljust(18)}  "
            f"{result.lifecycle.ljust(25)}  "
            f"{(result.authority_label or '—').ljust(9)}  "
            f"{'; '.join(notes)}"
        )

    for error in errors:
        print(f"ERROR: {error}", file=sys.stderr)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Audit Via-We document status from OPENING YAML frontmatter only. "
            "A 'status:' key elsewhere in the body is content and is ignored."
        )
    )
    parser.add_argument("paths", nargs="+", help="files or directories to audit")
    parser.add_argument("--json", action="store_true", help="machine-readable output")
    parser.add_argument(
        "--require-frontmatter",
        action="store_true",
        help="treat STATUS-UNDECLARED as a policy violation (exit 1)",
    )
    parser.add_argument(
        "--strict-vocabulary",
        action="store_true",
        help=(
            "treat a status value outside the canonical vocabulary "
            "(current, accepted, proposed, superseded, historical) as a "
            "policy violation (exit 1)"
        ),
    )
    args = parser.parse_args(argv)

    files, errors = collect_paths(args.paths)

    if errors and not files:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 2

    results = [audit_file(path) for path in files]

    if args.json:
        print(
            json.dumps(
                {
                    "documents": [r.to_dict() for r in results],
                    "errors": errors,
                    "counts": {
                        "audited": len(results),
                        "malformed": sum(1 for r in results if r.malformed),
                        "undeclared": sum(
                            1 for r in results if r.status == STATUS_UNDECLARED
                        ),
                        "unrecognised_status": sum(
                            1 for r in results if r.lifecycle == LIFECYCLE_UNRECOGNISED
                        ),
                        "active": sum(1 for r in results if r.lifecycle == "ACTIVE"),
                        "unreadable": sum(1 for r in results if r.read_error),
                    },
                },
                indent=2,
            )
        )
    else:
        render_text(results, errors)

    violation = any(r.malformed or r.read_error for r in results)
    if args.require_frontmatter:
        violation = violation or any(r.status == STATUS_UNDECLARED for r in results)
    if args.strict_vocabulary:
        violation = violation or any(
            r.lifecycle == LIFECYCLE_UNRECOGNISED for r in results
        )

    return 1 if violation else 0


if __name__ == "__main__":
    sys.exit(main())
