"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  label?: string;
  heading: string;
  subText?: string;
  dark?: boolean;
  image?: string;
};

export default function PageHero({ label, heading, subText, dark = false, image }: Props) {
  const hasImage = !!image;
  const isDark = hasImage || dark;

  const bg = hasImage
    ? ""
    : isDark
    ? "bg-[var(--color-bg-dark)]"
    : "bg-[var(--color-bg-secondary)]";

  const headingColor = isDark ? "var(--color-text-light)" : "var(--color-text-primary)";
  const subColor = isDark ? "rgba(248,245,240,0.6)" : "var(--color-text-secondary)";

  return (
    <section
      className={`relative w-full pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden ${hasImage ? "" : bg}`}
      style={hasImage
        ? { backgroundColor: "#111110" }
        : (!hasImage && isDark)
        ? {
            backgroundImage: "url('/images/about/footer/fabric.png')",
            backgroundSize: "400px auto",
            backgroundRepeat: "repeat",
          }
        : undefined}
    >
      {/* Fabric texture + dark overlay — no-image dark variant */}
      {!hasImage && isDark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(8,7,6,0.82)" }}
        />
      )}

      {/* Background image + overlay */}
      {hasImage && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.58) 55%, rgba(10,9,8,0.28) 100%)",
            }}
          />
        </>
      )}

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {label && (
            <span
              className="text-label block mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              {label}
            </span>
          )}
          <h1
            className="font-display font-normal leading-tight max-w-3xl"
            style={{ fontSize: "var(--text-display)", color: headingColor }}
          >
            {heading}
          </h1>
          <span
            className="block h-px w-10 mt-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          {subText && (
            <p
              className="mt-6 max-w-xl leading-relaxed"
              style={{ color: subColor, fontSize: "var(--text-body)" }}
            >
              {subText}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
