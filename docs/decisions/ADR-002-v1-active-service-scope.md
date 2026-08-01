---
status: accepted
created: 2026-08-01
source: docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
---

# ADR-002 — Version 1 active service scope

| | |
|---|---|
| **Status** | **Accepted** — confirmed by Vamshi, recorded 2026-08-01 |
| **Date** | 2026-08-01 |
| **Deciders** | Vamshi (confirmed), Vijay (owner of future activations) |
| **Source** | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §2, §3 |
| **Supersedes** | The seven-pillar scope in `AGENTS.md` and `PRODUCT.md` as they stood before 2026-08-01 |
| **Related** | [ADR-004](ADR-004-logo-led-extensible-service-motion.md) — the service registry that makes this list changeable without a rebuild |

---

## 1. Context

Repository documentation up to 2026-07-31 asserted **seven** service pillars, treating Business Consulting & Growth Strategy and Via-We Connects as top-level Version 1 services. That assumption propagated into the sitemap, the navigation, the lead taxonomy, the analytics vocabulary, and the entire Phase 0 design set — where the rejected Distributary concept drew exactly seven channels.

The seven-pillar list was never verified against what Via-We actually delivers today. `PRODUCT.md` itself flagged the question as unresolved: *"Which seven pillars are currently active vs planned."*

That question is now answered.

---

## 2. Decision

> **Version 1 has five active public service pillars.**

| # | Pillar | Route (subject to product approval) |
|---|---|---|
| 1 | Digital Marketing & Branding | `/services/digital-marketing-branding` |
| 2 | Business Setup | `/services/business-setup` |
| 3 | Franchise Solutions | `/services/franchise-solutions` |
| 4 | Web & App Development | `/services/web-app-development` |
| 5 | Hiring & Recruitment | `/services/hiring-recruitment` |

### Not standalone Version 1 pillars

These must **not** appear in top-level Version 1 navigation unless Vijay later confirms them:

- Business Consulting & Growth Strategy
- Via-We Connects
- Skill Development
- Product Analysis
- Product Services
- Printing Services
- Infrastructure Making
- Offline Marketing

### Retained as sub-capabilities

| Sub-capability | Absorbed into |
|---|---|
| Offline marketing, print collateral, own-brand building | Digital Marketing & Branding |
| Infrastructure coordination | Business Setup |
| Recruitment | Hiring & Recruitment |

---

## 3. Consequences

**Positive**
- The site describes what Via-We actually delivers, which is what `AGENTS.md`'s no-invention rule requires.
- Five services are easier to make legible in ten seconds than seven. The [agency teardown](../research/2026-08-01-agency-reference-teardown.md) found Instrument scoring highest on service architecture with **three** categories, precisely because a smaller set can be explicitly connected.
- Three routes disappear from V1 scope (`/connects`, `/connects/events`, `/connects/events/[slug]`), along with their event-registration forms, photography-consent handling, and Event Terms legal page. That is a material reduction in legal surface area.

**Negative**
- Via-We Connects was a genuine differentiator in the earlier positioning. Removing it narrows the story to services other agencies also list. The **coordination between** the five is now doing all the differentiation work.
- Any existing marketing material naming seven services now disagrees with the website.

**Neutral**
- Business Consulting is not deleted as a capability — it is not a *standalone V1 pillar*. It may return via the service registry without a rebuild ([ADR-004](ADR-004-logo-led-extensible-service-motion.md)).

---

## 4. Non-negotiable implementation constraint

**Do not hardcode five.** The number of active services is data, not structure. See [ADR-004](ADR-004-logo-led-extensible-service-motion.md) §3. A future activation of Business Consulting or Via-We Connects must be a content change, not an engineering project.

---

## 5. What this ADR does not decide

- Whether each pillar is **directly delivered** or **partner-coordinated**. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §2.2 requires public pages to distinguish direct delivery, partner coordination, and consultation. That boundary is listed as missing information (§13) and is tracked in [VIA-WE_MISSING_INPUTS.md](../planning/VIA-WE_MISSING_INPUTS.md).
- The item-by-item scope of Business Setup, which §2.2 marks as "to be confirmed item-by-item".
- Final routes. Route direction is proposed in Business Truth v2 §8 and remains subject to product approval.

---

## 6. Review

Review when Vijay confirms any additional service as a public V1 pillar, or when the direct-delivery boundary is established.
