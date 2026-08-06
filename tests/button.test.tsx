import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { cta } from "@/content/copy";

// docs/project/brand.md → UI treatment: one clear primary CTA, quiet secondary
describe("Button", () => {
  it("renders an accessible link with the approved label", () => {
    render(<Button href="#contact">{cta.start}</Button>);
    const link = screen.getByRole("link", { name: cta.start });
    expect(link.getAttribute("href")).toBe("#contact");
    expect(link.className).toContain("bg-brand");
  });

  it("keeps the quiet variant a plain link, visually subordinate", () => {
    render(
      <Button href="#services" quiet>
        {cta.explore}
      </Button>,
    );
    const link = screen.getByRole("link", { name: cta.explore });
    expect(link.getAttribute("href")).toBe("#services");
    expect(link.className).not.toContain("bg-brand");
  });
});
