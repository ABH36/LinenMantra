"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const steps = [
  { id: "flax",   label: "Flax",   description: "Natural plant origin", image: "/images/process/Flax.png"   },
  { id: "fiber",  label: "Fiber",  description: "Retted & processed",   image: "/images/process/Fiber.png"  },
  { id: "yarn",   label: "Yarn",   description: "Spun to count",        image: "/images/process/Yarn.png"   },
  { id: "weave",  label: "Weave",  description: "Precision crafted",    image: "/images/process/Weave.png"  },
  { id: "fabric", label: "Fabric", description: "Premium finish",       image: "/images/process/Fabric.png" },
];

const DURATION = 2400;

export default function FlaxToFabric() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="w-full" style={{ backgroundColor: "var(--color-bg-secondary)" }}>

      {/* Section label */}
      <div className="container-site pt-16 pb-8 md:pt-20 md:pb-10">
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

      {/* 5-panel strip */}
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
              className="relative flex-1 min-w-[200px] overflow-hidden cursor-pointer text-left"
              style={{ minHeight: "clamp(280px, 35vw, 480px)", background: "none", border: "none", padding: 0 }}
            >
              {/* Photo */}
              <Image
                src={step.image}
                alt={step.label}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center"
                style={{
                  transform: isActive ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              />

              {/* Dark overlay — lifts on active */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.0) 45%, rgba(0,0,0,0.52) 100%)"
                    : "linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.62) 100%)",
                  transition: "background 0.7s ease",
                }}
              />

              {/* Accent bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "3px",
                  backgroundColor: "var(--color-accent)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              />

              {/* Step number */}
              <span
                className="absolute top-6 left-6 font-display text-5xl font-normal select-none"
                style={{
                  color: "rgba(248,245,240,1)",
                  lineHeight: 1,
                  opacity: isActive ? 0.65 : 0.25,
                  transition: "opacity 0.6s ease",
                }}
              >
                0{i + 1}
              </span>

              {/* Arrow — inside panel, right edge, frosted glass */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    color: "rgba(248,245,240,0.85)",
                    fontSize: "0.7rem",
                  }}
                >
                  →
                </div>
              )}

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 pb-6"
                style={{
                  paddingBottom: isActive ? "28px" : "24px",
                  transition: "padding-bottom 0.55s ease",
                }}
              >
                <p
                  className="font-display font-normal mb-1"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "rgba(248,245,240,0.95)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.label}
                </p>
                <p
                  className="text-label"
                  style={{
                    color: "rgba(248,245,240,0.95)",
                    opacity: isActive ? 0.85 : 0.6,
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

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-5" style={{ borderTop: "1px solid var(--color-border)" }}>
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
                width: i === active ? "2rem" : "0.5rem",
                height: "2px",
                backgroundColor:
                  i === active ? "var(--color-accent)" : "var(--color-border)",
                transition: "width 0.4s ease, background-color 0.4s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* Tagline */}
      <div className="w-full pb-5 text-center">
        <p className="text-label tracking-[0.25em]" style={{ color: "var(--color-text-muted)" }}>
          Natural by Origin&nbsp;&nbsp;·&nbsp;&nbsp;Refined by Expertise&nbsp;&nbsp;·&nbsp;&nbsp;Made for Life
        </p>
      </div>
    </section>
  );
}
