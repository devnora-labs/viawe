---
status: current
type: brand-source discovery review
created: 2026-08-02
batch: 2026-08-01-company-legal-contact
---

# Via-We — Brand-Source Discovery Review

**Filed under the Batch 01 date** to keep it beside the batch it extends. **Discovery performed 2026-08-02.**
**Branch:** `docs/viawe-figma-vector-source-lead`
**Scope:** locating an editable production vector for the Via-We logo — blocker **B1**.

---

## 1. Outcome

> ## 🔍 A STRONG VECTOR-SOURCE LEAD — **B1 REMAINS OPEN**
>
> Via-We design work was produced in, or passed through, **Figma**. That is the most promising recovery route found so far.
>
> **It is a lead, not a vector.** Nothing discovered here is an editable logo master.

| | |
|---|---|
| Symbol-only raster reference | ✅ **FOUND** — now held privately |
| Full-logo raster reference | ✅ **FOUND** — already held privately |
| **Confirmed editable logo vector** | ❌ **NO** |
| **Figma source lead** | ✅ **FOUND** — unconfirmed |
| **B1** | ⛔ **OPEN** |

---

## 2. Reference coverage — improved

| Asset | Path (all Git-ignored) | Properties |
|---|---|---|
| Full lockup | `private/…/brand-source/via-we logo name.png` | **3281 × 1875**, 8-bit **RGBA**, alpha present, 1.75 : 1 |
| **Symbol only** | `private/…/brand-source/via-we-symbol-reference.png` | **5773 × 4329**, 8-bit **RGB — no alpha**, 1.33 : 1 |

**Both are raster. Neither clears B1.**

### One property worth recording

The symbol reference is **RGB without an alpha channel** — it carries a baked background rather than transparency. The full lockup does have alpha. So even as a *reference*, the symbol file cannot be placed over a coloured or dark surface without manual masking, and it cannot be used as-is for a favicon or a dark-mode header.

This does not diminish its value as a reference — it shows the mark in isolation, which the lockup does not, and it is the best available guide to how the curves and mesh relate. It simply cannot be pressed into service as an asset.

---

## 3. External design documents discovered

Located outside the repository during the search. **Neither was copied into tracked content.**

### 3.1 `VIA WE BRAND GUIDELINES.pdf` — no vector

| Property | Finding |
|---|---|
| Size / pages | ~413 KB, **9 pages** |
| Image XObjects | 9 |
| Embedded JPEG streams | 9 |
| **Vector path operations** | **0** |
| Font objects | 0 |

**The brand guideline is itself a raster export** — nine placed JPEGs with no live text and no vector geometry. It contains **no editable logo master**.

This explains a standing puzzle: why the guideline's colour values have only ever been available as *stated* hex codes rather than sampled from artwork. There was never any vector to sample.

### 3.2 `via-we 360.pdf` — vector present, but not a logo master

| Property | Finding |
|---|---|
| Size / pages | ~6.6 MB, **1 page** |
| **Producer** | **Figma** |
| **Vector path operations** | **10,664** |
| Font objects | 4 |
| Image XObjects / embedded JPEG | 22 / 11 |
| Page geometry | **56.89 × 410.12 in** (4096 × 29,529 pt) |
| Document title | `ppt` |

A page 410 inches tall is a long scrolling deck or presentation export — **not a logo artboard**.

---

## 4. The evidence rule — what the Figma export does and does not prove

**Proven:** Via-We design work was produced in, or passed through, **Figma**.

**NOT proven — none of the following is established by this PDF:**

- ❌ that the official logo exists in Figma as an **editable component** with live vector layers
- ❌ that the **logo's own paths** are among the 10,664 vector operations in this file — the deck contains 22 raster images too, and the logo may well be one of them
- ❌ that the **original Figma project is still accessible** — the account, team or file may be gone, expired, or belong to a departed contractor
- ❌ that **B1 is cleared**
- ❌ that the logo is **"one export away"**

> **Correction on the record.** An earlier verbal summary described this as potentially "one export away". That overstated it. The correct classification is **VECTOR-SOURCE LEAD — promising, unconfirmed.** Recorded here so the overstatement does not propagate into planning.

---

## 5. Rejected — the navy/orange SVG files

Five vector SVGs were found during the search and **all are rejected as Via-We assets**:

`Artboard 1.svg` · `Artboard 1 copy.svg` · `Artboard 1 copy 2.svg` · `Artboard 1 copy 2 (1).svg` · `Artboard 1 copy 3.svg`

| Evidence | Finding |
|---|---|
| Fill colours | `#0a213e`, `#08213e` (navy) and `#faa41a`, `#faa41c` (**orange**) |
| Via-We guideline palette | `#1B4B77` · `#3582AD` · `#3B8EC0` · `#4AD3F3` — **all blues** |
| Gradients | **0** — the Via-We mark clearly uses gradients |
| Element ids | Generic (`Layer_2`, `art_bord_N`) — no Via-We naming |

**These belong to a different brand.** They must not be treated as Via-We artwork, imported, adapted, or recoloured. Recorded explicitly so a future search does not mistake them for a recovered Via-We vector.

**No `.ai`, `.eps`, or Via-We `.svg` file exists anywhere on the searched filesystem.**

---

## 6. Brand-source recovery strategy — revised

**The redraw route is now a fallback, not the first recommendation.**

### Step 1 — Identify the Figma owner
Determine who owns or can access the original Via-We Figma project: Vijay, a contracted designer, an agency, or a shared team account. **This is the single next action.**

### Step 2 — Confirm the logo exists there as editable vector layers
Open the project and verify the mark is live vector geometry — separable curves and mesh — and **not a placed PNG inside Figma**. A raster placed in Figma exports as a raster; this step is not a formality.

### Step 3 — Export production assets directly from Figma

- `symbol.svg` — symbol only
- `full-horizontal.svg` — full lockup
- `full-horizontal-white.svg` — white / reversed
- `one-colour.svg`
- **compact mobile symbol or wordmark SVG**
- `favicon.svg`
- Editable source, or a documented Figma component reference

### Step 4 — Validate every exported SVG

- [ ] genuine vector paths — **no `<image>` element, no base64 raster**
- [ ] transparent background where required
- [ ] correct brand colours, including gradients
- [ ] correct logo wording — `VIA-WE Services Pvt. Ltd.`
- [ ] exact tagline — **`YOUR DREAMS OUR AIM`**, no comma
- [ ] **no "360" added to the logo**
- [ ] individual curves and mesh **separable for animation**
- [ ] no unresolved font dependency — text converted to outlines, or the font licensed

### Step 5 — Fallback only

**Only if the original Figma source cannot be recovered** should a professional vector reconstruction be commissioned — a separate task, with its own timeline, cost and approval, producing a *new* file that must then be approved as matching the unchanged official mark.

---

## 7. B1 status — unchanged

| Item | Status |
|---|---|
| Official logo design approved | ✅ **YES** |
| Full-logo raster reference supplied | ✅ **YES** |
| **Symbol-only raster reference supplied** | ✅ **YES — new** |
| Exact artwork wording confirmed | ✅ **YES** |
| **Editable production vector supplied** | ❌ **NO** |
| **Separable animation paths supplied** | ❌ **NO** |
| **B1** | ⛔ **OPEN** |

**The symbol PNG improves reference coverage. It does not clear B1.** Reference coverage and production readiness are different things, and only the second unblocks the creative gate.

---

## 8. Brand invariants — unchanged by this review

- Official public brand: **VIA-WE Services Pvt. Ltd.**
- Exact tagline: **`YOUR DREAMS OUR AIM`** — no comma
- **"360" is a strategic and visual concept only** — never in the logo, wordmark, company name or tagline
- The final animation may communicate a 360-degree service system **visually**
- **The official logo must remain unchanged**

Nothing here alters the approved creative or motion direction. [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) stands as written.

---

## 9. Privacy

| Check | Result |
|---|---|
| Both PNGs under `private/`, Git-ignored | ✅ verified with `git check-ignore` |
| Any PNG/PDF/SVG/AI/EPS staged | **0** ✅ |
| External PDFs copied into the repository | **No** — inspected in place, read-only |
| Private contact details reproduced | **None** |
| `private/` in `git status` | **0** ✅ |

---

## 10. Next action

> **Ask: "Who owns the Via-We Figma project, and can they open it?"**

That single question determines whether B1 is resolved by an export or by a commissioned redraw — and the two differ by weeks and by cost.

If the answer is "nobody has it", that is a complete and useful answer, and Step 5 begins immediately rather than after a search.
