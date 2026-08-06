# Phase 2 Creative Review — Via-We Homepage

**Role:** Creative Director review, as if presenting to Fortune 500 clients tomorrow.
**Date:** 6 August 2026
**Scope:** The live homepage as built at the end of Phase 2. No code was changed for this review.
**Method:** Full production build audited in-browser at 1600×900 and 390×844 — every section screenshotted at rest, mid-scroll, pinned, menu-open, keyboard-focused, and with `prefers-reduced-motion` on. Contrast ratios computed from the actual token values. Transfer weight measured against `next start` (not the dev server). Every number below is measured, not estimated.

---

## Verdict in one paragraph

This is a disciplined, coherent, genuinely premium *foundation* — the typography is confident, the blue system is the logo's own, the motion is restrained and physical, facts are honest, and nothing is broken. What it is not yet is *unmistakably Via-We*. Strip the wordmark and this could be any well-executed editorial agency site: the stock photography carries none of the company's world, the one ownable idea (the converging arcs) is played at a whisper, and the page asks Fortune 500-grade trust without showing a single artifact of real work. The bones deserve an A. The flesh is still placeholder.

**Top five, in order of what I would fix first:**

1. Placeholder imagery is the ceiling on everything (Critical)
2. No proof layer — the page asserts, never demonstrates (Critical)
3. The signature arcs are too faint to be a signature (High)
4. Mobile loses the "connected system" narrative device entirely (High)
5. Measured accessibility contrast failures in footer, bridges, and scrub states (High)

---

## 1 · Hero

### 1.1 The signature is a whisper — Severity: High

- **Why it hurts:** The converging arcs are the one idea on this page that no competitor could ship — the mark's own two curves meeting. At 2px strokes across a 1600px viewport they read as a draughtsman's construction lines, not a thesis. First-time visitors will register "big blue type, empty right half" and miss the connection moment entirely; the node where the curves meet — the entire brand story in one point — is 10px wide.
- **Best solution:** Commit to the moment. Scale the stroke weight up meaningfully (hairline is a choice; invisible is a mistake), let the cyan curve carry the mark's mesh texture as it approaches the crossing, enlarge the node into a deliberate focal event, and let the crossing sit where the eye lands after reading line four — currently it floats in the void right of "brand." Alternatively, place the actual extracted mark large in the composition and let the arcs extend *out of it*, so signature and logo become one system.
- **Visual reasoning:** Asymmetric editorial layouts work when the negative space is *charged* — held in tension by something with visual mass at its edge. Right now the right half is negative space with nothing to be negative *against*. The arcs must either own that space or surrender it to a tighter, centered composition.
- **Complexity:** Low–Medium (geometry and stroke values; no new architecture).
- **Expected impact:** High — this is the difference between "tasteful" and "memorable" on the single most-seen viewport.

### 1.2 Headline rag splits one thought across an awkward stack — Severity: Medium

- **Why it hurts:** "We build, / brand / & grow / businesses." breaks "brand & grow" — a single rhythmic unit — across two short lines. The two stubby middle lines create a ragged silhouette and read as list items rather than one sweeping sentence. The comma after "build," followed by a lone "brand" also invites a momentary misparse (brand-as-noun).
- **Best solution:** Three lines — "We build," / "brand & grow" / "businesses." — was measured to fit at the current scale with room to spare. Rebalance the type size upward slightly so three lines still fill the fold with the eyebrow.
- **Visual reasoning:** Display stacks earn their size when each line is a complete beat. Three strong beats > four uneven ones; the silhouette becomes a confident block instead of a staircase.
- **Complexity:** Trivial.
- **Expected impact:** Medium — subtle, but this is the first sentence of the company.

### 1.3 Night-city reel is tonally foreign inside the light hero — Severity: Medium

- **Why it hurts:** The second hero viewport drops a near-black megacity night plate into a paper-light section. It is the coldest, most anonymous image on the site — an Asian metropolis skyline that says "stock" to anyone who has seen a pitch deck, and says nothing about Vijayawada or Via-We. The dark rectangle also pre-empts the Pathway chapter's job of being *the* dark moment.
- **Best solution:** Replace with the warmest, most human slot in the media pipeline — the team-at-work image (or, when it exists, real footage of a Via-We shoot day). Keep the hover-video mechanic; it's good. Save darkness for the Pathway.
- **Visual reasoning:** Tonal sequencing is narrative sequencing. Light (invitation) → textured mid-tones (the work) → dark (the chapter) → light (resolution) reads as a story; a black hole in viewport two is a spoiler.
- **Complexity:** Trivial (slot swap).
- **Expected impact:** Medium.

---

## 2 · Typography

### 2.1 The system holds — one family, scale-driven, confident — no issue

Instrument Sans across display/body/label with hierarchy purely from scale and weight is the right call and is executed consistently. Body copy runs large as briefed. `text-wrap: balance/pretty` is in place. This is the strongest craft layer on the page.

### 2.2 The `label` style is doing four different jobs — Severity: Medium

- **Why it hurts:** Uppercase-tracked small caps currently mean: section eyebrow ("WHAT WE DO"), service index ("02 · BRAND & MARKET"), narrative bridge ("AN IDENTITY NEEDS A HOME ONLINE."), and the tagline moment ("YOUR DREAMS, OUR AIM"). Four semantics, one voice. The bridges — the *poetry* of the ecosystem — are visually indistinguishable from wayfinding chrome, so readers skip them; and the tagline, the most emotional line on the site, arrives in the same clothes as "WHAT WE DO."
- **Best solution:** Keep `label` for wayfinding only. Give bridges a distinct voice — sentence-case italic or a larger serif-free whisper in sea — and give the tagline a treatment nothing else uses (scale, spark, letter-spacing), so the closing moment lands as a moment.
- **Visual reasoning:** Typographic styles are semantic categories. When decoration and meaning share a style, meaning loses.
- **Complexity:** Low.
- **Expected impact:** Medium–High for storytelling legibility.

### 2.3 Small niceties — Severity: Low

Phone numbers would benefit from tabular figures (they sit in menus/footers as data); the em-dash clauses in promises are set flush (fine) but inconsistently spaced across copy; "0X ·" indices would sharpen with hair-space handling. Polish-tier.

---

## 3 · Spacing, white space & scroll pacing

### 3.1 The Ecosystem is a four-viewport flat spot — Severity: High

- **Why it hurts:** From the hero reel to the Partner photos there are roughly four full viewports of text on paper with no imagery, no tonal shift, and five structurally identical rows. The rhythm goes: image → text → text → text → text → text → image. Premium scroll experiences breathe in alternation; this stretch reads as a beautifully typeset PDF. By row four (Hire), the layout pattern is fully predictable and attention drops exactly where the least-understood services live (Hire, Franchise).
- **Best solution:** Break the meter without breaking the system: give one row (Brand & Market — the flagship) a media moment or an inverted layout; or introduce a thin full-bleed image band between rows 3 and 4; or let the paper deepen progressively (`paper` → `paper-deep`) as the system builds toward the dark Pathway. Any one of these restores pulse.
- **Visual reasoning:** Repetition communicates system — but five identical stanzas is a spreadsheet, not a rhythm. One deliberate violation of the pattern makes the pattern itself visible and felt.
- **Complexity:** Medium.
- **Expected impact:** High — this is the section that must sell the ecosystem thesis.

### 3.2 Row-internal dead space in Ecosystem — Severity: Low

Scope lists (6 rows ≈ 300px) are consistently shorter than their left columns, leaving a soft void at the bottom-right of each service; the bridge caption then floats alone in a ~200px band. Tightening the bridge into the grid (aligned under the scope column, or on the spine itself) would close the gaps.

### 3.3 Overall pacing arc is sound — no issue

Hero (2 viewports) → services (long, flat — see 3.1) → proof-of-model (Partner) → the pinned dark chapter (6 × 85% is well-judged; each stage gets enough scroll to register) → process → closing. The macro shape is right; only the second act sags.

---

## 4 · Visual hierarchy

### 4.1 Partner repeats the Ecosystem's headline argument — Severity: Medium

- **Why it hurts:** "Five services. One connected system… not five vendors" (Ecosystem intro) and "Fewer handoffs… normally split across different vendors" (Partner) are the same claim twice within two scroll minutes, at the same visual register. On a page this economical, a repeated beat is very visible — and it spends the slot that Vijay's actual ideology (the founder's conviction, the client-handling philosophy, the origin) should own.
- **Best solution:** Reframe Partner as the *belief* section — why Via-We works this way, in first person conviction ("You explain it once" is already the seed) — and push the vendor-gap mechanics fully into the Ecosystem intro. Same layout, sharper role.
- **Visual reasoning:** Each section should answer a different question: What (Ecosystem), Why/Who (Partner), How it feels (Pathway), How we run (Approach), Now what (Contact). Two "What"s and no "Who" is the current shape.
- **Complexity:** Low (copy only).
- **Expected impact:** Medium–High for storytelling.

### 4.2 Partner lacks an eyebrow — Severity: Low

Every other light section announces itself ("WHAT WE DO", "HOW WE WORK" via nav anchor). Partner starts cold with "Fewer handoffs." — the one section without a wayfinding label, which slightly orphans it in the page grammar.

---

## 5 · Motion hierarchy & animation timing

### 5.1 One dynamic for everything — Severity: Medium

- **Why it hurts:** Reveal (masked rise), Rise (fade-up), and Words (scrub-brighten) fire at the same durations (0.9–1.15s), same ease, in every section. The system is admirably consistent — and therefore flat: nothing accelerates, nothing lands harder than anything else. The motion hierarchy the brief demanded (Hero → transitions → reveals → micro) exists structurally but not *dynamically*; only the Pathway pin and the hero arcs rise above the baseline.
- **Best solution:** Keep the single ease (right call) but introduce two or three amplitude tiers: hero-tier moments get longer, larger-travel choreography; standard content keeps current values; micro-interactions tighten to 150–300ms. Let the Thread and the arcs share a "drawing" language so the connection motif recurs — right now they are cousins who've never met.
- **Visual reasoning:** Rhythm needs dynamics — all-mezzo-forte is monotone. The shared easing already guarantees family resemblance; amplitude can safely vary.
- **Complexity:** Low–Medium.
- **Expected impact:** Medium.

### 5.2 Words scrub leaves paragraphs half-read at rest — Severity: High

- **Why it hurts:** The scrub window (`start 0.9 → end 0.55`) means any paragraph sitting in the lower half of the viewport rests at partial opacity — and dimmed words measure **1.34:1** contrast. Screenshots at natural stopping points show the Partner conviction line and the Contact promise cut off mid-sentence in near-invisible text. Users who stop scrolling (most users) see broken copy; low-vision users may never resolve it.
- **Best solution:** Tighten the window so text completes its reveal by the time it reaches the comfortable reading zone (~65–70% viewport), raise the dim floor from 0.14 to a legible resting value, and reserve the effect for one or two hero paragraphs rather than every lead on the page.
- **Visual reasoning:** A reveal that regularly rests in its unrevealed state isn't a reveal — it's a legibility tax. The effect is lovely *in motion*; it must fail safe *at rest*.
- **Complexity:** Low.
- **Expected impact:** High — affects reading of nearly every persuasive paragraph.

### 5.3 Pathway stages cut rather than travel — Severity: Medium

- **Why it hurts:** Inside the pin, each stage swap is a discrete remount (fade+rise on a keyed container). The scrub feels stepped: five hard cuts inside one continuous gesture, with imagery replaced wholesale — no shared-element continuity, no sense that Set up *becomes* Brand. For the section whose thesis is "the work stays connected," the motion says the opposite.
- **Best solution:** Continuous choreography: progress-driven crossfade/parallax between stage plates, the stage name sliding out as the next slides in, the progress bars already do this well. Even a two-layer crossfade (outgoing image under incoming) would sell continuity.
- **Visual reasoning:** In a scrubbed timeline, the user's finger *is* the timeline; discrete state jumps break the physical contract that pinning establishes.
- **Complexity:** Medium–High (the one genuinely fiddly recommendation here).
- **Expected impact:** Medium–High — it's the centerpiece section.

### 5.4 Timing values are otherwise well-judged — no issue

Entrances 0.7–1.15s on a strong ease-out, exits faster than enters in the menu, hover transitions at 300–700ms, reduced-motion handled thoroughly (verified: arcs render static and complete, scrub text renders full, pin disables). This layer is professional.

---

## 6 · Logo usage

### 6.1 The mark appears once, at 28 pixels — Severity: Medium

- **Why it hurts:** The finest brand asset — a genuinely good mark with mesh texture and directional story — exists on the page solely as a favicon-scale header icon that *disappears on scroll*. The footer, the brand's sign-off, is entirely typographic; the tagline lockup never appears; the mesh texture (the "network" in the brand story) appears nowhere in the visual system.
- **Best solution:** Give the mark one large, considered appearance — the footer brand block is the natural home (mark + wordmark + tagline as the closing signature), and consider the mesh as a texture motif at low opacity within the dark chapter. Do not scatter it; one big moment plus the header is enough.
- **Visual reasoning:** Identity systems need one canonical, generous presentation of the mark per page so its details register; a 28px cutout teaches nobody the logo.
- **Complexity:** Low (asset exists; raster resolution supports ~600px).
- **Expected impact:** Medium — brand recall.
- **Note:** Vector masters (blocker B1) remain the real constraint; the raster cutout has a faint unmix halo at large sizes on dark. Push for the .ai/.eps files before any dark-surface hero usage.

---

## 7 · Imagery — Severity: Critical

- **Why it hurts:** Every photograph is recognizable Western-coworking stock: Scandinavian offices, a US boardroom, an anonymous megacity. For a Vijayawada business-growth company whose brief explicitly demands "real office, real team, real projects," the imagery actively *contradicts* the story — a Fortune 500 reviewer's first scroll says "this company has never photographed itself." The slot architecture built in Phase 2 (named slots, honest alt text) is exactly right; the stand-ins filling it are the single biggest gap between this site and the Instrument/Clay tier, and no amount of motion or typography can compensate.
- **Best solution:** A one-day shoot in Vijayawada: the office, Vijay in conversation, a real client shoot in progress, the edit suite, a real storefront launch. Ten good frames fill every slot. Until then, bias remaining stand-ins toward Indian business contexts (they exist on stock platforms) so the world at least rhymes with the company.
- **Visual reasoning:** Photography is the only layer users implicitly read as *evidence*. Type and motion say "we have taste"; photos say "we exist." Right now the evidence layer testifies for someone else.
- **Complexity:** Low technically (slots ready) — the work is logistics, not code.
- **Expected impact:** Critical — the largest single uplift available to this site.

---

## 8 · Section transitions

### 8.1 Light→dark chapter entry is an unmarked cliff — Severity: Medium

Partner (paper-deep) hard-cuts to the near-black Pathway with no transitional device; the exit (Pathway → full-bleed approach band image) is similarly abrupt on the other side. The dark chapter would land harder with a threshold — a deepening gradient in the last viewport of Partner, the Thread motif diving down into the dark, or the pathway heading pre-announced in the light. **Complexity:** Low–Medium. **Impact:** Medium — chapter-entry is a signature moment in the ExoApe grammar this site descends from.

### 8.2 Contact → Footer — no issue

The scrimmed corridor into flat ink footer reads as one continuous closing environment. Good.

---

## 9 · CTA placement & conversion

### 9.1 A CTA desert through the middle — Severity: Medium

- **Why it hurts:** Primary actions exist at the hero and the closing — roughly nine viewports apart. A visitor convinced at "Franchise Solutions" or moved by the Pathway has no nearby action; on mobile the gap is longer. The header offers no persistent action either (the pill is navigation only).
- **Best solution:** One quiet mid-page action (e.g., a single "Start a conversation" at the end of the Ecosystem or Pathway close), and/or a compact WhatsApp affordance in the persistent pill. Resist scattering — one addition is enough.
- **Complexity:** Trivial.
- **Expected impact:** Medium–High for enquiry volume.

### 9.2 The closing offers three parallel actions — Severity: Low

WhatsApp (primary), phone, and full email address sit in one row; the email string is the visually longest element and competes with the primary. Hierarchy would sharpen with WhatsApp dominant, call secondary, and email demoted to the footer it already lives in. Also: the WhatsApp link opens in the same tab — navigating away from the site entirely; it should spawn a new context. **Complexity:** Trivial.

### 9.3 No capture fallback — Severity: Medium

Every path (WhatsApp, tel, mailto) depends on the visitor's apps and willingness to switch context. There is no on-page form, no callback request, no low-commitment capture for the hesitant — which for B2B service buyers is a real leak. Phase 3 concern, but it belongs on the record.

---

## 10 · Service storytelling

### 10.1 The thesis is right; the bridges are buried — Severity: High (bundled with 2.2, 12.2)

The feeds-order, the promises, and the scope lists are truthful and well-written — the strongest copy on the site. But the connective tissue (bridges + Thread) that turns five services into *one road* is nearly subliminal: 2.57:1 captions, a 1px spine, static nodes, and on mobile — nothing at all. The storytelling exists in the DOM and dies in the render. Fix contrast, give the spine presence, and the section's argument becomes visible instead of implied.

### 10.2 Franchise ends the flow without a destination — Severity: Low

The last service has no bridge (correct — nothing follows), but the flow simply stops; the road metaphor wants a terminus — one line handing off to the Pathway chapter ("Here's what that road feels like—") would close the loop and set up the dark chapter.

---

## 11 · Footer

### 11.1 Functionally complete, brand-silent — Severity: Medium

All verified facts present and correct (address verbatim per intake rules, legal lockup, socials, nav echo) — but as a brand moment it's a business card. No mark, no tagline, no closing gesture. This is where the one generous logo presentation belongs (see 6.1). **Complexity:** Low. **Impact:** Medium.

### 11.2 Footer label contrast fails — folded into §14.

---

## 12 · Navigation

- **Works:** ink bar over the light hero; hand-off to the self-surfaced pill; full-screen menu with staggered rise, Escape handling, focus-visible rings, scroll-lock; anchors via Lenis.
- **12.1 No current-section state — Severity: Low.** Neither the top nav nor the menu indicates where you are on the page; a premium single-page site usually acknowledges position (active anchor state or progress cue).
- **12.2 Menu image is another stranger — Severity: Low.** The overlay's editorial photo is a stock creative-at-desk; when real photography arrives, this slot is the cheapest brand win on the site.
- **12.3 The pill obscures content edges on mobile — Severity: Low.** At 390px the floating pill overlaps the pathway heading and scope rows at certain scroll positions (observed in screenshots); a few px more clearance or a scrim behind the pill would settle it.

---

## 13 · Mobile experience

### 13.1 The connected-system device vanishes — Severity: High

- **Why it hurts:** `Thread` and its nodes are `hidden md:block` — on phones the Ecosystem is five stacked text blocks with faint captions between them. The entire "each service feeds the next" visual argument — the point of Phase 2 — is desktop-only, while the audience most likely to arrive from Instagram/WhatsApp is on a phone.
- **Best solution:** A mobile-native version of the spine: a slim left rail inside the content column, or connective strokes between cards, or make the bridges themselves the mobile device (larger, sea-colored, with a drawn tick of line above each). The metaphor must survive the breakpoint.
- **Visual reasoning:** If the story only exists at 1024px+, it isn't the story — it's a desktop decoration.
- **Complexity:** Medium.
- **Expected impact:** High for the primary audience.

### 13.2 Otherwise a graceful degrade — no issue

Hero type scales well; pathway unpins to a clean stacked chapter; no horizontal overflow (verified); images hold aspect ratios; touch targets on primary CTAs are generous. Quiet text-links ("See what we do") sit near the 24px height floor — acceptable, worth a nudge of padding.

---

## 14 · Accessibility (measured)

**Passing and notable:** semantic landmarks; heading order; alt text everywhere (honest, descriptive); `aria-label` on scrubbed paragraphs; `aria-hidden` on decorative video/SVG/progress; Escape closes menu; body scroll-lock; visible sea focus ring (verified in screenshot); thorough `prefers-reduced-motion` (verified: static arcs, full text, no pin); noscript fallbacks.

**Failures / risks (WCAG AA, measured against actual tokens):**

| Pair (usage) | Measured | Requirement | Severity |
|---|---|---|---|
| stone on ink — footer/menu labels, closing line | **3.86:1** | 4.5:1 (small text) | High |
| stone/70 on paper — ecosystem bridge captions | **2.57:1** | 4.5:1 | High |
| Words dim state during/at-rest scrub | **1.34:1** | 4.5:1 | High (see 5.2) |
| stone on paper-deep — Partner secondary copy | **3.87:1** | 4.5:1 | Medium |
| cloud/50 on ink — pathway chapter heading | **5.13:1** | passes 4.5, thin at this size | Low |
| stone on paper — body-muted (large text) | **4.29:1** | 3:1 large / 4.5 small | Passes at lead sizes; avoid at small sizes |
| sea focus ring on paper / ink | **3.92 / 4.22** | 3:1 non-text | Passes |

- **Best solution:** One token pass: a `stone-bright` for dark surfaces (~#8FA0B4 region), lift bridge captions to full sea or stone, raise the scrub floor. No layout changes required.
- **Complexity:** Trivial–Low.
- **Expected impact:** High — these are the kind of findings a Fortune 500 procurement accessibility pass will flag verbatim.

---

## 15 · Performance (measured, production)

- **Good:** fully static prerender; first document 93KB; fonts subset+swap (29KB); first-viewport imagery is just the 36KB mark; below-fold images lazy via `next/image` with correct `sizes`; video `preload="none"`; transform/opacity-only animation; zero console/page errors; load event ~110ms local.
- **15.1 Three animation runtimes — Severity: Medium.** Motion (framer) + GSAP/ScrollTrigger + Lenis together dominate the ~748KB uncompressed (~250KB gz) script payload. GSAP exists for one pin; Lenis for smooth scroll; Motion for everything else. Each is justified in isolation; together they are the page's entire weight problem. **Solution path (Phase 3):** either move the pin to Motion's scroll primitives or move reveals into CSS/scroll-driven where possible — one runtime should own scroll. **Impact:** Medium (mid-tier Android is the audience's real device).
- **15.2 LCP note — Low.** LCP is now the hero headline (font-gated, fast). The night reel image below the fold is `sizes`-correct. No CLS risks observed; aspect ratios everywhere. Keep it this way when imagery is replaced.
- **15.3 Missing metadata polish — Low.** No OG image, no `metadataBase`, no LocalBusiness structured data — cheap trust/perf-adjacent wins for a local-market business, currently absent.

---

## 16 · Brand consistency

- Blues are used with discipline (spark only on dark, brand only as fill/text on light — correct micro-accent logic transplanted from the old vermilion rule). ✔
- Single family, single ease, one grammar of eyebrows/rules/display — coherent. ✔
- **16.1 The mesh is missing — Severity: Low–Medium.** The mark's most distinctive feature (the network texture meaning *connection between Via-We and the client*) never re-appears in the system — flat hairlines stand in for it. As a texture accent (Thread, node fills, dark-chapter background at low opacity) it would make the system unmistakably Via-We's rather than generically "premium blue."
- **16.2 Stock imagery is the largest brand inconsistency** — covered in §7; it out-votes every token on the page.

---

## Scores

| Category | /100 | Justification (one line) |
|---|---|---|
| Brand Identity | **74** | Palette, mark-derived motion and honest voice cohere; identity still rides on color+type alone — imagery and mesh absent. |
| Storytelling | **78** | Real arc (what→why→journey→how→act) built from verified facts; weakened by a repeated beat, buried bridges, and no proof chapter. |
| Motion | **72** | Clean primitives, correct ease, real pin, thorough reduced-motion; but uniform dynamics, stepped pathway, and a signature played at 2px. |
| Visual Design | **76** | Disciplined editorial spacing and hierarchy; hero right-void, four-viewport flat spot, and a brand-silent footer hold it back. |
| Typography | **80** | The strongest layer — confident scale on one family; loses points to the four-job label style and hero rag. |
| Interaction | **75** | Hover reels, magnetic CTA, pill hand-off, Escape/focus discipline; small quiet-link targets, same-tab WhatsApp, no location state. |
| Conversion | **68** | WhatsApp-primary is the right local call; mid-page CTA desert, three-way closing split, and zero capture fallback leak intent. |
| Trust | **55** | Verified address/contacts/claims and no fake proof (correct under policy) — but nothing on the page *demonstrates*; belief is requested, not earned. |
| Performance | **82** | Static, light-first-paint, error-free, CLS-safe; three overlapping animation runtimes are the one structural weight. |
| Accessibility | **70** | Genuinely thorough motion/semantics/focus work undercut by measured AA contrast failures in footer, bridges, and scrub rest-state. |
| Originality | **66** | The arcs+node and feeds-bridges are ownable seeds; the surrounding grammar (editorial stack, rule-lists, pinned dark chapter) is the era's shared template, executed well. |

**Overall: 72/100** — a credible premium foundation two decisive moves (real imagery, louder signature) away from the tier it aims at.

---

## The honest question

**"If Instrument, Clay and DEPT reviewed this homepage today, what would they criticize first?"**

The photography — within the first scroll, before anyone mentions type or motion. They would say: *"You've typeset a promise about Vijayawada and illustrated it with Copenhagen. Every frame on this page testifies for a company that isn't yours; until the imagery is Via-We's own office, own shoots, own clients, this is a beautifully dressed empty room."* And they'd be right — it's the one gap taste cannot close, only a camera can.

Second — and almost immediately — they would go after restraint mistaken for presence: *"You had one idea that belongs to you — two curves meeting — and you drew it at two pixels. The mark's mesh, the tagline, the node where everything connects: these are whispered where they should be argued. Everything else on this page, any of us could have shipped; the parts only you could ship are the quietest things on it."*

The uncomfortable summary of both: **the site's craft is at 90; its evidence and its nerve are at 55.** Phase 3 is not more polish — it is a camera, a louder signature, and proof.
