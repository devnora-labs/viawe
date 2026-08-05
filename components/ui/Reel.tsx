"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Parallax } from "@/components/motion/Parallax";
import { ease } from "@/lib/motion";

type Props = {
  shot: { src: string; alt: string };
  clip: string;
  ratio: string;
  depth: number;
  sizes: string;
};

export function Reel({ shot, clip, ratio, depth, sizes }: Props) {
  const film = useRef<HTMLVideoElement>(null);
  const [running, setRunning] = useState(false);
  const still = useReducedMotion();

  const start = () => {
    if (still || !matchMedia("(hover: hover)").matches) return;
    film.current?.play().catch(() => {});
  };

  const stop = () => {
    setRunning(false);
    film.current?.pause();
  };

  return (
    <figure
      style={{ aspectRatio: ratio }}
      onPointerEnter={start}
      onPointerLeave={stop}
    >
      <Parallax depth={depth} className="h-full w-full">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
        <motion.video
          ref={film}
          src={clip}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: running ? 1 : 0 }}
          transition={{ duration: 0.8, ease }}
          onPlaying={() => setRunning(true)}
        />
      </Parallax>
    </figure>
  );
}
