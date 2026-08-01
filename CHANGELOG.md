# Changelog — Via-We documentation

Documentation change history. Every documentation-update run adds an entry. Governed by [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §3.

Application changes are not recorded here — there is no application.

---

## 2026-08-01 — Brand concept resolution (Vijay confirmed)

Vijay's final clarification, relayed by Vamshi. **Four conflicts resolved (K-1, K-2, K-7, K-8); four facts reached `PUBLIC-READY`, taking the register total from 5 to 9.**

- **Official brand name: `VIA-WE Services Pvt. Ltd.`** — **K-1 resolved.** The earlier "Via-We 360" reading described a *concept* as a *name*
- **Exact tagline: `YOUR DREAMS OUR AIM`** — no comma, everywhere. **K-2 resolved**; the comma form is withdrawn
- **"360" absent from the logo is intentional — K-7 resolved.** It is a strategic and visual concept only: complete connected coverage, end-to-end execution, one system, room to expand. Never in the name, logo, wordmark or tagline
- **"Services Pvt. Ltd." is intentionally in the lockup and may remain visible in the header — K-8 resolved**
- **Positioning pattern approved** — but the **exact sentence remains `[PROPOSED]`**, not `PUBLIC-READY`, pending final copy sign-off: *"a 360-degree business execution company bringing branding, business setup, franchise solutions, technology and recruitment together through one connected system."* **Guardrail:** never claim Via-We performs literally every possible service
- **Animation direction updated to the 360 orbital sequence** — the symbol forms, an orbital motion develops, services appear as connected segments completing a full revolution, resolving around the **unchanged** logo. The 360 concept is carried **visually**, which is the only way it may appear
- **Vector blocker unchanged.** Logo supplied ✅ · design approved ✅ · wording confirmed ✅ · **editable production vector ❌** · **suitable for separable-path animation ❌**. **B1 stands**

`AGENTS.md` gained **§3a — a binding naming guard**, so no future agent treats "Via-We 360" as the company name.

**Still open — four, and K-3 and K-4 are independent:** K-3 (public phone roles and publication approval), **K-4 (Vijay's exact public designation, and whether a leadership section may publish)**, K-5 (exact legal *registered* spelling), K-6 (registered-office address). All need documents or a publication approval.

Changed: `AGENTS.md` · `PRODUCT.md` · truth file · evidence register · missing inputs · brand asset audit · creative direction · motion direction · ADR-004 · batch report · changelog.

---

## 2026-08-01 — Intake Batch 01 ingested (owner statements, no documents)

> **Partly superseded the same day** by the brand-concept resolution above. The K-1, K-2, K-7 and K-8 findings recorded below were **resolved** by Vijay's confirmation: the brand is **VIA-WE Services Pvt. Ltd.**, the tagline is **`YOUR DREAMS OUR AIM`** with no comma, and "360" is a concept rather than a name. Retained as the record of what the batch itself contained.

**Report:** [docs/reviews/2026-08-01-intake-batch-01-company-identity.md](docs/reviews/2026-08-01-intake-batch-01-company-identity.md) — replaces the earlier empty-batch report of the same name.

Five filled owner-statement templates plus one **raster** logo reference; **zero official documents, zero vector logo files.** Preflight gate passed on owner-confirmed values. **15 facts recorded as `[VERIFY]`; 0 reached `PUBLIC-READY`; 8 conflicts opened, 1 narrowed; 0 blockers cleared.**

Key findings:

- **Public brand is "Via-We 360"** — new, and conflicts with every existing repository document saying "Via-We" (**K-1**, the widest-reaching open decision in the project)
- **Tagline "Your Dreams, Our Aim"** — conflicts with the guideline's comma-free form (**K-2**)
- **Leadership titles withdrawn.** Earlier documentation asserted "Founder & CEO" and a second person as "Managing Director"; Batch 01 supplies **no designation and one person**. Those titles were unsupported (**K-4**)
- **Branches stronger than before.** Hyderabad/Bengaluru/Vizag are **not active and must not appear at all** — not even as "coming soon". One active city: Vijayawada
- **"Logo is final: Yes" does not clear B1.** **0 of 7 vectors.** A **raster reference** (`via-we logo name.png`, 3281 × 1875 RGBA) was supplied and is useful — it settles what the artwork says — but cannot be a master and cannot drive the logo-led animation, which needs separable paths
- **The artwork contradicts the brand name.** The lockup reads **`VIA - WE Services PVT.LTD`** — **no "360" anywhere** (**K-7**). K-1 and K-7 are now the same decision and block the header entirely
- **Tagline settled for the logo:** artwork shows **`YOUR DREAMS OUR AIM`**, all caps, **no comma**. K-2 narrowed to the body-copy form only
- **"Services PVT.LTD" is inside the lockup** — unavoidable if used in the header (**K-8**)
- A compact mobile logo variant is also required and does not exist
- Contact values supplied but **publication unapproved** — held in `private/`, recorded in tracked docs by status only

Changed: truth file (§15 addendum), evidence register (+§9 conflict register), **new** brand asset audit, missing inputs (B10/B11 added), batch report, changelog, batch-01 prompt placed.
**Not changed:** `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, `README.md`, ADRs — Batch 01 changed facts, not rules, and K-1 is unresolved.

---

## 2026-08-01 — PII redaction in review documents (post-commit, pre-push)

A `git grep` over the committed tree found **five PII matches the privacy review's own scan had missed** — the unverified company phone number ×4 across two review documents, and a contributor's personal email quoted from `git log` ×1. All redacted; the first commit was amended. **Nothing was pushed before the fix.**

The privacy scan had returned a false clean because its `find | xargs | awk` pipeline silently produced 0 where a direct search returns 4. Recorded in [privacy review §6.1](docs/reviews/2026-08-01-pre-commit-privacy-review.md) with the governing lesson: **a scan without a positive control is not evidence.** The client-name scan in the same review had a control and caught two false negatives; the PII scan did not and did not.

---

## 2026-08-01 — Pre-commit manual review corrections

Manual inspection of the twelve key documents before staging. Six defects found and fixed — none caught by automated validation, because all six were internally consistent but wrong:

- **Truth file redaction notice** said "two redactions" while listing three
- **ADR-003 §1** asserted Q-B2 "has been answered: no", implying an account of a conversation the source does not record. Now states the decision and its stated grounds only
- **Motion direction §1** cited the agency teardown as evidence that reference sites avoid per-section scroll reveals. The teardown ran **without a browser and observed no motion at all** — the citation is removed and the limitation stated
- **Evidence register §8** still described the client-name exposure as an open owner decision. Resolved the same day; now records the resolution and the residual backup risk
- **Evidence register §6** listed six case-study candidates against the truth file's seven, with mismatched sector labels. Now seven, matching exactly
- **Missing inputs R5** and **reconciliation report O-1 / §8** still presented the client-name issue as open. Both now marked resolved, with the residual risk carried forward as a new R5 and R6

---

## 2026-08-01 — Pre-commit privacy and source-integrity correction

**Report:** [docs/reviews/2026-08-01-pre-commit-privacy-review.md](docs/reviews/2026-08-01-pre-commit-privacy-review.md)

- **All commercial client names removed from tracked files** — 11 occurrences across 3 files. Verified against the authoritative original with a control check; 0 remain
- `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §10 named list replaced with a redacted statement: 23 tracker rows, internal and unverified, broad industry coverage, pointer to `private/source-data/`
- §11 case-study candidates de-identified to sectors; §2.1 client name removed
- Unredacted originals preserved at `private/source-data/originals/` (Git-ignored)
- **Source-integrity verification:** originals located at `~/Downloads/VIA-WE_AGENT_DOCUMENTATION_UPDATE_PACK/`. All five diffed — **no substantive difference**; only added notes, curly-vs-straight quotes, and trailing whitespace. All five repo copies restored byte-exact, then redactions re-applied with visible notices
- Corrected the reconciliation report's incorrect claim that the source files were "not present on disk"
- `.gitignore` protection functionally verified for `private/`, `docs/source-data/raw/`, `ruvector.db`, `.DS_Store`
- `.github/` untouched and confirmed outside the documentation baseline

**Verdict: ready to commit.** One open item — where the unredacted source lives long-term.

---

## 2026-08-01 — Current-truth reconciliation

**Trigger:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` supplied by Vamshi / Vijay, superseding earlier scope and creative assumptions.
**Report:** [docs/reviews/2026-08-01-documentation-reconciliation.md](docs/reviews/2026-08-01-documentation-reconciliation.md)
**Pre-update audit:** [docs/reviews/2026-08-01-pre-update-documentation-map.md](docs/reviews/2026-08-01-pre-update-documentation-map.md)

### Decisions applied

- **Version 1 has five active service pillars**, not seven — [ADR-002](docs/decisions/ADR-002-v1-active-service-scope.md)
- **Business Consulting** is not a standalone V1 pillar
- **Via-We Connects** is not confirmed for V1; three routes removed from scope
- **Version 1 is English only.** Telugu and bilingual requirements removed
- **Krishna-delta / Distributary creative direction rejected** — [ADR-003](docs/decisions/ADR-003-distributary-direction-rejected.md)
- **Logo-led "Connected Growth Mark"** direction recorded as **proposed, not final** — [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md)
- **Service list is data, not structure.** Activating a sixth service must be a content change
- **Animation stack re-opened.** No stack is selected
- Category wording changed from "Business Growth Ecosystem" to **"Business Growth & Execution Company"**
- Source of truth moved from an unreachable `~/Downloads` file into the repository

### Created

`CLAUDE.md` · `CHANGELOG.md` · `.gitignore` · `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` · `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` · `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` · `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` · `docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md` · `docs/planning/VIA-WE_MISSING_INPUTS.md` · `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md` · `docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md` · `docs/decisions/ADR-002` · `ADR-003` · `ADR-004` · `docs/reviews/2026-08-01-pre-update-documentation-map.md` · `docs/reviews/2026-08-01-documentation-reconciliation.md` · `prompts/` (2 files) · `private/intake/inbox/` · `public/brand/` · `public/media/` (8 subfolders)

### Rewritten

`AGENTS.md` — reduced to a short operating contract · `PRODUCT.md` — five pillars, new routes, landing-page architecture · `README.md` — was a one-word placeholder

### Superseded — retained as history, not deleted

`docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` · `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` · `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` · `docs/decisions/ADR-001-via-we-animation-stack.md` · `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` · `docs/reviews/2026-08-01-phase-0-self-critique.md`

### Marked historical / scoped

`docs/reviews/2026-07-31-via-we-repository-recon.md` — point-in-time audit, accurate as written
`docs/research/2026-08-01-agency-reference-teardown.md` — current and direction-neutral, with a five-pillar scope correction

### Privacy

`private/` created and Git-ignored. `.gitignore` now covers `private/`, `docs/source-data/raw/`, `ruvector.db`, `.DS_Store`. No PII committed.

**Open item:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §10 names 23 client accounts in a tracked file with no recorded client permission. Owner decision required — see [missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md) R5.

---

## 2026-08-01 — Phase 0 creative direction and motion architecture

**Superseded the same day** by the reconciliation above.

Produced the agency reference teardown, the Distributary creative direction, a motion system, a page animation map, ADR-001, a Phase 1 build plan, and a self-critique. The teardown survives; everything else is decision history.

**Recorded lesson:** Phase 0 ran **before** the brand guideline was in the repository. Had the logo and its stated meaning been available, it would have been the obvious first candidate and the Distributary concept would not have been developed. This is why the documentation gate now precedes the creative gate.

---

## 2026-07-31 — Repository recon

Audit of documentation, skills, and architecture. Found no application code, five vendored third-party skills, an unreachable external source of truth, and fifteen documentation conflicts. Retained as a point-in-time audit.

---

## 2026-07-31 — Initial repository

Three commits: `README.md`, five vendored agent skills with `skills-lock.json`, and the first `AGENTS.md` / `PRODUCT.md`.
