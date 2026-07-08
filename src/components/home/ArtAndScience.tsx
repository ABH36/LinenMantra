"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      className="w-full py-8 lg:py-12 bg-[var(--color-bg-secondary)]"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── Left — image at content height ── */}
          <motion.div
            className="relative w-full aspect-[4/3] overflow-hidden"
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

          {/* ── Right — content ── */}
          <div className="flex flex-col justify-center">

            {/* Tag */}
            <motion.p className="text-label mb-4" {...fadeUp(0.15)}>
              CRAFTED WITH{" "}
              <span className="text-[var(--color-accent)]">HERITAGE.</span>
              {" "}MADE WITH{" "}
              <span className="text-[var(--color-text-primary)]">PRECISION.</span>
            </motion.p>

            {/* Flourish */}
            <motion.div className="flex items-center gap-2.5 mb-5" {...fadeUp(0.22)}>
              <span className="block h-px w-10 bg-[var(--color-accent)] opacity-55" />
              <Leaf size={13} className="text-[var(--color-accent)] opacity-70" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display font-normal leading-tight mb-6 uppercase text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.01em" }}
              {...fadeUp(0.28)}
            >
              16+ Years of
              <br />
              Textile Expertise
            </motion.h2>

            {/* Description */}
            <motion.p
              className="leading-relaxed text-[var(--color-text-secondary)] text-base"
              {...fadeUp(0.34)}
            >
              At Linen Mantra, every fabric is a result of thoughtful craftsmanship
              and modern technology. From the finest flax to the final finish,
              we ensure perfection in every detail.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
