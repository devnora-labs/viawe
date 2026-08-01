---
status: superseded
superseded_by: docs/decisions/ADR-004-logo-led-extensible-service-motion.md
superseded_on: 2026-08-01
reason: Derived from the rejected Distributary motion system; V1 is now specified as a premium, highly animated site and the stack decision is re-opened
---

> # ⛔ SUPERSEDED — THE STACK DECISION IS RE-OPENED
>
> **This ADR was never accepted, and it is no longer a candidate in its current form.**
>
> Its central argument — that **zero animation dependencies** suffice — was derived from a motion system containing exactly one authored moment across twenty routes. That motion system is superseded. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §8 now specifies *"a premium, highly animated corporate and lead-generation website"*, and §14 lists **"final animation stack"** under **Not ready now**.
>
> **No animation stack is currently selected.** Selecting one is explicitly prohibited until a logo-led prototype passes the creative gate — see [ADR-004](ADR-004-logo-led-extensible-service-motion.md) and `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §11.
>
> **Constraints that survive independently of this ADR** — because they originate elsewhere, not here:
> - No scroll-jacking or scroll hijacking (`AGENTS.md`)
> - Reduced motion must be complete, never a blanket kill
> - Mid-tier Android on throttled 4G is the measurement device
> - The site must be readable without JavaScript
> - **Do not hardcode a fixed number of service segments or animation timelines** (Business Truth v2 §7)
>
> **Retained because** its comparison method (§4), its escalation gate (§7), and its honest statement of the negative consequences of a zero-dependency choice (§8) are reusable when the stack is decided for real.

---

# ADR-001 — Via-We animation stack (superseded)

| | |
|---|---|
| **Status** | **Superseded 2026-08-01** — was never accepted; stack decision re-opened |
| **Date** | 2026-08-01 |
| **Phase** | 0 — decision recorded only. Nothing installed. |
| **Deciders** | Vijay Budati (approver), Vamshi (technical owner) |
| **Supersedes** | Nothing |
| **Resolves** | Recon conflicts **C-6** (library-agnostic vs GSAP doctrine), **C-7** (scroll-jacking), **C-8** (elastic easing), **C-11** (shadcn undecided) |
| **Depends on** | [Motion System v1](../design/VIA-WE_MOTION_SYSTEM_v1.md), written first as the Phase 0 prompt requires |
| **Review date** | At Phase 1 Milestone 9, and again before any Phase 2 work |

---

## 1. Context

Via-We has no application code, no `package.json`, and no dependencies of any kind. The animation stack is therefore a genuinely open decision made on a blank slate — the best possible position, and one that will not exist again.

Three forces bear on it.

**1. The repository already contains two contradictory motion doctrines, neither adopted.**

| Source | Position |
|---|---|
| `.agents/skills/impeccable/reference/animate.md:69` | *"Do not add a dependency for an effect the existing stack can express cleanly."* Library-agnostic; recommends CSS, WAAPI, View Transitions |
| `.agents/skills/ui-ux-pro-max/data/motion.csv` | 16 presets, **100% GSAP**. Two require plugins; one requires **SplitText, a paid GSAP Club plugin**. Ships pinned-scrub scrollytelling and `elastic.out` / `back.out` easing as standard tiers |

Left unresolved, the effective stack would be decided by whichever skill an agent happened to load — and the recon established that the runtime does not reliably load the repository's own copy of a skill. A written decision is the only way to stop this being decided by accident.

**2. `AGENTS.md` already bans the patterns that justify the heavier libraries.**
[AGENTS.md:117](../../AGENTS.md#L117) prohibits scroll-jacking. [Motion System §5](../design/VIA-WE_MOTION_SYSTEM_v1.md) extends that to pinning, scrubbing, smooth-scroll libraries, horizontal scroll sections, and scroll-triggered reveals. GSAP's principal value on a marketing site is ScrollTrigger — pinning and scrubbing. **We have banned the reason to buy the tool.**

**3. The audience's device sets the budget.**
The target is a mid-tier Android handset on variable Indian mobile data, not a desktop ([Creative Direction §1.2](../design/VIA-WE_CREATIVE_DIRECTION_v1.md)). The homepage JS budget is 120 KB gzipped, of which the Next.js App Router baseline consumes roughly 85–90 KB. **The entire application's remaining client-side allowance is about 30 KB.** GSAP core alone is roughly 23 KB gzipped before plugins.

### What the motion system actually requires

Derived from [Motion System §4](../design/VIA-WE_MOTION_SYSTEM_v1.md), which was written before this ADR:

| Requirement | Native capability | Library needed? |
|---|---|---|
| One 900 ms staggered SVG stroke sequence, once per session | CSS `@keyframes` on `stroke-dashoffset` + `opacity`, or `element.animate()` for sequencing | **No** |
| Channel highlight on hover/focus/selection | `:hover`, `:focus-visible`, `[data-active]` + CSS transitions | **No** |
| Route transitions with an optional shared element | **View Transitions API** — supported in Next.js App Router | **No** |
| Drawer, dialog, popover enter/exit | CSS transitions + `@starting-style` + `transition-behavior: allow-discrete` | **No** |
| Disclosure height animation | `grid-template-rows: 0fr → 1fr`, or `interpolate-size` where available | **No** |
| Cross-fade content replacement | CSS opacity transition | **No** |
| Determinate reading progress (one route) | CSS `animation-timeline: scroll()` with a passive-listener fallback | **No** |
| Toast enter/exit | CSS transitions | **No** |
| Form validation feedback | CSS transitions | **No** |

**Every requirement in the motion system is expressible natively.** There is no residual need.

---

## 2. Decision

> ### Adopt **Option A**, in its zero-dependency variant.
>
> **Next.js App Router + TypeScript + CSS + inline SVG + Web Animations API + View Transitions API.**
>
> **Animation dependencies in V1: none. Budget: 0 KB.**
>
> The `motion` package is **not** adopted, but is held as a conditional escalation behind the gate in §7. GSAP and Three.js are **rejected** for V1.

This is Option A as the Phase 0 prompt defines it (`Next.js + CSS/SVG + Motion`), with one deliberate narrowing: **`Motion` is not shipped by default.** Adopting a library "just in case" is exactly the dependency-by-default that `animate.md:69` refuses, and on a 30 KB allowance it is not affordable as insurance.

---

## 3. Alternatives considered

### Option A — Next.js + CSS/SVG (+ `motion` if needed) ✅ **CHOSEN**
0 KB baseline. Covers every documented requirement. Nothing to clean up, nothing to keep current, no React-version coupling. Requires more discipline: without a library API, sequencing lives in CSS and WAAPI and must be written carefully.

### Option B — Next.js + GSAP/ScrollTrigger + CSS/SVG ❌ **REJECTED**
~23 KB core, ~34 KB with ScrollTrigger — **more than the whole remaining app budget**. Its differentiating features (ScrollTrigger, Flip, SplitText) map onto capabilities this project has explicitly banned or does not need. SplitText is a paid Club plugin, introducing a commercial dependency for a text effect the motion system forbids. Every GSAP instance must be manually killed on unmount in React; a single missed cleanup leaks across route changes. Its presence would also legitimise `motion.csv`'s pinned-scrub and elastic-easing presets, which `AGENTS.md` prohibits.

### Option C — Next.js + GSAP + limited Three.js/WebGL ❌ **REJECTED**
Option B's costs plus ~150 KB before a single scene, GPU memory on mid-tier Android, shader compile time, no accessible tree, and context-loss risk on the one element that must never fail. [Motion System §6](../design/VIA-WE_MOTION_SYSTEM_v1.md) rules this out on six independent grounds. Selecting it would mean choosing a technology to signal premium quality rather than to communicate something — the exact failure the Phase 0 prompt names.

### Option D — `motion` (React) as a default dependency ❌ **REJECTED for V1**
~18 KB for the React bundle (less with `motion/react` LazyMotion, but the ergonomic API is the point of adopting it). It is a genuinely good library and the right first choice *if* a requirement appears. But nothing in the motion system needs layout animation, gesture handling, or interruptible spring physics. Adopting it now would mean paying 15% of the total JS budget for an API convenience.

---

## 4. Comparison

| Criterion | A (chosen) | B — GSAP | C — GSAP + 3D | D — motion |
|---|:--:|:--:|:--:|:--:|
| Narrative capability **for this motion system** | **Full** | Full | Full | Full |
| Bundle cost (gzipped) | **0 KB** | 23–34 KB | 175–190 KB | ~18 KB |
| Fits the 30 KB app allowance | **Yes** | No | No | Marginal |
| Learning curve | Low (web standards) | Medium | High | Low |
| Cleanup complexity | **Minimal** — CSS self-cleans | High — manual kill | Very high | Low |
| React 19 / RSC integration | **Native** | Needs `useGSAP` + client boundaries | Client-only | Good, client-only |
| Mid-tier Android cost | **Lowest** | Medium | Unacceptable | Low |
| Reduced-motion handling | Native media query | Manual | Manual | Built-in |
| Route transitions | Native View Transitions | Manual | Manual | `AnimatePresence` |
| Maintenance / upgrade risk | **None** | Version + plugin licensing | High | Low |
| Testability | **CSS assertable; no runtime** | Runtime timeline mocking | Very hard | Medium |
| Team fit (no in-house motion engineer) | **Best** | Requires expertise | Requires specialist | Good |
| Suits **Concept B — Distributary** | **Yes** — an SVG survey drawing is a CSS problem | Overkill | Contradicts the 2D grammar | Overkill |
| Licence exposure | **None** | **SplitText is paid** | Paid | None |

---

## 5. Supporting decisions

Each is binding and each resolves a question the Phase 0 prompt raised.

| # | Question | Decision | Reasoning |
|---|---|---|---|
| **5.1** | **Is Lenis needed?** | **No. Not permitted in V1.** | Smooth-scroll libraries hijack the scroll thread, fight iOS momentum, add weight, and break `scroll-behavior`. `AGENTS.md:117` bans scroll-jacking. Native scroll is untouched |
| **5.2** | **Use the View Transitions API?** | **Yes** — same-document, progressively enhanced | Native, 0 KB, degrades to instant navigation with no penalty. The only route-transition mechanism permitted |
| **5.3** | **Split-text: paid or open alternative?** | **Neither. Text splitting is banned entirely** | The motion system has no per-character or per-line text animation (§4 category 4). This removes the SplitText licensing question, the DOM-bloat cost, and the screen-reader hazard of splitting text nodes. **The cheapest way to resolve a licensing question is to not need the feature** |
| **5.4** | **shadcn/ui: everywhere, or utilitarian UI only?** | **Utilitarian only** — and even then, selectively | Permitted for: form primitives, select, combobox, dialog, popover, accordion, tabs, toast — the accessibility-hard plumbing. **Forbidden for**: hero, the Intake, cards, work rows, plates, navigation, or anything carrying the visual world. `craft-floor.md:87` treats a stock component inside a committed design as a lapse. Every adopted component is restyled to Via-We tokens on adoption; none ships with default styling. Resolves recon **C-11** |
| **5.5** | **Centralise animation wrappers?** | **No. Explicitly banned** | A generic `<Reveal>` or `<FadeIn>` wrapper is precisely how scattered scroll reveals get built by accident — a contributor reaches for the wrapper because it exists. Not providing one is a structural control, not an oversight. Shared *keyframes* and *tokens* live in one `motion.css` layer; shared *components* do not exist |
| **5.6** | **Motion tokens: CSS variables, TS objects, or both?** | **Both, generated from one source** | One `motion-tokens.ts` module holds the canonical values; a build step emits the CSS custom properties from it. CSS consumes the properties, WAAPI consumes the TS constants. Two consumers, one definition — the only arrangement in which they cannot drift |
| **5.7** | Easing family | `cubic-bezier(0.16, 1, 0.3, 1)` for entrances; **bounce and elastic banned** | `animate.md:61`. Directly overrides `motion.csv` presets 3 and 8. Resolves **C-8** |
| **5.8** | Scroll-triggered animation | **Banned**, with one exception: the determinate reading-progress indicator on `/insights/[slug]` | It reflects real state rather than decorating. Hidden under reduced motion. Resolves **C-7** |
| **5.9** | Icon library | **None.** ~20 authored SVG glyphs in the survey grammar | A general-purpose library would visibly not belong to the sheet, and would ship glyphs we never use |
| **5.10** | Fonts | Self-hosted `woff2`, subset. **No Google Fonts CDN** | Removes a third-party request from the critical path, removes a privacy/consent question, and makes the build reproducible offline |

---

## 6. Prohibited patterns

Binding for Phase 1. Any of these requires a superseding ADR, not a pull-request discussion.

**Dependencies**
- GSAP and every GSAP plugin — ScrollTrigger, Flip, SplitText, MotionPath, Draggable
- Three.js, `@react-three/fiber`, `@react-three/drei`, any WebGL or WebGPU wrapper
- Lenis, Locomotive Scroll, or any smooth-scroll library
- Lottie, Rive, react-spring, anime.js, popmotion, auto-animate
- `motion` / framer-motion — **conditional only**, behind the §7 gate
- Any icon library
- Google Fonts CDN or any external font host

**Techniques**
- Scroll-jacking, pinning, scrub-linked animation, horizontal scroll sections
- Scroll-triggered reveals (`IntersectionObserver` remains permitted for lazy-loading only)
- Text splitting of any kind
- `canvas` or WebGL rendering
- Any infinitely repeating animation
- Counting-up number animations
- Parallax on any element
- Bounce, elastic, or overshoot easing
- Animating `width`, `height`, `top`, `left`, `margin`, or any layout-driving property
- `will-change` left applied at rest
- A blanket `* { animation-duration: 0.01ms !important }` reduced-motion kill
- Full-page loaders, intro curtains, cinematic preloaders
- Autoplay video or audio
- A generic animation wrapper component

**Content, carried from `AGENTS.md`**
- Animating any unverified claim, metric, or count into prominence
- Animating, delaying, collapsing, or making dismissible any legal disclaimer — **especially the franchise disclaimer and the no-guaranteed-returns notice**

---

## 7. Escalation gate — the only route to adding a dependency

`motion` (or any animation library) may be adopted **only** when all six conditions are met and recorded in a superseding ADR:

1. A **named requirement** exists, traceable to an approved design document — not "it would feel nicer."
2. A written attempt to express it in CSS + WAAPI exists, with the specific reason it fails.
3. The requirement survives a **reduced-motion substitution** — if it vanishes under reduced motion, it was decoration.
4. The addition fits the **120 KB homepage budget** with measured before/after bundle analysis.
5. It is verified on the **reference device** (mid-tier Android, throttled 4G) — not on a developer laptop.
6. **Vijay approves the trade-off**, framed in plain terms: what the visitor gains, and how much slower the site becomes on a mid-range phone.

If a library is ever adopted, it is imported at a **single** module boundary — never scattered across components — so that a later removal is one file, not an archaeology exercise.

---

## 8. Consequences

### Positive
- The homepage ships with **zero animation-library bytes**, leaving the entire client-side allowance for the application itself.
- Nothing to upgrade, patch, license, or keep compatible with a future React version.
- Reduced motion is handled by a media query rather than by library configuration, so it is very hard to get wrong.
- CSS animations self-clean on unmount; the leak class that dominates GSAP-in-React bugs does not exist here.
- The stack is testable — animation state is assertable from computed styles and data attributes without mocking a runtime timeline.
- Onboarding is web standards, not a proprietary API. Any competent frontend developer can maintain it.
- Recon conflicts C-6, C-7, C-8 and C-11 are closed in writing.

### Negative — stated honestly
- **Sequencing is more verbose.** The 900 ms Intake resolve needs careful CSS keyframes or a WAAPI sequence where a library would give one call. This is a real cost, paid once, on one element.
- **Interruptible spring physics is unavailable.** Accepted: the motion system bans springs anyway (§3.2), but if a future requirement genuinely needs one, §7 applies.
- **Layout animation (FLIP) is manual.** Nothing in V1 needs it; View Transitions cover the shared-element case.
- **Discipline is load-bearing.** With no library gatekeeping what is possible, the ban on scattered reveals depends on review rather than on friction. Mitigated by §5.5 (no wrapper component) and the Milestone 9 audit.
- **View Transitions support is uneven.** Accepted — it is a progressive enhancement, and unsupported browsers navigate instantly, which is not a degraded experience.

### Neutral
- Should Via-We later build a genuinely interactive product surface (Phase 5 Connects platform, Phase 6 client portal), this ADR does not bind it. It governs the V1 marketing site. Phase 5+ gets its own decision.

---

## 9. Implementation gate

**No animation code may be written until all of the following are true:**

1. This ADR is **Accepted** — Vijay has approved it.
2. [Creative Direction v1](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) is approved, including the Concept B recommendation.
3. [Motion System v1](../design/VIA-WE_MOTION_SYSTEM_v1.md) is approved.
4. Motion tokens exist in code (§5.6) before any component consumes a duration or easing value.
5. `/dev/motion-lab` (Milestone 3) demonstrates every category in [Motion System §4](../design/VIA-WE_MOTION_SYSTEM_v1.md) in isolation and is signed off.
6. A bundle-size check is wired into CI and **fails the build** above 120 KB, before the first animated component merges.

**At Milestone 9, this ADR is reviewed against the built site.** If any prohibited pattern is present, it is removed rather than retro-approved.
