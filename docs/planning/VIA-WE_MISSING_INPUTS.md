---
status: current
type: living blocker list
created: 2026-08-01
---

# Via-We — Missing Inputs

**Purpose:** every input the project is waiting on, who owns it, and what it blocks. Ordered by what unblocks the most.

**Updated by:** the incremental data ingest process. When an input arrives, move it to Resolved (§5) with a date — do not delete the row.

**Batch 01 processed 2026-08-01** — [report](../reviews/2026-08-01-intake-batch-01-company-identity.md). It supplied **owner statements, no documents**. Several blockers moved from *nothing supplied* to **partially supplied, verification pending**. **No blocker fully cleared.**

---

## 1. Hard blockers — nothing proceeds without these

| # | Input | Owner | Blocks |
|---|---|---|---|
| **B1** | **Production logo vector files** — symbol SVG, full horizontal SVG, white, one-colour, wordmark, favicon, editable AI/EPS source, **plus a compact mobile variant** | Vijay | **All creative prototyping. STILL 0 of 7 vectors — B1 OPEN.** Two raster references are now held privately: the full lockup and, since 2026-08-02, a **symbol-only** reference. Both confirm wording and composition; **neither is a master**, and neither can drive the logo-led animation, which needs separable paths.

**🔍 Vector-source lead — Figma.** A Figma-produced Via-We PDF was found (10,664 vector path ops). It proves Via-We design work passed through Figma; it does **not** prove the logo exists there as editable vector, that the project is still accessible, or that B1 is close to cleared. **Ask first: who owns the Via-We Figma project, and can they open it?** Full detail and the 5-step recovery order: [brand-source discovery review](../reviews/2026-08-01-brand-source-discovery.md). A commissioned redraw is now the **fallback**, not the first recommendation. Batch 01 confirms the logo *design* is final, which is not the same as having production files. A logo-led direction cannot be built from raster artwork, and governance policy §7 forbids treating raster as an official vector. **Still the single highest-value input in the project.** See the [brand asset audit](../brand/VIA-WE_BRAND_ASSET_AUDIT.md) |
| **B2** | Deadhead Bold — licence terms and web-embedding permission | Vijay | The type system. **Batch 01 asked and returned "Unknown" — not resolved.** If not licensable, a substitute display face must be chosen and approved — a brand decision, not a developer's. Also blocked by "website typography may be modernised: not confirmed" |
| ~~**B3**~~ | ~~Final tagline decision~~ | — | ✅ **RESOLVED 2026-08-01** — `YOUR DREAMS OUR AIM`, no comma, inside the approved lockup. Moved to §5 |
| **B4** | Current legal company details — full legal name, CIN, incorporation date, registered office, operating office | Vijay | `/about`, footer, legal pages, **launch**. **Batch 01 supplied a working legal name and a Vijayawada address; CIN, incorporation date and company status remain entirely absent.** Partially supplied |
| **B5** | Current official phone, WhatsApp, email | Vijay | Every contact route on every page. **Batch 01 supplied all four values — but public display is unapproved, so they stay in `private/` and are unusable on the site.** Needs Vijay's public-display approval, not more values |
| **B6** | Leadership names and titles | Vijay | `/about`. **Batch 01 supplied the name and explicitly supplied NO designation.** The earlier "Founder & CEO" claim is withdrawn (K-4). Needs the exact public designation, biography approval and photo approval. No `/team` route until then |
| **B7** | Active vs planned branches | Vijay | **Largely answered: one active city, Vijayawada; Hyderabad/Bengaluru/Vizag not active and must not appear at all.** Needs document proof and approval of the exact public wording "Based in Vijayawada" |
| **B8** | **Direct delivery vs partner coordination, per pillar** | Vijay | Honest service-page copy. Truth file §2.2 requires the distinction and it exists for no pillar |
| **B9** | Creative approval — [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) | Vijay | The build gate. Requires two prototypes first, which require B1 |
| **B10** | **Resolve remaining conflicts K-3, K-4, K-5, K-6** — public phone roles, **Vijay's exact public designation**, exact legal registered spelling, registered office | Vijay + documents | `/about`, footer, contact. **K-1, K-2, K-7 and K-8 were resolved 2026-08-01** by Vijay's brand confirmation. **Four remain: K-3, K-4, K-5, K-6.** K-3 (which phone is public) and K-4 (Vijay's designation and whether a leadership section may publish) are **independent** and must not be merged. K-5 and K-6 need documents. See [evidence register §9](../product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md) |
| **B11** | **Public-display approval for contact details** | Vijay | Every contact route. Values exist but sit in `private/` because publication is unapproved. **This is an approval blocker, not a data blocker** |

---

## 2. Content and evidence blockers

| # | Input | Owner | Blocks |
|---|---|---|---|
| **C1** | Business Setup scope, confirmed item-by-item | Vijay | `/services/business-setup`. Truth file §2.2 marks the scope unconfirmed |
| **C2** | Per-pillar scope confirmation for the other four | Vijay | Service-page copy |
| **C3** | Client permissions — written, per client | Vijay | Naming any client anywhere |
| **C4** | Logo permissions — separate from C3 | Vijay | Any client logo |
| **C5** | Metric permissions **and documented measurement sources** | Vijay | Any published result. A strategy document is not a result |
| **C6** | Testimonials with written permission | Vijay | Any quote |
| **C7** | Case-study data — challenge, scope, deliverables, timeline, media, results | Vijay | `/work`. All candidates are at `IDENTIFIED` |
| **C8** | Which client relationships are current | Vijay | Avoiding a lapsed client presented as active |
| **C9** | Office, team, event and client photography | Vijay | `/about`, `/work`, `/industries`. **No AI-generated imagery** |
| **C10** | Web/app case-study candidate identification | Vamshi | Proof for pillar 4, currently the least-evidenced pillar |
| **C11** | Legal page content — privacy, terms, cookies, disclaimer, franchise disclaimer | Vijay + legal | Launch. The franchise disclaimer is mandatory on every franchise surface |
| **C12** | Consent wording for all forms | Vijay + legal | Every form. `AGENTS.md` requires consent recording |

---

## 3. Technical and product decisions

| # | Decision | Owner | Blocks |
|---|---|---|---|
| **T1** | Final route set — confirm the truth file §8 direction | Vamshi + Vijay | Routing, content model, analytics |
| **T2** | Content model — repository Markdown or headless CMS | Vamshi | Content workflow. Note that a CMS routes content around the `AGENTS.md` approval gate that git enforces |
| **T3** | CRM, booking system, WhatsApp API, payment provider | Vijay + Vamshi | Lead flow, form destinations |
| **T4** | Lead-taxonomy confirmation against the actual CRM | Vamshi | Forms, analytics, attribution |
| **T5** | **Animation stack** | Vamshi | Deliberately deferred until after the creative gate. [ADR-001](../decisions/ADR-001-via-we-animation-stack.md) is superseded and must be re-derived, not revived |
| **T6** | Hosting, domain, DNS, analytics account ownership | Vijay + Vamshi | Deployment and launch |
| **T7** | Working palette derived from the four guideline blues, contrast-verified | Vamshi + Vijay | The four guideline colours are all blues in a narrow range — no neutral, no text colour, no state colours. A palette must be derived without inventing a new brand colour |

---

## 4. Repository hygiene — open items

| # | Item | Owner | Note |
|---|---|---|---|
| **R1** | Global `ui-ux-pro-max` skill still shadows the repository copy | Vamshi | Recon conflict **C-2**. The runtime loaded an older global copy (50+ styles / 161 palettes / 10 stacks) instead of the repository copy (84 / 192 / 22). Remove or update the global copy |
| **R2** | `skills-lock.json` hashes do not verify | Vamshi | Recon conflict **C-3**. All five `computedHash` values fail to match a SHA-256 of the file at their `skillPath`. Document the algorithm or remove the field — it currently implies an integrity guarantee it does not provide |
| **R3** | `docs/reviews/2026-08-01-via-we-source-intake-and-asset-audit.md` | Vamshi | Referenced by the reconciliation prompt §2; **does not exist**. Reconciliation proceeded without it |
| **R4** | `.github/` Copilot and Mermaid instruction files | Vamshi | Tool-generated, untracked, `applyTo: "**"` (repo-wide). Decide: track, delete, or ignore |
| **R5** | **Backup location for the unredacted source** | Vijay + Vamshi | Client names were removed from all tracked files on 2026-08-01 (see R5 in §5, Resolved). The unredacted originals now exist **only** in `private/source-data/`, one local Git-ignored folder with **no defined backup**. Decide where the authoritative unredacted source lives long-term — a private repository, encrypted drive, or shared secure store. Not the working repository, and not only one laptop |
| **R6** | No automated check stops client names re-entering tracked files | Vamshi | The rule is stated in `AGENTS.md` §11, `CLAUDE.md` §6, and the redaction notices, but nothing enforces it. A pre-commit hook or CI scan against the private name list is the only durable defence. See [privacy review](../reviews/2026-08-01-pre-commit-privacy-review.md) §7 risk 2 |

---

## 5. Resolved

| Input | Resolved | How |
|---|---|---|
| Source of truth was an unreachable external file at `~/Downloads/…` | 2026-08-01 | Replaced by `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` in the repository. Closes recon conflict **C-1** |
| Seven vs five service pillars | 2026-08-01 | **Five** — [ADR-002](../decisions/ADR-002-v1-active-service-scope.md) |
| Telugu in Version 1 | 2026-08-01 | **English only** `[CONFIRMED]` |
| Static vs dynamic service routes | 2026-08-01 | Five static `/services/*`, generated from the service registry. Closes recon **C-4** |
| No route for the franchise disclaimer | 2026-08-01 | `/franchise-disclaimer` in the current route direction. Closes recon **C-5** |
| Contradictory motion doctrines in vendored skills | 2026-08-01 | Neither adopted. Via-We's own direction governs. Closes recon **C-6**, **C-7**, **C-8** |
| Creative direction — Distributary | 2026-08-01 | **Rejected** — [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md) |
| `.gitignore` absent; `ruvector.db` unprotected | 2026-08-01 | Created; `private/`, `ruvector.db`, `docs/source-data/raw/`, `.DS_Store` all ignored |
| No `CLAUDE.md` | 2026-08-01 | Created |
| No privacy boundary in the repository | 2026-08-01 | `private/` created and Git-ignored; redaction standard demonstrated in the [operations summary](../operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md) |
| **R5 — client names in tracked files** | 2026-08-01 | **Removed.** 11 occurrences across 3 files redacted to sector descriptions; unredacted originals moved to `private/source-data/`; control-verified zero remain. See [privacy review](../reviews/2026-08-01-pre-commit-privacy-review.md). *Residual risk carried forward as the new R5 in §4* |
| Authority documents unverified against originals | 2026-08-01 | Originals located at `~/Downloads/VIA-WE_AGENT_DOCUMENTATION_UPDATE_PACK/`; all five diffed with **no substantive difference**; repo copies restored byte-exact |
| **B3 — final tagline** | 2026-08-01 | ✅ **`YOUR DREAMS OUR AIM`**, no comma, inside the approved logo lockup. Confirmed by Vijay and corroborated by the artwork |
| **Brand name** (conflicts K-1, K-7) | 2026-08-01 | ✅ **VIA-WE Services Pvt. Ltd.** "360" is a strategic concept, never a name. No 360 logo is expected |
| **Legal suffix in the header** (K-8) | 2026-08-01 | ✅ Intentionally part of the lockup; may remain visible |

---

## 6. What to ask for first

If only one thing can be obtained this week, ask for **B1 — the production logo vector files.** Every creative deliverable is downstream of it, and the current direction is logo-led by definition.

If two things: **B1 and C9 (photography).** Photography has the longest lead time of any input here — arranging an office, team, or client shoot is measured in weeks, and `/about`, `/work` and `/industries` all depend on it. Start it before it is needed.
