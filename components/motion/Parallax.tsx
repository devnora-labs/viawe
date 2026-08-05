"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  depth?: number;
  className?: string;
};

export function Parallax({ children, depth = 0.22, className = "" }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end start"],
  });

  // The layer overhangs the frame by `depth` at each edge, so its own
  // percentage travel has to be scaled down to land exactly on those edges.
  const bleed = `${-depth * 100}%`;
  const travel = (depth * 100) / (1 + 2 * depth);
  const y = useTransform(scrollYProgress, [0, 1], [`${-travel}%`, `${travel}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.24, 1.04]);

  return (
    <div ref={frame} className={`relative overflow-hidden bg-ink/5 ${className}`}>
      {/* The bleed stays put in both cases: dropping a motion value from
          `style` leaves the last transform stamped on the element, so the
          still version has to pin y and scale rather than omit them. */}
      <motion.div
        className="absolute inset-x-0 will-change-transform"
        style={{
          top: bleed,
          bottom: bleed,
          ...(still ? { y: 0, scale: 1 } : { y, scale }),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
