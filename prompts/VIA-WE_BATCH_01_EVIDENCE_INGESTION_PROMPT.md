# VIA-WE — BATCH 01 EVIDENCE INGESTION & COMPANY-IDENTITY RECONCILIATION

## Run this prompt in Claude Code only after genuine Batch 01 material has been added

You are acting as the **Via-We legal-identity documentation auditor, brand-asset auditor, evidence manager, privacy reviewer, and repository-governance editor**.

This phase processes only the private Batch 01 intake:

```text
private/intake/inbox/2026-08-01-company-legal-contact/
```

It must reconcile official company identity, contact information, leadership, office/branch status, tagline, logo assets, and brand-source status.

This is not an application-build phase.

---

# 1. Operating rules

## 1.1 Read before acting

Read these in this order:

1. `AGENTS.md`
2. `CLAUDE.md`
3. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
4. `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md`
5. accepted ADRs in `docs/decisions/`
6. `PRODUCT.md`
7. `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md`
8. `docs/planning/VIA-WE_MISSING_INPUTS.md`
9. `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md`, if present
10. `prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md`
11. all files inside the Batch 01 private folder

Use repository-local instructions and skills. Do not rely on a global skill that shadows a repository-local copy.

## 1.2 Source priority

When sources disagree, apply:

1. Current official government/company document
2. Current written confirmation signed or explicitly approved by Vijay
3. Current official Via-We brand source file
4. Current internal Via-We document
5. Older brochure or website
6. Memory or verbal statement
7. Assumption — never publish

Do not silently select one conflicting value. Record the conflict and the evidence for both.

## 1.3 Privacy boundary

The following must remain under `private/` and must never be copied into tracked files:

- raw legal documents;
- GST documents;
- MCA downloads;
- full addresses when not approved for public use;
- phone numbers not approved for public use;
- personal emails;
- signatures;
- DIN/PAN/Aadhaar/KYC;
- contracts;
- private business records;
- raw client information.

Tracked documentation may contain only:

- approved public facts;
- masked or redacted references;
- evidence filenames;
- evidence status;
- unresolved conflicts;
- public-safe wording.

## 1.4 No implementation

Do not:

- initialise Next.js;
- install packages;
- create application routes;
- implement animation;
- alter the logo;
- trace raster artwork;
- create substitute vector files;
- change third-party skills;
- commit;
- push;
- merge.

---

# 2. Hard preflight gate

Before changing any tracked file, inspect the private batch and calculate:

- genuine evidence-file count;
- completed owner-entered field count;
- blank-template count;
- raster-logo count;
- vector-logo count;
- official-document count.

Treat the following as genuine evidence:

- PDF issued by a government/company authority;
- original or exported SVG/AI/EPS logo source;
- signed/current written confirmation from Vijay;
- filled intake template with explicit confirmation source.

Do not treat these as evidence:

- blank templates;
- README instructions;
- placeholders;
- filenames without files;
- old screenshots without provenance;
- PNG/JPG as a vector master;
- prior repository assumptions.

## Stop condition

If both are true:

```text
genuine evidence files = 0
owner-entered confirmed values = 0
```

then:

1. Make no tracked-file changes.
2. Do not update `CHANGELOG.md`.
3. Do not create a tracked review report.
4. Return only:
   - `BATCH NOT READY`
   - missing evidence list;
   - exact folder path;
   - privacy confirmation;
   - next human action.

This prevents an empty intake from creating documentation noise.

---

# 3. Evidence inventory

If the preflight gate passes, create a private inventory in memory first.

For every supplied file record:

- filename;
- file type;
- issue/creation date;
- issuing authority or source;
- apparent purpose;
- whether current or historical;
- whether it contains PII;
- whether it is approved for public use;
- facts it can support;
- conflicts it creates;
- confidence.

Do not reproduce sensitive values in the terminal.

Use these evidence classifications:

```text
OFFICIAL-CURRENT
OFFICIAL-HISTORICAL
VIJAY-CONFIRMED-WRITTEN
INTERNAL-CURRENT
INTERNAL-HISTORICAL
BRAND-SOURCE
RASTER-REFERENCE
UNVERIFIED
CONFLICTING
PRIVATE-ONLY
PUBLIC-APPROVED
```

---

# 4. Required reconciliation subjects

## 4.1 Company legal identity

Determine, without guessing:

- exact legal company name;
- public brand name;
- CIN;
- incorporation date;
- current company status;
- registered office;
- evidence source and document date.

A CIN is a public statutory identifier, but it must remain `[VERIFY]` until accuracy is supported by current official evidence.

## 4.2 Official contact details

Determine:

- primary public phone;
- secondary public phone, if any;
- official WhatsApp;
- official email;
- official website/domain;
- business hours;
- whether each is approved for public display.

Do not publish a contact field merely because it appeared in an old brochure.

## 4.3 Office and branches

For every location classify:

```text
REGISTERED-OFFICE
ACTIVE-OPERATING-OFFICE
ACTIVE-BRANCH
PLANNED
RETIRED
UNVERIFIED
```

Record:

- city;
- public-safe address wording;
- active date;
- evidence;
- whether publicly announceable;
- conflict with older material.

Never present a planned office as active.

## 4.4 Leadership

For every proposed public leader determine:

- full legal name;
- approved public name;
- exact designation;
- evidence;
- biography approval;
- photograph approval;
- whether the person appears in Version 1.

Do not infer a public designation from general involvement.

## 4.5 Tagline and legal lockup

Determine:

- whether `Your Dreams Our Aim` remains official;
- whether it appears in:
  - header;
  - hero;
  - footer;
  - logo lockup only;
  - nowhere;
- whether `Services Pvt. Ltd.` appears in the public website header;
- whether a shorter marketing lockup is approved.

## 4.6 Logo and brand assets

Inspect every supplied brand file.

For each record:

- format;
- dimensions/artboard if available;
- vector or raster;
- transparency;
- colour mode;
- embedded text vs outlines;
- editability;
- suitability for:
  - header;
  - dark background;
  - favicon;
  - animation;
  - print;
- licence/source;
- missing variants.

A raster PNG/JPG does not satisfy the production-vector blocker.

Production logo readiness requires, ideally:

```text
symbol.svg
full-horizontal.svg
full-horizontal-white.svg
one-colour.svg
wordmark.svg
favicon.svg
original AI/EPS/editable source
```

Do not modify or recreate the logo in this phase.

## 4.7 Typography licence

Determine whether Deadhead Bold:

- has a known licence;
- permits web embedding;
- permits self-hosting;
- is available in web formats;
- should remain logo-only;
- requires an approved website substitute.

Do not copy or distribute font files through tracked repository artifacts.

---

# 5. Public-readiness decision rules

A fact may become `PUBLIC-READY` only when all are true:

1. A current reliable source supports it.
2. The source date is known or reasonably current.
3. No unresolved higher-authority conflict exists.
4. Vijay or authorised leadership approves public use where required.
5. The wording exposes no private information.
6. The fact is relevant to Version 1.

Otherwise use:

```text
VERIFY
PUBLIC-BLOCKED
PRIVATE-ONLY
CONFLICTING
HISTORICAL
```

Do not downgrade caution labels merely to make the website appear more complete.

---

# 6. Tracked files allowed to change

Update only files actually affected by supplied evidence.

Possible files:

```text
docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md
docs/planning/VIA-WE_MISSING_INPUTS.md
docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md
docs/decisions/<new ADR only if a real decision was confirmed>
PRODUCT.md
README.md
AGENTS.md
CLAUDE.md
CHANGELOG.md
```

Do not edit all of them automatically.

Examples:

- A verified email may affect current truth, evidence register, and missing inputs.
- A vector logo may affect brand audit and missing inputs.
- A confirmed tagline may affect current truth, evidence register, product copy rules, and possibly an ADR.
- A legal document does not automatically require changing `AGENTS.md`.

---

# 7. Required batch report

If at least one genuine fact or asset status changes, create:

```text
docs/reviews/2026-08-01-intake-batch-01-company-identity.md
```

The report must contain:

1. Executive outcome
2. Files inspected
3. Evidence classification
4. Facts confirmed
5. Facts still blocked
6. Conflicts
7. Public-ready facts
8. Private-only facts
9. Logo/vector readiness
10. Typography/licence status
11. Files changed
12. Missing inputs
13. Privacy verification
14. Exact next recommended action

Do not include full private values unless approved for public use.

Overwrite the previous empty-batch report if it exists. Do not append contradictory reports for the same batch.

---

# 8. Correct scan methodology

The previous audit found that `git grep -E` does not support `\b` word boundaries in the expected way and can produce false clean results.

For privacy and identifier scans:

- state the regex engine;
- use `rg` or `git grep -P` where word boundaries are required;
- exclude:
  - `.git/`
  - `private/`
  - `.agents/`
  - `.claude/`
  - vendored code;
  - hashes/lockfiles where appropriate;
- plant a synthetic positive fixture;
- prove the scanner detects it;
- remove the fixture;
- scan the Via-We tracked-document scope;
- distinguish false positives from real findings.

Do not claim "zero" without a positive control.

Required classes:

- phone-shaped values;
- email-shaped values;
- CIN-shaped values;
- raw client names if a private source list exists;
- absolute local paths;
- private-folder leakage.

A CIN match is not automatically a privacy leak; it is an accuracy/public-readiness issue.

---

# 9. Validation

Before completing:

```bash
git diff --check
git status --short --branch
```

Also verify:

- no `private/` path appears in Git status;
- no raw private file is tracked;
- no blank-template fact was promoted;
- no planned branch was marked active;
- no raster logo was labelled vector;
- no verbal-only fact was labelled public-ready without the required approval;
- current reading-order links still resolve;
- no application code changed;
- no third-party skill changed.

Do not commit.

---

# 10. Decision on the current empty-batch working changes

The branch may currently contain tracked changes created by the earlier empty-batch run:

```text
CHANGELOG.md
docs/reviews/2026-08-01-pre-commit-privacy-review.md
docs/reviews/2026-08-01-intake-batch-01-company-identity.md
```

Handle them as follows:

## If Batch 01 is still empty

- restore `CHANGELOG.md`;
- restore `docs/reviews/2026-08-01-pre-commit-privacy-review.md`;
- remove the empty-batch report;
- leave the ignored private templates intact;
- return `BATCH NOT READY`.

## If genuine evidence is now present

- replace the empty-batch report with the real ingestion report;
- retain only scan-methodology corrections that are accurate and useful;
- update `CHANGELOG.md` only for real evidence/status changes.

Do not preserve documentation noise merely because it was generated earlier.

---

# 11. Final terminal response

Return one of the following.

## Outcome A — not ready

```text
BATCH NOT READY

Genuine evidence files: 0
Owner-confirmed values: 0
Tracked files changed: 0
Private files tracked: 0

Missing highest-priority inputs:
- original vector logo source;
- incorporation/MCA evidence;
- official contact confirmation;
- tagline confirmation;
- branch status confirmation.

Next human action:
Place genuine files or completed confirmations inside:
private/intake/inbox/2026-08-01-company-legal-contact/
```

## Outcome B — ingested

```text
BATCH 01 INGESTION COMPLETE

Evidence files inspected: <count>
Facts confirmed: <count>
Facts moved to PUBLIC-READY: <count>
Conflicts opened: <count>
Conflicts resolved: <count>
Logo production-ready: YES / NO
Deadhead web licence resolved: YES / NO
Tracked files changed: <count>
Private files tracked: 0
PII leakage: NO

Report:
docs/reviews/2026-08-01-intake-batch-01-company-identity.md

Readiness:
<READY FOR NEXT INTAKE / READY WITH CONDITIONS / BLOCKED>
```
