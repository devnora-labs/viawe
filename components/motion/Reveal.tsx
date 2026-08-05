"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ease, seen } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const slide = {
  hidden: { y: "115%" },
  show: { y: "0%" },
};

export function Reveal({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.span
      className={`block overflow-hidden pb-[0.18em] -mb-[0.18em] ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={seen}
    >
      <motion.span
        data-motion
        className="block"
        variants={slide}
        transition={{ duration: 1.15, delay, ease }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
