---
status: current
type: reconciliation report
created: 2026-08-01
---

# Documentation Reconciliation Report

**Date:** 2026-08-01
**Phase:** Repository documentation reconciliation. **Not a build phase.**
**Trigger:** `VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` supplied by Vamshi / Vijay
**Phase A audit:** [pre-update documentation map](2026-08-01-pre-update-documentation-map.md)
**Required by:** [governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §6

---

## 1. Baseline

| Property | Before | After |
|---|---|---|
| Branch | `main` | `main` — unchanged |
| Commit | `c35e408` | `c35e408` — **nothing committed** |
| Application code | None | None |
| Via-We Markdown (excl. skills) | 13 | 31 |
| `.gitignore` | Absent | Present |
| `CLAUDE.md` | Absent | Present |
| Privacy boundary | None | `private/` created and Git-ignored |
| Source of truth | `~/Downloads/…` (unreachable) | In-repository |

---

## 2. Files reviewed

**13 Via-We Markdown files**, read in full before any edit: `AGENTS.md`, `PRODUCT.md`, `README.md`, `.github/copilot-instructions.md`, `.github/instructions/mermaid.instructions.md`, the 2026-07-31 recon, the agency teardown, three Phase 0 design documents, ADR-001, the Phase 1 build plan, and the Phase 0 self-critique.

**10 repository-local skill files**, read by exact path under `.agents/skills/` — `frontend-design/SKILL.md`, `impeccable/SKILL.md` plus four references, `ui-ux-pro-max/SKILL.md` plus two references, and `web-design-guidelines/SKILL.md`. **No skill was modified.**

**5 documents supplied in-conversation**, transcribed to disk (§3).

---

## 3. Files created — 18 documents + 11 scaffolding

### Placed from supplied content

> **Superseded by the [pre-commit privacy review](2026-08-01-pre-commit-privacy-review.md), 2026-08-01.** At the time of this reconciliation the five source files could not be found on disk and were transcribed from the in-conversation copy. The originals were subsequently located at `~/Downloads/VIA-WE_AGENT_DOCUMENTATION_UPDATE_PACK/`, verified against the transcriptions (differences: straight-vs-curly quotes and stripped trailing double-spaces only — **no substantive difference**), and all five repo copies were replaced with byte-exact originals. See the privacy review §3 for the full diff record.

The five source files named in the instruction were not present at the paths the `cp` commands referenced. Each was placed at its destination **verbatim**.

| Destination | Current state |
|---|---|
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | Byte-exact + **redaction notice** (client names removed) |
| `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | **Byte-identical to original** |
| `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` | **Byte-identical to original** |
| `prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` | Byte-exact + **redaction notice** (one client name removed) |
| `prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md` | **Byte-identical to original** |

### Authored

| File | Purpose |
|---|---|
| `CLAUDE.md` | Claude-specific operating instructions |
| `CHANGELOG.md` | Documentation change history |
| `.gitignore` | Privacy boundary enforcement |
| `docs/decisions/ADR-002-v1-active-service-scope.md` | Five pillars — **accepted** |
| `docs/decisions/ADR-003-distributary-direction-rejected.md` | Distributary rejected — **accepted** |
| `docs/decisions/ADR-004-logo-led-extensible-service-motion.md` | Logo-led direction + service registry — **proposed** |
| `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md` | Current exploration only |
| `docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md` | Current motion exploration; no stack |
| `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` | Every claim, its status, its blocker |
| `docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md` | Operation shape, no identities |
| `docs/planning/VIA-WE_MISSING_INPUTS.md` | Every blocker, owner, and impact |
| `docs/reviews/2026-08-01-pre-update-documentation-map.md` | Phase A audit |
| `docs/reviews/2026-08-01-documentation-reconciliation.md` | This report |

**Scaffolding:** `private/intake/inbox/`, `docs/intake/pending/`, `public/brand/README.md`, `public/media/README.md`, and eight media subfolders — leadership, office, team, shoots, clients, case-studies, video, brand.

---

## 4. Files changed — 11

### Rewritten (3)

| File | Change |
|---|---|
| `AGENTS.md` | Reduced to a short operating contract. Five pillars, English-only, new evidence labels, privacy and no-hallucination rules, current creative status, service-registry rule, precedence, gates. Deep detail linked, not duplicated |
| `PRODUCT.md` | Five pillars, new audiences, website jobs, route direction, landing-page architecture, lead flows, case-study model, roadmap, non-goals, open decisions. Seven-pillar assumptions removed |
| `README.md` | Was one word. Now purpose, phase, source of truth, reading order, structure, privacy, data intake, prompts, blockers, gates |

### Marked superseded (6) — retained, not deleted

Per governance policy §4 and §9, each carries `status: superseded` front matter, a link to the rejecting ADR, a stated reason, and a note on what remains useful.

| File | Reason |
|---|---|
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | Distributary rejected; seven pillars; bilingual type system |
| `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | Derived from the rejected concept; one-moment doctrine conflicts with "premium, highly animated" |
| `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | Seven-pillar route set including Connects routes not in V1 |
| `docs/decisions/ADR-001-via-we-animation-stack.md` | **Stack decision re-opened.** Its zero-dependency conclusion derived from a superseded motion system |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | Sequenced the build of the rejected concept |
| `docs/reviews/2026-08-01-phase-0-self-critique.md` | Critiques the rejected concept set |

### Marked with status (2)

| File | Marking |
|---|---|
| `docs/reviews/2026-07-31-via-we-repository-recon.md` | **Historical** — point-in-time audit, accurate as written. Notes which of its conflicts are now closed and which remain open |
| `docs/research/2026-08-01-agency-reference-teardown.md` | **Current** — direction-neutral, survives the rejection. One scope correction: read "seven pillars" as five |

---

## 5. Decisions applied

| # | Decision | Recorded in |
|---|---|---|
| 1 | Five active V1 pillars, not seven | [ADR-002](../decisions/ADR-002-v1-active-service-scope.md) |
| 2 | Business Consulting not a standalone V1 pillar | ADR-002 |
| 3 | Via-We Connects not confirmed for V1 | ADR-002 |
| 4 | Version 1 English only | `AGENTS.md` §5, `PRODUCT.md` §11 |
| 5 | Krishna-delta / Distributary rejected | [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md) |
| 6 | Logo-led "Connected Growth Mark" — **proposed, not final** | [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) |
| 7 | Service list is data, never structure | ADR-004 §3 |
| 8 | Animation stack re-opened; none selected | ADR-001 supersession note, ADR-004 §6 |
| 9 | Category is "Business Growth & Execution Company" | Truth file §1 |
| 10 | Source of truth moved into the repository | `AGENTS.md` §1, `README.md` |
| 11 | Privacy boundary established | `.gitignore`, `private/` |
| 12 | New eight-value evidence-label scheme adopted | `AGENTS.md` §8 |

---

## 6. Superseded statements

| Statement | Was asserted in | Now |
|---|---|---|
| Seven service pillars | `AGENTS.md`, `PRODUCT.md`, all Phase 0 design docs | **Five** |
| Via-We Connects is a V1 service with three routes | `PRODUCT.md`, page animation map | **Not a V1 pillar.** Routes removed from scope |
| Business Consulting & Growth Strategy is a V1 pillar | `AGENTS.md`, `PRODUCT.md` | **Not standalone** |
| Telugu-capable type system; bilingual as an open question | Creative Direction v1 | **English only** |
| Distributary is the recommended direction | Creative Direction v1 §3.4 | **Rejected** |
| One authored moment across the site | Motion System v1 | **Superseded.** V1 is "premium, highly animated" |
| Zero animation dependencies | ADR-001 §2 | **Re-opened** |
| "Business Growth Ecosystem" | `PRODUCT.md` | **"Business Growth & Execution Company"** |
| Master handoff at `~/Downloads/…` is the source of truth | `AGENTS.md:7`, `PRODUCT.md:3` | **Removed.** Truth file is in the repository |
| 15-value lead taxonomy including `VIA_WE_CONNECTS` | `AGENTS.md` | 12-value `[PROPOSED]` taxonomy derived from five pillars |
| Survey-sheet palette; Anek / Noto / Martian Mono | Creative Direction v1 §4.1–4.2 | Brand-guideline blues; Deadhead/Roboto, **Deadhead licence unverified** |

---

## 7. Conflicts

### Resolved — 12

All twelve contradictions catalogued in the [Phase A map](2026-08-01-pre-update-documentation-map.md) §10 (P-1 … P-12) are resolved, in every case by **superseding rather than editing**, because each superseded statement was structural rather than cosmetic.

Also closed from the 2026-07-31 recon: **C-1** (unreachable source of truth), **C-4** (static vs dynamic service routes — five static `/services/*`), **C-5** (no route for the franchise disclaimer — `/franchise-disclaimer` now exists), **C-6 / C-7 / C-8** (contradictory vendored motion doctrines — neither adopted; Via-We's own direction governs), **C-9 / C-10** (skill-vs-brief conflicts — precedence now written into `AGENTS.md` §12), **C-11** (shadcn undecided — no UI framework decision is current, and the question is deferred rather than left ambiguous).

### Open — 4 (O-1 resolved same day)

| # | Conflict | Source A | Source B | Decision needed |
|---|---|---|---|---|
| ~~**O-1**~~ | ~~**Client names in a tracked file**~~ | ~~Truth file §10 names 23 client accounts~~ | ~~Governance policy §10~~ | **RESOLVED 2026-08-01** — option 2 taken on Vamshi's instruction. All 11 occurrences across 3 files redacted to sector descriptions; unredacted originals moved to `private/source-data/`; control-verified zero remain. See [pre-commit privacy review](2026-08-01-pre-commit-privacy-review.md) |
| **O-2** | Global `ui-ux-pro-max` skill shadows the repository copy | `.agents/skills/ui-ux-pro-max/SKILL.md` — 84 styles / 192 palettes / 22 stacks | `~/.claude/skills/ui-ux-pro-max/SKILL.md` — 50+ / 161 / 10, and this is what the runtime loaded | Remove or update the global copy |
| **O-3** | `skills-lock.json` hashes do not verify | Lock records a `computedHash` per skill | All five fail to match a SHA-256 of the file at their `skillPath` | Document the algorithm or remove the field |
| **O-4** | Tagline | Brand guideline gives "Your Dreams Our Aim" `[VERIFY]` | Truth file §13 lists "final tagline decision" as missing | Vijay confirms or retires it |
| **O-5** | Display typeface | Brand guideline specifies Deadhead Bold | Truth file §5: must not be used until licence and web-delivery suitability are verified | Verify the licence, or choose and approve a substitute |

**No conflict was resolved silently.** O-1 is flagged rather than acted on, because unilaterally redacting an owner-authored source of truth would itself violate governance policy §3.8.

---

## 8. Privacy check

| Check | Result |
|---|---|
| Phone-shaped patterns in tracked Markdown | **0** |
| Email-shaped patterns in tracked Markdown | **0** |
| `private/` tracked by git | **No** — correctly ignored |
| `ruvector.db` tracked | **No** — correctly ignored |
| Raw spreadsheets, lead exports, candidate data, KYC, contracts, credentials committed | **None** |
| PII values printed to the terminal during this run | **None** — counts and paths only |
| `.gitignore` covers `private/`, `docs/source-data/raw/`, `ruvector.db`, `.DS_Store` | **Yes** |

The previously published unverified phone number in `PRODUCT.md` was removed during the rewrite and now appears nowhere in tracked content.

### The one open privacy item — O-1 — RESOLVED the same day

**As written, this section flagged a concern rather than acting on it:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §10 listed **23 named client accounts** in a tracked location, for which the evidence register records **no client permission**. It was placed there exactly as instructed, because it is the owner-authored source of truth and agents may not silently rewrite it. Two options were offered — confirm the repository is private, or move the named list to `private/`.

> **Resolution: option 2, on Vamshi's explicit instruction, the same day.**
>
> All client names were removed from tracked files — 11 occurrences across 3 files, replaced with sector descriptions and redacted counts. Unredacted originals live in `private/source-data/` (Git-ignored). A control-verified scan confirms **zero** commercial client names remain in tracked content.
>
> Full record: [pre-commit privacy review](2026-08-01-pre-commit-privacy-review.md).
>
> **Residual risk carried forward:** the unredacted source now exists only in one local Git-ignored folder with no defined backup — privacy review §7 risk 1, and R5 in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md).

Everywhere in this repository, clients are referred to by sector.

---

## 9. Blocked public claims

**16 claims blocked**, of which **2 are permanently blocked.** Full detail in the [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md).

| Category | Blocked |
|---|---|
| Scale | 50+ clients · ~18 active clients · ~315 monthly commitments · team size · 24/7 support |
| Proof | client logos · campaign metrics · testimonials · case studies · partnerships · awards |
| Locations | active branches · planned branches |
| Capability | in-house legal / financial / tax capability |
| **Permanent** | **guaranteed results · franchise returns** |

**Publishable today — 5 statements only:** the brand name; "Business Growth & Execution Company"; "We Build, Brand & Grow Businesses."; the five-pillar list; the logo's stated meaning.

That constraint is now a documented design input rather than a discovery waiting to happen mid-build.

---

## 10. Validation

| Check | Result |
|---|---|
| `git diff --check` | Clean |
| Active "seven pillars" statements in current docs | **None.** All four remaining mentions are negations — "any earlier document naming seven pillars is superseded", the ADR-002 rationale, and the extensibility statement "expands to six or seven services" |
| Active Distributary / Delta instructions | **None.** All five mentions in current docs are explicit rejections linking to ADR-003 |
| Telugu V1 requirements | **None.** All four mentions are prohibitions |
| Absolute local paths (`~/Downloads`, `/Users/`) in current docs | **None** |
| PII patterns in tracked Markdown | **0 phone-shaped, 0 email-shaped** |
| Unlabelled public claims | **None** — every business statement in current docs carries an evidence label or is registered |
| Relative Markdown links resolve | **222 checked, 0 broken** |
| Superseded documents carry visible front matter | **6 / 6** |
| Third-party skills modified | **None** |

---

## 11. Git diff summary

**Nothing was committed, pushed, fetched, merged, or deleted.** All changes are in the working tree.

```text
 AGENTS.md  | 286 ++++++++++++++++++++++-------------------
 PRODUCT.md | 349 +++++++++++++++++++++++++++++-----------------------
 README.md  | 155 ++++++++++++++++++++-
 3 files changed, 554 insertions(+), 236 deletions(-)
```

Everything else is new and untracked: 18 documents, 11 scaffolding files, `.gitignore`, and eight files given supersession headers that were themselves untracked from the preceding phase.

---

## 12. Completion criteria — §14 checked

| Criterion | Status |
|---|---|
| All current docs agree on five active pillars | ✅ |
| Version 1 is English only | ✅ |
| Distributary is superseded | ✅ ADR-003, six documents marked |
| Logo-led motion is proposed, not final | ✅ ADR-004 status `proposed` |
| Service architecture is extensible | ✅ ADR-004 §3, `AGENTS.md` §6, `PRODUCT.md` §5 |
| Evidence labels are consistent | ✅ Eight-value scheme in `AGENTS.md` §8, applied throughout |
| Privacy boundaries are documented | ✅ `.gitignore`, `private/`, redaction standard demonstrated |
| README / AGENTS show the correct reading order | ✅ Both, identical, ten items |
| No PII committed | ✅ Verified by pattern scan |
| Unresolved facts remain visible | ✅ 16 `[VERIFY]`, 5 open conflicts, full missing-inputs list |
| Reconciliation report exists | ✅ This document |

---

## 13. Next phase

**Continue structured business and client-data intake.** Do not start prototyping.

1. **Request the production logo vector files.** Every creative deliverable is downstream of them, and the current direction is logo-led by definition. This is the single highest-value input available — [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md) B1.
2. **Start the photography conversation now.** It has the longest lead time of any input; `/about`, `/work` and `/industries` all depend on it — C9.
3. **Resolve O-1** — confirm the repository is private, or relocate the named client list.
4. **Select evidence-rich case studies** and begin permission requests. All candidates are at `IDENTIFIED`; none is publishable.
5. **Confirm the direct-delivery vs partner-coordination boundary** per pillar — B8. Service-page copy cannot be honest without it.
6. **Verify legal and contact facts** — B4, B5, B6.
7. **Build two logo-led hero prototypes** — but only after the content gate, and only once B1 and B2 are resolved.

Each new batch runs through [prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md](../../prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md).

---

## 14. One process observation

Recorded because it explains why this reconciliation was needed at all.

**Phase 0 developed a full creative direction before the brand guideline was in the repository.** The Via-We logo already encoded growth, partnership, and connection — precisely the positioning the design was trying to express — and it was never considered, because it was not available. An entire concept cycle was spent inventing a metaphor while an authentic one sat outside the repository.

The structural fix is already in place: the **documentation gate now precedes the creative gate** ([governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §11). The practical fix is §13 above — **gather inputs before generating directions.**
