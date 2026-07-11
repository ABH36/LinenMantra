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
    <>
      {/* ── MOBILE: image on top, content below ── */}
      <section className="md:hidden w-full">
        {hasImage && (
          <div className="w-full overflow-hidden">
            <Image
              src={image}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-auto block"
              priority
            />
          </div>
        )}
        <div
          className="px-6 py-10"
          style={{
            backgroundColor: hasImage
              ? "var(--color-bg-primary)"
              : isDark
              ? "var(--color-bg-secondary)"
              : "var(--color-bg-secondary)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1
              className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)" }}
            >
              {heading}
            </h1>
            {label && (
              <p
                className="font-display italic leading-snug mt-2 text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)" }}
              >
                {label}
              </p>
            )}
            <AccentDivider className="mt-2" />
            {subText && (
              <p className="mt-5 leading-relaxed text-base text-[var(--color-text-secondary)]">
                {subText}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── DESKTOP: full-bleed image with overlaid text ── */}
      <section
        className={`hidden md:block relative w-full pt-44 pb-24 overflow-hidden`}
        style={
          hasImage
            ? { backgroundColor: "#111110" }
            : isDark
            ? {
                backgroundImage: "url('/images/about/footer/fabric.webp')",
                backgroundSize: "400px auto",
                backgroundRepeat: "repeat",
              }
            : { backgroundColor: "var(--color-bg-secondary)" }
        }
      >
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
            <h1
              className="font-display font-normal leading-tight"
              style={{
                color: headingColor,
                fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
              }}
            >
              {heading}
            </h1>
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
    </>
  );
}
