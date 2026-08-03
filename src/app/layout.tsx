import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/content/site";
import "@/styles/globals.css";

/**
 * ⚠ TEMPORARY TYPOGRAPHY — BLOCKER B2 IS UNRESOLVED.
 *
 * Roboto is the brand guideline's SUPPORTING face and is open-licensed,
 * so it is safe to self-host. It stands in for the display role during
 * structural development only.
 *
 * Deadhead Bold is the guideline display face; its web licence is UNKNOWN
 * and it is NOT installed, embedded or referenced anywhere. No substitute
 * display face may be chosen either, because "website typography may be
 * modernised" is NOT CONFIRMED.
 *
 * THIS IS NOT THE FINAL VIA-WE DISPLAY TYPOGRAPHY.
 * When B2 resolves, change --vw-font-display in src/styles/tokens.css.
 */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--vw-font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: `${site.brandName} — ${site.category}`,
    template: `%s — ${site.brandName}`,
  },
  description: site.summary,
  applicationName: site.brandName,
  // No canonical metadataBase yet: the production domain is not confirmed
  // (B4/T6). Adding a guessed origin would poison every canonical URL.
  robots: { index: false, follow: false },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b4b77",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.htmlLang} className={roboto.variable}>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
