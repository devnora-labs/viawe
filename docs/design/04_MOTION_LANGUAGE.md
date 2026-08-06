# 04 · Motion Language — The Line That Doesn't Drop

**Motion is the brand's argument made kinetic.** The mark shows two curves that travel, meet, and become one system. Every movement on the site speaks that sentence or stays still.

## The grammar

The line has five verbs. Every motion on the page is one of them:

| Verb | Meaning | Where it appears |
|---|---|---|
| **DRAW** | The line travels a path — work in progress, a journey underway | Hero curves, ecosystem spine, link underlines, focus traces |
| **JOIN** | Two things meet; a node blooms — connection made, stage completed | Hero crossing, station nodes, closing resolution, success states |
| **HOLD** | The line at rest as a rule — stability, things kept in place | Section rules, ledger dividers, list separators |
| **HAND OFF** | The line exits one chapter into the next — nothing gets dropped | Chapter thresholds, the terminus, the descent into dark |
| **REPAIR** | The one permitted break, immediately re-drawn — honesty about failure | Error states only (future forms): the rule under a failed field breaks, then redraws on retry |

**Forbidden forms** (the language's negative space): the line never chases the cursor, never loops decoratively, never pulses idly, never scrubs per-pixel across chapter boundaries, never appears without one of the five verbs. A custom trailing cursor is explicitly rejected — the visitor's cursor is theirs; our language lives in the page, not on their pointer.

## Three dynamic tiers, one physics

One easing curve everywhere — `cubic-bezier(0.16, 1, 0.3, 1)` — so all motion shares one body. Hierarchy comes from amplitude and duration, not from new curves:

| Tier | Duration | Travel | Budget |
|---|---|---|---|
| **Overture** | 1.4–2.4s | large (viewport-scale) | Twice per visit, ever: the hero sequence; the road's threshold |
| **Editorial** | 0.7–1.15s | 24–40px / mask height | Content reveals, images, stations |
| **Micro** | 0.15–0.3s | ≤8px / color & underline | Buttons, links, pill, hovers, focus |

Exits run ~65% of entry duration. Everything is interruptible mid-flight — scroll and tap always win; no motion ever blocks input. Compositor properties only (transform/opacity/stroke-draw); nothing animates layout.

## The interactions, each with its reason

Format per row: **Purpose · Duration · Feeling · Direction · Trigger · Emotion produced.** "Fade in" is not a purpose; every row must justify existing.

### Overture tier

- **Hero sequence** — *Purpose:* state the brand thesis wordlessly before a word is read: separate things travel, meet, become one. *Duration:* ~2.5s composed (curves 1.7s staggered, mesh resolve 0.6s, node bloom 0.9s, headline masks ride the last second). *Feeling:* inevitable, like water finding a channel. *Direction:* curves from opposite edges toward the crossing; headline rises. *Trigger:* load — the overture **is** the loading experience; no spinner exists or ever will. *Emotion:* stillness → recognition. *Once per visit; never replays on scroll-back.*
- **The descent (threshold into The Road)** — *Purpose:* mark the page's one act-change so the dark chapter feels entered, not stumbled into; the ground darkens as the line dives. *Duration:* ~1.4s across the boundary scroll. *Feeling:* lights dimming in a cinema. *Direction:* downward, forward. *Trigger:* scroll through the threshold band. *Emotion:* immersion begins. *(The surfacing back to light needs no ceremony — relief works uncelebrated.)*

### Editorial tier

- **Masked headline reveal** — *Purpose:* words arrive the way the company works: prepared out of sight, delivered finished. *Duration:* 1.15s, beats staggered 80ms. *Feeling:* certain. *Direction:* rise. *Trigger:* first viewport entry, once. *Emotion:* confidence.
- **Rise (images, blocks)** — *Purpose:* content takes its place on the road rather than materializing; travel says "arrived," not "appeared." *Duration:* 0.9s. *Direction:* up 32px. *Trigger:* viewport entry, once. *Emotion:* order.
- **Spine draw + station join** — *Purpose:* the services *are* a sequence; the spine drawing with progress is that fact, shown; each node bloom is a small completion — five echoes of the crossing. *Duration:* draw is scroll-linked; blooms 0.6s. *Feeling:* progress being made on the visitor's behalf. *Direction:* downward (the road runs on). *Trigger:* scroll progress; blooms at station arrival. *Emotion:* orientation, momentum.
- **Word-scrub (restricted)** — *Purpose:* pace exactly two sentences at reading speed — the scope line (Arrive II) and the belief statement — so their weight registers. *Duration:* scroll-linked, **completing by 68% viewport height**; resting floor legible (≥4.5:1), never parked mid-sentence. *Feeling:* being spoken to, not displayed at. *Emotion:* attention. *Everywhere else this effect is banned: a reveal that rests unrevealed is a legibility tax.*
- **Road stage travel** — *Purpose:* the chapter's thesis is continuity; stages must *become* each other, not replace each other. Plates crossfade (incoming over outgoing), names slide with the scrub, imagery keeps one forward direction. *Duration:* scroll-owned (the visitor's hand is the timeline). *Feeling:* moving down a road at night. *Emotion:* projection. *Hard cuts inside the pin are the one motion bug this language cannot forgive.*
- **Menu open/close** — *Purpose:* the panel and its contents are one object; chrome moves as a decision. *Duration:* 0.95s open, 0.7s close, contents staggered 60ms. *Direction:* from the Menu edge. *Emotion:* control.

### Micro tier

- **Link underline draw** — *Purpose:* the smallest unit of the language: hover draws the line, exit hands it off (out the other side) — DRAW and HAND OFF in miniature, hundreds of times. *Duration:* 0.3s. *Trigger:* hover/focus. *Emotion:* precision.
- **Button (primary)** — *Purpose:* physical acknowledgment; magnetic pull ≤8px says "this responds to you," press-scale says "received." *Duration:* pull spring; press 0.15s. *Emotion:* trust in the controls.
- **Pill hand-off** — *Purpose:* chrome yields to content; the bar's job passes to the pill without a seam. *Duration:* 0.5s crossfade at the hero boundary. *Emotion:* being accompanied, not watched. *After The Road, the conversation affordance surfaces in the pill (0.3s) — readiness met at the moment it forms.*
- **Focus ring** — *Purpose:* keyboard visitors see the line too: sea outline, offset, instant (0s — focus is information, not theatre). *Emotion:* inclusion.
- **Reel hover** — *Purpose:* stills that hold a living moment underneath; video fades up under the pointer. *Duration:* 0.8s fade. *Emotion:* curiosity rewarded.
- **Success / error (future forms)** — success: node bloom beside the confirmed action (JOIN, 0.6s). Error: the field's rule breaks at the fault, message appears, rule **repairs** on retry (REPAIR, 0.4s). *Purpose:* even failure speaks the language — and the repair is the brand promise performed.

## Reduced motion (a first-class rendering)

`prefers-reduced-motion` receives the **completed** state of everything: curves drawn, nodes joined, text whole, road stages as a stacked chapter, no pin, no parallax, no scrub. The story is identical; only the travel is removed. This is not a fallback — it is the language's written form versus its spoken form.

## Performance contract

60fps on mid-tier Android is the bar. Transform/opacity/stroke only; scroll listeners passive; one scroll owner per behavior (long-term: consolidate runtimes — see 10). Any motion that cannot hold frame rate on the test device is redesigned or cut; premium never costs speed.

## The test for every future motion

Before adding any animation, it must answer all four: **Which verb is it?** (draw/join/hold/hand-off/repair) · **Which tier?** · **What emotion does it produce in the journey (02)?** · **What breaks if it's removed?** No answers, no animation.
