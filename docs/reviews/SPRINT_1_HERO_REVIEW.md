# Sprint 1 Review — Hero Experience

**Scope shipped:** Hero (Arrive I + II) and navigation-adjacent motion tokens. No other section modified.
**Date:** 6 August 2026
**Verification:** production build ✓ · eslint ✓ · `tsc --noEmit` ✓ · tests: none configured in this repo (visual passes below are the verification layer) · zero page errors · no mobile horizontal overflow · screenshots at 1600×900, 390×844, and `prefers-reduced-motion`.

---

## What changed and why (against the approved blueprint)

| Change | Blueprint source |
|---|---|
| **Overture at full voice** — arcs rebuilt: 2.5px gradient strokes; crossing moved to the clear upper-right quadrant (1180, 260), diagonal to the type mass, echoing the mark's anatomy (loop high, tails sweeping down-left); mesh texture resolves into the embrace curve at the crossing via a gradient-masked pattern band; node becomes a three-ring bloom event (core → ring → outward echo) | 01 Arrive I · 04 Overture tier · 09 (mesh = connection made material) |
| **Composed timeline** — curves 0.1s/0.3s (1.5s draws) → mesh 1.0s → node 1.35–2.3s → eyebrow 0.95s and headline beats 1.05/1.13/1.21s riding the sequence out (~2.4s total); plays once, never replays on scroll-back; no loader exists | 04 ("the overture is the loading experience") |
| **Three-beat headline** — "We build," / "brand & grow" / "businesses."; `.hero` scale raised (cap 26vh) now that three lines fill the fold | 01 · 06 (hand-broken rag) |
| **Arrive II human frame** — night-megacity reel removed; new verified `office` slot (person mid-conversation at a laptop, warm, candid, centre-framed so the 4/5 crop holds); `Reel` component + Pexels clip deleted rather than left as dead code | 01 ("what disappears") · 05 interim standard |
| **Motion-token compliance (shared primitives)** — `Words` scrub now completes by 68% viewport with a 0.62 opacity floor (~4.6:1 on paper — AA at rest); link underline tightened to micro tier (0.3s); quiet Button gains an invisible full-height tap area (padding + negative margin) | 04 §Word-scrub, §Micro · Phase 2 findings 5.2/13.2 |

**Navigation:** audited against the blueprint rather than rewritten — pill hand-off (0.5s), menu choreography (0.95s/0.7s, 60ms stagger), Escape/focus behavior already matched spec from Phase 2. Only the micro-tier link timing needed correcting. Current-chapter awareness and the post-Road pill affordance are deliberately deferred: their triggers (instrumented chapters, the Road's exit) don't exist until Sprints 5–7.

## Self-review against the contracts (08)

**Arrive I:** eyebrow ✓ · three beats ✓ · signature at full voice ✓ · no CTA ✓ · no photograph ✓ · twelve words total (limit 18) ✓ · no loader ✓. First-five-seconds check: the mid-overture frame is two curves converging on empty paper — stillness, then the crossing resolves and the headline rises. It reads calm and deliberate, not busy.
**Arrive II:** scope sentence ✓ · primary + quiet exits ✓ · one human frame ✓ · night plate gone ✓ · no second paragraph ✓.
**Motion language:** every element speaks a verb — curves DRAW, mesh/node JOIN, chrome HANDS OFF; nothing loops or pulses idle; all compositor-only; interruptible; `data-motion` noscript coverage intact.
**Reduced motion:** verified by screenshot — complete static composition (curves drawn, mesh present, node held, text whole). The story ships without the travel.
**Identity test (09):** could another agency ship this hero unchanged? No — the crossing geometry, mesh texture, and node event are the mark's own anatomy. The generic-agency tells (dark hero, stock skyline, gradient wash) are gone.

## Issues found during the sprint (and their dispositions)

1. **First composition swallowed the node** — at three-beat scale, "brand & grow" ran through the original crossing (1000, 470). Caught in screenshot review; crossing relocated to the clear upper-right quadrant. This is why the sprint's screenshot gate exists.
2. **First interim frame failed its crop** — the initial team photo centre-cropped to a chandelier in the 4/5 container. Replaced with a centre-framed subject. Rule added to the slot comment: portrait crops need centre-weighted subjects.

## Known deviations & risks (open, honest)

- **Headline start capped at 1.05s** (blueprint sketched ~1.5s "riding the last second") — a deliberate LCP protection; the largest paint completes ≈2.2s worst-case instead of ≈2.7s. The overture still reads as one composed sequence.
- **Mobile renders four beats** — "brand & grow" wraps at 390px inside its mask (reveal still clean). Acceptable rag; revisit only if the shoot's art direction changes the mobile hero.
- **The interim frame is one person, not a team** — interim standard until the Vijayawada shoot; the slot swap is zero-code.
- **Shared-primitive edits ripple outside the hero** (Words floor/window, link timing, quiet tap area) — all strictly legibility/compliance-positive, affecting other sections only by making them meet the same spec early.
- **Hover-video mechanic removed with `Reel`** — returns with real footage per the photography system; keeping it dead violated the codebase rules.

## Sprint verdict

Arrive I and II now match the blueprint's storyboard, emotional beats (stillness → recognition), and motion grammar, with the signature finally at the volume the brand deserves. **Sprint 1 complete. Stopping here — Sprint 2 not started, per instruction.**
