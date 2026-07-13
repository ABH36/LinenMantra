import { Globe, Scissors, Package, BarChart3, Users, ShieldCheck, Plane, type LucideIcon } from "lucide-react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import { CLD } from "@/lib/cloudinary";

const FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Globe,
    title: "14+ Countries Served",
    body: "Trusted by buyers across 14+ international markets.",
  },
  {
    Icon: Scissors,
    title: "Custom Fabric Development",
    body: "Develop fabrics tailored to your brand and specifications.",
  },
  {
    Icon: Package,
    title: "Ready Stock Collection",
    body: "Fast dispatch from our in-stock product range.",
  },
  {
    Icon: BarChart3,
    title: "Flexible MOQ",
    body: "Order quantities designed for businesses of all sizes.",
  },
  {
    Icon: Users,
    title: "Dedicated Export Support",
    body: "Complete assistance with documentation and logistics.",
  },
  {
    Icon: ShieldCheck,
    title: "Consistent Quality",
    body: "Quality checks at every production stage.",
  },
  {
    Icon: Plane,
    title: "Fast Worldwide Delivery",
    body: "Reliable shipping with global logistics partners.",
  },
];

function FeatureCard({
  Icon,
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

      {/* Icon — gold tinted, clean line style */}
      <div
        className="w-16 h-16 flex items-center justify-center mb-5 shrink-0"
        style={{ backgroundColor: "rgba(160,140,114,0.10)" }}
      >
        <Icon
          size={30}
          strokeWidth={1.4}
          style={{ color: "var(--color-cta)" }}
        />
      </div>

      {/* Title — dark green, bold */}
      <h3
        className="font-display font-bold leading-tight mb-2 text-[var(--color-cta)]"
        style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)" }}
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
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[var(--color-accent)]" />
    </div>
  );
}

export default function ExportFeatures() {
  return (
    <section
      className="w-full py-10 lg:py-14 relative overflow-hidden"
      style={{
        backgroundImage: `url('${CLD.about.fabric}')`,
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
