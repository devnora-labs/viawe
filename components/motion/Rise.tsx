"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ease, seen } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Rise({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      data-motion
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={seen}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
