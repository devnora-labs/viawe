import { shots } from "@/content/media";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { Words } from "@/components/motion/Words";

export function Partner() {
  return (
    <section className="bay bg-paper-deep">
      <div className="shell">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="display title">
              <Reveal>Fewer</Reveal>
              <Reveal delay={0.08}>handoffs.</Reveal>
            </h2>

            <Words className="lead mt-12 max-w-md">
              Good growth should not break between vendors, teams and handoffs.
              But it does: the designer waits on the developer, the agency
              waits on the printer.
            </Words>

            <Words className="mt-8 max-w-md text-stone">
              Via-We coordinates the parts of business execution that are
              normally split across different vendors — one roof, one point of
              contact, one thread. You explain it once.
            </Words>
          </div>

          <div className="md:col-span-4 md:col-start-6 md:pt-32">
            <Media
              shot={shots.team}
              ratio="3 / 4"
              depth={0.18}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>

          <div className="md:col-span-3 md:col-start-10 md:pt-2">
            <Media
              shot={shots.table}
              ratio="4 / 5"
              depth={0.14}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
