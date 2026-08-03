/**
 * Confirmed, publishable facts about VIA-WE Services Pvt. Ltd.
 *
 * EVERY string here is traceable to an authority document. Nothing is
 * written from memory, and nothing marked [VERIFY] or PUBLIC-BLOCKED
 * appears at all.
 *
 * Sources:
 *   docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md §1, §15
 *   AGENTS.md §3, §3a
 *   PRODUCT.md §1
 */

export const site = {
  /** PUBLIC-READY — truth file §15.1. The official name, everywhere. */
  brandName: "VIA-WE Services Pvt. Ltd.",

  /**
   * PUBLIC-READY — truth file §15.2.
   * NO COMMA, EVER. "Your Dreams, Our Aim" is withdrawn and prohibited.
   */
  tagline: "YOUR DREAMS OUR AIM",

  /** [CONFIRMED] — truth file §1. */
  category: "Business Growth & Execution Company",

  /** [CONFIRMED] — truth file §1, AGENTS.md §3. */
  headline: "We Build, Brand & Grow Businesses.",

  /** [CONFIRMED] — truth file §1 supporting explanation. */
  summary:
    "Via-We brings digital marketing, business setup, franchise expansion, " +
    "technology development, and recruitment under one coordinated execution team.",

  /** Version 1 is English only. [CONFIRMED] — truth file §4. */
  locale: "en-IN",
  htmlLang: "en",
} as const;

/**
 * Strings that must never be rendered. Kept here so the prohibition is
 * testable, not merely documented.
 *
 * Source: truth file §15.1 binding naming rule, AGENTS.md §3a.
 */
export const PROHIBITED_BRAND_STRINGS: readonly string[] = [
  "Via-We 360",
  "VIA-WE 360",
  "Via-We 360 Services Pvt. Ltd.",
  "Your Dreams, Our Aim",
];

/**
 * Facts that are supplied but NOT approved for public display, recorded
 * here as explicit absences so nobody "fills them in" later by accident.
 *
 * Do not add values to this object. The values live in `private/`, which
 * is Git-ignored, and publication is unapproved.
 */
export const BLOCKED_PUBLIC_FACTS = {
  /** B5 / B11 — supplied privately, publication unapproved. */
  phone: null,
  whatsapp: null,
  email: null,
  /** B4 / K-6 — no document supplied; street address unapproved. */
  address: null,
  /** §15.4 — one active city, but the exact public wording needs Vijay. */
  locationWording: null,
  /** B6 / K-4 — a name was supplied with explicitly NO designation. */
  leadership: null,
  /** C3–C8 — no client, logo, metric, testimonial or case study approved. */
  proof: null,
} as const;
