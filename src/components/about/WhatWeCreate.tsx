"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";

const productTypes = [
  {
    id: "pure-linen",
    number: "01",
    title: "100% Linen Fabrics",
    description:
      "The purest expression of linen — breathable, naturally textured, and crafted across a full count range from 6 LEA to 150 LEA.",
  },
  {
    id: "blended",
    number: "02",
    title: "Linen Blended Fabrics",
    description:
      "Carefully engineered blends of linen with cotton, lyocell, viscose, silk, PU & polyester — combining the best of each fibre for superior performance and hand-feel.",
  },
  {
    id: "menswear-womenswear",
    number: "03",
    title: "Menswear & Womenswear",
    description:
      "Premium linen fabrics crafted for contemporary apparel across men's and women's fashion. Offering versatile qualities, colours, and finishes for every season.",
  },
  {
    id: "home-furnishings",
    number: "04",
    title: "Home Furnishings",
    description:
      "Beautifully woven linen for curtains, upholstery, cushions, table linens, and home décor.",
  },
  {
    id: "custom",
    number: "05",
    title: "Custom Fabric Development",
    description:
      "End-to-end bespoke fabric development for brands — from construction specification and yarn selection through to sampling and production.",
  },
];

export default function WhatWeCreate() {
  const [activeId, setActiveId] = useState(productTypes[0].id);
  const activeItem = productTypes.find((p) => p.id === activeId)!;

  return (
    <section className="w-full py-8 lg:py-12 bg-[var(--color-bg-primary)]">
      <div className="container-site">

        {/* Section title */}
        <FadeInOnScroll direction="up" className="mb-10">
          <span className="text-label block mb-1 text-[var(--color-accent)]">
            Our Specialisation
          </span>
          <h2
            className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            What We Create
          </h2>
          <AccentDivider className="mt-1" />
        </FadeInOnScroll>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — numbered list */}
          <FadeInOnScroll direction="up" delay={0.1} className="lg:col-span-2">
            <nav aria-label="Product types">
              <ul className="flex flex-col">
                {productTypes.map((item, i) => {
                  const isActive = item.id === activeId;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveId(item.id)}
                        className="w-full flex items-center gap-5 py-5 text-left cursor-pointer transition-all duration-300 group border-b border-[var(--color-border)]"
                        style={{
                          borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
                        }}
                        aria-pressed={isActive}
                      >
                        {/* Number */}
                        <span
                          className="font-display font-normal shrink-0 transition-all duration-300"
                          style={{
                            fontSize: "2rem",
                            color: isActive ? "var(--color-accent)" : "var(--color-border)",
                            lineHeight: 1,
                          }}
                        >
                          {item.number}
                        </span>

                        {/* Title */}
                        <span
                          className="text-base font-medium leading-tight transition-all duration-300"
                          style={{
                            color: isActive
                              ? "var(--color-text-primary)"
                              : "var(--color-text-secondary)",
                          }}
                        >
                          {item.title}
                        </span>

                        {/* Active arrow */}
                        <span
                          className="ml-auto shrink-0 transition-all duration-300 text-[var(--color-accent)]"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(-6px)",
                          }}
                        >
                          →
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </FadeInOnScroll>

          {/* Right — active content */}
          <FadeInOnScroll direction="up" delay={0.2} className="lg:col-span-3 flex flex-col justify-center">
            <div className="relative p-8 md:p-12 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] min-h-[280px] shadow-[var(--shadow-card)]">

              {/* Decorative large number background */}
              <span
                className="absolute top-4 right-6 font-display font-normal select-none pointer-events-none text-[var(--color-border)]"
                style={{ fontSize: "8rem", lineHeight: 1, opacity: 0.5 }}
              >
                {activeItem.number}
              </span>

              {/* Animated content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-10"
                >
                  <span className="text-label block mb-5 text-[var(--color-accent)]">
                    {activeItem.number} / {String(productTypes.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-normal leading-tight mb-6 text-2xl md:text-3xl text-[var(--color-text-primary)]">
                    {activeItem.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
