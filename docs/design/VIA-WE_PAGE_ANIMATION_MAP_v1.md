---
status: superseded
superseded_by: docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md
rejecting_adr: docs/decisions/ADR-003-distributary-direction-rejected.md
superseded_on: 2026-08-01
reason: Built on the rejected Distributary concept, a seven-pillar route set, and Via-We Connects routes that are not in V1 scope
---

> # ⛔ SUPERSEDED — DECISION HISTORY ONLY
>
> **Do not build from this document.**
>
> It maps motion across twenty routes including `/connects`, `/connects/events`, `/connects/events/[slug]` and `/solutions/business-consulting-growth` — **none of which are in Version 1 scope** per `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §3 and §8.
>
> **Current route direction:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §8 and `PRODUCT.md`.
> **Current motion direction:** [VIA-WE_MOTION_DIRECTION_CURRENT.md](VIA-WE_MOTION_DIRECTION_CURRENT.md)
>
> A replacement per-route map will be written **after** a logo-led prototype is approved — not before. Writing one now would be a rulebook defended against reality rather than describing it.

---

# Via-We — Page Animation Map v1 (superseded)

**Date:** 2026-08-01
**Phase:** 0 — specification only.
**Status:** `[PROPOSED]`
**Depends on:** [Motion System v1](VIA-WE_MOTION_SYSTEM_v1.md) (tokens, categories, policy) and [Creative Direction v1](VIA-WE_CREATIVE_DIRECTION_v1.md) (visual world).

**Route list:** exactly the twenty routes named in the Phase 0 prompt §13.

**Sitemap conflict, unresolved.** This list uses five *static* solution routes, matching [PRODUCT.md:85-89](../../PRODUCT.md#L85-L89). [AGENTS.md:78](../../AGENTS.md#L78) instead specifies one *dynamic* `/solutions/[service-slug]`. Recon conflict **C-4** is still open. This map is written against the static form because that is what the prompt specified; if the dynamic form is chosen, rows 3–7 collapse to one template and nothing else in this document changes. Two routes present in `PRODUCT.md` but absent from the prompt's list — `/team` and the legal pages — are covered in §5.

---

## 1. The baseline — applies to every route

Stated once so the per-route table records only what differs. **Most routes differ in nothing**, which is the point.

| Aspect | Baseline behaviour |
|---|---|
| **Page entry** | None. The page renders complete and readable. No fade-in, no loader, no curtain, no staggered section arrival |
| **Scroll narrative** | **None.** No scroll-triggered reveal, no parallax, no pinning, no scrub, on any route |
| **Route transition** | View Transitions API cross-fade, `--vw-dur-deliberate`, `--vw-ease-inout`. Focus moves to `<main>`. Unsupported browsers navigate instantly |
| **Header** | Active channel tick lit on the compressed 7-tick rail. Link underline grows from leading edge on hover/focus, `--vw-dur-quick` |
| **Links and buttons** | Colour and underline on hover/focus, `--vw-dur-quick`. 2 px nudge on press, `--vw-dur-instant` |
| **Focus** | `:focus-visible` ring, 2 px `--vw-channel`, 2 px offset, always present |
| **Images** | Fade in on decode, `--vw-dur-quick`, inside a reserved aspect-ratio box. Never zoom, never parallax |
| **Forms** | Focus ring `quick`; validation on blur; error fades in with icon + text + colour; submit enters a determinate busy state |
| **Loading** | Nothing under 300 ms; static skeleton past 300 ms; text status past 3 s |
| **Toasts** | Enter opacity + 8 px, hold 4 s, exit at 0.6×, `role="status"` / `role="alert"`, never steal focus |
| **Mobile** | Hover states do not exist. `:active` and `:focus-visible` carry all feedback. Drawer nav replaces the inline nav |
| **Reduced motion** | §3.7 substitution table. Nothing is lost |
| **Static everywhere** | All body copy, all headings, all lists, all tables, all legal text, all pricing-free service descriptions, all diagrams other than the Intake |

**Performance concern shared by all routes:** the display font is the LCP risk on every page. Preload one display weight and one body weight; size-adjust the fallback; never preload the full variable range.

---

## 2. Route map

### 2.1 `/` — Home

| | |
|---|---|
| **Page job** | Make seven services legible as one system and route seven audiences |
| **Emotional tone** | Confident, plain, orderly. Not exciting — *clear* |
| **Signature interaction** | **The Intake.** The site's only authored moment |
| **Entrance** | Channels draw intake → node, 40 ms stagger, **900 ms total**, from an already-visible 25%-opacity default. `sessionStorage`-gated: once per session |
| **Scroll narrative** | None |
| **Media** | None in V1 (no assets exist) |
| **CTA** | Situation chips above the fold. Selecting one reveals **two** actions — the destination page and *"Talk to us about this"* (pre-filled `leadType`). Contact block at Section 7; phone persistent in header |
| **Mobile** | Vertical re-composition — intake block full width, seven tappable rows ≥48 px, sequence shortened to **600 ms** |
| **Reduced motion** | Sequence not played. Diagram final and fully interactive |
| **Performance** | The site's only real risk. Inline SVG ≤14 KB gzipped; LCP element must be the headline text, not the diagram; skip the sequence on `saveData`, `2g`, or `deviceMemory ≤ 2` |
| **Static** | Everything else. Plates 01–05 have no motion of any kind |

### 2.2 `/solutions` — Overview

| | |
|---|---|
| **Page job** | Show all seven pillars at equal depth and let the visitor choose |
| **Tone** | Orderly, encyclopaedic |
| **Signature** | A **compressed Intake** — same drawing, no entrance sequence, current position unset |
| **Entrance** | None. The diagram renders final |
| **Media / scroll** | None |
| **CTA** | Per-pillar link; single contact block at foot |
| **Mobile** | Vertical channel list, identical to home |
| **Reduced motion** | No difference — there is nothing to substitute |
| **Performance** | Reuses the homepage SVG; must be a shared component, not a second copy |
| **Static** | Pillar descriptions, uneven by design |

### 2.3–2.7 `/solutions/business-setup` · `/solutions/digital-marketing-branding` · `/solutions/web-app-development` · `/solutions/business-consulting-growth` · `/solutions/hiring-recruitment`

One shared template. Motion is identical across all five.

| | |
|---|---|
| **Page job** | Explain one pillar: what it is, what you get, what happens next |
| **Tone** | **Operate** mode — practical, scannable, low ceremony |
| **Signature** | None. The header rail shows this channel lit; that is the entire visual continuity device |
| **Entrance** | None |
| **Scroll** | None |
| **Media** | Deliverable examples if approved assets exist; otherwise absent |
| **CTA** | Enquiry form with `leadType` preselected to this pillar; phone and WhatsApp above it |
| **Mobile** | Sticky bottom call/WhatsApp bar. **This is the only sticky element permitted below the header** |
| **Reduced motion** | No difference |
| **Performance** | Zero-JS pages apart from the form. Should be the fastest routes on the site |
| **Static** | Scope, process, deliverables, FAQs specific to the pillar |

**Per-pillar note:** `/solutions/business-setup` is the natural home for the registration-document material from Concept C (Creative Direction §3.3) — set as static document grammar, still with no motion.

### 2.8 `/franchise` — Hub

| | |
|---|---|
| **Page job** | Split two opposite audiences — brand owners and franchise seekers — without confusing either |
| **Tone** | **Persuade**, but heavily disciplined by legal constraint |
| **Signature** | A **two-door split**: two large routes, equal weight, no default. Hover/focus raises the chosen door's border weight and dims the other to 60%. `--vw-dur-quick` |
| **Entrance** | None |
| **Scroll** | None |
| **Media** | None until approved |
| **CTA** | The two doors themselves |
| **Mobile** | Doors stack full width; no dimming (no hover) |
| **Reduced motion** | Dim/undim removed; border-weight change retained |
| **Performance** | Trivial |
| **Static** | **The mandatory franchise disclaimer** ([PRODUCT.md:63](../../PRODUCT.md#L63)) — always visible, never behind a disclosure, never animated, never dismissible |

### 2.9 `/franchise/for-brands`

| | |
|---|---|
| **Page job** | Explain franchise readiness and the FOCO / FOFO / COCO model choice |
| **Tone** | Advisory, technical |
| **Signature** | **Model comparison.** Selecting FOCO, FOFO or COCO cross-fades the labelled regions of one diagram, `--vw-dur-base`, `--vw-ease-inout`. A real radio `fieldset`; keyboard-operable; the three models are also available as a static table below |
| **Entrance** | None |
| **Media** | Franchise diagrams — authorable, no photography needed |
| **CTA** | Brand-owner enquiry form, `leadType: FRANCHISE_BRAND` |
| **Mobile** | Segmented control above the diagram; diagram scrolls within its own bounded container if needed — **never the page** |
| **Reduced motion** | Instant swap, no cross-fade |
| **Performance** | One inline SVG with three label sets, ≤10 KB |
| **Static** | Disclaimer, model definitions, the comparison table, every commercial term |

### 2.10 `/franchise/opportunities`

| | |
|---|---|
| **Page job** | Help a seeker filter by goal, budget, industry and city |
| **Tone** | **Operate** — this is a tool |
| **Signature** | None. Filtering is a tool, not a moment |
| **Entrance** | None |
| **Scroll** | None. Results paginate; **no infinite scroll** |
| **Media** | Opportunity imagery only where rights are documented |
| **CTA** | Per-opportunity enquiry, `leadType: FRANCHISE_SEEKER` |
| **Mobile** | Filters in a drawer; result count always visible |
| **Reduced motion** | Filter result replacement is an instant swap rather than a 180 ms cross-fade |
| **Performance** | Filtering must not re-request. Result list is a URL-driven server render so results are shareable and back-navigable |
| **Static** | **The no-guaranteed-returns disclaimer on every opportunity card and detail view.** Never animated, never collapsed |

### 2.11 `/connects` — Via-We Connects

| | |
|---|---|
| **Page job** | Explain what Connects is and how to join |
| **Tone** | Warmer than the rest of the site — this is the one people-facing surface |
| **Signature** | None in V1. **Deliberate:** the entire section's status is unresolved ([PRODUCT.md:156](../../PRODUCT.md#L156)) and a signature interaction cannot be designed around an undefined product |
| **Entrance** | None |
| **Media** | Event photography if it exists; otherwise the page runs on type and structure alone |
| **CTA** | Registration form, `leadType: VIA_WE_CONNECTS` |
| **Mobile** | Standard |
| **Reduced motion** | No difference |
| **Performance** | Trivial |
| **Static** | Everything. **If Connects is not currently active, the page must say so plainly** — rule 4 |

### 2.12 `/connects/events` — Event index

| | |
|---|---|
| **Page job** | List upcoming and past events |
| **Tone** | Factual |
| **Signature** | None |
| **Entrance** | None |
| **Scroll** | None. Upcoming and past are separate sections, not an infinite list |
| **Media** | Event images where rights are documented |
| **CTA** | Per-event registration |
| **Mobile** | Date block above title; full-width rows |
| **Reduced motion** | No difference |
| **Performance** | Trivial |
| **Static** | All dates, venues, terms. **If there is no next event, say so** rather than hiding the section |

### 2.13 `/connects/events/[slug]` — Event detail

| | |
|---|---|
| **Page job** | Convert an interested reader into a registration |
| **Tone** | Direct |
| **Signature** | None |
| **Entrance** | View Transition from the index; the event image is the shared element |
| **Scroll** | None |
| **CTA** | Registration form with **event-photography consent** as a distinct checkbox — `AGENTS.md` rule 7 |
| **Mobile** | Sticky register button, bottom |
| **Reduced motion** | Shared-element transition becomes a cross-fade |
| **Performance** | One hero image, budgeted |
| **Static** | Event terms, venue, agenda, all consent copy |

### 2.14 `/work` — Portfolio index

| | |
|---|---|
| **Page job** | Show evidence — **if and only if approved evidence exists** |
| **Tone** | Plain, factual, no salesmanship |
| **Signature** | None |
| **Entrance** | None |
| **Scroll** | None. One project per full-width row (teardown T6) |
| **Media** | Project imagery, `loading="lazy"` below the fold, explicit dimensions |
| **CTA** | Per-project link; contact block at foot |
| **Mobile** | Full-width rows, image then title then one sentence |
| **Reduced motion** | No difference |
| **Performance** | The heaviest route on the site. Image budget is the whole story |
| **Static** | Everything |
| **Conditional** | **If no approved case studies exist, this route is not built and is removed from the navigation.** No placeholders, no "coming soon", no stock imagery |

### 2.15 `/work/[slug]` — Case study

| | |
|---|---|
| **Page job** | Tell one project's story with evidence |
| **Tone** | Narrative, restrained |
| **Signature** | None |
| **Entrance** | View Transition from `/work`; project image is the shared element, `--vw-dur-deliberate`, `--vw-ease-inout` |
| **Scroll** | None |
| **Media** | Full-width images; any video is poster-first, `preload="none"`, user-initiated, captioned |
| **CTA** | "Start a project like this" → enquiry with the relevant `leadType` |
| **Mobile** | Single column; images full-bleed |
| **Reduced motion** | Shared element becomes a cross-fade |
| **Performance** | Media-heavy. Hard per-image budget enforced |
| **Static** | All copy, all results. **Any metric requires documented evidence** — `AGENTS.md` rule 1 |

### 2.16 `/about`

| | |
|---|---|
| **Page job** | Establish that this is a real company run by real people |
| **Tone** | Direct, unembellished |
| **Signature** | None |
| **Entrance** | None |
| **Scroll** | None |
| **Media** | Office and team photography when it exists. **No AI-generated imagery, ever** — rule 5. Until real photography arrives the page runs on type and the record block |
| **CTA** | Contact block |
| **Mobile** | Standard |
| **Reduced motion** | No difference |
| **Performance** | Trivial |
| **Static** | Everything, including the record block: legal name, CIN, incorporation date, registered office, operating office, and Hyderabad/Bengaluru **explicitly marked planned** — rule 4 |

### 2.17 `/insights` — Article index

| | |
|---|---|
| **Page job** | Demonstrate expertise; capture organic search |
| **Tone** | **Read** mode — comprehension first |
| **Signature** | None |
| **Entrance** | None |
| **Scroll** | None. Pagination, not infinite scroll — infinite scroll destroys the footer and breaks back navigation |
| **Media** | Article thumbnails, lazy |
| **CTA** | Newsletter, if a provider is decided |
| **Mobile** | Full-width rows |
| **Reduced motion** | No difference |
| **Performance** | Trivial |
| **Static** | Everything |

### 2.18 `/insights/[slug]` — Article

| | |
|---|---|
| **Page job** | Be read to the end |
| **Tone** | Read |
| **Signature** | None |
| **Entrance** | View Transition from the index |
| **Scroll** | **A determinate reading-progress indicator is permitted** — a 2 px rule under the header reflecting scroll position. This is state, not decoration, and it is the single exception to the no-scroll-coupling policy. Hidden under reduced motion |
| **Media** | Inline images with reserved boxes |
| **CTA** | Related articles; contact block |
| **Mobile** | 65ch measure preserved; progress indicator retained |
| **Reduced motion** | Progress indicator hidden |
| **Performance** | Trivial. The progress indicator must be a CSS `animation-timeline: scroll()` **or** a passive listener writing one custom property — never a React state update per frame |
| **Static** | All prose |

### 2.19 `/contact`

| | |
|---|---|
| **Page job** | Get a human on the phone or a form submitted |
| **Tone** | Immediate |
| **Signature** | None |
| **Entrance** | None |
| **Scroll** | None |
| **CTA** | Phone and email **in plain text** (teardown T4), WhatsApp, then the form |
| **Mobile** | Call and WhatsApp as the first two thumb-reachable actions, above the form — `AGENTS.md:119` |
| **Reduced motion** | No difference |
| **Performance** | Form is the only JS |
| **Static** | Addresses, hours, map link, consent copy |
| **Forms** | Validation on blur; error icon + text + colour; determinate submit state; success message reuses the action's own words |

### 2.20 `/book-consultation`

| | |
|---|---|
| **Page job** | Complete a structured booking without abandonment |
| **Tone** | **Operate** — a task, not a pitch |
| **Signature** | None. A booking flow with a signature interaction is a booking flow that loses people |
| **Entrance** | None |
| **Scroll** | None |
| **Multi-step** | If multi-step: a step indicator, back navigation preserved, per-step cross-fade `--vw-dur-base`, focus moved to the new step's heading, draft autosaved to `sessionStorage` |
| **CTA** | One primary action per step |
| **Mobile** | One field group per screen; ≥44 px input height; correct `inputmode` and `autocomplete` on every field |
| **Reduced motion** | Step change is an instant swap |
| **Performance** | The most JS on the site. Still within the 140 KB route budget |
| **Static** | All labels, helper text, consent checkboxes, privacy notice |

---

## 3. Summary — where motion actually exists

| Route | Authored moment | Interactive motion | Scroll motion |
|---|:--:|:--:|:--:|
| `/` | **Yes — the only one** | Yes | No |
| `/solutions` | No | Yes | No |
| `/solutions/*` (×5) | No | No | No |
| `/franchise` | No | Yes | No |
| `/franchise/for-brands` | No | Yes | No |
| `/franchise/opportunities` | No | No | No |
| `/connects` | No | No | No |
| `/connects/events` | No | No | No |
| `/connects/events/[slug]` | No | Shared element | No |
| `/work` | No | No | No |
| `/work/[slug]` | No | Shared element | No |
| `/about` | No | No | No |
| `/insights` | No | No | No |
| `/insights/[slug]` | No | No | **Reading progress only** |
| `/contact` | No | No | No |
| `/book-consultation` | No | Step change | No |

**One authored moment across twenty routes.** That is the intended shape, and it is the direct implementation of `craft-floor.md:13` — *"one authored moment, not scattered effects and not one identical entrance on every section."*

---

## 4. What remains static across the entire site

Recorded so that no later phase animates it by reflex:

- Every heading and every line of body copy
- Every legal notice, disclaimer, and consent statement — **especially the franchise disclaimer and the no-guaranteed-returns notice**, which must never be animated, collapsed, delayed, or dismissible
- The record block (CIN, incorporation, offices)
- All pillar descriptions and process steps
- All tables and comparison data
- All footer content
- Every image after its 180 ms decode fade
- All numbers. **No counting-up animation anywhere** — it is the hero-metric template `craft-floor.md:25` refuses, and Via-We has no metrics to count

---

## 5. Routes not in the prompt's list

| Route | Status | Motion |
|---|---|---|
| `/team` | In `PRODUCT.md:99`, absent from the prompt's list. **Should not ship until leadership data is verified** ([PRODUCT.md:19](../../PRODUCT.md#L19) marks it unverified) and real photography exists | Would follow `/about` exactly |
| `/privacy`, `/terms`, `/cookies`, `/disclaimer` | In both sitemaps | Baseline only. Entirely static |
| **Franchise Disclaimer**, **Event Terms** | Mandatory per [AGENTS.md:108](../../AGENTS.md#L108); **no route exists in either sitemap** — recon conflict **C-5**, still open | Entirely static once routed |
| `/city/[city]`, `/campaign/[slug]` | Gated by `PRODUCT.md:110` — "only when operational coverage is real" | Not designed |
| `/dev/motion-lab` | Internal test route, Milestone 3 | Demonstrates every §4 category in isolation. **`noindex`, and removed or access-restricted before production** |
