"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const steps = [
  {
    id:          "flax",
    label:       "Flax",
    description: "Natural plant origin",
    body:        "Everything begins with the finest European flax — a natural fibre harvested from the linen plant. Its inherent strength, breathability, and texture form the foundation of every premium fabric we create.",
    image:       "/images/process/Flax.png",
  },
  {
    id:          "fiber",
    label:       "Fiber",
    description: "Retted & processed",
    body:        "Through careful retting and scutching, raw flax stalks are transformed into long, clean fibres ready for spinning. This stage determines the softness, lustre, and fineness of the final fabric.",
    image:       "/images/process/Fiber.png",
  },
  {
    id:          "yarn",
    label:       "Yarn",
    description: "Spun to count",
    body:        "Processed fibres are spun into yarn across our precise count range of 25–150 LEA. Higher counts yield finer, lighter fabrics while lower counts produce structured, robust textiles for tailoring.",
    image:       "/images/process/Yarn.png",
  },
  {
    id:          "weave",
    label:       "Weave",
    description: "Precision crafted",
    body:        "Our European-standard looms interlace the yarn into distinct constructions — plain weave, twill, and blends. Precision weaving defines the drape, texture, and character of every metre produced.",
    image:       "/images/process/Weave.png",
  },
  {
    id:          "fabric",
    label:       "Fabric",
    description: "Premium finish",
    body:        "Each roll undergoes finishing, quality inspection, and colour treatment before dispatch. The result is a premium linen fabric that meets international export standards and exacting brand specifications.",
    image:       "/images/process/Fabric.png",
  },
];

const DURATION = 2800;
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function FlaxToFabric() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="w-full bg-[var(--color-bg-secondary)]">

      {/* Section heading */}
      <div className="container-site pt-14 pb-8 md:pt-16 md:pb-10">
        <FadeInOnScroll direction="up">
          <div className="flex items-center gap-4">
            <span className="text-label" style={{ color: "var(--color-accent)" }}>
              Our Process
            </span>
            <span className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
          </div>
          <h2
            className="font-display font-normal mt-4"
            style={{ fontSize: "var(--text-h2)", color: "var(--color-text-primary)" }}
          >
            Flax to Fabric
          </h2>
        </FadeInOnScroll>
      </div>

      {/* 5-panel image strip */}
      <div
        className="w-full flex overflow-x-auto no-scrollbar"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.id}
              onClick={() => setActive(i)}
              className="relative flex-1 min-w-[180px] overflow-hidden cursor-pointer text-left"
              style={{ minHeight: "clamp(240px, 28vw, 380px)", background: "none", border: "none", padding: 0 }}
            >
              {/* Photo */}
              <Image
                src={step.image}
                alt={step.label}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center"
                style={{
                  transform:  isActive ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.55) 100%)"
                    : "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.65) 100%)",
                  transition: "background 0.7s ease",
                }}
              />

              {/* Accent bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height:          "3px",
                  backgroundColor: "var(--color-accent)",
                  transform:       isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition:      "transform 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              />

              {/* Step number */}
              <span
                className="absolute top-5 left-5 font-display text-5xl font-normal select-none"
                style={{
                  color:      "rgba(248,245,240,1)",
                  lineHeight: 1,
                  opacity:    isActive ? 0.65 : 0.22,
                  transition: "opacity 0.6s ease",
                }}
              >
                0{i + 1}
              </span>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.14)",
                    backdropFilter:  "blur(6px)",
                    border:          "1px solid rgba(255,255,255,0.2)",
                    color:           "rgba(248,245,240,0.85)",
                    fontSize:        "0.65rem",
                  }}
                >
                  →
                </div>
              )}

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5"
                style={{
                  paddingBottom: isActive ? "26px" : "20px",
                  transition:    "padding-bottom 0.55s ease",
                }}
              >
                <p
                  className="font-display font-normal mb-0.5"
                  style={{
                    fontSize:      "clamp(1.1rem, 2.2vw, 1.6rem)",
                    color:         "rgba(248,245,240,0.95)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.label}
                </p>
                <p
                  className="text-label"
                  style={{
                    color:      "rgba(248,245,240,0.9)",
                    opacity:    isActive ? 0.82 : 0.5,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active step detail — fades smoothly with each step change */}
      <div
        className="container-site py-7"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.42, ease: EASE }}
            className="flex items-start gap-6 md:gap-10"
          >
            {/* Large step number accent */}
            <span
              className="font-display font-normal shrink-0 hidden md:block leading-none select-none"
              style={{ fontSize: "3.5rem", color: "var(--color-accent)", opacity: 0.22 }}
            >
              0{active + 1}
            </span>

            <div>
              <h3
                className="font-display font-normal mb-2"
                style={{ fontSize: "var(--text-h3)", color: "var(--color-text-primary)" }}
              >
                {steps[active].label}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-2xl"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {steps[active].body}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div
        className="flex justify-center gap-2 py-4"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => setActive(i)}
            aria-label={step.label}
            style={{ background: "none", border: "none", padding: "4px", cursor: "pointer" }}
          >
            <span
              className="block rounded-full"
              style={{
                width:           i === active ? "2rem" : "0.5rem",
                height:          "2px",
                backgroundColor: i === active ? "var(--color-accent)" : "var(--color-border)",
                transition:      "width 0.4s ease, background-color 0.4s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* Tagline */}
      <div className="w-full pb-5 text-center">
        <p className="text-label tracking-[0.22em]" style={{ color: "var(--color-text-muted)" }}>
          Natural by Origin&nbsp;&nbsp;·&nbsp;&nbsp;Refined by Expertise&nbsp;&nbsp;·&nbsp;&nbsp;Made for Life
        </p>
      </div>

    </section>
  );
}
