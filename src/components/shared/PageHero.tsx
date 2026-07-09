"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AccentDivider from "./AccentDivider";

type Props = {
  label?: string;
  heading: string;
  subText?: string;
  dark?: boolean;
  image?: string;
  lightImage?: boolean;
};

export default function PageHero({
  label,
  heading,
  subText,
  dark = false,
  image,
  lightImage = false,
}: Props) {
  const hasImage = !!image;
  const isDark = hasImage || dark;

  const bg = hasImage ? "" : isDark ? "" : "bg-[var(--color-bg-secondary)]";

  const headingColor = lightImage
    ? "var(--color-cta)"
    : hasImage
    ? "var(--color-text-light)"
    : "var(--color-text-primary)";

  const subColor = lightImage
    ? "var(--color-text-secondary)"
    : hasImage
    ? "rgba(248,245,240,0.88)"
    : "var(--color-text-secondary)";

  return (
    <section
      className={`relative w-full pt-28 pb-14 md:pt-44 md:pb-24 overflow-hidden ${hasImage ? "" : bg}`}
      style={
        hasImage
          ? { backgroundColor: "#111110" }
          : !hasImage && isDark
          ? {
              backgroundImage: "url('/images/about/footer/fabric.webp')",
              backgroundSize: "400px auto",
              backgroundRepeat: "repeat",
            }
          : undefined
      }
    >
      {/* Background image */}
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
          {/* Dark overlay only for dark-background images */}
          {!lightImage && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.58) 55%, rgba(10,9,8,0.28) 100%)",
              }}
            />
          )}
        </>
      )}

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Large page title */}
          <h1
            className="font-display font-normal leading-tight"
            style={{
              color: headingColor,
              fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
            }}
          >
            {heading}
          </h1>

          {/* Italic subtitle below heading */}
          {label && (
            <p
              className="font-display italic leading-snug mt-2"
              style={{
                color: headingColor,
                fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              }}
            >
              {label}
            </p>
          )}

          <AccentDivider className="mt-2" />

          {subText && (
            <p
              className="mt-5 max-w-lg leading-relaxed text-base"
              style={{ color: subColor }}
            >
              {subText}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
