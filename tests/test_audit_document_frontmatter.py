#!/usr/bin/env python3
"""
Tests for scripts/audit-document-frontmatter.py

The decisive test is `test_body_template_status_is_ignored`: a document whose
BODY contains `status: superseded` — exactly like the active Via-We governance
policy, which documents that very template — must still report its opening
status. That false positive is why this tool exists.

Stdlib unittest. No dependencies. Run:
    python3 -m unittest discover -s tests -v
"""

from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT = REPO_ROOT / "scripts" / "audit-document-frontmatter.py"


def load_module():
    """Import a module whose filename contains hyphens."""
    spec = importlib.util.spec_from_file_location("frontmatter_auditor", SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


audit = load_module()


class FrontmatterParsingTests(unittest.TestCase):
    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def write(self, name: str, text: str) -> Path:
        path = self.tmp / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        return path

    # 1 — valid active frontmatter
    def test_valid_active_frontmatter(self) -> None:
        path = self.write("active.md", "---\nstatus: current\nauthority: 1\n---\n\n# Doc\n")
        result = audit.audit_file(path)
        self.assertEqual(result.status, "current")
        self.assertEqual(result.authority, "1")
        self.assertTrue(result.has_frontmatter)
        self.assertFalse(result.malformed)

    # 2 — valid superseded frontmatter
    def test_valid_superseded_frontmatter(self) -> None:
        path = self.write("old.md", "---\nstatus: superseded\n---\n\n# Old\n")
        self.assertEqual(audit.audit_file(path).status, "superseded")

    # 3 — THE DECISIVE TEST: body template must not override opening status
    def test_body_template_status_is_ignored(self) -> None:
        text = (
            "---\n"
            "status: current\n"
            "---\n"
            "\n"
            "# Governance policy\n"
            "\n"
            "Add a visible notice:\n"
            "\n"
            "```yaml\n"
            "status: superseded\n"
            "superseded_by: docs/product/TRUTH.md\n"
            "superseded_on: 2026-08-01\n"
            "```\n"
        )
        path = self.write("policy.md", text)
        result = audit.audit_file(path)
        self.assertEqual(
            result.status,
            "current",
            "body-level 'status: superseded' must NOT override opening frontmatter",
        )
        self.assertEqual(result.body_status_mentions, 1)

    # 3b — the same, with NO opening frontmatter at all (the real policy's shape)
    def test_body_template_without_frontmatter_is_undeclared_not_superseded(self) -> None:
        text = "# Policy\n\n```yaml\nstatus: superseded\n```\n"
        path = self.write("nofm-policy.md", text)
        result = audit.audit_file(path)
        self.assertEqual(result.status, audit.STATUS_UNDECLARED)
        self.assertNotEqual(result.status, "superseded")
        self.assertEqual(result.body_status_mentions, 1)

    # 4 — no frontmatter
    def test_no_frontmatter_is_undeclared_and_not_an_error(self) -> None:
        path = self.write("plain.md", "# Plain\n\nText.\n")
        result = audit.audit_file(path)
        self.assertEqual(result.status, audit.STATUS_UNDECLARED)
        self.assertFalse(result.has_frontmatter)
        self.assertFalse(result.malformed)

    # 5 — malformed opening frontmatter
    def test_unterminated_frontmatter_is_malformed(self) -> None:
        path = self.write("bad.md", "---\nstatus: current\n\n# No closing fence\n")
        result = audit.audit_file(path)
        self.assertTrue(result.malformed)
        self.assertIn("closing", (result.malformed_reason or ""))

    def test_unparseable_frontmatter_line_is_malformed(self) -> None:
        path = self.write("bad2.md", "---\nthis line has no colon\n---\n\n# Doc\n")
        self.assertTrue(audit.audit_file(path).malformed)

    # 6 — duplicate status key
    def test_duplicate_status_key_reported(self) -> None:
        path = self.write("dup.md", "---\nstatus: current\nstatus: superseded\n---\n\n# Doc\n")
        result = audit.audit_file(path)
        self.assertIn("status", result.duplicate_keys)

    # 7 — filename containing spaces
    def test_filename_with_spaces(self) -> None:
        path = self.write("a file with spaces.md", "---\nstatus: current\n---\n\n# Doc\n")
        self.assertEqual(audit.audit_file(path).status, "current")

    # 8 — nested directory input
    def test_nested_directory_collection(self) -> None:
        self.write("a.md", "---\nstatus: current\n---\n")
        self.write("nested/deep/b.md", "---\nstatus: superseded\n---\n")
        self.write("nested/ignore.txt", "not markdown")
        files, errors = audit.collect_paths([str(self.tmp)])
        self.assertEqual(errors, [])
        self.assertEqual(len(files), 2)

    def test_frontmatter_fence_must_be_line_one(self) -> None:
        """A `---` after a blank line is a horizontal rule, not frontmatter."""
        path = self.write("late.md", "\n---\nstatus: superseded\n---\n")
        self.assertEqual(audit.audit_file(path).status, audit.STATUS_UNDECLARED)


class LifecycleVocabularyTests(unittest.TestCase):
    """
    `status:` is a closed vocabulary. Lifecycle is DERIVED from it, never
    re-typed by a reader, so "is this document active?" has one answer.
    """

    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def write(self, name: str, text: str) -> Path:
        path = self.tmp / name
        path.write_text(text, encoding="utf-8")
        return path

    def test_canonical_values_map_to_lifecycle(self) -> None:
        expected = {
            "current": "ACTIVE",
            "accepted": "ACTIVE",
            "proposed": "PROPOSED",
            "superseded": "SUPERSEDED",
            "historical": "HISTORICAL",
        }
        for status, lifecycle in expected.items():
            with self.subTest(status=status):
                path = self.write(f"{status}.md", f"---\nstatus: {status}\n---\n")
                self.assertEqual(audit.audit_file(path).lifecycle, lifecycle)

    def test_undeclared_maps_to_undeclared_not_active(self) -> None:
        path = self.write("plain.md", "# Plain\n")
        result = audit.audit_file(path)
        self.assertEqual(result.lifecycle, audit.LIFECYCLE_UNDECLARED)
        self.assertNotEqual(result.lifecycle, "ACTIVE")

    def test_unrecognised_status_is_reported_not_assumed_active(self) -> None:
        """A typo must never be silently promoted to ACTIVE."""
        path = self.write("typo.md", "---\nstatus: activ\n---\n")
        result = audit.audit_file(path)
        self.assertEqual(result.lifecycle, audit.LIFECYCLE_UNRECOGNISED)
        self.assertNotEqual(result.lifecycle, "ACTIVE")

    def test_authority_renders_as_level(self) -> None:
        path = self.write("auth.md", "---\nstatus: current\nauthority: 1\n---\n")
        self.assertEqual(audit.audit_file(path).authority_label, "LEVEL 1")

    def test_absent_authority_is_none(self) -> None:
        path = self.write("noauth.md", "---\nstatus: current\n---\n")
        self.assertIsNone(audit.audit_file(path).authority_label)

    def test_strict_vocabulary_flag_controls_exit_code(self) -> None:
        self.write("typo.md", "---\nstatus: live\n---\n")
        lenient = subprocess.run(
            [sys.executable, str(SCRIPT), str(self.tmp), "--json"],
            capture_output=True, text=True,
        )
        strict = subprocess.run(
            [sys.executable, str(SCRIPT), str(self.tmp), "--json", "--strict-vocabulary"],
            capture_output=True, text=True,
        )
        self.assertEqual(lenient.returncode, 0, "unknown values are reported by default")
        self.assertEqual(strict.returncode, 1, "--strict-vocabulary must fail the audit")
        self.assertEqual(json.loads(strict.stdout)["counts"]["unrecognised_status"], 1)


class RealGovernancePolicyTests(unittest.TestCase):
    """
    Regression tests against the ACTUAL repository file, not a fixture.

    Fixtures prove the parser is correct. Only the real file proves the
    repository is correct — and it was the real file that was misclassified.
    """

    POLICY = (
        REPO_ROOT / "docs" / "governance"
        / "VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md"
    )

    def test_policy_exists(self) -> None:
        self.assertTrue(self.POLICY.is_file(), f"missing: {self.POLICY}")

    def test_policy_is_active_authority_level_one(self) -> None:
        result = audit.audit_file(self.POLICY)
        self.assertFalse(result.malformed, result.malformed_reason)
        self.assertEqual(result.status, "current")
        self.assertEqual(result.lifecycle, "ACTIVE")
        self.assertEqual(result.authority_label, "LEVEL 1")
        self.assertNotEqual(
            result.status,
            audit.STATUS_UNDECLARED,
            "the authority-level-1 policy must not be STATUS-UNDECLARED",
        )

    def test_naive_grep_would_still_be_wrong(self) -> None:
        """
        The §4 body template is deliberately preserved. It is the demonstration
        that a whole-file `^status:` search is unsafe: the ACTIVE policy still
        contains a body line reading `status: superseded`.

        If this assertion ever fails, the template was removed and the
        demonstration went with it — restore it or update the methodology.
        """
        body_lines = self.POLICY.read_text(encoding="utf-8").splitlines()[6:]
        naive_hits = [line for line in body_lines if line.startswith("status:")]
        self.assertIn(
            "status: superseded",
            naive_hits,
            "the §4 supersession template must remain in the body",
        )
        self.assertEqual(audit.audit_file(self.POLICY).lifecycle, "ACTIVE")

    def test_policy_body_mentions_are_counted_and_ignored(self) -> None:
        result = audit.audit_file(self.POLICY)
        self.assertGreaterEqual(result.body_status_mentions, 1)
        self.assertEqual(result.status, "current")


class CommandLineTests(unittest.TestCase):
    """The CLI must behave identically regardless of the invoking shell."""

    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)
        (self.tmp / "ok.md").write_text("---\nstatus: current\n---\n", encoding="utf-8")

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def run_cli(self, *extra: str) -> subprocess.CompletedProcess:
        return subprocess.run(
            [sys.executable, str(SCRIPT), str(self.tmp), *extra],
            capture_output=True,
            text=True,
        )

    def test_json_output_and_zero_exit(self) -> None:
        proc = self.run_cli("--json")
        self.assertEqual(proc.returncode, 0, proc.stderr)
        payload = json.loads(proc.stdout)
        self.assertEqual(payload["counts"]["audited"], 1)
        self.assertEqual(payload["documents"][0]["status"], "current")

    def test_malformed_exits_nonzero(self) -> None:
        (self.tmp / "bad.md").write_text("---\nstatus: x\n", encoding="utf-8")
        self.assertEqual(self.run_cli("--json").returncode, 1)

    def test_missing_path_exits_two(self) -> None:
        proc = subprocess.run(
            [sys.executable, str(SCRIPT), str(self.tmp / "nope")],
            capture_output=True,
            text=True,
        )
        self.assertEqual(proc.returncode, 2)


if __name__ == "__main__":
    unittest.main(verbosity=2)
