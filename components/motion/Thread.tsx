"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

// A hairline that draws itself down as the reader moves through the flow —
// the visible version of "each service feeds the next".
export function Thread({ className = "" }: { className?: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: rail,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <div ref={rail} className={`w-px ${className}`} aria-hidden>
      <div className="absolute inset-0 w-px bg-stone/25" />
      <motion.div
        data-motion
        className="absolute inset-0 w-px origin-top bg-sea will-change-transform"
        style={{ scaleY: still ? 1 : scrollYProgress }}
      />
    </div>
  );
}
