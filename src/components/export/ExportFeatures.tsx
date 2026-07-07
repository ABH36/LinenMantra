import { Globe, Scissors, Package, BarChart3, Users, ShieldCheck, Plane } from "lucide-react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import type { LucideIcon } from "lucide-react";

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

function FeatureCard({ Icon, title, body }: (typeof FEATURES)[number]) {
  return (
    <div className="group relative flex flex-col h-full p-8 bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
      {/* Icon box */}
      <div className="w-11 h-11 flex items-center justify-center mb-6 bg-[var(--color-bg-secondary)] shrink-0">
        <Icon size={18} className="text-[var(--color-accent)]" />
      </div>

      {/* Title */}
      <h3
        className="font-display font-normal leading-tight mb-3 text-[var(--color-text-primary)]"
        style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)" }}
      >
        {title}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {body}
      </p>

      {/* Accent bottom rule — slides in on hover */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-accent)]" />
    </div>
  );
}

export default function ExportFeatures() {
  return (
    <section className="w-full section-py bg-[var(--color-bg-secondary)]">
      <div className="container-site">

        {/* Section heading */}
        <FadeInOnScroll direction="up">
          <span className="text-label block mb-5 text-[var(--color-accent)]">
            Why Export With Us
          </span>
          <h2
            className="font-display font-normal leading-tight mb-12 text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            Built for Global Business
          </h2>
        </FadeInOnScroll>

        {/* Row 1 + Row 2 — 3 × 2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {FEATURES.slice(0, 6).map((item, i) => (
            <FadeInOnScroll key={item.title} direction="up" delay={i * 0.07}>
              <FeatureCard {...item} />
            </FadeInOnScroll>
          ))}
        </div>

        {/* Row 3 — single card centred */}
        <FadeInOnScroll direction="up" delay={0.44} className="flex justify-center">
          <div className="w-full md:w-1/3">
            <FeatureCard {...FEATURES[6]} />
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}
