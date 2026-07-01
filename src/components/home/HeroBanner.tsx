"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Users, Award, Shirt } from "lucide-react";

// ── Hero-specific colour palette ─────────────────────────────────────
const FOREST = "#2C4A2D";
const TERRA  = "#B5442D";
const GOLD   = "#C9A452";
const CREAM  = "#F8F5F0";

// ── Persistent bottom strip ──────────────────────────────────────────
const STRIP = [
  { Icon: Leaf,  bold: "PURE BY NATURE.",          light: "PERFECTED BY EXPERTISE."              },
  { Icon: Users, bold: "B2B MANUFACTURER",         light: "For Brands. For Business."            },
  { Icon: Shirt, bold: "MEN'S SHIRTING & SUITING", light: "Crafted for Comfort. Designed for Style." },
  { Icon: Award, bold: "GLOBAL QUALITY.",          light: "TIMELESS STYLE."                      },
];

// ── Slide data ───────────────────────────────────────────────────────
interface SlideData {
  id:          number;
  image:       string;
  isDark:      boolean;
  h1:          string;
  h1Color:     string;
  h2:          string;
  h2Color:     string;
  flourish?:   boolean;
  body:        string;
  cta:         { text: string; href: string; bg: string; fg: string };
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    image:    "/images/hero/herobanner1.png",
    isDark:   false,
    h1:       "The Fabric Behind",
    h1Color:  FOREST,
    h2:       "Great Brands",
    h2Color:  TERRA,
    flourish: true,
    body:     "From flax fields to premium collections, we craft linen fabrics trusted by designers, manufacturers, and brands worldwide.",
    cta:      { text: "Explore Collections", href: "/products", bg: FOREST, fg: CREAM },
  },
  {
    id: 1,
    image:    "/images/hero/herobanner2.png",
    isDark:   false,
    h1:       "From Flax to Fabric.",
    h1Color:  FOREST,
    h2:       "Crafted by Linen Mantra.",
    h2Color:  TERRA,
    flourish: true,
    body:     "Premium linen fabrics engineered for menswear brands, designers, and apparel manufacturers worldwide.",
    cta:      { text: "Request Fabric Samples", href: "/contact", bg: FOREST, fg: CREAM },
  },
  {
    id: 2,
    image:    "/images/hero/herobanner3.png",
    isDark:   true,
    h1:       "India's Premium",
    h1Color:  CREAM,
    h2:       "Linen Export House",
    h2Color:  GOLD,
    flourish: true,
    body:     "Supplying premium linen and linen-blend fabrics to global brands across 14+ countries since 1991.",
    cta:      { text: "Get Export Quote", href: "/contact", bg: GOLD, fg: FOREST },
  },
];

const TOTAL       = SLIDES.length;
const INTERVAL_MS = 5000;

// ── Leaf flourish divider ────────────────────────────────────────────
function Flourish({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2.5 my-5">
      <span className="block h-px w-12" style={{ backgroundColor: color, opacity: 0.38 }} />
      <Leaf size={12} color={color} style={{ opacity: 0.6 }} />
      <span className="block h-px w-6"  style={{ backgroundColor: color, opacity: 0.22 }} />
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % TOTAL), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "680px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── CSS transform horizontal slide track ── */}
      <div
        className="absolute inset-0 flex h-full"
        style={{
          width:      `${TOTAL * 100}%`,
          transform:  `translateX(-${(current * 100) / TOTAL}%)`,
          transition: "transform 0.65s cubic-bezier(0.65, 0, 0.35, 1)",
          willChange: "transform",
        }}
      >
        {SLIDES.map((s) => (
          <div
            key={s.id}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / TOTAL}%` }}
          >
            <Image
              src={s.image}
              alt="Linen Mantra"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={s.id === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Top gradient — ensures header nav is always readable ── */}
      <div
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{
          height:     "150px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
        }}
      />

      {/* ── Slide content (left column) — fades per slide ── */}
      <div className="absolute inset-0 z-20 flex flex-col pt-[118px] md:pt-[140px] pb-[52px] md:pb-[48px]">
        <div className="container-site flex-1 flex items-center">
          <div className="w-full max-w-[520px] md:max-w-[555px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Label */}
                <div className="flex items-center gap-2 mb-4">
                  <Leaf
                    size={11}
                    color={slide.isDark ? GOLD : FOREST}
                    style={{ opacity: 0.6 }}
                  />
                  <p
                    className="font-medium tracking-widest uppercase"
                    style={{
                      fontSize: "0.6rem",
                      color: slide.isDark
                        ? "rgba(201,164,82,0.75)"
                        : "rgba(44,74,45,0.65)",
                    }}
                  >
                    Premium Linen Fabric Manufacturer
                  </p>
                </div>

                {/* Two-tone heading */}
                <h1
                  className="font-display font-normal leading-none uppercase"
                  style={{
                    fontSize:      "clamp(2.3rem, 4.8vw, 4rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="block" style={{ color: slide.h1Color }}>
                    {slide.h1}
                  </span>
                  <span className="block" style={{ color: slide.h2Color }}>
                    {slide.h2}
                  </span>
                </h1>

                {/* Flourish or thin divider */}
                {slide.flourish ? (
                  <Flourish color={slide.isDark ? GOLD : FOREST} />
                ) : (
                  <div
                    className="h-px w-8 my-4"
                    style={{ backgroundColor: FOREST, opacity: 0.35 }}
                  />
                )}

                {/* Body copy */}
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontSize: "0.9rem",
                    color: slide.isDark
                      ? "rgba(248,245,240,0.6)"
                      : "rgba(44,74,45,0.62)",
                  }}
                >
                  {slide.body}
                </p>

                {/* CTA */}
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80 group"
                  style={{ backgroundColor: slide.cta.bg, color: slide.cta.fg }}
                >
                  <span>{slide.cta.text}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide navigation dots (right side, md+) ── */}
      <div
        className="absolute z-30 hidden md:flex flex-col gap-2 items-center"
        style={{ bottom: "60px", right: "2.5rem" }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="cursor-pointer"
            style={{ background: "none", border: "none", padding: "3px" }}
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width:           i === current ? "8px" : "5px",
                height:          i === current ? "8px" : "5px",
                backgroundColor: i === current ? GOLD : "rgba(201,164,82,0.28)",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom feature strip (md+) ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-30 hidden md:block"
        style={{ backgroundColor: FOREST }}
      >
        <div className="container-site">
          <div className="grid grid-cols-4">
            {STRIP.map(({ Icon, bold, light }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3.5"
                style={{
                  borderRight:
                    i < STRIP.length - 1
                      ? "1px solid rgba(248,245,240,0.08)"
                      : "none",
                  paddingLeft:  i > 0 ? "1.25rem" : "0",
                  paddingRight: "1.25rem",
                }}
              >
                <Icon
                  size={15}
                  color={GOLD}
                  className="shrink-0"
                  style={{ opacity: 0.8 }}
                />
                <div>
                  <p
                    className="font-semibold leading-tight"
                    style={{ fontSize: "0.6rem", color: CREAM, letterSpacing: "0.06em" }}
                  >
                    {bold}
                  </p>
                  <p
                    className="leading-tight mt-0.5"
                    style={{ fontSize: "0.575rem", color: "rgba(248,245,240,0.42)" }}
                  >
                    {light}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
