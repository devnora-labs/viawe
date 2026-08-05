"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stages } from "@/content/stages";
import { ease } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const queries = ["(min-width: 1024px)", "(prefers-reduced-motion: reduce)"];

const heading = "The business growth pathway";
const closing = "From the first plan to the next location, the work stays connected.";

function useCanPin() {
  return useSyncExternalStore(
    (notify) => {
      const lists = queries.map(matchMedia);
      lists.forEach((list) => list.addEventListener("change", notify));
      return () =>
        lists.forEach((list) => list.removeEventListener("change", notify));
    },
    () => matchMedia(queries[0]).matches && !matchMedia(queries[1]).matches,
    () => false,
  );
}

function Stage({
  stage,
  size,
  frame,
}: {
  stage: (typeof stages)[number];
  size: string;
  frame: string;
}) {
  return (
    <>
      <div className="md:col-span-5">
        <h3 className={`display ${size}`}>{stage.name}</h3>
        <p className="lead mt-8 max-w-md text-cloud/75">{stage.line}</p>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <figure
          className={`relative overflow-hidden bg-cloud/5 ${frame}`}
          style={{ aspectRatio: "4 / 5" }}
        >
          <Image
            src={stage.shot.src}
            alt={stage.shot.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </figure>
      </div>
    </>
  );
}

export function Pathway() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const pinned = useCanPin();

  useEffect(() => {
    if (!pinned) return;
    let shown = 0;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root.current!,
        start: "top top",
        end: `+=${stages.length * 85}%`,
        pin: true,
        scrub: true,
        onUpdate: ({ progress }) => {
          const i = Math.min(
            stages.length - 1,
            Math.floor(progress * stages.length),
          );
          if (i !== shown) {
            shown = i;
            setActive(i);
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [pinned]);

  return (
    <section ref={root} className="relative bg-ink text-cloud">
      {pinned ? (
        <div className="shell flex h-svh flex-col justify-center py-14">
          <h2 className="text-[clamp(1.05rem,1.5vw,1.4rem)] text-cloud/50">
            {heading}
          </h2>

          <motion.div
            key={active}
            className="mt-14 grid flex-1 items-center gap-16 md:grid-cols-12"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Stage
              stage={stages[active]}
              size="text-[clamp(4rem,9vw,9rem)]"
              frame="ml-auto h-[64svh] w-auto"
            />
          </motion.div>

          <ol className="mt-12 flex gap-3" aria-hidden>
            {stages.map((stage, i) => (
              <li
                key={stage.name}
                className={`h-0.5 flex-1 transition-colors duration-500 ${
                  i <= active ? "bg-signal" : "bg-cloud/15"
                }`}
              />
            ))}
          </ol>
        </div>
      ) : (
        <div className="shell bay">
          <h2 className="text-[clamp(1.05rem,1.5vw,1.4rem)] text-cloud/50">
            {heading}
          </h2>

          <div className="mt-16 flex flex-col gap-24">
            {stages.map((stage) => (
              <article key={stage.name} className="grid gap-10 md:grid-cols-12">
                <Stage stage={stage} size="text-[clamp(3rem,8vw,6rem)]" frame="" />
              </article>
            ))}
          </div>

          <p className="mt-24 max-w-xl text-stone">{closing}</p>
        </div>
      )}
    </section>
  );
}
