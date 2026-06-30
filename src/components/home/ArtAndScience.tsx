import Image from "next/image";
import { Factory, Layers, BadgeCheck, Globe } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const features = [
  {
    Icon: Factory,
    title: "State-of-the-Art Manufacturing",
    body: "Advanced looms and modern infrastructure ensure consistent quality and smooth production.",
  },
  {
    Icon: Layers,
    title: "Premium Linen Fabrics",
    body: "Wide range of 25–150 LEA linen and linen-blend fabrics for shirting and suiting.",
  },
  {
    Icon: BadgeCheck,
    title: "Quality at Every Step",
    body: "Rigorous quality checks and skilled hands ensure flawless fabrics.",
  },
  {
    Icon: Globe,
    title: "Trusted by Global Brands",
    body: "Proudly supplying premium fabrics to 14+ countries across the world.",
  },
];

export default function ArtAndScience() {
  return (
    <section
      className="w-full section-py"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — two overlapping images */}
          <FadeInOnScroll direction="up">
            <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
              {/* Primary image — top portion */}
              <div className="absolute top-0 left-0 right-0" style={{ height: "63%" }}>
                <Image
                  src="/images/about/mill1.png"
                  alt="Linen weaving mill"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Accent block — bottom left */}
              <div
                className="absolute bottom-0 left-0"
                style={{
                  width: "35%",
                  height: "44%",
                  backgroundColor: "var(--color-cta)",
                  opacity: 0.18,
                }}
              />

              {/* Secondary image — bottom right, overlapping */}
              <div
                className="absolute bottom-0 right-0"
                style={{ width: "73%", height: "47%" }}
              >
                <Image
                  src="/images/about/mill3.png"
                  alt="Premium linen fabric samples"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                  style={{ outline: "6px solid var(--color-bg-secondary)" }}
                />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Right — content */}
          <FadeInOnScroll direction="up" delay={0.15}>
            {/* Tag */}
            <p
              className="text-label mb-5"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}
            >
              CRAFTED WITH{" "}
              <span style={{ color: "var(--color-accent)" }}>HERITAGE.</span>
              {" "}MADE WITH{" "}
              <span style={{ color: "var(--color-cta)" }}>PRECISION.</span>
            </p>

            {/* Accent line */}
            <span
              className="block h-px w-10 mb-7"
              style={{ backgroundColor: "var(--color-accent)" }}
            />

            {/* Heading */}
            <h2
              className="font-display font-normal leading-tight mb-6"
              style={{
                fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              The Art &amp; Science
              <br />
              Behind Every Fabric
            </h2>

            {/* Description */}
            <p
              className="leading-relaxed mb-9"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--text-body)",
              }}
            >
              At Linen Mantra, every fabric is a result of thoughtful craftsmanship
              and modern technology. From the finest flax to the final finish,
              we ensure perfection in every detail.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-0">
              {features.map(({ Icon, title, body }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full mt-0.5"
                    style={{ backgroundColor: "var(--color-bg-dark)" }}
                  >
                    <Icon size={15} color="var(--color-text-light)" />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom italic quote */}
            <p
              className="mt-7 font-display"
              style={{
                fontStyle: "italic",
                color: "var(--color-accent)",
                fontSize: "1.05rem",
              }}
            >
              Because great brands begin with exceptional fabric.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
