// Canonical service registry (docs/project/architect.md → Canonical service
// registry). Single source of truth: homepage, navigation, routes, metadata
// and future service pages derive from here. Never hardcode the service
// count. Scope items follow the safe themes in docs/project/content.md.
export type ServiceDefinition = {
  id: string;
  slug: string;
  title: string;
  navigationLabel: string;
  summary: string | null;
  order: number;
  status: "active" | "future" | "disabled";
  href: string;
  enquiryCategory: string | null;
  evidence: {
    publicReady: boolean;
    missing: string[];
  };
  // homepage presentation
  segment: string;
  scope: string[];
  feeds: string | null;
};

const proofPending = {
  publicReady: false,
  missing: ["approved case study", "service photography"],
};

export const services: ServiceDefinition[] = [
  {
    id: "setup",
    slug: "business-setup",
    title: "Business Setup",
    navigationLabel: "Business Setup",
    summary:
      "From requirement discovery to opening day — location, interiors, vendors and launch coordinated as one push.",
    order: 1,
    status: "active",
    href: "/services/business-setup",
    enquiryCategory: "business-setup",
    evidence: proofPending,
    segment: "Set Up",
    scope: [
      "Requirement discovery",
      "Location selection & setup",
      "Interior & vendor coordination",
      "Partner coordination",
      "Brand-launch preparation",
      "Launch marketing",
    ],
    feeds: "A running setup needs a face.",
  },
  {
    id: "brand",
    slug: "branding-digital-marketing",
    title: "Branding & Digital Marketing",
    navigationLabel: "Branding & Marketing",
    summary:
      "Identity, content and campaigns on one calendar — strategy, scripts, shoots, edits, ads, and the report that says what worked.",
    order: 2,
    status: "active",
    href: "/services/branding-digital-marketing",
    enquiryCategory: "branding-digital-marketing",
    evidence: proofPending,
    segment: "Brand & Market",
    scope: [
      "Brand identity & design",
      "Marketing strategy & calendars",
      "Social media management",
      "Shoots, reels & editing",
      "Meta & Google campaigns",
      "Reporting & optimisation",
    ],
    feeds: "An identity needs a home online.",
  },
  {
    id: "web",
    slug: "web-development",
    title: "Website Development",
    navigationLabel: "Websites",
    summary:
      "Business websites, landing pages and web applications — fast, responsive and built to be maintained.",
    order: 3,
    status: "active",
    href: "/services/web-development",
    enquiryCategory: "web-development",
    evidence: proofPending,
    segment: "Websites",
    scope: [
      "Business websites",
      "Campaign landing pages",
      "Web applications",
      "Client portals & dashboards",
      "Performance & SEO foundations",
      "Maintenance & support",
    ],
    feeds: "A growing operation wants its tools in hand.",
  },
  {
    id: "app",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    navigationLabel: "Mobile Apps",
    summary:
      "Product planning to release — mobile UI, development, API integration and testing for the tools your business carries.",
    order: 4,
    status: "active",
    href: "/services/mobile-app-development",
    enquiryCategory: "mobile-app-development",
    evidence: proofPending,
    segment: "Mobile Apps",
    scope: [
      "Product planning",
      "Mobile UI design",
      "App development",
      "API integration",
      "Testing & QA",
      "Release support",
    ],
    feeds: "A working model is ready to multiply.",
  },
  {
    id: "franchise",
    slug: "franchise-solutions",
    title: "Franchise Solutions",
    navigationLabel: "Franchise",
    summary:
      "Readiness analysis, model planning, investor enquiries and outlet launches — expansion with the operating manual written down.",
    order: 5,
    status: "active",
    href: "/services/franchise-solutions",
    enquiryCategory: "franchise-solutions",
    evidence: proofPending,
    segment: "Franchise",
    scope: [
      "Franchise-readiness analysis",
      "Model & expansion planning",
      "Investor enquiry coordination",
      "Outlet setup coordination",
      "Launch support",
      "Franchise marketing support",
    ],
    feeds: null,
  },
];

export const activeServices = services
  .filter((service) => service.status === "active")
  .sort((a, b) => a.order - b.order);
