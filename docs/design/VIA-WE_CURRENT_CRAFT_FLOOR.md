---
status: current
type: design craft floor
authority: 9
created: 2026-08-03
---

# Via-We Current Craft Floor

**Required reading before any design or UI work.** This is the quality floor every Via-We surface must clear.

> **Why this document exists.** These rules previously lived only in a **vendored third-party skill** and in **`VIA-WE_CREATIVE_DIRECTION_v1.md` §11 — a superseded document** that [`CLAUDE.md`](../../CLAUDE.md) §3 correctly forbids building from. The discipline was one file-deletion or one agent mistake away from vanishing. It is now current, owned, and traceable.

**This document does not reactivate Creative Direction v1.** Its rejected visual world — Krishna-delta, Distributary, canal, survey-map — remains **rejected** by [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md). Only direction-independent craft rules were promoted. §11 records exactly what was left behind and why.

---

## 1. Content measure

- Body text must use a **controlled, readable measure**.
- Long-form copy must **not** span the full viewport.
- **Default target: approximately 60–75 characters per line.**
- Narrower measures are permitted for editorial emphasis.
- **Do not force every block to the same measure.** Uniform measure across a whole page is its own template signal.

---

## 2. Display-size cap

- Establish a **documented display-size ceiling per breakpoint**.
- Large text must not destroy hierarchy, obscure content, or clip on mobile.
- **The cap must be expressed through responsive tokens**, never one hardcoded desktop value.
- Heavy display type at very large sizes requires **explicit justification** recorded in the design decision.
- Typography must serve Via-We's business story, **not trend mimicry**.

**Open dependency.** The display face is unresolved — Deadhead Bold's web licence is **unknown**, and "website typography may be modernised" is **not confirmed**. Both are Vijay's decisions. See [brand asset audit §5](../brand/VIA-WE_BRAND_ASSET_AUDIT.md). **No type scale may be finalised until they resolve.**

---

## 3. Eyebrow discipline

- Decorative eyebrows are **not a default section pattern**.
- **Do not** place an uppercase mono label above every heading.
- Use an eyebrow **only** when it carries real navigation, category, status or data meaning.
- **Repeated cosmetic eyebrows are prohibited.**

---

## 4. Gradient discipline

**The rule, in one sentence:**

> **Do not create CSS gradient text, synthetic gradient headlines, or newly designed gradient wordmarks. The approved official Via-We logo artwork is exempt and must be rendered unchanged from the supplied official asset.**

### 4.1 Prohibited — newly created web styling

| # | Prohibited | Why |
|---|---|---|
| 1 | **CSS gradient text** — `background-clip: text`, gradient fills on type, gradient `::selection` treatments | A generic agency signal, not a Via-We signal |
| 2 | **Synthetic gradient headlines** used to simulate "premium" | Premium comes from typography, spacing and restraint, not from a fill |
| 3 | **A newly designed gradient wordmark** — any gradient-filled rendering of "Via-We", "VIA-WE Services Pvt. Ltd." or the tagline that is not the official asset | Inventing a wordmark treatment modifies the brand |
| 4 | Extracting the logo's gradient and reusing it as a site-wide text or heading treatment | The gradient is part of one authored mark, not a text style |

### 4.2 Exempt — the approved official artwork

- **The official Via-We logo artwork is exempt from this rule.**
- It **must be rendered unchanged from the supplied official asset** — not recoloured, not flattened, not redrawn, not re-gradiented, not traced.
- **The gradients inside the official logo are permitted, and only as part of that approved artwork.**
- The exemption covers **the official asset only**. It does not license gradients anywhere else on the site.

Other gradients may be considered **only** as authored non-text artwork, and only when directly justified by approved brand direction.

> **Deliberate narrowing from the source — retained.** Creative Direction v1 §11 banned *"any gradient at all in this system"*. That absolute was tied to its own rejected flat survey-sheet palette — and **the official Via-We logo itself uses gradients**. Carrying the absolute forward would have prohibited the approved mark. The ban is therefore scoped to **newly created text, headline and wordmark styling**, which is the real failure mode, with the official artwork explicitly exempt.

---

## 5. Elevation discipline

- Define **one coherent elevation system**.
- **Avoid arbitrary shadows per component.**
- **Avoid glassmorphism.**
- **Avoid floating blurred panels.**
- **Avoid multiple competing shadow styles.**
- Any raised surface must communicate **hierarchy or interaction** — never decoration.
- Prefer a single declaration of elevation per surface: **border or shadow, not both.**

---

## 6. One signature motion

- The site should be remembered for **one orchestrated signature moment**.
- **Current candidate:** the logo-led connected 360 service system — [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md), status **proposed**, not approved.
- Secondary motion must remain **disciplined and quiet**.
- **No standard fade-up on every section.**
- **No animation merely because an element enters the viewport.**
- **No pinned scroll on touch devices.**
- **No scroll-jacking**, no smooth-scroll library, no horizontal scroll sections.
- **Reduced motion must preserve information and composition** — never a blanket `* { animation-duration: 0.01ms }` kill, which destroys useful feedback.
- Content must remain readable if scripts fail.

**Hard dependency.** The signature animation requires **separable vector paths** for the logo's curves and mesh. Blocker **B1 is OPEN** — 0 of 7 production vectors exist. Prototypes may use **temporary placeholder geometry**, provided they are never presented as the final logo animation.

---

## 7. Layout discipline

- **No generic three-card feature rows by default.**
- **No `rounded-2xl` on every surface.**
- **No centred generic hero with two adjacent CTA buttons** unless evidence proves it is the strongest Via-We solution.
- **No fabricated trust strip.**
- **No avatar-plus-five-star testimonial template.**
- **No decorative numbering** unless the content is a real sequence. *(Via-We's five services are a **set**, not a sequence — do not number them. A delivery process **is** a sequence and may be numbered.)*
- **Page sections must not all use the same repeated container and reveal pattern.**
- No same-size icon + heading + text card grid as page structure; **never nest cards**.
- No hero-metric template — big number, small label, supporting stats, accent.
- No logo walls, awards carousels or testimonial rotators.
- No homepage FAQ accordion used as a trust device.
- No modal for a task needing neither interruption nor protected focus.

---

## 8. Surface discipline

- No emoji or Unicode glyph standing in for an icon.
- No sketch-style SVG scenes, doodle class names, or `feTurbulence` grain.
- No `repeating-linear-gradient` stripes or grid overlays without real artwork beneath.
- No sparklines, progress rings or soft-shadowed rounded rectangles standing in for content.
- No coloured `border-left` above 1 px as decoration.
- No system display face as the display voice of the site.

---

## 9. Brand discipline

| Rule | Value |
|---|---|
| Official brand | **`VIA-WE Services Pvt. Ltd.`** |
| Exact tagline | **`YOUR DREAMS OUR AIM`** — no comma, ever |
| "360" | A **strategic and visual concept only** |

- **"360" must never** be inserted into the company name, logo, wordmark or tagline.
- **Never write** `Via-We 360` · `VIA-WE 360` · `Via-We 360 Services Pvt. Ltd.`
- **The official logo must remain unchanged.** Do not modify, redraw, trace or recolour it.
- "Services Pvt. Ltd." is **intentionally** part of the approved lockup and may remain visible in the header.
- **Do not claim Via-We performs every possible service.** "360-degree" means connected coverage across the five active services.
- **Official Via-We blues remain the brand anchor** — `#1B4B77` `#3582AD` `#3B8EC0` `#4AD3F3` — unless a later approved decision changes them. A working palette must be *derived* from these with contrast verified, without inventing a new brand colour.

---

## 10. Copy discipline

**Prohibited generic agency language:**

`elevate` · `unlock` · `seamless` · `transform your` · `take it to the next level` · `in today's fast-paced digital landscape`

Also prohibited: "best", "No. 1", "guaranteed", "world-class", "100% result", "verified" without a documented process.

**Never invent** metrics, awards, clients, testimonials, case studies or outcomes. Never present a planned service, feature or office as available. Never use AI-generated team, office or client imagery. Never lift content from the old site without verification.

**Missing copy must be marked explicitly — never filled with invention:**

```text
[NEEDS COPY: exact requirement]
[NEEDS EVIDENCE: exact requirement]
[NEEDS OWNER DECISION: exact question]
```

---

## 11. Source traceability

| Rule group | Original source | Source status | Why it remains valid |
|---|---|---|---|
| Measure · display cap · elevation · eyebrow ban · gradient discipline | `.agents/skills/impeccable/reference/craft-floor.md` | **vendored third-party** | Direction-independent typographic and surface craft; survives any visual world |
| Layout anti-patterns · surface anti-patterns · content anti-patterns | `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` §11 | **superseded** | Consolidated from the craft floor, `AGENTS.md` and the agency teardown — none of which depended on the rejected concept |
| One signature motion · reduced motion · no pinned scroll · no scroll-jacking | `docs/design/VIA-WE_MOTION_SYSTEM_v1.md`; originates in `AGENTS.md` | **superseded doc, current origin** | The rules originate in `AGENTS.md`, not in the rejected motion system |
| Brand discipline | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §15; `AGENTS.md` §3a | **current** | Confirmed by Vijay 2026-08-01 |
| Copy discipline | `AGENTS.md` §9, §10 | **current** | Active publication rules |

### 11.1 Superseded context intentionally NOT carried forward

| Not promoted | Why |
|---|---|
| The Distributary / Krishna-delta / canal / survey-map visual world | **Rejected** — [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md) |
| The silt / paddy / barrage palette and its `--vw-*` tokens | Tied to the rejected world; the brand anchor is the official blues |
| Anek / Noto / Martian Mono type system | Justified by a **Telugu** requirement that no longer exists — V1 is English only |
| **"Any gradient at all"** absolute ban | Would prohibit the **official logo, which uses gradients**. Narrowed to newly created gradient text, gradient headlines and newly designed gradient wordmarks, with the **approved official artwork explicitly exempt** — §4 |
| "Seven pillars are a set" phrasing | Superseded — it is **five** ([ADR-002](../decisions/ADR-002-v1-active-service-scope.md)). The *principle* (a set is not a sequence) is retained in §7 |
| "One authored moment across twenty routes" austerity doctrine | Conflicts with the current brief's "premium, highly animated". The *one signature moment* principle is retained; the austerity quantification is not |
| Specific motion tokens, durations, budgets from Motion System v1 | Must be **re-derived** from an approved prototype, not inherited |
| Line references such as `AGENTS.md:117` | Stale — `AGENTS.md` was rewritten 2026-08-01 |

---

## 12. Status of dependencies

| Dependency | Status | Effect on this floor |
|---|---|---|
| **B1** — editable logo vector | **OPEN** | Signature motion cannot be finally built; prototypes use temporary geometry |
| **B2** — Deadhead Bold licence | **UNKNOWN** | No type scale may be finalised |
| Working palette derivation | Not started | Four blues only; no neutral, text or state colours |
| [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) | **proposed** | The signature candidate is not approved |

**This floor applies regardless.** None of its rules depends on those decisions resolving.
