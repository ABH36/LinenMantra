import FaqAccordion from "./FaqAccordion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import type { FaqItem } from "@/data/products";

type Props = {
  category: string;
  guide: string;
  faqs: FaqItem[];
};

export default function CategoryGuideSection({ category, guide, faqs }: Props) {
  // FAQPage JSON-LD for rich results in Google and AI overviews
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
      aria-label={`Buying guide and FAQ for ${category}`}
    >
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left: Buying guide */}
          <FadeInOnScroll direction="up" className="lg:col-span-2">
            <div>
              <p className="text-[0.75rem] tracking-[0.18em] uppercase mb-3 text-[var(--color-text-muted)]">
                Buyer&apos;s Guide
              </p>
              <h2
                className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
              >
                Understanding {category} Fabric
              </h2>
              <AccentDivider className="mt-3 mb-5" />
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {guide}
              </p>
            </div>
          </FadeInOnScroll>

          {/* Right: FAQ accordion */}
          <FadeInOnScroll direction="up" delay={0.1} className="lg:col-span-3">
            <div>
              <p className="text-[0.75rem] tracking-[0.18em] uppercase mb-3 text-[var(--color-text-muted)]">
                Frequently Asked Questions
              </p>
              <h2
                className="font-display font-normal leading-tight text-[var(--color-text-primary)] mb-6"
                style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
              >
                Common Sourcing Questions
              </h2>
              <FaqAccordion faqs={faqs} idPrefix={`${category.toLowerCase().replace(/\s+/g, "-")}-faq`} />
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
