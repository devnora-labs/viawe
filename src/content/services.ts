/**
 * VIA-WE Services Pvt. Ltd. — CANONICAL SERVICE REGISTRY
 * =====================================================
 *
 * THE single implementation source for Via-We's service system.
 *
 * Contract: docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md
 * Decision: docs/decisions/ADR-002-v1-active-service-scope.md (accepted)
 * Constraint: docs/decisions/ADR-004-…-service-motion.md §3 (binding)
 *
 *   > The active service list is data. It is never structure.
 *
 * Navigation, routes, the sitemap, the homepage service experience, the
 * future signature animation, enquiry categories and the analytics
 * vocabulary all derive from this file.
 *
 * ┌────────────────────────────────────────────────────────────────┐
 * │ NO COMPONENT, PAGE, ROUTE OR ANIMATION MAY DECLARE ITS OWN     │
 * │ SERVICE ARRAY, OR HARDCODE THE NUMBER 5.                       │
 * │ Segment/geometry counts come from `activeServices.length`.     │
 * └────────────────────────────────────────────────────────────────┘
 *
 * ACCEPTANCE TEST (contract §5.1): activating a sixth service is ONE new
 * record with `status: "active"` and nothing else. Enforced in
 * tests/unit/services.test.ts.
 */

export type ServiceStatus = "active" | "future" | "disabled";

/**
 * A field typed `string | null` is BLOCKED, not forgotten.
 *
 * `null` means: the value requires owner input that does not exist yet,
 * and inventing it would breach AGENTS.md §9. The blocking input's
 * identifier is listed in `evidence.missing`.
 */
export type ServiceDefinition = {
  /** Stable and immutable. Never renamed, never reused — analytics and
   *  enquiry records are keyed to it. */
  readonly id: string;
  /** Unique. Drives the route `/services/{slug}`. */
  readonly slug: string;
  /** Exact public label. Verified against ADR-002. Not to be renamed. */
  readonly title: string;
  /** May be shorter than `title`. Currently equal — shortening is a copy
   *  decision, not an implementation decision. */
  readonly navigationLabel: string;
  /** BLOCKED by B8 (direct vs partner delivery) and C1/C2 (scope). */
  readonly shortDescription: string | null;
  /** Unique. Drives display order and segment order. */
  readonly order: number;
  readonly status: ServiceStatus;
  /** Label used in the future 360 orbital segment. Source: business truth
   *  v2 §6. The creative direction it belongs to is still PROPOSED. */
  readonly heroSegmentLabel: string;
  readonly primaryCta: {
    /** BLOCKED by T4 — final CTA copy is not approved. */
    readonly label: string | null;
    readonly intent: string | null;
  };
  /** BLOCKED by T4 — must be confirmed against the real CRM. */
  readonly enquiryCategory: string | null;
  readonly seo: {
    /** Derived from confirmed facts (service name + official brand name).
     *  Not invented marketing copy. */
    readonly title: string;
    /** BLOCKED by C1/C2. */
    readonly description: string | null;
  };
  readonly page: {
    /** False until the page can publish honestly. A service page cannot
     *  render without B8/C1/C2, so no route is generated for it yet. */
    readonly enabled: boolean;
    readonly href: string;
  };
  readonly evidence: {
    readonly publicReady: boolean;
    /** Missing-input identifiers from docs/planning/VIA-WE_MISSING_INPUTS.md */
    readonly missing: readonly string[];
  };
};

/** Blockers gating the copy fields of every active service today. */
const CONTENT_GATES = ["B8", "C1", "C2", "T4"] as const;

const BRAND = "VIA-WE Services Pvt. Ltd.";

export const services: readonly ServiceDefinition[] = [
  {
    id: "digital-marketing-branding",
    slug: "digital-marketing-branding",
    title: "Digital Marketing & Branding",
    navigationLabel: "Digital Marketing & Branding",
    shortDescription: null,
    order: 1,
    status: "active",
    heroSegmentLabel: "Brand & Market",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: `Digital Marketing & Branding — ${BRAND}`, description: null },
    page: { enabled: false, href: "/services/digital-marketing-branding" },
    evidence: { publicReady: false, missing: CONTENT_GATES },
  },
  {
    id: "business-setup",
    slug: "business-setup",
    title: "Business Setup",
    navigationLabel: "Business Setup",
    shortDescription: null,
    order: 2,
    status: "active",
    heroSegmentLabel: "Set Up",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: `Business Setup — ${BRAND}`, description: null },
    page: { enabled: false, href: "/services/business-setup" },
    evidence: { publicReady: false, missing: CONTENT_GATES },
  },
  {
    id: "franchise-solutions",
    slug: "franchise-solutions",
    title: "Franchise Solutions",
    navigationLabel: "Franchise Solutions",
    shortDescription: null,
    order: 3,
    status: "active",
    heroSegmentLabel: "Franchise",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: `Franchise Solutions — ${BRAND}`, description: null },
    page: { enabled: false, href: "/services/franchise-solutions" },
    evidence: { publicReady: false, missing: CONTENT_GATES },
  },
  {
    id: "web-app-development",
    slug: "web-app-development",
    title: "Web & App Development",
    navigationLabel: "Web & App Development",
    shortDescription: null,
    order: 4,
    status: "active",
    heroSegmentLabel: "Build Digital",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: `Web & App Development — ${BRAND}`, description: null },
    page: { enabled: false, href: "/services/web-app-development" },
    evidence: { publicReady: false, missing: CONTENT_GATES },
  },
  {
    id: "hiring-recruitment",
    slug: "hiring-recruitment",
    title: "Hiring & Recruitment",
    navigationLabel: "Hiring & Recruitment",
    shortDescription: null,
    order: 5,
    status: "active",
    heroSegmentLabel: "Hire",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: `Hiring & Recruitment — ${BRAND}`, description: null },
    page: { enabled: false, href: "/services/hiring-recruitment" },
    evidence: { publicReady: false, missing: CONTENT_GATES },
  },
];

/**
 * Services shown to the public, in display order.
 *
 * `activeServices.length` is the ONLY permitted source for a service
 * count anywhere in the application — including animation geometry.
 */
export const activeServices: readonly ServiceDefinition[] = services
  .filter((service) => service.status === "active")
  .slice()
  .sort((a, b) => a.order - b.order);

export function getServiceById(id: string): ServiceDefinition | undefined {
  return services.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}

/** Only services whose page may actually publish. Currently none — every
 *  active service is gated on B8/C1/C2. */
export function publishableServices(): readonly ServiceDefinition[] {
  return activeServices.filter(
    (service) => service.page.enabled && service.evidence.publicReady,
  );
}

/**
 * Categories that must NEVER appear as standalone Version 1 services.
 *
 * Source: ADR-002, business truth v2 §3, AGENTS.md §4. Kept here so the
 * prohibition is testable rather than a comment someone can overlook.
 */
export const PROHIBITED_V1_SERVICE_TITLES: readonly string[] = [
  "Business Consulting & Growth Strategy",
  "Business Consulting",
  "Via-We Connects",
  "Skill Development",
  "Product Analysis",
  "Product Services",
  "Printing Services",
  "Infrastructure Making",
  "Offline Marketing",
];
