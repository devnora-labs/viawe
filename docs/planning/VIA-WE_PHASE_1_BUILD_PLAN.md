---
status: superseded
superseded_by: docs/planning/VIA-WE_MISSING_INPUTS.md
rejecting_adr: docs/decisions/ADR-003-distributary-direction-rejected.md
superseded_on: 2026-08-01
reason: Sequenced the build of the rejected Distributary concept across a seven-pillar route set; V1 scope and creative direction have both changed
---

> # ⛔ SUPERSEDED — DECISION HISTORY ONLY
>
> **Do not build from this document.** Its Milestone 4 builds "the Intake", the signature of the rejected Distributary concept, and its route coverage assumes seven pillars including Via-We Connects.
>
> **What is current instead:** the gates in `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §11, and the blockers in [VIA-WE_MISSING_INPUTS.md](VIA-WE_MISSING_INPUTS.md).
>
> **Retained because** the milestone skeleton (foundation → shell → motion lab → hero prototype → narrative → work → services → forms → QA → launch), the CI-enforced budget approach, and the testing strategy are direction-independent and should inform the replacement plan. A new build plan will be written **after** the creative gate passes.

---

# Via-We — Phase 1 Build Plan (superseded)

**Date:** 2026-08-01
**Phase:** 0 deliverable. **This is a plan, not an instruction to start.** No code, no dependencies, no scaffolding exists or should be created before §1 clears.
**Status:** `[PROPOSED]`
**Depends on:** [Creative Direction v1](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) · [Motion System v1](../design/VIA-WE_MOTION_SYSTEM_v1.md) · [Page Animation Map v1](../design/VIA-WE_PAGE_ANIMATION_MAP_v1.md) · [ADR-001](../decisions/ADR-001-via-we-animation-stack.md)
**Scope:** V1 = **Phase 1 only** per [PRODUCT.md:78](../../PRODUCT.md#L78). No CRM, no VIA AI, no wizard, no Connects platform, no client portal.

---

## 1. Entry gate — nothing starts until these clear

Carried forward from the [recon §21](../reviews/2026-07-31-via-we-repository-recon.md) and the Creative Direction §12. **Milestone 1 must not begin while any hard blocker is open.**

| # | Gate | Type | Blocks |
|---|---|---|---|
| G1 | Master handoff committed to the repo, **or** `AGENTS.md`+`PRODUCT.md` formally declared the source of truth | **Hard** | Everything |
| G2 | Which pillars are live vs. planned (Q-B1) | **Hard** | The Intake, `/solutions`, nav |
| G3 | Real photography inventory + delivery date, or an explicit decision that V1 is not photography-led | **Hard** | `/about`, `/work`, `/connects`. **Longest lead time — start first** |
| G4 | One reconciled sitemap; static vs dynamic service routes settled (C-4); routes assigned for Franchise Disclaimer and Event Terms (C-5) | **Hard** | Routing, content model |
| G5 | Instruction precedence written into `AGENTS.md`; `AGENTS.md`+`PRODUCT.md` declared "the brief" for skill purposes | **Hard** | Prevents C-9/C-10 recurring per pull request |
| G6 | ADR-001 accepted | **Hard** | All motion work |
| G7 | Concept B approved, or the standing category-standard alternative chosen (Creative Direction §3.4) | **Hard** | Everything visual |
| G8 | Q-B2 — the delta/distributary reference reads as dignified to Vijay | **Hard** | The whole direction |
| G9 | Q-C1 — Telugu in V1? | Soft | Font file, line-length QA |
| G10 | Q-D1 — existing logo, fixed or revisable? | Soft | Header, Milestone 2 |
| G11 | CIN, phone, leadership, office addresses verified | **Hard for launch**, soft for build | Can build with clearly-marked placeholders; **cannot launch** |
| G12 | Repo copy of `ui-ux-pro-max` is the copy the runtime loads (recon C-2); `skills-lock.json` hash method documented or the field removed (C-3) | Soft | Prevents silent skill drift during the build |

**Sequencing note:** G3 has the longest lead time — arranging an office, team, or event shoot is measured in weeks. Open it immediately, in parallel with everything else.

---

## 2. Repository setup (Milestone 1 prerequisites)

Housekeeping that should land before or with Milestone 1:

| Item | Action |
|---|---|
| `.gitignore` | **Create.** Currently absent; a 1.55 MB `ruvector.db` tool artifact is sitting untracked in the working tree |
| `README.md` | **Rewrite.** Currently one word. Must carry project summary, setup, structure, and a pointer to `AGENTS.md` |
| `CLAUDE.md` | Create, or record the decision that `AGENTS.md` serves both |
| `.github/` files | Decide: track, delete, or ignore the two untracked Copilot/Mermaid files (recon C-14) |
| `docs/` taxonomy | Reconcile `docs/reviews/`, `docs/research/`, `docs/design/`, `docs/decisions/`, `docs/planning/` against the structure proposed at [AGENTS.md:67](../../AGENTS.md#L67) (recon C-15) |
| `LICENSE` | Decide — the repo root has none |
| Node version | Pin via `.nvmrc` + `engines` |
| Package manager | Choose and pin via `packageManager` |

---

## 3. Implementation order

Ten milestones per the Phase 0 prompt §22. Each has a definition of done and a review gate.

---

### Milestone 1 — Application foundation

**Goal:** a deployable empty application with the quality gates already enforcing.

**Scope**
- Next.js App Router + TypeScript, `strict: true`
- ESLint + Prettier; format-on-commit
- CI: typecheck → lint → build → **bundle-size check** → a11y smoke test. All blocking.
- **Bundle budget wired in and failing the build above 120 KB gzipped on `/`** — before the first component exists, so the budget is never retro-fitted
- Directory structure per [AGENTS.md:53-69](../../AGENTS.md#L53-L69)
- Design tokens (§4)
- Self-hosted fonts, subset, `woff2`, size-adjusted fallbacks
- Root metadata, `robots.txt`, `sitemap.xml`, favicon set
- Accessibility baseline: `lang`, skip link, landmark regions, focus-visible defaults, `prefers-reduced-motion` media query wired
- **No animation dependency**, per ADR-001

**Definition of done**
- [ ] `pnpm build` clean; CI green end to end
- [ ] An empty page scores ≥ 98 on Lighthouse a11y and best-practices
- [ ] Bundle check demonstrably fails when a deliberate 50 KB import is added, then passes when removed
- [ ] Fonts load with **CLS = 0**, verified with a throttled trace
- [ ] Zero `dependencies` entries matching the ADR-001 prohibition list

**Review gate:** Vamshi + one technical reviewer.

---

### Milestone 2 — Static experience shell

**Goal:** every route reachable, correctly laid out, entirely unstyled by motion.

**Scope**
- Header with the compressed 7-tick channel rail; mobile drawer nav
- Title-block footer with all legal routes **including Franchise Disclaimer and Event Terms**
- Route skeletons for all twenty routes (plus the legal set)
- Layout primitives: `Sheet`, `Plate`, `Margin`, `TitleBlock`, `Measure`
- Responsive grid; container widths; the 8 px spacing scale
- Type scale implemented and proofed at 360 / 390 / 768 / 1280 / 1440 with **real copy, never lorem**
- The ~20 authored SVG icons
- Placeholders **visibly labelled as placeholders** — never plausible fake content

**Definition of done**
- [ ] Every route renders and is linked from somewhere reachable
- [ ] Keyboard traversal of the whole site works; focus always visible; skip link functional
- [ ] No horizontal scroll at 360 px on any route
- [ ] Every heading tested at every breakpoint with real copy; no orphans, no overflow
- [ ] Zero client-side JS on routes without a form
- [ ] Every placeholder is unmistakably a placeholder

**Review gate:** design review against Creative Direction §4.3 and §4.4. Screenshots at all five widths.

---

### Milestone 3 — Motion laboratory

**Goal:** prove every motion category in isolation before any of it touches a real page.

**Scope**
- Internal route `/dev/motion-lab`, `noindex`, **removed or access-restricted before production**
- One isolated demonstration per category in [Motion System §4](../design/VIA-WE_MOTION_SYSTEM_v1.md): text (static, proving the absence), image reveal, route transition, the Intake signature, card/row interaction, form feedback, toast, drawer, disclosure, skeleton
- A reduced-motion toggle rendering both variants side by side
- A cleanup harness: mount/unmount 100 times and assert zero retained animations
- A performance panel showing concurrent animation count and frame timing

**Definition of done**
- [ ] Every §4 category demonstrated and signed off
- [ ] Every category's reduced-motion substitution demonstrated
- [ ] Cleanup harness shows zero leaked animations after 100 cycles
- [ ] Never more than 8 concurrent animations
- [ ] Zero animation-library bytes, verified by bundle analysis
- [ ] Every demonstration is keyboard-operable

**Review gate:** **Vamshi + Vijay.** This is the first point at which the site's motion character is visible, and the cheapest point at which to change it.

The gate question is explicitly **"approve the motion character, or ask for more"** — not "sign this off". There is a real, unresolved tension between the brief's stated ambition (creative confidence comparable to Instrument, DEPT, Clay) and this system's austerity (**one authored animation across twenty routes**). Both positions are defensible: `craft-floor.md` and `animate.md` argue that restraint reads as authorship and scattered effects read as AI-generated; equally, a client who has just looked at five ambitious agency sites may experience one animation as under-delivery. **The decision is Vijay's, made here, with the site in front of him** — not absorbed silently into a design principle. If more motion is wanted, this is the point at which adding it is cheap and the motion system is amended rather than violated.

---

### Milestone 4 — Hero prototype ★ the critical gate

**Goal:** build **only** the homepage first viewport — headline, the Intake, the routing control — and decide whether the concept survives contact with reality.

**Scope**
- The Intake as server-rendered inline SVG, ≤ 14 KB gzipped
- Seven channels with weights encoding real pillar maturity (needs G2)
- Every node a working `<a>`
- The situation control as a real radio `fieldset`, styled as a segmented control
- **Two-action reveal per situation** — destination page **and** "Talk to us about this" with a pre-filled `leadType`
- The 900 ms resolve, `sessionStorage`-gated, from an already-visible default
- Mobile vertical re-composition (Creative Direction §5.4)
- Full reduced-motion variant

**Definition of done**
- [ ] Renders and fully functions with **JavaScript disabled**
- [ ] Keyboard-operable end to end; screen-reader alternative describes all seven channels and their status
- [ ] Both reveal actions work, and both work without JavaScript
- [ ] **Anti-flowchart discipline verified**: title block and scale present; channel weights unequal and encoding real pillar maturity; no arrowheads, boxes, decision diamonds, or orthogonal routing
- [ ] LCP ≤ 2.0 s on throttled 4G / mid-tier Android
- [ ] 60 fps sustained through the resolve, captured in a trace
- [ ] Works at 360 px with no horizontal scroll and ≥48 px touch targets
- [ ] Sequence correctly skipped on `saveData`, `2g`, and `deviceMemory ≤ 2`
- [ ] **Tested on five real SME founders**: can they say what the company does after ten seconds?

**Review gate — a real decision point, not a formality.**
Reviewed on desktop, mobile, and reduced motion, by Vamshi, Vijay, and a fresh reviewer with no involvement in the build (per `impeccable/reference/new-work.md` §7).

**Four possible outcomes, all acceptable:**
1. **Proceed** — the Intake works. Continue to Milestone 5.
2. **Revise** — the idea is right, the execution is not. One revision round, then re-review.
3. **Re-skin** — the *instrument* works but the delta/cartographic *world* does not land (Q-B2 fails). Re-skin the same instrument into Concept C's composing-room world: channels become column rules, nodes become register marks, the palette shifts to the document world. Function, routing, accessibility and performance are unchanged ([Creative Direction §3.4](../design/VIA-WE_CREATIVE_DIRECTION_v1.md)).
4. **Fall back to H3** — the *instrument itself* does not carry it. Switch to the typographic hero ([Creative Direction §6](../design/VIA-WE_CREATIVE_DIRECTION_v1.md)), already specified, roughly two days.

**Deciding any of this at Milestone 4 costs days; discovering it at Milestone 9 costs weeks.** Outcomes 3 and 4 answer two different failures and must not be confused: a rejected metaphor is not a rejected instrument.

---

### Milestone 5 — Homepage narrative

**Goal:** complete the homepage, section by section, with approved content.

**Scope:** Plates 01–05, contact section, footer — built in order, each reviewed before the next begins. Section 5 (evidence) is **conditional and simply not built** if no approved case study exists.

**Definition of done**
- [ ] Every section carries approved copy — **no lorem, no invented facts, no unapproved claims**
- [ ] Plate 02 shows genuinely uneven descriptions, with planned pillars marked as planned
- [ ] Plate 05 contains only undisputable facts
- [ ] **Zero motion below the hero**, verified by inspection
- [ ] Full homepage JS ≤ 120 KB gzipped
- [ ] Contact form validates on blur, records consent, and confirms in the action's own words

**Review gate:** copy review by Vijay (rule 2 — mandatory), plus design review.

---

### Milestone 6 — Work and case studies

**Conditional on approved case studies existing.**

**Scope:** `/work` full-width narrative rows; `/work/[slug]` template; shared-element View Transition; image pipeline with hard per-image budgets.

**Definition of done**
- [ ] Any metric shown is backed by documented evidence (rule 1)
- [ ] Every image within budget, correct format, explicit dimensions, lazy below the fold
- [ ] Shared-element transition degrades cleanly to cross-fade and to instant
- [ ] **If no approved case study exists, the route is not built and is removed from the navigation** — no placeholder portfolio

---

### Milestone 7 — Service pages

**Scope:** the shared pillar template applied to all five solution routes, plus `/solutions`. Deliberately differentiated by content depth and structure, **not** by five different layouts.

**Definition of done**
- [ ] All five render; each is honest about maturity
- [ ] Each form preselects the correct `leadType` from the 15-value taxonomy ([AGENTS.md:112](../../AGENTS.md#L112))
- [ ] Mobile sticky call/WhatsApp bar works and does not obscure content
- [ ] Zero client JS beyond the form
- [ ] No two pages are identical, and none is a bespoke one-off

---

### Milestone 8 — Franchise and Connects

**The highest legal-risk milestone.**

**Scope:** `/franchise` two-door split; `/franchise/for-brands` with the FOCO/FOFO/COCO comparison; `/franchise/opportunities` with URL-driven filtering; `/connects`, `/connects/events`, `/connects/events/[slug]`; all forms with full consent handling.

**Definition of done**
- [ ] **The franchise disclaimer appears on every franchise page**, always visible, never collapsed, never animated, never dismissible ([PRODUCT.md:63](../../PRODUCT.md#L63))
- [ ] No guaranteed-return, investment-advice, or "verified" language anywhere (rule 6)
- [ ] Every form records privacy, marketing, and — for events — photography consent (rule 7)
- [ ] Franchise Disclaimer and Event Terms exist at real routes
- [ ] Filtering is URL-driven, shareable, back-navigable; no infinite scroll
- [ ] If Connects is not currently active, **the page says so plainly** (rule 4)

**Review gate:** legal review, not just design review.

---

### Milestone 9 — QA and performance

**Explicitly before adding any further effects.**

**Scope**
- Full audit against [Motion System §10](../design/VIA-WE_MOTION_SYSTEM_v1.md)
- Full audit against `.agents/skills/web-design-guidelines/SKILL.md` — its first appropriate use in the project
- Accessibility: automated (axe) + manual keyboard + screen reader (NVDA/VoiceOver + TalkBack)
- Performance on the reference device, throttled
- Cross-browser and cross-device
- **ADR-001 re-review against the built site** — any prohibited pattern found is removed, not retro-approved
- Content audit: every claim traced to an approved source

**Definition of done**
- [ ] LCP ≤ 2.0 s, CLS ≤ 0.02, INP ≤ 150 ms on mid-tier Android / 4G
- [ ] WCAG 2.2 AA on every route; zero axe violations
- [ ] Full site works with JS disabled
- [ ] Full site works under `prefers-reduced-motion` with nothing lost
- [ ] **Exactly one authored moment exists on the site**
- [ ] Zero animation-library bytes
- [ ] `/dev/motion-lab` removed or access-restricted
- [ ] Every claim on the site traces to an approved source

---

### Milestone 10 — Launch

**Scope:** final content and legal sign-off; analytics with consent gating; error monitoring; uptime monitoring; DNS and hosting; a rollback path; the launch checklist.

**Definition of done**
- [ ] **CIN, phone, addresses, and leadership all verified** (G11) — a hard launch blocker
- [ ] All six mandatory legal pages live and approved
- [ ] Analytics fires only after consent; event taxonomy uses the seven-pillar and 15-lead-type vocabularies
- [ ] Error and uptime monitoring live
- [ ] Rollback tested, not merely documented
- [ ] Every page carries `status`, `owner`, `approver`, `lastReviewedAt`, `reviewDueAt` ([AGENTS.md:105](../../AGENTS.md#L105))
- [ ] Vijay signs off on every public word

---

## 4. Token setup

Established in Milestone 1, before any component consumes a value.

```
src/styles/
  tokens.css          colour, type, space, radius, elevation  (CSS custom properties)
  motion.css          duration, easing, distance, stagger + shared keyframes
  reset.css
src/lib/tokens/
  motion-tokens.ts    canonical values — the single source
  generate-css.ts     build step emitting motion.css from motion-tokens.ts
```

**Rules**
- `motion-tokens.ts` is canonical. `motion.css` is generated, never hand-edited, and CI fails if it is out of date.
- **No raw duration, easing, colour, or spacing value in any component.** Enforced by lint.
- `--vw-silt` and `--vw-field` are non-text tokens; `--vw-mark` is large-text/icon only. Enforced in review.
- No gradients exist in the system. A gradient in a diff is a review rejection.

---

## 5. Component boundaries

```
src/components/
  layout/     Sheet · Plate · Margin · TitleBlock · Measure · Header · Footer
  intake/     Intake (server) · IntakeChannel · IntakeNode · SituationControl (client)
  content/    PillarRow · ProcessStep · RecordBlock · WorkRow · EventRow · Disclaimer
  forms/      Field · Fieldset · ConsentGroup · SubmitButton · leadType helpers
  ui/         adopted shadcn primitives, restyled to tokens — utilitarian only
```

**Rules**
- **Server Components by default.** A client boundary requires a stated reason in the file header.
- Only three client islands on the homepage: `SituationControl`, the mobile drawer, the contact form.
- **No generic animation wrapper component** (ADR-001 §5.5).
- `ui/` is only ever form primitives, dialog, popover, select, combobox, accordion, tabs, toast — never anything carrying the visual world (ADR-001 §5.4).
- The Intake is **one** component shared by `/` and `/solutions`, never two copies.

---

## 6. Content model

Repo-based **MDX/Markdown content**, not a headless CMS, for V1.

**Reasoning:** `PRODUCT.md:121` records this as undecided. For V1 the repo wins because content changes are few, `AGENTS.md:105` mandates per-page `status`/`owner`/`approver`/`lastReviewedAt`/`reviewDueAt` — which is naturally frontmatter and naturally reviewed in a pull request — and rule 2 requires Vijay's approval before merge, which git already enforces. **A CMS would route content around the approval gate that `AGENTS.md` depends on.** Revisit when a non-technical editor needs day-to-day control; that is a Phase 1.5 decision and deserves its own ADR.

```
content/
  pages/         home, about, contact
  pillars/       one file per pillar — includes `status: live | planned`
  work/          case studies (conditional)
  events/        Connects events
  insights/      articles
  legal/         privacy, terms, cookies, disclaimer, franchise-disclaimer, event-terms
```

Every file's frontmatter carries the five governance fields plus an `evidence` array citing the source for any factual claim. Content is validated at build time by a Zod schema; a missing `approver` or an unsourced claim **fails the build**.

---

## 7. Asset pipeline

| Asset | Handling |
|---|---|
| Icons | ~20 authored SVGs, inlined at build, tree-shaken |
| The Intake | Server-rendered inline SVG, ≤14 KB gzipped, budget-checked in CI |
| Photography | `next/image`, AVIF + WebP, `srcset`, explicit dimensions, lazy below fold, per-image budget enforced in CI |
| Fonts | Self-hosted `woff2`, subset to used ranges, `font-display: swap`, size-adjusted fallbacks. **No CDN** |
| Video | None in V1. If later approved: poster-first, `preload="none"`, user-initiated, captioned |
| Provenance | **Every photograph carries a documented source and usage right before it enters the repo.** No exceptions |

---

## 8. Testing strategy

| Layer | Scope | Runs |
|---|---|---|
| Type | `tsc --noEmit`, strict | Every commit |
| Lint | ESLint + a11y plugin + the raw-token rule | Every commit |
| Unit | Content schema validation, `leadType` mapping, token generation | Every commit |
| Integration | Form submission, validation, consent recording, filter URL state | Every PR |
| E2E | Critical paths: home → pillar → enquiry; franchise → opportunity → enquiry; event → registration | Every PR |
| **A11y** | axe on every route; keyboard traversal; focus-order assertions | Every PR |
| **Performance** | Bundle size per route (**blocking**); Lighthouse CI on the reference profile | Every PR |
| **Motion regression** | Assert: zero scroll listeners driving animation; exactly one `--vw-dur-signature` usage in the codebase; zero prohibited imports | Every PR |
| Visual regression | Screenshots at 360 / 768 / 1440, light + reduced-motion | Nightly + pre-release |
| Manual | Screen reader, real mid-tier Android, real Indian mobile network | Milestone 9 |

**The motion-regression suite is unusual and deliberate.** With no library gatekeeping what is possible ([ADR-001 §8](../decisions/ADR-001-via-we-animation-stack.md)), a lint-and-test rule is the substitute for friction. It is what stops scattered reveals reappearing six months from now.

---

## 9. Review gates summary

| Milestone | Gate | Reviewers |
|---|---|---|
| 1 | Foundation + budgets enforcing | Vamshi + technical reviewer |
| 2 | Layout, type, responsive | Design review, 5 widths |
| 3 | **Motion character approved, or more is asked for** | Vamshi + **Vijay** |
| 4 | **Concept proceeds / is revised / is re-skinned / falls back to H3** | Vamshi + **Vijay** + a fresh reviewer |
| 5 | Homepage copy | **Vijay (mandatory, rule 2)** |
| 6 | Evidence claims | Vijay + evidence check |
| 7 | Pillar honesty | Vijay |
| 8 | **Legal** | **Legal review** |
| 9 | Full audit | Vamshi + fresh reviewer |
| 10 | Launch | **Vijay signs every public word** |

---

## 10. Multi-model review plan

Roles, not blind consensus. **Not invoked automatically** — run by the owner when a gate calls for it. One lead resolves conflicts; suggestions are not merged wholesale.

**Prompt 1 — Creative-direction critique** (before Milestone 4)
> You are a creative director with no prior involvement in this project. Read `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` and `docs/research/2026-08-01-agency-reference-teardown.md`. The client is a business-growth coordinator in Vijayawada, India, serving Indian SME founders. Answer only these: (1) Could this concept be used unchanged for a different company? Name what would have to change. (2) Does a first-time visitor understand the company in ten seconds from the described hero? (3) Is the signature element meaningful or decorative? (4) Where is this closest to an imitation of Instrument, DEPT, NoGood, Clay, or Huge? (5) Name the single weakest decision and what you would do instead. Be specific and adversarial. Do not praise.

**Prompt 2 — Motion-system critique** (before Milestone 3)
> You are a motion designer reviewing a specification, not code. Read `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` and `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md`. The audience uses mid-tier Android on variable Indian mobile data. Answer: (1) Is one authored moment across twenty routes too little, and what would be lost or gained by adding a second? (2) Does any specified animation lack a narrative job? (3) Is the reduced-motion substitution table complete, and does anything become unusable under it? (4) Are the duration and easing tokens internally coherent? (5) What will break first on a low-end device? Argue against the specification.

**Prompt 3 — Technical-feasibility critique** (before Milestone 1)
> You are a senior frontend engineer. Read `docs/decisions/ADR-001-via-we-animation-stack.md` and `docs/design/VIA-WE_MOTION_SYSTEM_v1.md`. Answer: (1) Is a 900 ms staggered SVG stroke sequence genuinely achievable in CSS + WAAPI with no library, and what is the hardest part? (2) Is a 120 KB gzipped homepage budget realistic for Next.js App Router in 2026? Show your arithmetic. (3) Where will the no-library decision hurt most? (4) Which prohibited patterns are most likely to reappear by accident, and what automated check would catch each? (5) What has this ADR failed to consider?

**Visual critic** (Milestones 4 and 9): given desktop and mobile screenshots only, with no access to the plan — assess hierarchy, spacing, motion clutter, brand distinction, template signals, and mobile failures. **Withholding the plan is deliberate**; a reviewer who has read the intent will see the intent rather than the render.

---

## 11. Definition of done — Phase 1 overall

Phase 1 is complete when:

- [ ] All twenty routes plus the six legal pages are live, with approved content
- [ ] **Every factual claim traces to an approved, documented source**
- [ ] CIN, phone, addresses and leadership are verified, or absent
- [ ] All six mandatory legal pages exist; the franchise disclaimer is on every franchise page
- [ ] Every form records consent
- [ ] WCAG 2.2 AA on every route
- [ ] LCP ≤ 2.0 s, CLS ≤ 0.02, INP ≤ 150 ms on mid-tier Android / 4G
- [ ] The whole site works with JavaScript disabled and under reduced motion
- [ ] Zero animation-library bytes; exactly one authored moment
- [ ] No prohibited pattern from ADR-001 §6 is present
- [ ] `/dev/motion-lab` removed or restricted
- [ ] `DESIGN.md` written **from the built site**, per `impeccable/reference/new-work.md:71`
- [ ] Analytics, monitoring, and a tested rollback are live
- [ ] Vijay has signed off on every public word

---

## 12. What Phase 1 explicitly does not include

Deferred, with the phase that owns each ([PRODUCT.md:65-78](../../PRODUCT.md#L65-L78)):

| Excluded | Owning phase |
|---|---|
| CRM, pipeline, campaign attribution | 1.5 |
| **VIA AI in any form, including a teaser** | 2 |
| Business Setup Wizard | 3 |
| Website audit tool, content generator, quote estimator | 4 |
| Connects accounts, profiles, check-in, matchmaking | 5 |
| Client portal | 6 |
| Dark mode | Milestone 9 at the earliest; not a V1 requirement |
| Telugu localisation | Gated on G9 |
| `/city/[city]`, `/campaign/[slug]` | Only when operational coverage is real |
| Any animation library, 3D, or scroll library | Only via a superseding ADR |

**`PRODUCT.md:78` is the governing sentence: "Do not scope-creep later phases into the initial site."** Every item above has been proposed in some form during Phase 0 and is recorded here so that its exclusion is a decision on the record rather than an omission someone later "fixes".
