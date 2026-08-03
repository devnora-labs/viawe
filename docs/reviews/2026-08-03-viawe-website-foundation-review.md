---
status: current
type: website foundation review
authority: 9
created: 2026-08-03
phase: 1
website_implementation_started: true
homepage_composition_started: false
motion_lab_started: false
---

# Via-We Website Foundation — Phase 1 Review

**Milestone:** the Next.js application exists, localhost runs, the canonical service registry is implemented, and the design-token foundation is in place.

**This is not the homepage.** The page at `/` is a structural scaffold that proves the foundation works. Final composition is Phase 4; the motion lab is Phase 5.

---

## 1. Result

| Gate | Result |
|---|---|
| Foundation tests (Python governance suite) | **48/48 passed · 0 failed · 0 skipped** |
| Application tests (Vitest) | **33/33 passed** |
| Lint | **PASS** |
| Typecheck | **PASS** |
| Production build | **PASS** — 2 routes, both prerendered static |
| Frontmatter validation | **PASS** — 32 audited, 0 malformed, 0 unrecognised status |
| Responsive verification | **PASS** — 1440 · 1280 · 768 · 375 · 360 |
| Keyboard verification | **PASS** |
| Reduced motion | **PASS** |
| Contrast | **PASS** — 9 pairings measured |
| Six-service extensibility | **PASS** |
| Real private-value leakage | **0** |
| Unclassified scanner matches | **0** |

---

## 2. Framework and exact versions

| Component | Version | Note |
|---|---|---|
| Next.js | **16.2.12** | App Router, Turbopack |
| React / React DOM | **19.2.8** | |
| TypeScript | **6.0.3** | **Pinned — see §3** |
| Tailwind CSS | **4.3.3** | CSS-first `@theme`, no JS config file |
| ESLint | **9.39.5** | **Pinned — see §3** |
| `eslint-config-next` | **16.2.12** | native flat config, no `FlatCompat` shim |
| PostCSS | 8.5.25 | via `@tailwindcss/postcss` |
| Vitest | 4.1.10 | application unit tests |

**Package manager:** `pnpm@11.5.0`, recorded in `package.json` → `packageManager`.

**Node requirement:** `>=20.9.0` (Next.js's own engine range), recorded in `engines.node`. **Verified on Node v26.3.0.** `engines.pnpm` is `>=11.0.0`.

**Lockfile:** `pnpm-lock.yaml`, lockfileVersion `9.0`, **522 locked packages**. A clean `rm -rf node_modules && pnpm install --frozen-lockfile` succeeds, so the lockfile is valid and was **not regenerated**.

---

## 3. Dependency pins, and why they exist

Both pins were forced by real, reproduced failures. Neither is a preference.

### TypeScript pinned below 7

```
typescript-eslint does not support TS 7.0.
Error: typescript-eslint does not support TS 7.0.
```

Installing the then-latest **TypeScript 7.0.2** made `eslint-config-next/typescript` throw on load, which took the entire lint gate down. Pinned to `^6.0.3` → resolves **6.0.3**.

### ESLint pinned below 10

```
TypeError: Error while loading rule 'react/display-name':
contextOrFilename.getFilename is not a function
```

**No published version of `eslint-plugin-react` supports ESLint 10** — its peer range caps at `^9.7`, and 7.37.5 is the latest release. `eslint-config-next` declares only `eslint: ">=9.0.0"`, which is loose enough to allow an incompatible install. Pinned to `^9.39.5` → resolves **9.39.5**.

> Both carets keep the major fixed (`^6` cannot reach 7; `^9` cannot reach 10). **Do not "upgrade to latest" on either without re-verifying the whole plugin chain.**

### Native lifecycle-script approvals — exactly two

pnpm denies post-install build scripts by default. That default is kept. Two packages are allowed, in `pnpm-workspace.yaml`:

| Package | Version | Why |
|---|---|---|
| `sharp` | 0.34.5 | Native image processing used by Next.js image optimisation |
| `unrs-resolver` | 1.12.2 | Native module resolver used by the ESLint import plugin |

**Neither is a new dependency** — both arrive transitively from already-approved packages. Verified after a clean install: only these two appear as built.

---

## 4. Directory structure

```text
src/
├── app/
│   ├── layout.tsx          root layout, fonts, metadata, landmarks
│   ├── page.tsx            Phase 1 foundation scaffold
│   └── not-found.tsx       404
├── components/layout/
│   ├── SiteHeader.tsx      header shell (text wordmark — no logo asset)
│   ├── SiteFooter.tsx      footer shell (no contact, no legal links)
│   └── SkipLink.tsx        keyboard skip link
├── content/
│   ├── services.ts             CANONICAL REGISTRY
│   ├── services.invariants.ts  executable contract checks
│   ├── navigation.ts           derived from the registry
│   └── site.ts                 confirmed brand facts only
└── styles/
    ├── tokens.css          design tokens
    ├── globals.css         base, focus, layout primitives
    └── CONTRAST.md         measured contrast ratios

tests/unit/services.test.ts   application unit tests
```

The Python governance suite (`scripts/`, `tests/test_*.py`) is untouched and remains an independent gate.

### Routes created — 2

| Route | Rendering |
|---|---|
| `/` | Static (prerendered) |
| `/_not-found` | Static (prerendered) |

**No service routes exist.** `page.enabled` is `false` for all five services because none can publish honestly yet (§8). No `/work`, `/about`, `/contact`, `/services`, legal page, form, API route or motion-lab route was created.

---

## 5. Design-token foundation

All tokens live in `src/styles/tokens.css`. **No component writes a raw hex value.**

| Group | Tokens |
|---|---|
| Brand anchors — **fixed** | `#1B4B77` `#3582AD` `#3B8EC0` `#4AD3F3`, exactly as stated in business truth v2 §5 |
| Neutrals — **derived** | 11-step ramp at the brand hue (210°) and low saturation — a derivation, **not a new brand colour** |
| Surfaces | page · raised · sunken · inverse |
| Text | primary · secondary · muted · on-inverse · on-brand · link |
| Borders | subtle · strong |
| Focus | ring colour, width `3px`, offset `2px` |
| Typography | display · body · utility; 3 display steps, 4 text steps, leading, tracking, weights |
| Display caps | `clamp()` per step — the third argument **is** the documented per-breakpoint ceiling (craft floor §2) |
| Measure | `68ch` body · `46ch` narrow · `80ch` wide — deliberately **not** one uniform measure |
| Space | 9 steps · container max `78rem` · fluid container padding |
| Radius | `2px` / `4px` only — **no large radius token**, so `rounded-2xl`-everywhere is not reachable |
| Elevation | **one system**: `none` / `1` / `2`. Border **or** shadow per surface, never both. No glassmorphism, no `backdrop-filter` |
| Motion | 4 durations, 3 easing **placeholders** — to be **re-derived** from an approved prototype, per craft floor §11.1 |

### State colours are deliberately absent — T7

Success, warning and error tokens are **not defined**. The four guideline colours are all blues in a narrow range; a state palette must be derived and approved, not invented.

---

## 6. Temporary typography state — B2

| Fact | Source |
|---|---|
| Deadhead Bold web licence — **UNKNOWN** | brand asset audit §5 |
| "Website typography may be modernised" — **NOT CONFIRMED** | brand asset audit §5 |
| Roboto — **usable**, open licence | brand asset audit §5 |

**No permanent display typeface has been selected.** Deadhead is not installed, embedded or referenced anywhere.

The display face is a **single swappable token**:

```css
--vw-font-interim-display: var(--vw-font-roboto), system-ui, sans-serif;
--vw-font-display: var(--vw-font-interim-display);   /* ⚠ TEMPORARY — B2 */
```

Roboto is self-hosted via `next/font/google` (no font file is committed, and nothing is copied from `private/`).

> **This is a structural development font. It is not the final premium Via-We typography and must never be presented as such. B2 must be resolved before final visual-design approval.**

When B2 resolves, **one token changes**. No component, section or page changes.

---

## 7. Contrast — measured

WCAG 2.1 relative luminance, computed from the exact token values. Full table in `src/styles/CONTRAST.md`.

| Pairing | Ratio | Required | Result |
|---|---:|---:|---|
| text-primary on page | 17.20:1 | 4.5 | PASS |
| text-secondary on page | 8.73:1 | 4.5 | PASS |
| text-muted on page | 5.89:1 | 4.5 | PASS |
| text-muted on sunken | 5.63:1 | 4.5 | PASS |
| link (brand-deep) on page | 9.05:1 | 4.5 | PASS |
| text-primary on sunken | 16.44:1 | 4.5 | PASS |
| **focus ring on page** | **9.05:1** | 3.0 | PASS |
| on-inverse on inverse | 17.20:1 | 4.5 | PASS |
| brand-core on page | 3.61:1 | 3.0 | PASS |

**`--vw-brand-bright` (`#4AD3F3`) has no approved text pairing** and is recorded as artwork-accent only.

---

## 8. Canonical service registry

`src/content/services.ts` is the single implementation source. **No component, route or future animation declares a service array or the number 5.**

| order | id | title | slug | status |
|---:|---|---|---|---|
| 1 | `digital-marketing-branding` | Digital Marketing & Branding | `digital-marketing-branding` | `active` |
| 2 | `business-setup` | Business Setup | `business-setup` | `active` |
| 3 | `franchise-solutions` | Franchise Solutions | `franchise-solutions` | `active` |
| 4 | `web-app-development` | Web & App Development | `web-app-development` | `active` |
| 5 | `hiring-recruitment` | Hiring & Recruitment | `hiring-recruitment` | `active` |

### Evidence state — honest, not decorative

Every active service carries:

```ts
evidence: { publicReady: false, missing: ["B8", "C1", "C2", "T4"] }
```

**Blocked fields are `null`, never invented:** `shortDescription` · `seo.description` · `primaryCta.label` · `enquiryCategory`. `publishableServices()` returns **0**.

The scaffold renders `[NEEDS COPY: service scope — blocked by B8, C1, C2, T4]` rather than placeholder marketing text.

### Invariants — executable

`src/content/services.invariants.ts` implements the contract §5 checks. Tests assert both that the shipped registry passes **and** that each check actually catches its violation:

- duplicate slug · duplicate order · derived route · non-active-not-rendered
- **invented copy while inputs are missing** → caught
- **`publicReady: true` while `missing[]` is non-empty** → caught

### Six-service extensibility proof — contract §5.1

Adding **one** record with `status: "active"`:

| Consequence | Result |
|---|---|
| All invariants still satisfied | PASS |
| Active count | 5 → **6**, from data alone |
| Navigation | 6 items, last is `/services/sixth-service-probe` |
| Segment geometry | `360 / activeServices.length` → **72° becomes 60°**, never the literal 5 |

**No second edit was required.**

### Prohibited services

`PROHIBITED_V1_SERVICE_TITLES` is enforced in code and asserted in tests: Business Consulting & Growth Strategy · Business Consulting · Via-We Connects · Skill Development · Product Analysis · Product Services · Printing Services · Infrastructure Making · Offline Marketing. **None appears in any status.**

---

## 9. Responsive evidence

Captured in a real browser (Chrome headless via the DevTools Protocol) using **real device metrics** — `Emulation.setDeviceMetricsOverride`, not `--window-size`.

| Viewport | `clientWidth` | `scrollWidth` | Overflow | Services visible | Card overlaps | Clipped text | Nav usable | Images/SVG |
|---|---:|---:|:--:|:--:|---:|---:|:--:|---:|
| 1440 desktop | 1440 | 1440 | **none** | 5/5 | 0 | 0 | yes | **0** |
| 1280 desktop | 1280 | 1280 | **none** | 5/5 | 0 | 0 | yes | **0** |
| 768 tablet | 768 | 768 | **none** | 5/5 | 0 | 0 | yes | **0** |
| **375 mobile** | 375 | 375 | **none** | 5/5 | 0 | 0 | yes | **0** |
| **360 mobile** | 360 | 360 | **none** | 5/5 | 0 | 0 | yes | **0** |
| 375 reduced-motion | 375 | 375 | **none** | 5/5 | 0 | 0 | yes | **0** |

**`scrollWidth === clientWidth` at 375 px and 360 px** — the explicit measurement required.

Every viewport: exactly one `<h1>`, and all four landmarks (`header`, `main`, `footer`, `nav[aria-label]`).

> **A correction worth recording.** An earlier screenshot taken with `--window-size=375,1500` appeared to show clipped, overflowing text. Measurement showed no overflow at all: the clipping was an artifact of Chrome's window-size screenshot mode, not a layout defect. **`--window-size` alone is not valid mobile evidence.** All figures above use device metrics.

---

## 10. Reduced-motion behaviour

Verified under emulated `prefers-reduced-motion: reduce` (`matchMedia(...).matches === true`).

| Token | Normal | Reduced |
|---|---|---|
| `--vw-duration-quick` | `.18s` | **`1ms`** |
| `--vw-duration-base` | `.32s` | **`1ms`** |
| `--vw-duration-slow` | `.56s` | **`1ms`** |
| `--vw-duration-feedback` | `80ms` | **`80ms` — deliberately preserved** |

Decorative durations collapse; **interaction feedback survives**, so focus, hover and press states still acknowledge the user. Craft floor §6 explicitly prohibits a blanket `* { animation-duration: 0.01ms }` kill.

**Layout and content are preserved:** no overflow, 5/5 services, all landmarks, identical composition.

---

## 11. Keyboard-focus evidence

Tested with **real `Tab` key events** dispatched through the DevTools Protocol. Programmatic `.focus()` does not reliably trigger `:focus-visible` and would have produced a false pass.

| Tab | Element | `:focus-visible` | Outline | Offset | On screen |
|---:|---|:--:|---|---|:--:|
| 1 | `a` — "Skip to main content" | **true** | `rgb(27, 75, 119) solid 3px` | `2px` | **yes** |
| 2 | `a` — "VIA-WE Services Pvt. Ltd." | **true** | `rgb(27, 75, 119) solid 3px` | `2px` | yes |

`rgb(27, 75, 119)` is `#1B4B77` — the brand-deep token, measured at **9.05:1** against the page.

The skip link is hidden until focused and **reveals itself on first Tab**, confirmed by screenshot. `:focus:not(:focus-visible)` suppresses the ring for pointer input only, never for keyboard.

---

## 12. Scanner results — every match classified

Whole working tree, **83 files**, all controls proven. Excludes only `.git`, `.agents`, `.claude`, `node_modules`, `.next` and the Git-ignored `private/`.

| Scan | Verdict | Matches | Classification |
|---|---|---:|---|
| email-shaped | **CLEAN** | 0 | — |
| secret/token shapes | **CLEAN** | 0 | — |
| phone-shaped | matches found | 12 | **Synthetic test fixtures** — all in `tests/test_controlled_repo_scan.py` and the validation methodology's usage example. **0 real values.** Enforced by `SyntheticPhoneFixtureTests` |
| private address terms | matches found | 5 | **Active prohibition** — the pattern documentation in the hardening report |
| forbidden 360 naming | matches found | 39 | **Active prohibition / correction / superseded history.** 3 are in `src/content/site.ts` → `PROHIBITED_BRAND_STRINGS`, the list the code forbids |
| tagline comma form | matches found | 5 | **Active prohibition** ×4 + **superseded historical evidence** ×1 (dated K-2 changelog record) |
| rejected artboard SVGs | matches found | 12 | **Rejected-asset evidence** — every match records those files as another brand |
| prohibited V1 services | matches found | 62 | **Active prohibition.** 7 are in application code: 3 in `PROHIBITED_V1_SERVICE_TITLES`, 4 in the test asserting they never activate |

**Active violations: 0. Unclassified: 0. No allowlist was created.**

### Built-output verification

Prohibited strings checked against the **prerendered production HTML**, not the source:

| String | Occurrences in built output |
|---|---:|
| `Via-We 360` | **0** |
| `VIA-WE 360` | **0** |
| `Your Dreams, Our Aim` | **0** |
| `YOUR DREAMS OUR AIM` | present ✅ |
| `VIA-WE Services Pvt. Ltd.` | present ✅ |

### Asset assertions

| Check | Result |
|---|---:|
| Tracked `.svg` / `.ai` / `.eps` / `.cdr` / `.psd` | **0** |
| Files named `*artboard*` anywhere in the worktree | **0** |
| Logo image or vector files | **0** — the only `*logo*` match is the ADR **filename** `ADR-004-logo-led-…` |
| Private files tracked | **0** |
| `node_modules/` or `.next/` tracked | **0** |

---

## 13. Blocker status

| Blocker | Status | Effect on this milestone |
|---|---|---|
| **B1** — editable logo vector, 0 of 7 | **OPEN** | **No logo is rendered.** The header uses the approved wording as text. `0` images/SVGs on every viewport. The raster references stay in `private/` — not committed, not traced |
| **B2** — Deadhead licence + "may typography be modernised" | **UNRESOLVED** | Display face is a temporary swappable token. **Must resolve before final visual-design approval** |
| **T7** — derived working palette | **OPEN** | Brand blues fixed; neutrals derived and provisional. **State colours deferred, not invented** |
| **B8 / C1 / C2** — delivery boundary and per-pillar scope | **OPEN** | All service copy blocked; fields `null` |
| **T4** — lead taxonomy | **OPEN** | `enquiryCategory` and CTA copy blocked |
| **T5** — animation stack | **DEFERRED** | **No animation library installed** |
| **B9 / ADR-004** | **PROPOSED** | Signature motion not built; **two** prototypes required |

---

## 14. Deliberate gaps

Each of these is absent on purpose, not overlooked:

- **The homepage.** `/` is a scaffold and says so on the page.
- **The motion lab and both prototypes** — Phase 5.
- **Service pages** — `page.enabled: false` for all five.
- **`/work`, `/about`, `/contact`, legal pages** — blocked on C3–C8, B4, B6, B5/B11, C11.
- **Forms and any operational integration** — blocked on T3 and T4. No email provider, database, CRM or auth installed.
- **GSAP, Lenis, Three.js, React Three Fiber, any component library, CMS** — none installed.
- **Contact details, office location, leadership** — recorded in `site.ts` as explicit `null` absences so they cannot be quietly filled in.
- **Proof of any kind** — no client, logo, metric, testimonial or case study.
- **State colours, dark/reversed system** — T7.
- **`metadataBase` / canonical URLs** — the production domain is unconfirmed (B4/T6); a guessed origin would poison every canonical URL. `robots` is `index: false` until launch.
- **Screenshot evidence files** — captured and reviewed, but **not committed**: the repository has no approved evidence path.

---

## 15. Exact next phase

**Phase 2 — manager browser review, then the static responsive homepage composition.**

Before that composition begins:

1. **Resolve B2.** It is the single highest-leverage unblock — no visual design can be signed off while the display face is temporary.
2. **Derive and approve the working palette (T7)**, including state colours, with contrast measured.
3. **Confirm the final route set (T1)** so only routes with real content are built.
4. Run the live reference teardown and produce the homepage wireframe and two motion storyboards.

**Do not begin the homepage or the motion lab until the above are reviewed.**
