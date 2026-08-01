---
status: current
type: pre-commit privacy and source-integrity review
created: 2026-08-01
---

# Pre-Commit Privacy & Source-Integrity Review

**Date:** 2026-08-01
**Scope:** final privacy and source-integrity correction before the documentation reconciliation is committed.
**Nothing was committed.** No application code was changed. Nothing was installed.

---

## 1. Summary

| Check | Result |
|---|---|
| Commercial client names in tracked files | **0** — 24 name patterns, all removed |
| Files redacted | 3 |
| Unredacted originals preserved | `private/source-data/originals/` (Git-ignored) |
| Five authority documents vs originals | **Verified.** No substantive difference found |
| PII patterns in tracked content | **0** across 7 pattern classes — after correcting a false clean result, see §6.1 |
| `.gitignore` protection | All four required paths present and functionally verified |
| `.github/` | Untouched, untracked, excluded from the baseline |
| Broken relative links | **0** of 238 |
| **Commit-readiness** | **READY**, with one owner decision outstanding (§7) |

---

## 2. Client-name removal

### 2.1 Where names were found

Search built from the **authoritative original** in `private/source-data/originals/`, not from a hand-typed list, so nothing could be missed. 24 distinct name patterns extracted from §10 and §11 of the source document.

**Before redaction — paths and match counts only:**

| Path | Matches |
|---|---:|
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | 8 |
| `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` | 2 |
| `prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` | 1 |

**11 occurrences across 3 files.** No other tracked file contained a commercial client name.

### 2.2 What replaced them

**`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`** — three redactions, each carrying a visible marker:

- **§2.1** — the named client holding the strategy document became *"A client strategy document `[INTERNAL]`"*. The surrounding capability claim and the critical qualifier *"It does not prove performance results by itself"* are unchanged.
- **§10** — the named tracker-account list replaced with a redacted statement recording exactly what the instruction specified: **23 distinct tracker rows**; **internal and unverified** status, with the explicit note that a tracker row is not a confirmed active client and that no client permission is recorded; **broad industry coverage** listed by sector; and a **pointer to `private/source-data/`**.
- **§11** — the named case-study candidates replaced with seven sector descriptions at status `IDENTIFIED`, plus the same private-source pointer.

**`docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md`** — two entries de-identified. The register already used sector labels for candidates; two rows had retained a name and now read *"a client strategy document (name redacted)"* and *"Client A — education/consultancy sector (holds the §2.1 strategy document)"*.

**`prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md`** — one no-hallucination rule named a client. It now reads *"Convert a client strategy document into performance results"*. The rule's meaning is unchanged.

### 2.3 Verification

The post-redaction scan was validated with a **control**: the same search, run with `--no-ignore`, correctly finds the two unredacted originals under `private/`. This proves the scan works rather than silently matching nothing.

```
CONTROL  (--no-ignore, private included) → 2 files found, both under private/source-data/originals/
SCAN     (private excluded)              → 0 files
```

> **Note on an earlier version of this check.** The first two scan attempts returned a false "clean" result — once because a pattern file was written to an unavailable path, and once because ripgrep honours `.gitignore` by default and was silently skipping `private/`. Both were caught by adding the control. The result above is the corrected run.

### 2.4 Where the names live now

```
private/source-data/originals/          ← Git-ignored, verified
  VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md               (unredacted)
  VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md
  VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md
  VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md   (unredacted)
  VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md
private/source-data/raw/                ← for raw spreadsheets and exports
```

No client name was moved into another tracked Markdown file.

---

## 3. Source-integrity verification

### 3.1 Originals located

The reconciliation report recorded that the five source files "were not present on disk". **That was wrong**, and it is corrected here. All five exist at:

```
~/Downloads/VIA-WE_AGENT_DOCUMENTATION_UPDATE_PACK/
```

They were not at the repository-root paths the `cp` commands referenced, which is why the earlier run fell back to transcribing the in-conversation copy.

### 3.2 Every difference found

Transcriptions were diffed against the originals **before** any redaction, so the comparison reflects transcription fidelity alone.

| Document | Differing lines | Nature of every difference |
|---|---:|---|
| `VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | 12 | 3 added transcription-note lines · 3 stripped trailing double-space line-break markers in the header · 2 curly→straight apostrophe/quote substitutions |
| `VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | 8 | 2 added transcription-note lines · 3 curly→straight substitutions |
| `VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` | 4 | 4 added transcription/usage-note lines only |
| `VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` | 4 | 2 curly→straight substitutions |
| `VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md` | 4 | 2 curly→straight substitutions |

**No substantive difference was found in any document.** Not one sentence, clause, count, label, rule, list item, or decision differed. Every difference was punctuation encoding, whitespace, or a note the reconciliation added and disclosed.

**One correction worth recording:** the originals use typographic curly quotes (`'` `"` `"`). The in-conversation copy arrived with those characters mangled, and the reconciliation "corrected" them to straight ASCII quotes. That produced a cosmetic divergence from the authoritative source — small, but real, and exactly the kind of drift this review exists to catch.

### 3.3 Correction applied

All five repository copies were **replaced with byte-exact originals**, verified with `cmp`:

```
IDENTICAL  VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
IDENTICAL  VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md
IDENTICAL  VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md
IDENTICAL  VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md
IDENTICAL  VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md
```

The privacy redactions in §2 were then applied on top of the byte-exact base. Current state:

| Document | State |
|---|---|
| `VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | **Byte-identical to original** |
| `VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` | **Byte-identical to original** |
| `VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md` | **Byte-identical to original** |
| `VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | Byte-exact **+ visible redaction notice**, 3 redactions |
| `VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` | Byte-exact **+ visible redaction notice**, 1 redaction |

**Nothing was rewritten silently.** Both redacted files carry a notice at the top stating exactly what changed, why, and where the unredacted text lives.

### 3.4 Other Via-We material found in Downloads — not imported

Located during verification and **deliberately left alone**:

| File | Note |
|---|---|
| `VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md` | 3,539 lines. The formerly "unreachable" source of truth. **Now superseded** by Business Truth v2 and not imported |
| `Via-We_Website_Design_Brief.md` | Not requested; not imported |
| `via we logo .png` | **Raster.** Does not satisfy the production-vector requirement — governance policy §7 forbids treating raster artwork as an official vector. Blocker B1 stands |
| Two client quotation PDFs | **Contain client names.** Correctly outside the repository; must stay outside |
| `Client Projects/Via We/` | Not scanned — outside the requested scope |

---

## 4. `.github/` — untouched

| Check | Result |
|---|---|
| Files modified | **None** |
| Git status | Still `?? .github/` — untracked, unchanged |
| In the documentation baseline? | **No.** Absent from the reading order in `AGENTS.md` §1 and `README.md`, and from the current-document set |

The two files there are Mermaid-extension artefacts, not Via-We content. They remain an open owner decision (track / delete / ignore) recorded in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md) R4.

---

## 5. `.gitignore` confirmation

Both **declared** and **functionally verified** with `git check-ignore`:

| Path | In `.gitignore` | `git check-ignore` |
|---|:--:|:--:|
| `private/` | ✅ | ✅ ignored |
| `docs/source-data/raw/` | ✅ | ✅ ignored |
| `ruvector.db` | ✅ | ✅ ignored |
| `.DS_Store` | ✅ | ✅ ignored |

`git status --untracked-files=all` shows **no** `private/`, `source-data`, or `ruvector` entry.

---

## 6. Validation suite

| # | Check | Result |
|---|---|---|
| 1 | `git diff --check` | **Clean** — no whitespace errors, no conflict markers |
| 2 | Relative-link validation | **238 checked, 0 broken** |
| 3 | Active seven-pillar statements | **None.** All 7 remaining mentions are negations: supersession notices, the ADR-002 rationale, and the extensibility statement "expands to six or seven services" |
| 4 | Active Distributary / Krishna / canal / irrigation | **None.** All 9 mentions are rejections or the source document's own "Rejected and superseded" list |
| 5 | Telugu Version 1 requirements | **None.** All 6 mentions are prohibitions or supersession notices |
| 6 | PII-pattern scan — phone, email, CIN, GST, Aadhaar-shape, PAN, credential-in-URL | **0 matches** — but only after the correction in §6.1. The first run of this check was **wrong** |
| 7 | Commercial client names in tracked files | **0**, control-verified |

### 6.1 A false clean result, and what it cost

**The PII scan in this review initially reported 0 matches. That was wrong.** A `git grep` over the committed tree found **five** matches that the scan had missed:

| Location | What |
|---|---|
| `docs/reviews/2026-07-31-via-we-repository-recon.md` ×3 | The unverified company phone number |
| `docs/reviews/2026-08-01-pre-update-documentation-map.md` ×1 | The same number |
| `docs/reviews/2026-07-31-via-we-repository-recon.md` ×1 | A contributor's personal email, quoted from `git log` |

All five are now redacted to `[phone redacted]` / `[email redacted]`. The reviews' arguments are unaffected — their point was that the phone was *unverified*, never what the digits were.

**Why it was missed.** The scan ran the pattern through a `find | xargs rg | awk` pipeline that silently produced 0 while a direct `rg` on the same files returns 4. The regex was correct; the pipeline was not. Errors were suppressed with `2>/dev/null`.

**The real lesson, and it is not about regex.** Earlier in this same review the client-name scan **also** returned a false clean twice — once from a bad pattern-file path, once because ripgrep skips `.gitignore`d directories by default. Those were caught because that scan had a **positive control**: the same search run where matches were known to exist. The PII scan had no control, so its false zero went undetected until `git grep` happened to catch it after the commit.

> **A scan without a positive control is not evidence. It is a hopeful assertion.**

**Correction applied to method:** every scan in §6 is now verified by direct `rg`/`git grep` on the tree — no pipeline arithmetic — and the phone/email classes are additionally checked against `git grep HEAD`, which reads the committed blobs rather than the working tree. Recommendation R6 in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md) — an automated pre-commit scan — should include a self-test that deliberately fails on a known-positive fixture.

**Disclosure:** this was caught **after** the first commit was created and **before** anything was pushed. The commit was amended; nothing containing this PII ever left the machine.

---

## 7. Remaining privacy risks

| # | Risk | Severity | Status |
|---|---|---|---|
| **1** | **`private/` exists only on this machine.** The unredacted originals and any future raw client data live in one Git-ignored local folder with no backup path defined | **Medium** | **Open — owner decision.** Loss of this machine loses the unredacted source. Needs a documented backup or secure-storage location that is not the repository |
| 2 | Future contributors may paste client names back into tracked docs | Medium | Partly mitigated: `AGENTS.md` §11, `CLAUDE.md` §6, and the redaction notices all state the rule. **No automated pre-commit check enforces it** |
| 3 | Client-bearing files remain in `~/Downloads` — quotation PDFs, the pack, `Client Projects/` | Low for the repository | Outside scope; correctly outside git. Worth the owner's awareness |
| 4 | `.github/` untracked but present on disk | Low | Owner decision pending (R4) |
| 5 | Repository visibility unconfirmed | Low, now | The client-name exposure is resolved regardless of visibility. Confirming private status is still worthwhile |
| 6 | Sector lists are indirect identifiers | Low | Twelve sectors across ~23 accounts is not individually identifying, but a single-account sector could become so as the list narrows. Watch when publishing an `/industries` page |

**Recommended next control:** a pre-commit hook or CI check scanning tracked Markdown for the private name list — the only durable defence against risk 2. Not created here; this phase does not add tooling.

---

## 8. Outstanding owner decision

**One item, unchanged in substance from the reconciliation report §8 but now materially reduced:**

The client-name exposure is **resolved** — no commercial client name appears in any tracked file. What remains is **risk 1**: the unredacted originals now exist only in a local Git-ignored folder. That is correct for privacy and fragile for continuity.

**Decide:** where the authoritative unredacted source lives long-term — a private repository, an encrypted drive, or a shared secure store. Not the working repository, and not only one laptop.

---

## 9. Files changed in this pass

| File | Change |
|---|---|
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | Restored byte-exact; 3 redactions; redaction notice added |
| `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` | 2 entries de-identified |
| `prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` | Restored byte-exact; 1 redaction; redaction notice added |
| `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | Restored byte-exact (transcription note removed) |
| `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` | Restored byte-exact (transcription note removed) |
| `prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md` | Restored byte-exact |
| `docs/reviews/2026-08-01-documentation-reconciliation.md` | §3 corrected — the "not present on disk" claim was wrong |
| `docs/reviews/2026-08-01-pre-commit-privacy-review.md` | **Created** — this file |
| `private/source-data/originals/` | **Created** — 5 unredacted originals, Git-ignored |
| `private/source-data/raw/` | **Created** — for raw exports, Git-ignored |

**No application code. No dependencies. No commit.**

---

## 10. Commit-readiness verdict

> ## READY TO COMMIT

**Cleared:**

- No commercial client name in any tracked file — 24 patterns, control-verified
- No PII of any pattern class in tracked content
- Five authority documents verified against originals; three byte-identical, two byte-exact with disclosed redactions
- No silent rewrite of authoritative content — every deviation carries a visible notice
- `.gitignore` protects all four required paths, functionally verified
- `.github/` untouched and outside the baseline
- All 238 relative links resolve; `git diff --check` clean
- No active seven-pillar, Distributary, or Telugu-V1 statement anywhere

**Not blocking the commit, but decide soon:** where the unredacted source lives long-term (§8), and whether to add an automated name-scan check (§7 risk 2).

**Nothing has been committed.** All changes are in the working tree.

**Branch note:** the working branch is now `chore/viawe-documentation-baseline`, not `main` as recorded in the earlier reconciliation report. `HEAD` is still `c35e408`. The earlier report was accurate when written; this is where the commit will land.
