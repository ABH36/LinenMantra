"use client";

import Image from "next/image";
import { Factory, Layers, BadgeCheck, Globe, Leaf } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

// Shared ease curve used across the whole site
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function ArtAndScience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <section
      ref={ref}
      className="w-full py-10 lg:py-14"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">

          {/* ── Left — staggered image composition ── */}
          <div className="relative w-full h-full" style={{ minHeight: "440px" }}>

            {/* Primary image — slides in from left */}
            <motion.div
              className="absolute top-0 left-0 right-0 overflow-hidden"
              style={{ height: "62%" }}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.85, delay: 0.05, ease: EASE }}
            >
              <Image
                src="/images/expert/expert1.png"
                alt="Linen weaving mill"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Spacer block — same as section background (no color) */}
            <motion.div
              className="absolute bottom-0 left-0"
              style={{
                width: "34%",
                height: "45%",
                backgroundColor: "var(--color-bg-secondary)",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />

            {/* Secondary image — slides in from right with delay */}
            <motion.div
              className="absolute bottom-0 right-0 overflow-hidden"
              style={{ width: "74%", height: "48%" }}
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 40, y: 20 }}
              transition={{ duration: 0.85, delay: 0.28, ease: EASE }}
            >
              <Image
                src="/images/expert/expert2.png"
                alt="Premium linen fabric samples"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
                style={{ outline: "7px solid var(--color-bg-secondary)" }}
              />
            </motion.div>

          </div>

          {/* ── Right — sequentially staggered content ── */}
          <div>

            {/* Tag */}
            <motion.p
              className="text-label mb-4"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}
              {...fadeUp(0.15)}
            >
              CRAFTED WITH{" "}
              <span style={{ color: "var(--color-accent)" }}>HERITAGE.</span>
              {" "}MADE WITH{" "}
              <span style={{ color: "var(--color-text-primary)" }}>PRECISION.</span>
            </motion.p>

            {/* Flourish — line + leaf */}
            <motion.div className="flex items-center gap-2.5 mb-5" {...fadeUp(0.22)}>
              <span
                className="block h-px w-10"
                style={{ backgroundColor: "var(--color-accent)", opacity: 0.55 }}
              />
              <Leaf size={13} color="var(--color-accent)" style={{ opacity: 0.7 }} />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display font-normal leading-tight mb-5"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
              {...fadeUp(0.28)}
            >
              The Art &amp; Science
              <br />
              Behind Every Fabric
            </motion.h2>

            {/* Description */}
            <motion.p
              className="leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-body)" }}
              {...fadeUp(0.34)}
            >
              At Linen Mantra, every fabric is a result of thoughtful craftsmanship
              and modern technology. From the finest flax to the final finish,
              we ensure perfection in every detail.
            </motion.p>

            {/* Features — each row staggers in */}
            <div className="flex flex-col gap-0">
              {features.map(({ Icon, title, body }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 py-3"
                  style={{
                    borderTop:    i === 0 ? "1px solid var(--color-border)" : "none",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                  {...fadeUp(0.38 + i * 0.09)}
                >
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full mt-0.5"
                    style={{ backgroundColor: "var(--color-accent)" }}
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
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom italic quote */}
            <motion.p
              className="mt-5 font-display"
              style={{ fontStyle: "italic", color: "var(--color-accent)", fontSize: "1rem" }}
              {...fadeUp(0.72)}
            >
              Because great brands begin with exceptional fabric.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
