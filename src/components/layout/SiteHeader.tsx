import Link from "next/link";

import { primaryNavigation } from "@/content/navigation";
import { site } from "@/content/site";

/**
 * Header shell — structural only.
 *
 * ⚠ NO LOGO ARTWORK. Blocker B1 is OPEN: zero production logo vectors
 * exist, and the two raster references live in the Git-ignored `private/`
 * tree. Committing them or tracing them is prohibited
 * (AGENTS.md §9, truth file §15.7).
 *
 * The brand is therefore rendered as TEXT using the exact approved
 * wording. "Services Pvt. Ltd." is intentionally part of the approved
 * lockup and may remain visible in the header (truth file §15.7).
 *
 * When approved SVGs arrive, only this component changes.
 */
export function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--vw-border-subtle)",
        backgroundColor: "var(--vw-surface-page)",
      }}
    >
      <div
        className="vw-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--vw-space-sm)",
          minHeight: "4rem",
          paddingBlock: "var(--vw-space-xs)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--vw-font-display)",
            fontWeight: "var(--vw-weight-bold)",
            fontSize: "var(--vw-text-lead)",
            letterSpacing: "var(--vw-tracking-tight)",
            color: "var(--vw-text-primary)",
            textDecoration: "none",
          }}
        >
          {site.brandName}
        </Link>

        <nav aria-label="Primary">
          <ul
            style={{
              display: "flex",
              gap: "var(--vw-space-md)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                {item.available ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  // The destination cannot publish honestly yet, so it is
                  // not a link. A nav item that leads nowhere is worse
                  // than one that is visibly not ready.
                  <span
                    style={{ color: "var(--vw-text-muted)" }}
                    title="Route not built yet — Phase 7"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
