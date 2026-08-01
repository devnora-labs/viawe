---
status: current
stage: exploration
created: 2026-08-01
adr: docs/decisions/ADR-004-logo-led-extensible-service-motion.md
---

# Via-We — Current Motion Direction

**Status: EXPLORATION. Not a motion system. No stack selected.**

> This document records the motion direction being explored, the principles that hold regardless of which design wins, and the questions the prototypes must answer. It is deliberately **not** a token set, a per-route map, or a stack decision — all three were written prematurely last time and all three are now superseded.
>
> **Previous:** [Motion System v1 — superseded](VIA-WE_MOTION_SYSTEM_v1.md) · [Page Animation Map v1 — superseded](VIA-WE_PAGE_ANIMATION_MAP_v1.md) · [ADR-001 — superseded, stack re-opened](../decisions/ADR-001-via-we-animation-stack.md)

---

## 1. The brief

`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §8:

> Version 1 is a **premium, highly animated** corporate and lead-generation website with future application expansion.

This is a deliberate change of ambition. The superseded motion system permitted **one authored moment across twenty routes**; that austerity conflicted with the brief and is no longer the doctrine.

**"Highly animated" is not "animated everywhere."** It means motion is a primary expressive medium rather than a garnish. What it must not become is a page where every section fades and rises on scroll — that reads as templated.

**Note on evidence:** the [agency teardown](../research/2026-08-01-agency-reference-teardown.md) **cannot** be cited for or against any motion pattern. It ran without a browser and observed **no motion at all** on any of the five reference sites — see its §2. The claim above rests on craft judgement, not on observation of those sites. Re-running the teardown with a real browser is listed as remediation there, and it should happen before the prototypes are reviewed.

---

## 2. The motion idea under exploration

The logo sequence described in [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §2 and `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §6:

**Updated 2026-08-01** — the sequence now carries the **360 concept**, per Vijay's confirmation.

| Beat | What happens | What it communicates |
|---|---|---|
| 1 | The official VIA-WE symbol **forms from its existing curves and connection mesh** | Identity, built from the real mark |
| 2 | A **complete circular / orbital motion** develops around the mark | **360-degree coverage — expressed visually, never written** |
| 3 | Active services appear as **connected segments** around the central system | Five services as facets of one system, not a list |
| 4 | The segments **complete a full 360-degree journey** | Connectedness and completeness |
| 5 | Each segment reveals real work, capabilities or outcomes | Proof, as it becomes available |
| 6 | The animation **returns to / resolves around the unchanged official logo** | The mark is the constant; the services orbit it |

**Why this form.** "360" is a strategic concept that **must not be written into the logo**. An orbital sequence completing a full revolution around the unchanged mark expresses complete, connected coverage without adding a character to the artwork. The meaning and the brand constraint agree — which is the strongest reason to keep a motion idea.

**What makes this worth exploring:** the sequence *is* the positioning argument. Form → orbit → connect → complete is exactly what "360-degree business execution company" means. Motion is carrying meaning, which is the only defensible reason for it to exist.

**Hard constraints:** do not modify the logo · do not add "360" to it · do not trace the PNG · do not hardcode five segments — the service registry drives the count.

**What must be proven, not assumed:** that it reads as authored rather than as a stock brand reveal; that it survives 360 px; that step 6 works when there is nothing approved to reveal.

---

## 3. Principles that hold regardless of the chosen design

Carried forward from the superseded motion system because they originate in `AGENTS.md` and in device reality, not in the rejected concept.

1. **Motion carries meaning.** Every animation explains state, relationship, hierarchy, or continuity. Decoration without purpose is debt.
2. **Content is never hidden behind motion.** Elements render readable by default. A failed script does not blank the page.
3. **No long intro loader.** The logo sequence must not gate content. A visitor who scrolls immediately must not be blocked.
4. **No scroll-jacking.** No scroll hijacking, no smooth-scroll library, no pinned scrub sections. `AGENTS.md`.
5. **Reduced motion is complete.** Same information, same routes, same feedback. **Never** a blanket `* { animation-duration: 0.01ms }` kill — that destroys useful feedback.
6. **Mobile motion is re-composed, not scaled.** 360 px is the design baseline.
7. **Measured on mid-tier Android over throttled 4G.** Not on a developer laptop.
8. **Works without JavaScript.** Navigation, links and forms function; content is readable.
9. **Motion tokens have a single source of truth.** Never raw durations scattered through components.
10. **No animation choreography is hand-written per service.** It follows from the service registry — [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §3.

---

## 4. The extensibility constraint, applied to motion

This is where the previous direction failed architecturally, so it is stated explicitly.

> **The service-segment animation must be generated from the active service list, not authored per segment.**

Rejected:
- Five hand-tuned timelines, one per service
- Geometry whose angles or offsets are hardcoded for exactly five segments
- A choreography that must be re-timed to add a sixth service
- Any layout that visibly breaks at four or seven segments

**Acceptance test:** add one record with `status: "ACTIVE"` and the animation accommodates it — spacing, timing, stagger, and geometry all follow. If a design cannot do this, the design changes, not the constraint.

---

## 5. No stack is selected

`docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §14 lists **"final animation stack"** under *Not ready now*. The reconciliation prompt prohibits selecting one in this phase.

| | |
|---|---|
| **Current stack** | **None selected** |
| [ADR-001](../decisions/ADR-001-via-we-animation-stack.md) | Superseded. Its zero-dependency conclusion was derived from a one-moment motion system that no longer applies |
| When it gets decided | **After** the creative gate, in a new ADR, from the requirements of the approved prototype |

**Why the order matters.** ADR-001's mistake was choosing a stack from a motion system that was itself derived from a concept that was later rejected — three layers of derivation, all of which fell. The stack must be chosen from *demonstrated* requirements, not anticipated ones.

**What ADR-001 still offers:** its comparison method (§4), its escalation gate for adding a dependency (§7), and its honest account of the costs of a zero-dependency choice (§8). Reuse the method; re-derive the answer.

---

## 6. Open questions for the prototypes

| # | Question | Why it matters |
|---|---|---|
| M-1 | Does the logo sequence play once per session, once per page load, or only on `/`? | Determines whether it delights or irritates on the second visit |
| M-2 | Does the sequence gate the hero, or play over already-readable content? | Principle 3 says it must not gate. Prototype must show this is achievable |
| M-3 | What is the sequence's total duration, and does it survive a returning visitor? | A 2-second opening is charming once and costly on the fifth visit |
| M-4 | How does an **orbital** segment layout re-compose at 360 px? | The hardest constraint. A full circle at 360 px width leaves very little radius — the mobile form may need to be an arc, a vertical rail, or a different metaphor entirely |
| M-5 | What does "highly animated" mean below the fold? | The brief asks for ambition; the teardown warns against per-section reveals. This must be answered concretely, not by adjective |
| M-6 | With no approved proof, what does a segment reveal on hover or tap? | Determines whether beat 6 is buildable today |
| M-7 | What is the reduced-motion version of the assembly sequence? | Must lose no information — the mark and five services still legible and navigable |
| M-8 | What is the realistic performance budget once the direction is known? | The superseded budget (120 KB, 0 KB animation) was derived from the rejected concept and must be re-derived, not inherited |

---

## 7. Prototype gate

From `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §9 and §11. No concept becomes final without all of:

- [ ] Desktop prototype
- [ ] Mobile prototype — **360 px**
- [ ] Reduced-motion version losing no information
- [ ] Ten-second clarity test
- [ ] Performance review on mid-tier Android over throttled 4G
- [ ] Vijay's approval
- [ ] **Two** prototypes exist and one is selected
- [ ] The six-service test: a sixth segment activates from data alone

**Blocked until production logo vector files are available.** A logo-led motion direction cannot be prototyped from raster artwork, and `docs/governance/…` §7 forbids treating raster artwork as an official vector.

---

## 8. What gets written after approval, not before

Recorded so the sequencing mistake does not repeat:

| Artefact | Written when |
|---|---|
| Motion tokens — duration, easing, distance, stagger | After a prototype is approved |
| Per-route animation map | After the route set is approved |
| Performance budget with real numbers | After the direction is known and measured |
| Animation-stack ADR | After the motion requirements are demonstrated |
| Design system / `DESIGN.md` | From the built result, never ahead of it |
