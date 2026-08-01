# AGENTS.md — Via-We

**Operating contract for every AI agent and developer.** Short by design. Deep detail is linked, not duplicated.

**Last reconciled:** 2026-08-01 · [reconciliation report](docs/reviews/2026-08-01-documentation-reconciliation.md)

---

## 1. Read this first

| # | Document |
|---|---|
| 1 | **This file** |
| 2 | [docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md](docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) — **the source of truth** |
| 3 | [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) |
| 4 | Accepted ADRs in [docs/decisions/](docs/decisions/) |
| 5 | [PRODUCT.md](PRODUCT.md) |
| 6 | [Current creative direction](docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md) · [current motion direction](docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md) |
| 7 | [Evidence register](docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md) |
| 8 | [Missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md) |
| 9 | [Redacted operations summary](docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md) |
| 10 | The repository-local skill for the active task — read by exact path under `.agents/skills/` |

---

## 2. Project status

**Pre-development.** No application code, no `package.json`, no dependencies. This repository currently holds documentation, governance, and vendored agent skills only.

**Do not initialise an application, install dependencies, or write application code without an approved build prompt.**

---

## 3. What Via-We is

**Business Growth & Execution Company.** `[CONFIRMED]`

> Via-We brings digital marketing, business setup, franchise expansion, technology development, and recruitment under one coordinated execution team.

**Headline:** *We Build, Brand & Grow Businesses.* `[CONFIRMED]`

Not only a digital-marketing agency. It coordinates parts of business execution normally split across separate vendors.

### 3a. Naming — binding, do not deviate

| | |
|---|---|
| **Official name, everywhere** | **VIA-WE Services Pvt. Ltd.** |
| **Exact tagline** | **`YOUR DREAMS OUR AIM`** — **no comma**, ever |
| **"360"** | A **strategic and visual concept only** |

> **⛔ Never write `Via-We 360`, `VIA-WE 360`, or `Via-We 360 Services Pvt. Ltd.`**
> "360" is **not** part of the legal name, the public brand name, the logo, the wordmark, or the tagline. It appears only as a concept in prose — "a 360-degree business execution company" — and visually, through motion.
>
> **Never claim Via-We performs literally every possible service.** "360-degree" means connected coverage across its five active services.
>
> **The logo is final and must remain unchanged.** Do not add "360" to it, redraw it, or trace the raster reference.

The exact **legal registered** spelling ("Private Limited" vs "Pvt. Ltd.") is a separate open question pending the incorporation certificate — see [missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md).

---

## 4. Version 1 active services — five

Per [ADR-002](docs/decisions/ADR-002-v1-active-service-scope.md):

1. Digital Marketing & Branding
2. Business Setup
3. Franchise Solutions
4. Web & App Development
5. Hiring & Recruitment

**Not standalone V1 pillars** — do not place in top-level navigation: Business Consulting & Growth Strategy · Via-We Connects · Skill Development · Product Analysis · Product Services · Printing Services · Infrastructure Making · Offline Marketing.

**Retained as sub-capabilities:** offline marketing, print and own-brand building → Digital Marketing & Branding · infrastructure coordination → Business Setup · recruitment → Hiring & Recruitment.

> **Any earlier document naming seven pillars is superseded.**

---

## 5. Language

**Version 1 is English only.** `[CONFIRMED]`

Do not add Telugu copy, navigation, or bilingual layouts. Multilingual support is a later decision.

---

## 6. Service architecture — data, never structure

Per [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md) §3. Binding on any design.

Active services drive navigation, the homepage service experience, the logo-segmentation animation, forms, CRM categories, analytics, and service pages — all from one list.

**Never hardcode:** five wedges or segments · five animation timelines · five routes in UI logic · geometry that breaks when the count changes.

**Acceptance test:** activating a sixth service is one record with `status: "ACTIVE"` and nothing else.

---

## 7. Creative status

| | |
|---|---|
| **Current direction** | Logo-led "Connected Growth Mark" — growth curve, partnership curve, connection mesh, curves merge, mark expands into active service segments |
| **Status** | **PROPOSED. Not approved. Not final.** [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md) |
| **Superseded** | Krishna-delta · Distributary · canal-network · irrigation/survey-map — [ADR-003](docs/decisions/ADR-003-distributary-direction-rejected.md). **Never activate these.** |
| **Animation stack** | **None selected.** [ADR-001](docs/decisions/ADR-001-via-we-animation-stack.md) is superseded; the choice is re-opened and must not be made in a documentation phase |

**No concept becomes final without:** desktop prototype · mobile prototype at 360 px · reduced-motion version · ten-second clarity test · performance review · Vijay's approval.

---

## 8. Evidence labels

Every business statement carries one:

| Label | Meaning |
|---|---|
| `[CONFIRMED]` | Directly confirmed by Vamshi for Version 1 |
| `[CLIENT-SOURCE]` | Supplied by Vijay or a Via-We internal document |
| `[INTERNAL]` | Operational information, not automatically public |
| `[HISTORICAL]` | Older brochure/site material that may be outdated |
| `[PROPOSED]` | Recommendation, not yet approved |
| `[VERIFY]` | Requires current legal or operational confirmation |
| `[PUBLIC-BLOCKED]` | Must not be published yet |
| `[PUBLIC-READY]` | Approved and supported for public use |

**No agent may remove an uncertainty label without evidence.**

---

## 9. No-hallucination rules

Do not:

- Convert estimates into facts, or approximations into exact public claims
- Convert tracker rows into an active-client count
- Convert a strategy document into performance results
- Convert planned features into live features
- Convert old brochure services into current pillars
- Convert an old address into an active branch
- Convert raster artwork into an official vector
- Infer client permission, or that all tracked work is current
- Infer that every service is delivered directly by Via-We rather than partner-coordinated
- Invent pricing, testimonials, metrics, awards, partnerships, team members, legal capabilities, or a technology stack

---

## 10. Publication rules

**Blocked until documented proof and permission exist** — see the [evidence register](docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md):

client counts · active-client counts · monthly volume figures · client logos · campaign metrics · partnerships · testimonials · branches · 24/7 support · guaranteed results · franchise returns.

Also binding:

1. **All public copy requires Vijay's approval before merging.**
2. **Do not present planned features, services, or offices as available.**
3. **No franchise return guarantees, investment advice, or "verified" language** without a documented verification process. Legal, financial, tax and agreement work requires qualified professionals.
4. **No fake testimonials, fake profiles, fake metrics, or AI-generated team/office/client imagery.**
5. **All forms must record consent** — privacy and marketing communication at minimum.
6. **Do not publish pricing** without Vijay's written approval.
7. **Never copy content from the old via-we.in site** without verification.
8. Public service pages must distinguish **direct delivery**, **partner coordination**, and **consultation**.

---

## 11. Privacy

**Never commit:** raw lead exports · phone numbers · personal emails · candidate data · KYC · contracts · internal pricing · credentials · ad-account IDs · raw private spreadsheets · unapproved campaign results.

Sensitive data lives under `private/`, which is Git-ignored. Produce **redacted summaries only**. Report paths and counts, never PII values — including in terminal output.

---

## 12. Instruction precedence

1. Explicit current task instruction approved by Vamshi
2. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
3. Accepted ADRs
4. `AGENTS.md`
5. Approved product requirements
6. Approved content/evidence register
7. `PRODUCT.md`
8. `README.md`
9. Current approved design/motion documents
10. Repository-local skills
11. External/global skills
12. Historical brochures and old website material

**Third-party skills guide process. They do not define Via-We's business, brand, or creative direction.** Read repository-local copies by exact path under `.agents/skills/`; a globally installed skill of the same name may be a different, older version.

---

## 13. Gates

| Gate | Passes when |
|---|---|
| **Documentation** | Current docs agree, evidence status is visible, superseded material is marked, no PII is committed |
| **Creative** | Two hero prototypes exist, one is selected, mobile / reduced-motion / Vijay review all pass |
| **Build** | Sitemap, content model, production logo assets, legal and contact facts, and initial case-study assets are all approved |

Work must not skip a gate. The build gate is currently **blocked** — see [missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md).

---

## 14. Writing tone

Direct sentences. Confident but evidence-based. Outcome-oriented.

Never "best agency", "No. 1", "guaranteed success", "100% result", "world-class" without proof. Prefer concrete service descriptions with scope, process and deliverables.

---

## 15. When new information arrives

Follow [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §3 and run [prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md](prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md). Record conflicts; never resolve them silently. Never delete historical documents — mark them superseded.
