"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shirt, LayoutGrid, Factory, Home } from "lucide-react";
import { CLD } from "@/lib/cloudinary";

// ── Hero-specific colour palette ─────────────────────────────────────
const FOREST = "var(--color-forest)";
const TERRA  = "var(--color-terra)";
const GOLD   = "var(--color-gold)";
const CREAM  = "var(--color-text-light)";

// ── Persistent bottom strip ──────────────────────────────────────────
const STRIP = [
  { Icon: Factory,    bold: "B2B MANUFACTURING",       light: "For Brands. For Business."    },
  { Icon: LayoutGrid, bold: "READY STOCK COLLECTION",  light: "Extensive Inventory."         },
  { Icon: Shirt,      bold: "SHIRTING & SUITING",      light: "25 LEA TO 150 LEA · 58\""    },
  { Icon: Home,       bold: "HOME FURNISHINGS",        light: "6 LEA TO 150 LEA · 128\""    },
];

// ── Slide data ───────────────────────────────────────────────────────
interface SlideData {
  id:              number;
  image:           string;
  mobileImage:     string;
  objectPosition?: string;
  h1:              string;
  h1Color:         string;
  h2:              string;
  h2Color:         string;
  large?:          boolean;
  flourish?:       boolean;
  body?:           string;
  cta?:            { text: string; href: string; bg: string; fg: string };
}

const SLIDES: SlideData[] = [
  {
    id:          0,
    image:       CLD.hero.banner2,
    mobileImage: CLD.hero.banner2Mob,
    h1:          "From Flax to Fabric.",
    h1Color:     FOREST,
    h2:          "Crafted by Linen Mantra.",
    h2Color:     TERRA,
    flourish:    true,
  },
  {
    id:          1,
    image:       CLD.hero.banner1,
    mobileImage: CLD.hero.banner1Mob,
    h1:          "Linen",
    h1Color:     FOREST,
    h2:          "Reimagined.",
    h2Color:     TERRA,
    large:       true,
    flourish:    true,
  },
  {
    id:             2,
    image:          CLD.hero.banner,
    mobileImage:    CLD.hero.bannerMob,
    objectPosition: "top",
    h1:             "Trusted by",
    h1Color:        FOREST,
    h2:             "Global Brands.",
    h2Color:        TERRA,
    large:          true,
    flourish:       true,
  },
];

const TOTAL       = SLIDES.length;
const INTERVAL_MS = 5000;

// ── Leaf flourish divider ────────────────────────────────────────────
function Flourish() {
  return (
    <div className="flex items-center gap-3 my-5">
      <span className="block h-px w-10 bg-[var(--color-accent)]" />
      <Image src={CLD.about.leaf} alt="" width={20} height={17} className="w-5 h-auto object-contain opacity-85" aria-hidden="true" />
      <span className="block h-px w-10 bg-[var(--color-accent)]" />
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

  // Resume autoplay when user returns to this tab
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") setPaused(false);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const slide = SLIDES[current];

  return (
    <>
    {/* ════════════════════════════════════════
        MOBILE LAYOUT — image top, content below
    ════════════════════════════════════════ */}
    <section className="md:hidden flex flex-col w-full">

      {/* Image — slides behind transparent header, gradient ensures hamburger visibility */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex"
          style={{
            transform:  `translateX(-${current * 100}%)`,
            transition: "transform 0.65s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          {SLIDES.map((s) => (
            <div key={s.id} className="relative flex-shrink-0" style={{ minWidth: "100%", aspectRatio: "4/5" }}>
              <Image
                src={s.mobileImage}
                alt="Linen Mantra"
                fill
                sizes="100vw"
                className="object-cover object-center"
                loading={s.id === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Top gradient — makes cream hamburger icon visible over image */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-10"
          style={{ height: "100px", background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)" }}
        />
      </div>

      {/* Content — below image */}
      <div className="px-6 py-8 bg-[var(--color-bg-primary)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {(slide.h1 || slide.h2) && (
              <h1 className="font-display font-normal leading-none uppercase" style={{ fontSize: slide.large ? "clamp(2.2rem, 9vw, 3.5rem)" : "clamp(2rem, 8vw, 2.8rem)", letterSpacing: "-0.01em" }}>
                <span className="block" style={{ color: slide.h1Color }}>{slide.h1}</span>
                <span className="block" style={{ color: slide.h2Color }}>{slide.h2}</span>
              </h1>
            )}
            {slide.flourish && <Flourish />}
            {slide.body && (
              <p className="leading-relaxed mb-5" style={{ fontSize: "0.875rem", color: "rgba(44,74,45,0.82)" }}>
                {slide.body}
              </p>
            )}
            {slide.cta && (
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase group"
                style={{ backgroundColor: slide.cta.bg, color: slide.cta.fg }}
              >
                <span>{slide.cta.text}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} className="cursor-pointer p-1" style={{ background: "none", border: "none" }}>
              <span className="block rounded-full transition-all duration-300" style={{ width: i === current ? "20px" : "6px", height: "4px", backgroundColor: i === current ? FOREST : "rgba(44,74,45,0.25)" }} />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom strip — 2×2 grid on mobile */}
      <div className="bg-[var(--color-forest)]">
        <div className="grid grid-cols-2">
          {STRIP.map(({ Icon, bold, light }, i) => (
            <div key={i} className="flex items-center gap-2.5 px-4 py-3" style={{ borderRight: (i + 1) % 2 !== 0 ? "1px solid rgba(248,245,240,0.08)" : "none", borderTop: i >= 2 ? "1px solid rgba(248,245,240,0.08)" : "none" }}>
              <Icon size={12} style={{ color: GOLD, opacity: 0.8, flexShrink: 0 }} />
              <div>
                <p className="font-semibold leading-tight" style={{ fontSize: "0.52rem", color: CREAM, letterSpacing: "0.05em" }}>{bold}</p>
                <p className="leading-tight mt-0.5" style={{ fontSize: "0.50rem", color: "rgba(248,245,240,0.70)" }}>{light}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════════
        DESKTOP LAYOUT — full-screen overlay
    ════════════════════════════════════════ */}
    <section
      className="relative w-full overflow-hidden hidden md:block"
      style={{ height: "100vh", minHeight: "680px" }}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setPaused(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setPaused(false); }}
    >
      {/* ── CSS transform horizontal slide track ── */}
      <div
        className="absolute inset-0 flex h-full"
        style={{
          width:      `${TOTAL * 100}%`,
          transform:  `translateX(-${(current * 100) / TOTAL}%)`,
          transition: "transform 0.65s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {SLIDES.map((s) => (
          <div key={s.id} className="relative h-full flex-shrink-0" style={{ width: `${100 / TOTAL}%` }}>
            <Image
              src={s.image}
              alt="Linen Mantra"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.objectPosition ?? "center" }}
              priority={s.id === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Left content gradient ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(248,245,240,0.72) 0%, rgba(248,245,240,0.42) 35%, rgba(248,245,240,0.08) 58%, transparent 72%)" }}
      />

      {/* ── Top gradient ── */}
      <div
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: "150px", background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 55%, transparent 100%)" }}
      />

      {/* ── Slide content ── */}
      <div className="absolute inset-0 z-20 flex flex-col pt-[120px] pb-[48px]" style={{ paddingRight: "clamp(0px, 14vw, 215px)" }}>
        <div className="container-site flex-1 flex items-center">
          <div className="w-full max-w-[555px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="font-display font-normal leading-none uppercase" style={{ fontSize: slide.large ? "clamp(2.8rem, 5.5vw, 5.5rem)" : "clamp(2.3rem, 4.8vw, 4rem)", letterSpacing: "-0.01em" }}>
                  <span className="block" style={{ color: slide.h1Color }}>{slide.h1}</span>
                  <span className="block" style={{ color: slide.h2Color }}>{slide.h2}</span>
                </h1>
                {slide.flourish && <Flourish />}
                {slide.body && (
                  <p className="leading-relaxed mb-6" style={{ fontSize: "0.9rem", color: "rgba(44,74,45,0.82)" }}>
                    {slide.body}
                  </p>
                )}
                {slide.cta && (
                  <Link href={slide.cta.href} className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded transition-opacity hover:opacity-80 group" style={{ backgroundColor: slide.cta.bg, color: slide.cta.fg }}>
                    <span>{slide.cta.text}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide navigation dots ── */}
      <div className="absolute z-30 flex flex-col gap-2 items-center" style={{ bottom: "68px", right: "2rem" }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} className="cursor-pointer" style={{ background: "none", border: "none", padding: "3px" }}>
            <span className="block rounded-full transition-all duration-300" style={{ width: i === current ? "8px" : "5px", height: i === current ? "8px" : "5px", backgroundColor: i === current ? GOLD : "rgba(44,74,45,0.35)" }} />
          </button>
        ))}
      </div>

      {/* ── Bottom feature strip ── */}
      <div className="absolute inset-x-0 bottom-0 z-30 bg-[var(--color-forest)]"
      >
        <div className="container-site">
          <div className="grid grid-cols-4">
            {STRIP.map(({ Icon, bold, light }, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 py-3.5 px-5"
                style={{
                  borderRight: i < STRIP.length - 1 ? "1px solid rgba(248,245,240,0.08)" : "none",
                }}
              >
                <Icon
                  size={15}
                  style={{ color: GOLD, opacity: 0.8, flexShrink: 0 }}
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
                    style={{ fontSize: "0.575rem", color: "rgba(248,245,240,0.70)" }}
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
    </>
  );
}
