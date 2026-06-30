import Link from "next/link";
import FadeInOnScroll from "./FadeInOnScroll";

type Props = {
  heading?: string;
  subText?: string;
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
};

export default function ContactCTABand({
  heading = "Let's Create Something Exceptional",
  subText = "Reach out to discuss your fabric requirements, request samples, or explore our latest collections.",
  ctaLabel = "Get a Quote",
  ctaHref = "/contact",
  dark = true,
}: Props) {
  const bg = dark
    ? "bg-[var(--color-bg-dark)]"
    : "bg-[var(--color-bg-secondary)]";
  const headingColor = dark
    ? "var(--color-text-light)"
    : "var(--color-text-primary)";
  const subColor = dark
    ? "rgba(248,245,240,0.55)"
    : "var(--color-text-secondary)";

  return (
    <section className={`w-full section-py ${bg} ${dark ? "relative overflow-hidden" : ""}`}>
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/about/footer/fabric.png')",
            backgroundSize: "400px auto",
            backgroundRepeat: "repeat",
            opacity: 0.09,
          }}
        />
      )}
      <div className={`container-site ${dark ? "relative" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <FadeInOnScroll direction="up" className="max-w-xl">
            <h2
              className="font-display font-normal leading-tight"
              style={{
                fontSize: "var(--text-h2)",
                color: headingColor,
              }}
            >
              {heading}
            </h2>
            <span
              className="block h-px w-10 mt-5"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p
              className="mt-6 leading-relaxed"
              style={{ color: subColor, fontSize: "var(--text-body)" }}
            >
              {subText}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15} className="shrink-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "var(--color-text-light)",
              }}
            >
              {ctaLabel}
            </Link>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
