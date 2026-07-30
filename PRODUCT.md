# PRODUCT.md — ViaWe

> **Master handoff:** `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md` — the single source of truth. This document summarizes key product decisions from the handoff. When in doubt, cross-reference the handoff.

## What ViaWe is

**Via-We Services Private Limited** is positioned as a **Business Growth Ecosystem** — not just a digital marketing agency.

**Primary headline:** *We Build, Brand & Grow Businesses.*

ViaWe coordinates services across the full business lifecycle: setup, identity, marketing, technology, hiring, consulting, networking, and franchise expansion. The core value proposition is a single coordinated partner instead of fragmented vendors.

### Company identity

- **CIN:** U70200AP2025PTC117722 (must verify before launch)
- **Incorporation:** 11 February 2025, RoC Vijayawada
- **Current office:** Vijayawada (operating)
- **Registered office:** AP TIDCO Houses, TF 3, A6 Block, Mangalagiri, Andhra Pradesh 522503
- **Leadership (unverified):** Vijay Budati — Founder & CEO; Krishnaveni Budati — Managing Director
- **Phone (unverified):** +91 9948880003
- **Domain:** via-we.in
- **Expansion planned:** Hyderabad, Bengaluru (mark as planned, not active)

## Primary positioning

**Category:** Business Growth Ecosystem / Complete Business Growth Partner

**Differentiator:** ViaWe participates across the entire business journey, not just marketing:
- Setup → Brand → Market → Build → Hire → Franchise → Connect

**Ten-second understanding (target):**
1. We Set Up Businesses
2. We Build Brands
3. We Help Businesses Grow

## Audience segments

1. **New entrepreneurs** — need setup, branding, launch marketing, initial customers
2. **Existing SMBs** — need stronger branding, digital campaigns, websites, lead gen, hiring
3. **Brands preparing to franchise** — readiness analysis, model selection, SOPs, investor materials
4. **Franchise seekers / investors** — opportunity discovery, budget matching, setup support
5. **Businesses seeking technology** — websites, apps, dashboards, automation, AI systems
6. **Employers seeking staff** — role definition, sourcing, screening, onboarding
7. **ViaWe Connects participants** — networking, referrals, learning, collaboration

## Service architecture — Seven Pillars

These must be consistent across navigation, homepage, footer, forms, CRM, content taxonomy, and analytics:

| # | Pillar | Slug |
|---|---|---|
| 1 | Digital Marketing & Branding | `/solutions/digital-marketing-branding` |
| 2 | Business Setup Facilitation | `/solutions/business-setup` |
| 3 | Franchise Solutions | `/franchise` |
| 4 | Website & App Development | `/solutions/web-app-development` |
| 5 | Business Consulting & Growth Strategy | `/solutions/business-consulting-growth` |
| 6 | Hiring & Recruitment Support | `/solutions/hiring-recruitment` |
| 7 | Via-We Connects | `/connects` |

### Franchise model (two-sided)
- **For brands:** franchise-readiness → model design (FOCO/FOFO/COCO) → SOPs → lead gen → launch
- **For seekers:** goals → budget → industry → city → opportunity discovery → consultation
- **Mandatory:** legal disclaimer on every franchise page. No guaranteed returns.

## Product phases (proposed)

| Phase | Scope |
|---|---|
| **0 — Discovery** | Legal verification, service confirmation, asset collection, content matrix |
| **1 — Premium website** | Core pages, services, franchise, connects, portfolio, forms, analytics, SEO, CMS |
| **1.5 — Lead ops** | CRM-lite, pipeline, automated acknowledgements, booking, campaign attribution |
| **2 — VIA AI foundation** | Approved knowledge base, service routing, FAQ assistant, human handoff |
| **3 — Business Setup Wizard** | Multi-step questionnaire, recommendations, consultation output |
| **4 — Marketing tools** | Website audit, content idea generator, quote estimate, proposal generation |
| **5 — Connects platform** | Accounts, profiles, events, check-in, referral, matchmaking |
| **6 — Client portal** | Tasks, approvals, content calendar, campaign reporting, invoices |

**V1 launch is Phase 1 only.** Do not scope-creep later phases into the initial site.

## V1 sitemap (proposed)

```
/                              Home
/solutions                     Services overview
/solutions/business-setup
/solutions/digital-marketing-branding
/solutions/web-app-development
/solutions/business-consulting-growth
/solutions/hiring-recruitment
/franchise                     Franchise hub
/franchise/for-brands          Brand-owner path
/franchise/opportunities       Franchise-seeker path
/connects                      ViaWe Connects
/connects/events
/connects/events/[slug]
/work                          Portfolio / case studies
/work/[slug]
/about                         Company info
/team
/insights                      Blog / articles
/insights/[slug]
/contact                       Contact page
/book-consultation             Booking form
/privacy                       (legal)
/terms                         (legal)
/cookies                       (legal)
/disclaimer                    (legal)
```

City pages (`/city/[city]`) and campaign pages (`/campaign/[slug]`) only when operational coverage is real.

## Tech decisions

| Decision | Status |
|---|---|
| Next.js App Router + TypeScript | [PROPOSED] — recommended starting point |
| Tailwind CSS | [PROPOSED] |
| No auth for public V1 | Confirmed — no login required |
| PostgreSQL + Prisma/Drizzle | [PROPOSED] — defer until dynamic forms/events/CRM needed |
| Separate NestJS backend | [PROPOSED] — **do not create** unless justified |
| Headless CMS vs repo content | Undecided |
| Resend for transactional email | [PROPOSED] |
| Zod for form validation | [PROPOSED] |
| Cloudinary for media | [PROPOSED] |
| Vercel hosting + Cloudflare DNS | [PROPOSED] |

## Success metrics

Track but do not set targets without baseline data:
- Consultation form submissions, WhatsApp clicks, call clicks
- Service-page conversion, franchise enquiries (brand + seeker)
- Connects registrations, portfolio engagement
- Organic search impressions, qualified lead rate, mobile conversion
- Page speed, form completion rate, source/campaign attribution

## Design direction

**Reference:** Apple-like clarity + Stripe-like product storytelling + premium corporate editorial.

- One clear message per section, generous white space, large headings
- Real photography preferred (team, office, events, client work) — no AI-generated imagery
- Motion that explains content, not decoration. Respect `prefers-reduced-motion`.
- WCAG 2.2 AA wherever practical.
- Mobile-first: thumb-friendly CTAs, compressed nav, direct WhatsApp/call actions.

## Open questions (requires Vijay before implementation)

See handoff §§76–82. Key unresolved items:
- Exact MCA status, registered vs operating office, active branches
- Which seven pillars are currently active vs planned
- Whether old-site services (beauty/grooming, technicians, education consultancy, skill development) are still active
- Approved pricing, contract terms, payment schedule
- Real client count, project count, approved case studies
- Whether ViaWe franchises itself or only consults client brands
- Connects: active now? membership model? next event?
- CRM choice, booking system, WhatsApp API, payment provider
- Who maintains content and owns hosting/accounts
