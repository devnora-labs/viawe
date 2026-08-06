import Image from "next/image";
import { cta } from "@/content/copy";
import { site } from "@/content/site";
import { shots } from "@/content/media";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Rise } from "@/components/motion/Rise";
import { Words } from "@/components/motion/Words";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink text-cloud">
      <div className="absolute inset-0">
        <Parallax depth={0.28} className="h-full w-full">
          <Image
            src={shots.closing.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </Parallax>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-ink/20" />

      <div className="shell relative py-40">
        <Rise>
          <p className="label text-spark">{site.tagline}</p>
        </Rise>

        <h2 className="display title mt-10 max-w-5xl">
          <Reveal>Tell us where you</Reveal>
          <Reveal delay={0.08}>want to go next.</Reveal>
        </h2>

        <Words className="lead mt-14 max-w-xl text-cloud/75">
          One conversation with a person who can actually help. We will tell you
          what is realistic before you commit to anything.
        </Words>

        <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6">
          <Button href={site.whatsapp}>{cta.whatsapp}</Button>
          <Button href={`tel:${site.phone.replace(/ /g, "")}`} quiet>
            {site.phone}
          </Button>
          <Button href={`mailto:${site.email}`} quiet>
            {site.email}
          </Button>
        </div>
      </div>
    </section>
  );
}
