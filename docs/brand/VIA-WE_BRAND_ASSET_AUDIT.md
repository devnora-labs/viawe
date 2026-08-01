---
status: current
type: brand asset audit
created: 2026-08-01
last_batch: 2026-08-01-company-legal-contact
---

# Via-We — Brand Asset Audit

**Purpose:** the authoritative status of every Via-We brand asset — what exists, what is production-ready, and what blocks the creative gate.

**Last updated:** 2026-08-01 from Batch 01
**Rule:** an asset is production-ready only when a genuine file exists in a usable format. A *decision* about an asset is not the asset.

---

## 1. Headline status

> ## ⛔ LOGO NOT PRODUCTION-READY — blocker B1 stands
>
> Batch 01 confirms **"Logo is final: Yes"** — the design is settled and will not change.
>
> A **raster reference has now been supplied** (§2a). It is genuinely valuable: it settles what the artwork actually says. **It does not clear B1** — a PNG cannot be a production master.

| | |
|---|---|
| Final official logo supplied | ✅ **YES** — as a raster reference |
| Raster reference supplied | ✅ **YES** — `via-we logo name.png`, 3281 × 1875, RGBA |
| Logo design approved | ✅ **YES** — final, must remain unchanged |
| Exact wording confirmed | ✅ **YES** — `VIA-WE Services Pvt. Ltd.` / `YOUR DREAMS OUR AIM` |
| **Production editable vector supplied** | ❌ **NO** |
| **Suitable for final separable-path animation** | ❌ **NO** |
| **Vector / source-file blocker** | ⛔ **OPEN** |
| Creative gate | **BLOCKED** — on the vector, nothing else |
| Deadhead Bold web licence | **UNKNOWN** |

---

## 2a. The supplied artwork — what it actually shows

**File:** `private/intake/inbox/2026-08-01-company-legal-contact/brand-source/via-we logo name.png` (Git-ignored)
**Class:** `RASTER-REFERENCE` · 3281 × 1875 px · 8-bit RGBA, alpha present · 1.75 : 1 · 360 KB

### Observed composition

| Element | What is present |
|---|---|
| Symbol | A layered mark: an upward sweeping curve, a counter-curve forming a rounded form, and a **triangular faceted mesh texture** on the lower-left sweep — matching the guideline's stated "upward curve / WE curve / connection mesh" |
| Wordmark | **`VIA - WE`** set large, with **`Services`** and **`PVT.LTD`** stacked to its right, all in dark navy |
| Rules | Two horizontal rules bracketing the tagline |
| Tagline | **`YOUR DREAMS OUR AIM`** — all capitals, wide letter-spacing, **no comma** |
| Palette | Dark navy wordmark; mid-blue and cyan gradients in the symbol — consistent with the guideline range |

### Three findings that change open questions

All three were logged as conflicts when first observed. **Vijay resolved all three on 2026-08-01.**

**Finding 1 — no "360" in the artwork. ✅ Intentional.** The lockup reads `VIA-WE Services Pvt. Ltd.` "360" is a **strategic and visual concept, never a written name**. This is not a missing-logo problem and no 360 logo is expected. **K-7 resolved.**

**Finding 2 — the tagline has no comma. ✅ Correct.** `YOUR DREAMS OUR AIM` is the exact approved tagline, everywhere — logo and written copy alike. The earlier comma form is withdrawn. **K-2 resolved.**

**Finding 3 — "Services Pvt. Ltd." is in the lockup. ✅ Deliberate.** It is intentionally part of the approved lockup and **may remain visible in the website header**. No suffix-free variant is required. **K-8 resolved.**

### What this file can and cannot be used for

| Use | Verdict |
|---|---|
| Design reference — confirming composition, wording, proportion, palette | ✅ Yes, and it is the best reference currently available |
| Colour sampling for the working palette | ⚠️ Indicative only; the guideline hex values remain authoritative |
| Website header / footer | ❌ Raster; will not scale cleanly, cannot recolour for dark backgrounds |
| Favicon | ❌ Wrong aspect (1.75 : 1); no square symbol-only variant exists |
| **The logo-led animation in [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md)** | ❌ **Impossible.** The direction animates the curves and mesh *separately*. A flattened bitmap has no separable paths |
| Production master | ❌ Governance policy §7 forbids treating raster as an official vector |
| Source for tracing a vector | ❌ **Prohibited** by ingestion prompt §1.4 — tracing would silently alter the approved mark |

---

## 2. Production logo readiness

Required set per the ingestion prompt §4.6, and current status:

| # | Required file | Supplied | Needed for |
|---|---|:--:|---|
| 1 | `symbol.svg` | ❌ | Favicon, compact mobile header, animation source |
| 2 | `full-horizontal.svg` | ❌ | Desktop header, footer |
| 3 | `full-horizontal-white.svg` | ❌ | Dark sections, photography overlays |
| 4 | `one-colour.svg` | ❌ | Print, fax-grade reproduction, single-colour contexts |
| 5 | `wordmark.svg` | ❌ | Contexts where the symbol is too small to read |
| 6 | `favicon.svg` | ❌ | Browser tab |
| 7 | Original AI / EPS / editable source | ❌ | Any future variant; the master |

**0 / 7 supplied.**

### Why a raster file cannot substitute

Two raster files are now known: `via-we logo name.png` in the batch (§2a), and a larger `via we logo .png` outside the repository. **Neither can be used as a master** because:

- Governance policy §7 forbids treating raster artwork as an official vector
- The approved creative direction ([ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md)) animates the logo's individual curves and mesh — that requires **separable vector paths**, which a flattened bitmap does not have
- It cannot scale to a retina header or down to a favicon without visible degradation
- Recolouring for dark backgrounds is impossible without the source

**Tracing the raster to fake a vector is explicitly prohibited** by the ingestion prompt §1.4 and would silently alter the approved mark.

### If no vector exists anywhere

That is itself the finding, and it changes the plan rather than blocking it indefinitely: the mark must be **redrawn from the guideline by a designer**, as a separately commissioned task with its own timeline and its own approval. Better established now than discovered at prototype.

---

## 3. Brand identity — Batch 01

| Element | Value | Status |
|---|---|---|
| **Official brand name** | **VIA-WE Services Pvt. Ltd.** | ✅ **PUBLIC-READY** — Vijay + artwork agree |
| "360" in the name / logo / wordmark / tagline | **Never** | ✅ Settled |
| "360" as a strategic concept | Complete, connected, end-to-end service coverage through one company | ✅ `[CONFIRMED]` |
| Legal *registered* name spelling | "Private Limited" vs "Pvt. Ltd." | `[VERIFY]` — **K-5**, needs the incorporation certificate |
| **Tagline — everywhere** | **`YOUR DREAMS OUR AIM`** — no comma, ever | ✅ **PUBLIC-READY** — Vijay + artwork |
| Tagline sits inside the logo lockup | Yes | `[VERIFY]` |
| Logo design final | Yes — **must remain unchanged** | ✅ Confirmed |
| Legal suffix in the lockup | Intentionally present; **may show in the header** | ✅ Confirmed — K-8 resolved |

### Naming rules — binding

- **Everywhere — header, footer, copy, metadata:** **VIA-WE Services Pvt. Ltd.**
- **Never write:** `Via-We 360` · `VIA-WE 360` · `Via-We 360 Services Pvt. Ltd.`
- **"360" appears only as a concept in prose** — e.g. "a 360-degree business execution company" — never as part of the name, logo, wordmark or tagline
- **Do not claim** Via-We performs literally every possible service
- The legal *registered* spelling remains `[VERIFY]` pending the incorporation certificate (K-5)

---

## 4. Colour

From the brand guideline `[CLIENT-SOURCE]`, unchanged by Batch 01:

`#1B4B77` · `#3582AD` · `#3B8EC0` · `#4AD3F3`

**Assessment unchanged:** four blues in a narrow range. A coherent brand signal but a thin working palette — no neutral ground, no text colour, no state colours for error, success or focus. A working palette must be **derived** from these with contrast verified, **without inventing a new brand colour**. Tracked as T7 in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md).

---

## 5. Typography

| Face | Role | Status |
|---|---|---|
| **Deadhead Bold** | Display, per guideline | **⛔ BLOCKED for web — licence unknown** |
| Roboto Medium | Supporting, per guideline | ✅ Usable — open licence, web-available |

**Batch 01 asked and did not resolve it.** `Deadhead Bold web licence: Unknown`.

Three outcomes, each with a different consequence:

1. **Licence permits web embedding** → self-host, subset, proceed
2. **Licence is logo-only** → Deadhead stays inside the logo artwork; the website needs an approved substitute display face — **a brand decision by Vijay, not a developer's**
3. **No licence can be located** → treat as (2)

**Do not copy or distribute font files through tracked repository files** under any outcome.

**Website typography may be modernised:** *Not confirmed.* Until it is, no substitute may be chosen even if the licence fails.

---

## 6. Conflicts affecting brand

| # | Conflict | Source A | Source B | Resolution needed |
|---|---|---|---|---|
| ~~**K-1**~~ | ~~Public brand name~~ | — | — | ✅ **RESOLVED 2026-08-01** — **VIA-WE Services Pvt. Ltd.** |
| ~~**K-2**~~ | ~~Tagline punctuation~~ | — | — | ✅ **RESOLVED** — `YOUR DREAMS OUR AIM`, no comma, everywhere |
| ~~**K-7**~~ | ~~"360" absent from the logo~~ | — | — | ✅ **RESOLVED** — intentional; "360" is a concept, not a name |
| ~~**K-8**~~ | ~~Legal suffix in the header~~ | — | — | ✅ **RESOLVED** — intentionally in the lockup; may show in the header |
| **K-5** | Legal *registered* name spelling | "Via-We Services Private Limited" | "Via-We Services Pvt. Ltd." | **Still open.** The brand/lockup wording is settled; the registered spelling needs the incorporation certificate |

Full conflict register: [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md) §9.

---

## 7. Other brand assets

| Asset | Status |
|---|---|
| Logo meaning — growth curve, WE curve, connection mesh | ✅ `PUBLIC-READY` as narrative — the one brand fact that is publishable |
| Office photography | Available per project intake; **not approved**, not supplied. Batch 05 |
| Team photography | Vijay's photograph available; **not approved for publication** |
| Client logos | ⛔ Permanently blocked until per-client permission exists |
| Icon set | Not created. Authored SVG set is a design task, downstream of B1 |
| Compact mobile logo variant | ❌ Required by the tagline lockup at small sizes — see §8 |

---

## 8. A finding the prototype must absorb

Batch 01 states the tagline sits **inside** the logo lockup, and recommends **not** repeating it beside the logo.

That has a direct mobile consequence, recorded here so it is not discovered late:

> The approved lockup carries **`VIA-WE Services Pvt. Ltd.`** *and* **`YOUR DREAMS OUR AIM`** — a wordmark, a legal suffix and a tagline in one horizontal 1.75 : 1 asset. **It will not stay legible in a 360 px header.** Batch 01 anticipates this and calls for a compact symbol or wordmark variant — **which does not exist yet.**

So the header needs **two** approved logo variants, not one: a full lockup for desktop, and a compact symbol or wordmark for mobile. Both are missing. **Neither may be created by tracing or cropping the raster.**

---

## 9. What unblocks the creative gate

In order:

1. **Production vector files** — item 7 (editable source) alone would allow the rest to be exported
2. **A compact mobile logo variant**, approved
3. **Deadhead Bold licence answer**, and a substitute face approved if it fails
4. **K-1 and K-2 resolved** — the brand name and tagline that actually appear on the site

Until 1 is satisfied, no logo-led prototype can be built, no creative gate can pass, and no build can start. **Everything queues behind the vector files.**
