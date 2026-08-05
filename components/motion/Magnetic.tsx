"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const pull = 0.28;

export function Magnetic({ children }: { children: ReactNode }) {
  const box = useRef<HTMLSpanElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 22 });
  const y = useSpring(rawY, { stiffness: 220, damping: 22 });

  const track = (e: PointerEvent<HTMLSpanElement>) => {
    if (!box.current || !matchMedia("(pointer: fine)").matches) return;
    const r = box.current.getBoundingClientRect();
    rawX.set((e.clientX - (r.left + r.width / 2)) * pull);
    rawY.set((e.clientY - (r.top + r.height / 2)) * pull);
  };

  const release = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.span
      ref={box}
      className="inline-block"
      style={{ x, y }}
      onPointerMove={track}
      onPointerLeave={release}
    >
      {children}
    </motion.span>
  );
}
