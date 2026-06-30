"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 0,
    image: "/images/hero/herobanner1.png",
    label: "Premium Linen Fabric Manufacturer",
    lines: ["The Fabric", "Behind"],
    italic: "Great Brands",
    sub: "From flax fields to premium collections, we craft linen fabrics trusted by designers, manufacturers and brands worldwide.",
    cta1: { label: "Explore Products", href: "/products" },
    cta2: { label: "Get a Quote", href: "/contact" },
  },
  {
    id: 1,
    image: "/images/hero/herobanner2.png",
    label: "India's Finest Linen Since 1991",
    lines: ["Linen"],
    italic: "Reimagined",
    sub: "Innovative fabrics. Timeless craftsmanship. Global standards — built for the brands that demand the best.",
    cta1: { label: "View Collections", href: "/products" },
    cta2: { label: "Our Story", href: "/about" },
  },
  {
    id: 2,
    image: "/images/hero/herobanner3.png",
    label: "25 – 150 LEA · Full Linen Spectrum",
    lines: ["Crafted", "for"],
    italic: "Perfection",
    sub: "The full spectrum of linen excellence — from lightweight shirting to luxury suiting, built for premium fashion brands.",
    cta1: { label: "Our Products", href: "/products" },
    cta2: { label: "Get a Quote", href: "/contact" },
  },
  {
    id: 3,
    image: "/images/hero/herobanner4.png",
    label: "Global Linen Export · 14+ Countries",
    lines: ["Woven", "for the"],
    italic: "World",
    sub: "Trusted by premium fashion labels across Europe, Americas, Middle East, and Asia Pacific.",
    cta1: { label: "Export Markets", href: "/export" },
    cta2: { label: "Contact Us", href: "/contact" },
  },
];

const TOTAL = slides.length;
const INTERVAL = 5000;

const badges = ["Natural Origin", "Expert Craftsmanship", "Innovative Design", "Global Standards"];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % TOTAL), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "640px", backgroundColor: "#111110" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Sliding image track (CSS transform — no Framer deps) ── */}
      <div
        className="absolute inset-0 flex h-full"
        style={{
          width: `${TOTAL * 100}%`,
          transform: `translateX(-${(current * 100) / TOTAL}%)`,
          transition: "transform 0.65s cubic-bezier(0.65, 0, 0.35, 1)",
          willChange: "transform",
        }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / TOTAL}%` }}
          >
            <Image
              src={s.image}
              alt={s.label}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={s.id === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Dark overlay (always on top of images) ─────────── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.55) 45%, rgba(10,9,8,0.18) 75%, rgba(10,9,8,0.05) 100%)",
        }}
      />
      {/* Bottom fade for badge strip */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(10,9,8,0.7) 0%, transparent 100%)",
        }}
      />

      {/* ── Text content ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-20 flex flex-col"
        style={{ paddingTop: "80px" }}
      >
        <div className="container-site flex-1 flex items-center">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.52, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Label */}
                <p
                  className="text-label mb-6"
                  style={{ color: "var(--color-accent-light)" }}
                >
                  {slide.label}
                </p>

                {/* Headline */}
                <h1
                  className="font-display font-normal leading-none mb-7"
                  style={{
                    fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                    color: "var(--color-text-light)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {slide.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <em
                    className="block"
                    style={{
                      fontStyle: "italic",
                      color: "var(--color-accent-light)",
                    }}
                  >
                    {slide.italic}
                  </em>
                </h1>

                {/* Accent line */}
                <span
                  className="block h-px w-10 mb-6"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />

                {/* Sub-copy */}
                <p
                  className="leading-relaxed mb-9 max-w-sm"
                  style={{
                    color: "rgba(248,245,240,0.6)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {slide.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={slide.cta1.href}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-widest uppercase group"
                    style={{
                      backgroundColor: "var(--color-cta)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    <span>{slide.cta1.label}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href={slide.cta2.href}
                    className="inline-flex items-center px-6 py-3.5 text-xs font-medium tracking-widest uppercase border"
                    style={{
                      borderColor: "rgba(248,245,240,0.28)",
                      color: "rgba(248,245,240,0.8)",
                    }}
                  >
                    {slide.cta2.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Slide indicators ─────────────────────────────── */}
        <div className="container-site pb-16">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className="cursor-pointer py-2"
                style={{ background: "none", border: "none", padding: "6px 0" }}
              >
                <span
                  className="block h-[2px] rounded-full"
                  style={{
                    width: i === current ? "2.5rem" : "1rem",
                    backgroundColor:
                      i === current
                        ? "var(--color-accent)"
                        : "rgba(248,245,240,0.25)",
                    transition: "width 0.35s ease, background-color 0.35s ease",
                  }}
                />
              </button>
            ))}

            {/* Progress bar */}
            <div
              className="ml-3 overflow-hidden rounded-full"
              style={{
                flex: "0 0 64px",
                height: "2px",
                backgroundColor: "rgba(248,245,240,0.08)",
              }}
            >
              <motion.div
                key={current + "-bar"}
                className="h-full rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom badge strip ───────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 z-30"
        style={{ borderTop: "1px solid rgba(248,245,240,0.07)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {badges.map((badge, i) => (
              <div
                key={badge}
                className="py-4 flex items-center gap-2"
                style={{
                  borderRight:
                    i < badges.length - 1
                      ? "1px solid rgba(248,245,240,0.07)"
                      : "none",
                  paddingLeft: i > 0 ? "1.25rem" : "0",
                  paddingRight: "1.25rem",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "rgba(248,245,240,0.4)" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
