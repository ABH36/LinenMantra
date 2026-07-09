import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";

const FEATURES = [
  {
    icon: "/images/SocialMediaicon/globe.png",
    title: "14+ Countries Served",
    body: "Trusted by buyers across 14+ international markets.",
  },
  {
    icon: "/images/SocialMediaicon/cut.png",
    title: "Custom Fabric Development",
    body: "Develop fabrics tailored to your brand and specifications.",
  },
  {
    icon: "/images/SocialMediaicon/box.png",
    title: "Ready Stock Collection",
    body: "Fast dispatch from our in-stock product range.",
  },
  {
    icon: "/images/SocialMediaicon/column.png",
    title: "Flexible MOQ",
    body: "Order quantities designed for businesses of all sizes.",
  },
  {
    icon: "/images/SocialMediaicon/team.png",
    title: "Dedicated Export Support",
    body: "Complete assistance with documentation and logistics.",
  },
  {
    icon: "/images/SocialMediaicon/shield.png",
    title: "Consistent Quality",
    body: "Quality checks at every production stage.",
  },
  {
    icon: "/images/SocialMediaicon/airplane.png",
    title: "Fast Worldwide Delivery",
    body: "Reliable shipping with global logistics partners.",
  },
];

function FeatureCard({
  icon,
  title,
  body,
  index,
}: (typeof FEATURES)[number] & { index: number }) {
  return (
    <div className="group relative flex flex-col items-center text-center h-full p-6 bg-white shadow-sm border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Faint sequence number */}
      <span
        className="absolute top-3 right-4 font-display font-normal leading-none select-none pointer-events-none text-[var(--color-border)]"
        style={{ fontSize: "3.5rem", opacity: 0.5 }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center mb-5 shrink-0"
        style={{ backgroundColor: "rgba(160,140,114,0.14)" }}
      >
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Title — dark green, bold */}
      <h3
        className="font-display font-bold leading-tight mb-2 text-[var(--color-cta)]"
        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}
      >
        {title}
      </h3>

      {/* Short gold accent line */}
      <span className="block w-6 h-px mb-4 bg-[var(--color-accent)]" />

      {/* Body */}
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {body}
      </p>

      {/* Bottom border slides in on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-accent)]" />
    </div>
  );
}

export default function ExportFeatures() {
  return (
    <section
      className="w-full py-10 lg:py-14 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.webp')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container-site">

        {/* Section heading */}
        <FadeInOnScroll direction="up">
          <span className="text-label block mb-1 text-[var(--color-accent)]">
            Why Export With Us
          </span>
          <h2
            className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            Built for Global Business
          </h2>
          <AccentDivider className="mt-2 mb-8" />
        </FadeInOnScroll>

        {/* 3 × 2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {FEATURES.slice(0, 6).map((item, i) => (
            <FadeInOnScroll key={item.title} direction="up" delay={i * 0.07}>
              <FeatureCard {...item} index={i} />
            </FadeInOnScroll>
          ))}
        </div>

        {/* 7th card — centred */}
        <FadeInOnScroll direction="up" delay={0.44} className="flex justify-center">
          <div className="w-full md:w-1/3">
            <FeatureCard {...FEATURES[6]} index={6} />
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}
