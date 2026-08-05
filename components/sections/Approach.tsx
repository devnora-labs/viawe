import { approach } from "@/content/stages";
import { shots } from "@/content/media";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Words } from "@/components/motion/Words";

export function Approach() {
  return (
    <section id="approach" className="bg-paper">
      <Media
        shot={shots.approach}
        ratio="21 / 9"
        depth={0.3}
        sizes="100vw"
        className="w-full"
      />

      <div className="shell bay">
        <h2 className="display title max-w-3xl">
          <Reveal>No mystery,</Reveal>
          <Reveal delay={0.08}>no runaround.</Reveal>
        </h2>

        <ol className="mt-28 grid gap-x-16 gap-y-16 md:grid-cols-2">
          {approach.map((step, i) => (
            <li key={step.name} className="rule pt-8">
              <Rise delay={(i % 2) * 0.1}>
                <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-tight">
                  {step.name}
                </h3>
              </Rise>
              <Words className="mt-5 text-stone">{step.line}</Words>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
