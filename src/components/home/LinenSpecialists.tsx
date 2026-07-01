"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { specialists } from "@/data/specialists";

export default function LinenSpecialists() {
  const [activeId, setActiveId] = useState(specialists[0].id);
  const activeItem = specialists.find((s) => s.id === activeId)!;

  return (
    <section
      className="w-full py-10 lg:py-14 bg-[var(--color-bg-secondary)]"
    >
    <div className="container-site">
      {/* Section title */}
      <FadeInOnScroll direction="up" className="mb-14">
        <span className="text-label block mb-4" style={{ color: "var(--color-accent)" }}>
          Why Linen Mantra
        </span>
        <h2
          className="font-display font-normal leading-tight max-w-lg"
          style={{
            fontSize: "var(--text-h2)",
            color: "var(--color-text-primary)",
          }}
        >
          Linen Specialists,
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            Since 1991
          </em>
        </h2>
        <span
          className="block h-px w-10 mt-5"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </FadeInOnScroll>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Left — numbered list */}
        <FadeInOnScroll direction="up" delay={0.1} className="lg:col-span-2">
          <nav aria-label="Specialist points">
            <ul className="flex flex-col">
              {specialists.map((item, i) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveId(item.id)}
                      className="w-full flex items-center gap-5 py-5 text-left cursor-pointer transition-all duration-300 group"
                      style={{
                        borderTop:
                          i === 0 ? "1px solid var(--color-border)" : "none",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                      aria-pressed={isActive}
                    >
                      {/* Number */}
                      <span
                        className="font-display font-normal shrink-0 transition-all duration-300"
                        style={{
                          fontSize: "1.5rem",
                          color: isActive
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                          lineHeight: 1,
                        }}
                      >
                        {item.number}
                      </span>

                      {/* Title */}
                      <span
                        className="text-sm font-medium leading-tight transition-all duration-300"
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
                        className="ml-auto shrink-0 transition-all duration-300"
                        style={{
                          color: "var(--color-accent)",
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
          <div
            className="relative p-8 md:p-12 border border-[var(--color-border)]"
            style={{
              backgroundColor: "var(--color-bg-primary)",
              minHeight: "280px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Decorative large number background */}
            <span
              className="absolute top-4 right-6 font-display font-normal select-none pointer-events-none"
              style={{
                fontSize: "8rem",
                lineHeight: 1,
                color: "var(--color-border)",
                opacity: 0.5,
              }}
            >
              {activeItem.number}
            </span>

            {/* Content with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10"
              >
                <span
                  className="text-label block mb-5"
                  style={{ color: "var(--color-accent)" }}
                >
                  {activeItem.number} / {String(specialists.length).padStart(2, "0")}
                </span>
                <h3
                  className="font-display font-normal leading-tight mb-6"
                  style={{
                    fontSize: "var(--text-h3)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {activeItem.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "var(--text-body)",
                  }}
                >
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
