# PRODUCT.md — Via-We

**Product definition for the Via-We website and its future application layer.**

**Source of truth:** [docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md](docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md). This document derives from it. Where they disagree, the truth file wins.

**Last reconciled:** 2026-08-01

---

## 1. Product vision

Via-We is a **Business Growth & Execution Company**. `[CONFIRMED]`

> Via-We brings digital marketing, business setup, franchise expansion, technology development, and recruitment under one coordinated execution team.

**Headline:** *We Build, Brand & Grow Businesses.* `[CONFIRMED]`

**Core difference:** Via-We is not only a digital-marketing agency. It coordinates parts of business execution that are normally split across different vendors. The product is the **coordination**, not the individual services — every competitor can list services; few can hold the whole engagement.

**Version 1 is a premium, highly animated corporate and lead-generation website** with future application expansion.

---

## 2. Five service pillars

Per [ADR-002](docs/decisions/ADR-002-v1-active-service-scope.md). The count is **data, not structure** — see §5.

| # | Pillar | Working scope (abbreviated — full scope in the truth file §2) |
|---|---|---|
| 1 | **Digital Marketing & Branding** | Strategy, social media, Meta and Google Ads, SEO, research, content calendars, scripts, shoots, editing, creatives, brand identity, offline-marketing coordination, print collateral, reporting, funnels, landing-page strategy, nurture planning, optimisation |
| 2 | **Business Setup** | Requirement discovery, location selection, interior/exterior and infrastructure coordination, vendor coordination, brand-launch preparation, hiring coordination, launch marketing, post-launch support. **Scope to be confirmed item-by-item** |
| 3 | **Franchise Solutions** | Readiness analysis, FOCO/FOFO/COCO support, model and expansion planning, franchise lead generation, investor enquiry capture, presentations, outlet setup coordination, recruitment and launch marketing, SOP coordination |
| 4 | **Web & App Development** | Corporate sites, campaign landing pages, web and mobile applications, client portals, dashboards, CRM and automation, booking and payments, integrations, AI-assisted business tools, maintenance |
| 5 | **Hiring & Recruitment** | Role planning, sourcing, screening and interview coordination, outlet/office staffing, recruitment campaigns, hiring operations, onboarding coordination |

**Not standalone V1 pillars:** Business Consulting & Growth Strategy · Via-We Connects · Skill Development · Product Analysis · Product Services · Printing Services · Infrastructure Making · Offline Marketing.

**Delivery boundary — unresolved.** Public service pages must distinguish **direct delivery**, **partner coordination**, and **consultation**. That boundary has not been established for any pillar. `[VERIFY]` — [missing inputs](docs/planning/VIA-WE_MISSING_INPUTS.md).

---

## 3. Audiences

| Audience | Arrives asking | Enters via |
|---|---|---|
| New entrepreneurs | "How do I start, and who handles what?" | Business Setup |
| Existing SMBs seeking growth | "How do I get more customers?" | Digital Marketing & Branding |
| Brands preparing to franchise | "Is my brand ready to franchise?" | Franchise Solutions |
| Franchise seekers / investors | "Which opportunity fits my budget and city?" | Franchise Solutions |
| Businesses needing technology | "Can you build my website or app?" | Web & App Development |
| Employers seeking staff | "Can you help me hire?" | Hiring & Recruitment |
| Campaign traffic | Varies by campaign | A dedicated landing page, **not** the homepage |

They share more than they differ: decision-makers in small and mid-size Indian businesses, browsing on mid-tier Android over variable mobile data, often phoning before submitting a form, sceptical of agency language.

---

## 4. Website jobs

From the truth file §8:

1. Explain Via-We within **ten seconds**
2. Route visitors to the correct service
3. Build trust using **real** work
4. Generate qualified enquiries
5. Show execution capability
6. Present case studies
7. Support WhatsApp, call, email, and consultation booking
8. Support campaign-specific landing pages
9. Prepare for future portals, CRM, AI, and operations tools

Job 3 is currently constrained: **no client logo, metric, testimonial, or case study is approved for publication.** See the [evidence register](docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md). The site must work today on description and structure, and improve as approved proof arrives.

---

## 5. Service architecture — extensible by design

Per [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md) §3. **Binding on any design.**

```ts
type ServiceDefinition = {
  id: string;
  slug: string;
  shortLabel: string;
  fullName: string;
  description: string;
  status: "ACTIVE" | "PLANNED" | "ARCHIVED";
  order: number;
  route: string;
  visualKey: string;
};
```

One list drives navigation, the homepage service experience, the logo-segmentation animation, forms, CRM categories, analytics, and service pages.

**Never hardcode** five wedges, five timelines, or five routes in UI logic.

**Acceptance test:** activating a sixth service is one record with `status: "ACTIVE"` — nothing else changes.

---

## 6. Routes

`[PROPOSED]` — from the truth file §8, subject to product approval.

```text
/
/services
/services/digital-marketing-branding
/services/business-setup
/services/franchise-solutions
/services/web-app-development
/services/hiring-recruitment
/work
/work/[slug]
/industries
/about
/insights
/insights/[slug]
/contact
/book-consultation
/privacy
/terms
/cookies
/disclaimer
/franchise-disclaimer
```

**Notes.** `/services/*` routes are generated from the service registry, not hand-authored. There is **no `/connects`** — Via-We Connects is not a V1 pillar. There is **no `/team`** until leadership data is verified. `/work` renders only if approved case studies exist; it is removed from navigation otherwise, never filled with placeholders.

---

## 7. Landing-page architecture

Paid traffic goes to campaign-specific pages, never to the homepage.

```ts
type LandingPage = {
  slug: string;
  campaignName: string;
  service: string;
  industry: string;
  audience: string;
  goal: string;
  headline: string;
  offer: string;
  benefits: string[];
  proof: ProofItem[];
  faq: FAQ[];
  formSchema: string;
  thankYouPath: string;
  status: "DRAFT" | "APPROVED" | "PUBLISHED" | "ARCHIVED";
};
```

**Candidate campaigns:** digital marketing for hospitals · for dental clinics · school admissions · overseas education · real estate · franchise-owner acquisition · franchise-seeker acquisition · website development · recruitment · business-setup consultation.

**Rules:** one campaign goal · one primary CTA · relevant proof · UTM attribution · strong validation · clear consent · thank-you flow · CRM handoff · WhatsApp/call fallback · fast mobile experience.

---

## 8. Lead capture

Every form records privacy and marketing-communication consent. Lead type is preselected from context — the service page, the landing page's `service`, or the visitor's own selection.

**Proposed lead taxonomy** `[PROPOSED]` — derived from the five pillars; requires confirmation against the CRM Via-We actually uses:

`GENERAL` · `DIGITAL_MARKETING` · `BRANDING` · `BUSINESS_SETUP` · `FRANCHISE_BRAND` · `FRANCHISE_SEEKER` · `WEB_DEVELOPMENT` · `APP_DEVELOPMENT` · `HIRING` · `PARTNERSHIP` · `CAREERS` · `OTHER`

The same vocabulary must be used by forms, CRM, and analytics — one vocabulary, several jobs.

**Contact routes:** phone, WhatsApp, email exposed in plain text, plus a consultation booking flow. For this audience a visible phone number is a meaningful trust signal.

---

## 9. Case-study model

No case study publishes without evidence and permission.

**Required per case study:** client permission · logo permission · challenge · scope · strategy · deliverables · timeline · media · results **and metric source** · testimonial and its permission · public/private status.

**Status flow:** `IDENTIFIED → AWAITING_PERMISSION → AWAITING_DATA → DRAFTING → CLIENT_REVIEW → APPROVED → PUBLISHED → ARCHIVED`

**Do not convert a plan or a strategy document into a result.** Candidates and their status are tracked in the [evidence register](docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md).

---

## 10. Future application roadmap

Direction only. Nothing below is in Version 1.

| Stage | Scope |
|---|---|
| **V1** | Marketing and lead-generation website, campaign landing pages, forms, analytics, SEO |
| Lead operations | CRM-lite, pipeline, automated acknowledgements, booking, campaign attribution |
| Client portal | Tasks, approvals, content calendar, campaign reporting, invoices |
| Operations tools | Internal trackers, shoot and content scheduling, delivery management |
| AI assistance | Approved knowledge base, service routing, FAQ assistant with human handoff |

Sequencing and inclusion require Vijay's approval. **No future capability may be presented on the V1 site as available.**

---

## 11. Non-goals for Version 1

- Via-We Connects as a service, section, or community platform
- Business Consulting as a standalone pillar
- Telugu or any bilingual layout
- Any AI assistant, chatbot, or "AI" teaser
- Login, accounts, or authenticated areas
- Published pricing
- Published client counts, metrics, logos, testimonials, partnerships, or awards
- City or campaign pages implying operational coverage that does not exist
- Any claim without a documented source

---

## 12. Success metrics

Track from launch. **Do not set targets without baseline data, and do not publish any of these.**

Consultation submissions · WhatsApp clicks · call clicks · service-page conversion · franchise enquiries by side (brand vs seeker) · landing-page conversion by campaign · qualified-lead rate · organic impressions · mobile conversion rate · page speed on mid-tier Android · form completion rate · source and campaign attribution.

---

## 13. Open decisions

| # | Decision | Owner |
|---|---|---|
| 1 | Current legal company details — name, CIN, incorporation, registered and operating offices | Vijay |
| 2 | Active vs planned branches | Vijay |
| 3 | Official phone, WhatsApp, and email | Vijay |
| 4 | Leadership names and titles | Vijay |
| 5 | Final tagline — "Your Dreams Our Aim" or replacement | Vijay |
| 6 | Direct-delivery vs partner-coordination boundary per pillar | Vijay |
| 7 | Business Setup scope, item by item | Vijay |
| 8 | Which case studies have permission | Vijay |
| 9 | Final route set | Vamshi + Vijay |
| 10 | CRM, booking system, WhatsApp API, and lead-taxonomy confirmation | Vamshi + Vijay |
| 11 | Content model — repository Markdown or headless CMS | Vamshi |
| 12 | Creative direction approval | Vijay — [ADR-004](docs/decisions/ADR-004-logo-led-extensible-service-motion.md) |
| 13 | Animation stack | Deferred until after the creative gate |
| 14 | Who owns hosting, domain, and analytics accounts | Vijay + Vamshi |

Full list with blocking status: [docs/planning/VIA-WE_MISSING_INPUTS.md](docs/planning/VIA-WE_MISSING_INPUTS.md).
