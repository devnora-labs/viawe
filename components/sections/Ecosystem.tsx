import { activeServices } from "@/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Thread } from "@/components/motion/Thread";
import { Words } from "@/components/motion/Words";

export function Ecosystem() {
  return (
    <section id="services" className="bay bg-paper">
      <div className="shell">
        <p className="label text-stone">What we do</p>

        <h2 className="display title mt-8 max-w-4xl">
          <Reveal>One connected</Reveal>
          <Reveal delay={0.08}>system.</Reveal>
        </h2>

        <Words className="lead mt-12 max-w-2xl text-stone">
          Not a stack of vendors and contracts — one execution team where every
          stage of the work feeds the next. Start anywhere; the road continues.
        </Words>

        <div className="relative mt-28">
          <Thread className="absolute bottom-0 top-2 hidden md:block" />

          <ol className="flex flex-col gap-24 md:gap-28">
            {activeServices.map((service, i) => (
              <li key={service.id} className="md:pl-16">
                <article className="grid gap-10 md:grid-cols-12">
                  <div className="relative md:col-span-5">
                    <span
                      aria-hidden
                      className="absolute -left-16 top-2 hidden size-2 -translate-x-1/2 rounded-full bg-sea md:block"
                    />
                    <Rise>
                      <p className="label text-sea">
                        0{i + 1} · {service.segment}
                      </p>
                      <h3 className="display mt-5 text-[clamp(2rem,3.4vw,3.25rem)] leading-[0.95]">
                        {service.title}
                      </h3>
                      <p className="lead mt-7 text-stone">{service.summary}</p>
                    </Rise>
                  </div>

                  <Rise delay={0.12} className="md:col-span-5 md:col-start-8">
                    <ul className="flex flex-col">
                      {service.scope.map((item) => (
                        <li key={item} className="rule py-3 text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Rise>
                </article>

                {service.feeds && (
                  <Rise delay={0.2} className="mt-16 md:mt-20">
                    <p className="label text-stone/70">{service.feeds}</p>
                  </Rise>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
