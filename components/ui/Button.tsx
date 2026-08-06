import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  quiet?: boolean;
};

const fill =
  "rounded-[20px] bg-brand px-8 py-4 font-medium text-cloud transition-colors duration-300 hover:bg-brand-deep active:scale-[0.98]";

export function Button({ href, children, quiet = false }: Props) {
  const link = (
    <a
      href={href}
      // quiet links keep their text size but carry a full-height tap area
      className={`group inline-flex items-center gap-3 text-base ${quiet ? "-my-3 py-3" : fill}`}
    >
      {quiet ? <span className="link">{children}</span> : children}
      <ArrowRight
        size={18}
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      />
    </a>
  );

  return quiet ? link : <Magnetic>{link}</Magnetic>;
}
