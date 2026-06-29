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
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16"
          style={{ borderBottom: "1px solid var(--color-border-dark)" }}
        >
          {exportStats.map((stat, i) => (
            <div
              key={stat.label}
              className="pb-10 pr-8"
              style={{
                borderRight:
                  i < exportStats.length - 1
                    ? "1px solid var(--color-border-dark)"
                    : "none",
                paddingLeft: i > 0 ? "2rem" : "0",
              }}
            >
              <p
                className="font-display font-normal leading-none mb-2"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-text-light)",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-label"
                style={{ color: "rgba(248,245,240,0.4)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Section heading */}
      <FadeInOnScroll direction="up">
        <span
          className="text-label block mb-5"
          style={{ color: "var(--color-accent)" }}
        >
          Our Export Markets
        </span>
        <h2
          className="font-display font-normal leading-tight mb-12"
          style={{
            fontSize: "var(--text-h2)",
            color: "var(--color-text-light)",
          }}
        >
          A Global Footprint
        </h2>
      </FadeInOnScroll>

      {/* World map visual — SVG placeholder */}
      <FadeInOnScroll direction="up" delay={0.1}>
        <div
          className="relative w-full rounded-none overflow-hidden mb-14"
          style={{
            background: "linear-gradient(180deg, #1A1A18 0%, #242220 100%)",
            border: "1px solid var(--color-border-dark)",
            minHeight: "280px",
          }}
        >
          {/* Globe map image — behind all overlays */}
          <Image
            src="/images/Export/globlemap.png"
            alt="Global export map"
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.22 }}
          />

          {/* Stylised world map grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(160,140,114,0.4) 24px,rgba(160,140,114,0.4) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(160,140,114,0.4) 24px,rgba(160,140,114,0.4) 25px)",
            }}
          />

          {/* Country dot indicators — approximate positions */}
          {[
            { name: "UK", x: "44%", y: "28%" },
            { name: "DE", x: "48%", y: "30%" },
            { name: "FR", x: "46%", y: "33%" },
            { name: "IT", x: "49%", y: "35%" },
            { name: "ES", x: "44%", y: "36%" },
            { name: "NL", x: "47%", y: "28%" },
            { name: "US", x: "22%", y: "35%" },
            { name: "CA", x: "20%", y: "28%" },
            { name: "UAE", x: "58%", y: "42%" },
            { name: "SA", x: "56%", y: "46%" },
            { name: "JP", x: "80%", y: "33%" },
            { name: "AU", x: "78%", y: "62%" },
            { name: "SG", x: "76%", y: "52%" },
            { name: "ZA", x: "52%", y: "65%" },
          ].map((dot) => (
            <div
              key={dot.name}
              className="absolute group"
              style={{ left: dot.x, top: dot.y, transform: "translate(-50%,-50%)" }}
            >
              {/* Pulse ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{
                  backgroundColor: "var(--color-accent)",
                  width: "16px",
                  height: "16px",
                  animationDuration: "2.5s",
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
              {/* Dot */}
              <span
                className="relative block rounded-full"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--color-accent)",
                  boxShadow: "0 0 8px rgba(160,140,114,0.6)",
                }}
              />
              {/* Country label tooltip */}
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-label opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                style={{ color: "var(--color-accent-light)" }}
              >
                {dot.name}
              </span>
            </div>
          ))}

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p
              className="font-display font-normal opacity-[0.04] select-none"
              style={{
                fontSize: "clamp(4rem, 10vw, 8rem)",
                color: "var(--color-text-light)",
                letterSpacing: "0.1em",
              }}
            >
              GLOBAL
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Countries by region */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {Object.entries(grouped).map(([region, countries], i) => (
          <FadeInOnScroll key={region} direction="up" delay={i * 0.08}>
            <div>
              <h3
                className="text-label mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                {region}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {countries.map((c) => (
                  <li
                    key={c.iso3}
                    className="flex items-center gap-2.5"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        opacity: 0.6,
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(248,245,240,0.55)" }}
                    >
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
