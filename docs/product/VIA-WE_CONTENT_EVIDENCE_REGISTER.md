---
status: current
type: living register
created: 2026-08-01
---

# Via-We — Content & Evidence Register

**Purpose:** one place that says, for every factual claim Via-We might publish, whether it can be published and what is missing.

**Rule:** a claim reaches `PUBLIC-READY` only with a reliable source, current context, permission where required, no unresolved conflict, public-safe wording, and an evidence reference. Until then it is blocked. See [governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §2 and the [ingest prompt](../../prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md) §7.

**Updated by:** the incremental data ingest process. Never edit a status without an evidence reference.

---

## 1. Summary

| Status | Count |
|---|---:|
| `PUBLIC-READY` | **5** |
| `[VERIFY]` — needs confirmation before publication | 16 |
| `PUBLIC-BLOCKED` — needs proof and/or permission | 14 |
| **Permanently blocked** — never publishable | 2 |
| `[INTERNAL]` — never public in current form | 4 |
| `[CLIENT-SOURCE]` — usable as design input | 2 |
| **Missing** — asset does not exist | 2 |

**Five statements are currently publishable:** the brand name, the category ("Business Growth & Execution Company"), the headline ("We Build, Brand & Grow Businesses."), the five-pillar list, and the logo's stated meaning.

That is the entire factual foundation available to the website today. Everything else must be built from description, structure, and approved service scope — which is why the [current creative direction](../design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md) §2 treats "no approved proof yet" as a design constraint rather than a content gap.

---

## 2. Company identity

| # | Claim | Status | Evidence | Blocker |
|---|---|---|---|---|
| 1 | Brand name "Via-We" | **PUBLIC-READY** | Brand guideline `[CLIENT-SOURCE]` | — |
| 2 | Legal lockup "Via-We Services Pvt. Ltd." | `[VERIFY]` | Brand guideline | Current legal details listed as missing |
| 3 | Legal company name (full, current) | `[VERIFY]` | — | From Vijay |
| 4 | CIN | `[VERIFY]` | Earlier documentation cited `U70200AP2025PTC117722`, self-flagged "must verify" | MCA confirmation |
| 5 | Incorporation date | `[VERIFY]` | Earlier documentation cited 11 Feb 2025, RoC Vijayawada | Legal confirmation |
| 6 | Registered office address | `[VERIFY]` | Earlier documentation cited an address in Mangalagiri, AP | Current confirmation |
| 7 | Operating office / city | `[VERIFY]` | Vijayawada in earlier documentation | Current confirmation |
| 8 | Active branches | **PUBLIC-BLOCKED** | — | Never infer a branch from an old brochure or address |
| 9 | Planned branches | **PUBLIC-BLOCKED** | Hyderabad and Bengaluru named in earlier documentation | Must be marked planned, never available |
| 10 | Official phone | `[VERIFY]` | Earlier documentation cited a number, marked unverified | **Appears on every page — highest-impact unverified fact** |
| 11 | Official WhatsApp | `[VERIFY]` | — | From Vijay |
| 12 | Official email | `[VERIFY]` | — | From Vijay |
| 13 | Domain `via-we.in` | `[VERIFY]` | Earlier documentation | Confirm current |
| 14 | Leadership names and titles | `[VERIFY]` | Earlier documentation named two individuals, explicitly marked unverified | From Vijay. **No `/team` page until resolved** |
| 15 | Tagline "Your Dreams Our Aim" | `[VERIFY]` | Brand guideline `[CLIENT-SOURCE]` | Final tagline decision listed as missing |

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
| 46 | Office / team / client photography | **MISSING** | No approved photography exists. **No AI-generated imagery** |

---

## 8. Standing privacy note

**Resolved 2026-08-01.** Client account names, internal counts, and tracker data are **`[INTERNAL]`** and are held **only** in `private/source-data/` (Git-ignored). They were removed from every tracked file in the [pre-commit privacy review](../reviews/2026-08-01-pre-commit-privacy-review.md), which verified with a control check that **zero** commercial client names remain in tracked content.

No client permission is recorded for any account, so **no client may be named anywhere in tracked documentation, on the website, or in any public artefact** until permission is obtained per C3 in [missing inputs](../planning/VIA-WE_MISSING_INPUTS.md).

Throughout this repository — this register, the [truth file](VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) §10 and §11, and the [redacted operations summary](../operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md) — clients are referred to **by sector only**.

**Residual risk:** the unredacted source now exists only in one local Git-ignored folder with no defined backup. Tracked as risk 1 in the privacy review §7.
