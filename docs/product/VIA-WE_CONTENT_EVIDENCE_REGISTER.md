---
status: current
type: living register
created: 2026-08-01
---

# Via-We — Content & Evidence Register

**Purpose:** one place that says, for every factual claim Via-We might publish, whether it can be published and what is missing.

**Rule:** a claim reaches `PUBLIC-READY` only with a reliable source, current context, permission where required, no unresolved conflict, public-safe wording, and an evidence reference. Until then it is blocked. See [governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §2 and the [ingest prompt](../../prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md) §7.

**Updated by:** the incremental data ingest process. Never edit a status without an evidence reference.

**Last batch:** `2026-08-01-company-legal-contact` (Batch 01) — [report](../reviews/2026-08-01-intake-batch-01-company-identity.md). Batch 01 supplied **owner statements, no documents**: many items moved from *unknown* to `[VERIFY]` with a recorded working value held privately. **Nothing moved to `PUBLIC-READY`.**

---

## 1. Summary

| Status | Count | Change from Batch 01 |
|---|---:|---|
| `PUBLIC-READY` | **9** | ▲ +4 — tagline, 360-as-concept, exact logo wording, legal-suffix-in-header (brand-name row **revised**, not added) |
| `[VERIFY]` — needs confirmation before publication | 21 | ▲ +5 — new working values recorded |
| ↳ of which `PRIVATE-ONLY` — value held in `private/` | 5 | ▲ +5 — phone ×2, WhatsApp, email, address |
| `PUBLIC-BLOCKED` — needs proof and/or permission | 14 | — |
| **Permanently blocked** — never publishable | 2 | — |
| `[INTERNAL]` — never public in current form | 4 | — |
| `[CLIENT-SOURCE]` — usable as design input | 2 | — |
| **Missing** — asset does not exist | 2 | — |
| **Open conflicts** (§9) | **4** | ▼ −4 — K-1, K-2, K-7, K-8 resolved by Vijay; **K-3, K-4, K-5, K-6 remain open** |

**Nine statements are currently publishable:**

1. Official brand name: **VIA-WE Services Pvt. Ltd.**
2. Exact tagline: **YOUR DREAMS OUR AIM**
3. **"360" as a strategic and visual concept**, never a written name
4. Exact approved **logo wording**
5. **"Services Pvt. Ltd." may remain inside the header lockup**
6. **Business Growth & Execution Company**
7. **We Build, Brand & Grow Businesses.**
8. The **five active Version 1 service pillars**
9. Official **logo meaning** — growth, partnership and connection

> **Not on this list:** the exact 360-degree positioning *sentence*. It remains `[PROPOSED]` pending final copy sign-off — see row 3b.
>
> **Invariant:** the count above equals the number of table rows marked `**PUBLIC-READY**` — currently **9** (rows 1, 3a, 15, 16, 17, 18, 41, 45b, 45d). If those two numbers ever diverge, one of them is wrong.

That is the entire factual foundation available to the website today. Everything else must be built from description, structure, and approved service scope — which is why the [current creative direction](../design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md) §2 treats "no approved proof yet" as a design constraint rather than a content gap.

---

## 2. Company identity

| # | Claim | Status | Evidence | Blocker |
|---|---|---|---|---|
| 1 | **Brand name "VIA-WE Services Pvt. Ltd."** | **PUBLIC-READY** | Vijay's confirmation 2026-08-01 **+ the approved artwork** — two sources agree | — |
| 2 | Legal lockup "Via-We Services Pvt. Ltd." | `[VERIFY]` | Brand guideline + Batch 01 | Exact official spelling unconfirmed — conflict **K-5** |
| 3 | Legal company name (full, current) | `[VERIFY]` | Batch 01: "Via-We Services Private Limited" (owner statement) | Incorporation certificate |
| 3a | **"360" is a strategic concept, never a brand name** | **PUBLIC-READY** as a concept | Vijay's confirmation 2026-08-01 | **K-1 RESOLVED.** Never write `Via-We 360`, `VIA-WE 360`, or `Via-We 360 Services Pvt. Ltd.` |
| 3b | 360-degree positioning **sentence** | **`[PROPOSED]`** — **not** `PUBLIC-READY` | Vijay's approved *pattern* | The exact published sentence still needs final copy sign-off (`AGENTS.md` rule 1). The **concept** (row 3a) is confirmed; the **wording** is not |
| 4 | CIN | `[VERIFY]` | Earlier documentation cited `U70200AP2025PTC117722`, self-flagged "must verify" | MCA confirmation |
| 5 | Incorporation date | `[VERIFY]` | Earlier documentation cited 11 Feb 2025, RoC Vijayawada | Legal confirmation |
| 6 | Registered office address | `[VERIFY]` · `PRIVATE-ONLY` | **Batch 01 — Vijayawada address supplied, held in `private/`** | **Conflict K-6** — earlier documentation cited a Mangalagiri address. Four spellings + PIN unverified |
| 7 | Operating office / city | `[VERIFY]` | **Batch 01 — Vijayawada, same address as registered office** | Document proof pending. Street address held privately |
| 8 | Active branches | `[VERIFY]` | **Batch 01: exactly one — Vijayawada** | Was blocked; now a recorded working fact awaiting document proof |
| 9 | Hyderabad / Bengaluru / Vizag | **PUBLIC-BLOCKED** | **Batch 01: not active** | **Stronger than before.** Not "planned" — must not be presented at all, including "coming soon" |
| 10 | Official primary phone | `[VERIFY]` · `PRIVATE-ONLY` | **Batch 01 — value supplied, held in `private/`** | Public display pending Vijay/document approval. **Appears on every page** |
| 10a | Official secondary phone | `[VERIFY]` · `PRIVATE-ONLY` | **Batch 01 — value supplied, held in `private/`** | Matches the number earlier documentation carried as the sole phone — conflict **K-3** |
| 11 | Official WhatsApp | `[VERIFY]` · `PRIVATE-ONLY` | **Batch 01 — supplied, same as primary phone** | Public display approval pending |
| 12 | Official email | `[VERIFY]` · `PRIVATE-ONLY` | **Batch 01 — value supplied, held in `private/`** | Public display approval pending |
| 13 | Domain `via-we.in` | `[VERIFY]` | Earlier documentation | Confirm current |
| 14 | Leadership — Vijay Budati as primary contact | `[VERIFY]` | **Batch 01 owner statement** | Name confirmed as the primary leadership contact |
| 14a | **Leadership designation (any title)** | **PUBLIC-BLOCKED** | **Batch 01 supplies NO designation** | **Conflict K-4** — earlier documentation asserted "Founder & CEO" and a second person as "Managing Director". Both unsupported and withdrawn. **Never invent a title.** No `/team` in V1 |
| 15 | **Tagline `YOUR DREAMS OUR AIM`** | **PUBLIC-READY** | Vijay's confirmation **+ the approved artwork** | **K-2 RESOLVED.** No comma, anywhere. The earlier comma form is withdrawn |
| 15a | Tagline sits inside the logo lockup | `[VERIFY]` | Batch 01 owner statement | Drives the mobile compact-variant requirement |

---

## 3. Positioning and services

| # | Claim | Status | Evidence |
|---|---|---|---|
| 16 | "Business Growth & Execution Company" | **PUBLIC-READY** | `[CONFIRMED]` — truth file §1 |
| 17 | "We Build, Brand & Grow Businesses." | **PUBLIC-READY** | `[CONFIRMED]` — truth file §1 |
| 18 | Five active service pillars | **PUBLIC-READY** as a list | `[CONFIRMED]` — [ADR-002](../decisions/ADR-002-v1-active-service-scope.md) |
| 19 | Per-pillar scope descriptions | `[VERIFY]` | Working scope in truth file §2 — Business Setup marked "to be confirmed item-by-item" |
| 20 | **Direct delivery vs partner coordination per pillar** | `[VERIFY]` | — | Truth file §2.2 requires the distinction. **Not established for any pillar** |
| 21 | FOCO / FOFO / COCO support | `[VERIFY]` | Truth file §2.3 | Confirm what Via-We does directly vs coordinates |
| 22 | Legal / financial / tax capability | **PUBLIC-BLOCKED** | — | Truth file §2.3: requires qualified professionals. **Never imply in-house capability** |

> **Note on #17 and #18.** These two claims plus #1 and #16 are the entire currently-publishable factual foundation of the website. The design must work on that basis — see [current creative direction](../design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md) §2.

---

## 4. Operational scale — all blocked

| # | Claim | Status | Source | Why blocked |
|---|---|---|---|---|
| 23 | "50+ clients" | **PUBLIC-BLOCKED** | `[INTERNAL / VERIFY]` — truth file §10 | Historical, unverified, no permission |
| 24 | "18 active clients" | **PUBLIC-BLOCKED** | `[INTERNAL / VERIFY]` | An **approximation**. Never publish as exact |
| 25 | Tracker row count | `[INTERNAL]` | Truth file §10 | **A tracker row is not a client.** Never convert |
| 26 | Weekend campaign setups | `[INTERNAL]` | Truth file §10 | Operational detail, no public purpose |
| 27 | ~315 monthly creative/posting commitments | **PUBLIC-BLOCKED** | `[INTERNAL ESTIMATE]` | An estimate from one snapshot |
| 28 | Named client accounts | `[INTERNAL]` | `private/source-data/` only — redacted from all tracked files 2026-08-01 | **No client permission recorded for any account.** See §8 |
| 29 | Years in operation | `[VERIFY]` | Tied to unverified incorporation date | Depends on #5 |
| 30 | Team size | **PUBLIC-BLOCKED** | — | No source |
| 31 | "24/7 support" | **PUBLIC-BLOCKED** | — | No evidence of the capability |

---

## 5. Proof — all blocked

| # | Claim type | Status | Blocker |
|---|---|---|---|
| 32 | Client logos | **PUBLIC-BLOCKED** | Logo permission not recorded for any client |
| 33 | Campaign metrics / results | **PUBLIC-BLOCKED** | No approved metric with a documented measurement source |
| 34 | Testimonials | **PUBLIC-BLOCKED** | None collected with written permission |
| 35 | Case studies | **PUBLIC-BLOCKED** | See §6 — all candidates at `IDENTIFIED` |
| 36 | Partnerships | **PUBLIC-BLOCKED** | None documented. Never infer from a client relationship |
| 37 | Awards | **PUBLIC-BLOCKED** | None |
| 38 | Guaranteed results | **PERMANENTLY BLOCKED** | `AGENTS.md` — never publishable |
| 39 | Franchise returns | **PERMANENTLY BLOCKED** | `AGENTS.md` — never publishable, legal exposure |
| 40 | A client strategy document (name redacted) | `[INTERNAL]` | Truth file §2.1: *"It does not prove performance results by itself."* **A strategy is not a result** |

---

## 6. Case-study candidates

All at `IDENTIFIED`. None has permission. None is publishable.

| Candidate | Status | Next step |
|---|---|---|
| Client A — education/consultancy sector (holds the §2.1 strategy document) | `IDENTIFIED` | Permission request; separate strategy from results |
| Client B — technology/digital-services sector | `IDENTIFIED` | Permission request |
| Client C — education sector | `IDENTIFIED` | Permission request |
| Client D — healthcare/dental sector | `IDENTIFIED` | Permission request |
| Client E — personal-care/wellness sector | `IDENTIFIED` | Permission request |
| Client F — retail/hardware sector | `IDENTIFIED` | Permission request |
| One web/app project | `IDENTIFIED` | Identify and request permission |

> **Seven candidates.** Identities are held **only** in `private/source-data/` (Git-ignored) — they were removed from the truth file §11 on 2026-08-01. Sector labels match [truth file §11](VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) exactly, so this register can be shared without disclosing the client list.

**Required per case study before publication:** client permission · logo permission · challenge · scope · strategy · deliverables · timeline · media · results **and metric source** · testimonial and its permission · public/private status.

**Status flow:** `IDENTIFIED → AWAITING_PERMISSION → AWAITING_DATA → DRAFTING → CLIENT_REVIEW → APPROVED → PUBLISHED → ARCHIVED`

---

## 7. Brand assets

| # | Asset | Status | Blocker |
|---|---|---|---|
| 41 | Logo meaning — growth curve, WE curve, connection mesh | **PUBLIC-READY** as narrative | `[CLIENT-SOURCE]` brand guideline |
| 42 | Guideline colours `#1B4B77` `#3582AD` `#3B8EC0` `#4AD3F3` | `[CLIENT-SOURCE]` | Usable as input; a working palette must still be derived and contrast-verified |
| 43 | Deadhead Bold display face | **BLOCKED for web** | Licence and web-delivery suitability unverified |
| 44 | Roboto Medium supporting face | `[CLIENT-SOURCE]` | Usable |
| 45 | **Production logo vector files** | **MISSING** | **Hard blocker on all creative prototyping.** Never treat raster artwork as an official vector |
| 45a | Logo raster reference | `RASTER-REFERENCE` | Supplied 2026-08-01, held in `private/`. Confirms wording, composition and palette. **Does not clear blocker B1** |
| 45b | **Exact approved logo wording** — `VIA-WE Services Pvt. Ltd.` / `YOUR DREAMS OUR AIM` | **PUBLIC-READY** | Confirmed by Vijay + artwork. **The absence of "360" is intentional** — K-7 resolved; tagline has no comma — K-2 resolved |
| 45d | "Services Pvt. Ltd." is intentionally in the lockup and may show in the header | **PUBLIC-READY** | Vijay's confirmation — K-8 resolved |
| 46 | Office / team / client photography | **MISSING** | No approved photography exists. **No AI-generated imagery** |

---

## 9. Conflict register — opened by Batch 01

Recorded, **not resolved**. Governance policy §1.2 forbids silently selecting one conflicting value.

| # | Conflict | Source A | Source B | Higher authority | Decision needed |
|---|---|---|---|---|---|
| ~~**K-1**~~ | ~~Public brand name~~ | — | — | — | ✅ **RESOLVED 2026-08-01** — the brand is **VIA-WE Services Pvt. Ltd.** "360" is a strategic concept, never a name |
| ~~**K-2**~~ | ~~Tagline punctuation~~ | — | — | — | ✅ **RESOLVED 2026-08-01** — **`YOUR DREAMS OUR AIM`**, no comma, anywhere |
| **K-3** | Phone number role | Earlier documentation: one number, sole company phone, unverified | Batch 01: same number is now the **secondary**; a different number is primary | Batch 01 | Confirm which number is public-facing and primary |
| **K-4** | **Leadership designation** | Earlier documentation: "Vijay Budati — Founder & CEO"; a second person as "Managing Director" | Batch 01: **no designation for anyone; only one person named** | Batch 01 | Vijay's exact public designation, and whether any second person appears |
| **K-5** | Legal name form | "Via-We Services Private Limited" | "Via-We Services Pvt. Ltd." | Incorporation certificate — **not supplied** | Exact official spelling |
| **K-6** | Registered office | Earlier documentation: an address in Mangalagiri, AP | Batch 01: Vijayawada address, same as operating office | Registered-office proof — **not supplied** | Which is the current registered office |

| ~~**K-7**~~ | ~~"360" absent from the logo~~ | — | — | — | ✅ **RESOLVED 2026-08-01** — the absence is **intentional**. Not a missing-logo problem |
| ~~**K-8**~~ | ~~"Services Pvt. Ltd." in the header~~ | — | — | — | ✅ **RESOLVED 2026-08-01** — intentionally part of the lockup; **may remain visible in the header** |

**4 of 8 resolved 2026-08-01** by Vijay's brand confirmation: K-1, K-2, K-7, K-8.

**4 remain open**, none resolvable by another owner statement:

- **K-3** — public phone roles and publication approval
- **K-4** — Vijay's exact public designation, and whether any biography or leadership section may be published
- **K-5** — exact registered legal-company spelling
- **K-6** — registered-office address

**K-3 and K-4 are independent** and must not be merged: K-3 is about which contact number is published; K-4 is about a person's title and whether a leadership section may exist at all.

*Note: K-5 is unaffected by the brand decision. "VIA-WE Services Pvt. Ltd." is the confirmed **brand/lockup** wording; the exact **legal registered** spelling is a separate documentary question.*

---

## 10. Standing privacy note

**Resolved 2026-08-01.** Client account names, internal counts, and tracker data are **`[INTERNAL]`** and are held **only** in `private/source-data/` (Git-ignored). They were removed from every tracked file in the [pre-commit privacy review](../reviews/2026-08-01-pre-commit-privacy-review.md), which verified with a control check that **zero** commercial client names remain in tracked content.

No client permission is recorded for any account, so **no client may be named anywhere in tracked documentation, on the website, or in any public artefact** until permission is obtained per C3 in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md).

Throughout this repository — this register, the [truth file](VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) §10 and §11, and the [redacted operations summary](../operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md) — clients are referred to **by sector only**.

**Residual risk:** the unredacted source now exists only in one local Git-ignored folder with no defined backup. Tracked as risk 1 in the privacy review §7.
