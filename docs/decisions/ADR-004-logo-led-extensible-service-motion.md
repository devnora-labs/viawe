---
status: proposed
created: 2026-08-01
source: docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
---

# ADR-004 — Logo-led creative direction and extensible service motion

| | |
|---|---|
| **Status** | **PROPOSED — not approved, not final** |
| **Date** | 2026-08-01 |
| **Deciders** | Vijay (brand approval required), Vamshi (technical owner) |
| **Source** | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §5, §6, §7 |
| **Replaces** | [ADR-003](ADR-003-distributary-direction-rejected.md)'s rejected direction |
| **Depends on** | [ADR-002](ADR-002-v1-active-service-scope.md) — five active pillars, extensible |

> **This ADR does not approve a design.** It records the direction being explored and the architectural constraint that must hold **whatever** design is approved. The creative gate in `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §11 has not been passed.

---

## 1. Context

[ADR-003](ADR-003-distributary-direction-rejected.md) rejected the Distributary direction. Via-We has an existing logo whose elements carry stated meaning (`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §5):

| Element | Stated meaning |
|---|---|
| Upward curve | The letter **V**, and client growth |
| Downward curve | **WE** |
| Mesh / network | The connection between Via-We and the client, and company expansion |

This is an unusually good starting point: the mark already encodes *growth*, *partnership*, and *connection* — which is precisely Via-We's positioning as a coordinated execution company. The direction under exploration derives the site's motion and visual system from the mark itself rather than from an invented metaphor.

Simultaneously, [ADR-002](ADR-002-v1-active-service-scope.md) fixed V1 at five pillars while requiring that the count be changeable. The previous direction failed partly because its signature element encoded a fixed service count in its form.

---

## 2. Proposed direction — "Connected Growth Mark"

The logo becomes the source of the motion system:

1. The two major logo curves begin separated.
2. They enter from opposite sides.
3. The mesh connection resolves as they meet.
4. The full Via-We symbol forms.
5. The symbol expands into the **active service segments**:
   - Brand & Market
   - Set Up
   - Franchise
   - Build Digital
   - Hire
6. Each segment can reveal real Via-We work, people, campaigns, interfaces, or business outcomes.
7. The system must expand later to six or seven active services **without redesigning the website**.

**Status: [PROPOSED].** Requires prototypes, mobile review, reduced-motion review, and Vijay's approval.

### What this direction has going for it, stated honestly

- It uses an asset Via-We owns, with meaning the company itself authored — the failure mode of ADR-003 cannot repeat.
- The narrative (separate → connect → expand into services) is the positioning argument, not a decoration of it.
- Segment reveal gives approved case-study material a natural home as it arrives.

### Risks that the prototype must test

- **A logo-assembly intro is a common agency pattern.** It risks reading as a generic "brand reveal" loader. `AGENTS.md` prohibits long intro loaders, and the sequence must not gate content.
- **A radial segment expansion is a hub-and-spoke diagram** — the generic "connections" visual. Craft will decide whether it reads as authored or as clip art.
- **Five segments at 360 px** is the hardest constraint. A radial form that works on desktop frequently does not survive a narrow viewport, and mobile is the majority case.
- **Content dependency.** Step 6 assumes real work, people, campaigns and outcomes exist to reveal. Almost none is currently approved for publication — see the [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md). **The direction must work with segments that reveal descriptions rather than proof**, or it cannot ship.

---

## 3. The binding architectural constraint

**This part is not proposed. It applies to any approved design.**

> **The active service list is data. It is never structure.**

Per `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §7:

```ts
type ServiceDefinition = {
  id: string;
  slug: string;
  shortLabel: string;
  fullName: string;
  description: string;
  status: "ACTIVE" | "PLANNED" | "ARCHIVED";
  order: number;
  route: string;
  visualKey: string;
};
```

The active service list must drive **all** of:

- Navigation
- Homepage service experience
- Logo-segmentation animation
- Forms
- CRM categories
- Analytics
- Service pages

### Explicitly rejected

- Five permanently hardcoded wedges, segments, or channels
- Five fixed animation timelines
- Five routes embedded in UI logic
- Any layout whose geometry breaks when the count changes
- Any animation whose choreography must be hand-rewritten to add a sixth service

### The acceptance test

> **Activating a sixth service must be a content change — adding one record with `status: "ACTIVE"` — and nothing else.** Navigation, the homepage segment experience, the animation, the forms, the analytics vocabulary, and the route must all follow from that single change.

If a proposed design cannot satisfy this, the design is wrong, not the constraint.

---

## 4. Prototype gate — what must exist before this ADR can be accepted

Per `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §9 and §11:

- [ ] **Two** hero prototypes, not one
- [ ] Desktop prototype
- [ ] Mobile prototype at **360 px**, not only 390 px
- [ ] Reduced-motion version that loses no information
- [ ] Ten-second clarity test — can a first-time visitor say what Via-We does?
- [ ] Performance review on mid-tier Android over throttled 4G
- [ ] The six-service test: demonstrate a sixth segment activating from data alone
- [ ] Vijay's approval

**No prototype may be built before the content gate** — see [VIA-WE_MISSING_INPUTS.md](../planning/VIA-WE_MISSING_INPUTS.md). Production logo vector files are the hard blocker: a logo-led direction cannot be prototyped from raster artwork, and `docs/governance/…` §7 forbids treating raster artwork as an official vector.

---

## 5. Constraints inherited regardless of the chosen design

These originate in `AGENTS.md` and in the reconciled principles, not in this ADR, and hold whatever is approved:

- No scroll-jacking, no scroll hijacking
- No long intro loader; content must not wait on the logo sequence
- Reduced motion must be **complete**, never a blanket `0.01ms` kill
- Readable and navigable without JavaScript
- Measured on mid-tier Android over throttled 4G, not on a desktop
- Motion tokens with a single source of truth
- No AI-generated team, office, or client imagery

---

## 6. What is explicitly not decided here

| Not decided | Where it will be decided |
|---|---|
| **The animation stack** | A future ADR, after the creative gate. [ADR-001](ADR-001-via-we-animation-stack.md) is superseded and the choice is re-opened. `docs/product/…TRUTH_v2.md` §14 lists "final animation stack" under **Not ready now** |
| Final palette | The brand guideline gives `#1B4B77`, `#3582AD`, `#3B8EC0`, `#4AD3F3`. A working palette derived from these is not yet built |
| Final typography | Guideline names Deadhead Bold and Roboto Medium. **Deadhead must not be used until licence and web-delivery suitability are verified** |
| Final routes | Proposed in Business Truth v2 §8, subject to product approval |
| Whether the logo sequence appears on every route or only on `/` | Prototype decision |
| UI component strategy | Re-opened; no framework decision is current |

---

## 7. Consequences

**Positive**
- The visual system derives from an owned asset with authored meaning.
- The extensibility constraint is recorded **before** any implementation, which is the only point at which it is cheap.
- Recording it as *proposed* keeps the creative gate real rather than ceremonial.

**Negative**
- A logo-assembly opening is a well-worn pattern and will need genuine craft to avoid reading as a template brand reveal.
- The extensibility requirement rules out some otherwise attractive fixed-geometry compositions.
- Step 6 depends on approved proof material that does not yet exist.

---

## 8. Review

Reviewed when the two prototypes exist. This ADR moves to **Accepted** only with Vijay's approval and all §4 boxes checked. Until then, no page, component, animation, or stack decision may cite it as settled.
