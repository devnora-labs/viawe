import type { NextConfig } from "next";

/**
 * VIA-WE Services Pvt. Ltd. — Next.js configuration.
 *
 * Deliberately minimal. Every option added here must solve a verified
 * requirement, per the approved implementation plan §1.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Fail the production build on a type error rather than shipping it.
  // Next 16 removed `next lint`, so ESLint is a separate gate — see the
  // `lint` and `verify` scripts in package.json.
  typescript: { ignoreBuildErrors: false },

  // Remove the framework fingerprint from responses.
  poweredByHeader: false,
};

export default nextConfig;
