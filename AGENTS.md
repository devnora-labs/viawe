# AGENTS — Viawe Website Build

## Mission

We are building a **premium agency website for VIA-WE** — a cinematic, editorial, motion-led site in the spirit of the ExoApe inspiration: smooth parallel animations, great parallax effects, smooth scrolling, masked reveals, and one pinned narrative chapter. It must feel expensive, clear, and confident.

## Scope

**One landing page.** The first release is a single scrolling homepage plus its footer contact details. Do not build route hubs, service detail pages, `/about`, `/connects`, or a `[slug]` template until this page is approved. The IA in `PLAN.md` describes where the site goes later, not what to build now.

The page is six sections:

1. Hero
2. The Two Routes — Business Growth / Everyday Services
3. One Partner, Moving Parts
4. The Pathway — the single dark pinned chapter, **five stages**
5. How We Work
6. Closing CTA and footer

## Sources of Truth

- **BRAND.md** — brand identity, name, origin, positioning, voice, audiences, proof points, contact details. Use this for all company/brand information.
- **PRODUCT.md** — the service catalogue, offer architecture, sales motion, CTAs, pricing anchors. Use this for all product/service information.
- **DESIGN.md** — the visual system (palette, typography, layout), motion system, and the full homepage narrative.
- **PLAN.md** — the implementation plan, stack choices, project structure, and quality gates.

**Rules:**
- Only use BRAND.md and PRODUCT.md for company and product info. Never invent company facts, statistics, testimonials, partner logos, or guarantees.
- Use site-reported proof points exactly as documented there (e.g. 500 clients / 800 projects / 1100 connections) and never upgrade them into audited claims.
- Avoid the high-risk language the source docs flag: "guaranteed success", "zero loss", "guaranteed investment protection".

## Build Requirements

1. **Premium agency feel** — match the quality bar of the ExoApe inspiration: large confident typography, full-viewport image moments, deliberate negative space, sparse editorial layout, carefully paced scroll narrative. **ExoApe is the only visual reference.** `inspiration/Instrument.png` and `inspiration/Kree4.png` are not visual references — Kree8 contributes only its customer-centric copy voice, which should inform how section copy is written.
2. **Smooth parallel animation** — great parallax effects, smooth scroll (Lenis, desktop only), masked type reveals, image parallax that feels physical, one pinned dark pathway chapter. No animation purely for busy-ness. **Motion is built from Phase 1**, not bolted on afterwards — sections are composed with the motion primitives already in place.
3. **Clear design** — few messages per viewport, generous whitespace, asymmetric editorial composition, vermilion as a micro-accent only, no gradient/generic SaaS styling. Movement comes from composition and parallax depth — there is no drawn "Via Line" or scroll-following graphic.
4. **Photography and logos** — use high-quality stock photography that looks great for now. Real photography and client logos replace them later. Never fake client logos.
5. **It must work** — production build succeeds, no runtime errors, images have explicit aspect ratios, content is readable with JavaScript disabled except for enhancement-only interactions.

## Code Style

The codebase must stay small enough to read in one sitting. These are hard rules, not preferences.

- **Minimal.** Write the least code that does the job well. No dead code, no commented-out blocks, no speculative abstractions, no options nobody asked for. If a component takes a prop that only ever has one value, delete the prop.
- **Short but meaningful names.** `Hero`, `Pathway`, `stages`, `lane`, `useParallax`. Not `HeroSectionComponent`, `businessGrowthPathwayStagesArray`, `handleTheScrollEventForParallax`. A name should be the shortest thing that still says what it is — brevity never at the cost of meaning.
- **File names match what they export.** One main export per file, named the same as the file: `Hero.tsx` exports `Hero`. Components `PascalCase`, everything else `camelCase`, folders lowercase.
- **Flat and obvious.** Prefer a slightly longer component over a clever abstraction split across three files. Someone new should be able to open a section file and understand it without chasing imports.
- **No comments that restate the code.** Comment only genuinely non-obvious *why* — a browser quirk, a deliberate ordering constraint. The code says what.
- **Consistent structure.** Every section component follows the same shape, so reading the second one is free once you have read the first.

## Engineering Standards

- **Clean and minimal** — small, focused components; no dead code; no speculative abstractions.
- **Easy to understand** — clear names, consistent structure, server components by default with animation isolated in small client components.
- **Performant** — animate only `transform` and `opacity`; one shared easing curve `cubic-bezier(0.16, 1, 0.3, 1)`; no scroll-driven React re-renders; LCP under 2.5s; CLS under 0.1.
- **Secure** — no user input is ever interpolated into markup, no secrets in client code, validate at system boundaries only.
- **DRY** — shared content layer (`content/`) for navigation, services, and site data so strings are never hard-coded across components; shared motion primitives; shared button/label/typography components.
- **Accessible** — visible keyboard focus, semantic landmarks, `prefers-reduced-motion` removes smooth scroll, parallax, and scrubbed animation.
- **Desktop-first** — desktop is the target for now; tablet/mobile degrade gracefully to a single-column story with no scroll pinning.

## Design Tokens (from DESIGN.md)

- `--ink` `#101317` · `--paper` `#F3F2EE` · `--paper-deep` `#E5E3DC` · `--stone` `#8A8983` · `--signal` `#DF4A32` · `--signal-dark` `#B83725` · `--cloud` `#FAF9F5`
- **One typeface: Instrument Sans.** Single variable family (OFL, via `next/font/google`) for display, body, navigation, and labels. Hierarchy comes from scale, never from a second family. Body copy runs large — never default to 16px.
- **Vermilion is a micro-accent**, not a theme: primary CTA fill, focus ring, one active state. Never a background, heading, large fill, or decorative shape.
