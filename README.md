# Via-We

Repository for **Via-We Services Pvt. Ltd.** — a Business Growth & Execution Company operating from Vijayawada, Andhra Pradesh.

This repository currently holds **documentation, governance, and vendored AI agent skills**. There is no application yet.

---

## Current phase

> **Documentation and evidence intake.** Not a build phase.

| | |
|---|---|
| Application code | **None.** No `package.json`, no framework, no dependencies |
| Creative direction | Logo-led "Connected Growth Mark" — **proposed, not approved** |
| Animation stack | **Not selected.** Deliberately deferred |
| Build gate | **Blocked** — see [missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md) |

There are no build, dev, or test commands, because there is no application to run. Any instruction to `npm install` or `next dev` is out of date.

---

## Source of truth

**[docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md](docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md)**

Every other document derives from it. Where any two documents disagree, apply the authority order in [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §1.

---

## Required reading order

1. [AGENTS.md](AGENTS.md) — the operating contract
2. [docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md](docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) — source of truth
3. [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md)
4. Accepted ADRs in [docs/decisions/](docs/decisions/)
5. [PRODUCT.md](PRODUCT.md)
6. [Current creative direction](docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md) and [current motion direction](docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md)
7. [Evidence register](docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md)
8. [Missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md)
9. [Redacted operations summary](docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md)
10. The repository-local skill for your task, read by exact path under `.agents/skills/`

**Documents marked `status: superseded` are decision history.** Read them to understand why something was rejected. Never build from them.

---

## Current facts

- **Five** active Version 1 service pillars: Digital Marketing & Branding · Business Setup · Franchise Solutions · Web & App Development · Hiring & Recruitment
- **Version 1 is English only.** No Telugu, no bilingual layouts
- The **Krishna-delta / Distributary** creative direction is **rejected** — [ADR-003](docs/decisions/ADR-003-distributary-direction-rejected.md)
- The service list is **data, not structure**. Activating a sixth service must be a content change — [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md)

---

## Structure

```text
AGENTS.md          Operating contract — read first
PRODUCT.md         Product definition
README.md          This file
CLAUDE.md          Claude-specific operating instructions
CHANGELOG.md       Documentation change history

docs/
  product/         Source of truth, evidence register
  governance/      Document authority and change policy
  intake/          Living data intake template; pending repo-safe batches
  brand/           Brand documentation (logo files live in public/brand)
  operations/      Redacted operations summaries
  design/          Creative and motion direction (current + superseded)
  decisions/       ADRs
  planning/        Missing inputs, build planning
  reviews/         Audits, reconciliations, intake reports
  research/        External research (agency teardown)

prompts/           Reusable prompts for future phases
private/           GIT-IGNORED. Raw client data, PII, spreadsheets
public/
  brand/           Production logo files (pending)
  media/           leadership · office · team · shoots · clients · case-studies · video · brand

.agents/skills/    Vendored third-party agent skills — canonical copies
.claude/skills/    Symlinks into .agents/skills/
```

---

## Privacy boundary

**This is not optional.**

| Never commit | Safe to commit |
|---|---|
| Raw lead exports, phone numbers, personal emails | Redacted operations summaries |
| Candidate data, KYC, contracts | Approved case-study copy |
| Internal pricing, credentials, ad-account IDs | Approved media with recorded permission |
| Raw private spreadsheets | Brand guidelines, public logo assets |
| Unapproved campaign results | Product and architecture documents |
| | Evidence status without PII |

Sensitive material belongs under `private/`, which is Git-ignored. Report **paths and counts, never values** — including in terminal output.

---

## Adding new data

1. Put the raw batch in `private/intake/inbox/<BATCH-NAME>/` — or `docs/intake/pending/<BATCH-NAME>/` if it is genuinely repository-safe.
2. Fill in a copy of [docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md](docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md).
3. Run [prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md](prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md).
4. It produces `docs/reviews/YYYY-MM-DD-intake-<BATCH-NAME>.md` and updates the affected documents.

Conflicts are **recorded, never resolved silently**. Historical documents are **marked superseded, never deleted**.

---

## Running the prompts

Run from the repository root. Each states its own scope and prohibitions.

| Prompt | Use when |
|---|---|
| [VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md](prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md) | A new batch of business or client information arrives |
| [VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md](prompts/VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md) | A repository-wide product or scope decision changes |

---

## Current blockers

| Blocker | Blocks |
|---|---|
| **Production logo vector files** | All creative prototyping — a logo-led direction cannot be built from raster artwork |
| Deadhead Bold licence and web suitability | The type system |
| Final tagline decision | Header, hero, footer, logo lockup |
| Current legal details — name, CIN, offices | The about page, the footer, launch |
| Current phone, WhatsApp, email | Every contact route on every page |
| Leadership names and titles | The about page |
| Client permissions and case-study evidence | `/work` and all proof |
| Direct-delivery vs partner-coordination boundary | Honest service-page copy |
| Creative approval from Vijay | The build gate |

Full list with owners: [docs/planning/VIA-WE_MISSING_INPUTS.md](docs/planning/VIA-WE_MISSING_INPUTS.md)

---

## Gates

| Gate | Passes when | Status |
|---|---|---|
| **Documentation** | Docs agree, evidence status visible, superseded material marked, no PII committed | ✅ Passed 2026-08-01 |
| **Creative** | Two hero prototypes exist, one selected, mobile / reduced-motion / Vijay review pass | ⛔ Blocked on logo vectors |
| **Build** | Sitemap, content model, production logo assets, legal and contact facts, initial case-study assets approved | ⛔ Blocked |
