---
status: current
type: research
created: 2026-08-01
scope_note: Direction-neutral. Survives the Distributary rejection.
---

> # ℹ️ CURRENT — WITH ONE SCOPE CORRECTION
>
> This teardown is **direction-neutral** and survives the rejection of the Distributary concept: it analyses five external agency websites and extracts structural principles, none of which depend on Via-We's chosen visual world.
>
> **One correction:** where §6 and §7 refer to Via-We's "seven pillars" or "seven audiences", read **five active pillars** per `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §2. The findings are unaffected — if anything, five services strengthen the teardown's core conclusion (Instrument scores highest on service architecture precisely because it uses **three** categories, not seven).
>
> **Its governing finding still holds and still governs:** all five references are **proof-led**, resting on client logos, case-study photography and metrics. Via-We's equivalents are not yet approved for publication. See [VIA-WE_CONTENT_EVIDENCE_REGISTER.md](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md).
>
> **Known limitation, unchanged:** no browser was available. Motion, typography, responsive behaviour, accessibility and performance were **not** observed — see §2.

---

# Agency Reference Teardown — Instrument, DEPT®, NoGood, Clay, Huge

**Date:** 2026-08-01
**Phase:** 0 — Creative Direction & Motion Architecture
**Purpose:** Lawful analytical teardown of five reference agency websites, to extract transferable structural principles for Via-We. Not a source of visual imitation.
**Status:** Complete, with a stated and material methodological limitation (§2).

---

## 1. Scope

Pages analysed (all publicly accessible, fetched 2026-08-01):

| # | URL | Type |
|---|---|---|
| 1 | `https://www.instrument.com/` | Homepage |
| 2 | `https://www.instrument.com/work/` | Work index |
| 3 | `https://www.instrument.com/services/marketing` | Service page |
| 4 | `https://www.instrument.com/about/` | About |
| 5 | `https://www.deptagency.com/en-in/` | Homepage (India locale) |
| 6 | `https://www.deptagency.com/en-in/about-us/` | About |
| 7 | `https://nogood.io/` | Homepage |
| 8 | `https://nogood.io/blog/results/` | Results index |
| 9 | `https://clay.global/` | Homepage |
| 10 | `https://clay.global/services` | Services |
| 11 | `https://clay.global/work` | Work index |
| 12 | `https://clay.global/about` | About |
| 13 | `https://www.hugeinc.com/` | Homepage |
| 14 | `https://www.hugeinc.com/work/` | Work index |
| 15 | `https://www.hugeinc.com/about/` | About |

Nothing was copied. No copy, markup, CSS, script, asset, font, image, video, shader, or animation sequence was reproduced or stored. All observations below are paraphrased.

---

## 2. Methodology and its limits — read this before trusting any claim

The Phase 0 prompt (§7) requires that if browser access is unavailable, animation must not be claimed as inspected, and evidence classes must be separated. **Browser access was unavailable.** No browser automation, headless browser, screenshot tool, or DevTools MCP server was present in this environment.

The only retrieval mechanism available converts each page to Markdown before returning it. That conversion **strips `<script>` tags, stylesheets, inline styles, class names, and most attributes.**

### Evidence classes used in this document

| Class | Meaning | How to read it |
|---|---|---|
| **[TEXT]** | Textual page observation — content, section order, labels, nav items, headings, link text, stated numbers | Reliable |
| **[STRUCT]** | Structural inference from the text stream — e.g. repeated "View case study" patterns implying a card grid | Reasonably reliable, occasionally wrong about visual form |
| **[INFER]** | Reasoned conclusion from multiple [TEXT]/[STRUCT] facts | Argued, not observed |
| **[NOT OBSERVED]** | Explicitly could not be checked | Do not treat absence as evidence of absence |

### What is [NOT OBSERVED] — the complete list

- **All motion.** No trigger, duration, easing, sequence order, scroll relationship, or interruption behaviour was observed on any of the five sites. Zero.
- **All rendered visual design.** No colour value, typeface, type scale, spacing, grid, contrast ratio, shadow, or radius was observed.
- **All responsive behaviour.** No viewport was rendered. The viewports the prompt recommends (1440×1000, 1280×800, 390×844, 360×800) **were not used, because nothing was rendered at any viewport.**
- **All source-level technology.** No animation library, bundler, framework, canvas, WebGL context, or video element was confirmed on any site. Every fetch returned "not detectable" for this question, consistently, which is a property of the conversion, not of the sites.
- **`prefers-reduced-motion` handling.** Not testable without a browser.
- **Accessibility.** No contrast ratio, focus order, keyboard path, ARIA usage, or screen-reader behaviour was tested. **No accessibility score in §4 is an audit result.**
- **Performance.** No bundle size, LCP, CLS, INP, or frame-rate measurement was taken.

### Consequence for §4 scoring

Four of the twelve dimensions the prompt specifies — **Motion purpose, Typography, Mobile adaptation, Accessibility** — cannot be scored from the evidence available. They are marked `n/a` in every scoring table rather than guessed. Two more — **Performance restraint** and **Brand distinction** — are scored on structural evidence only and are labelled `[INFER]`.

**This limitation does not block Phase 0.** The transferable material Via-We actually needs from these sites is structural — information architecture, narrative sequence, proof strategy, service grouping, conversion placement — and all of that is [TEXT]-observable. What was lost is the visual and motion layer, which Via-We must not copy anyway.

### Recommended remediation

Before Phase 1 Milestone 4 (hero prototype), re-run this teardown with a real browser at the four prescribed viewports and capture the motion layer. Add a `chrome-devtools` MCP server or an equivalent browser tool to the environment. Until then, **no claim in this document about how these sites move should be made, and none is.**

---

## 3. Per-reference teardown

### 3.1 Instrument — the primary reference (deep teardown at §5)

**Homepage section order** [TEXT]: header nav → award banner → hero → recent work gallery → client roster → services overview → recent recognition → purpose statement → news & noteworthy → newsletter → contact links → social → legal.

**First viewport** [TEXT]: nav (Work / Services / Contact), an award announcement banner ("Design Studio Agency of the Year 2026"), then a hero whose entire content is a positioning sentence — a digital-first design agency where creativity meets technology — plus one CTA to view all work. No metrics. No form. No product shot.

**Navigation** [TEXT]: Work → Services (Brand / Marketing / Product) → About → Careers → Latest → Contact.

**Work presentation** [TEXT]: on the homepage, a filterable image gallery by discipline (all / brand / marketing / product), thumbnails without titles. On `/work/`, a **single-column stacked list with full-bleed imagery**, one project per row: client name, hashtag discipline tags, a one-to-two-sentence narrative description, and a "View Case Study" action. Approximately six projects surfaced.

**Metrics** [TEXT]: **none anywhere.** No percentage lifts, no revenue figures, no conversion numbers on the homepage, the work index, or the marketing service page. This is the single most important observation in this teardown (see §6).

**Services** [TEXT]: three categories only — Brand, Marketing, Product — with an explicit connective claim that they design across all three so every touchpoint works together. The marketing service page then expands into ten named capabilities as a described list, with four case studies, one attributed client testimonial, and related articles.

**About** [TEXT]: leads with a value proposition ("we make the complex simple"), *then* three stats (20 years / 350+ employees / 02 offices), then named clients, then leadership profiles, then working philosophy, then an internal programme (Build Week). Origin story is not the opening move.

**Ending / conversion** [TEXT]: newsletter signup, then a four-way footer CTA set — Start a Project / Join the Team / Press & Media / Drop Us a Note. Verb-first, audience-segmented, no single dominant funnel.

**Structural devices** [TEXT]: plain descriptive section headers ("Recent work", "Client Roster", "Services", "Our Purpose"). A stacked three-line purpose statement. **No section numbering.**

---

### 3.2 DEPT® (en-in locale)

**Homepage section order** [TEXT]: header → hero → featured product (Deptify) → partnership spotlight (Adobe) → AI-transformation services grid → five featured case studies → five-area solutions grid → culture/credential carousels → insights → footer with regional links.

**First viewport** [TEXT]: an all-caps positioning line — the growth invention company — plus a subhead about invention at the intersection of marketing and technology, a hero image, and a "View all work" link.

**Work presentation** [TEXT]: five case-study cards with thumbnail, client name (NVIDIA, Meta, eBay, Arm), and a parenthesised category tag such as *(Customer Experience)* or *(AI Transformation)*.

**Services** [TEXT]: five outcome-phrased solution areas, each a verb phrase rather than a noun — lead through brand & media / enhance customer experience / drive commerce growth / scale tech & data / transform with AI. The AI area subdivides into four **numbered** tiles (01–04).

**About** [TEXT]: a **chronological timeline, 1996 → 2023**, running from the founders' original Netherlands agency through private-equity partnership to the 2016 merger that formed DEPT®. Heavy stat block: 4,000+ people, 30+ offices, 5 continents, $4B media under management, 30 acquisitions, 85+ nationalities. B Corp certification, Webby and Lovie awards.

**India locale** [TEXT]: **no India-specific content detected.** The `/en-in/` URL returns global messaging with no Indian case study, office detail, regional leadership, or local proof. This is directly relevant to Via-We — see §6.4.

**Structural devices** [TEXT]: numbered sub-sections (01–04), credential eyebrows ("B CORP Certified", "Award-winning Agency", "AI Native"), stat callouts, carousels.

---

### 3.3 NoGood

**Homepage section order** [TEXT]: nav → hero → client logo wall → "squads" positioning → six-service grid → case studies with testimonials → awards → six numbered differentiation pillars → partner/investor logos → seven-question FAQ → three blog cards → CTA → newsletter → multi-column footer.

**First viewport** [TEXT]: headline positioning the firm as the growth squad behind category-defining brands, a subhead contrasting itself against a traditional marketing agency, a tilted framed image, and a persistent "Contact us" button.

**Results presentation** [TEXT]: this is the defining trait. `/blog/results/` presents roughly ten client stories under the heading "Growth Stories", each with client name, industry tag, and **one or two large numeric callouts with directional arrows** — 23× YoY AI search traffic, 300% app downloads, 879%, 149%, 75%, 3.4M+.

**Substantiation** [TEXT]: **none detected.** No methodology, no measurement window, no attribution model, no baseline, no disclaimer, no comparative benchmark, no cost-per-result. The numbers stand alone.

**Structural devices** [TEXT]: three separate logo walls (clients, awards, partners/investors), numbered pillars 1–6, eyebrow labels, FAQ accordion, author headshots with read times.

**Conversion** [TEXT]: "Contact us" persistent in nav; footer CTA is a wordplay line ending in "DROP US A LINE".

---

### 3.4 Clay

**Homepage section order** [TEXT]: nav → hero → six service offerings → client logo wall → featured case-study carousel → philosophy statement → blog highlights → FAQ accordion → contact → footer with six office addresses.

**First viewport** [TEXT]: a plain declarative sentence naming the category — a global branding and UX design agency — with a subhead about blending AI, design and technology, a logo graphic, and a header "Contact" button.

**Work presentation** [TEXT]: `/work` is a **card grid with a visible taxonomy carrying counts** — All Work 38, Digital Products 16, Websites 20, Branding 11 — plus an archive list of ~28 past clients with no project detail. Per card: client name, one-sentence description, three-to-six service tags. Metrics essentially absent (one "100M+ users" instance across 38 projects).

**Services** [TEXT]: five categories, each with exactly **six** sub-services — Branding, Digital Products, Websites, Content, Development. The regularity is itself the device. No process or methodology shown.

**About** [TEXT]: stats near the top — 78 team members, 16 years, 529 projects — then mission, then three **numbered** differentiators (01/02/03), then capabilities, then attributed testimonials, then awards (Webby, Apple, FWA), then six office locations. A durability claim: designs untouched for 5+ years.

**Conversion** [TEXT]: "Let's Talk" with a literal email address and phone number exposed in plain text, repeated mid-page and in the footer.

---

### 3.5 Huge

**Homepage section order** [TEXT]: hero intro → nav and contact CTA → "What we do" → "We believe" (a branded engine called LIVE) → "Our work" → an inline Google case-study deep-dive → careers → ideas → footer.

**First viewport** [TEXT]: a very short declarative — the firm is AI-native — plus a coined internal acronym, six rotating background images served from a media CDN, and a "Let's talk" prompt. No subhead.

**Work presentation** [TEXT]: homepage shows eight case-study cards with client name and a single line each; the Google case expands **inline** with services, overview, quantified results (1B monthly interactions, 100+ engagements, a 12-year partnership), a testimonial, and key moments. `/work/` itself is a bare tile grid — **client name only, no tags, no description, no metrics** — approximately 12–13 tiles across two pages.

**Services** [TEXT]: six **numbered** categories, 01–06 — brand strategy & design, marketing & content, products & platforms, composable commerce, customer experience, AI activation.

**About** [TEXT]: strikingly thin — a mission statement, a section titled "A tradition of innovation", a CTA, a footer. **No stats, no awards, no offices, no leadership, no client examples.** The proof lives entirely on the homepage and in `/work`.

**Conversion** [TEXT]: a closing line inviting the visitor's "new ambition", plus four segmented email addresses (business / jobs / press / general) and three office locations.

**Structural devices** [TEXT]: section eyebrows, 01–06 numbering, a stat triplet, a branded internal-methodology acronym, and a work counter rendered as "W — 00".

---

## 4. Scoring

Scale 1–10. `n/a` means the dimension was [NOT OBSERVED] and is not guessable — see §2. Scores marked ⚠ are [INFER] from structure alone.

| Dimension | Instrument | DEPT® | NoGood | Clay | Huge |
|---|:--:|:--:|:--:|:--:|:--:|
| Immediate clarity | 8 | 6 | 9 | 9 | 4 |
| Brand distinction ⚠ | 8 | 5 | 7 | 5 | 6 |
| Narrative control | 8 | 5 | 7 | 6 | 5 |
| Motion purpose | n/a | n/a | n/a | n/a | n/a |
| Typography | n/a | n/a | n/a | n/a | n/a |
| Work presentation | 9 | 7 | 8 | 8 | 4 |
| Service architecture | 9 | 7 | 5 | 8 | 7 |
| Conversion | 7 | 5 | 9 | 9 | 6 |
| Mobile adaptation | n/a | n/a | n/a | n/a | n/a |
| Performance restraint ⚠ | 7 | 4 | 5 | 6 | 4 |
| Accessibility | n/a | n/a | n/a | n/a | n/a |
| **Via-We transferability** | **8** | **4** | **3** | **7** | **3** |

### Justifications for the scores that matter

**Immediate clarity.** Clay and NoGood open by naming the category in a plain sentence — a visitor knows what the company is in one line. Instrument does the same slightly more abstractly. DEPT® opens with an invented category ("growth invention company") that requires the subhead to decode. Huge opens with an internal acronym that a first-time visitor cannot parse at all; this is the clearest failure in the set and the most instructive.

**Service architecture.** Instrument scores highest for the smallest number: **three** categories with an explicit statement of why they belong together. Clay's five-with-six-each is legible through sheer regularity. Huge's six numbered items are clear but unconnected. NoGood scores lowest — eleven services in the nav, six on the homepage, no stated relationship between them.

**Conversion.** Clay and NoGood expose a real contact route immediately and repeatedly; Clay publishes an email address and phone number in plain text, which for an SME audience is a meaningful trust signal. Instrument segments by intent (project / job / press / note) — good routing, weaker urgency. DEPT® has no dominant CTA.

**Via-We transferability.** Instrument scores 8 because its structure — few categories, explicitly connected, narrative-led work, segmented footer conversion, no metrics — is reproducible by a company with no metrics to publish. NoGood scores 3 because its entire engine is unsubstantiated numeric claims, which `AGENTS.md` rules 1 and 6 prohibit outright. Huge scores 3 because its confidence rests on brand recognition Via-We does not have.

---

## 5. Deep teardown — Instrument

### 5.1 How cohesion is achieved across brand, product, marketing, campaigns, work and company story

[INFER, from consistent [TEXT] evidence across four pages]

Cohesion at Instrument is produced by **taxonomic discipline, not by visual devices.** The same three words — Brand, Marketing, Product — operate simultaneously as:

- the service navigation,
- the filter set on the homepage work gallery,
- the hashtag tags on every project in `/work/`,
- the three service page URLs,
- and the explanatory claim on the homepage that designing across all three is what makes touchpoints work together.

One vocabulary, four jobs. A visitor who learns the taxonomy in the nav can then read the entire site without relearning anything. This is a **structural** achievement and it costs nothing to reproduce.

### 5.2 The specific structural observations

| Element | Observation [TEXT] | Why it works [INFER] |
|---|---|---|
| **Hero thesis** | A single positioning sentence, one CTA, no metrics, no form, no product shot | The hero makes a claim and hands the visitor straight to evidence. It does not try to convert in the first viewport |
| **Work index format** | One project per row, full-bleed image, 1–2 sentence narrative | Each project gets the whole width. A grid would force comparison; a stack forces sequence — the visitor reads projects as stories, not as inventory |
| **Project metadata** | Client + discipline tags + narrative sentence. **No year, no metrics, no team, no budget** | Restraint is the point. Nothing is claimed that cannot be shown |
| **Service page depth** | Ten named capabilities as a described list, not a grid of icon cards | The list format allows uneven description length; a card grid would force every capability into equal visual weight regardless of importance |
| **About page order** | Value proposition → stats → clients → leadership → philosophy → internal programme | Proof arrives second, not first. The claim is stated before it is defended |
| **Stats used** | Only three, all verifiable and non-performance: 20 years, 350+ employees, 02 offices | These are facts about the firm, not claims about outcomes. They cannot be disputed |
| **Footer conversion** | Four verb-first, audience-segmented routes | Routes rather than funnels. A journalist and a job applicant are not pushed into a sales form |
| **Section numbering** | **Absent** | Instrument's content is not a sequence, so it is not numbered. DEPT®, Clay and Huge all number things that are not sequences |

### 5.3 The five questions

**1. What makes Instrument feel authored rather than templated?**
Two things, both structural. First, **it withholds.** No metrics, no logo wall on the work index, no awards carousel, no numbered process, no FAQ accordion, no testimonial rotator. Every one of those is available and every one is declined. Second, **the taxonomy is load-bearing** — the same three words do four jobs, so the site reads as one system rather than a set of pages produced separately.

**2. Which qualities are structural rather than cosmetic?**
The taxonomy discipline (three categories, everywhere). The one-project-per-row work format. The claim-before-proof about-page order. The segmented footer. The absence of metrics. **All five survive a complete change of palette, typeface, and motion** — which is exactly what makes them transferable to Via-We without imitation.

**3. Which parts would reduce clarity for Via-We?**
The hero. Instrument can open with an abstract positioning sentence because a visitor who reaches instrument.com already knows what a design agency is. **Via-We cannot.** Via-We's central problem is that "Business Growth Ecosystem" is not an established category — a visitor does not arrive knowing what it means, and seven pillars is more than three. An abstract Instrument-style hero applied to Via-We would leave the visitor with a slogan and no model. This is the single most important non-transferable element in the entire teardown.

Also non-transferable: the narrative work index requires publishable case studies with client permission. Via-We has none confirmed (`PRODUCT.md:153`).

**4. What would an inexperienced developer copy incorrectly?**
- The **full-bleed one-per-row work index** — copied without six strong images it becomes six grey rectangles. Via-We has zero images.
- The **abstract hero sentence** — copied, it produces a slogan with no explanatory power for an unfamiliar category.
- The **award banner above the nav** — copied, it becomes an empty bar, or worse, tempts an unearned award claim, which `AGENTS.md` rule 1 forbids.
- The **restraint itself** — copied as "leave things out", it becomes a thin site. Instrument's restraint is affordable because what remains is strong. Via-We must earn the right to withhold by having something load-bearing in its place.
- The **three-category nav** — copied as a compression of Via-We's seven pillars into three, it would break `PRODUCT.md`'s requirement that the seven pillars stay consistent across nav, homepage, footer, forms, CRM, and analytics.

**5. What equivalent Via-We idea creates the same confidence without imitation?**
Instrument earns confidence by **showing a system and declining to oversell it.** The system it shows is a taxonomy. Via-We's equivalent is not a taxonomy — seven pillars is too many to carry as a nav-level vocabulary — it is a **structure**: how the seven pillars connect into one path, and where the visitor stands on it.

So the equivalent move is: *Instrument shows you its categories and trusts you to see the coherence. Via-We must show you the coherence directly, because its categories alone do not imply it.*

That is the brief for the creative direction: **make the coordination visible, and then decline to oversell it.**

---

## 6. Cross-reference synthesis

### 6.1 Comparison matrix

| | Instrument | DEPT® | NoGood | Clay | Huge |
|---|---|---|---|---|---|
| Category named plainly in hero? | Almost | No — invented category | Yes | Yes | No — internal acronym |
| Service count | **3** | 5 | 6–11 | 5 (×6 sub) | 6 |
| Services explicitly connected? | **Yes** | Partly | No | No | No |
| Numbered sections | No | Yes (01–04) | Yes (1–6) | Yes (01–03) | Yes (01–06) |
| Numeric result claims | **None** | Scale stats only | **Heavy, unsubstantiated** | Almost none | Some (client-attributed) |
| Logo wall | Yes | Implied | **Three** | Yes | No |
| Work index format | Stacked, narrative | Cards + tags | Cards + metrics | Grid + counts | Bare tiles |
| Work metadata depth | Medium | Medium | High (metrics) | Medium | **Minimal** |
| About page weight | Heavy | Heavy (timeline) | Medium | Heavy | **Very thin** |
| Contact exposed in plain text | No | No | No | **Yes — email + phone** | **Yes — 4 addresses** |
| Conversion segmented by intent | **Yes (4)** | No | No | No | **Yes (4)** |
| FAQ on homepage | No | No | Yes | Yes | No |

### 6.2 The finding that governs everything else

**All five references are proof-led. Via-We cannot be.**

Every one of these sites rests its homepage on assets Via-We does not have and is forbidden from fabricating:

| Reference proof asset | Via-We status | Governing rule |
|---|---|---|
| Recognisable client logos (Google, Meta, NVIDIA, Slack, Snapchat, McDonald's) | None confirmed | `AGENTS.md` rule 1 |
| Case-study photography and campaign imagery | **Zero assets in repository** | Recon §14 |
| Numeric growth results | Unresolved; unsubstantiated claims prohibited | `AGENTS.md` rules 1, 6 |
| Awards | None | `AGENTS.md` rule 1 |
| Scale stats (4,000 people, 529 projects, 20 years) | Company incorporated Feb 2025 | `PRODUCT.md:16` |
| Attributed client testimonials | None approved | `AGENTS.md` rule 5 |
| Office network | One operating office; two cities planned | `AGENTS.md` rule 4 |

Instrument opens with a claim and immediately hands the visitor six pieces of evidence. Via-We opening with a claim would hand the visitor nothing.

**Therefore the strategic conclusion of this teardown is:** Via-We must find a **non-proof source of confidence.** The only one available is *clarity about the system itself* — showing the visitor exactly how the seven pillars connect, what happens in what order, and where they personally enter. Structure is the one asset Via-We already owns outright. It requires no photography, no client permission, no metric, and no approval beyond confirming which pillars are live.

This is not a compromise position. Every reference site *has* a system and *hides* it behind trophies. Via-We can lead with the thing they bury.

### 6.3 Transferable principles

| # | Principle | Source | Why it transfers |
|---|---|---|---|
| T1 | **One vocabulary, many jobs.** The same words must serve nav, filters, tags, URLs, forms, and analytics | Instrument | Costs nothing; `PRODUCT.md:48` already requires exactly this for the seven pillars |
| T2 | **Claim first, proof second.** State the position, then defend it — never open with statistics | Instrument, Clay about pages | Works when proof is thin, because the claim carries the first viewport alone |
| T3 | **Use only undisputable facts as stats.** Years, people, offices — not outcomes | Instrument (20 / 350+ / 02) | Via-We can honestly publish incorporation date, office, pillar count, and nothing else |
| T4 | **Expose a real contact route in plain text.** Email and phone, visible, repeated | Clay, Huge | High-trust signal for Indian SME buyers, who frequently phone before they submit |
| T5 | **Segment conversion by intent, not by funnel.** Distinct routes for client / candidate / partner / press | Instrument, Huge | Via-We has *seven* audiences — this is the only reference pattern that scales to that |
| T6 | **Give each project the full width and a sentence of narrative.** Sequence beats inventory | Instrument `/work/` | Works with two case studies; a grid needs twelve to look intentional |
| T7 | **Uneven description length is a feature.** A list lets important capabilities be described more fully | Instrument service page | Via-We's seven pillars are genuinely unequal in maturity; a card grid would hide that dishonestly |
| T8 | **Withhold something.** Declining an available device is a legible authorship signal | Instrument | Free. Via-We should decline: metrics, logo wall, awards carousel, numbered process, testimonial rotator |

### 6.4 Non-transferable patterns and anti-patterns

| # | Anti-pattern | Source | Why it fails for Via-We |
|---|---|---|---|
| A1 | **Large unsubstantiated growth percentages** (879%, 23×, 300%) with no methodology or window | NoGood | Direct violation of `AGENTS.md` rules 1 and 6. Also legally exposed in the franchise context |
| A2 | **An invented category in the hero** ("the growth invention company", "AI-native HATs") | DEPT®, Huge | Via-We's category is *already* unfamiliar. Inventing a second layer of abstraction compounds the problem |
| A3 | **A thin about page that outsources credibility to brand recognition** | Huge | Via-We has no brand recognition to outsource to. Its about page must do real work |
| A4 | **Section numbering (01–06) applied to non-sequences** | DEPT®, NoGood, Clay, Huge | `craft-floor.md:27` refuses numbering unless the sequence carries information. Via-We's seven pillars are *not* ordered — numbering them would assert a false sequence. **Note:** Via-We's *process* genuinely is a sequence and may legitimately be numbered |
| A5 | **Multiple logo walls as a credibility substitute** | NoGood (three) | Via-We has no logos to wall, and `AGENTS.md` rule 1 forbids implying partnerships |
| A6 | **A localised URL with no localised content** | DEPT® `/en-in/` | The most instructive failure for Via-We. A visitor who reaches an India URL and finds global boilerplate learns the company is not really here. Via-We's advantage is being *actually* local to Vijayawada — squandering that would be worse than not claiming it |
| A7 | **Timeline-as-story on a young company** | DEPT® (1996–2023) | Via-We incorporated Feb 2025. A timeline would be one entry and would read as an apology |
| A8 | **Homepage FAQ accordion as a trust device** | NoGood, Clay | Cheap credibility filler. Real questions belong on the pages that raise them — franchise disclaimers on franchise pages, not bundled on the homepage |
| A9 | **Bare tile grid for work** (client name only, no context) | Huge `/work/` | Requires the visitor to already recognise the clients. Via-We's clients will be regional SMEs — the tile alone communicates nothing |
| A10 | **An award banner above the navigation** | Instrument | Structurally fine, but for Via-We it is either an empty bar or an invented award. Rule 1 |

### 6.5 What must remain unique to each reference

Recorded so that no later phase drifts toward reproduction:

- **Instrument** — the three-word Brand/Marketing/Product taxonomy and the stacked full-bleed narrative work index. Via-We takes the *principle* (one vocabulary; sequence over inventory), never the vocabulary or the layout.
- **DEPT®** — the "growth invention company" positioning and the acquisition timeline. Off-limits entirely.
- **NoGood** — the "squad" framing and the arrow-annotated metric callout. Off-limits; also prohibited by `AGENTS.md`.
- **Clay** — the five-services-of-six-each regularity and the plain-text contact block styling. Via-We takes the *principle* of exposed contact detail, not the composition.
- **Huge** — the LIVE engine acronym, the "W — 00" counter, and 01–06 service numbering. Off-limits.

### 6.6 Likely expensive or technically risky (structural inference only)

⚠ All of this is [INFER]. No performance measurement was taken.

| Pattern | Where | Risk for Via-We |
|---|---|---|
| Six rotating CDN-served hero images | Huge | Multiple large images competing with LCP in the first viewport, on Indian mid-tier Android and variable mobile networks |
| Multiple carousels on one page (credentials, culture, insights) | DEPT® | Each carousel is JS weight and a keyboard-accessibility obligation |
| Inline-expanding case study on the homepage | Huge | Layout shift risk and a deep-linking problem — an expanded case has no URL |
| Filterable image gallery in the first viewport region | Instrument | Filter state, image preloading, and LCP interact badly |
| Three logo walls | NoGood | Many small images; each is a request and a layout-shift opportunity |

Via-We's audience — SME founders in and around Vijayawada on mid-tier Android over variable mobile data — makes every one of these more expensive than it is for these references' audiences. **A design that is cheap to render is not a compromise for Via-We; it is a competitive requirement.**

---

## 7. Via-We synthesis — what this teardown hands to the creative direction

1. **The confidence source must be structure, not proof.** (§6.2) Non-negotiable, because the proof assets do not exist and cannot be invented.
2. **The hero must explain, not assert.** (§5.3 Q3) Via-We's category is unfamiliar and its pillars are many; an abstract positioning line fails where it succeeds for Instrument.
3. **Seven audiences need seven routes, surfaced early.** (T5) This is Via-We's hardest UX problem and the reference set's only scalable answer is intent-segmented routing.
4. **One vocabulary across nav, tags, forms, URLs, analytics.** (T1) Already mandated by `PRODUCT.md:48`; the teardown confirms it is what makes a multi-service site read as one system.
5. **Publish only undisputable facts.** (T3) Incorporation date, registered office, operating city, pillar count. Nothing about outcomes.
6. **Expose email and phone in plain text.** (T4) A real trust signal for this audience, and free.
7. **Being genuinely local is an asset the references cannot copy.** (A6) DEPT®'s empty `/en-in/` is the proof: global agencies fake locality badly. Via-We *is* local.
8. **Decline the available devices.** (T8) No metrics, no logo wall, no awards carousel, no homepage FAQ, no numbered pillar list, no testimonial rotator. Every one is both a rule-1 risk and a template signal.
9. **Design for a cheap render.** (§6.6) Mid-tier Android on variable data is the target device, not a 1440px desktop.
10. **Do not number the seven pillars.** (A4) They are a set, not a sequence. The process is a sequence and may be numbered.

---

## 8. Compliance statement

- No copy, source code, CSS, markup, asset, font, image, video, shader, or animation sequence was copied from any reference site.
- All observations are paraphrased; no passage of reference copy is quoted at length.
- Only publicly accessible pages were retrieved.
- No motion, visual design, responsive behaviour, accessibility characteristic, or performance measurement is claimed as observed; every such dimension is marked `n/a` or [NOT OBSERVED] per §2.
- The four viewports prescribed by the Phase 0 prompt were **not** used, because no rendering was possible. This is stated rather than concealed, and remediation is specified in §2.
