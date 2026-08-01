---
status: superseded
superseded_on: 2026-08-01
reason: Critiques the Distributary concept set, which has been rejected
retained_as: decision history
---

> # ⛔ SUPERSEDED — DECISION HISTORY ONLY
>
> This critiques the **Distributary** concept set, which was subsequently **rejected** — see [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md).
>
> **Retained because** several of its findings apply to *any* direction Via-We chooses and should be re-read before the logo-led prototypes are reviewed:
> - §1.3 — the site has **no urgency device and no proof**, and cannot have one until real approved material exists. This is a commercial cost of an honest site, not a design gap.
> - §3.1 — **nothing had been rendered.** Still true. No prototype exists yet.
> - §3.2 — the tension between the brief's ambition and motion austerity. **Now resolved in favour of ambition** by Business Truth v2 §8.
> - §3.4 — a self-scored concept comparison flatters its own recommendation. Applies equally to any future concept scoring.
> - §2 — "are animations hiding weak content?" The sharper form: is the signature element carrying load that content should carry? Still the right question to ask of the logo-led direction.

---

# Phase 0 — Self-Critique (superseded)

**Date:** 2026-08-01
**Subject:** [Creative Direction v1](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) · [Motion System v1](../design/VIA-WE_MOTION_SYSTEM_v1.md) · [Page Animation Map v1](../design/VIA-WE_PAGE_ANIMATION_MAP_v1.md) · [ADR-001](../decisions/ADR-001-via-we-animation-stack.md) · [Build Plan](../planning/VIA-WE_PHASE_1_BUILD_PLAN.md) · [Teardown](../research/2026-08-01-agency-reference-teardown.md)
**Method:** the thirteen questions from the Phase 0 prompt §19, answered adversarially, followed by **one** revision pass (§4). No further polish loop.

---

## 1. The named tests

### 1.1 Generic-template test — *could this concept be used unchanged for another agency?*

**Mostly no, partly yes.** Honest split:

| Element | Transferable to another company? |
|---|---|
| The Krishna-delta distributary world (survey linework, silt/water/paddy palette, register-mark nodes) | **No.** Tied to Vijayawada's defining hydrological structure |
| The `--vw-sheet` / `--vw-channel` / `--vw-mark` palette | **No.** Every value is derived from a named local source |
| Anek + Noto + Martian Mono, chosen for Latin/Telugu parity | **No.** Only makes sense for a company operating in a Telugu-speaking commercial region |
| **The routing instrument itself — one intake, N labelled channels, situation chips** | **Yes.** Any company with several services and several audiences could use this |

That last row is the honest weakness. The *pattern* is portable; the *material* is not. It is defensible — a distinctive world executed on a sound structural idea is exactly what good design is — but nobody should claim the structure alone is unique to Via-We.

**Mitigation, already specified:** channel weights must encode real pillar maturity ([Creative Direction §4.5](../design/VIA-WE_CREATIVE_DIRECTION_v1.md)). A diagram whose proportions are true to *this* company's operating reality cannot be lifted; a diagram with seven equal channels can. Strengthened further in §4, R2.

**Score: 7/10.**

---

### 1.2 Instrument-copy test — *is this too close to Instrument?*

**No, and the adjacency risk lies elsewhere.**

What was taken from Instrument is structural and stated in the [teardown §6.3](../research/2026-08-01-agency-reference-teardown.md): one vocabulary doing several jobs (T1), claim before proof (T2), undisputable stats only (T3), intent-segmented conversion (T5), full-width narrative work rows (T6), uneven capability descriptions (T7), and the discipline of withholding (T8). None is visual. All survive a total change of palette, type and motion.

What was explicitly **rejected** from Instrument: the abstract positioning-sentence hero (fails for an unfamiliar category — [teardown §5.3 Q3](../research/2026-08-01-agency-reference-teardown.md)), the three-word taxonomy (Via-We has seven pillars and `PRODUCT.md:48` requires them preserved), and the award banner (rule 1).

**The real adjacency risk is not Instrument — it is the management-consultancy process diagram.** A labelled node-and-channel drawing sits uncomfortably close to a McKinsey-style framework slide or a generic org chart. That is the failure mode that would actually damage this design, and it received less attention in v1 than it deserved. Addressed in §4, R2.

**Score: 8/10** against Instrument. **6/10** against the consultancy-diagram adjacency before revision.

---

### 1.3 Conversion test — *does the site still convert?*

**The weakest area, and the revision pass changed it.**

What works: routing seven audiences above the fold; a phone number persistent in the header; email and phone in plain text; `leadType` preselected from the visitor's own choice; a mobile sticky call/WhatsApp bar on every pillar page.

**What was missing in v1:** the Intake routed people but the reveal ended in a single navigational link. A visitor who selected "I want to franchise my brand" was sent to a page — not offered a conversation. The site's only real conversion moment sat in Section 7, far below the fold. **Fixed in §4, R1.**

**What is still missing and cannot be fixed here:** there is **no urgency device and no proof.** No offer, no deadline, no metric, no testimonial, no client logo. That is not an oversight — `AGENTS.md` rules 1, 5 and 6 forbid every one of them until real, approved material exists. It is a genuine commercial cost of an honest site and Vijay should understand it as a trade he is making, not a gap the design failed to notice.

**Score: 6/10 before revision, 7/10 after.** It cannot score higher until real proof exists.

---

### 1.4 Mobile test — *will mobile feel first-class?*

**Yes, and it is the strongest part of the plan.**

The Intake is *re-composed* for mobile, not scaled — intake block full width, seven tappable rows ≥48 px, channel-weight rules intact, sequence shortened to 600 ms. The design baseline is **360 px**, below the prompt's 390 px. Hover states do not exist on touch; `:active` and `:focus-visible` carry all feedback. Pillar pages get a sticky call/WhatsApp bar. No horizontal scroll anywhere; no horizontal scroll sections at all.

Most importantly: the reference device for every performance measurement is a mid-tier Android on throttled 4G, not a desktop. Every budget in [Motion System §7](../design/VIA-WE_MOTION_SYSTEM_v1.md) is set against it.

**Honest caveat:** none of this has been rendered. It is a specification of mobile quality, not evidence of it. Milestone 4 is where the claim gets tested.

**Score: 8/10.**

---

### 1.5 Reduced-motion test — *does reduced motion remain premium?*

**Yes, by construction rather than by effort.**

Because the Intake renders complete and interactive by default and the 900 ms sequence only *reveals structure that is already visible*, reduced motion loses exactly one thing: 900 ms of ornament. No content, no route, no feedback, no function. The [substitution table](../design/VIA-WE_MOTION_SYSTEM_v1.md) is per-category, and the blanket `0.01ms` kill is explicitly banned.

This is the clearest benefit of the "one authored moment" discipline: with only one thing to substitute, the reduced-motion variant is trivially complete. A site with forty scroll reveals has forty substitutions to get right and will get some wrong.

**Score: 9/10.**

---

### 1.6 Asset-dependency test — *is the design dependent on missing assets?*

**No, and this was the primary design constraint rather than an afterthought.**

The repository contains **zero** brand assets, photographs, videos, logos, or icons, and rule 5 forbids generating imagery. The [teardown §6.2](../research/2026-08-01-agency-reference-teardown.md) established that all five reference sites are proof-led and therefore not copyable here.

| Dependency | Status |
|---|---|
| Photography | **None required.** The signature is drawn, not shot |
| Client logos | **None required.** No logo wall exists in the design |
| Metrics | **None required.** No stat block, no counters |
| Testimonials | **None required.** No rotator |
| Video | **None required.** Not permitted in V1 |
| Icons | ~20 authored SVGs — a design task, not an acquisition |
| **Logo / wordmark** | **Required.** The one hard asset blocker (G10 / Q-D1) |

Sections that depend on unavailable material — `/work`, the homepage evidence plate — are **conditional and simply not built** rather than filled with placeholders.

**Score: 9/10.** The single deduction is the wordmark.

---

### 1.7 Performance test

**Strong on paper, entirely unverified in practice.**

Budgets are specific and enforced in CI from Milestone 1: 120 KB gzipped homepage JS, **0 KB animation library**, ≤14 KB Intake SVG, ≤180 KB fonts, LCP ≤2.0 s, CLS ≤0.02, INP ≤150 ms, ≤8 concurrent animations, zero `will-change` at rest, and a degradation ladder for `saveData`, `2g` and `deviceMemory ≤ 2`.

The design is *structurally* cheap: no scroll listeners, no library, no canvas, no video, no third-party scripts before consent, three client islands on the homepage.

**The honest risk:** the 120 KB budget leaves roughly 30 KB after the Next.js App Router baseline. That is tight, and if it proves unrealistic the pressure will be to raise the budget rather than cut scope. [ADR-001](../decisions/ADR-001-via-we-animation-stack.md) is what makes it survivable — with 0 KB of animation library, the 30 KB belongs entirely to the application.

**Score: 7/10** — high confidence in the approach, zero measurement.

---

## 2. The remaining questions from §19

**Is the growth ecosystem visible or only stated?**
**Visible.** That is the entire thesis. Every reference site asserts an ecosystem in copy; this design draws it. It is also the single strongest argument for Concept B over Concept C, which explains legitimacy beautifully but leaves the visitor with seven listed services rather than one understood system.

**Is the signature element meaningful?**
**Yes** — it routes, and routing is the homepage's hardest job. It passes every exclusion in the prompt's §11.4 list (no orb, blobs, spinning logo, particle field, cursor-follower, gradient mesh, or loader). The strongest evidence that it is not decoration: **it works with JavaScript disabled.** A decoration that still functions without JS is not a decoration — it is content.

**Are there too many motion ideas?**
**No — and possibly too few.** One authored moment across twenty routes is deliberately austere. It correctly implements `craft-floor.md:13`, but it creates a real tension with the brief's stated ambition to sit beside Instrument, DEPT and Clay. See §3.2.

**Can a visitor understand the company in ten seconds?**
**Probably, and this needs testing rather than assertion.** In ten seconds a visitor should read "We build, brand and grow businesses", see seven labelled channels leaving one block, and conclude that one company does seven connected things. That is the design's core bet, and it should be tested on five real SME founders at Milestone 4 — not decided by a designer or a model.

**Is the design grounded in Vijay and Via-We's real business?**
**Grounded in what the repository documents — which is less than it should be.** The master handoff is not in the repository ([recon §19 Critical-1](2026-07-31-via-we-repository-recon.md)), so "the real business" is known only through `AGENTS.md` and `PRODUCT.md`. The direction was built to be robust to that gap — it depends on no claim, no metric and no asset — but robustness to missing information is not the same as being informed by it. **Q-B2 exists precisely because a designer cannot decide whether the delta reference is dignified; only Vijay can.**

**Is the plan maintainable?**
**Yes, with one named fragility.** Web standards, no library to upgrade, CSS that self-cleans, content in git under the approval gate `AGENTS.md` requires. The fragility: with no library gatekeeping what is possible, the ban on scattered reveals rests on review discipline. Mitigated by refusing to ship a generic animation wrapper (ADR-001 §5.5) and by the motion-regression test suite (Build Plan §8) — but a determined future contributor can still add an `IntersectionObserver`.

**Are animations hiding weak content?**
**No — but the diagram might be.** There is almost no animation to hide behind. The sharper version of this question: *is the Intake carrying load that content should carry?* If the seven pillar descriptions in Plate 02 turn out to be thin, the diagram becomes an elaborate navigation menu and the homepage says very little. **This is a real risk and it is content-dependent, not design-dependent.** It resolves when Q-B1 is answered and the pillar copy is written — which is why Milestone 5 requires Vijay's copy sign-off before the homepage is called done.

---

## 3. Weaknesses this critique will not resolve

Recorded rather than argued away.

### 3.1 Nothing has been seen

No screenshot, no render, no browser. The entire direction is a specification. `frontend-design/SKILL.md:43` asks for screenshot-based self-critique; `impeccable/reference/new-work.md` §7 requires a batched screenshot round and a fresh finish-reviewer. **Neither was possible** — this environment has no browser and no rendering surface. Milestone 4 is the first honest visual review, and the Build Plan treats it as a genuine decision point with a specified fallback.

### 3.2 The austerity tension

The brief asks for creative confidence comparable to Instrument, DEPT, NoGood, Clay and Huge. This direction proposes **one animation on the entire site.**

Both positions are defensible. `craft-floor.md` and `animate.md` both argue that restraint reads as authorship and that scattered effects read as AI-generated. But a client who has looked at five ambitious agency sites and then receives a site with one animation may experience that as under-delivery rather than as discipline.

**This tension is not resolvable in a document.** It is put to Vijay at Milestone 3, where the motion character is visible for the first time and changing it is still cheap. Naming it here is more useful than absorbing it silently.

### 3.3 The teardown had no browser

Four of twelve scoring dimensions — motion, typography, mobile, accessibility — are `n/a` rather than scored, and none of the prescribed viewports was used. This is stated in [teardown §2](../research/2026-08-01-agency-reference-teardown.md) with a remediation path. The structural findings are sound; the visual and motion findings do not exist.

### 3.4 The concept comparison is self-scored

The 110-point table in [Creative Direction §3.4](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) was written by the same author who wrote the concepts. Self-scored comparisons flatter the recommendation. The scores are argued and the reasoning is exposed, but they are not independent evidence. The multi-model review prompts (Build Plan §10) exist to supply that independence, and **Prompt 1 is deliberately instructed to be adversarial and to name the weakest decision.**

### 3.5 Concept B rests on an unverified cultural reading

Whether the Krishna-delta canal reference reads as dignified and commercial, or as agricultural and beneath a modern business, is a judgement a designer cannot make from outside the culture. **Q-B2 is a hard gate, not a nice-to-have.** If Vijay's answer is negative, the direction changes — see §4, R4.

---

## 4. Revision pass — one round, applied

Four changes made to the Phase 0 documents as a result of this critique.

### R1 — The Intake reveal now offers a conversation, not just a link
**Problem:** §1.3 — the routing instrument sent people to a page rather than to a person, and the only real conversion moment sat below the fold.
**Change:** selecting a situation now reveals **two** actions — the destination page *and* "Talk to us about this", pre-filling the contact form with the matching `leadType` from the 15-value taxonomy. Both are real links; both work without JavaScript.
**Applied to:** [Creative Direction §4.5](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) (signature definition), [Page Animation Map §2.1](../design/VIA-WE_PAGE_ANIMATION_MAP_v1.md) (CTA row), Build Plan Milestone 4 scope.
**Cost:** none — no new motion, no new JS, one additional link per channel.

### R2 — An explicit anti-flowchart discipline
**Problem:** §1.2 — the real adjacency risk is the consultancy process diagram, not Instrument, and v1 under-defended it.
**Change:** three binding rules added to the signature specification:
1. The drawing carries a **title block and a stated scale**, as a survey plate does. A slide diagram has neither.
2. Channels have **surveyed weights encoding real pillar maturity**. Seven equal channels are forbidden — equal weights would be both a lie and a flowchart.
3. **No arrowheads, no boxes-and-connectors, no decision diamonds, no orthogonal routing.** Channels are drawn linework with cartographic terminals; nodes are register marks.
**Applied to:** [Creative Direction §4.5](../design/VIA-WE_CREATIVE_DIRECTION_v1.md), Build Plan Milestone 4 definition of done.

### R3 — The austerity tension escalated rather than absorbed
**Problem:** §3.2 — a genuine conflict between the brief's ambition and the motion doctrine, which v1 resolved silently in favour of the doctrine.
**Change:** Milestone 3's review gate is now explicitly framed as *"approve the motion character, or ask for more"*, with Vijay as a named reviewer, and the trade-off stated in plain terms rather than as a design principle.
**Applied to:** Build Plan Milestone 3 review gate and §9 gate summary.

### R4 — A named fallback if the cultural reading fails
**Problem:** §3.5 — Q-B2 is a hard gate with no stated fallback. The existing fallback (H3, the typographic hero) discards the routing instrument, which is the design's strongest idea.
**Change:** recorded explicitly — **the routing instrument and the visual world are separable.** If the delta reference is rejected, the Intake survives re-skinned into Concept C's composing-room world: channels become column rules, nodes become register marks in a forme, the palette shifts to the document world. Function, routing, accessibility and performance are unchanged; only the material changes. **H3 remains the fallback for a failure of the instrument itself, not for a failure of the metaphor.**
**Applied to:** [Creative Direction §3.4](../design/VIA-WE_CREATIVE_DIRECTION_v1.md) and §12 approval gate, Build Plan Milestone 4 outcomes.

**No further revision.** Per the prompt's instruction: revise once, do not enter a polish loop.

---

## 5. Acceptance criteria — §23 checked

| Criterion | Status |
|---|---|
| References analysed rather than listed | ✅ 15 pages, per-page structural analysis, scored, with limits declared |
| Instrument received a deep teardown | ✅ [Teardown §5](../research/2026-08-01-agency-reference-teardown.md), five questions answered |
| Nothing was copied | ✅ [Teardown §8](../research/2026-08-01-agency-reference-teardown.md) |
| Three Via-We-specific concepts evaluated | ✅ Growth Thread, Distributary, The Register — each with 15 defined attributes |
| One concept recommended | ✅ Distributary, with a standing category-standard alternative |
| Hero has a clear thesis | ✅ Three directions scored; H1 recommended |
| Signature element is subject-specific | ⚠ **Partly.** The material is subject-specific; the routing pattern is portable (§1.1). Strengthened by R2 |
| Motion has a documented job | ✅ Every category in [Motion System §4](../design/VIA-WE_MOTION_SYSTEM_v1.md) carries a stated job |
| Page-level motion mapped | ✅ All 20 routes plus 5 not in the prompt's list |
| Mobile and reduced-motion versions defined | ✅ Per route, plus a substitution table |
| Performance budget exists | ✅ [Motion System §7](../design/VIA-WE_MOTION_SYSTEM_v1.md), CI-enforced from Milestone 1 |
| Animation-stack decision recorded | ✅ [ADR-001](../decisions/ADR-001-via-we-animation-stack.md), resolving recon C-6, C-7, C-8, C-11 |
| Asset dependencies explicit | ✅ [Creative Direction §8](../design/VIA-WE_CREATIVE_DIRECTION_v1.md), 20 items labelled |
| Unresolved business conflicts remain visible | ✅ 5 new questions raised; recon C-4, C-5, C-9, C-10, C-11 carried forward unresolved |
| Next build sequence is precise | ✅ 10 milestones, each with a definition of done and a review gate |
| No application code or dependency added | ✅ Verified — 7 Markdown files, nothing else |

---

## 6. Honest overall assessment

**What is strong:** the direction survives Via-We's actual constraints rather than wishing them away. Zero photography, zero metrics, zero logos, zero testimonials — and a design that needs none of them, because the [teardown](../research/2026-08-01-agency-reference-teardown.md) established that every reference site's confidence rests on proof assets Via-We does not have and may not invent. Leading with structure instead of trophies is not a compromise; it is the only honest move available, and it happens to be more distinctive than the alternative.

**What is weak:** nothing has been seen. The commercial case rests on clarity alone with no urgency device. The routing pattern is portable even though its material is not. And the whole direction depends on a cultural judgement — whether the delta reads as dignified — that only Vijay can make.

**What would change my mind:** if Vijay says the canal reference reads as agricultural rather than commercial, R4 applies and the world changes while the instrument survives. If five real SME founders look at the hero and cannot say what the company does, the concept fails and H3 is the fallback. **Both tests are cheap and both happen at Milestone 4, before the second section is built.**

**Readiness:** the Phase 0 deliverables are complete and internally consistent. Phase 1 is gated on twelve entry conditions (Build Plan §1), of which eight are hard blockers and three require Vijay specifically.
