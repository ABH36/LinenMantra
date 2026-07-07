import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import EnquiryForm from "@/components/contact/EnquiryForm";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Linen Mantra for fabric sourcing enquiries, custom development, export pricing, or sampling requests. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        heading="Start a Conversation"
        subText="Tell us what you're looking for. Our team will respond with the detail and clarity your sourcing decisions deserve."
        image="/images/contactus/contactupherobanner.png"
      />

      <SectionWrapper>

        {/* ── 3-column: Head Office | Email | Branch Office ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Head Office */}
          <FadeInOnScroll direction="up">
            <div className="h-full p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <span className="text-label block mb-4 text-center font-bold text-[var(--color-accent)]">Head Office</span>
              <h3 className="font-display font-semibold text-center mb-6 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                Mumbai — Lower Parel
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <span className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    A-111, Kewal Industrial Estate, Lower Parel (West), Mumbai — 400013
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <a
                    href="tel:+912245005662"
                    className="text-sm text-[var(--color-text-secondary)] hover:opacity-70 transition-opacity"
                  >
                    +91 22 4500 5662
                  </a>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Email (center) */}
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="h-full p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center text-center">
              <span className="text-label block mb-4 font-bold text-[var(--color-accent)]">Email Us</span>
              <a
                href="mailto:linenmantra@gmail.com"
                className="font-display font-semibold text-[var(--text-h3)] text-[var(--color-text-primary)] hover:opacity-70 transition-opacity break-all"
              >
                linenmantra@gmail.com
              </a>
            </div>
          </FadeInOnScroll>

          {/* Branch Office */}
          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="h-full p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <span className="text-label block mb-4 text-center font-bold text-[var(--color-accent)]">Branch Office</span>
              <h3 className="font-display font-semibold text-center mb-6 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                Mumbai — Kalbadevi
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <span className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    #384-M Building, Shop No. 1, Ground Floor, Dabholkar Wadi, Kalbadevi Road, Mumbai — 400002
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <a
                    href="tel:+912245687288"
                    className="text-sm text-[var(--color-text-secondary)] hover:opacity-70 transition-opacity"
                  >
                    +91 22 4568 7288
                  </a>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>

        </div>

        {/* ── Google Map (left) + Enquiry Form (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Google Map */}
          <FadeInOnScroll direction="up">
            <div className="flex flex-col">
              <span className="text-label block mb-4 text-[var(--color-accent)]">Find Us</span>
              <div
                className="relative w-full border border-[var(--color-border)] overflow-hidden"
                style={{ paddingBottom: "75%" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=18.9971884,72.8267863&hl=en&z=17&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Linen Mantra Head Office — Kewal Industrial Estate"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                A-111, Kewal Industrial Estate, Lower Parel (West), Mumbai — 400013
              </p>
            </div>
          </FadeInOnScroll>

          <EnquiryForm />

        </div>

      </SectionWrapper>
    </>
  );
}
