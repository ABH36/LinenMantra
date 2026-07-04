import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { exportCountries, exportStats } from "@/data/exportCountries";

// Group countries by region
const regionOrder = ["Europe", "Americas", "Middle East", "Asia Pacific", "Africa"];

function groupByRegion(countries: typeof exportCountries) {
  return regionOrder.reduce<Record<string, typeof exportCountries>>((acc, region) => {
    const list = countries.filter((c) => c.region === region);
    if (list.length) acc[region] = list;
    return acc;
  }, {});
}

export default function ExportRegions() {
  const grouped = groupByRegion(exportCountries);

  return (
    <SectionWrapper dark>
      {/* Stats strip */}
      <FadeInOnScroll direction="up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 border-b border-[var(--color-border)]">
          {exportStats.map((stat, i) => (
            <div
              key={stat.label}
              className="pb-10 pr-8"
              style={{
                borderRight:
                  i < exportStats.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
                paddingLeft: i > 0 ? "2rem" : "0",
              }}
            >
              <p
                className="font-display font-normal leading-none mb-2 text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </p>
              <p className="text-label text-[var(--color-text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Section heading */}
      <FadeInOnScroll direction="up">
        <span className="text-label block mb-5 text-[var(--color-accent)]">
          Our Export Markets
        </span>
        <h2 className="font-display font-normal leading-tight mb-12 text-[var(--text-h2)] text-[var(--color-text-primary)]">
          A Global Footprint
        </h2>
      </FadeInOnScroll>

      {/* World map visual */}
      <FadeInOnScroll direction="up" delay={0.1}>
        <div
          className="relative w-full overflow-hidden mb-14 aspect-[3/2] border border-[var(--color-border)]"
          style={{
            background: "linear-gradient(180deg, #1A1A18 0%, #242220 100%)",
          }}
        >
          {/* Globe map image with points already embedded */}
          <Image
            src="/images/Export/globlemap.png"
            alt="Global export map"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </FadeInOnScroll>

      {/* Countries by region */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {Object.entries(grouped).map(([region, countries], i) => (
          <FadeInOnScroll key={region} direction="up" delay={i * 0.08}>
            <div>
              <h3 className="text-label mb-4 text-[var(--color-accent)]">
                {region}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {countries.map((c) => (
                  <li key={c.iso3} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-[var(--color-accent)] opacity-60" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
