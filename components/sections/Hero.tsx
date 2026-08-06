import { cta } from "@/content/copy";
import { site } from "@/content/site";
import { shots } from "@/content/media";
import { Arcs } from "@/components/motion/Arcs";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Words } from "@/components/motion/Words";
import { Button } from "@/components/ui/Button";

// The headline rides the overture's last second (see docs/design/04):
// curves from 0.1s, mesh at 1.0s, node from 1.35s, words from 0.95s.
export function Hero() {
  return (
    <section id="top" className="relative bg-paper">
      <div className="relative">
        <Arcs />

        <div className="shell relative flex min-h-svh flex-col justify-center pt-26">
          <Rise delay={0.95}>
            <p className="label text-stone">{site.category}</p>
          </Rise>

          <h1 className="display hero mt-6 text-brand">
            <Reveal delay={1.05}>We build,</Reveal>
            <Reveal delay={1.13}>brand & grow</Reveal>
            <Reveal delay={1.21}>businesses.</Reveal>
          </h1>
        </div>
      </div>

      <div className="shell grid min-h-[90svh] items-center gap-16 pb-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <Words className="lead">{site.support}</Words>

          <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
            <Button href="#contact">{cta.start}</Button>
            <Button href="#services" quiet>
              {cta.explore}
            </Button>
          </div>
        </div>

        <Rise delay={0.1} className="md:col-span-5 md:col-start-8">
          <Media
            shot={shots.office}
            ratio="4 / 5"
            depth={0.24}
            sizes="(max-width: 768px) 100vw, 38vw"
          />
        </Rise>
      </div>
    </section>
  );
}
