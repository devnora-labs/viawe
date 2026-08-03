---
status: current
type: validation methodology
authority: 1
created: 2026-08-03
---

# Via-We Validation Methodology

**Binding on every agent and developer performing a repository scan, privacy check, or invariant check.**

Companion to [VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md), which remains **authority level 1** and is **ACTIVE**.

---

## 1. Why this document exists

Four scans on this project returned confident **false clean** results. Each looked like proof.

| # | Failure | Consequence | Source |
|---|---|---|---|
| 1 | A `find \| xargs \| awk` pipeline produced `0` where a direct search returned 4 | **Real PII reached a commit** — caught pre-push, redacted, amended | [privacy review §6.1](../reviews/2026-08-01-pre-commit-privacy-review.md) |
| 2 | `git grep -E` silently ignores `\b` — POSIX ERE has no word-boundary escape | Every phone and CIN scan returned `0` regardless of content | [privacy review §6.2](../reviews/2026-08-01-pre-commit-privacy-review.md) |
| 3 | A glob stored in a shell variable did not expand | `rg` received a literal `docs/product/*.md` and matched nothing | [master recon §1.1](../reviews/2026-08-03-viawe-master-recon-report.md) |
| 4 | `mapfile` used under **zsh** (it is bash-only); separately, unquoted `$FILES` does **not** word-split in zsh | Empty file list; a control of `0` was briefly reported beside a ✅ | [master recon §1.1](../reviews/2026-08-03-viawe-master-recon-report.md) |

Every one was caught by a **positive control**, and only by a positive control.

> ## The governing rule
>
> **A scan's zero is worthless without a demonstration that the scan can find a planted positive.**
>
> A zero reported without a proven control is not a clean result. It is an untested assertion.

---

## 2. Binding policy

1. **Never assume the interactive shell is Bash.** This machine's default is **zsh**.
2. **Record the shell or runtime** used for every non-trivial scan.
3. **Do not use `mapfile`** unless explicitly running under `bash -lc`. It does not exist in zsh.
4. **Do not rely on implicit shell word splitting.** zsh does not split unquoted parameters; bash does. Code that works in one silently breaks in the other.
5. **Do not store newline-separated filenames in an unquoted scalar variable.**
6. **Do not rely on unmatched-glob behaviour.** zsh errors by default; bash passes the literal pattern through. Both are traps.
7. **Prefer Python `pathlib`**, NUL-delimited `find -print0` / `xargs -0`, explicit arrays, or an explicit `bash -lc` when bash semantics are genuinely required.
8. **Filenames containing spaces, tabs or shell metacharacters must remain safe.** This repository already contains such a filename.
9. **Every privacy or invariant scan must use a positive control.**
10. **The control must be proven before the real result is accepted.**
11. **Temporary fixtures must be deleted immediately**, in a `finally` block — a leaked fixture containing planted PII shapes is worse than the problem being solved.
12. **Every reported scan must state:** scope · file source · matcher/regex engine · shell or runtime · positive-control result · real result · exclusions · exit status.
13. **A zero without a successful positive control must be reported as `INVALID SCAN — CONTROL NOT PROVEN`.** Never as clean.
14. **Scan output must distinguish** zero matches · no files scanned · command failure · invalid pattern · inaccessible files. These are five different outcomes and only the first is a clean result.

---

## 3. Regex-engine hazards, recorded

| Engine | `\b` word boundary | Notes |
|---|:--:|---|
| Python `re` | ✅ | Used by `scripts/controlled_repo_scan.py` |
| ripgrep (Rust regex) | ✅ | Safe |
| `git grep -P` (PCRE) | ✅ | Safe |
| **`git grep -E` (POSIX ERE)** | ❌ | **Silently ignores `\b`.** Never use for boundary-sensitive patterns |
| `grep -E` | ❌ | Same hazard |

**State the engine in every reported scan.** An unstated engine is an unverifiable result.

---

## 4. The required tool

Use `scripts/controlled_repo_scan.py` for privacy and invariant scans. It refuses to report a clean result unless its pattern first matches a fixture it creates and then deletes.

```bash
python3 scripts/controlled_repo_scan.py \
  --label "phone" \
  --pattern '\+91[ -]?[0-9]{10}' \
  --control 'planted +91 9999999999 control' \
  --tracked-only --json
```

### Exit codes

| Code | Meaning | Is it clean? |
|---:|---|---|
| `0` | scan valid, zero matches | **Yes** |
| `1` | scan valid, matches found | No |
| `3` | **CONTROL NOT PROVEN** — result invalid, discard it | **No** |
| `4` | no files scanned — empty scope | **No** |
| `5` | runtime error — invalid regex, git unavailable, unreadable scope | **No** |

**Codes 3 and 4 both produce zero matches and neither is clean.** That distinction is the entire point of the tool.

### Guarantees

- Python owns enumeration → identical behaviour under zsh, bash and CI
- Git lists read **NUL-delimited** (`ls-files -z`, `diff --cached -z`)
- Filenames with spaces and metacharacters safe
- Matches **redacted by default** — path, line, and a shape such as `630…933`
- Binary files skipped; symlinks not followed; `.git/` never inspected
- Fixture removed in `finally`

---

## 5. Document status must never be grepped

**Prohibited as a status-classification method:**

```bash
rg '^status:' <document>      # WRONG
grep '^status:' <document>    # WRONG
```

The active governance policy contains a **sample YAML block in its own body** (§4) demonstrating how to mark a document superseded. A whole-file grep matches that template.

**Adding correct frontmatter did not make the naive method safe. It made it ambiguous, which is worse.** Verified 2026-08-03 against the real file:

| Method | Result | Verdict |
|---|---|---|
| `rg -n '^status:' <policy>` | **two lines** — `2:status: current` **and** `80:status: superseded` | **ambiguous** |
| `… \| head -1` | `current` | right **by position, not by rule** |
| `… \| tail -1` | `superseded` | **wrong** |
| `grep -q '^status: superseded'` | **matches** | **wrong** — reports the ACTIVE policy as superseded |
| `python3 scripts/audit-document-frontmatter.py <policy>` | `current` → **ACTIVE**, authority **LEVEL 1**, *1 body-level `status:` mention ignored* | **correct** |

A method that happens to be right because the correct value sorts first is not a method.

**Use the auditor:**

```bash
python3 scripts/audit-document-frontmatter.py docs/ --json
```

Full rule set: [VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) and §6 below.

---

## 6. Frontmatter status parsing rules

1. Document status is read **only** from the first YAML frontmatter block.
2. That block must begin at **line 1** with a bare `---`.
3. Parsing stops at the matching closing `---`.
4. Any `status:` outside that opening block is **content, example or template** and must not affect authority classification.
5. Documents without valid opening frontmatter are **`STATUS-UNDECLARED`** unless a current authority map explicitly assigns them a status. This is **not an error** — several legitimate Via-We documents carry no frontmatter.
6. **Grepping the whole file for `^status:` is prohibited** as a classification method.
7. A historical report **cannot** override current authority merely because it carries a newer date.
8. **The active governance policy declares `status: current`, `authority: 1` in its own opening frontmatter, and remains authority level 1.**
9. **`status:` is a closed vocabulary**, defined in the governance policy §4: `current` · `accepted` · `proposed` · `superseded` · `historical`. Do not invent new values, and do not introduce a second metadata schema.
10. **Lifecycle is derived, never re-typed.** `current` and `accepted` map to **ACTIVE**; `proposed` to PROPOSED; `superseded` to SUPERSEDED; `historical` to HISTORICAL. An unrecognised value is reported as `UNRECOGNISED-STATUS-VALUE`, never treated as active. `--strict-vocabulary` makes it exit 1.

```bash
python3 scripts/audit-document-frontmatter.py docs/ --strict-vocabulary
```

---

## 7. Reporting template

Every scan reported to a manager must carry these fields:

```text
label            : phone-shaped values
scope            : tracked-only
file source      : git ls-files -z
matcher          : python re
runtime          : python3.9
positive control : PROVEN (fixture created and removed)
files scanned    : 46
matches          : 0
exclusions       : .git .agents .claude node_modules .next private
exit status      : 0 (CLEAN — control proven)
```

A report missing the control line is not evidence.

---

## 8. What this does not cover

This document governs **how to verify**, not **what is true**. Business facts, brand truth and service scope are governed by [VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §1 and the current business truth.
