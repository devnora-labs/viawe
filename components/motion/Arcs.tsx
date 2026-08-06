"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ease } from "@/lib/motion";

// The overture, taken from the mark: two curves enter from opposite sides,
// the mesh resolves as they approach, and the connection holds. The crossing
// sits at (1180, 260) — the clear upper-right quadrant, diagonal to the type
// mass, echoing the mark's own anatomy: loop high, tails sweeping down-left.
const ascent = "M -80 860 C 350 800 850 480 1180 260 C 1320 168 1440 90 1560 20";
const embrace = "M 1540 140 C 1420 160 1300 200 1180 260 C 960 370 640 620 380 900";
// A short band along the embrace, through the crossing — the mesh lives here.
const band = "M 1330 205 C 1280 222 1230 240 1180 260 C 1120 290 1065 320 1010 350";

export function Arcs() {
  const frame = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  // `still` flips after hydration, so the reduced path keeps the same props
  // and jumps to the drawn state — dropping them would stamp pathLength at 0.
  const draw = (delay: number) => ({
    initial: still ? false : { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: still ? 0 : 1.5, delay: still ? 0 : delay, ease },
  });

  const settle = (delay: number, duration: number, to = 1) => ({
    initial: still ? false : { opacity: 0 },
    animate: { opacity: to },
    transition: { duration: still ? 0 : duration, delay: still ? 0 : delay, ease },
  });

  return (
    <div ref={frame} className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={still ? undefined : { y }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="arc-ascent" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#1B4B77" />
              <stop offset="1" stopColor="#3582AD" />
            </linearGradient>
            <linearGradient id="arc-embrace" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3582AD" />
              <stop offset="1" stopColor="#4AD3F3" />
            </linearGradient>
            <pattern id="mesh" width="14" height="14" patternUnits="userSpaceOnUse">
              <path
                d="M0 0 L14 14 M14 0 L0 14 M0 7 L14 7"
                stroke="#4AD3F3"
                strokeWidth="0.75"
                strokeOpacity="0.55"
              />
            </pattern>
            <linearGradient
              id="band-fade"
              gradientUnits="userSpaceOnUse"
              x1="1330"
              y1="205"
              x2="1010"
              y2="350"
            >
              <stop offset="0" stopColor="#000" />
              <stop offset="0.3" stopColor="#fff" />
              <stop offset="0.7" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
            <mask id="band-mask">
              <rect x="960" y="150" width="420" height="250" fill="url(#band-fade)" />
            </mask>
          </defs>

          <motion.path
            data-motion
            d={ascent}
            stroke="url(#arc-ascent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            {...draw(0.1)}
          />
          <motion.path
            data-motion
            d={embrace}
            stroke="url(#arc-embrace)"
            strokeWidth="2.5"
            strokeLinecap="round"
            {...draw(0.3)}
          />

          {/* the mesh resolves as the curves meet */}
          <motion.g data-motion mask="url(#band-mask)" {...settle(1.0, 0.7, 0.5)}>
            <path d={band} stroke="url(#mesh)" strokeWidth="30" />
          </motion.g>

          {/* the connection holds: core, ring, and a faint outward echo */}
          <motion.circle data-motion cx="1180" cy="260" r="6" fill="#3582AD" {...settle(1.35, 0.4)} />
          <motion.circle
            data-motion
            cx="1180"
            cy="260"
            r="16"
            stroke="#3582AD"
            strokeOpacity="0.35"
            {...settle(1.5, 0.5)}
          />
          <motion.circle
            data-motion
            cx="1180"
            cy="260"
            r="30"
            stroke="#3582AD"
            strokeOpacity="0.15"
            {...settle(1.7, 0.6)}
          />
        </svg>
      </motion.div>
    </div>
  );
}
