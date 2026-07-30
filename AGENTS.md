# AGENTS.md — ViaWe

## Project status

This repo is in **pre-development**. No code exists yet. The master handoff document is the single source of truth.

**Master handoff:** `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md` (cross-reference before any implementation decision).

## Non-negotiable rules

These come from the handoff and are enforced for every contribution:

1. **Never invent business information** — no client counts, project counts, revenue, success rates, locations, partnerships, testimonials, awards, years of experience, guarantees, or pricing unless Vijay has explicitly approved it.
2. **All public copy requires Vijay's approval** before merging.
3. **Never copy content from the old via-we.in site** without verification — it contains unverified claims.
4. **Do not present future offices/features as available.** If the handoff says a city is planned, mark it as such.
5. **No fake testimonials, fake profiles, fake metrics, or AI-generated team imagery.**
6. **No franchise return guarantees, investment advice, or "verified" language** unless a documented verification process exists.
7. **All forms must record consent** — privacy, marketing communication, and event photography where applicable.
8. **Do not publish exact pricing** without Vijay's written approval.

## Evidence labels

All code comments, commit messages, and docs reference one of these labels to indicate source confidence:

| Label | Meaning |
|---|---|
| `[DIRECT]` | Directly stated by Vijay or Vamshi |
| `[BRIEF]` | Present in the uploaded design brief |
| `[VERIFY]` | Must be confirmed before publication |
| `[PROPOSED]` | Recommendation, not approved |
| `[NOT APPROVED]` | Must not be treated as final |

When claiming something is `[DIRECT]`, be prepared to cite the handoff section.

## Tech stack (proposed, not all confirmed)

- **Framework:** Next.js App Router, TypeScript
- **Styling:** Tailwind CSS
- **Content:** Headless CMS or repo-based content (MDX/Markdown)
- **Database:** PostgreSQL (not in V1 unless dynamic forms/events need it)
- **ORM:** Prisma or Drizzle
- **Auth:** Not required for public V1 (no login)
- **Email:** Resend or equivalent transactional provider
- **Forms:** Server Actions / API routes with Zod validation
- **Media:** Cloudinary or equivalent
- **Analytics:** GA4 + GA consent
- **Hosting:** Vercel
- **DNS/CDN:** Cloudflare

**Architecture rule from handoff:** Do not create a separate NestJS backend unless requirements justify it (complex workflows, independent scaling, background jobs, multiple clients). A Next.js monolith is the V1 starting point.

## Repository structure (proposed)

The handoff recommends:
```
src/
  app/          — App Router routes (route groups for marketing, api, admin)
  components/   — ui/, layout/, sections/, forms/, media/, motion/
  features/     — leads/, events/, case-studies/, services/, seo/, analytics/
  content/      — content matrix (pages, services, case-studies, events, legal)
  lib/          — db/, email/, validation/, security/, analytics/, utilities/
  styles/
  types/
public/
  brand/ images/ videos/ documents/
docs/           — product/, design/, content/, legal/, runbooks/, decisions/
tests/          — unit/, integration/, e2e/, accessibility/
```

## Route map (proposed)

See handoff §21.4 for the full sitemap. Key routes:

```
/                          Home
/solutions                 Services overview
/solutions/[service-slug]  Individual service pages
/franchise                 Franchise hub
/franchise/for-brands      Brand-owner path
/franchise/opportunities   Franchise-seeker path
/connects                  ViaWe Connects community
/work                      Portfolio / case studies
/about                     Company info
/insights                  Blog / articles
/contact                   Contact page
/book-consultation         Booking form
/privacy, /terms, /cookies, /disclaimer
```

## Service taxonomy

Seven pillars (consistent across nav, content, forms, analytics):

1. Digital Marketing & Branding
2. Business Setup Facilitation
3. Franchise Solutions
4. Website & App Development
5. Business Consulting & Growth Strategy
6. Hiring & Recruitment Support
7. Via-We Connects

## Content governance

- Every page must have `status`, `owner`, `approver`, `lastReviewedAt`, `reviewDueAt`.
- Status values: `DRAFT → IN_REVIEW → APPROVED → PUBLISHED → ARCHIVED`.
- Never silently change business wording — text changes must be tracked and reviewed.
- Legal pages are mandatory: Privacy Policy, Terms, Cookie Policy, Disclaimer, Franchise Disclaimer, Event Terms.

## Lead taxonomy

Lead types for forms and CRM: `GENERAL`, `BUSINESS_SETUP`, `DIGITAL_MARKETING`, `BRANDING`, `CONTENT_PRODUCTION`, `WEB_DEVELOPMENT`, `APP_DEVELOPMENT`, `BUSINESS_CONSULTING`, `HIRING`, `FRANCHISE_BRAND`, `FRANCHISE_SEEKER`, `VIA_WE_CONNECTS`, `PARTNERSHIP`, `CAREERS`, `OTHER`.

## Design constraints

- Target: Apple-like clarity, Stripe-like product storytelling, premium corporate editorial.
- Avoid: generic templates, dark neon tech pages, AI-generated stock visuals, scroll-jacking, autoplay audio, long intro loaders.
- Accessibility: WCAG 2.2 AA where practical. Respect `prefers-reduced-motion`.
- Mobile is not a scaled-down desktop — thumb-friendly CTAs, compressed nav, direct WhatsApp/call actions.

## Writing tone

- Direct sentences, confident but evidence-based, outcome-oriented.
- Never: "best agency," "No. 1," "guaranteed success," "100% result," "world-class" without proof.
- Prefer: concrete service descriptions with scope, process, deliverables.
