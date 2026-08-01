---
status: superseded
superseded_by: docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md
rejecting_adr: docs/decisions/ADR-003-distributary-direction-rejected.md
superseded_on: 2026-08-01
reason: Krishna-delta / Distributary direction rejected; V1 scope reduced from seven pillars to five; V1 is English only
---

> # ⛔ SUPERSEDED — DECISION HISTORY ONLY
>
> **Do not build from this document. Do not treat any statement in it as current.**
>
> This document proposed the **Distributary** concept, which has been **rejected**. It also assumes **seven** service pillars, an active **Via-We Connects** pillar, and a **bilingual Telugu/English** type system — all three superseded by `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`.
>
> **Current direction:** [VIA-WE_CREATIVE_DIRECTION_CURRENT.md](VIA-WE_CREATIVE_DIRECTION_CURRENT.md)
> **Rejection recorded in:** [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md)
> **Retained because:** the reference-teardown reasoning, the anti-pattern list (§11), and the concept-evaluation method remain useful precedent. §11's anti-patterns in particular are still worth reading.

---

# Via-We — Creative Direction v1 (superseded)

**Date:** 2026-08-01
**Phase:** 0 — documentation only. No code, no dependencies, no implementation.
**Status:** Proposed. `[PROPOSED]` under the `AGENTS.md` evidence-label scheme. Requires Vijay's approval before Phase 1 begins.
**Inputs:** [AGENTS.md](../../AGENTS.md), [PRODUCT.md](../../PRODUCT.md), [recon](../reviews/2026-07-31-via-we-repository-recon.md), [reference teardown](../research/2026-08-01-agency-reference-teardown.md), and the repository-local skills read by exact path (§10).

---

## 1. Subject, audience, and the homepage's single job

### 1.1 The subject, named concretely

Via-We Services Private Limited is a **business-growth coordinator operating out of Vijayawada, Andhra Pradesh**, incorporated 11 February 2025. It sells one thing: *the removal of vendor fragmentation.*

The concrete situation it addresses is specific and local. A founder in coastal Andhra starting a business today deals with a chartered accountant for registration, a printer for the signboard and cards, a freelancer for the website, a "digital marketing person" for social media, a separate consultant if they want to franchise, and a placement agency when they need staff. Six relationships, six invoices, six vocabularies, no one holding the whole picture. Via-We's proposition is that this becomes **one desk**.

This is the subject. Not "a digital agency." Not "a growth partner." The subject is *coordination across a fragmented local business economy*.

### 1.2 The audience

Seven segments, per [PRODUCT.md:36-44](../../PRODUCT.md#L36-L44). What matters for design is what they have in common and where they differ:

**In common:** they are decision-makers in small and mid-size Indian businesses. They browse on mid-tier Android over variable mobile data. They frequently phone before they submit a form. They are sceptical of agency language and have usually been oversold to before. They read English but Telugu is the ambient language of their commercial life.

**Where they differ:** they arrive with seven completely different questions. "How do I register a company?" and "Which franchise should I invest in?" and "Can you build my app?" are not variations on one intent — they are different products. **This is the central design problem.**

### 1.3 The homepage's single job

> **Make a visitor understand that these seven services are one connected system, and route them to their own entry point — within one screen and without a single unverifiable claim.**

Everything in this document serves that sentence. The constraint clause at the end is not decoration: [AGENTS.md](../../AGENTS.md) rules 1–8 forbid client counts, project counts, metrics, testimonials, partnerships, awards, and guarantees. The homepage must earn confidence without any of them.

### 1.4 Brand thesis

> **Via-We does not sell seven services. It sells the connection between them.**
>
> The website's job is therefore not to list capabilities but to make a structure legible — and the visitor's own position within it findable.

---

## 2. Where distinctive material comes from

Per `.agents/skills/frontend-design/SKILL.md` ("the subject's own world, its materials, instruments, artifacts, and vernacular, is where distinctive choices come from") and `.agents/skills/impeccable/reference/new-work.md` §3.

### 2.1 The rut — named first, so it can be avoided

`new-work.md:43` requires naming the page this category always ships, its predictable opposite, and the brief's own literal reading, and keeping all three out of the candidate list.

| Rut | What it looks like | Why it is a rut |
|---|---|---|
| **R1 — the category default** | Dark navy hero, gradient accent, "We help businesses grow", three animating stat counters, a seven-card icon grid, logo wall, testimonial carousel, gradient CTA band | Every business-services site in this market ships this. It also requires stats and logos Via-We does not have |
| **R2 — the predictable opposite** | Editorial minimal: huge serif display, cream ground, hairline rules, zero radius, small tracked mono labels, generous whitespace | Named explicitly as an AI-design cluster in `frontend-design/SKILL.md:31` and `new-work.md:65`. It is also what imitating Instrument or Clay produces |
| **R3 — the brief's literal reading** | "Via-We" → *via* → road, path, journey → **a continuous line threading the page** | This is the supplied working hypothesis, "The Growth Thread". `new-work.md:43` is explicit: a brief that paints its own picture adds its literal reading to the rut and may spend **at most one candidate** on it |

R3 is carried forward as Concept A, once, and challenged honestly in §3.1. R1 and R2 are excluded.

### 2.2 Seven candidate material systems from the audience's world

Ordered by resonance. Required to span at least three material families — they span seven.

| # | System | Material family | Why it resonates and can carry the mechanism |
|---|---|---|---|
| 1 | **The Krishna delta canal network** — the Prakasam Barrage at Vijayawada and the distributary system feeding coastal Andhra | Cartographic / hydrological | The defining structure of the city and the literal engine of its economy. One intake, many channels, every field fed. It is a *system* diagram that the audience lives inside |
| 2 | **The Telugu composing room** — Vijayawada's newspaper and textbook printing trade | Print / typographic | The local material culture of making a business visible. Metal type, formes, column rules, registration marks, Telugu and Latin set together |
| 3 | **The registration document** — CIN, RoC, GST, Udyam certificate | Bureaucratic document | The exact artefact of Pillar 2. Box grids, seals, tabular figures, the moment a business becomes real |
| 4 | **The shopfront signboard** — bold condensed bilingual lettering, phone number, service list | Vernacular signage | Every SME's first brand asset. Maximum audience recognition |
| 5 | **The kirana ledger / bahi khata** — ruled columns, running balance | Accounting / tabular | Trust and continuity; the language of a business that is being watched over |
| 6 | **The wholesale mandi floor plan** — stall grid, lot numbers, aisles | Spatial / architectural | Many businesses under one roof |
| 7 | **The distribution panel / switchboard** | Industrial | Weakest — drifts toward generic "tech" |

Candidates 1, 2 and 3 became the concepts below. Candidate 4 informs the display type character. Candidates 5–7 are recorded and not used.

---

## 3. Three concepts

### 3.1 Concept A — "The Growth Thread" (the supplied hypothesis)

**Thesis.** A single continuous line runs the length of the site, changing form as it passes each stage of the business journey — idea, setup, brand, marketing, technology, people, franchise, network.

| Attribute | Definition |
|---|---|
| Business meaning | The journey is continuous; Via-We is present at every stage |
| Hero expression | The thread enters the first viewport and begins its descent |
| Typography behaviour | Secondary. Type sits beside the thread |
| Layout logic | Vertical spine; sections hang off the thread left and right |
| Motion logic | Scroll-scrubbed path drawing — the thread extends as the visitor scrolls |
| Media strategy | Thread is the media; photography optional |
| Page transition | Thread persists across routes |
| Mobile | Thread narrows to a left-edge rail |
| Reduced motion | Thread renders fully drawn, static |
| Aesthetic risk | Low |
| Commercial clarity | **Low** — a line does not explain what is being sold |
| Implementation risk | **High** |

**Honest challenge — why this is recommended against.**

1. **It is the brief's literal reading (R3).** "Via" → path → line. It is the first thing any designer, and any model, produces from this name. `new-work.md:65`: *"if someone could guess your aesthetic from the category alone, or from category-plus-avoidance, rework until neither answer is obvious."* A thread is guessable from the name alone.

2. **It is a motion device, not a visual world.** It specifies how something moves without specifying what anything is made of, what colour it is, or how type behaves. Asked what the thread is *made* of, every good answer relocates to Concept B (a water channel) or C (a column rule) — which means the thread is a *property* of a better concept, not a concept.

3. **It has the worst risk-to-differentiation ratio in the set.** A scroll-scrubbed SVG path spanning every section is the most fragile, most expensive, most mobile-hostile pattern available: it needs `getTotalLength`, recalculation on every resize and font load, and it fights `content-visibility`. `animate.md:34` names it directly — *"A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is not a thesis."*

4. **It cannot answer the routing problem.** Seven audiences arrive with seven questions. A thread shows one path. The visitor who wants a franchise must scroll past setup, branding, and marketing to reach themselves.

**Verdict: rejected.** Recorded in full because the prompt asked for it to be challenged, not dismissed. Its one genuine insight — that continuity should be *visible* rather than asserted — is preserved and better served by Concept B.

---

### 3.2 Concept B — "Distributary" ★ RECOMMENDED

**Thesis.** Via-We is the barrage. One intake, seven channels, every business fed. The site is not a line you follow — it is **a network you are already inside, drawn like an irrigation survey sheet.**

**One sentence:** *A working diagram of how a business gets built, drawn in the visual language of the canal system that built this region's economy, in which the visitor can find their own position.*

| Attribute | Definition |
|---|---|
| **Business meaning** | The seven pillars are not a list — they are channels off one intake. Coordination is the structure, not a claim about it |
| **Hero expression** | A cartographic network occupying the first viewport. Seven labelled channels from one intake, each ending in a named node. Renders complete and readable with zero JavaScript |
| **Typography behaviour** | Technical lettering on a survey sheet. Wide, confident display for statements; condensed for labels; tabular mono for identifiers, figures and coordinates. Type is disciplined, not the signature |
| **Layout logic** | The **sheet**: a visible working grid with a margin rule and a title block, as on a survey drawing. Content sits in registered positions on it. Sections are *plates*, not cards |
| **Motion logic** | One authored moment — the intake resolving into seven channels, once, on load, ~900 ms, from an already-visible default. Thereafter the network is *interactive*, not animated: focus a channel, it and its node brighten and the others recede. Nothing else on the site animates on scroll |
| **Media strategy** | **Drawn, not photographed.** SVG linework, channel weights, node markers, territory fills. Photography enters later as evidence in case studies, never as atmosphere |
| **Page transition** | Same-document View Transitions. The network persists as a compressed rail in the header; the active channel stays lit on its own pages |
| **Mobile** | The network re-composes to vertical: intake at top, seven channels as full-width tappable rows with their channel-weight rule intact. Not a shrunken diagram — a re-drawn one |
| **Reduced motion** | Identical, minus the 900 ms intake sequence. Nothing is lost, because the diagram was never hidden |
| **Aesthetic risk** | **High and deliberate** — leading with a diagram rather than a photograph or a slogan (§7) |
| **Commercial clarity** | **High.** The diagram *is* the pitch. It answers "what do you do" and "where do I start" simultaneously |
| **Implementation risk** | **Low.** Inline SVG, CSS custom properties, `:focus-visible`. No animation dependency. No canvas, no WebGL |
| **Uniqueness score** | **9/10** |
| **Via-We fit score** | **9/10** |

**Why it is not generic.** The failure mode is drifting into a force-directed network graph or a particle constellation — the generic "connections" visual. The discipline that prevents it: **it is a survey drawing, not a data visualisation.** Channels have surveyed widths, not animated particles. Nodes are register marks, not glowing dots. The sheet has a margin, a title block, and a scale. Every line is drawn to a rule.

**Why it survives Via-We's constraints.** It requires **zero photography**, **zero client logos**, **zero metrics**, and **zero testimonials**. Given that the repository contains no assets at all ([recon §14](../reviews/2026-07-31-via-we-repository-recon.md)) and rule 1 forbids inventing proof, a direction that is fully authorable today is not merely convenient — it is the only category of direction that can actually ship.

---

### 3.3 Concept C — "The Register"

**Thesis.** Via-We makes a business *legible*. The site is set like a composing forme: everything on a visible grid, type as the primary material, bilingual setting as the signature, real documents as proof objects.

| Attribute | Definition |
|---|---|
| Business meaning | We turn an intention into a registered, named, findable business |
| Hero expression | A large bilingual typographic statement set as a certificate register, with the company's genuinely verifiable facts (incorporation date, registered office, CIN) set as an entry |
| Typography behaviour | **The signature.** Display type at extreme widths, Telugu and Latin set as equals, column rules, hanging figures |
| Layout logic | Multi-column forme with visible column rules |
| Motion logic | Almost none. Type sets into position once, 400 ms |
| Media strategy | Documents and marks as objects; no photography needed |
| Page transition | Cross-fade |
| Mobile | Single column; Telugu/Latin stack |
| Reduced motion | Complete — nothing is lost |
| Aesthetic risk | Medium |
| Commercial clarity | **Medium** — explains legitimacy well, coordination poorly |
| Implementation risk | Very low |
| Uniqueness score | **7/10** |
| Via-We fit score | **6/10** |

**Why not recommended.** Two reasons, both material.

1. **It does not explain coordination.** It explains legitimacy and care beautifully — but a visitor still leaves with seven services listed, not one system understood. The homepage's job (§1.3) goes unmet.
2. **It sits adjacent to a named AI-design cluster.** Broadsheet-editorial with column rules and tracked labels is cluster (3) in `frontend-design/SKILL.md:31` and appears again in `new-work.md:65`. Its bilingual Telugu dimension is what would rescue it — but whether Telugu ships at all is **an unresolved question for Vijay** (§9, Q-C1). A concept whose distinctiveness depends on an unapproved decision is not a safe recommendation.

**What is kept from it.** Its type discipline and its document-as-proof instinct are carried into Concept B as the supporting system. Concept B's type is set the way Concept C would set it — the difference is that in B, type serves the sheet rather than being the signature. This is a supporting system, not a merged concept: **B has exactly one signature and it is the network.**

---

### 3.4 Comparison and recommendation

| Criterion | A — Growth Thread | B — Distributary | C — The Register |
|---|:--:|:--:|:--:|
| Answers "what is this company" in 10s | 3 | **8** | 6 |
| Answers "where do I start" | 2 | **9** | 4 |
| Audience identification (Vijayawada SME) | 3 | 8 | **9** |
| Product clarity (coordination) | 3 | **9** | 5 |
| Uniqueness vs. the ruts | 2 | **9** | 7 |
| Survives zero-asset constraint | 7 | **9** | 9 |
| Survives rule-1 claim constraints | 8 | **9** | 9 |
| Mobile viability | 4 | 8 | **9** |
| Reduced-motion completeness | 7 | **9** | 9 |
| Implementation risk (10 = lowest) | 3 | 8 | **9** |
| Conversion capability | 3 | **9** | 5 |
| **Total /110** | **45** | **95** | **81** |

> ## Recommendation: **Concept B — "Distributary"**

**The case in three sentences.** Via-We's hardest problem is that seven different audiences arrive at one homepage with seven different questions, and the company owns no proof assets to reassure any of them. Distributary solves both at once: it makes the coordination claim *structurally visible* rather than asserted, and it routes seven audiences from the first viewport. It is the only one of the three concepts whose signature element does conversion work rather than decorating it.

**The standing alternative.** Per `new-work.md:49`, the category standard remains permanently available: a conventional business-services site — statement hero over stock-free abstract media, seven service cards, process strip, contact form. If Vijay prefers the familiar path, it will be executed at full fidelity without irony, and Concept B will be withdrawn rather than diluted into it.

**The instrument and the world are separable — the direction's main de-risking property.** Concept B has two independent parts: the **routing instrument** (one intake, seven weighted channels, situation controls) and the **visual world** (Krishna-delta survey drawing). If Q-B2 fails — that is, if the delta reference reads as agricultural rather than commercial to Vijay — **the instrument survives, re-skinned into Concept C's composing-room world**: channels become column rules, nodes become register marks in a forme, the palette shifts from survey sheet to document. Function, routing, accessibility and performance are unchanged; only the material changes. Hero direction H3 (§6) remains the fallback for a failure of the *instrument*, not for a failure of the *metaphor*. These are two different failures with two different, already-specified answers.

---

## 4. Design plan — tokens

Per `frontend-design/SKILL.md:33`, this plan exists before any code and is derived from the brief rather than from habit.

### 4.1 Colour

Six named values, every one derived from a stated source in the Krishna delta survey world. Two additional accessibility variants are declared because the base values do not all meet AA for body text — stated rather than hidden.

| Token | Hex | Source | Role | Contrast on `--vw-sheet` |
|---|---|---|---|---|
| `--vw-sheet` | `#EEF1F0` | Survey paper under working light | Page ground | — |
| `--vw-barrage` | `#14201D` | Barrage concrete in shadow | Body text, headings, structural bands | ~15.4:1 ✅ AAA |
| `--vw-channel` | `#2E5E52` | Krishna water, silt-heavy | **Primary.** Channels, links, primary buttons, active state | ~7.3:1 ✅ AAA |
| `--vw-field` | `#C7CBA9` | Delta paddy under haze | Territory fills, inactive plate backgrounds. **Non-text** | ~1.4:1 ⛔ fills only |
| `--vw-silt` | `#8C8578` | Alluvium | Hairline rules, inactive channel strokes, dividers. **Non-text** | ~2.9:1 ⛔ non-text only |
| `--vw-mark` | `#D4442A` | Surveyor's correction ink | Node markers, "you are here", required-field marks. **≤3% coverage** | ~4.0:1 ⚠ large text / icons only |
| `--vw-silt-deep` | `#5C574D` | (variant) | Secondary and caption text | ~7.0:1 ✅ AAA |
| `--vw-mark-deep` | `#A32E1B` | (variant) | Error text, small text on mark | ~7.1:1 ✅ AAA |

**Colour strategy** (per `new-work.md:61`): **Restrained** — neutral ground, one carrying colour (`--vw-channel`), one marker used at trace coverage. Chosen because five of Via-We's seven audiences arrive to *operate* — to find out how to do something — not to be impressed.

**Light ground, not dark.** Chosen from the physical scene rather than by category habit: this is a document consulted in daylight, on a phone, often outdoors or in a shop. A dark site is harder to read in that scene, costs more on OLED at high brightness, and would land the design in AI-design cluster (2).

**Why this is not an AI default.** Not cream-plus-serif-plus-terracotta: `#EEF1F0` is measurably cooler and greener than the `#F4F1EA` cluster value, the display face is a grotesque, and `--vw-mark` is a cool vermilion used as a mark, not a warm accent used as a field. Not near-black-plus-neon: the ground is light and no value is saturated above 65%. Not blue-purple gradient: **the system contains no gradients at all.** Not broadsheet: the ground carries a working grid and colour fields, not hairline rules on white.

**Dark mode.** Deferred to Phase 1 Milestone 9, and treated as a tonal re-derivation (sheet → `#141A18`, channel lightened to ~`#6FAE9C`), never an inversion. Not a V1 requirement.

### 4.2 Typography

Three faces. All SIL Open Font Licence 1.1 — self-hostable, no per-domain fee, no CDN dependency. Availability and axes verified against `.agents/skills/ui-ux-pro-max/data/google-fonts.csv`.

| Role | Face | Foundry | Axes | Subsets | Licence |
|---|---|---|---|---|---|
| **Display** | **Anek Latin** | Ek Type | `wght` 100–800, `wdth` | latin, latin-ext | OFL 1.1 |
| **Display (Telugu)** | **Anek Telugu** | Ek Type | `wght` 100–800, `wdth` | latin, latin-ext, **telugu** | OFL 1.1 |
| **Body** | **Noto Sans** / **Noto Sans Telugu** | Google | `wght` 100–900 | latin, latin-ext, telugu | OFL 1.1 |
| **Utility / data** | **Martian Mono** | Evil Martians | `wght` 100–800, `wdth` | latin, latin-ext | OFL 1.1 |

**Why Anek.** It is a variable superfamily designed by an Indian foundry specifically so that Latin and nine Indian scripts share one design — Anek Telugu already carries `latin` and `latin-ext` subsets, so a single family can set both scripts with matched proportions and colour. That solves Via-We's bilingual problem *at the design level* rather than by bolting a fallback onto a Western face. Its width axis gives the technical-lettering character the survey world needs. It is not on the default-faces list at `new-work.md:63`.

**Why Martian Mono, and why that is permitted.** `craft-floor.md:37` refuses monospace "as a costume for 'technical' rather than for code, data, or measurement." Here it is used *only* for measurement and identifiers: CIN, phone, channel IDs, node coordinates, form field counters, tabular figures. That is the permitted use, not the refused one.

**Localisation path.** V1 ships Anek **Latin** (smaller file, English only). If Telugu is approved, the swap is to Anek **Telugu** — same superfamily, same design, no visual disruption, one font-file change. Telugu shipping in V1 is **[REQUIRES APPROVAL]** (§9 Q-C1); the type system is ready either way.

**Fallback stacks:**
```
--vw-font-display: "Anek Latin", "Segoe UI", system-ui, sans-serif;
--vw-font-body:    "Noto Sans", system-ui, -apple-system, sans-serif;
--vw-font-data:    "Martian Mono", ui-monospace, "SF Mono", monospace;
```

**Loading:** self-hosted, `woff2`, subset to used ranges, `font-display: swap`, size-adjusted fallback metrics to hold CLS at zero. Preload display and body only — never every variant (`quick-reference.md` `font-preload`).

### 4.3 Type scale

Ratio 1.2 mobile / 1.25 desktop, anchored at 17 px body.

| Step | Mobile | Desktop | Use | Weight | Tracking | Line height |
|---|---:|---:|---|---|---|---|
| `display-1` | 40 | **88** | Hero statement | 700, wdth 112 | −0.03em | 1.02 |
| `display-2` | 32 | 60 | Section plate titles | 600, wdth 105 | −0.025em | 1.08 |
| `heading-1` | 26 | 41 | Page titles | 600 | −0.02em | 1.15 |
| `heading-2` | 21 | 26 | Sub-headings | 600 | −0.01em | 1.2 |
| `body-lg` | 19 | 21 | Lead paragraphs | 400 | 0 | 1.55 |
| `body` | 17 | 17 | Body | 400 | 0 | 1.6 |
| `small` | 15 | 15 | Captions, secondary | 400 | 0 | 1.5 |
| `label` | 13 | 13 | Mono labels, IDs | 500, uppercase | +0.06em | 1.4 |

**Constraints, from `craft-floor.md:12`:** display capped at 88 px (floor allows 96 px / 6rem); tracking never past −0.03em (floor is −0.04em, and the floor itself recommends −0.02/−0.03); body measure **65–72ch**; headings balanced.

**Headline line-breaking:** `text-wrap: balance` on headings of three lines or fewer; `text-wrap: pretty` on body. Display-1 carries author-placed break points; a single-word orphan on a display line is a defect. Every heading is tested at 360, 390, 768, 1280 and 1440 px with real copy — never lorem.

### 4.4 Layout — three options compared

#### Option 1 — "The Sheet" ★ SELECTED

```
┌────────────────────────────────────────────────────────────┐
│ VIA-WE          Solutions  Franchise  Connects  Work  ☰    │  ← thin, sheet-margin rule beneath
├────────────────────────────────────────────────────────────┤
│                                                            │
│  We build, brand and grow                                  │  display-1, left, 2 lines
│  businesses.                                               │
│                                                            │
│  ╭─ INTAKE ─╮                                              │
│  │          ├──── ① Business Setup ───────────◆            │  ← THE SIGNATURE
│  │          ├──── ② Marketing & Branding ─────◆            │    7 channels, surveyed
│  │  Via-We  ├──── ③ Web & App ────────────────◆            │    weights, node marks
│  │          ├──── ④ Consulting & Growth ──────◆            │    every label a real link
│  │          ├──── ⑤ Hiring ───────────────────◆            │
│  │          ├──── ⑥ Franchise ────────────────◆            │
│  ╰──────────╯──── ⑦ Connects ─────────────────◆            │
│                                                            │
│  Where are you starting?  [ Starting ][ Growing ][ … ]     │  ← routing control
│                                                            │
├─ 01 ───────────────────────────────────────────────────────┤  ← plate rule + number
│  WHAT ONE DESK MEANS                                       │
│  Three columns of plain prose. No cards. No icons.         │
├─ 02 ───────────────────────────────────────────────────────┤
│  THE SEVEN CHANNELS                                        │
│  List, not grid. Uneven lengths — mature pillars get more. │
├─ 03 ───────────────────────────────────────────────────────┤
│  HOW WORK RUNS      (a genuine sequence — numbered)        │
├─ 04 ───────────────────────────────────────────────────────┤
│  WORK / FRANCHISE / CONNECTS   (only what is approved)     │
├─ 05 ───────────────────────────────────────────────────────┤
│  ON RECORD  — CIN · incorporated 11 Feb 2025 · Vijayawada  │  ← undisputable facts only
├────────────────────────────────────────────────────────────┤
│  TALK TO US   phone · email in plain text · WhatsApp       │
│  title block: registered office, legal, sitemap            │
└────────────────────────────────────────────────────────────┘
```
Strengths: the network leads; routing is above the fold; plate numbering is honest (it *is* a reading sequence); the title-block footer is native to the world. Weakness: the hero must work on a 360 px screen — solved by the vertical re-composition in §5.4.

#### Option 2 — "Split Intake"

```
┌────────────────────────────────────────────────────────────┐
│ VIA-WE                                        Nav      ☰   │
├──────────────────────────────┬─────────────────────────────┤
│  We build, brand and grow    │   ╭─╮── ① ──◆               │
│  businesses.                 │   │ ├── ② ──◆               │
│                              │   │ ├── ③ ──◆               │
│  One partner across setup,   │   │ ├── ④ ──◆               │
│  branding, marketing,        │   │ ├── ⑤ ──◆               │
│  technology, hiring and      │   │ ├── ⑥ ──◆               │
│  franchise growth.           │   ╰─╯── ⑦ ──◆               │
│                              │                             │
│  [ Book a consultation ]     │   Where are you starting?   │
├──────────────────────────────┴─────────────────────────────┤
```
Strengths: statement and diagram share the fold; conventional and safe. Weakness: **halves the diagram's scale**, which is the whole bet. Two competing focal points. Collapses to Option 1 on mobile anyway.

#### Option 3 — "Intake First"

```
┌────────────────────────────────────────────────────────────┐
│ VIA-WE                                        Nav      ☰   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              ╭──────────╮                                  │
│         ①────┤          ├────⑤                             │
│         ②────┤  VIA-WE  ├────⑥       full-bleed radial     │
│         ③────┤          ├────⑦       network, no headline  │
│         ④────╯          ╰                                  │
│                                                            │
│              Where are you starting?                       │
├────────────────────────────────────────────────────────────┤
│  We build, brand and grow businesses.   ← headline second  │
```
Strengths: maximum commitment; most memorable. Weakness: **a radial network is a hub-and-spoke diagram, which is the generic "connections" visual** the concept must avoid, and it loses the directional meaning of a distributary. Withholding the headline until the second screen is a real conversion risk for an unfamiliar category.

**Selected: Option 1.** It gives the signature full width and true left-to-right distributary direction, keeps the headline first for an unfamiliar category, and puts the routing control above the fold. Options 2 and 3 are recorded, not discarded — Option 2 is the fallback if the diagram tests poorly at scale.

### 4.5 Signature element — "The Intake"

**Definition.** A cartographic distributary drawn in inline SVG: one intake block labelled Via-We, seven channels of surveyed weight leaving it, each terminating in a register-mark node carrying a pillar name. Below it, a row of plain-language situation controls — *Starting · Growing · Franchising my brand · Looking for a franchise · Hiring · Need a website or app · Joining Connects*.

**What it does, in order of importance:**
1. **Routes.** Selecting a situation lights the relevant channel and node and reveals **two** actions — the destination page, and *"Talk to us about this"*, which pre-fills the contact form with the matching `leadType` from the fifteen-value taxonomy ([AGENTS.md:112](../../AGENTS.md#L112)). Seven audiences, seven doors, each door offering a page **and** a conversation, all above the fold. Both are real links and both work without JavaScript.
2. **Explains.** The claim "these seven things are one system" stops being a sentence and becomes a picture.
3. **Identifies.** The linework belongs to the delta this company operates in.

**What it is not** — checked against the prompt's exclusion list (§11.4): not a glowing orb; not floating blobs; not a spinning 3D logo; not a particle field; not a cursor-follower; not a gradient mesh; not a cinematic loader. It is a **working instrument**, and if JavaScript never loads it still renders, still reads, and every node is still a working link.

**Non-negotiable build rules.**
- Server-rendered SVG. No client generation.
- Every node is an `<a>`. The control row is a real `<fieldset>` of radios styled as a segmented control — keyboard-operable, screen-reader-announced.
- Channel weights encode something true (relative maturity of each pillar, once §9 Q-B1 is answered) — never random variation for visual interest.
- Reduced motion removes the 900 ms entrance only. Nothing else changes.
- Total SVG payload budget: **≤ 14 KB** inline, gzipped.

**The anti-flowchart discipline.** The nearest failure mode is not imitating an agency site — it is drifting into a management-consultancy framework diagram or an org chart. Three binding rules prevent it:

1. **The drawing carries a title block and a stated scale**, as a survey plate does. A slide diagram has neither.
2. **Channel weights are surveyed, not uniform.** Seven equal channels are forbidden — equal weights would be simultaneously a lie about the business and a flowchart.
3. **No arrowheads, no boxes-and-connectors, no decision diamonds, no orthogonal routing.** Channels are drawn linework with cartographic terminals; nodes are register marks.

### 4.6 The one aesthetic risk

> **The homepage leads with a diagram instead of a photograph, a video, or a slogan over media.**

Every reference site opens with media or a bold claim over imagery. Via-We opens with a working drawing.

**The risk is real:** diagrams can read as cold, corporate, or infographic-ish; a founder looking for warmth may not find it in the first viewport; and if the drawing is executed at less than full craft it will look like a flowchart in a pitch deck.

**Why it is justified:**
1. Via-We has **zero photography** and rule 5 forbids generating any. The alternative is stock imagery, which `AGENTS.md:117` explicitly rejects and which would make the site indistinguishable from every competitor.
2. The diagram is the **only** device that answers "what is this" and "where do I start" simultaneously, in one screen, for seven audiences.
3. It is honest. It shows the actual product — coordination — rather than a mood.

**Boldness is spent here and nowhere else** (`craft-floor.md:48`). Everything around the Intake is quiet: no section reveals, no parallax, no hover lifts on cards, no gradient, no glass, no decorative motion anywhere on the site.

---

## 5. Homepage blueprint

Section by section. Every content dependency labelled per §8.

### Section 0 — Header
Business purpose: constant access to the seven pillars and to contact. User question: *where else can I go?* Content: wordmark, five nav items, a persistent phone link. Layout: single row above the sheet-margin rule. Motion: none; on inner pages the active channel stays lit in a compressed 7-tick rail. Mobile: wordmark + phone + menu button; phone is a `tel:` link, never a form. Reduced motion: identical. Risk: none. **[REQUIRES ASSET]** wordmark/logo.

### Section 1 — Hero: statement + The Intake
Business purpose: establish category and route seven audiences. User question: *what is this company and where do I start?* Content: headline "We build, brand and grow businesses." (approved, `PRODUCT.md:9`); one-line subhead naming the seven areas; the Intake; the situation control row. Layout: Option 1. Motion: the single 900 ms intake sequence, then interactive highlight only. Mobile: vertical re-composition (§5.4 below). Reduced motion: static diagram, full function. Risk: LCP — the SVG must be inline and the display font preloaded. **[READY]** headline · **[REQUIRES APPROVAL]** subhead wording · **[REQUIRES EVIDENCE]** which pillars are live, which are planned, and therefore which channels render as active vs. planned.

### Section 2 — Plate 01: What one desk means
Business purpose: convert the diagram into an argument. User question: *why does one partner beat six vendors?* Content: three short prose columns — fewer handoffs, one accountable owner, decisions that carry across stages. **No icons. No cards.** Layout: three columns desktop, stacked mobile. Motion: none. Risk: none. **[REQUIRES APPROVAL]** copy.

### Section 3 — Plate 02: The seven channels
Business purpose: describe each pillar honestly, including maturity. User question: *what exactly do you do?* Content: seven entries — name, one sentence, what you get, link. **A list with deliberately uneven length** (teardown T7): mature pillars get three lines, planned ones get one line plus a "planned" marker. Layout: full-width rows, channel-weight rule at the left of each. Motion: none. Mobile: identical, stacked. Risk: dishonest equality if forced into a grid — hence the list. **[REQUIRES EVIDENCE]** active vs. planned status per pillar (`PRODUCT.md:151`).

### Section 4 — Plate 03: How work runs
Business purpose: reduce the fear of an opaque agency engagement. User question: *what actually happens if I call?* Content: a genuine four-to-five step sequence — conversation → scope → plan → delivery → review. **This is a real sequence, so it is legitimately numbered** (teardown A4). Layout: horizontal steps desktop, vertical mobile. Motion: none. **[REQUIRES APPROVAL]** the real process from Vijay.

### Section 5 — Plate 04: Evidence
Business purpose: proof, if and only if it exists. User question: *have you done this before?* Content: **conditional.** If approved case studies exist → full-width narrative rows, one per project (teardown T6). If not → **this section does not render.** No placeholders, no "coming soon", no stock. Layout: full-width rows. Motion: none. Risk: shipping an empty or faked section. **[REQUIRES APPROVAL]** + **[REQUIRES ASSET]** + **[REQUIRES EVIDENCE]** — currently unresolved (`PRODUCT.md:153`).

### Section 6 — Plate 05: On record
Business purpose: legitimacy without claims. User question: *are you a real company?* Content: **only undisputable facts** (teardown T3) — legal name, CIN, incorporation date, registered office, operating office, and Hyderabad/Bengaluru explicitly marked *planned* per rule 4. Set in Martian Mono as a register entry. Layout: a title-block panel. Motion: none. Risk: publishing an unverified CIN. **[REQUIRES EVIDENCE]** CIN verification (`PRODUCT.md:15`).

### Section 7 — Talk to us
Business purpose: convert. User question: *how do I reach a human?* Content: phone and email **in plain text** (teardown T4), WhatsApp, a short consultation form with lead-type preselected from the visitor's Intake choice, and consent checkboxes per rule 7. Layout: contact block left, form right; stacked mobile. Motion: none beyond field focus and submit states. Mobile: thumb-reachable call and WhatsApp buttons (`AGENTS.md:119`). Risk: form spam; consent compliance. **[REQUIRES EVIDENCE]** verified phone number (`PRODUCT.md:20`) · **[REQUIRES APPROVAL]** consent wording.

### Section 8 — Title block (footer)
Content: seven pillar links, legal pages incl. **Franchise Disclaimer and Event Terms** (recon C-5), registered office, social, copyright. Motion: none.

**Order challenged and confirmed.** The prompt's suggested order places proof/testimonials at position 9 and VIA AI at 10. Both are removed: proof becomes conditional (Section 5) and **VIA AI does not appear at all** — it is Phase 2 (`PRODUCT.md:72`) and rule 4 forbids presenting planned features as available. Placing an AI teaser on V1 would violate a non-negotiable.

### 5.4 The Intake on a 390 px screen

Not a scaled-down diagram — a re-drawn one:

```
┌──────────────────────┐
│ We build, brand and  │
│ grow businesses.     │
│                      │
│  ╭────────────╮      │
│  │  VIA-WE    │      │   intake block, full width
│  ╰──────┬─────╯      │
│    ─────┴─────       │
│  ┃ ① Business Setup ◆│   each row: channel-weight
│  ┃ ② Marketing      ◆│   rule at left, tappable
│  ┃ ③ Web & App      ◆│   full-width, ≥48 px tall
│  ┃ ④ Consulting     ◆│
│  ┃ ⑤ Hiring         ◆│
│  ┃ ⑥ Franchise      ◆│
│  ┃ ⑦ Connects       ◆│
│                      │
│  Where are you       │
│  starting?           │
│  [ chips, wrapping ] │
└──────────────────────┘
```
Touch targets ≥48 px. No horizontal scroll. The channel-weight rule survives, so the diagram's meaning survives.

---

## 6. Hero directions — three, scored

### H1 — "The Intake" ★ RECOMMENDED
- **Message hierarchy:** headline → one-line subhead → diagram → routing control.
- **First five seconds:** read the headline; see seven labelled channels leaving one block; understand it is one company doing seven connected things.
- **First action:** select a situation, or tap a channel.
- **Media:** inline SVG. No photography, no video.
- **Motion:** 900 ms intake resolve, once, from an already-visible default; then interactive highlight.
- **Loading:** SVG inline in the server response; display font preloaded; LCP element is the headline text.
- **Mobile:** §5.4.
- **Reduced motion:** static, fully functional.
- **Complexity:** low.
- **Fit:** answers both first-viewport questions at once; needs no assets.
- **Not an Instrument imitation:** Instrument's hero is an abstract sentence with a single CTA and no explanatory device. This one explains and routes; the material world is a Krishna-delta survey drawing, which has no counterpart on any reference site.

### H2 — "The Register"
- Headline plus the company's verifiable facts set as a certificate entry, Telugu and Latin as equals.
- **Strength:** unusually honest; extremely cheap; strong local identification.
- **Weakness:** low energy; explains legitimacy, not coordination; leans on a CIN that is **unverified**; depends on the unapproved Telugu decision.
- **Score: 6/10.**

### H3 — "Seven Channels, One Desk"
- Large Anek display statement; the seven pillars set as a reflowing typographic list; no diagram.
- **Strength:** simplest, safest, fastest, zero risk.
- **Weakness:** it is a headline over a list — the category default with better type. Does not route. Does not make coordination visible.
- **Score: 5/10.** Retained as the fallback if the Intake fails craft review at Milestone 4.

| | H1 | H2 | H3 |
|---|:--:|:--:|:--:|
| Explains the category in 5s | 8 | 6 | 6 |
| Routes seven audiences | **9** | 2 | 2 |
| Distinctiveness | **9** | 7 | 4 |
| Asset independence | **9** | 9 | 9 |
| Mobile viability | 8 | 9 | **9** |
| Build risk (10 = lowest) | 8 | 9 | **10** |
| **Total /60** | **51** | 42 | 40 |

---

## 7. Photography, video, icon and illustration direction

**Photography.** None in V1 — none exists, and rule 5 forbids generating it. When real photography arrives it enters as **evidence, not atmosphere**: office, team, events, client work, shot plainly and captioned with what it is. No stock. No "business people shaking hands." A photograph that could belong to any company is worse than no photograph.

**Video.** None in V1. No hero video, no autoplay, no background loop (`AGENTS.md:117`). If footage arrives later it appears inside a case study, poster-first, `preload="none"`, user-initiated, captioned.

**Icons.** A single authored set of ~20 SVG glyphs drawn in the survey grammar — 1.5 px stroke, square terminals, on the same grid as the channels. Not Lucide, not Heroicons, not any general-purpose library, because a general library would visibly not belong to the sheet. **No emoji** (`craft-floor.md:39`). **[REQUIRES ASSET]** — a Milestone 2 design task.

**Illustration.** The Intake and its derived diagrams are the only illustration. They are **geometry, not pictures** — which is precisely the distinction `craft-floor.md:44` permits: crisp vector shapes, diagrams, and linework are first-class; sketch-style scenes, `feTurbulence` grain, and doodle aesthetics are banned.

**Background treatment.** The sheet grid is the only background texture, and it is legitimate because there is an actual survey drawing under it (`craft-floor.md:45`). No `repeating-linear-gradient` stripes, no floating shapes, no mesh.

---

## 8. Content and proof discipline

Every homepage dependency, labelled.

| # | Dependency | Section | Label | Blocking? |
|---|---|---|---|---|
| 1 | Headline "We build, brand and grow businesses." | Hero | **READY** | No |
| 2 | Logo / wordmark files | Header, footer | **REQUIRES ASSET** | **Yes — Milestone 1** |
| 3 | Which pillars are live vs. planned | Hero, Plate 02 | **REQUIRES EVIDENCE** | **Yes — blocks the diagram** |
| 4 | Pillar descriptions (7 × ~40 words) | Plate 02 | **REQUIRES APPROVAL** | **Yes — Milestone 5** |
| 5 | The real engagement process | Plate 03 | **REQUIRES APPROVAL** | Yes — Milestone 5 |
| 6 | Approved case studies + imagery | Plate 04 | **REQUIRES APPROVAL** + **ASSET** | No — section is conditional |
| 7 | Verified CIN | Plate 05 | **REQUIRES EVIDENCE** | **Yes — legal exposure** |
| 8 | Verified phone number | Header, contact | **REQUIRES EVIDENCE** | **Yes — appears site-wide** |
| 9 | Registered + operating office addresses | Plate 05, footer | **REQUIRES EVIDENCE** | Yes |
| 10 | Leadership names and roles | `/about`, `/team` | **REQUIRES EVIDENCE** | Yes — marked unverified |
| 11 | Office / team / event photography | `/about`, `/work`, `/connects` | **REQUIRES ASSET** | Yes — **longest lead time** |
| 12 | Franchise disclaimer text | Every franchise page | **REQUIRES APPROVAL** (legal) | **Yes — mandatory** |
| 13 | Event terms | Connects events | **REQUIRES APPROVAL** (legal) | Yes |
| 14 | Privacy / Terms / Cookie / Disclaimer | Legal routes | **REQUIRES APPROVAL** (legal) | Yes |
| 15 | Consent wording for all forms | All forms | **REQUIRES APPROVAL** (legal) | **Yes — rule 7** |
| 16 | Franchise diagrams (FOCO / FOFO / COCO) | `/franchise/for-brands` | **REQUIRES APPROVAL** | No — authorable once model confirmed |
| 17 | Connects status, membership model, next event | `/connects` | **REQUIRES EVIDENCE** | Yes — three routes depend on it |
| 18 | Telugu content set | Site-wide | **REQUIRES APPROVAL** | No — V1 ships English |
| 19 | VIA AI | — | **FUTURE FEATURE** | **Must not appear in V1** |
| 20 | Client logos, metrics, testimonials, awards | — | **FUTURE FEATURE** | **Must not appear until real and approved** |

**Nothing in this direction is designed around fake material.** Items 6, 11, 16, 19 and 20 are all either conditional sections or absent sections — the design does not degrade if they never arrive.

---

## 9. Open questions this direction raises

Additional to the seventeen in the [recon §20](../reviews/2026-07-31-via-we-repository-recon.md).

| # | Question | Why it matters |
|---|---|---|
| **Q-B1** | Which of the seven pillars are operationally live today, and which are planned? | The Intake's channel weights and active/planned states encode this. Without it the diagram either lies or renders flat |
| **Q-B2** | Is the distributary/canal reference meaningful and dignified to Vijay, or does it read as agricultural rather than commercial? | The concept's local identification depends entirely on this reading. A founder's answer beats any designer's |
| **Q-C1** | Does V1 ship Telugu, English-only, or English with Telugu on selected pages? | Doubles content operations; changes the font file; changes every layout's line-length behaviour |
| **Q-D1** | Is there an existing Via-We logo, and is it fixed or open to revision? | The wordmark sits beside the Intake — if the existing mark clashes with the survey grammar, one of them must give |
| **Q-D2** | Is the sitemap `AGENTS.md`'s or `PRODUCT.md`'s? (recon C-4) | Determines whether Plate 02 links to five static routes or one dynamic route |

---

## 10. Skills applied, by exact path

Read locally as instructed, not via globally shadowed copies:

| Path | How it was applied |
|---|---|
| `.agents/skills/frontend-design/SKILL.md` | Plan-before-code (§4); ground in the subject (§2); one justified risk (§4.6); avoid the three named AI clusters (§4.1); copy as design material (§5) |
| `.agents/skills/impeccable/reference/new-work.md` | Name the rut first (§2.1); seven candidates spanning ≥3 material families (§2.2); colour strategy chosen before colours (§4.1); default-faces list avoided (§4.2); standing exit offered (§3.4) |
| `.agents/skills/impeccable/reference/craft-floor.md` | Display cap 88 px, tracking floor, 65–72ch measure (§4.3); no eyebrows, no gradient text, no decorative glass, no emoji icons, no sketch illustration (§7); one authored moment (§4.6) |
| `.agents/skills/impeccable/reference/animate.md` | Motion has a job; a scroll reveal is not a thesis (§3.1); full system in [MOTION_SYSTEM](VIA-WE_MOTION_SYSTEM_v1.md) |
| `.agents/skills/impeccable/SKILL.md` | Visitor mode: **Persuade** for `/`, `/franchise`, `/connects`; **Operate** for solutions and forms; **Read** for insights |
| `.agents/skills/ui-ux-pro-max/SKILL.md` + `data/google-fonts.csv` | Font availability, axes, subsets and foundry verified for all four families (§4.2) |
| `.agents/skills/ui-ux-pro-max/references/quick-reference.md` | Contrast, focus, touch-target, font-loading and layout rules applied throughout |
| `.agents/skills/ui-ux-pro-max/references/pro-rules.md` | Read; **scoped out** — it self-declares as native/mobile-app guidance that does not transfer 1:1 to desktop web |
| `.agents/skills/web-design-guidelines/SKILL.md` | Reserved as the Milestone 9 audit standard, not used as creative director |
| `.agents/skills/shadcn/SKILL.md` | **Not used in this phase**, per instruction |

**Runtime note.** The recon found that the agent runtime had loaded an **older global copy** of `ui-ux-pro-max` (50+ styles / 161 palettes / 10 stacks) rather than the repository copy (84 / 192 / 22). All font data in §4.2 was read directly from `.agents/skills/ui-ux-pro-max/data/google-fonts.csv` on disk, bypassing the loaded skill entirely.

---

## 11. Anti-patterns — banned for this project

Consolidated from `craft-floor.md`, `frontend-design/SKILL.md`, [AGENTS.md](../../AGENTS.md), and the [teardown](../research/2026-08-01-agency-reference-teardown.md).

**Structural**
- Same-size icon + heading + text card grids as page structure; nested cards ever
- The hero-metric template (big number, small label, supporting stats, accent)
- **Kickers / eyebrows above headings** — a ban, not a default
- Section numbering on non-sequences (the seven pillars are a set; the process is a sequence and may be numbered)
- Modals for tasks needing neither interruption nor protected focus
- Homepage FAQ accordion as a trust device
- Logo walls, awards carousels, testimonial rotators
- A localised URL with unlocalised content

**Surface**
- Gradient text; any gradient at all in this system
- Glass and blur as decoration
- Coloured `border-left` above 1 px
- Hard offset shadows; one elevation declaration only — border **or** shadow, never both
- Sparklines, progress rings, soft-shadowed rounded rectangles standing in for content
- Emoji or Unicode glyphs as icons
- Sketch-style SVG scenes, doodle class names, `feTurbulence` grain
- `repeating-linear-gradient` stripes or grid overlays without a real drawing beneath
- System display faces as the display voice

**Motion**
- Scroll-jacking (`AGENTS.md:117`); pinned scrub sections; horizontal scroll sections
- Smooth-scroll libraries
- One identical entrance on every section
- Autoplay audio; long intro loaders; cinematic page loaders
- Bounce or elastic easing by reflex
- Parallax on text or interactive controls

**Content**
- Any client count, project count, revenue, success rate, partnership, testimonial, award, years of experience, guarantee, or price without Vijay's explicit approval
- "Best", "No. 1", "guaranteed", "world-class", "100% result", "verified" without a documented process
- Presenting Hyderabad, Bengaluru, VIA AI, or any Phase 2+ capability as available
- AI-generated team, office, or client imagery
- Any content lifted from the old via-we.in site without verification

---

## 12. Approval gate

Phase 1 must not begin until Vijay has answered:

1. **Concept B, or the standing category-standard alternative?** (§3.4)
2. **Q-B1** — which pillars are live? (blocks the diagram)
3. **Q-B2** — does the delta/distributary reference read as dignified? Blocks the *visual world* only — a negative answer re-skins the instrument into the composing-room world rather than abandoning the direction (§3.4)
4. **Q-C1** — Telugu in V1? (blocks the font decision)
5. **Q-D1** — existing logo? (blocks the header)
6. Palette and type system approved as proposed, or amended
7. Confirmation that the design plan itself is shown to Vijay before implementation, resolving recon conflict C-9

**Approval of this document is approval of a direction, not of copy.** All public copy still requires separate sign-off under `AGENTS.md` rule 2.
