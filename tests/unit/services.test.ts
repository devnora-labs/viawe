import { describe, expect, it } from "vitest";

import {
  findInvariantViolations,
  assertRegistryInvariants,
} from "@/content/services.invariants";
import {
  activeServices,
  getServiceById,
  getServiceBySlug,
  publishableServices,
  services,
  PROHIBITED_V1_SERVICE_TITLES,
  type ServiceDefinition,
} from "@/content/services";
import { PROHIBITED_BRAND_STRINGS, site } from "@/content/site";
import { serviceNavigation } from "@/content/navigation";

/**
 * Contract: docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md §5.
 */

describe("Version 1 service scope (ADR-002)", () => {
  it("has exactly five active services", () => {
    expect(activeServices).toHaveLength(5);
  });

  it("uses the exact approved titles, in order", () => {
    expect(activeServices.map((s) => s.title)).toEqual([
      "Digital Marketing & Branding",
      "Business Setup",
      "Franchise Solutions",
      "Web & App Development",
      "Hiring & Recruitment",
    ]);
  });

  it("uses the slugs locked by the registry contract §2.1", () => {
    expect(activeServices.map((s) => s.slug)).toEqual([
      "digital-marketing-branding",
      "business-setup",
      "franchise-solutions",
      "web-app-development",
      "hiring-recruitment",
    ]);
  });

  it("does not activate any prohibited Version 1 service", () => {
    const titles = activeServices.map((s) => s.title);
    for (const prohibited of PROHIBITED_V1_SERVICE_TITLES) {
      expect(titles).not.toContain(prohibited);
    }
  });

  it("does not contain Business Consulting or Via-We Connects in any status", () => {
    const titles = services.map((s) => s.title);
    expect(titles).not.toContain("Business Consulting");
    expect(titles).not.toContain("Via-We Connects");
  });
});

describe("registry invariants", () => {
  it("the shipped registry satisfies every invariant", () => {
    expect(findInvariantViolations(services)).toEqual([]);
    expect(() => assertRegistryInvariants(services)).not.toThrow();
  });

  it("ids are unique", () => {
    const ids = services.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("slugs are unique", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("display order is unique", () => {
    const orders = services.map((s) => s.order);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it("every route is derived from its slug, never hand-authored", () => {
    for (const service of services) {
      expect(service.page.href).toBe(`/services/${service.slug}`);
    }
  });

  it("detects a duplicate slug", () => {
    const first = services[0]!;
    const broken = [...services, { ...first, id: "clone", order: 99 }];
    const violations = findInvariantViolations(broken);
    expect(violations.some((v) => v.invariant === "unique-slug")).toBe(true);
  });

  it("detects a duplicate order", () => {
    const first = services[0]!;
    const broken = [
      ...services,
      { ...first, id: "clone", slug: "clone", page: { enabled: false, href: "/services/clone" } },
    ];
    expect(
      findInvariantViolations(broken).some((v) => v.invariant === "unique-order"),
    ).toBe(true);
  });

  it("detects invented copy while inputs are still missing", () => {
    const first = services[0]!;
    const broken: ServiceDefinition[] = [
      { ...first, shortDescription: "India's best digital marketing agency." },
      ...services.slice(1),
    ];
    expect(
      findInvariantViolations(broken).some(
        (v) => v.invariant === "no-invented-copy",
      ),
    ).toBe(true);
  });

  it("detects a service claiming public readiness while blocked", () => {
    const first = services[0]!;
    const broken: ServiceDefinition[] = [
      { ...first, evidence: { publicReady: true, missing: ["B8"] } },
      ...services.slice(1),
    ];
    expect(
      findInvariantViolations(broken).some(
        (v) => v.invariant === "honest-evidence-state",
      ),
    ).toBe(true);
  });

  it("detects a non-active service left publicly renderable", () => {
    const broken: ServiceDefinition[] = [
      ...services,
      {
        ...services[0]!,
        id: "future-one",
        slug: "future-one",
        order: 99,
        status: "future",
        page: { enabled: true, href: "/services/future-one" },
      },
    ];
    expect(
      findInvariantViolations(broken).some(
        (v) => v.invariant === "non-active-not-rendered",
      ),
    ).toBe(true);
  });
});

describe("evidence honesty", () => {
  it("no active service is public-ready yet", () => {
    for (const service of activeServices) {
      expect(service.evidence.publicReady).toBe(false);
    }
  });

  it("every active service names its blocking inputs", () => {
    for (const service of activeServices) {
      expect(service.evidence.missing).toEqual(["B8", "C1", "C2", "T4"]);
    }
  });

  it("no blocked copy field is populated", () => {
    for (const service of activeServices) {
      expect(service.shortDescription).toBeNull();
      expect(service.seo.description).toBeNull();
      expect(service.primaryCta.label).toBeNull();
      expect(service.enquiryCategory).toBeNull();
    }
  });

  it("publishes nothing while the content gates are open", () => {
    expect(publishableServices()).toHaveLength(0);
  });
});

describe("lookup helpers", () => {
  it("finds a service by id", () => {
    expect(getServiceById("franchise-solutions")?.title).toBe(
      "Franchise Solutions",
    );
  });

  it("finds a service by slug", () => {
    expect(getServiceBySlug("web-app-development")?.order).toBe(4);
  });

  it("returns undefined for unknown keys rather than guessing", () => {
    expect(getServiceById("business-consulting")).toBeUndefined();
    expect(getServiceBySlug("via-we-connects")).toBeUndefined();
  });
});

describe("active-services filtering", () => {
  it("excludes future and disabled services", () => {
    const list: ServiceDefinition[] = [
      ...services,
      { ...services[0]!, id: "f", slug: "f", order: 90, status: "future", page: { enabled: false, href: "/services/f" } },
      { ...services[0]!, id: "d", slug: "d", order: 91, status: "disabled", page: { enabled: false, href: "/services/d" } },
    ];
    const active = list.filter((s) => s.status === "active");
    expect(active).toHaveLength(5);
    expect(active.map((s) => s.id)).not.toContain("f");
    expect(active.map((s) => s.id)).not.toContain("d");
  });

  it("returns active services sorted by display order", () => {
    const orders = activeServices.map((s) => s.order);
    expect(orders).toEqual([...orders].slice().sort((a, b) => a - b));
  });

  it("derives navigation from the registry, in the same order", () => {
    expect(serviceNavigation).toHaveLength(activeServices.length);
    expect(serviceNavigation.map((n) => n.label)).toEqual(
      activeServices.map((s) => s.navigationLabel),
    );
    expect(serviceNavigation.map((n) => n.href)).toEqual(
      activeServices.map((s) => s.page.href),
    );
  });
});

/**
 * THE ACCEPTANCE TEST — registry contract §5.1.
 *
 * Activating a sixth service must be ONE record and nothing else.
 */
describe("six-service extensibility (contract §5.1)", () => {
  const sixth: ServiceDefinition = {
    id: "sixth-service-probe",
    slug: "sixth-service-probe",
    title: "Sixth Service Probe",
    navigationLabel: "Sixth Service Probe",
    shortDescription: null,
    order: 6,
    status: "active",
    heroSegmentLabel: "Probe",
    primaryCta: { label: null, intent: null },
    enquiryCategory: null,
    seo: { title: "Sixth Service Probe", description: null },
    page: { enabled: false, href: "/services/sixth-service-probe" },
    evidence: { publicReady: false, missing: ["B8", "C1", "C2", "T4"] },
  };

  const extended = [...services, sixth];
  const extendedActive = extended
    .filter((s) => s.status === "active")
    .slice()
    .sort((a, b) => a.order - b.order);

  it("adding one record still satisfies every invariant", () => {
    expect(findInvariantViolations(extended)).toEqual([]);
  });

  it("the active count follows from data alone", () => {
    expect(extendedActive).toHaveLength(6);
  });

  it("navigation follows from data alone", () => {
    const nav = extendedActive.map((s) => ({
      label: s.navigationLabel,
      href: s.page.href,
    }));
    expect(nav).toHaveLength(6);
    expect(nav.at(-1)?.href).toBe("/services/sixth-service-probe");
  });

  it("segment geometry follows from activeServices.length, never the literal 5", () => {
    const segmentAngle = 360 / extendedActive.length;
    expect(segmentAngle).toBeCloseTo(60);
    expect(360 / activeServices.length).toBeCloseTo(72);
  });
});

describe("brand truth", () => {
  it("uses the exact official brand name", () => {
    expect(site.brandName).toBe("VIA-WE Services Pvt. Ltd.");
  });

  it("uses the exact tagline with no comma", () => {
    expect(site.tagline).toBe("YOUR DREAMS OUR AIM");
    expect(site.tagline).not.toContain(",");
  });

  it("never renders a prohibited brand string", () => {
    const surface = JSON.stringify({ site, services });
    for (const prohibited of PROHIBITED_BRAND_STRINGS) {
      expect(surface).not.toContain(prohibited);
    }
  });

  it("carries no contact, address, leadership or proof value", () => {
    const surface = JSON.stringify({ site, services });
    expect(surface).not.toMatch(/\+?91[ -]?\d{10}/);
    expect(surface).not.toMatch(/[\w.]+@[\w.]+\.\w{2,}/);
  });
});
