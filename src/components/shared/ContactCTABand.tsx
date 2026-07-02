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
  return (
    <section
      className={`w-full section-py ${dark ? "relative overflow-hidden bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]"}`}
      style={dark ? {
        backgroundImage: "url('/images/about/footer/fabric.png')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      } : undefined}
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <FadeInOnScroll direction="up" className="max-w-xl">
            <h2 className="font-display font-normal leading-tight text-[var(--text-h2)] text-[var(--color-text-primary)]">
              {heading}
            </h2>
            <span className="block h-px w-10 mt-5 bg-[var(--color-accent)]" />
            <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)] text-[var(--text-body)]">
              {subText}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15} className="shrink-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase rounded transition-opacity hover:opacity-80 bg-[var(--color-cta)] text-[var(--color-text-light)]"
            >
              {ctaLabel}
            </Link>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
