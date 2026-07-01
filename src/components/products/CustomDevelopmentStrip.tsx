import Link from "next/link";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function CustomDevelopmentStrip() {
  return (
    <section
      className="w-full section-py"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left text */}
          <FadeInOnScroll direction="up">
            <span
              className="text-label block mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Custom Development
            </span>
            <h2
              className="font-display font-normal leading-tight mb-4"
              style={{
                fontSize: "var(--text-h2)",
                color: "var(--color-text-primary)",
              }}
            >
              Can&apos;t Find
              <br />
              What You Need?
            </h2>
            <span
              className="block h-px w-10 mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p
              className="leading-relaxed max-w-md"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--text-body)",
              }}
            >
              We specialise in end-to-end custom fabric development — from
              construction specification and yarn selection to sampling and
              production. Tell us your brief and we&apos;ll build the perfect
              linen fabric for your collection.
            </p>
          </FadeInOnScroll>

          {/* Right — feature points + CTA */}
          <FadeInOnScroll direction="up" delay={0.15}>
            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <ul className="flex flex-col gap-0 mb-8">
                {[
                  "Bespoke linen blends & compositions",
                  "Custom yarn count specifications",
                  "Exclusive weave constructions",
                  "Proprietary colour & finish development",
                  "Sampling to production — end-to-end",
                ].map((point, i, arr) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 py-4"
                    style={{
                      borderBottom:
                        i < arr.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase rounded transition-opacity hover:opacity-80 group"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "var(--color-text-light)",
                }}
              >
                <span>Discuss Your Brief</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
