import { describe, expect, it } from "vitest";
import { activeServices, services } from "@/content/services";

// docs/project/product.md → Current active service scope
const approvedTitles = [
  "Business Setup",
  "Branding & Digital Marketing",
  "Website Development",
  "Mobile App Development",
  "Franchise Solutions",
];

describe("service registry", () => {
  it("exposes exactly the approved active services, in order", () => {
    expect(activeServices.map((s) => s.title)).toEqual(approvedTitles);
  });

  it("keeps ids, slugs and orders unique", () => {
    const unique = (xs: unknown[]) => new Set(xs).size === xs.length;
    expect(unique(services.map((s) => s.id))).toBe(true);
    expect(unique(services.map((s) => s.slug))).toBe(true);
    expect(unique(services.map((s) => s.order))).toBe(true);
  });

  it("derives every href from its slug", () => {
    for (const s of services) expect(s.href).toBe(`/services/${s.slug}`);
  });

  it("contains no hiring, recruitment or staffing scope", () => {
    expect(JSON.stringify(services).toLowerCase()).not.toMatch(
      /hiring|recruit|staffing/,
    );
  });

  it("gives every active service a summary and scope, bridging all but the last", () => {
    for (const s of activeServices) {
      expect(s.summary).toBeTruthy();
      expect(s.scope.length).toBeGreaterThan(0);
    }
    const feeds = activeServices.map((s) => s.feeds);
    expect(feeds.slice(0, -1).every(Boolean)).toBe(true);
    expect(feeds.at(-1)).toBeNull();
  });

  it("never claims public-ready proof that does not exist", () => {
    for (const s of services) expect(s.evidence.publicReady).toBe(false);
  });
});
