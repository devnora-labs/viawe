"use client";

import { Fragment, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

const dim = 0.14;
const spread = 0.75;
const hold = 0.22;

function Word({
  children,
  progress,
  index,
  count,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
}) {
  const start = count > 1 ? (index / (count - 1)) * spread : 0;
  const end = Math.min(1, start + hold);

  const opacity = useTransform(progress, (p) => {
    if (p <= start) return dim;
    if (p >= end) return 1;
    return dim + (1 - dim) * ((p - start) / (end - start));
  });

  return (
    <motion.span data-motion aria-hidden style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export function Words({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const box = useRef<HTMLParagraphElement>(null);
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: box,
    offset: ["start 0.9", "end 0.55"],
  });

  const words = children.split(" ");

  return (
    <p ref={box} className={className} aria-label={children}>
      {still
        ? children
        : words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <Word progress={scrollYProgress} index={i} count={words.length}>
                {word}
              </Word>
              {i < words.length - 1 ? " " : null}
            </Fragment>
          ))}
    </p>
  );
}
