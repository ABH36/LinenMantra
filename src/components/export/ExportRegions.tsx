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
          className="relative w-full overflow-hidden mb-14 aspect-[2/1] border border-[var(--color-border)]"
          style={{
            background: "linear-gradient(180deg, #1A1A18 0%, #242220 100%)",
          }}
        >
          {/* Globe map image — full 2:1 map, no crop */}
          <Image
            src="/images/Export/globlemap.png"
            alt="Global export map"
            fill
            sizes="100vw"
            className="object-contain object-center opacity-50"
          />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(160,140,114,0.4) 24px,rgba(160,140,114,0.4) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(160,140,114,0.4) 24px,rgba(160,140,114,0.4) 25px)",
            }}
          />

          {/* Country dots — equirectangular: x=(lng+180)/360, y=(90-lat)/180 */}
          {[
            { name: "UK",  x: "50.0%", y: "21.4%" }, // London  51.5°N  0.1°W
            { name: "DE",  x: "53.7%", y: "20.8%" }, // Berlin  52.5°N 13.4°E
            { name: "FR",  x: "50.6%", y: "22.8%" }, // Paris   48.9°N  2.3°E
            { name: "IT",  x: "53.5%", y: "26.7%" }, // Rome    41.9°N 12.5°E
            { name: "ES",  x: "49.0%", y: "27.6%" }, // Madrid  40.4°N  3.7°W
            { name: "NL",  x: "51.4%", y: "20.9%" }, // Amsterdam 52.4°N 4.9°E
            { name: "US",  x: "29.4%", y: "27.4%" }, // New York 40.7°N 74.0°W
            { name: "CA",  x: "29.0%", y: "24.8%" }, // Ottawa  45.4°N 75.7°W
            { name: "UAE", x: "65.4%", y: "35.4%" }, // Dubai   25.2°N 55.3°E
            { name: "SA",  x: "63.0%", y: "36.3%" }, // Riyadh  24.7°N 46.7°E
            { name: "JP",  x: "88.8%", y: "30.2%" }, // Tokyo   35.7°N 139.7°E
            { name: "AU",  x: "92.0%", y: "68.8%" }, // Sydney  33.9°S 151.2°E
            { name: "SG",  x: "78.8%", y: "49.2%" }, // Singapore 1.4°N 103.8°E
            { name: "ZA",  x: "57.8%", y: "64.6%" }, // Johannesburg 26.2°S 28.0°E
          ].map((dot, i) => (
            <div
              key={dot.name}
              className="absolute group"
              style={{ left: dot.x, top: dot.y, transform: "translate(-50%,-50%)" }}
            >
              {/* Pulse ring */}
              <span
                className="absolute rounded-full animate-ping opacity-40 bg-[var(--color-accent)]"
                style={{
                  width: "14px",
                  height: "14px",
                  top: "-3px",
                  left: "-3px",
                  animationDuration: "2.5s",
                  animationDelay: `${(i * 0.3) % 2}s`,
                }}
              />
              {/* Dot */}
              <span
                className="relative block w-2 h-2 rounded-full bg-[var(--color-accent)]"
                style={{ boxShadow: "0 0 6px rgba(160,140,114,0.7)" }}
              />
              {/* Label on hover */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-label opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none text-[var(--color-accent)]">
                {dot.name}
              </span>
            </div>
          ))}
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
