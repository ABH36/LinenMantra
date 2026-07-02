import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";

const productTypes = [
  {
    number: "01",
    name: "100% Pure Linen Fabrics",
    description:
      "The purest expression of linen — breathable, naturally textured, and crafted across a full count range from 25 to 150 LEA.",
  },
  {
    number: "02",
    name: "Linen Blended Fabrics",
    description:
      "Carefully engineered blends of linen with cotton, wool, and art silk — combining the best of each fibre for superior performance and hand-feel.",
  },
  {
    number: "03",
    name: "Linen Shirting",
    description:
      "Premium shirting fabrics in plain, yarn-dyed, dobby, and printed constructions — crafted for fashion-forward menswear and womenswear collections.",
  },
  {
    number: "04",
    name: "Linen Suiting",
    description:
      "Structured, refined suiting fabrics for formal tailoring and contemporary fashion — available in pure linen and premium blended compositions.",
  },
  {
    number: "05",
    name: "Yarn-Dyed Linen Fabrics",
    description:
      "Rich, colour-fast yarn-dyed linens featuring stripes, checks, and geometric patterns with exceptional depth and consistency of colour.",
  },
  {
    number: "06",
    name: "Designer Linen Collections",
    description:
      "Seasonal and trend-driven collections featuring jacquards, digital prints, panel designs, and specialty weaves for high-fashion applications.",
  },
  {
    number: "07",
    name: "Custom Fabric Development",
    description:
      "End-to-end bespoke fabric development for brands — from construction specification and yarn selection through to sampling and production.",
  },
];

export default function WhatWeCreate() {
  return (
    <SectionWrapper>
      {/* Section header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
        <FadeInOnScroll direction="up">
          <span className="text-label block mb-5 text-[var(--color-accent)]">
            Our Specialisation
          </span>
          <h2 className="font-display font-normal leading-tight text-[var(--text-h2)] text-[var(--color-text-primary)]">
            What We Create
          </h2>
          <span className="block h-px w-10 mt-5 bg-[var(--color-accent)]" />
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.1} className="flex flex-col justify-end">
          <p className="leading-relaxed text-[var(--color-text-secondary)] text-[var(--text-body)]">
            At Linen Mantra, we specialise in developing premium linen fabrics
            designed for contemporary fashion and lifestyle applications. We
            manufacture across a full linen count range — from 25 LEA to 150
            LEA — offering diverse textures, constructions, colours, and finishes
            suited to any design requirement.
          </p>
        </FadeInOnScroll>
      </div>

      {/* Product type grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--color-border)]">
        {productTypes.map((type, i) => (
          <FadeInOnScroll key={type.number} direction="up" delay={i * 0.07}>
            <div className="p-8 h-full group transition-colors duration-300 hover:bg-[var(--color-bg-secondary)] border-r border-b border-[var(--color-border)]">
              {/* Number */}
              <span
                className="font-display font-normal block mb-5 transition-colors duration-300 leading-none text-[var(--color-border)]"
                style={{ fontSize: "2.5rem" }}
              >
                {type.number}
              </span>

              {/* Name */}
              <h3 className="font-display font-normal leading-tight mb-4 text-[var(--text-h4)] text-[var(--color-text-primary)]">
                {type.name}
              </h3>

              {/* Accent line */}
              <span className="block h-px w-6 mb-4 transition-all duration-300 group-hover:w-10 bg-[var(--color-accent)]" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {type.description}
              </p>
            </div>
          </FadeInOnScroll>
        ))}

        {/* 8th cell — count range highlight */}
        <FadeInOnScroll direction="up" delay={0.49}>
          <div className="p-8 h-full flex flex-col justify-between bg-[var(--color-bg-dark)] border-r border-b border-[var(--color-border-dark)]">
            <div>
              <span
                className="font-display font-normal block leading-none text-[var(--color-accent-light)]"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                25–150
              </span>
              <p className="text-label mt-2" style={{ color: "rgba(248,245,240,0.45)" }}>
                LEA Count Range
              </p>
            </div>
            <p className="text-sm leading-relaxed mt-6" style={{ color: "rgba(248,245,240,0.4)" }}>
              The full spectrum of linen — from heavy structured weaves to
              ultra-fine luxury fabrics.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
