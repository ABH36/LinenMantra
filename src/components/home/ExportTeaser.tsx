import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { exportCountries, exportStats } from "@/data/exportCountries";

export default function ExportTeaser() {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — heading + stats */}
        <div>
          <FadeInOnScroll direction="up">
            <SectionTitle
              label="Global Reach"
              heading="Trusted Across Continents"
              subText="From Mumbai to Milan, our premium linen fabrics reach brands and buyers across 14+ countries — backed by consistent quality and reliable supply."
              showLine
            />
          </FadeInOnScroll>

          {/* Stats row */}
          <FadeInOnScroll direction="up" delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {exportStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display font-normal leading-none mb-2"
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-label"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

          {/* CTA */}
          <FadeInOnScroll direction="up" delay={0.25}>
            <Link
              href="/export"
              className="inline-flex items-center gap-3 mt-10 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-70 group"
              style={{ color: "var(--color-cta)" }}
            >
              <span>Explore Export Capabilities</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </FadeInOnScroll>
        </div>

        {/* Right — country grid */}
        <FadeInOnScroll direction="left" delay={0.1}>
          <div>
            <p
              className="text-label mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Markets we serve
            </p>
            <div className="grid grid-cols-2 gap-0">
              {exportCountries.map((country, i) => (
                <div
                  key={country.iso3}
                  className="flex items-center gap-3 py-3.5"
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    borderRight:
                      i % 2 === 0 ? "1px solid var(--color-border)" : "none",
                    paddingLeft: i % 2 !== 0 ? "1.25rem" : "0",
                    paddingRight: i % 2 === 0 ? "1.25rem" : "0",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent)", opacity: 0.7 }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
