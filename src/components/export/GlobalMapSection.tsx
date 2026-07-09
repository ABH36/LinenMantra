import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function GlobalMapSection() {
  return (
    <section className="w-full bg-[var(--color-bg-secondary)]">
      <FadeInOnScroll direction="up">
        <Image
          src="/images/Export/globlemap.webp"
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
