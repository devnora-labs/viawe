import { activeServices } from "@/content/services";
import { site } from "@/content/site";

/**
 * PHASE 1 FOUNDATION PAGE — NOT THE HOMEPAGE.
 *
 * This page exists to prove the foundation works:
 *   - the application renders
 *   - design tokens resolve
 *   - typography tokens resolve
 *   - the five services load from the canonical registry
 *   - responsive layout holds at 360 px
 *   - the accessibility foundation works
 *
 * It is deliberately plain. The real homepage is Phase 4, after the
 * reference teardown, palette derivation and IA approval. There is no
 * hero, no polished section, no proof strip, no testimonial, no metric,
 * no client logo, no case study and no animation — every one of those is
 * either a later phase or blocked on evidence.
 */
export default function FoundationPage() {
  return (
    <div
      className="vw-container"
      style={{ paddingBlock: "var(--vw-space-xl)" }}
    >
      <p className="vw-label">Phase 1 · Application foundation</p>

      <h1 style={{ marginTop: "var(--vw-space-sm)" }}>{site.headline}</h1>

      <p
        style={{
          marginTop: "var(--vw-space-md)",
          fontSize: "var(--vw-text-lead)",
          color: "var(--vw-text-secondary)",
        }}
      >
        {site.summary}
      </p>

      <p
        style={{
          marginTop: "var(--vw-space-sm)",
          color: "var(--vw-text-muted)",
        }}
      >
        {site.brandName} is a {site.category}.
      </p>

      {/* ------------------------------------------------------------
       * Services — read from the canonical registry, never listed here.
       * The count comes from activeServices.length, never the literal 5.
       * ------------------------------------------------------------ */}
      <section
        aria-labelledby="services-heading"
        style={{ marginTop: "var(--vw-space-xl)" }}
      >
        <h2 id="services-heading">Version 1 services</h2>

        <p
          style={{
            marginTop: "var(--vw-space-xs)",
            color: "var(--vw-text-muted)",
          }}
        >
          {activeServices.length} active services, loaded from the canonical
          registry. A set, not a sequence — deliberately not numbered.
        </p>

        <ul
          style={{
            listStyle: "none",
            marginTop: "var(--vw-space-md)",
            display: "grid",
            gap: "var(--vw-space-sm)",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
          }}
        >
          {activeServices.map((service) => (
            <li
              key={service.id}
              style={{
                border: "1px solid var(--vw-border-subtle)",
                borderRadius: "var(--vw-radius-md)",
                padding: "var(--vw-space-sm)",
              }}
            >
              <h3 style={{ fontSize: "var(--vw-text-lead)" }}>
                {service.title}
              </h3>

              <p
                style={{
                  marginTop: "var(--vw-space-3xs)",
                  fontSize: "var(--vw-text-small)",
                  color: "var(--vw-text-muted)",
                }}
              >
                {service.shortDescription ?? (
                  <span>
                    [NEEDS COPY: service scope — blocked by{" "}
                    {service.evidence.missing.join(", ")}]
                  </span>
                )}
              </p>

              <p
                className="vw-label"
                style={{ marginTop: "var(--vw-space-2xs)" }}
              >
                {service.slug}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------
       * Foundation status — a development panel, not site content.
       * ------------------------------------------------------------ */}
      <section
        aria-labelledby="foundation-heading"
        style={{
          marginTop: "var(--vw-space-xl)",
          borderTop: "1px solid var(--vw-border-subtle)",
          paddingTop: "var(--vw-space-lg)",
        }}
      >
        <h2 id="foundation-heading">Foundation status</h2>

        <p style={{ marginTop: "var(--vw-space-xs)" }}>
          This page is a structural scaffold for review. It is not the Via-We
          homepage and does not represent the final design.
        </p>

        <dl style={{ marginTop: "var(--vw-space-md)" }}>
          {[
            ["Display typeface", "TEMPORARY — blocked by B2, not final"],
            ["Working palette", "Brand blues fixed; neutrals derived, provisional (T7)"],
            ["Logo artwork", "Not rendered — B1 open, zero production vectors"],
            ["Service copy", "Blocked by B8, C1, C2"],
            ["Enquiry categories", "Blocked by T4"],
            ["Contact details", "Supplied privately, publication unapproved"],
            ["Signature animation", "Not built — two prototypes required, ADR-004 proposed"],
            ["Animation library", "None installed — stack deferred (T5)"],
          ].map(([term, detail]) => (
            <div
              key={term}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--vw-space-2xs)",
                paddingBlock: "var(--vw-space-3xs)",
              }}
            >
              <dt
                style={{
                  fontWeight: "var(--vw-weight-medium)",
                  minWidth: "12rem",
                }}
              >
                {term}
              </dt>
              <dd
                style={{
                  margin: 0,
                  color: "var(--vw-text-muted)",
                }}
              >
                {detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
