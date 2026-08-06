import { describe, expect, it } from "vitest";
import { approach, stages } from "@/content/stages";

// docs/project/content.md → Road
describe("the road", () => {
  it("travels Setup → Brand → Build → Market → Grow → Expand", () => {
    expect(stages.map((s) => s.name)).toEqual([
      "Setup",
      "Brand",
      "Build",
      "Market",
      "Grow",
      "Expand",
    ]);
  });

  it("gives every stage a line and a media slot with alt text", () => {
    for (const s of stages) {
      expect(s.line.length).toBeGreaterThan(0);
      expect(s.shot.src).toBeTruthy();
      expect(s.shot.alt.length).toBeGreaterThan(0);
    }
  });

  it("keeps hiring off the road", () => {
    expect(JSON.stringify(stages).toLowerCase()).not.toMatch(
      /hire|hiring|recruit/,
    );
  });

  it("keeps the rhythm to its four working steps", () => {
    expect(approach).toHaveLength(4);
    for (const step of approach) expect(step.line.length).toBeGreaterThan(0);
  });
});
