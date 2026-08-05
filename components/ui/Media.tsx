import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";

type Props = {
  shot: { src: string; alt: string };
  ratio?: string;
  depth?: number;
  sizes?: string;
  className?: string;
};

export function Media({
  shot,
  ratio = "4 / 5",
  depth = 0.22,
  sizes = "(max-width: 768px) 100vw, 55vw",
  className = "",
}: Props) {
  return (
    <figure className={className} style={{ aspectRatio: ratio }}>
      <Parallax depth={depth} className="h-full w-full">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </Parallax>
    </figure>
  );
}
