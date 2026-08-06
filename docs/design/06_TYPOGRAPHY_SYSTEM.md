# 06 · Typography System

**Type is the page's lead instrument.** One family — Instrument Sans, variable — with hierarchy built from scale, weight, and rhythm, never from a second voice. On a page whose photography is still maturing, typography carries the premium signal alone; it is specified to that responsibility.

## Why one family (re-affirmed, not inherited)

Challenged again for Phase 3A and kept: the brand's guideline face (Deadhead Bold) is licence-blocked; a second family would add flavor but subtract discipline, and the reference tier (Instrument's own site, Clay, DEPT) proves single-family editorial reads as *more* expensive, not less. Distinctiveness comes from scale courage and the four-voice label system below — not from font shopping.

## The roles

| Role | Size (fluid) | Weight | Case & tracking | Job |
|---|---|---|---|---|
| **Display** | clamp to ~15vw/21vh — fills the fold at three beats | 400 | Sentence case, −0.035em | The hero promise only. Weight 400 at this scale reads as confidence; 700 would read as shouting. Used once per page, ever. |
| **Chapter title** | clamp 2.75–7rem | **600–700** | Sentence case, −0.025em | "Five services." / "No mystery," — chapter openers. The weight step *is* the chapter punctuation: display-400 belongs to Arrive alone. |
| **Section title** | clamp 2–3.25rem | 700 | Sentence case, −0.02em | Pillar names, road-stage names (road stages scale up to ~9rem inside the pin — same role, cinematic size). |
| **Lead** | clamp 1.375–2rem | 400 | Sentence case, −0.01em | Promises, chapter statements. **Measure capped at 60–70ch** — currently loose in Belief/Begin; capped everywhere in Phase 3. |
| **Body** | clamp 1.125–1.375rem | 400 | Sentence case | Scope rows, footer, running copy. Never below 1rem on any surface — this audience reads on phones in daylight. |
| **Wayfinding** | 0.8125rem | 500 | UPPERCASE, +0.08em | Chapter eyebrows only ("WHAT WE DO"). One job. No longer four. |
| **Index** | 0.8125rem | 500 | UPPERCASE, +0.08em, **tabular numerals** | Station numbers ("01 · SET UP"), sea. Tabular so the column never shivers. |
| **Bridge** | 1.125–1.25rem | 400 **italic** | Sentence case | The narrative connective voice ("A running setup needs a face.") — sea, at reading size, unmistakably *speech*, never chrome. The single biggest typographic fix from Phase 2, where bridges dressed as wayfinding at 2.57:1 and died. |
| **Tagline** | clamp 1.5–2.25rem | 500 | UPPERCASE, +0.14em, spark on ink | "YOUR DREAMS, OUR AIM" — one appearance, one treatment shared with nothing. The most exclusive style in the system: used once, it stays a moment; used twice, it becomes wallpaper. |
| **CTA** | 1rem | 500 | Sentence case | Buttons and action links. Verbs first ("Start a conversation"), never noun-labels ("Contact form"). |
| **Data** | 1rem | 400 | **Tabular numerals** | Phone numbers, addresses — anywhere digits align in chrome. |
| **Statistic** *(dormant)* | clamp 3–6rem | 700 | Tabular | Specified now, **rendered never** — until a number is `PUBLIC-READY` per the truth document. The style exists so verified proof drops in without design debt; the governance exists so it isn't faked meanwhile. |
| **Quote** *(dormant)* | lead size | 400 italic | — | Same law: testimonials are permission-gated. Style ready, usage blocked. |

## Rhythm & spacing

- **Line heights:** display 0.9 · chapter 0.92 · titles 0.95 · lead 1.35 · body 1.5–1.6 (scope rows get the 1.6 step of air they currently lack) · labels 1.2.
- **Vertical scale:** the bay (`clamp(7rem, 15vh, 12rem)`) between chapters; half-bay inside chapters; the designed *breaths* (03) are full bays with ground only. Spacing is pacing — no margin exists that isn't a rhythm decision.
- **Reading gravity:** every chapter opens eyebrow → title → lead in strict order and scale; the eye never has to choose. One primary type voice per viewport (the density budget in 03, enforced typographically).
- **Balance & rag:** `text-wrap: balance` on all display/titles; `pretty` on paragraphs. The hero is hand-broken at three beats — "We build," / "brand & grow" / "businesses." — because a rag this public is set, not left to the engine.
- **Punctuation manners:** true em-dashes with hair-space handling; the "01 ·" middot pattern consistent; no double-space, no ALL-CAPS body words for emphasis (emphasis is weight or nothing).

## Dark-surface rules

Type on ink uses the corrected dark-surface tokens (stone-bright class of values — see 09): every text style must clear WCAG AA on the ground it sits on, at the size it renders, verified by measurement, not eye. The Phase 2 failures (3.86:1 footer labels, 5.13:1 borderline chapter heading) are closed by token, so no future component can reintroduce them by accident.

## What this system refuses

- A second typeface, decorative or "premium serif" — discipline is the luxury.
- Gradient text, outlined type, text masks over video — AI-portfolio tells.
- Letter-spaced lowercase, tracked-out body copy, justified columns.
- Type as decoration: oversized ghost numerals, watermark words behind sections. Every glyph on the page is read or it is removed.
