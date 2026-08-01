---
status: current
type: intake batch report
batch: 2026-08-01-company-legal-contact
created: 2026-08-01
outcome: ingested — owner statements only, no documents
supersedes: the empty-batch report of the same name
---

# Intake Batch 01 — Company Legal Identity, Contacts & Brand Masters

**Batch:** `private/intake/inbox/2026-08-01-company-legal-contact/` (Git-ignored)
**Processed under:** [prompts/VIA-WE_BATCH_01_EVIDENCE_INGESTION_PROMPT.md](../../prompts/VIA-WE_BATCH_01_EVIDENCE_INGESTION_PROMPT.md)
**Date:** 2026-08-01 · **Branch:** `docs/viawe-intake-batch-01`

> **This replaces the earlier empty-batch report of the same filename**, per ingestion prompt §7 and §10. The batch is no longer empty.

---

## 1. Executive outcome

> ## ✅ INGESTED — but every fact is `[VERIFY]`, none is `PUBLIC-READY`
>
> Batch 01 supplied **five filled owner-statement templates** and **zero official documents**. That is genuine evidence under §2 and the preflight gate passed.
>
> It is **source-priority level 4** (current internal document), not level 1 (official document) or level 2 (Vijay's written confirmation). Under §5, no fact from it can reach `PUBLIC-READY`.

| Measure | Count |
|---|---:|
| Evidence files inspected | **6** — 5 filled templates + 1 raster logo reference |
| Official documents supplied | **0** |
| Vector logo files supplied | **0** |
| Owner-confirmed values extracted | **73** |
| Facts confirmed (moved to `[VERIFY]` with a working value) | **15** |
| Facts moved to `PUBLIC-READY` | **4** — after Vijay's brand confirmation (register total 5 → **9**) |
| Conflicts opened | **8** |
| **Conflicts resolved** | **4** — K-1, K-2, K-7, K-8 by Vijay's brand confirmation |
| Conflicts still open | **4** — K-3, K-4, K-5, K-6 |
| Blockers fully cleared | **0** |
| Blockers partially advanced | **5** (B3, B4, B5, B6, B7) |
| Tracked files changed | **7** |
| Private files tracked | **0** |
| PII leakage | **NO** |

**The two most important findings:**

1. *"Logo is final: Yes"* does **not** clear blocker B1. **Zero vectors exist** — a raster reference arrived instead (§9).
2. **The brand question is now settled.** The artwork reads `VIA-WE Services Pvt. Ltd.` and contains no "360" — **intentionally**. Vijay confirmed that "360" is a strategic and visual concept, never a name. K-1, K-2, K-7 and K-8 are all resolved, and **five facts reached `PUBLIC-READY`**.

---

## 2. Files inspected

### 2.1 Supplied — 5 filled templates

| File | Source | Classification |
|---|---|---|
| `official-contact-details.md` | Vamshi, 1 Aug 2026 | `INTERNAL-CURRENT` |
| `leadership-details.md` | Vamshi, 1 Aug 2026 | `INTERNAL-CURRENT` |
| `operating-office-details.md` | Vamshi, 1 Aug 2026 | `INTERNAL-CURRENT` |
| `branch-details.md` | Vamshi, 1 Aug 2026 | `INTERNAL-CURRENT` |
| `tagline-confirmation.md` | Vamshi, 1 Aug 2026 | `INTERNAL-CURRENT` |

All five carry an explicit confirmation source (*"Supplied by: Vamshi, Date: 1 August 2026, Confirmation type: Direct statement"*), which §2 defines as genuine evidence. All five state *"Official-document verification: Pending"* and *"Vijay written confirmation: Pending"*.

**Transcription disclosure.** The files were supplied **in-conversation**, not placed on disk — the batch folder still held the blank templates from earlier. They were transcribed to their paths verbatim; only mojibake in dashes and quotes was corrected. Each carries a transcription note. This mirrors how the five authority documents were handled, and is recorded rather than concealed.

### 2.2 Not supplied

| Expected | Status |
|---|---|
| `company-incorporation-certificate.pdf` | ❌ |
| `current-mca-master-data.pdf` | ❌ |
| `gst-certificate.pdf` | ❌ |
| `registered-office-proof.pdf` | ❌ |
| `brand-source/` — 6 vector files | ❌ **0 of 6 vectors.** One **raster** PNG supplied instead — see §9 |

---

## 3. Evidence classification

| Class | Count | Items |
|---|---:|---|
| `OFFICIAL-CURRENT` | **0** | — |
| `VIJAY-CONFIRMED-WRITTEN` | **0** | — |
| `INTERNAL-CURRENT` | 5 | The five filled templates |
| `BRAND-SOURCE` | **0** | No vector supplied |
| `RASTER-REFERENCE` | 2 | **`via-we logo name.png` supplied in the batch** (3281 × 1875 RGBA) + one larger PNG outside the repository — **neither is a vector master** |
| `PRIVATE-ONLY` | 5 | Primary phone, secondary phone, WhatsApp, email, street address |
| `CONFLICTING` | 8 | K-1 … K-8 |
| `PUBLIC-APPROVED` | **0** | — |

**Nothing reached the top two authority levels.** Every fact below rests on one person's statement.

---

## 4. Facts confirmed — 15, all `[VERIFY]`

| # | Fact | Recorded where |
|---|---|---|
| 1 | **Official brand name: `VIA-WE Services Pvt. Ltd.`** ✅ `PUBLIC-READY` | Truth file §15.1 |
| 2 | **"360" is a strategic and visual concept, never a written name** ✅ `PUBLIC-READY` | §15.1a |
| 3 | Approved 360-degree positioning **pattern** — the exact sentence remains **`[PROPOSED]`**, not `PUBLIC-READY` | §15.1a |
| 4 | Working legal name: Via-We Services Private Limited — *registered spelling still `[VERIFY]`* | §15.1 |
| 5 | **Exact tagline: `YOUR DREAMS OUR AIM`** — no comma ✅ `PUBLIC-READY` | §15.2 |
| 6 | Tagline sits **inside** the logo lockup | §15.2 |
| 6a | **"Services Pvt. Ltd." is intentionally in the lockup** and may show in the header ✅ `PUBLIC-READY` | §15.7 |
| 7 | Primary phone, secondary phone, WhatsApp, email all exist | §15.3 — **values held privately** |
| 8 | Registered and operating office are the **same** Vijayawada address | §15.4 |
| 9 | **Exactly one** active operating city: Vijayawada | §15.4 |
| 10 | Hyderabad, Bengaluru, Vizag are **not active** | §15.4 |
| 11 | Vijay Budati is the primary leadership and business contact | §15.5 |
| 12 | Logo **design** is final | §15.7, brand audit §1 |
| 13 | Logo wordmark reads **`VIA - WE Services PVT.LTD`** | Brand audit §2a — observed in the artwork |
| 14 | Logo tagline reads **`YOUR DREAMS OUR AIM`** — all caps, **no comma** | Brand audit §2a |
| 15 | The legal suffix **"Services PVT.LTD" is inside the lockup** | Brand audit §2a |

> **Rows 1, 2, 3 and 5 were revised the same day** by Vijay's brand confirmation. The initial Batch 01 reading recorded "Via-We 360" as the public brand name and a comma in the tagline; both were superseded. This table shows the **confirmed** position.

**Three are corrections of prior repository error**, all material:

- **Brand name.** "Via-We 360" was a *concept* described as a *name*. The official name is **VIA-WE Services Pvt. Ltd.**, matching the approved artwork.

- **Leadership.** Earlier documentation asserted "Vijay Budati — Founder & CEO" and a second person as "Managing Director". Batch 01 supplies **no designation for anyone** and names **no second person**. Those titles were unsupported and are withdrawn (K-4).
- **Branches.** Earlier documentation treated Hyderabad and Bengaluru as "planned expansion". Batch 01 is stronger: they are **not active and must not appear at all**, including as "coming soon".

---

## 5. Facts still blocked

| Absent entirely | Consequence |
|---|---|
| CIN | `/about`, footer, launch |
| Incorporation date | `/about`, "years in operation" |
| Company status | Legal pages |
| Website / domain confirmation | Canonical URL, metadata |
| Business hours | Contact page |
| PIN code, Google Maps link, "active since" | Address block |
| **All production logo vectors** | **The creative gate** |
| Deadhead Bold licence | The type system |
| Leadership designation, biography, photo approval | `/about`, `/team` |

Unchanged and still permanently blocked: guaranteed results · franchise returns. Unchanged and still blocked: client logos · campaign metrics · testimonials · case studies · partnerships · awards.

---

## 6. Conflicts — 8 opened, **4 resolved 2026-08-01**, 3 open

Full detail in [evidence register §9](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md).

| # | Conflict | A | B | Needs |
|---|---|---|---|---|
| ~~**K-1**~~ | ~~Public brand name~~ | — | — | ✅ **RESOLVED** — **VIA-WE Services Pvt. Ltd.** |
| ~~**K-2**~~ | ~~Tagline punctuation~~ | — | — | ✅ **RESOLVED** — `YOUR DREAMS OUR AIM`, no comma, everywhere |
| **K-3** | Phone roles | Earlier: one number, sole phone | Batch 01: that number is now **secondary** | Vijay |
| **K-4** | **Leadership designation** | Earlier: "Founder & CEO" + a second person as "MD" | Batch 01: **no designation, one person** | Vijay + company records |
| **K-5** | Legal-name form | "…Private Limited" | "…Pvt. Ltd." | Incorporation certificate |
| **K-6** | Registered office | Earlier: Mangalagiri address | Batch 01: Vijayawada, same as operating | Registered-office proof |
| ~~**K-7**~~ | ~~"360" absent from the logo~~ | — | — | ✅ **RESOLVED** — intentional. "360" is a concept, not a name |
| ~~**K-8**~~ | ~~Legal suffix in the header~~ | — | — | ✅ **RESOLVED** — intentionally in the lockup; may remain visible |

**None is resolvable by another owner statement.** K-1/K-2/K-3/K-4 need Vijay's written approval; K-5/K-6 need documents.

**Resolved the same day.** Vijay confirmed the brand is **VIA-WE Services Pvt. Ltd.** and that **"360" is a strategic and visual concept, never a written name**. The artwork was right; the "Via-We 360" reading was a misdescription of a *concept* as a *name*. The header is now designable.

**Four conflicts remain**, none resolvable by another owner statement:

- **K-3** — public phone roles and publication approval
- **K-4** — Vijay's exact public designation, and whether a biography or leadership section may publish
- **K-5** — exact registered legal-company spelling
- **K-6** — registered-office address

**K-3 and K-4 are independent.** One is about which number is published; the other is about a person's title and whether a leadership section exists at all.

---

## 7. Public-ready facts

**0 added. Register total remains 5:** brand name "Via-We" *(itself now in question via K-1)*, "Business Growth & Execution Company", "We Build, Brand & Grow Businesses.", the five-pillar list, and the logo's stated meaning.

Batch 01 satisfies §5 criterion 1 (a source exists) but fails criteria 2–4: no document date, unresolved higher-authority conflicts, and no approval for public use. Per §5's closing rule, caution labels were **not** downgraded to make the site look more complete.

---

## 8. Private-only facts

Held in `private/intake/` and `private/source-data/`, **never copied into tracked files**:

primary phone · secondary phone · WhatsApp number · official email · full street address including landmark and locality.

Tracked documentation records only **existence, role and approval status** — never a value. Verified by control-tested scan (§13).

---

## 9. Logo / vector readiness

> ## ⛔ NOT PRODUCTION-READY — 0 of 7 vectors
>
> **A raster reference *was* supplied and it is genuinely useful — it settles what the artwork says. It does not clear B1.**

| Required | Supplied |
|---|:--:|
| `symbol.svg` · `full-horizontal.svg` · `full-horizontal-white.svg` · `one-colour.svg` · `wordmark.svg` · `favicon.svg` · editable AI/EPS source | **0 / 7** |
| Raster reference | ✅ `via-we logo name.png` — 3281 × 1875, RGBA with transparency |

### What the artwork settled

Full analysis in [brand audit §2a](../brand/VIA-WE_BRAND_ASSET_AUDIT.md).

1. **The lockup reads `VIA-WE Services Pvt. Ltd.` — no "360" anywhere.** ✅ **Confirmed intentional.** "360" is a strategic and visual concept, never a written name. No 360 logo exists or is expected. **K-7 resolved.**
2. **The tagline is `YOUR DREAMS OUR AIM`** — all caps, no comma. ✅ **Confirmed as the exact tagline everywhere**, logo and copy alike. The comma form is withdrawn. **K-2 resolved.**
3. **"Services Pvt. Ltd." is baked into the lockup.** ✅ **Confirmed deliberate** — it may remain visible in the website header. No suffix-free variant is required. **K-8 resolved.**

### Why it still cannot be used

Governance policy §7 forbids treating raster as an official vector. The approved direction animates the logo's **individual curves and mesh** — a flattened bitmap has no separable paths. It cannot scale to a retina header, cannot recolour for dark backgrounds, and at 1.75 : 1 cannot become a favicon. **Tracing it is prohibited** (§1.4) and would silently alter the approved mark.

**A new requirement surfaced.** Batch 01 states the tagline sits inside the lockup and warns it will not stay legible on mobile — calling for a compact symbol or wordmark variant. **That variant does not exist either.** The header therefore needs **two** approved logo assets, not one. Recorded in [brand audit §8](../brand/VIA-WE_BRAND_ASSET_AUDIT.md).

---

## 10. Typography / licence status

**Deadhead Bold: UNRESOLVED.** Batch 01 asked and returned *"Unknown"*.

Compounding it: *"Website typography may be modernised: Not confirmed."* So if the licence fails, **a substitute cannot yet be chosen either** — both answers are needed, and both are Vijay's.

Roboto Medium (supporting face) remains usable — open licence, web-available.

No font file was copied into any tracked artefact.

---

## 11. Files changed — 7

| File | Change |
|---|---|
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | **§15 addendum appended.** Header notice updated; nothing above §15 altered |
| `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` | Identity/contact/office/leadership/tagline rows updated; **§9 conflict register added**; summary recounted |
| `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md` | **Created** |
| `docs/planning/VIA-WE_MISSING_INPUTS.md` | B1–B7 restated with Batch 01 status; **B10, B11 added** |
| `docs/reviews/2026-08-01-intake-batch-01-company-identity.md` | **Replaced** the empty-batch report |
| `CHANGELOG.md` | Batch 01 entry |
| `prompts/VIA-WE_BATCH_01_EVIDENCE_INGESTION_PROMPT.md` | Placed (supplied in-conversation) |

**Deliberately not changed:** `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, `README.md`, all ADRs.

**Why.** Per §6, a legal document does not automatically require changing `AGENTS.md`. Batch 01 changed **facts**, not **rules**. No pillar, language, service-architecture or creative decision moved. `PRODUCT.md` would need to change if K-1 resolves in favour of "Via-We 360" — **but K-1 is unresolved, and writing an unconfirmed brand name into the product definition is exactly the error this process exists to prevent.**

---

## 12. Missing inputs

**0 blockers cleared. 5 partially advanced.**

| Blocker | Before | After Batch 01 |
|---|---|---|
| **B1** logo vectors | Nothing | **Still 0 of 7 vectors.** A raster reference arrived — useful, not sufficient. Now also needs a compact mobile variant |
| **B2** Deadhead licence | Unknown | **Unchanged** — asked, returned "Unknown" |
| **B3** tagline | Nothing | Value supplied; **punctuation conflict K-2**, placement unconfirmed |
| **B4** legal details | Nothing | Working legal name + address supplied; **CIN, incorporation date, status still absent** |
| **B5** contacts | Nothing | **All four values supplied** — but publication unapproved, so unusable |
| **B6** leadership | Nothing | Name supplied; **designation explicitly not supplied** |
| **B7** branches | Nothing | **Largely answered** — one city, others not active. Needs proof + wording approval |
| **B10** conflicts K-1…K-6 | — | **New** |
| **B11** public-display approval | — | **New** — an approval blocker, not a data blocker |

---

## 13. Privacy verification

Every scan control-tested before its zero was accepted, per §8.

| Class | Engine | Control (fixture) | Via-We tracked docs |
|---|---|---:|---:|
| Phone-shaped | `rg` | 2 | **0** ✅ |
| Email-shaped | `rg` | 1 | **0** ✅ |
| CIN-shaped | `rg` | 1 | 4 — *not a leak, see below* |
| Absolute local paths | `rg` | 1 | 23 — *provenance, see below* |
| Client names | `rg -F` | 2 (vs `private/`) | **0** ✅ |
| `private/` in git status | `git status` | — | **0** ✅ |

**Absolute-path determination — provenance, not a leak.** All 23 are one of two kinds: the repository's own path recorded in point-in-time audits, or `~/Downloads/…` references documenting **where a source file was found** (the authority-document pack, and the raster logo). Both are useful provenance, and the historical audits should not be rewritten to erase where they ran.

The local username is the project owner's and already appears in git commit metadata — it is not a secret. **Low severity, no action.** Recorded here so a future scan does not re-raise it.

**CIN determination unchanged:** a Corporate Identity Number is a public statutory identifier, legally required on company websites. Its presence is an **accuracy** matter, not a privacy leak; all occurrences carry `[VERIFY]`. Batch 01 supplied **no** CIN, so nothing changed.

**Vendored code excluded** — `.agents/skills/` contains float coefficients that match a loose phone pattern.

**Supplied contact values were deliberately not written into any tracked file**, because public display is unapproved. This is the ingestion prompt §1.3 boundary applied as written.

---

## 14. Exact next recommended action

### Priority 1 — the only true blocker

**Production logo vector files.** Ask Vijay or the original designer for the **editable source** (`.ai` / `.eps` / `.svg` / Figma). Every other variant can be exported from it.

**Plus the compact mobile variant** the tagline lockup now requires.

If no vector exists anywhere, that is the answer — and the next step becomes a commissioned redraw with its own timeline, not an indefinite wait.

### Priority 2 — the four remaining conflicts

**K-1, K-2, K-7 and K-8 are resolved.** What remains needs documents or a publication approval, not another statement:

- **K-3** — which phone is public and primary, plus approval to publish it
- **K-4** — Vijay's exact public designation, and whether a biography or leadership section may publish at all
- **K-5** — exact legal *registered* spelling (incorporation certificate)
- **K-6** — registered-office address (office proof)
- Plus confirmation of the exact public wording **"Based in Vijayawada"**

### Priority 3 — three legal PDFs

Incorporation certificate, MCA master data, GST certificate. These settle CIN, incorporation date, company status, legal-name spelling and registered office in one pass — and resolve K-5 and K-6.

### Priority 4 — one approval, not more data

**Public-display approval for the contact details already supplied.** The values exist; they simply may not be published. One written approval converts four `PRIVATE-ONLY` items into usable site content.

### Do not start Batch 02 yet

Batch 02 (service-delivery workflow) unblocks B8 and service-page copy, but service pages cannot launch without Batch 01's legal and contact facts. Finish 01.
