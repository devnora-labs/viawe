---
status: accepted
created: 2026-08-01
source: docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
---

# ADR-003 — Krishna-delta / Distributary creative direction rejected

| | |
|---|---|
| **Status** | **Accepted** — the rejection is final |
| **Date** | 2026-08-01 |
| **Deciders** | Vamshi (confirmed), Vijay (brand owner) |
| **Source** | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §6 |
| **Rejects** | The Distributary concept proposed 2026-08-01 in `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` |
| **Replaced by** | [ADR-004](ADR-004-logo-led-extensible-service-motion.md) — logo-led direction, **proposed** |

---

## 1. Context

Phase 0 proposed and recommended **"Distributary"**: a creative direction drawing Via-We as an irrigation network from the Krishna delta — one intake, seven channels, register-mark nodes, rendered in the visual language of a survey sheet with a silt / water / paddy palette. Its signature element, "The Intake", was a cartographic routing instrument.

The direction was explicitly `[PROPOSED]` and gated on approval, including a named open question — **Q-B2**: *"Is the distributary/canal reference meaningful and dignified to Vijay, or does it read as agricultural rather than commercial?"* The Phase 0 self-critique recorded this as a hard gate that a designer could not answer from outside the culture.

**The owners rejected the direction.** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §6 lists the Krishna-delta, Distributary, canal-network and irrigation/survey-map concepts as rejected and superseded, and — notably — adds *"Agriculture/government/engineering visual associations"* to the same list. Those stated grounds are exactly the concern Q-B2 raised. The truth file does not record who answered or in what words, so this ADR records **the decision and its stated grounds**, not an account of the conversation.

---

## 2. Decision

> **The Krishna-delta / Distributary creative direction is rejected and superseded.**

The following are rejected as visual language for Via-We:

- The Krishna-delta concept
- The Distributary concept
- The canal-network concept
- Irrigation and survey-map language
- Agriculture, government and engineering visual associations

Everything derived from it is superseded:

| Superseded document | Was |
|---|---|
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | The concept, palette, type system, layout, signature element |
| `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | Motion doctrine whose signature was "the Intake resolve" |
| `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | Per-route motion across a seven-pillar route set |
| `docs/decisions/ADR-001-via-we-animation-stack.md` | A stack chosen because the signature was one SVG drawing |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | A build sequence whose Milestone 4 built "the Intake" |
| `docs/reviews/2026-08-01-phase-0-self-critique.md` | A critique of the above |

Per `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §4 and §9, **none of these is deleted.** Each carries a visible supersession notice and is retained as decision history.

---

## 3. Why the rejection is correct

Recorded so the reasoning survives, not to argue against a settled decision.

1. **The metaphor was regionally accurate but commercially wrong.** The delta is Vijayawada's defining hydrological structure and genuinely local — but locality is not the same as fitness. Agriculture, government and public-works associations are not what a business-growth company selling to founders and brand owners wants to evoke.
2. **Via-We already owns a better source.** The company has a real logo with stated meaning — an upward growth curve, a downward WE curve, and a connection mesh. Deriving the visual world from an invented metaphor while an authentic one sat unused was the deeper error. The Phase 0 process listed the logo nowhere among its seven candidate material systems because **the brand guideline was not in the repository at the time**.
3. **The concept hardcoded seven channels.** Under [ADR-002](ADR-002-v1-active-service-scope.md) that is now five, and under Business Truth v2 §7 the count must be data-driven. A signature element whose form encodes a fixed service count is an architectural liability regardless of its aesthetics.
4. **Its austerity conflicted with the brief.** The Distributary motion system permitted exactly one authored moment across twenty routes. Business Truth v2 §8 specifies *"a premium, highly animated corporate and lead-generation website"*.

---

## 4. What is explicitly **not** rejected

The rejection is of a metaphor, not of everything reasoned alongside it.

| Retained | Where recorded |
|---|---|
| The agency reference teardown and its structural findings | [teardown](../research/2026-08-01-agency-reference-teardown.md) — marked current |
| Its governing finding: all five references are **proof-led**, and Via-We's proof is not yet approved | [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md) |
| The anti-pattern list — no unsubstantiated metrics, no logo walls, no invented category, no localised URL without localised content | `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` §11, still worth reading |
| No scroll-jacking; reduced motion complete; mid-tier Android as the measurement device; readable without JavaScript | Carried into [ADR-004](ADR-004-logo-led-extensible-service-motion.md) and the current motion direction |
| The concept-evaluation method: name the rut, derive candidates from the subject's world, score, recommend one | Method, reusable |

---

## 5. Consequences

**Positive**
- The visual world will now derive from an asset Via-We actually owns, with meaning the company itself has stated.
- The service-count coupling is removed at the concept level rather than patched later.

**Negative**
- Phase 0's creative output is discarded. Roughly one full concept development cycle.
- The lesson is worth recording: **Phase 0 ran before the brand guideline was in the repository.** Had it been present, the logo would have been the obvious first candidate. This is a process failure — a creative direction was derived before the brand inputs were gathered — and it is why the [documentation gate](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) now precedes the creative gate.

**Neutral**
- Nothing was built. No code, no dependency, no asset. The cost is documentation only.

---

## 6. Review

Not subject to review. A rejected brand metaphor does not return. Any future direction begins from the brand guideline and the service registry.
