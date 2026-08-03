---
status: current
type: website implementation plan
authority: 5
created: 2026-08-03
approved_on: 2026-08-03
website_implementation_started: false
---

# Via-We Website Implementation Plan

**Status: APPROVED by the project manager, 2026-08-03, with the conditions in §0.1.**

**No application code exists.** Implementation begins only after PR #4 merges — see §0.

## 0.1 Manager decisions, binding

| # | Decision | Effect |
|---:|---|---|
| 1 | **Build two signature-motion prototypes** — Variant A orbital, Variant B convergent. **Do not select the winner in advance** | §7 |
| 2 | **Do not install GSAP at initialization.** Start on CSS, SVG and the Web Animations API. If insufficient, **document the exact limitation and propose ADR-005** before installing | §1, §7 |
| 3 | **Do not select a permanent display typeface.** One swappable CSS token with a clearly marked temporary fallback. **Roboto is for structural development only and must never be represented as final premium Via-We typography.** **B2 must be resolved before final visual-design approval** | §4.1 |
| 4 | **Forms remain validated frontend UI with a stubbed submit handler** until **T3** defines the destination and **T4** defines the lead taxonomy. **No email provider, database or CRM installed before those decisions** | §9 |
| 5 | **Create no unsupported routes or content** for work/case studies, public contact details, legal pages, unverified client claims, or unapproved leadership information | §6, §9 |

**Ordering set by the manager:** add the handoff and this plan to PR #4 → review and merge PR #4 → create the implementation branch → initialize Next.js → run localhost → static foundation → two motion prototypes.

This plan derives from [VIA-WE_MASTER_PROJECT_CONTEXT_AND_BUILD_HANDOFF.md](VIA-WE_MASTER_PROJECT_CONTEXT_AND_BUILD_HANDOFF.md); read its ingestion reconciliation note first.

---

## 0. Repository state — verified 2026-08-03, not assumed

The handoff instructs the first implementation agent to confirm real Git state rather than trust the document. Done. **One of the four preconditions fails.**

| # | Precondition | Verified result |
|---|---|---|
| 1 | Pre-build hardening **merged** | ❌ **FALSE — PR #4 is OPEN, not merged** |
| 2 | `main` clean and synchronized | ✅ `main` = `origin/main` = `bf5555b`, clean |
| 3 | No website application exists | ✅ **Confirmed** — no `package.json`, lockfile, `src/`, `app/`, `node_modules`, framework config |
| 4 | Governance / craft-floor / registry documents present | ⚠️ **On the feature branch only — not on `main`** |

```
main                          bf5555b  Merge pull request #3 …
chore/viawe-prebuild-hardening 8b2c5bd  chore: harden Via-We pre-build governance   ← HEAD, open as PR #4
```

**What `main` is missing until #4 merges:**

| Document | On `main` | On branch |
|---|:--:|:--:|
| `docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md` | **no** | yes |
| `docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md` | **no** | yes |
| `docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md` | **no** | yes |
| `scripts/audit-document-frontmatter.py` · `controlled_repo_scan.py` | **no** | yes |

**Consequence.** Phase 0 of this plan is *merge PR #4*. Branching an implementation off today's `main` would produce a build with no craft floor and no registry contract — the two documents that govern every decision after it.

**Resolved 2026-08-03.** The master handoff was located in `~/Downloads` (three byte-identical copies, `sha256 e7087bde…`) and copied verbatim to `docs/planning/VIA-WE_MASTER_PROJECT_CONTEXT_AND_BUILD_HANDOFF.md`. Both it and this plan are now part of the **same cohesive foundation PR #4** — not a separate small PR.

### Toolchain present

`node v26.3.0` · `npm 11.16.0` · `pnpm 11.5.0` · `bun 1.3.14` · `git 2.50.1` · `gh 2.96.0` · `python3 3.9.6`

---

## 1. Next.js stack and package manager

### Recommended

| Choice | Value | Why |
|---|---|---|
| **Package manager** | **pnpm** | Already installed (11.5.0). Strict node_modules layout catches phantom dependencies — which matters on a project whose governance forbids reflexive installs |
| **Framework** | **Next.js, App Router** | Per handoff §20 and truth file direction. Server components by default keeps client JS small, which the performance budget needs |
| **Language** | **TypeScript, `strict: true`** | The registry invariants are only enforceable if the types are real |
| **Styling** | **Tailwind CSS + CSS custom properties** | Tokens live in CSS variables so the display face and palette are swappable when B2 and T7 resolve. Tailwind consumes the variables, never raw hex |
| **Testing** | **Vitest** + **Playwright** | Vitest for registry invariants; Playwright for reduced-motion, keyboard and 360 px checks that unit tests cannot make |
| **Node** | v26.3.0 present | ⚠️ **Verify Next.js supports Node 26 at init time.** If not, pin via `.nvmrc` to the newest supported LTS. Do not assume |

**Version numbers are deliberately not fixed here.** Resolve them at init against the live registry and record what was installed. Writing a version into a plan written before install is how lockfiles and documents drift apart.

### Dependencies at Phase 2 — the complete list

```
next  react  react-dom  typescript  @types/*  tailwindcss  postcss  autoprefixer
eslint  eslint-config-next  prettier  vitest  @playwright/test
```

**Nothing else.** Per handoff §20.1 the following are **not** installed until a written requirement justifies each one: GSAP · ScrollTrigger · Lenis · Three.js · React Three Fiber · any component library · any CMS · any database · auth · email provider.

> **T5 — the animation stack is a deferred decision, not a default.** ADR-004 §6 states the stack choice is re-opened and belongs to a future ADR *after* the creative gate. **GSAP is therefore not a Phase-2 dependency.** The motion lab starts on CSS, SVG and the Web Animations API. If a prototype proves a timeline that those cannot express, that evidence becomes ADR-005 and GSAP is installed then — with a reason on the record.

---

## 2. Project directory structure

```text
src/
├── app/
│   ├── layout.tsx                 # root layout, fonts, metadata, skip link
│   ├── page.tsx                   # homepage
│   ├── services/
│   │   ├── page.tsx               # index, derived from registry
│   │   └── [slug]/page.tsx        # generateStaticParams from activeServices
│   ├── about/ work/ contact/
│   ├── privacy/ terms/
│   ├── motion-lab/                # noindex, dev/review only
│   │   └── connected-360/
│   │       ├── page.tsx           # prototype switcher
│   │       ├── variant-a/
│   │       └── variant-b/
│   ├── sitemap.ts  robots.ts  not-found.tsx  error.tsx
├── components/
│   ├── layout/  navigation/  sections/  motion/  forms/  ui/
├── content/
│   ├── services.ts                # THE canonical registry
│   ├── services.invariants.ts     # executable §5 checks
│   ├── navigation.ts              # derived from services
│   └── site.ts                    # name, tagline, metadata defaults
├── lib/           # utilities, validation schemas, motion helpers
├── styles/        # tokens.css, globals.css
└── types/
tests/
├── unit/          # existing Python suite stays where it is
└── e2e/
```

**Rules carried from handoff §21:** content separate from presentation · server components by default · `"use client"` only where interaction demands it · motion orchestration centralised in `components/motion/` · every animation context cleaned up on unmount · **no component ever declares a service array**.

**The existing `scripts/` and `tests/*.py` stay exactly where they are.** The Python auditor and scanner are repository tooling, not application code, and continue to run in CI.

---

## 3. Localhost setup

Localhost comes up in **Phase 2**, before any design work — per handoff §33.

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Scripts defined at init:

| Script | Purpose |
|---|---|
| `dev` | local server |
| `build` / `start` | production build and serve |
| `typecheck` | `tsc --noEmit` |
| `lint` | ESLint |
| `test` | Vitest |
| `test:e2e` | Playwright |
| `verify` | `typecheck && lint && test && build` — the gate every phase must pass |

**Every phase ends with a browser review, not a description.** Exact command, exact route, desktop screenshot, 360 px screenshot, reduced-motion screenshot. Per handoff §33, no phase advances on prose alone.

---

## 4. Design tokens and typography

### 4.1 The typography constraint is real and it blocks a decision

| Fact | Source |
|---|---|
| Deadhead Bold web licence — **UNKNOWN** | Brand asset audit §5, blocker **B2** |
| "Website typography may be modernised" — **NOT CONFIRMED** | Brand asset audit §5 |
| Roboto Medium — **usable**, open licence | Brand asset audit §5 |

> **Until B2 resolves, no display typeface may be selected.** Choosing one would be an agent inventing brand direction — precisely what `AGENTS.md` §9 forbids. Picking a fashionable display face because premium sites use it is the exact failure mode the craft floor §2 and §8 exist to prevent.

**How we build anyway, without pre-empting Vijay.** The display face is a **single swappable token**:

```css
--vw-font-display: var(--vw-font-interim-display);   /* ⚠ INTERIM — [NEEDS OWNER DECISION: B2] */
--vw-font-body:    /* Roboto — approved, open licence */;
--vw-font-utility: /* monospace, data/labels only */;
```

Interim display = **Roboto**, because it is the only face currently approved for web use. **This will look deliberately under-designed, and that is honest, not an oversight.** One token changes when B2 resolves; no component changes.

**Resolving B2 is the single highest-leverage unblock in the whole project.** Until it lands, the type scale is provisional and no visual design can be signed off.

Type scale: three roles only (display / body / utility). Body at **60–75 characters**. Display capped **per breakpoint** via responsive tokens, never one hardcoded desktop value — craft floor §1, §2.

### 4.2 Colour tokens

Brand anchors, fixed and not to be replaced (craft floor §9):

```
#1B4B77   #3582AD   #3B8EC0   #4AD3F3
```

**T7 is open:** all four are blues in a narrow range. A working palette must *derive* neutrals, surfaces, text, borders, focus and state colours from these, contrast-verified — **without inventing a new brand colour.**

Token layers: `--vw-brand-*` (fixed) → `--vw-surface/text/border/state-*` (derived) → component usage. **No component ever writes a raw hex.**

Every pairing gets a recorded contrast ratio. Not "looks fine" — a number in a table.

### 4.3 Gradient rule, enforced in code

Craft floor §4: no CSS gradient text, no synthetic gradient headlines, no newly designed gradient wordmark. **The official logo artwork is exempt and renders unchanged from the supplied asset.** A lint rule should flag `background-clip: text`.

---

## 5. Canonical five-service registry

Implemented in **Phase 3**, before any page consumes a service name.

`src/content/services.ts` — fields locked by registry contract §2.1:

| order | id | title | slug | status |
|---:|---|---|---|---|
| 1 | `digital-marketing-branding` | Digital Marketing & Branding | `digital-marketing-branding` | `active` |
| 2 | `business-setup` | Business Setup | `business-setup` | `active` |
| 3 | `franchise-solutions` | Franchise Solutions | `franchise-solutions` | `active` |
| 4 | `web-app-development` | Web & App Development | `web-app-development` | `active` |
| 5 | `hiring-recruitment` | Hiring & Recruitment | `hiring-recruitment` | `active` |

**Honest initial state**, per contract §6.3 — structure locked, content gaps machine-readable:

```ts
evidence: { publicReady: false, missing: ["B8", "C1", "C2", "T4"] }
```

**Gated fields left empty and marked, never invented:** `shortDescription` · `seo.description` · `primaryCta.label` · `enquiryCategory`. They render as `[NEEDS COPY: …]` in development and **prevent the route from publishing** in production.

Exports: `services` · `activeServices` · `getServiceById` · `getServiceBySlug`.

### Invariants — executable, not conventional

Vitest asserts all thirteen contract §5 invariants: stable unique IDs · unique slugs · unique order · only `active` in public nav · routes derived · sitemap derived · **no duplicate service array anywhere in `src/`** · **no hardcoded service count in animation logic** · geometry from `activeServices.length` · `future`/`disabled` excluded from rendering · one `enquiryCategory` per active service · one readiness state per service.

**The acceptance test, automated:** a test fixture adds a sixth `active` record and asserts navigation, segment count, routes, sitemap and enquiry vocabulary all follow **with zero other edits**. If it needs a second edit, the build is wrong.

A grep-based check fails the build if the literal `5` appears in motion geometry, or if a service title string appears anywhere outside `services.ts`.

---

## 6. Homepage structure

Built **static and complete in Phase 4, before any signature animation exists** — handoff §12. The page must communicate with motion switched off.

| # | Section | Job | Content status |
|---:|---|---|---|
| 1 | Hero | What Via-We is, in one read. Tagline `YOUR DREAMS OUR AIM` — no comma. Primary CTA reachable immediately | Positioning pattern `[PROPOSED]` — needs approval |
| 2 | The connected system | The 360 idea in **words and layout**, so it survives without animation | `[NEEDS COPY]` |
| 3 | Five services | From `activeServices`. **A set, not a sequence — not numbered** (craft floor §7) | Titles ready; descriptions gated on B8/C1/C2 |
| 4 | How Via-We works | Process. **This one *is* a sequence and may be numbered** | `[NEEDS COPY]` |
| 5 | Proof | Real work only | **BLOCKED** — C3–C8. Section omitted entirely rather than faked |
| 6 | Final CTA | Single consistent conversion action | Label gated on T4 |

**Prohibited by the craft floor and not to be reintroduced:** centred hero with two adjacent CTA buttons · three identical feature cards · `rounded-2xl` everywhere · fabricated trust strip · avatar-and-five-star testimonials · decorative `01/02/03` on the service set · identical container + reveal on every section · hero-metric template · logo walls · homepage FAQ accordion as a trust device.

**Section 5 ships empty or not at all.** An invented case study is worse than a shorter page.

---

## 7. `/motion-lab/connected-360` prototype

### 7.1 ADR-004 requires **two** prototypes, not one

The handoff asks for one prototype route. **ADR-004 §4 — an accepted gate — requires two hero prototypes, and the governance policy §11 creative gate repeats it.** This plan builds **two**, because one cannot pass the gate.

```
/motion-lab/connected-360/variant-a     Orbital — segments complete a 360° revolution around the mark
/motion-lab/connected-360/variant-b     Convergent — separate paths converge into the mark, then radiate as services
```

Both are `noindex, nofollow`, excluded from the sitemap, and removed or protected before production.

### 7.2 The B1 constraint

**B1 is OPEN — 0 of 7 production vectors exist.** The symbol PNG has a baked background and no usable alpha.

- **Do not trace the raster and call it the logo.** Governance §7, ADR-004 §2.
- Prototypes use **temporary authored geometry**, visibly labelled `TEMPORARY GEOMETRY — NOT THE OFFICIAL LOGO` on screen.
- Architecture separates **logo-formation layer** from **orbital/segment layer**, so when approved SVGs arrive only the first layer is replaced and the validated motion survives.

### 7.3 What the lab must prove

Segment count from `activeServices.length` · orbit geometry at 360 px · timing and easing · text synchronisation · scroll behaviour without scroll-jacking · non-scroll playback · mobile fallback · reduced motion · CPU/GPU cost on mid-tier Android over throttled 4G · resize cleanup · unmount cleanup · **the six-service test — a sixth segment activating from data alone.**

### 7.4 Gate to leave the lab

Per ADR-004 §4, all must pass: two prototypes exist · one selected · desktop · **mobile at 360 px, not 390** · reduced-motion version losing no information · ten-second clarity test with a first-time viewer · performance on mid-tier Android over throttled 4G · six-service test · **Vijay's approval**.

**Until this gate passes, ADR-004 stays `proposed` and no signature motion touches the homepage.**

---

## 8. Mobile and reduced-motion behaviour

Both are designed in Phase 4 and Phase 5 — **not retrofitted**. Handoff §36 rules 13 and 14.

### Mobile

Breakpoints **360 · 375 · 768 · desktop · large · landscape mobile**. 360 px is the design target, not the exception.

Reduce scene complexity · no long pinned sequences on touch · shorter travel · services stay readable · CTA always reachable · never require cursor precision · **the user never waits for animation to act**.

### Reduced motion

`prefers-reduced-motion: reduce` gets an **authored composition**, not a disabled one.

- **Never** a blanket `* { animation-duration: 0.01ms }` — craft floor §6 forbids it; it destroys useful feedback.
- Remove non-essential movement, pinning and loops.
- **Preserve the connected-service idea as a stable composition** — the meaning survives without the motion.
- Content order, all CTAs and every piece of information preserved.

Playwright asserts both, per route, in CI.

---

## 9. Remaining pages and forms

### Routes — Phase 7

| Route | Status | Gate |
|---|---|---|
| `/services` · `/services/[slug]` ×5 | Structure ready | Copy gated on B8, C1, C2 |
| `/about` | Partly blocked | B4 legal details · **B6 leadership — Batch 01 supplied a name and explicitly NO designation** · K-4 |
| `/work` | **BLOCKED** | C3–C8. **Do not create the route until real approved content exists** |
| `/contact` | **BLOCKED for display** | **B5/B11 — values exist privately; public display is UNAPPROVED.** No phone, email or WhatsApp renders until approved |
| `/privacy` · `/terms` | **BLOCKED** | C11 — needs legal input, including the mandatory franchise disclaimer |

**T1 — the final route set is unconfirmed.** `/careers`, `/insights`, `/industries`, `/locations` are **not** in Version 1 without an owner decision. Handoff §9: a route exists only with a real audience, purpose, content, conversion role and evidence.

### Forms — Phase 7, and genuinely blocked

**T4 (lead taxonomy) and T3 (CRM / form destination) are unresolved.** Neither the categories nor the destination exist.

**Therefore forms are built as validated UI against a stubbed submit handler, and not wired to any destination.** Choosing an email provider or database now would be inventing an operational workflow — handoff §26 explicitly forbids it.

Every form ships with: server-side validation (shared schema) · spam protection · rate limiting · **consent recording (C12 wording pending)** · accessible inline errors · loading, success and failure states · **no secrets reaching the client**.

Employer hiring requests and candidate applications are **two different journeys** and must not share one vague form — handoff §7.3. Whether candidate application is in V1 is an open owner decision.

---

## 10. Accessibility, SEO, testing and performance

### Accessibility — a gate, not a phase

Semantic landmarks · correct heading order · full keyboard navigation · visible focus · skip link · accessible mobile menu · labelled forms with clear errors · verified contrast · meaningful link text · touch targets · reduced motion · sensible screen-reader order · **no meaning conveyed by motion or colour alone** · **animation never blocks content**.

Automated axe checks per route in Playwright, plus manual keyboard and screen-reader passes. Target: **zero high-severity defects at launch.**

### SEO

Unique titles and descriptions from the registry · canonical URLs · **sitemap and robots derived from registry data** · Open Graph · structured data **only where evidence permits** · semantic headings · crawlable content without JS · optimised images.

**Not published until verified:** office data · leadership titles · legal name · contact channels · service regions · client claims. **LocalBusiness structured data is blocked on B4, B5 and B7.**

### Testing

| Layer | Tool | Covers |
|---|---|---|
| Registry invariants | Vitest | All 13 contract invariants + six-service acceptance test |
| Components | Vitest + Testing Library | Rendering, gated-content behaviour |
| E2E | Playwright | Keyboard, reduced motion, 360 px, forms, 404 |
| Accessibility | axe via Playwright | Per route |
| Repository governance | **existing Python suite — 48 tests** | Frontmatter auditing, controlled scans |
| Privacy | `controlled_repo_scan.py --staged-only` | **Pre-commit gate on every build PR** |

The Python suite and the staged-only scan gate carry forward unchanged. They are the reason no PII has reached a push.

### Performance

Measured on **mid-tier Android over throttled 4G** — ADR-004 §5 — not on this Mac.

Track LCP · CLS · INP · JS bundle size · font loading · image weight · frame stability · memory · thermal load · hydration cost. Animate **transform and opacity**; no layout-triggering animation, no permanent `will-change`, no off-screen loops.

**Budget is set in Phase 1 and measured every phase from Phase 4 onward.** A budget introduced at QA is a budget that gets negotiated away.

---

## 11. Coding phases and browser-verification gates

Order fixed as instructed: **foundation → localhost → registry and tokens → static homepage → signature prototype → full pages → animation integration → QA and launch.**

| Phase | Delivers | Browser gate | Owner approval |
|---|---|---|:--:|
| **0 — Merge foundation** | PR #4 merged, `main` synced, implementation branch `feat/viawe-website-foundation` created | none — Git verification only | **required** |
| **1 — Design strategy** | Live reference teardown (dated), type candidates, derived palette with contrast table, grid, IA, performance budget, motion tokens, homepage wireframe, two storyboards | none — no production UI | **required: IA + direction** |
| **2 — App foundation + localhost** | Next.js, TS strict, Tailwind, tokens, scripts, test harness, CI | `pnpm dev` → `/` renders · desktop + 360 px screenshots | — |
| **3 — Registry and tokens** | `services.ts`, invariants, navigation and metadata derived, token layer | `/` shows registry-driven nav · six-service test passes in CI | — |
| **4 — Static responsive homepage** | Full homepage, **no signature animation** | `/` at 360/375/768/desktop · reduced-motion · page communicates with JS disabled | **required: static homepage** |
| **5 — Motion lab** | **Two** prototypes, temporary geometry, mobile + reduced-motion variants, perf measurements | `/motion-lab/connected-360/variant-a` and `variant-b` · 360 px · reduced motion · throttled Android numbers | **required: Vijay selects one — ADR-004 gate** |
| **6 — Homepage integration** | Selected motion integrated, static fallback preserved | `/` with and without motion · LCP/INP/CLS recorded · CTA never blocked | **required** |
| **7 — Full pages and forms** | Services, about, legal; forms validated against a stub | Every route at 360 px · keyboard · axe clean | **required: content** |
| **8 — Secondary motion** | Restrained supporting interactions | Full-site pass; one signature system still dominant | — |
| **9 — QA and launch** | A11y, perf, SEO, device QA, analytics, deploy, rollback | Production build; full device matrix | **required: launch** |

**Every gate report uses the handoff §34 format** — changed files, commands, routes, what to look for, mobile result, reduced-motion result, measured performance, known gaps, next gate.

**PR strategy** — handoff §31, milestone-sized, not per-edit: Build PR 1 = Phases 2–3 · PR 2 = Phases 4–5 · PR 3 = Phases 6–7 · PR 4 = Phases 8–9.

---

## 12. Blockers that will stop this plan, ranked

| # | Blocker | Stops | Owner |
|---:|---|---|---|
| 1 | **B2 — Deadhead licence + "may typography be modernised"** | **All visual design.** No display face can be chosen. Highest leverage | Vijay |
| 2 | **B1 — editable logo vector, 0 of 7** | Final logo-formation layer. Prototypes proceed on temporary geometry | Vijay |
| 3 | **B8 / C1 / C2 — scope and delivery boundary** | All service copy; `/services/[slug]` cannot publish | Vijay |
| 4 | **B5 / B11 — contact publication approval** | `/contact`, footer, structured data | Vijay |
| 5 | **T4 / T3 — lead taxonomy and destination** | Form wiring, enquiry categories, analytics | Vamshi + Vijay |
| 6 | **T7 — derived palette** | Token layer beyond the four blues | Vamshi + Vijay |
| 7 | **C11 / C12 — legal content and consent wording** | `/privacy`, `/terms`, every form | Vijay + legal |
| 8 | **B9 — ADR-004 approval** | Phase 6. ADR-004 is still `proposed` | Vijay |
| 9 | **T1 — final route set** | Which routes exist at all | Vamshi + Vijay |
| 10 | **C3–C8 — proof material** | `/work` and homepage section 5 | Vijay |

**Phases 0–5 can proceed with only B2 resolved.** Phases 6–9 need most of the rest.

---

## 13. What this plan will not do

- Initialise Next.js before approval
- Install any dependency outside the Phase-2 list
- Adopt GSAP, Lenis, Three.js or WebGL without an ADR proving the need
- Choose a display typeface while B2 is unresolved
- Invent a palette beyond the four brand blues
- Trace the raster logo or alter the official artwork
- Hardcode five services into any geometry or timeline
- Create `/work`, `/contact` display values, or legal pages without approved content
- Write a case study, testimonial, metric, award, partnership or leadership title
- Build one prototype where ADR-004 requires two
- Ship reduced motion as a blanket animation kill
- Publish the motion lab
