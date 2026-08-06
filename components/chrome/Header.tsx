"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, site, social } from "@/content/site";
import { shots } from "@/content/media";
import { ease } from "@/lib/motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);
  const still = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setPast(y > innerHeight * 0.85));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const escape = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", escape);
    return () => removeEventListener("keydown", escape);
  }, []);

  // The panel slides in from the Menu side. Nothing but `x` moves.
  const panel = {
    shut: { x: "100%", transition: { duration: still ? 0 : 0.7, ease } },
    open: { x: "0%", transition: { duration: still ? 0 : 0.95, ease } },
  };

  // Everything inside rides the same rise, staggered by index, so the panel
  // and its contents read as one movement. The delay is carried per element
  // rather than by staggerChildren, which does not survive the nesting here.
  const rise = (i: number) => ({
    shut: {
      y: still ? 0 : 26,
      opacity: 0,
      transition: { duration: still ? 0 : 0.25, ease },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: still ? 0 : 0.7, delay: still ? 0 : 0.3 + i * 0.06, ease },
    },
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* The bar lives on the light hero, so it reads in ink; once scrolled
          past, everything hands over to the pill, whose own surface keeps it
          legible over any section underneath. */}
      <div className="shell flex items-center justify-between py-7">
        <a
          href="#top"
          className={`flex items-center gap-3.5 text-ink transition-opacity duration-500 ${
            past ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <Image src="/brand/mark.png" alt="" width={28} height={31} />
          <span className="label text-base uppercase tracking-[0.14em]">
            {site.name}
          </span>
        </a>

        <div className="flex items-center gap-12">
          <nav
            className={`hidden items-center gap-10 text-ink transition-opacity duration-500 md:flex ${
              past ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            {nav.map((link) => (
              <a key={link.label} href={link.href} className="link text-base">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className={`label flex items-center gap-3 rounded-full border border-ink/10 bg-cloud/90 px-5 py-2.5 text-ink backdrop-blur transition-opacity duration-500 ${
              past ? "" : "md:pointer-events-none md:opacity-0"
            }`}
          >
            Menu
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden text-cloud"
            initial="shut"
            animate="open"
            exit="shut"
          >
            <motion.div
              className="absolute inset-0 bg-ink will-change-transform"
              variants={panel}
            />

            <div className="relative flex h-full flex-col">
              <motion.div
                variants={rise(0)}
                className="shell flex items-center justify-between py-8"
              >
                <span className="label text-base uppercase tracking-[0.14em]">
                  {site.name}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="label flex items-center gap-3"
                >
                  Close
                  <X size={20} />
                </button>
              </motion.div>

              <div className="shell grid flex-1 items-center gap-16 md:grid-cols-12">
                <div
                  className="relative hidden overflow-hidden md:col-span-4 md:block"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <motion.div variants={rise(4)} className="absolute inset-0">
                    <Image
                      src={shots.desk.src}
                      alt={shots.desk.alt}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  <nav className="flex flex-col items-start">
                    {nav.map((link, i) => (
                      <motion.a
                        key={link.label}
                        variants={rise(i + 1)}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="link display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.06]"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-14 flex flex-col items-start gap-2">
                    {social.map((link, i) => (
                      <motion.a
                        key={link.label}
                        variants={rise(i + 5)}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link text-stone"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                variants={rise(8)}
                className="shell flex flex-wrap items-center justify-between gap-x-12 gap-y-4 py-10 text-stone"
              >
                <a href={`tel:${site.phone.replace(/ /g, "")}`} className="link">
                  {site.phone}
                </a>
                <a href={site.whatsapp} className="link">
                  WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="link">
                  {site.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
