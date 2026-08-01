---
status: current
stage: exploration
created: 2026-08-01
adr: docs/decisions/ADR-004-logo-led-extensible-service-motion.md
---

# Via-We — Current Creative Direction

**Status: EXPLORATION. Not a design system. Not approved.**

> This document records **only** the direction currently being explored and the questions still open. It deliberately does not specify a palette, a type scale, layouts, or components — those are written *after* a prototype is approved, from the built result, not before it.
>
> **Previous direction:** [Distributary — superseded](VIA-WE_CREATIVE_DIRECTION_v1.md) · rejected in [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md)
> **This direction:** proposed in [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) — **not approved**

---

## 1. What Via-We is

**Business Growth & Execution Company.** `[CONFIRMED]`

> Via-We brings digital marketing, business setup, franchise expansion, technology development, and recruitment under one coordinated execution team.

**Primary headline:** *We Build, Brand & Grow Businesses.* `[CONFIRMED]`

**Core difference:** Via-We is not only a digital-marketing agency. It coordinates several parts of business execution that are normally split across different vendors.

**Five active pillars** ([ADR-002](../decisions/ADR-002-v1-active-service-scope.md)): Digital Marketing & Branding · Business Setup · Franchise Solutions · Web & App Development · Hiring & Recruitment.

---

## 2. The design problem

Not "make it look premium." Three concrete problems:

1. **An unfamiliar category.** "Business Growth & Execution Company" is not a category a visitor arrives knowing. The site must explain it, not assert it.
2. **Coordination is invisible.** Five services listed look like five services. The product is the *connection* between them, and a list cannot show a connection.
3. **No approved proof yet.** No client logo, metric, testimonial, or case study is currently cleared for publication — see the [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md). The design must earn confidence without them, and must accommodate them gracefully as they arrive.

Problem 3 is a timing constraint, not a permanent one. The design must work **today** with descriptions only, and get better as approved proof lands.

---

## 3. The direction under exploration — "Connected Growth Mark"

The Via-We logo is the source, because it already means the right things:

| Logo element | Stated meaning | What it gives the site |
|---|---|---|
| Upward curve | The letter **V**; client growth | The outcome Via-We sells |
| Downward curve | **WE** | The partnership, not the vendor relationship |
| Mesh / network | Connection between Via-We and the client; company expansion | **The coordination claim, already drawn** |

**The sequence** (`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §6):

1. The two curves begin separated
2. They enter from opposite sides
3. The mesh connection resolves as they meet
4. The full Via-We symbol forms
5. The symbol expands into the **active service segments** — Brand & Market · Set Up · Franchise · Build Digital · Hire
6. Each segment can reveal real work, people, campaigns, interfaces, or outcomes
7. The system expands to six or seven services **without a redesign**

**Why this is a better starting point than what it replaced:** it derives from an asset Via-We owns, with meaning the company authored, and the narrative *is* the positioning argument rather than a decoration of it.

---

## 4. What must be true of any approved design

Binding regardless of which prototype wins.

| # | Constraint | Source |
|---|---|---|
| 1 | **Active services are data, never structure.** Activating a sixth service is one record change — nothing else | [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §3 |
| 2 | A visitor understands what Via-We does within **ten seconds** | Business Truth v2 §8 |
| 3 | The site routes visitors to the correct service | Business Truth v2 §8 |
| 4 | Works at **360 px**, not just 390 px | Audience device reality |
| 5 | Complete under `prefers-reduced-motion` — no information lost | Policy §9 |
| 6 | Readable and navigable **without JavaScript** | Principle |
| 7 | No scroll-jacking, no long intro loader | `AGENTS.md` |
| 8 | Measured on mid-tier Android over throttled 4G | Audience device reality |
| 9 | **No AI-generated team, office, or client imagery** | `AGENTS.md` |
| 10 | No unapproved claim, metric, logo, testimonial, or partnership appears anywhere | `AGENTS.md`, evidence register |

---

## 5. Brand inputs available today

From `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §5. **These are inputs, not a design system.**

| Input | Value | Status |
|---|---|---|
| Brand name | Via-We | `[CONFIRMED]` |
| Legal lockup | Via-We Services Pvt. Ltd. | `[VERIFY]` |
| Tagline | "Your Dreams Our Aim" | **`[VERIFY]`** — final tagline decision is listed as missing |
| Guideline colours | `#1B4B77` · `#3582AD` · `#3B8EC0` · `#4AD3F3` | `[CLIENT-SOURCE]` |
| Guideline display face | Deadhead Bold | **Blocked** — licence and web-delivery suitability unverified |
| Guideline supporting face | Roboto Medium | `[CLIENT-SOURCE]` |
| Production logo vectors | Symbol, horizontal, white, one-colour, wordmark, favicon, editable source, lockups with/without tagline | **Missing — hard blocker** |

**Two honest observations, for the prototype phase to resolve:**

- The four guideline colours are all blues in a narrow range. That is a coherent brand signal but a thin working palette — it provides no neutral ground, no text colour, and no state colours for error, success, or focus. A working palette must be *derived* from these, with contrast verified, without inventing a new brand colour.
- **Deadhead Bold cannot be assumed.** If its licence does not permit web embedding, a substitute display face must be chosen and approved by Vijay — that is a brand decision, not a developer's.

---

## 6. Open questions

Must be answered before or during the prototype phase.

| # | Question | Blocks | Owner |
|---|---|---|---|
| C-1 | Are the production logo vector files available? | **All prototyping.** A logo-led direction cannot be built from raster artwork | Vijay |
| C-2 | Is Deadhead Bold licensed for web embedding? If not, which display face? | Type system | Vijay |
| C-3 | Is "Your Dreams Our Aim" the final tagline, or is it retired? | Header, hero, footer, logo lockup | Vijay |
| C-4 | Does the logo sequence play on every route or only on `/`? | Motion scope, performance budget | Prototype |
| C-5 | With no approved proof yet, what does a service segment reveal — a description, or nothing? | Whether step 6 of the sequence is buildable today | Prototype + evidence register |
| C-6 | Is the site's confidence carried by the mark, or by the work? | Determines how much weight the opening sequence carries | Vijay + prototype |
| C-7 | Which pillars are **directly delivered** vs **partner-coordinated**? | Honest service-page copy; Business Truth v2 §2.2 requires the distinction | Vijay |

---

## 7. Retained from previous work

Not everything from the superseded direction is discarded.

**Still valid and still governing** — from the [agency reference teardown](../research/2026-08-01-agency-reference-teardown.md), which is direction-neutral:

- All five reference agencies are **proof-led**. Via-We's proof is not yet approved, so the site cannot copy their playbook.
- Use one vocabulary across nav, tags, routes, forms and analytics — reinforced here by the service registry.
- Claim first, proof second.
- Publish only undisputable facts as statistics.
- Expose a real contact route in plain text. Meaningful for this audience, and free.
- Segment conversion by intent.
- Withholding an available device is a legible authorship signal.

**Still valid as anti-patterns** — see `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` §11, which remains worth reading despite the document being superseded. In particular: no unsubstantiated metrics, no logo walls, no awards carousel, no invented category, no numbering applied to non-sequences, no localised URL without localised content.

---

## 8. What happens next

1. Gather the missing brand inputs — production logo vectors first ([missing inputs](../planning/VIA-WE_MISSING_INPUTS.md))
2. Resolve C-2 and C-3 with Vijay
3. Build **two** hero prototypes, desktop and mobile at 360 px, each with a reduced-motion version
4. Run the ten-second clarity test with real SME founders
5. Performance review on mid-tier Android
6. Vijay selects one
7. **Only then** write the design system — from the built result, not ahead of it
