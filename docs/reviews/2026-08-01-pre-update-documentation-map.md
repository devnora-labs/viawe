---
status: current
type: point-in-time audit
created: 2026-08-01
---

# Pre-Update Documentation Map — Phase A

**Date:** 2026-08-01
**Phase:** Documentation reconciliation, Phase A (audit before any edit)
**Purpose:** Record the state of every Via-We document **before** reconciliation against `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`, so the changes made in Phase B are auditable and reversible.

**Method:** every Via-We Markdown file read in full. Assumption counts below are from case-insensitive searches run before any edit. Third-party skills were read by exact repository-local path and **not modified**.

---

## 1. Baseline at audit time

| Property | Value |
|---|---|
| Branch | `main` |
| Latest commit | `c35e408` — "init" |
| Working tree | 3 untracked paths: `.github/`, `docs/`, `ruvector.db` |
| Tracked files | 222 (217 belong to five vendored third-party skills) |
| Application code | **None.** No `package.json`, no framework, no source files |
| Via-We Markdown (excluding skills) | 13 files |
| `.gitignore` | **Absent** at audit start |
| `CLAUDE.md` | **Absent** at audit start |

---

## 2. Document inventory

Authority column uses the order in `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §1.

| # | File | Purpose | Authority | Status before Phase B |
|---|---|---|---|---|
| 1 | `AGENTS.md` | Contribution rules, non-negotiables, evidence labels, stack, routes, taxonomy | 4 | **Stale** — seven pillars, external handoff pointer |
| 2 | `PRODUCT.md` | Business identity, positioning, pillars, phases, sitemap, tech table | 7 | **Stale** — seven pillars, Connects as pillar, external handoff pointer |
| 3 | `README.md` | — | 8 | **Placeholder** — one word (`viawe`) |
| 4 | `docs/reviews/2026-07-31-via-we-repository-recon.md` | Repository/skills/architecture audit | Review | **Historical, accurate as written** — describes a seven-pillar repo that no longer exists |
| 5 | `docs/research/2026-08-01-agency-reference-teardown.md` | Teardown of 5 agency sites | Research | **Current, direction-neutral** — needs a scope note only |
| 6 | `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | Distributary concept, palette, type, layout, signature | 9 | **Superseded** |
| 7 | `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | Motion doctrine, tokens, budgets, scroll/3D policy | 9 | **Superseded** |
| 8 | `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | Per-route motion for 20 routes | 9 | **Superseded** |
| 9 | `docs/decisions/ADR-001-via-we-animation-stack.md` | Zero-dependency animation stack | 3 | **Superseded / re-opened** |
| 10 | `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | 10-milestone build plan | 5 | **Superseded** |
| 11 | `docs/reviews/2026-08-01-phase-0-self-critique.md` | Self-critique of the Phase 0 set | Review | **Historical** |
| 12 | `.github/copilot-instructions.md` | Mermaid extension pointer | 11 | Tool-generated, untracked |
| 13 | `.github/instructions/mermaid.instructions.md` | Mermaid workflow, `applyTo: "**"` | 11 | Tool-generated, untracked |

**Newly placed during this run** (supplied in-conversation, transcribed to disk): `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`, `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md`, `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md`, `prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md`, `prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md`.

---

## 3. Service-count assumptions found

Every file below assumed **seven** active pillars including Business Consulting and Via-We Connects.

| File | "seven pillar"-family matches | Connects matches | Business Consulting |
|---|---:|---:|:--:|
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | 24 | 9 | Yes |
| `docs/research/2026-08-01-agency-reference-teardown.md` | 9 | 0 | No |
| `docs/reviews/2026-07-31-via-we-repository-recon.md` | 5 | — | Yes |
| `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | 4 | 1 | No |
| `docs/reviews/2026-08-01-phase-0-self-critique.md` | 4 | 0 | No |
| `PRODUCT.md` | 2 | 9 | Yes |
| `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | 2 | 9 | No |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | 2 | 7 | No |
| `AGENTS.md` | 1 | 3 | Yes |

**Impact:** the whole Phase 0 design set is structurally built on seven channels. This is not a wording problem — the Distributary signature element *drew* seven channels, and the route map defined `/connects`, `/connects/events`, `/connects/events/[slug]`. Correcting the count is not an edit to those documents; it is a reason to supersede them.

---

## 4. Language assumptions found

| File | Telugu matches | Nature |
|---|---:|---|
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | 17 | **Active requirement** — Anek Telugu specified as a matched display sibling; bilingual setting was Concept C's signature; Q-C1 raised as an open question |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | 2 | Gate G9, "Telugu in V1?" |
| `docs/reviews/2026-08-01-phase-0-self-critique.md` | 1 | Commentary |

**Impact:** Business Truth v2 §4 settles this — **English only, [CONFIRMED]**. The type system's bilingual justification falls away with it.

---

## 5. Creative and motion direction found

| File | Delta/canal/survey matches | Role |
|---|---:|---|
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | 24 | The concept itself — "Distributary", the Intake, survey-sheet world, silt/paddy/barrage palette |
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | 5 | The rejection |
| `docs/reviews/2026-08-01-phase-0-self-critique.md` | 5 | Critique of the concept |
| `docs/governance/…CHANGE_POLICY.md` | 3 | The rejection |
| `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | 3 | Signature = "the Intake resolve" |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | 2 | Milestone 4 builds the Intake |
| `docs/decisions/ADR-001-via-we-animation-stack.md` | 1 | Stack chosen *because* the signature was an SVG survey drawing |

**Impact:** the rejection reaches further than the design documents. ADR-001's central argument — that zero animation dependencies suffice — was derived from a motion system containing exactly one authored moment. Business Truth v2 §8 now specifies *"a premium, highly animated corporate and lead-generation website"*, and §14 lists "final animation stack" under **Not ready now**. ADR-001 therefore cannot stand as an accepted decision.

---

## 6. Animation-stack decisions found

| Decision | Source | Disposition |
|---|---|---|
| Zero animation dependencies; CSS + SVG + WAAPI + View Transitions | ADR-001 §2 | **Re-opened.** Derived from a superseded motion system; V1 is now "highly animated" |
| GSAP, Three.js, Lenis rejected | ADR-001 §3 | **Re-opened**, not re-approved |
| No scroll-jacking, no pinning | ADR-001 §6, `AGENTS.md:117` | **Survives** — originates in `AGENTS.md`, not in ADR-001 |
| Reduced motion complete, never a blanket kill | Motion System §3.7 | **Survives as a principle** — reaffirmed by policy §9's prototype gate |
| Performance budgets (LCP/CLS/INP, mid-tier Android) | Motion System §7 | **Survives as a principle**, numbers to be re-derived once the logo-led direction is prototyped |
| shadcn for utilitarian UI only | ADR-001 §5.4 | **Re-opened** — no UI framework decision is current |

---

## 7. Routes / sitemap found

Three different route sets existed before this run:

| Source | Shape | Status |
|---|---|---|
| `AGENTS.md:71-89` | `/solutions/[service-slug]` dynamic, `/franchise`, `/connects`, `/work`, `/insights` | **Superseded** |
| `PRODUCT.md:80-110` | Five static `/solutions/*`, `/connects/events/*`, `/team`, `/work/[slug]` | **Superseded** |
| `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | 20 routes, PRODUCT.md shape | **Superseded** |
| **`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §8** | `/services/*` (five), `/industries`, `/franchise-disclaimer`, **no `/connects`**, **no `/team`** | **Current, subject to product approval** |

**Note:** recon conflict **C-4** (static vs dynamic service routes) is now resolved in favour of five static `/services/*` routes. Recon conflict **C-5** (no route for the Franchise Disclaimer) is resolved — `/franchise-disclaimer` now exists in the current route direction. **Event Terms has no route**, because Connects is no longer a V1 pillar; this conflict is closed by scope reduction rather than by adding a route.

---

## 8. Public claims found in existing documentation

| Claim | Where | Label before | Disposition |
|---|---|---|---|
| CIN `U70200AP2025PTC117722` | `PRODUCT.md:15` | "must verify before launch" | **[VERIFY]** — retained, still unverified |
| Incorporation 11 Feb 2025, RoC Vijayawada | `PRODUCT.md:16` | unlabelled | **[VERIFY]** — Business Truth v2 §13 lists "current legal company details" as missing |
| Registered office, Mangalagiri | `PRODUCT.md:18` | unlabelled | **[VERIFY]** |
| Vijay Budati — Founder & CEO; Krishnaveni Budati — MD | `PRODUCT.md:19` | "(unverified)" | **[VERIFY]** — §13 lists leadership as missing |
| Phone [phone redacted] | `PRODUCT.md:20` | "(unverified)" | **[VERIFY]** — §13 lists current phone as missing |
| Hyderabad, Bengaluru expansion | `PRODUCT.md:22` | "planned" | **[VERIFY]** — §13 lists office/branch details as missing |
| Seven pillars | `AGENTS.md`, `PRODUCT.md` | asserted | **Superseded** → five |
| Via-We Connects as a V1 service | `PRODUCT.md:58` | asserted | **Superseded** → not a V1 pillar |

**No unsupported performance claim, client count, metric, testimonial, award, or partnership existed anywhere in the pre-update documentation.** That discipline is preserved.

---

## 9. External file dependencies found

| Dependency | Referenced by | Status |
|---|---|---|
| `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md` | `AGENTS.md:7`, `PRODUCT.md:3` | **Unreachable, and now superseded.** Business Truth v2 replaces it as the authority. Both pointers are removed in Phase B — this closes recon conflict **C-1** |
| `docs/reviews/2026-08-01-via-we-source-intake-and-asset-audit.md` | Reconciliation prompt §2 | **Does not exist.** Recorded as a missing input; reconciliation proceeded without it |
| `~/.claude/skills/ui-ux-pro-max/` (older global copy) | Agent runtime | **Still shadowing** the repository copy — recon **C-2**, open |
| `skills-lock.json` hashes | Repository | **Still unverifiable** — recon **C-3**, open |
| Deadhead Bold (display face in the brand guideline) | Business Truth v2 §5 | **Licence and web-delivery suitability unverified** — must not be used on the website yet |

---

## 10. Contradictions found before Phase B

| # | Contradiction | Source A | Source B | Resolution in Phase B |
|---|---|---|---|---|
| P-1 | Seven pillars vs five | `AGENTS.md`, `PRODUCT.md`, all Phase 0 design docs | Business Truth v2 §2 | **Five.** ADR-002 records it |
| P-2 | Connects is a V1 pillar vs not confirmed | `PRODUCT.md:58` | Business Truth v2 §3 | **Not a V1 pillar** |
| P-3 | Business Consulting is a V1 pillar vs not standalone | `PRODUCT.md:57` | Business Truth v2 §3 | **Not standalone** |
| P-4 | Telugu ready / open question vs English only | `CREATIVE_DIRECTION_v1` | Business Truth v2 §4 | **English only** |
| P-5 | Distributary recommended vs rejected | `CREATIVE_DIRECTION_v1` §3.4 | Business Truth v2 §6 | **Rejected.** ADR-003 records it |
| P-6 | "One authored moment", zero-dependency vs "premium, highly animated" | `MOTION_SYSTEM_v1`, ADR-001 | Business Truth v2 §8 | **ADR-001 re-opened.** ADR-004 proposes the logo-led direction |
| P-7 | Category "Business Growth Ecosystem" vs "Business Growth & Execution Company" | `PRODUCT.md:26` | Business Truth v2 §1 | **Business Growth & Execution Company** |
| P-8 | Three different route sets | `AGENTS.md`, `PRODUCT.md`, page map | Business Truth v2 §8 | **Business Truth v2 route direction** |
| P-9 | Master handoff is the source of truth vs Business Truth v2 is | `AGENTS.md:7`, `PRODUCT.md:3` | Policy §1 | **Business Truth v2.** Closes recon C-1 |
| P-10 | Palette: survey-sheet greens vs brand-guideline blues | `CREATIVE_DIRECTION_v1` §4.1 | Business Truth v2 §5 | **Brand guideline blues** are the only sourced palette |
| P-11 | Type: Anek/Noto/Martian Mono vs Deadhead/Roboto | `CREATIVE_DIRECTION_v1` §4.2 | Business Truth v2 §5 | **Guideline faces**, with Deadhead licence unverified — open |
| P-12 | Fixed 7-channel diagram vs data-driven service registry | `CREATIVE_DIRECTION_v1` §4.5 | Business Truth v2 §7 | **Data-driven registry.** ADR-004 records it |

**Twelve contradictions, all resolved by superseding rather than by editing**, because in every case the superseded statement was structural rather than cosmetic.

---

## 11. Privacy observations at audit time

- No PII existed in any tracked Markdown before this run.
- `.gitignore` was **absent**; `ruvector.db` (1.55 MB tool artefact) was untracked and unprotected. Created in this run.
- `private/` did not exist. Created and Git-ignored in this run.
- **Flagged for owner decision:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §10 names 23 client accounts and states internal client counts. It was placed in a **tracked** location as instructed. The git remote is `https://github.com/devnora-labs/viawe.git`. If that repository is public, or becomes public, those commercial relationships are exposed. See the reconciliation report for the recommended options.

---

## 12. What Phase B will do

1. Supersede — not delete — documents 6–11 with visible `status: superseded` front matter and a link to the rejecting ADR.
2. Rewrite `AGENTS.md`, `PRODUCT.md`, `README.md`; create `CLAUDE.md`.
3. Create ADR-002 (five-pillar scope), ADR-003 (Distributary rejected), ADR-004 (logo-led, **proposed**).
4. Create the current creative and motion direction documents, containing only the logo-led exploration and its open questions — **not** a design system.
5. Create the evidence register, missing-inputs list, and redacted operations summary.
6. Create `CHANGELOG.md`.
7. Validate and report.
