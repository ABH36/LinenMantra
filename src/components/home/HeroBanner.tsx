"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Leaf,
  Globe,
  Hash,
  Calendar,
  Factory,
  Users,
  Award,
  Shirt,
  Trophy,
} from "lucide-react";

// ── Hero-specific colour palette ─────────────────────────────────────
const FOREST = "#2C4A2D";
const TERRA  = "#B5442D";
const GOLD   = "#C9A452";
const CREAM  = "#F8F5F0";

// ── Persistent stats card (top-right) ───────────────────────────────
const STATS_CARD = [
  { Icon: Globe,    value: "14+",    label: "COUNTRIES"    },
  { Icon: Hash,     value: "25–150", label: "LEA RANGE"    },
  { Icon: Calendar, value: "SINCE",  label: "1991"         },
  { Icon: Factory,  value: "B2B",    label: "MANUFACTURER" },
];

// ── Persistent bottom strip ──────────────────────────────────────────
const STRIP = [
  { Icon: Leaf,  bold: "PURE BY NATURE.",              light: "PERFECTED BY EXPERTISE."             },
  { Icon: Users, bold: "B2B MANUFACTURER",             light: "For Brands. For Business."            },
  { Icon: Shirt, bold: "MEN'S SHIRTING & SUITING",     light: "Crafted for Comfort. Designed for Style." },
  { Icon: Award, bold: "GLOBAL QUALITY.",              light: "TIMELESS STYLE."                     },
];

// ── Slide data ───────────────────────────────────────────────────────
interface MiniItem { Icon: LucideIcon; label: string; sub: string }

interface SlideData {
  id:            number;
  image:         string;
  isDark:        boolean;
  h1:            string;
  h1Color:       string;
  h2:            string;
  h2Color:       string;
  flourish?:     boolean;
  sub?:          string;
  body:          string;
  cta:           { text: string; href: string; bg: string; fg: string };
  extrasBefore?: MiniItem[];
  extrasAfter?:  MiniItem[];
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    image:   "/images/hero/herobanner1.png",
    isDark:  false,
    h1:      "The Fabric Behind",
    h1Color: FOREST,
    h2:      "Great Brands",
    h2Color: TERRA,
    flourish: true,
    body:    "From flax fields to premium collections, we craft linen fabrics trusted by designers, manufacturers, and brands worldwide.",
    cta:     { text: "Explore Collections", href: "/products", bg: FOREST, fg: CREAM },
    extrasAfter: [
      { Icon: Calendar, label: "SINCE 1991",          sub: "25+ Years of Excellence"          },
      { Icon: Hash,     label: "25–150 LEA RANGE",    sub: "Wide range for every creation"    },
      { Icon: Globe,    label: "GLOBAL EXPORT",        sub: "Trusted in 14+ Countries"         },
      { Icon: Factory,  label: "EUROPEAN TECHNOLOGY",  sub: "Advanced machinery for quality"   },
    ],
  },
  {
    id: 1,
    image:   "/images/hero/herobanner2.png",
    isDark:  false,
    h1:      "From Flax to Fabric.",
    h1Color: FOREST,
    h2:      "Crafted by Linen Mantra.",
    h2Color: TERRA,
    sub:     "Natural by Origin. Refined by Expertise.",
    body:    "Premium linen fabrics engineered for menswear brands, designers, and apparel manufacturers worldwide.",
    cta:     { text: "Request Fabric Samples", href: "/contact", bg: FOREST, fg: CREAM },
    extrasBefore: [
      { Icon: Leaf,    label: "PURE FLAX",         sub: "Naturally Sustainable"      },
      { Icon: Hash,    label: "PREMIUM QUALITY",   sub: "European Standards"         },
      { Icon: Shirt,   label: "MADE FOR MENSWEAR", sub: "Shirting & Suiting Fabrics" },
      { Icon: Globe,   label: "GLOBAL REACH",      sub: "Exporting Excellence"       },
    ],
  },
  {
    id: 2,
    image:   "/images/hero/herobanner3.png",
    isDark:  true,
    h1:      "India's Premium",
    h1Color: CREAM,
    h2:      "Linen Export House",
    h2Color: GOLD,
    flourish: true,
    sub:     "Trusted Across 14+ Countries.",
    body:    "Supplying premium linen and linen-blend fabrics to global brands since 1991.",
    cta:     { text: "Get Export Quote", href: "/contact", bg: GOLD, fg: FOREST },
    extrasAfter: [
      { Icon: Trophy,  label: "25+",    sub: "YEARS EXPERTISE"      },
      { Icon: Globe,   label: "14+",    sub: "EXPORT COUNTRIES"     },
      { Icon: Hash,    label: "25–150", sub: "LEA RANGE"            },
      { Icon: Factory, label: "B2B",   sub: "PREMIUM MANUFACTURER"  },
    ],
  },
];

const TOTAL       = SLIDES.length;
const INTERVAL_MS = 5500;

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

// ── 4-column stat/feature row (slide 1 after-CTA & slide 3) ─────────
function StatsRow({
  items,
  isDark,
  isGold,
}: {
  items:  MiniItem[];
  isDark: boolean;
  isGold?: boolean;
}) {
  const borderC = isGold
    ? "rgba(201,164,82,0.22)"
    : isDark
    ? "rgba(248,245,240,0.1)"
    : "rgba(44,74,45,0.12)";
  const iconC  = isGold || isDark ? GOLD   : FOREST;
  const labelC = isGold           ? GOLD   : isDark ? CREAM : FOREST;
  const subC   = isGold
    ? "rgba(201,164,82,0.58)"
    : isDark
    ? "rgba(248,245,240,0.48)"
    : "rgba(44,74,45,0.52)";

  return (
    <div
      className="grid grid-cols-4 gap-0 mt-5"
      style={{ borderTop: `1px solid ${borderC}` }}
    >
      {items.map(({ Icon, label, sub }, i) => (
        <div
          key={i}
          className="pt-3.5"
          style={{
            paddingRight: "0.6rem",
            paddingLeft: i > 0 ? "0.6rem" : "0",
            borderRight:
              i < items.length - 1 ? `1px solid ${borderC}` : "none",
          }}
        >
          <Icon size={12} color={iconC} className="mb-1.5" style={{ opacity: 0.8 }} />
          <p
            className="font-semibold leading-tight"
            style={{ fontSize: "0.6rem", color: labelC, letterSpacing: "0.06em" }}
          >
            {label}
          </p>
          <p className="leading-tight mt-0.5" style={{ fontSize: "0.575rem", color: subC }}>
            {sub}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── 2×2 feature tile grid (slide 2 before-CTA) ───────────────────────
function FeatureTiles({ items }: { items: MiniItem[] }) {
  const borderC = "rgba(44,74,45,0.12)";
  return (
    <div
      className="grid grid-cols-2 gap-0 mt-4"
      style={{ border: `1px solid ${borderC}` }}
    >
      {items.map(({ Icon, label, sub }, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 p-3"
          style={{
            borderRight:  i % 2 === 0 ? `1px solid ${borderC}` : "none",
            borderBottom: i < 2       ? `1px solid ${borderC}` : "none",
          }}
        >
          <Icon size={12} color={FOREST} className="mt-0.5 shrink-0" style={{ opacity: 0.72 }} />
          <div>
            <p
              className="font-semibold leading-tight"
              style={{ fontSize: "0.6rem", color: FOREST, letterSpacing: "0.05em" }}
            >
              {label}
            </p>
            <p
              className="leading-tight mt-0.5"
              style={{ fontSize: "0.575rem", color: "rgba(44,74,45,0.55)" }}
            >
              {sub}
            </p>
          </div>
        </div>
      ))}
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

  const slide         = SLIDES[current];
  const flourishColor = slide.isDark ? GOLD : FOREST;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "620px", backgroundColor: CREAM }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background images (opacity fade) ── */}
      {SLIDES.map((s) => (
        <div
          key={s.id}
          className="absolute inset-0"
          style={{
            opacity:    s.id === current ? 1 : 0,
            transition: "opacity 0.85s ease",
            zIndex:     0,
          }}
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

      {/* ── Top-right stats card (md+) ── */}
      <div
        className="absolute z-30 hidden md:block"
        style={{
          top:             "96px",
          right:           "2.5rem",
          backgroundColor: FOREST,
          padding:         "1rem 1.2rem",
          minWidth:        "155px",
        }}
      >
        {STATS_CARD.map(({ Icon, value, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-2.5"
            style={{
              borderBottom:
                i < STATS_CARD.length - 1
                  ? "1px solid rgba(248,245,240,0.08)"
                  : "none",
            }}
          >
            <Icon size={15} color={GOLD} className="shrink-0" />
            <div>
              <p
                className="font-semibold leading-none"
                style={{ fontSize: "0.88rem", color: CREAM }}
              >
                {value}
              </p>
              <p
                className="mt-0.5"
                style={{
                  fontSize:      "0.575rem",
                  color:         "rgba(248,245,240,0.48)",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Slide content (left column) ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col"
        style={{ paddingTop: "88px", paddingBottom: "60px" }}
      >
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
                        ? "rgba(201,164,82,0.72)"
                        : "rgba(44,74,45,0.62)",
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

                {/* Flourish OR thin divider */}
                {slide.flourish ? (
                  <Flourish color={flourishColor} />
                ) : (
                  <div
                    className="h-px w-8 my-4"
                    style={{ backgroundColor: FOREST, opacity: 0.35 }}
                  />
                )}

                {/* Sub-heading */}
                {slide.sub && (
                  <p
                    className="font-medium mb-3"
                    style={{
                      fontSize: "0.875rem",
                      color: slide.isDark
                        ? "rgba(248,245,240,0.78)"
                        : "rgba(44,74,45,0.72)",
                    }}
                  >
                    {slide.sub}
                  </p>
                )}

                {/* Body copy */}
                <p
                  className="leading-relaxed mb-5"
                  style={{
                    fontSize: "0.9rem",
                    color: slide.isDark
                      ? "rgba(248,245,240,0.58)"
                      : "rgba(44,74,45,0.6)",
                  }}
                >
                  {slide.body}
                </p>

                {/* Feature tiles before CTA (slide 2) */}
                {slide.extrasBefore && (
                  <FeatureTiles items={slide.extrasBefore} />
                )}

                {/* CTA */}
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80 group mt-5"
                  style={{ backgroundColor: slide.cta.bg, color: slide.cta.fg }}
                >
                  <span>{slide.cta.text}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Stat row after CTA (slides 1 & 3) */}
                {slide.extrasAfter && (
                  <StatsRow
                    items={slide.extrasAfter}
                    isDark={slide.isDark}
                    isGold={slide.id === 2}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide dots (right side, above strip, md+) ── */}
      <div
        className="absolute z-30 hidden md:flex flex-col gap-2 items-center"
        style={{ bottom: "72px", right: "2.5rem" }}
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
                className="flex items-center gap-3 py-3"
                style={{
                  borderRight:
                    i < STRIP.length - 1
                      ? "1px solid rgba(248,245,240,0.08)"
                      : "none",
                  paddingLeft:  i > 0 ? "1.25rem" : "0",
                  paddingRight: "1.25rem",
                }}
              >
                <Icon size={15} color={GOLD} className="shrink-0" style={{ opacity: 0.8 }} />
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
