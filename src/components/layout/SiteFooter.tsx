import { site } from "@/content/site";

/**
 * Footer shell — structural only.
 *
 * Deliberately contains NO phone, WhatsApp, email, address, office
 * location, leadership name, legal-page link, client logo or social
 * account. Every one of those is either unsupplied or supplied but
 * UNAPPROVED for public display (B4, B5, B6, B11, C11).
 *
 * They are absent rather than placeholdered, because a placeholder in a
 * footer is the shape most likely to survive into production.
 */
export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--vw-border-subtle)",
        marginTop: "var(--vw-space-2xl)",
        paddingBlock: "var(--vw-space-lg)",
        backgroundColor: "var(--vw-surface-sunken)",
      }}
    >
      <div
        className="vw-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--vw-space-md)",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--vw-font-display)",
              fontWeight: "var(--vw-weight-medium)",
            }}
          >
            {site.brandName}
          </p>
          {/* Exact approved tagline. No comma, ever. */}
          <p
            className="vw-label"
            style={{ marginTop: "var(--vw-space-3xs)" }}
          >
            {site.tagline}
          </p>
        </div>

        <p style={{ color: "var(--vw-text-muted)", fontSize: "var(--vw-text-small)" }}>
          Contact details, office information and legal pages are not
          published yet — pending approval.
        </p>
      </div>
    </footer>
  );
}
