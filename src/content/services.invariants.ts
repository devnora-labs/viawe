/**
 * Executable form of the registry invariants.
 *
 * Source: docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md §5.
 * "Enforced by tests, not by convention" — so they live in code, are run
 * by the unit suite, and are also asserted at module load in development
 * so a bad edit surfaces on the next page render rather than at review.
 */

import {
  PROHIBITED_V1_SERVICE_TITLES,
  type ServiceDefinition,
} from "./services";

export type InvariantViolation = {
  readonly invariant: string;
  readonly detail: string;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function duplicates<T>(values: readonly T[]): T[] {
  const seen = new Set<T>();
  const dupes = new Set<T>();
  for (const value of values) {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  }
  return [...dupes];
}

/**
 * Validate a service list against every contract invariant.
 * Returns all violations rather than throwing on the first, so a broken
 * edit is reported completely.
 */
export function findInvariantViolations(
  list: readonly ServiceDefinition[],
): InvariantViolation[] {
  const violations: InvariantViolation[] = [];
  const fail = (invariant: string, detail: string) =>
    violations.push({ invariant, detail });

  // 1 — IDs stable, present and unique.
  const ids = list.map((s) => s.id);
  for (const dupe of duplicates(ids)) fail("unique-id", `duplicate id: ${dupe}`);
  for (const service of list) {
    if (!service.id.trim()) fail("unique-id", "empty id");
  }

  // 2 — Slugs unique and URL-safe.
  const slugs = list.map((s) => s.slug);
  for (const dupe of duplicates(slugs))
    fail("unique-slug", `duplicate slug: ${dupe}`);
  for (const service of list) {
    if (!SLUG_PATTERN.test(service.slug))
      fail("slug-format", `slug is not url-safe: ${service.slug}`);
  }

  // 3 — Display order unique.
  const orders = list.map((s) => s.order);
  for (const dupe of duplicates(orders))
    fail("unique-order", `duplicate order: ${dupe}`);

  // 5/6 — Route and sitemap href derive from the slug.
  for (const service of list) {
    if (service.page.href !== `/services/${service.slug}`)
      fail(
        "derived-route",
        `${service.id}: href "${service.page.href}" is not derived from the slug`,
      );
  }

  // 11 — Non-active services must never be publicly renderable.
  for (const service of list) {
    if (service.status !== "active" && service.page.enabled)
      fail(
        "non-active-not-rendered",
        `${service.id}: status "${service.status}" but page.enabled is true`,
      );
  }

  // 12 — Exactly one validated enquiry category per active service, once
  // T4 resolves. Until then it must be null, never guessed.
  for (const service of list) {
    if (service.status !== "active") continue;
    const gated = service.evidence.missing.includes("T4");
    if (gated && service.enquiryCategory !== null)
      fail(
        "enquiry-category-gated",
        `${service.id}: enquiryCategory set while T4 is still listed as missing`,
      );
  }

  // 13 — One honest readiness state per service. A service may not claim
  // public readiness while it still lists blocking inputs.
  for (const service of list) {
    if (service.evidence.publicReady && service.evidence.missing.length > 0)
      fail(
        "honest-evidence-state",
        `${service.id}: publicReady is true but missing[] is not empty`,
      );
    if (service.page.enabled && !service.evidence.publicReady)
      fail(
        "honest-evidence-state",
        `${service.id}: page.enabled is true but publicReady is false`,
      );
  }

  // Blocked copy must be absent, not invented.
  for (const service of list) {
    const blocked = service.evidence.missing.length > 0;
    if (!blocked) continue;
    if (service.shortDescription !== null)
      fail(
        "no-invented-copy",
        `${service.id}: shortDescription authored while inputs are missing`,
      );
    if (service.seo.description !== null)
      fail(
        "no-invented-copy",
        `${service.id}: seo.description authored while inputs are missing`,
      );
    if (service.primaryCta.label !== null)
      fail(
        "no-invented-copy",
        `${service.id}: primaryCta.label authored while inputs are missing`,
      );
  }

  // Scope guard — historical and unapproved categories must not return.
  for (const service of list) {
    if (service.status !== "active") continue;
    if (PROHIBITED_V1_SERVICE_TITLES.includes(service.title))
      fail(
        "prohibited-v1-service",
        `${service.title} is not a standalone Version 1 service (ADR-002)`,
      );
  }

  return violations;
}

export function assertRegistryInvariants(
  list: readonly ServiceDefinition[],
): void {
  const violations = findInvariantViolations(list);
  if (violations.length === 0) return;
  const report = violations
    .map((v) => `  [${v.invariant}] ${v.detail}`)
    .join("\n");
  throw new Error(
    `Service registry violates the canonical contract:\n${report}\n\n` +
      "See docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md §5.",
  );
}
