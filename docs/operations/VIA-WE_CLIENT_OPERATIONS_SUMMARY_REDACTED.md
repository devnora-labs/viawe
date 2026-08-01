---
status: current
type: redacted operations summary
created: 2026-08-01
classification: INTERNAL — safe for repository, not for publication
---

# Via-We — Client Operations Summary (Redacted)

**Purpose:** describe the shape and maturity of Via-We's delivery operation without disclosing client identities, counts as facts, or any PII.

**Classification:** `[INTERNAL]`. Safe to keep in the repository. **Nothing here is publishable.**

**Redaction standard applied:** no client names, no contact details, no ad-account identifiers, no spreadsheet contents, no individual campaign figures. Clients are described by **sector only**. Counts are given as **ranges with their evidence label**, never as facts.

---

## 1. What this operation demonstrably is

Via-We runs a **working, multi-client digital-marketing delivery operation** with a defined end-to-end workflow. That is the substantive finding, and it is more useful to the website than any count.

The operation covers, in one pipeline:

strategy → account setup → content calendar and scripting → shoot scheduling and production → footage segregation → editing → internal and client approval → posting → campaign setup → campaign management → reporting and optimisation.

**Why this matters for the website:** it is evidence of *execution capability*, which is what "Business Growth & Execution Company" claims. It can be described as **process** without publishing a single client name, number, or result. Process description requires no permission.

---

## 2. Scale — ranges only, all internal

| Dimension | Order of magnitude | Label | Publishable? |
|---|---|---|---|
| Historical client relationships | Several dozen | `[INTERNAL / VERIFY]` | **No** |
| Currently active digital-marketing clients | Under twenty | `[INTERNAL / VERIFY]` | **No** |
| Distinct account rows in the operational tracker | Around two dozen | `[INTERNAL]` | **No** |
| Recent weekend campaign setups | Around ten | `[INTERNAL]` | **No** |
| Monthly creative and posting commitments | Low hundreds | `[INTERNAL ESTIMATE]` | **No** |

**Three cautions, all from the governance policy §7:**

1. **A tracker row is not a client.** The row count and the active-client count are different measures and must never be conflated.
2. **An approximation is not a fact.** "Approximately eighteen" cannot become "18 clients" in any public context.
3. **A monthly commitment count from one snapshot is not a monthly average.** It describes one month's plan.

---

## 3. Sector coverage

Derived from the operational tracker, described by sector to avoid identifying clients:

- Education and training
- Overseas education and student services
- Healthcare and dental
- Personal care and wellness
- Retail and hardware
- Food and beverage
- Horticulture and nursery
- Jewellery and gold retail
- Apparel and collections
- Real estate and projects
- Trading and distribution
- Technology and digital services

**Useful, non-identifying observation:** the coverage is broad and predominantly local SME. That supports an *industries* page structured by sector — the kind of page the current route direction includes at `/industries` — provided each sector is described generically and no client is named without permission.

---

## 4. Capability evidence held

| Capability | Evidence held | Publishable |
|---|---|---|
| Competitor and audience research | A structured strategy document for one client | **No** — internal, and a strategy is not a result |
| Segmentation and funnel design | Same document | No |
| Google Search campaign planning | Same document | No |
| Meta lead-generation planning | Same document | No |
| Landing-page mapping | Same document | No |
| Nurture and budget planning | Same document | No |
| Multi-client content production at volume | Operational trackers | No |
| Shoot planning and production | Operational workflow | **Process description only** |
| Campaign management and reporting | Client-specific trackers | No |

> **The single most important line in this document:** a strategy document proves *capability*, not *outcome*. Converting it into a claimed result is explicitly prohibited by governance policy §7 and by `AGENTS.md`.

---

## 5. What is missing before any of this becomes public

| Missing | Needed for |
|---|---|
| Client permission — per client, in writing | Naming any client at all |
| Logo permission — separate from client permission | Any logo appearance |
| Metric permission plus a documented measurement source | Any published result |
| Campaign date ranges and measurement windows | Contextualising any result |
| Testimonials with written permission | Any quote |
| Approved media with recorded rights | Any case-study imagery |
| Confirmation of which relationships are current | Avoiding a lapsed client presented as active |
| Direct-delivery vs partner-coordination boundary | Honest service-page copy |

---

## 6. What the website may say today

**Safe now:**

- Via-We runs a defined end-to-end digital-marketing delivery process, described step by step
- Via-We works across multiple sectors — sectors named generically, no client named
- The five service pillars and their scope, once §2 scope confirmation lands
- Anything the [evidence register](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md) marks `PUBLIC-READY`

**Not safe:**

- Any client count, in any wording, including "dozens of" or "many"
- Any client name, logo, or recognisable description
- Any metric, percentage, or volume figure
- Any testimonial
- Any partnership claim
- Any implication that every listed service is delivered directly in-house

---

## 7. Source and handling

Underlying material — trackers, spreadsheets, strategy documents, account data — is **not** in this repository and must not be. It belongs under `private/`, which is Git-ignored.

This summary was produced from owner-supplied statements recorded in `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §10 and §11. No raw file was copied, and no PII appears above.

**Update path:** new operational data goes through [prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md](../../prompts/VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md). This summary is regenerated; it is never appended to with raw data.
