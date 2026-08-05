"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const coarse = matchMedia("(pointer: coarse)").matches;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || still) return;

    // anchors defaults to false, which makes Lenis swallow in-page links.
    const lenis = new Lenis({
      lerp: 0.09,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
