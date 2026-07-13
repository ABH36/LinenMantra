import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { CLD } from "@/lib/cloudinary";

export default function GlobalMapSection() {
  return (
    <section className="w-full bg-[var(--color-bg-secondary)]">
      <FadeInOnScroll direction="up">
        <Image
          src={CLD.export.globeMap}
          alt="Linen Mantra global export markets"
          width={1672}
          height={941}
          sizes="100vw"
          className="w-full h-auto"
        />
      </FadeInOnScroll>
    </section>
  );
}
