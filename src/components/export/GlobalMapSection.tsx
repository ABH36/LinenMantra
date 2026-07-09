import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const stats = [
  { value: "14+", label: "Countries Served" },
  { value: "16+", label: "Years of Expertise" },
  { value: "150 LEA", label: "Finest Linen Count" },
  { value: "2010", label: "Year Established" },
];

export default function GlobalMapSection() {
  return (
    <section className="w-full py-10 lg:py-14 bg-[var(--color-bg-secondary)]">
      <div className="container-site">

        {/* Heading */}
        <FadeInOnScroll direction="up">
          <span className="text-label block mb-4 text-[var(--color-accent)]">
            Our Export Markets
          </span>
          <h2
            className="font-display font-normal leading-tight mb-6 text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            A Global Footprint
          </h2>
          <span className="block h-px w-10 mb-10 bg-[var(--color-accent)]" />
        </FadeInOnScroll>

        {/* Map image */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="w-full overflow-hidden border border-[var(--color-border)]">
            <Image
              src="/images/Export/globlemap.webp"
              alt="Linen Mantra global export markets"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1240px"
              className="w-full h-auto"
            />
          </div>
        </FadeInOnScroll>

        {/* Stats row */}
        <FadeInOnScroll direction="up" delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 pt-10 border-t border-[var(--color-border)]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-normal leading-none mb-2 text-[var(--color-text-primary)]"
                  style={{ fontSize: "2rem" }}
                >
                  {stat.value}
                </p>
                <p className="text-label text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}
