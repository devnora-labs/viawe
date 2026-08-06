# Via-We Motion System

## Purpose
This document defines how the website moves. Motion is part of the brand, not decoration.

## Core motion idea — The Line That Does Not Drop
The motion language uses five verbs:
1. **Draw**
2. **Join**
3. **Hold**
4. **Hand off**
5. **Repair**

Every animation should use one or more of these verbs.

## Principles
- Motion must have a narrative or interaction job.
- Content remains available without motion.
- Scroll remains user-controlled.
- The hero plays once.
- Secondary motion stays quiet.
- Mobile is recomposed, not merely shrunk.
- Reduced motion is a complete designed state.
- Motion never delays the primary CTA.
- Stillness is part of the system.

## Motion hierarchy

### Tier 1 — Signature
- hero overture;
- connected service journey;
- major chapter transitions;
- final contact resolution.

### Tier 2 — Structural
- navigation handoff;
- section connectors;
- progress;
- image transitions;
- service-state changes.

### Tier 3 — Feedback
- hover;
- focus;
- press;
- menu;
- form validation;
- success and error.

## Motion tokens
| Token | Duration | Use |
|---|---:|---|
| Instant | 1–80ms | Reduced-motion state and input acknowledgment |
| Quick | 160ms | Hover and small feedback |
| Base | 300ms | Navigation and UI transitions |
| Slow | 600ms | Section handoff |
| Signature | 900–2400ms | Hero and narrative sequences |

Use one primary custom ease. Avoid bounce and elastic easing.

## Hero overture
```text
separate paths
→ approach
→ connection
→ stable system
→ headline
→ CTA
```

Requirements:
- two logo-derived paths enter from opposite directions;
- mesh resolves near the connection;
- node blooms once;
- headline appears after the connection begins;
- everything becomes still;
- no loop;
- no intro loader;
- semantic text remains HTML.

Reduced motion:
- final joined state immediately;
- complete headline immediately;
- no drawing or pulse;
- preserve normal focus and press feedback.

## Service journey
- The line enters from the hero.
- It connects services in data order.
- It adapts to service count.
- It never hardcodes five.
- Mobile retains the connected story with a compact or vertical spine.
- The line hands off into the next chapter.

## Navigation
- calm state transitions;
- high readability;
- keyboard-safe;
- focus returns after mobile menu close;
- no custom cursor;
- no hidden labels on hover.

## Typography motion
Allowed:
- masked reveal;
- controlled line entrance;
- contrast-safe scrubbed emphasis.

Avoid:
- letter-by-letter animation everywhere;
- repeated fade-up;
- excessive stagger;
- partially unreadable resting states.

## Image motion
Allowed:
- clip reveal;
- restrained scale;
- context-to-detail transition;
- hover preview when real media exists.

Avoid:
- constant zoom;
- floating images;
- decorative parallax;
- purposeless autoplay video.

## CTA and forms
- Buttons need clear hover, focus, and press.
- Errors may break the line.
- Corrected fields repair it.
- Success resolves the line.
- Feedback must not rely on motion alone.

## Scroll policy
- native scroll by default;
- no scroll hijacking;
- limited pinning only where it improves understanding;
- no long pinned scenes on touch devices;
- reduced motion removes pinning;
- anchor links remain reliable.

## Technical order
1. CSS
2. SVG
3. Web Animations API
4. GSAP when orchestration justifies it
5. Limited WebGL only with an approved requirement

## Performance
- prefer transform and opacity;
- measure path animation;
- pause off-screen loops;
- no permanent `will-change`;
- no giant frame sequences;
- no heavy hero video when SVG is enough;
- avoid multiple animation runtimes;
- test on real mobile hardware.

## Accessibility
- honor `prefers-reduced-motion`;
- provide stable final states;
- keep semantic text outside decorative SVG;
- preserve keyboard navigation;
- avoid flashing and rapid pulses;
- maintain visible focus.

## Review checklist
1. What job does the motion perform?
2. Is it derived from Via-We?
3. Does the content work without it?
4. Is mobile authored separately?
5. Is reduced motion complete?
6. Is the CTA immediately usable?
7. Is it smooth on mid-range devices?
8. Does it clean up on unmount?
9. Is there repeated generic reveal?
10. Can anything be removed without reducing meaning?
