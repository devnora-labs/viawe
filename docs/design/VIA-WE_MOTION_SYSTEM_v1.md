---
status: superseded
superseded_by: docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md
rejecting_adr: docs/decisions/ADR-003-distributary-direction-rejected.md
superseded_on: 2026-08-01
reason: Derived from the rejected Distributary concept; V1 is now specified as a premium, highly animated site, so the one-authored-moment doctrine no longer applies
---

> # ⛔ SUPERSEDED — DECISION HISTORY ONLY
>
> **Do not build from this document.**
>
> Its signature moment was "the Intake resolve", which belonged to the rejected Distributary concept. Its governing doctrine — **one authored moment across the whole site** — conflicts with `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §8, which specifies *"a premium, highly animated corporate and lead-generation website"*.
>
> **Current direction:** [VIA-WE_MOTION_DIRECTION_CURRENT.md](VIA-WE_MOTION_DIRECTION_CURRENT.md)
>
> **What survives from this document, and why** — carried into the current direction as principles, not as a system:
> - No scroll-jacking, no pinning, no scroll hijacking (originates in `AGENTS.md`, not here)
> - Reduced motion must be complete, never a blanket `0.01ms` kill
> - Performance budgets measured on mid-tier Android over throttled 4G, not on a desktop
> - Content readable without JavaScript; motion never hides content
> - Motion tokens with a single source of truth
>
> Everything else — the one-moment doctrine, the per-category table, the specific token values — is superseded and must be re-derived once the logo-led direction is prototyped.

---

# Via-We — Motion System v1 (superseded)

**Date:** 2026-08-01
**Phase:** 0 — specification only. No code, no dependencies.
**Status:** `[PROPOSED]` — requires approval with [Creative Direction v1](VIA-WE_CREATIVE_DIRECTION_v1.md).
**Governing sources, in precedence order:** [AGENTS.md](../../AGENTS.md) → this document → `.agents/skills/impeccable/reference/animate.md` → `.agents/skills/impeccable/reference/craft-floor.md` → `.agents/skills/ui-ux-pro-max/references/quick-reference.md` §7.

**Resolves recon conflicts C-6, C-7 and C-8.** The repository contained two contradictory third-party motion doctrines — `animate.md` (library-agnostic, restrictive) and `ui-ux-pro-max/data/motion.csv` (16 GSAP presets, permissive). **This document is Via-We's own motion doctrine and supersedes both.** Where they disagreed, `animate.md` wins and `AGENTS.md:117` wins over everything.

---

## 1. The motion thesis

Per `animate.md:25`, written before any implementation.

| | |
|---|---|
| **Focal moment** | **The Intake resolve.** On the homepage, once per session: the intake block's seven channels draw outward to their nodes over ~900 ms. This is the only authored motion sequence on the entire site |
| **Continuity** | Route changes within the site keep the header channel rail and the active channel lit, so the visitor never loses their position in the ecosystem |
| **Feedback** | Every control confirms itself: focus, hover, press, channel selection, form validation, submit, and error |
| **Budget** | Zero animation dependencies. Zero scroll-driven animation. Maximum 8 concurrently animating elements. Everything is transform, opacity, or a bounded stroke property |

**The one-line rule for every future contributor:**

> If removing an animation would lose *meaning*, keep it. If it would lose only *decoration*, it was never allowed.

---

## 2. Principles

1. **Motion has a narrative job.** Explain state, relationship, hierarchy, or continuity — or do not animate. Decoration without purpose is animation debt (`animate.md:3`).
2. **One orchestrated moment beats scattered effects.** The Intake resolve is that moment. Nothing else competes with it.
3. **Content is available without motion.** Every element renders in its final, readable state by default. No element is hidden pending an animation. A failed script never hides the page (`animate.md:71`).
4. **Scroll stays under the user's control.** No hijacking, no smoothing library, no pinning, no scrubbing, no horizontal scroll sections (`AGENTS.md:117`).
5. **Mobile motion is re-composed, not scaled down.** Reduced count, reduced distance, never a shrunk desktop sequence.
6. **Reduced motion is complete, not degraded.** A visitor with `prefers-reduced-motion: reduce` gets the same information, the same routes, and the same quality. A global `0.01ms` kill is banned — it destroys useful feedback (`audit.md`, Accessibility).
7. **Transform and opacity by default.** Bounded stroke, clip-path and filter are permitted where they carry meaning; layout-driving properties are not animated.
8. **No animation obscures a call to action.** A primary action is never mid-transition when a visitor first reaches it.
9. **No repeated reveal on every section.** One identical entrance repeated down the page is the template signal `craft-floor.md:13` refuses.
10. **Stagger is bounded.** Maximum 6 items, 40 ms apart, 240 ms total. Never applied to scrolled sections.
11. **No artificial wait states.** Nothing is delayed to feel considered. Skeletons appear only past 300 ms of real waiting.
12. **Exit faster than entrance** — 60% of the entrance duration (`animate.md:61`).

---

## 3. Tokens

Library-agnostic by design (ADR-001 §5). Expressed as CSS custom properties, which are the single source of truth; a typed TS export reads the same values for Web Animations API calls.

### 3.1 Duration

| Token | Value | Use |
|---|---:|---|
| `--vw-dur-instant` | 120 ms | Press feedback, checkbox, radio, chip toggle |
| `--vw-dur-quick` | 180 ms | Hover, focus ring, link underline, colour change |
| `--vw-dur-base` | 260 ms | Routine state change, disclosure, menu, tooltip |
| `--vw-dur-deliberate` | 400 ms | Overlay, drawer, view transition, dialog |
| `--vw-dur-signature` | 900 ms | **The Intake resolve only.** No other use is permitted |
| `--vw-dur-exit` | `calc(var(--vw-dur-base) * 0.6)` | All exits |

Maps to `animate.md:54` (100–150 feedback / 150–300 routine / 300–500 layout / 500–800 authored). The signature sits marginally above that band at 900 ms because it is a seven-channel sequence, not a single entrance; it is capped there and may not grow.

### 3.2 Easing

| Token | Curve | Use |
|---|---|---|
| `--vw-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Default.** All entrances and arrivals |
| `--vw-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | All exits |
| `--vw-ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Position changes with a start and end on screen |
| `--vw-ease-linear` | `linear` | Progress indicators and determinate loaders only |

**Banned:** bounce, elastic, `back.out`, overshoot of any kind. `animate.md:61` — *"do not use bounce or elastic curves by reflex."* This directly overrides `ui-ux-pro-max/data/motion.csv` presets 3 (`elastic.out(1,0.4)`) and 8 (`back.out(1.4)`), which are **not to be used on this project.**

**No spring physics in V1.** `quick-reference.md` §7 `spring-physics` recommends springs for a native-app feel; this is a document-grammar website, springs would contradict the survey world, and they would require a dependency. Revisit only with a named requirement.

### 3.3 Distance

| Token | Value | Use |
|---|---:|---|
| `--vw-move-nudge` | 2 px | Press feedback |
| `--vw-move-rise` | 4 px | Hover lift — the maximum, and used on almost nothing |
| `--vw-move-enter` | 8 px | Element entrance |
| `--vw-move-panel` | 16 px | Drawer or dialog entrance offset |

Nothing on this site translates more than 16 px. Large translations read as decoration.

### 3.4 Stagger

| Token | Value |
|---|---:|
| `--vw-stagger-step` | 40 ms |
| `--vw-stagger-max-items` | 6 |
| `--vw-stagger-cap` | 240 ms |

Applies to genuine sibling lists that appear as a unit (form errors, menu items, the seven channels within the Intake). **Never to scrolled sections** (`animate.md:48`).

### 3.5 Scroll-trigger zones

**There are none.** No `IntersectionObserver`-driven reveal, no scroll-linked animation, no `animation-timeline: scroll()` or `view()` anywhere in V1. This token category is deliberately empty and its emptiness is the policy.

### 3.6 Breakpoints

| Token | Value |
|---|---:|
| `--vw-bp-sm` | 390 px |
| `--vw-bp-md` | 768 px |
| `--vw-bp-lg` | 1024 px |
| `--vw-bp-xl` | 1440 px |

Design and QA baseline is **360 px**, not 390 px — the audience's low end.

### 3.7 Reduced-motion substitutions

| Standard | Under `prefers-reduced-motion: reduce` |
|---|---|
| Intake resolve (900 ms) | Not played. Diagram renders final, fully interactive |
| Element entrance (8 px + fade) | Opacity only, 120 ms — retains the "something changed" signal |
| View transition (400 ms) | Cross-fade, 120 ms |
| Drawer / dialog (16 px + fade) | Opacity only, 150 ms; backdrop still fades |
| Hover lift | Removed; colour and underline change retained |
| Press nudge | Removed; colour change retained |
| Stagger | Removed; items appear together |
| Skeleton shimmer | Static skeleton, no sweep |
| Determinate progress | Unchanged — it conveys real state |
| Smooth anchor scroll | Instant jump |

**Never a blanket `* { animation-duration: 0.01ms !important }`.** Substitution is per-category, and feedback survives in every case.

---

## 4. Motion by category

Every category the Phase 0 prompt names.

| # | Category | Behaviour | Duration / easing | Why it is allowed |
|---|---|---|---|---|
| 1 | **Page entry** | None. The page renders complete. No fade-in, no loader, no curtain | — | `animate.md:10` — do not make users wait through page-load choreography |
| 2 | **Navigation (header)** | Active channel tick lights on the rail; underline grows from the link's leading edge on hover/focus | `quick` / ease-out | Feedback + position |
| 2b | **Navigation (mobile menu)** | Drawer slides 16 px and fades; backdrop fades; focus trapped; Esc closes | `deliberate` / ease-out, exit at 0.6× | Spatial continuity |
| 3 | **Hero — the Intake** | **The signature.** Channels draw from intake to node, staggered 40 ms, 900 ms total, from an already-visible default state (channels at 25% opacity → 100%, stroke dash resolves). **Once per session**, gated by `sessionStorage` | `signature` / ease-out | The one authored moment |
| 4 | **Typography** | **None.** No split-text, no per-character reveal, no line masking, no headline animation anywhere | — | Removes the paid-plugin question entirely (ADR-001 §6) and the a11y cost of splitting text nodes |
| 5 | **Media** | Images fade in on decode, 180 ms, over a reserved aspect-ratio box. No Ken Burns, no parallax, no zoom-on-hover | `quick` / ease-out | Prevents flash; holds CLS at 0 |
| 6 | **Service ecosystem (the seven channels)** | Hover/focus a channel: it and its node go to full weight and `--vw-channel`; siblings drop to `--vw-silt` at 60%. Selecting a situation chip lights the matching channel and reveals its destination link | `quick` / ease-out | This is the routing instrument doing its job — feedback, not decoration |
| 7 | **Process** | None. The numbered steps render statically | — | A sequence read left to right needs no animation to be read as a sequence |
| 8 | **Work cards / rows** | Border colour and link underline change on hover/focus. **No lift, no scale, no shadow bloom, no image zoom** | `quick` / ease-out | `craft-floor.md` — cards are the lazy container; they get the quietest possible treatment |
| 9 | **Case studies** | Entry via View Transition from the work index; the project image is the shared element. Body content does not animate | `deliberate` / ease-inout | Genuine continuity between two states |
| 10 | **Franchise models (FOCO / FOFO / COCO)** | A comparison diagram; selecting a model cross-fades the labelled regions. No morph, no draw-on | `base` / ease-inout | Content replacement in one container (`quick-reference.md` `fade-crossfade`) |
| 11 | **Connects / events** | List rows behave as work rows. Event date blocks do not animate | `quick` | Consistency |
| 12 | **CTA** | Background and border shift on hover; 2 px nudge on press; disabled state has no motion | `quick` / `instant` | `quick-reference.md` `tap-feedback-speed` — feedback within 100 ms |
| 13 | **Forms** | Focus ring 180 ms; inline validation **on blur, never on keystroke**; error message fades in 180 ms and the field border changes colour **and** an icon appears (never colour alone); submit button enters a determinate busy state | `quick` | WCAG + `quick-reference.md` §8 |
| 14 | **Hover / focus** | Identical treatment for both. `:focus-visible` ring is 2 px `--vw-channel` at 2 px offset, always visible, never removed | `quick` | Keyboard parity is not optional |
| 15 | **Page transition** | **View Transitions API**, same-document. Cross-fade root, shared element where one exists. Progressive enhancement: unsupported browsers navigate instantly with no penalty | `deliberate` / ease-inout | Native, 0 KB, degrades silently |
| 16 | **Loading** | Nothing under 300 ms. Past 300 ms, a static skeleton matching the final layout box. Past 3 s, a text status message. **No spinner-only states, no full-page loader, no progress bar for navigation** | shimmer disabled under reduced motion | `quick-reference.md` `progressive-loading` |
| 17 | **Errors / success** | Toast enters with opacity + 8 px, holds 4 s, exits at 0.6×. `role="status"` / `role="alert"`, never steals focus. Success confirms in the same words as the action ("Send enquiry" → "Enquiry sent") | `base` / ease-out | `frontend-design/SKILL.md:51` — an action keeps its name through the flow |
| 18 | **Mobile** | Categories 3 (re-composed vertical resolve, 600 ms), 8, 12, 13, 14, 16, 17 only. Categories 2b, 9, 15 simplified. Hover states do not exist; `:active` and `:focus-visible` carry all feedback | ≤ `base` | Touch has no hover; battery and thermal budget are real |
| 19 | **Reduced motion** | Per §3.7 substitution table | — | Complete, not degraded |

---

## 5. Scroll policy

| Decision | Ruling | Reasoning |
|---|---|---|
| Smooth scrolling library | **Not allowed** | Hijacks the scroll thread, fights iOS momentum, adds ~10 KB, and breaks `scroll-behavior` expectations. `AGENTS.md:117` bans scroll-jacking |
| **Lenis specifically** | **Not allowed in V1** | Same. Revisiting requires a new ADR |
| Pinned storytelling | **Not allowed** | The pattern `AGENTS.md:117` most directly prohibits. Also the highest mobile cost in the reference set |
| Maximum pinned duration | **0 ms** — the category does not exist | — |
| Horizontal scroll sections | **Not allowed** | `quick-reference.md` `gesture-conflicts` — horizontal swipe on main content conflicts with browser back-swipe on iOS |
| Scroll-triggered reveals | **Not allowed** | `animate.md:34` — a scroll reveal is not a thesis. Also the main source of "content invisible when JS fails" |
| Scroll-linked animation (`scroll()` / `view()` timelines) | **Not allowed in V1** | No content need. Revisit only with a named requirement |
| Native scroll | **Required and untouched** | `overscroll-behavior` and momentum left at browser defaults |
| Anchor links | `scroll-behavior: smooth` **only** inside `@media (prefers-reduced-motion: no-preference)`; instant otherwise | Legitimate use — the user initiated it and knows where they are going |
| Keyboard | Space / PgDn / Home / End / arrows behave natively. Skip-to-content link is the first focusable element | WCAG 2.1.1 |
| Scroll position restoration | Browser default preserved on back navigation; not overridden | `quick-reference.md` `state-preservation` |
| Sticky header | Permitted, ≤ 64 px, `position: sticky`, no hide-on-scroll-down behaviour | Hide-on-scroll is a scroll-coupled animation and is jarring on mobile |

---

## 6. 3D / WebGL policy

Applying the six-part test from the Phase 0 prompt §12.6.

| Test | Answer |
|---|---|
| Is 3D necessary to communicate Via-We? | **No.** The Intake is a cartographic plan drawing. A survey sheet is inherently two-dimensional; rendering it in 3D would contradict its own grammar |
| Can CSS, SVG or video achieve the same result? | **Yes, entirely.** Inline SVG with CSS transitions delivers the full signature at ~14 KB |
| What is the mobile fallback? | Would have to be a static image — meaning the mobile majority never sees the 3D at all, so it cannot be load-bearing |
| What is the cost? | Three.js is ~150 KB+ gzipped before any scene, plus shader compilation, plus GPU memory on mid-tier Android. That is larger than this site's entire JS budget (§7) |
| What is the accessibility alternative? | A canvas has no accessible tree. Every node would need a parallel DOM structure — meaning the accessible version is built anyway, and is sufficient on its own |
| What happens when rendering fails? | Context loss on low-memory Android is common. The homepage's primary routing device must never depend on a GPU context |

> ### Ruling: **No 3D and no WebGL in V1.**

Not "limited 3D in one signature moment" — because the signature moment is precisely the element that must never fail, and it must be keyboard-operable and screen-reader-legible. A canvas is the wrong material for a routing instrument.

Reconsider only if: a named business requirement appears that 2D cannot express; the target-device budget is re-measured; and a full non-canvas fallback is specified first. That would be ADR-002, not a build decision.

---

## 7. Performance budget

Hard limits. A build exceeding any of these fails Milestone 9.

### 7.1 JavaScript

| Metric | Budget |
|---|---:|
| Initial JS, homepage route, gzipped | **≤ 120 KB** |
| Initial JS, any other route | ≤ 140 KB |
| **Animation library cost** | **0 KB** |
| Per-route hydration islands | ≤ 3 |
| Third-party scripts before user consent | **0** |

The Next.js App Router baseline consumes roughly 85–90 KB of that. The remaining ~30 KB is the entire application's client-side allowance, which is the reason the animation-library budget is zero (ADR-001).

### 7.2 Media

| Asset | Budget |
|---|---|
| Inline SVG (the Intake) | ≤ 14 KB gzipped |
| Any single image, above the fold | ≤ 120 KB, AVIF/WebP, `srcset`, explicit dimensions |
| Any single image, below the fold | ≤ 200 KB, `loading="lazy"` |
| Total homepage image weight | ≤ 500 KB |
| **Hero video** | **Not permitted in V1.** If later approved: ≤ 2.5 MB, poster required, `preload="none"`, user-initiated, captioned |
| Web fonts, total | ≤ 180 KB — display + body + data, subset, `woff2` only |

### 7.3 Runtime

| Metric | Target | Fails at |
|---|---|---|
| LCP — mid-tier Android, 4G | ≤ 2.0 s | > 2.5 s |
| CLS | ≤ 0.02 | > 0.05 |
| INP | ≤ 150 ms | > 200 ms |
| TBT | ≤ 150 ms | > 300 ms |
| Frame rate during the Intake resolve | 60 fps sustained | any dropped frame on the reference device |
| Concurrently animating elements | ≤ 8 | > 8 |
| `will-change` at rest | **0 elements** | any |

**Reference device for all measurement:** a mid-tier Android handset on a throttled 4G profile — not a desktop, not a flagship iPhone. This is the audience's actual device (Creative Direction §1.2).

### 7.4 Degradation ladder

| Condition | Response |
|---|---|
| `prefers-reduced-motion: reduce` | §3.7 substitutions |
| `navigator.connection.saveData === true` | No decorative motion at all; images at the smallest `srcset` step |
| `effectiveType` is `2g` or `slow-2g` | Signature sequence skipped; render final state |
| `deviceMemory ≤ 2` | Signature sequence skipped |
| Battery Saver (where detectable) | Signature sequence skipped |
| JavaScript unavailable | **Full site works.** All navigation, all links, all forms submit. The Intake renders and every node is a working link |

### 7.5 Animation cleanup and memory

- Every WAAPI animation is held in a ref and `.cancel()`-ed on unmount.
- No `setInterval`, no `requestAnimationFrame` loop, no infinitely repeating animation anywhere in V1. The skeleton shimmer is a CSS animation that unmounts with its element.
- `will-change` applied only in the frame before a known animation and removed on `finish`.
- No animation registry, no global timeline, no orchestration singleton.

---

## 8. Accessibility requirements

| Requirement | Rule |
|---|---|
| Reduced motion | Honoured per §3.7. Never a blanket kill |
| Focus visibility | `:focus-visible` 2 px `--vw-channel`, 2 px offset, ≥3:1 against both adjacent surfaces. Never `outline: none` without a replacement |
| Focus order | Matches visual order. On route change, focus moves to `<main>` (`quick-reference.md` `focus-on-route-change`) |
| Keyboard operability | Every Intake channel and node reachable and activatable by keyboard. The situation control is a real radio `fieldset` |
| Interruptibility | Every animation cancels immediately on user input (`quick-reference.md` `interruptible`) |
| No input blocking | UI stays interactive during every transition, including the 900 ms signature |
| Colour never alone | Channel state uses weight + label + colour. Errors use icon + text + colour |
| Contrast | Body ≥ 4.5:1, large ≥ 3:1, UI strokes ≥ 3:1. `--vw-silt` and `--vw-field` are non-text tokens; `--vw-mark` is large-text/icon only. Enforced in code review |
| Flashing | Nothing flashes. No element changes luminance more than twice per second |
| Motion and vestibular safety | No parallax, no large-field movement, no rotation, no zoom. Maximum translation on the site is 16 px |
| Screen readers | The Intake carries a text alternative describing the seven channels and their status. The visual diagram is `aria-hidden` where a semantic list carries the same content |
| Touch targets | ≥ 48 × 48 px, ≥ 8 px apart |

---

## 9. Implementation boundaries

**Permitted materials**
- CSS transitions and `@keyframes`
- Web Animations API (`element.animate()`) for sequencing the signature
- View Transitions API for route changes
- Inline SVG with CSS-animated `stroke-dashoffset`, `opacity`, `transform` — bounded to the Intake
- CSS `@starting-style` and `transition-behavior: allow-discrete` for enter/exit of popovers and dialogs

**Forbidden without a new ADR**
- Any animation library (GSAP, `motion`, react-spring, anime, Lottie, Rive)
- Any scroll library (Lenis, Locomotive)
- `canvas`, `WebGL`, `WebGPU`
- `IntersectionObserver` used to trigger animation (permitted for lazy-loading only)
- Scroll-linked animation timelines
- Text-splitting of any kind
- Any infinitely repeating animation

**Token discipline**
- No raw duration or easing values in components. Every value is a token.
- Tokens are declared once in the global stylesheet as CSS custom properties and mirrored in one typed TS module for WAAPI. **Both, sourced from one place** — the TS module reads the same constants that generate the CSS.

**Where motion lives**
- One `motion.css` layer holding tokens and shared keyframes.
- Component-local transitions in the component's own styles.
- **No shared animation wrapper component.** A generic `<Reveal>` wrapper is how scattered scroll reveals get built by accident; it is banned by omission.

---

## 10. QA criteria

The build passes only when all of the following hold on the reference device.

**Functional**
- [ ] With JavaScript disabled: every page renders, every link works, every form submits, the Intake is fully readable and every node navigates
- [ ] With `prefers-reduced-motion: reduce`: no information is lost, no route is unreachable, no feedback disappears
- [ ] Keyboard-only: every Intake channel, node, situation chip, nav item, and form control is reachable and operable; focus is always visible
- [ ] The signature plays **once per session** and never on a return navigation within the session
- [ ] Every animation cancels on user input
- [ ] Every animation is cancelled on unmount — verified by a memory profile after 20 route changes

**Measured**
- [ ] LCP ≤ 2.0 s, CLS ≤ 0.02, INP ≤ 150 ms on throttled 4G / mid-tier Android
- [ ] Homepage initial JS ≤ 120 KB gzipped
- [ ] Zero animation-library bytes in the bundle — verified by bundle analysis, not by assertion
- [ ] Intake SVG ≤ 14 KB gzipped
- [ ] 60 fps sustained through the signature, captured in a performance trace
- [ ] No element carries `will-change` at rest
- [ ] Never more than 8 elements animating simultaneously

**Craft** (per `craft-floor.md:13`)
- [ ] Exactly one authored moment exists on the site
- [ ] No section has an entrance animation
- [ ] No two sections share an identical entrance
- [ ] No bounce or elastic easing anywhere
- [ ] No animation exceeds 16 px of translation
- [ ] Removing any surviving animation would lose meaning, not decoration

**Review gates**
- Milestone 3 (motion lab) — every category in §4 demonstrated in isolation and signed off
- Milestone 4 (hero prototype) — the signature reviewed on desktop, mobile, and reduced motion **before any further section is built**
- Milestone 9 — full audit against this document plus `.agents/skills/web-design-guidelines/SKILL.md`

---

## 11. What this document deliberately does not do

- It does not name an animation library. That is [ADR-001](../decisions/ADR-001-via-we-animation-stack.md), and it was written **after** this system, per the Phase 0 prompt's sequencing requirement (§17: "After the motion system is defined, compare…").
- It does not specify per-route motion. That is the [Page Animation Map](VIA-WE_PAGE_ANIMATION_MAP_v1.md).
- It does not describe visual design. That is the [Creative Direction](VIA-WE_CREATIVE_DIRECTION_v1.md).
- It does not permit anything not listed. **The default answer to "can we animate this?" is no.** Additions require a named narrative job, a token, a reduced-motion substitution, and a budget line.
