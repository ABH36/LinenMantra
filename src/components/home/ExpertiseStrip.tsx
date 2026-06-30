"use client";

import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const stats = [
  { value: 25, suffix: "+", label: "Years of Textile Expertise" },
  { value: 150, suffix: " LEA", label: "Finest Linen Count" },
  { value: 14, suffix: "+", label: "Export Countries" },
  { value: 1991, suffix: "", label: "Year Established" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}

export default function ExpertiseStrip() {
  return (
    <section
      className="w-full section-py relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.png')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Dark overlay — fabric shows through as warm texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(8,7,6,0.82)" }}
      />
      <div className="container-site relative z-10">

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <FadeInOnScroll
              key={stat.label}
              direction="up"
              delay={i * 0.1}
            >
              <div
                className="py-10 lg:py-0 lg:px-8"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid var(--color-border-dark)"
                      : "none",
                  borderBottom:
                    i < 2 ? "1px solid var(--color-border-dark)" : "none",
                  paddingLeft: i % 2 !== 0 ? "2rem" : "0",
                  paddingRight: i % 2 === 0 ? "2rem" : "0",
                }}
              >
                <p
                  className="font-display font-normal leading-none mb-3"
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    color: "var(--color-text-light)",
                  }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="text-sm font-medium leading-tight"
                  style={{ color: "rgba(248,245,240,0.45)" }}
                >
                  {stat.label}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px my-12"
          style={{ backgroundColor: "var(--color-border-dark)" }}
        />

        {/* Bottom — tagline + manufacturing note */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <FadeInOnScroll direction="up" className="max-w-xl">
            <p
              className="font-display font-normal leading-snug"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--color-text-light)",
              }}
            >
              Weaving Excellence
              <br />
              <em style={{ color: "var(--color-accent-light)", fontStyle: "italic" }}>
                for Over 25 Years
              </em>
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.15} className="max-w-sm">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(248,245,240,0.45)" }}
            >
              Our manufacturing facility in Navsari, Gujarat, is equipped with
              modern European weaving and finishing technology — enabling us to
              create premium fabrics across a wide range of constructions,
              textures, and finishes.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
