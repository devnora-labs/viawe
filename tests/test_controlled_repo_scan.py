#!/usr/bin/env python3
"""
Tests for scripts/controlled_repo_scan.py

The decisive tests are `test_control_failure_invalidates_scan` and
`test_empty_scope_is_not_clean`: both assert that a zero-match result is
NOT reported as clean when the scan could not have found anything. Four real
false-clean results on this project came from exactly that confusion.

`test_zsh_invocation` and `test_bash_invocation` run the tool from both
shells, because two of the four failures were shell-specific (`mapfile` is
bash-only; zsh does not word-split unquoted parameters).

Stdlib unittest. Run:
    python3 -m unittest discover -s tests -v
"""

from __future__ import annotations

import importlib.util
import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT = REPO_ROOT / "scripts" / "controlled_repo_scan.py"

spec = importlib.util.spec_from_file_location("controlled_repo_scan", SCRIPT)
scanner = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(scanner)

PHONE_PATTERN = r"\+91[ -]?[0-9]{10}"
PHONE_CONTROL = "planted +91 9999999999 control"


class ScannerUnitTests(unittest.TestCase):
    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)

    def tearDown(self) -> None:
        self._tmp.cleanup()

    # 1 — positive control detected
    def test_positive_control_detected(self) -> None:
        regex = scanner.compile_pattern(PHONE_PATTERN, False)
        detected, fixture = scanner.prove_control(regex, PHONE_CONTROL)
        self.assertTrue(detected)
        self.assertFalse(Path(fixture).exists(), "fixture must be removed")

    # 2 — control failure must invalidate the scan
    def test_control_failure_detected(self) -> None:
        regex = scanner.compile_pattern(r"NEVER_MATCHES_ANYTHING_XYZ", False)
        detected, _ = scanner.prove_control(regex, PHONE_CONTROL)
        self.assertFalse(detected)

    # 10/11 — fixture cleanup after success AND after failure
    def test_fixture_removed_after_success(self) -> None:
        regex = scanner.compile_pattern(PHONE_PATTERN, False)
        _, fixture = scanner.prove_control(regex, PHONE_CONTROL)
        self.assertFalse(Path(fixture).exists())

    def test_fixture_removed_after_non_match(self) -> None:
        regex = scanner.compile_pattern(r"ZZZ_NO_MATCH", False)
        _, fixture = scanner.prove_control(regex, PHONE_CONTROL)
        self.assertFalse(Path(fixture).exists())

    # 8 — regex engine error
    def test_invalid_regex_raises(self) -> None:
        with self.assertRaises(scanner.ScanError):
            scanner.compile_pattern(r"([unclosed", False)

    # 9 — redaction
    def test_redaction_hides_the_value(self) -> None:
        redacted = scanner.redact("+919876543210")
        self.assertNotIn("9876543210", redacted)
        self.assertIn("…", redacted)

    def test_redaction_of_short_value_is_total(self) -> None:
        self.assertNotIn("abc", scanner.redact("abcd", keep=3))

    # 3 — filenames containing spaces
    def test_filename_with_spaces_is_scanned(self) -> None:
        target = self.tmp / "a file with spaces.md"
        target.write_text("contact +91 9876543210 here\n", encoding="utf-8")
        regex = scanner.compile_pattern(PHONE_PATTERN, False)
        findings = scanner.scan_files([target], regex, show_values=False)
        self.assertEqual(len(findings), 1)
        self.assertNotIn("9876543210", findings[0]["match"])

    def test_binary_suffixes_skipped(self) -> None:
        (self.tmp / "img.png").write_bytes(b"\x89PNG\r\n\x1a\n")
        (self.tmp / "doc.md").write_text("text\n", encoding="utf-8")
        args = _Namespace(paths=[str(self.tmp)])
        files = scanner.select_files(args, self.tmp)
        names = [f.name for f in files]
        self.assertIn("doc.md", names)
        self.assertNotIn("img.png", names)

    # 5 — unmatched path input
    def test_missing_path_raises(self) -> None:
        with self.assertRaises(scanner.ScanError):
            scanner.walk_paths([str(self.tmp / "does-not-exist")], [])


class _Namespace:
    """Minimal stand-in for argparse.Namespace in select_files tests."""

    def __init__(self, paths, tracked_only=False, staged_only=False, exclude=None):
        self.paths = paths
        self.tracked_only = tracked_only
        self.staged_only = staged_only
        self.exclude = exclude


class CommandLineTests(unittest.TestCase):
    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)
        (self.tmp / "clean.md").write_text("nothing sensitive here\n", encoding="utf-8")

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def run_cli(self, *args: str, cwd: Path = None) -> subprocess.CompletedProcess:
        return subprocess.run(
            [sys.executable, str(SCRIPT), *args],
            capture_output=True,
            text=True,
            cwd=str(cwd or REPO_ROOT),
        )

    def test_clean_scan_exits_zero_with_control_proven(self) -> None:
        proc = self.run_cli(
            "--pattern", PHONE_PATTERN, "--control", PHONE_CONTROL,
            "--json", "--label", "phone", str(self.tmp),
        )
        self.assertEqual(proc.returncode, scanner.EXIT_CLEAN, proc.stderr)
        payload = json.loads(proc.stdout)
        self.assertTrue(payload["control_detected"])
        self.assertTrue(payload["control_fixture_removed"])
        self.assertEqual(payload["matches"], 0)
        self.assertIn("CLEAN", payload["verdict"])

    def test_matches_exit_one_and_are_redacted(self) -> None:
        (self.tmp / "leak.md").write_text("call +91 9876543210\n", encoding="utf-8")
        proc = self.run_cli(
            "--pattern", PHONE_PATTERN, "--control", PHONE_CONTROL,
            "--json", str(self.tmp),
        )
        self.assertEqual(proc.returncode, scanner.EXIT_MATCHES)
        payload = json.loads(proc.stdout)
        self.assertEqual(payload["matches"], 1)
        self.assertNotIn("9876543210", proc.stdout)

    # 2 — control failure invalidates the whole scan
    def test_control_failure_invalidates_scan(self) -> None:
        proc = self.run_cli(
            "--pattern", r"\+91[0-9]{10}",
            "--control", "this control text contains no phone number",
            "--json", str(self.tmp),
        )
        self.assertEqual(proc.returncode, scanner.EXIT_CONTROL_FAILED)
        self.assertIn("CONTROL NOT PROVEN", proc.stderr)

    # 4 — empty scope is not a clean result
    def test_empty_scope_is_not_clean(self) -> None:
        empty = self.tmp / "empty"
        empty.mkdir()
        proc = self.run_cli(
            "--pattern", PHONE_PATTERN, "--control", PHONE_CONTROL,
            "--json", str(empty),
        )
        self.assertEqual(proc.returncode, scanner.EXIT_NO_FILES)
        self.assertIn("NO FILES SCANNED", proc.stderr)

    def test_invalid_regex_exits_error(self) -> None:
        proc = self.run_cli("--pattern", "([bad", "--control", "x", str(self.tmp))
        self.assertEqual(proc.returncode, scanner.EXIT_ERROR)

    # 6 — tracked-only selection
    def test_tracked_only_selection(self) -> None:
        proc = self.run_cli(
            "--pattern", r"VIA-WE", "--control", "VIA-WE control",
            "--tracked-only", "--json", "--show-values",
        )
        self.assertIn(proc.returncode, (scanner.EXIT_CLEAN, scanner.EXIT_MATCHES))
        payload = json.loads(proc.stdout)
        self.assertEqual(payload["file_source"], "git -z")
        self.assertGreater(payload["files_scanned"], 0)

    # 7 — staged-only selection
    def test_staged_only_selection_runs(self) -> None:
        proc = self.run_cli(
            "--pattern", r"VIA-WE", "--control", "VIA-WE control",
            "--staged-only", "--json",
        )
        self.assertIn(
            proc.returncode,
            (scanner.EXIT_CLEAN, scanner.EXIT_MATCHES, scanner.EXIT_NO_FILES),
        )

    def test_mutually_exclusive_modes_rejected(self) -> None:
        proc = self.run_cli(
            "--pattern", "x", "--control", "x", "--tracked-only", "--staged-only"
        )
        self.assertEqual(proc.returncode, scanner.EXIT_ERROR)

    # working-tree scope — the scope used for development and final review,
    # because it is the only one that sees untracked new documents and tests
    def test_working_tree_scope_sees_untracked_files(self) -> None:
        proc = self.run_cli(
            "--pattern", r"VIA-WE", "--control", "VIA-WE control", "--json", ".",
        )
        self.assertIn(proc.returncode, (scanner.EXIT_CLEAN, scanner.EXIT_MATCHES))
        payload = json.loads(proc.stdout)
        self.assertEqual(payload["file_source"], "pathlib walk")
        self.assertEqual(payload["scope"], ".")
        self.assertGreater(payload["files_scanned"], 0)

        tracked = self.run_cli(
            "--pattern", r"VIA-WE", "--control", "VIA-WE control",
            "--tracked-only", "--json",
        )
        tracked_count = json.loads(tracked.stdout)["files_scanned"]
        self.assertGreaterEqual(
            payload["files_scanned"],
            tracked_count,
            "working-tree scope must never see fewer files than tracked-only",
        )


class SyntheticPhoneFixtureTests(unittest.TestCase):
    """
    The repository deliberately contains phone-SHAPED strings: positive-control
    constants and redaction fixtures. They are synthetic and they must stay
    synthetic.

    This is NOT an allowlist. Nothing is excluded from any scan. The assertion
    is about LOCATION: a phone-shaped value may live only in validation tooling.
    If one ever appears in a governance, truth, brand or review document, this
    test fails and names the file.
    """

    PHONE_SHAPE = r"\+?91[ -]?[0-9]{10}|(?<![0-9])[6-9][0-9]{9}(?![0-9])"

    # Synthetic by construction: a repdigit run and the canonical ascending
    # dummy. Neither can be a real allocated number.
    SYNTHETIC_SUFFIXES = ("9999999999", "9876543210")

    ALLOWED_LOCATIONS = (
        "tests/",
        "scripts/",
        "docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md",
    )

    def test_phone_shaped_values_are_synthetic_and_confined_to_tooling(self) -> None:
        regex = scanner.compile_pattern(self.PHONE_SHAPE, False)
        detected, fixture = scanner.prove_control(regex, "control +91 9999999999 here")
        self.assertTrue(detected, "positive control must be proven first")
        self.assertFalse(Path(fixture).exists())

        files = scanner.walk_paths([str(REPO_ROOT)], scanner.DEFAULT_EXCLUDES)
        files = [f for f in files if f.suffix.lower() not in scanner.BINARY_SUFFIXES]
        self.assertGreater(len(files), 0, "empty scope is not a clean result")

        findings = scanner.scan_files(files, regex, show_values=True)

        for finding in findings:
            rel = str(Path(finding["path"]).relative_to(REPO_ROOT))
            value = finding["match"]

            self.assertTrue(
                value.endswith(self.SYNTHETIC_SUFFIXES),
                f"non-synthetic phone-shaped value in {rel}:{finding['line']} — "
                f"shape {scanner.redact(value)}",
            )
            self.assertTrue(
                rel.startswith(self.ALLOWED_LOCATIONS),
                f"phone-shaped value outside validation tooling: {rel}:{finding['line']}",
            )

    def test_scanner_redacts_synthetic_values_in_output(self) -> None:
        for suffix in self.SYNTHETIC_SUFFIXES:
            with self.subTest(value=suffix):
                self.assertNotIn(suffix, scanner.redact(f"+91 {suffix}"))


class CrossShellTests(unittest.TestCase):
    """
    Two of the four recorded false-clean results were shell-specific.
    These assert identical behaviour from zsh and bash.
    """

    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)
        (self.tmp / "a file with spaces.md").write_text(
            "call +91 9876543210\n", encoding="utf-8"
        )

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def _shell_run(self, shell: str) -> subprocess.CompletedProcess:
        command = (
            f'{sys.executable} "{SCRIPT}" --pattern "{PHONE_PATTERN}" '
            f'--control "{PHONE_CONTROL}" --json "{self.tmp}"'
        )
        return subprocess.run(
            [shell, "-c", command], capture_output=True, text=True, cwd=str(REPO_ROOT)
        )

    @unittest.skipUnless(shutil.which("zsh"), "zsh unavailable — limitation recorded")
    def test_zsh_invocation(self) -> None:
        proc = self._shell_run("zsh")
        self.assertEqual(proc.returncode, scanner.EXIT_MATCHES, proc.stderr)
        self.assertEqual(json.loads(proc.stdout)["matches"], 1)

    @unittest.skipUnless(shutil.which("bash"), "bash unavailable — limitation recorded")
    def test_bash_invocation(self) -> None:
        proc = self._shell_run("bash")
        self.assertEqual(proc.returncode, scanner.EXIT_MATCHES, proc.stderr)
        self.assertEqual(json.loads(proc.stdout)["matches"], 1)

    @unittest.skipUnless(
        shutil.which("zsh") and shutil.which("bash"), "both shells required"
    )
    def test_zsh_and_bash_agree(self) -> None:
        zsh_out = json.loads(self._shell_run("zsh").stdout)
        bash_out = json.loads(self._shell_run("bash").stdout)
        self.assertEqual(zsh_out["matches"], bash_out["matches"])
        self.assertEqual(zsh_out["files_scanned"], bash_out["files_scanned"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
