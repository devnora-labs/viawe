import { describe, expect, it } from "vitest";
import { site, social } from "@/content/site";

describe("site identity", () => {
  // docs/project/brand.md → Approved identity
  it("renders the tagline exactly as approved — uppercase, no punctuation", () => {
    expect(site.tagline).toBe("YOUR DREAMS OUR AIM");
  });

  it("uses the approved legal lockup and never the 360 naming", () => {
    expect(site.legal).toBe("VIA-WE Services Pvt. Ltd.");
    expect(JSON.stringify(site)).not.toContain("360");
  });

  // docs/project/content.md → Contact content
  it("lists Instagram as the only public social platform", () => {
    expect(social).toEqual([
      { label: "Instagram", href: "https://instagram.com/viawe_services" },
    ]);
  });

  it("keeps hiring and recruitment out of the public positioning", () => {
    expect(site.support.toLowerCase()).not.toMatch(/hiring|recruit/);
  });
});
