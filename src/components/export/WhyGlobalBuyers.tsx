import Link from "next/link";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";

const reasons = [
  {
    number: "01",
    title: "Manufacturer-Direct Relationship",
    body: "You communicate directly with our production team — not an agent or trader. This means faster decisions, transparent pricing, and a partner who genuinely understands your fabric requirements.",
  },
  {
    number: "02",
    title: "25+ Years of Linen Mastery",
    body: "Founded in 1991, we have developed deep expertise across the full linen count spectrum — from everyday shirting to luxury designer fabrics. That knowledge translates into consistent, reliable supply.",
  },
  {
    number: "03",
    title: "Sampling to Bulk — Seamlessly",
    body: "We support brands at every stage. From initial concept sampling to bulk production, our workflow is designed to move at the pace of modern fashion and garment sourcing calendars.",
  },
  {
    number: "04",
    title: "Verified Quality at Every Metre",
    body: "Our internal QC processes ensure that what leaves our mill matches what was approved at sampling — in construction, handle, and finish — every single time.",
  },
];

export default function WhyGlobalBuyers() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — heading + CTA */}
        <FadeInOnScroll direction="up" className="lg:sticky lg:top-32">
          <span
            className="text-label block mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Why Source With Us
          </span>
          <h2
            className="font-display font-normal leading-tight mb-6"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--color-text-primary)",
            }}
          >
            What Global Buyers
            <br />
            Value Most
          </h2>
          <span
            className="block h-px w-10 mb-8"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p
            className="leading-relaxed mb-10 max-w-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            From independent designers to established retail brands, global buyers
            choose Linen Mantra for one reason: we deliver exactly what we promise,
            every time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase rounded transition-opacity hover:opacity-80 group"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "var(--color-text-light)",
            }}
          >
            <span>Start a Conversation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </FadeInOnScroll>

        {/* Right — reasons stack */}
        <div className="flex flex-col gap-0">
          {reasons.map((item, i) => (
            <FadeInOnScroll key={item.number} direction="up" delay={i * 0.1}>
              <div
                className="py-8 group"
                style={{
                  borderBottom:
                    i < reasons.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                  borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <div className="flex gap-6 items-start">
                  <span
                    className="font-display font-normal shrink-0 leading-none pt-1"
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--color-accent)",
                      opacity: 0.5,
                    }}
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3
                      className="font-display font-normal leading-tight mb-3"
                      style={{
                        fontSize: "var(--text-h3)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
