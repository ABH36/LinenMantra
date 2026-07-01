import Link from "next/link";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function PremiumStrip() {
  return (
    <section className="w-full py-14 md:py-16 bg-[var(--color-cta)]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <FadeInOnScroll direction="up">
            <h2
              className="font-display font-normal leading-tight text-[var(--color-text-light)]"
              style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)" }}
            >
              The Height of Linen Excellence
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.12} className="shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase text-[var(--color-text-light)] border border-[rgba(248,245,240,0.55)] transition-all duration-300 hover:bg-white/10"
            >
              Our Collections
            </Link>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
