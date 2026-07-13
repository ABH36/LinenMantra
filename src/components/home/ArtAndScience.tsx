"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AccentDivider from "@/components/shared/AccentDivider";
import { useRef } from "react";
import { CLD } from "@/lib/cloudinary";

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
              src={CLD.expert.expert1}
              alt="Linen weaving mill"
              fill
              sizes="(max-width: 1024px) calc(100vw - 3rem), 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* ── Right — content ── */}
          <div className="flex flex-col justify-center">

            {/* Tag */}
            <motion.p className="text-label mb-1" {...fadeUp(0.15)}>
              CRAFTED WITH{" "}
              <span className="text-[var(--color-accent)]">HERITAGE.</span>
              {" "}MADE WITH{" "}
              <span className="text-[var(--color-text-primary)]">PRECISION.</span>
            </motion.p>

            {/* Flourish */}
            <motion.div {...fadeUp(0.22)}>
              <AccentDivider className="mb-5" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display font-normal leading-tight mb-6 uppercase text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.01em" }}
              {...fadeUp(0.28)}
            >
              35+ Years of
              <br />
              Textile Expertise
            </motion.h2>

            {/* Description */}
            <motion.p
              className="leading-relaxed text-[var(--color-text-secondary)] text-base"
              {...fadeUp(0.34)}
            >
              Backed by over three decades of textile expertise, Linen Mantra combines skilled craftsmanship with modern technology to create premium linen fabrics with exceptional quality and unique design - from the finest flax to final finish.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
