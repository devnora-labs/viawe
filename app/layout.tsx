import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name}. ${site.promise}`,
  description: site.support,
  openGraph: {
    title: `${site.name}. ${site.promise}`,
    description: site.support,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrument.variable}>
      <head>
        <noscript>
          <style>{`[data-motion]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
