import { lanes } from "@/content/lanes";
import { Reel } from "@/components/ui/Reel";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Words } from "@/components/motion/Words";

const layout = [
  { media: "md:col-span-7 md:col-start-1", text: "md:col-span-4 md:col-start-9 md:pt-28" },
  { media: "md:col-span-5 md:col-start-8", text: "md:col-span-4 md:col-start-2 md:row-start-1" },
];

export function Routes() {
  return (
    <section id="routes" className="bay bg-paper">
      <div className="shell">
        <h2 className="display title max-w-4xl">
          <Reveal>Pick the road</Reveal>
          <Reveal delay={0.08}>you are actually on.</Reveal>
        </h2>

        <div className="mt-28 flex flex-col gap-32 md:gap-44">
          {lanes.map((lane, i) => (
            <article key={lane.id} className="grid items-start gap-10 md:grid-cols-12">
              <Rise className={layout[i].media}>
                <Reel
                  shot={lane.shot}
                  clip={lane.clip}
                  ratio={i ? "4 / 5" : "5 / 4"}
                  depth={i ? 0.3 : 0.2}
                  sizes={i ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 58vw"}
                />
              </Rise>

              <Rise delay={0.12} className={layout[i].text}>
                <h3 className="display text-[clamp(2rem,3.4vw,3.25rem)] leading-[0.95]">
                  {lane.name}
                </h3>
                <p className="lead mt-8">{lane.lead}</p>
                <Words className="mt-6 text-stone">{lane.body}</Words>

                <ul className="mt-10 flex flex-col">
                  {lane.items.map((item) => (
                    <li key={item} className="rule py-3 text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </Rise>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
