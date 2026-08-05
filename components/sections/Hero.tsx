"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { clips, shots } from "@/content/media";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Words } from "@/components/motion/Words";
import { Button } from "@/components/ui/Button";
import { Reel } from "@/components/ui/Reel";

export function Hero() {
  const frame = useRef<HTMLElement>(null);
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-11%", "11%"]);

  return (
    <section id="top" ref={frame} className="relative text-cloud">
      <div className="sticky top-0 h-svh overflow-hidden bg-ink">
        <motion.div
          className="absolute inset-x-0 -top-[15%] -bottom-[15%] will-change-transform"
          style={still ? { y: 0 } : { y }}
        >
          <Image
            src={shots.hero.src}
            alt={shots.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
      </div>

      <div className="relative -mt-[100svh]">
        <div className="shell flex h-svh items-center pt-[6.5rem]">
          <h1 className="display hero">
            <Reveal delay={0.08}>We build,</Reveal>
            <Reveal delay={0.16}>brand</Reveal>
            <Reveal delay={0.24}>& grow</Reveal>
            <Reveal delay={0.32}>businesses.</Reveal>
          </h1>
        </div>

        <div className="shell grid h-[95svh] items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Words className="lead">{site.support}</Words>

            <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
              <Button href="#contact">Start a conversation</Button>
              <Button href="#routes" quiet>
                See what we do
              </Button>
            </div>
          </div>

          <Rise delay={0.1} className="md:col-span-5 md:col-start-8">
            <Reel
              shot={shots.night}
              clip={clips.night}
              ratio="4 / 5"
              depth={0.24}
              sizes="(max-width: 768px) 100vw, 38vw"
            />
          </Rise>
        </div>
      </div>
    </section>
  );
}
