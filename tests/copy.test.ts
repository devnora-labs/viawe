import { describe, expect, it } from "vitest";
import { cta } from "@/content/copy";

// docs/project/content.md → CTA vocabulary
describe("CTA vocabulary", () => {
  it("uses only the approved CTA wording", () => {
    expect(cta.start).toBe("Start a conversation");
    expect(cta.explore).toBe("Explore what we do");
    expect(cta.whatsapp).toBe("Start on WhatsApp");
  });

  it("avoids the banned CTA phrases", () => {
    const banned = [/submit/i, /click here/i, /learn more/i, /unlock/i, /elevate/i];
    for (const label of Object.values(cta)) {
      for (const pattern of banned) expect(label).not.toMatch(pattern);
    }
  });
});
