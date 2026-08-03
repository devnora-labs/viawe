/**
 * Navigation, derived from the canonical registry.
 *
 * Contract invariant 4: only `active` services appear in public
 * navigation. Contract invariant 7: no component declares its own
 * service array — including this module, which maps rather than lists.
 */

import { activeServices } from "./services";

export type NavigationItem = {
  readonly label: string;
  readonly href: string;
  /** False while the destination cannot publish honestly. Rendered as
   *  plain text rather than a link that leads nowhere. */
  readonly available: boolean;
};

/** Service navigation, in registry order. Never hand-authored. */
export const serviceNavigation: readonly NavigationItem[] = activeServices.map(
  (service) => ({
    label: service.navigationLabel,
    href: service.page.href,
    available: service.page.enabled,
  }),
);

/**
 * Primary navigation.
 *
 * Deliberately minimal. PRODUCT.md §6 proposes a wider route set, but
 * T1 (final route set) is unresolved and `/work`, `/about` and `/contact`
 * are each blocked on approvals. A route is added here only when it has
 * real content — never to make the site look larger.
 */
export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Services", href: "/services", available: false },
];
