import Link from "next/link";
import FadeInOnScroll from "./FadeInOnScroll";
import AccentDivider from "./AccentDivider";

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
    <section className={`w-full py-8 md:py-10 ${dark ? "bg-[var(--color-cta)]" : "bg-[var(--color-bg-secondary)]"}`}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <FadeInOnScroll direction="up" className="max-w-xl">
            <h2
              className={`font-display font-normal leading-tight ${dark ? "text-white" : "text-[var(--color-text-primary)]"}`}
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
            >
              {heading}
            </h2>
            <AccentDivider className="mt-4 mb-5" />
            <p className={`leading-relaxed text-[var(--text-body)] ${dark ? "text-white" : "text-[var(--color-text-secondary)]"}`}>
              {subText}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15} className="shrink-0">
            <Link
              href={ctaHref}
              className={`inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300 group ${
                dark
                  ? "bg-[var(--color-text-light)] text-[var(--color-cta)] hover:opacity-90"
                  : "bg-[var(--color-cta)] text-[var(--color-text-light)] hover:opacity-80"
              }`}
            >
              <span>{ctaLabel}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
