import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { exportCountries } from "@/data/exportCountries";

const FEATURES = [
  "14+ Countries Served",
  "Custom Fabric Development",
  "Ready Stock Collection",
  "Fast Worldwide Delivery",
  "Flexible MOQ",
  "Dedicated Export Support",
  "Consistent Quality",
];

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
    <section
      className="w-full py-10 lg:py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.webp')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container-site">
      {/* Feature marquee strip */}
      <div className="mb-10 pb-8 border-b border-[var(--color-border)] overflow-hidden">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style>{`
          @keyframes lm-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .lm-marquee { animation: lm-marquee 28s linear infinite; }
          .lm-marquee:hover { animation-play-state: paused; }
        `}</style>
        <div className="lm-marquee flex w-max">
          {[...FEATURES, ...FEATURES].map((feat, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span
                className="font-display font-semibold text-[var(--color-text-primary)] whitespace-nowrap"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}
              >
                {feat}
              </span>
              <span className="mx-8 text-[var(--color-accent)] opacity-40 select-none">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section heading */}
      <FadeInOnScroll direction="up">
        <span className="text-label block mb-4 text-[var(--color-accent)]">
          Our Export Markets
        </span>
        <h2
          className="font-display font-normal leading-tight mb-8 text-[var(--color-text-primary)]"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
        >
          A Global Footprint
        </h2>
      </FadeInOnScroll>

      {/* World map visual */}
      <FadeInOnScroll direction="up" delay={0.1}>
        <div
          className="relative w-full overflow-hidden mb-10 aspect-[3/2] max-h-[320px] border border-[var(--color-border)]"
          style={{
            background: "linear-gradient(180deg, #1A1A18 0%, #242220 100%)",
          }}
        >
          <Image
            src="/images/Export/globlemap.png"
            alt="Global export map"
            fill
            sizes="100vw"
            className="object-cover object-center"
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
      </div>
    </section>
  );
}
