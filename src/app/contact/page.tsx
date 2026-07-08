import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import EnquiryForm from "@/components/contact/EnquiryForm";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Linen Mantra for fabric sourcing enquiries, custom development, export pricing, or sampling requests. We respond within 1–2 business days.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  void searchParams;

  return (
    <>
      <PageHero
        label="Contact Us"
        heading="Start a Conversation"
        subText="Tell us what you're looking for. Our team will respond with the detail and clarity your sourcing decisions deserve."
        image="/images/contactus/contactupherobanner.png"
      />

      <SectionWrapper>

        {/* ── Office cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Head Office */}
          <FadeInOnScroll direction="right">
            <div className="group relative h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-colors duration-500 hover:border-[var(--color-accent)]">
              {/* Gold top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]" />

              <div className="p-8 pt-10">
                {/* Label */}
                <p className="text-[10px] font-black tracking-[0.22em] uppercase text-center mb-3 text-[var(--color-accent)]">
                  Head Office
                </p>
                {/* Gold rule */}
                <div className="mx-auto mb-6 h-px w-10 bg-[var(--color-accent)] opacity-50" />
                {/* City heading */}
                <h3 className="font-display font-semibold text-center mb-7 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                  Mumbai — Lower Parel
                </h3>

                {/* Thin divider */}
                <div className="mb-6 h-px bg-[var(--color-border)]" />

                {/* Address row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                    <MapPin size={13} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Address
                    </p>
                    <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      A-111, Kewal Industrial Estate, Lower Parel (West), Mumbai — 400013
                    </span>
                  </div>
                </div>

                {/* Phone row */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                    <Phone size={13} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Phone
                    </p>
                    <a
                      href="tel:+912245005662"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      +91 22 4500 5662
                    </a>
                  </div>
                </div>
              </div>

              {/* Gold bottom hover bar */}
              <div className="absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-500" />
            </div>
          </FadeInOnScroll>

          {/* Branch Office */}
          <FadeInOnScroll direction="left" delay={0.1}>
            <div className="group relative h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-colors duration-500 hover:border-[var(--color-accent)]">
              <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]" />

              <div className="p-8 pt-10">
                <p className="text-[10px] font-black tracking-[0.22em] uppercase text-center mb-3 text-[var(--color-accent)]">
                  Branch Office
                </p>
                <div className="mx-auto mb-6 h-px w-10 bg-[var(--color-accent)] opacity-50" />
                <h3 className="font-display font-semibold text-center mb-7 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                  Mumbai — Kalbadevi
                </h3>

                <div className="mb-6 h-px bg-[var(--color-border)]" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                    <MapPin size={13} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Address
                    </p>
                    <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      #384-M Building, Shop No. 1, Ground Floor, Dabholkar Wadi, Kalbadevi Road, Mumbai — 400002
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                    <Phone size={13} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Phone
                    </p>
                    <a
                      href="tel:+912245687288"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      +91 22 4568 7288
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-500" />
            </div>
          </FadeInOnScroll>

        </div>

        {/* ── Contact strip: Shrey | Email | Vipul ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mb-16 border border-[var(--color-border)] overflow-hidden">

          {/* Shrey */}
          <FadeInOnScroll direction="right" delay={0.15} className="h-full">
            <div className="group relative h-full flex flex-col items-center justify-center px-8 py-8 bg-[var(--color-bg-secondary)] border-b sm:border-b-0 sm:border-r border-[var(--color-border)] text-center transition-colors duration-500 hover:border-[var(--color-accent)]">
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3 text-[var(--color-accent)]">
                Shrey Raichura
              </p>
              <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
              <a
                href="tel:+919769422606"
                className="font-display font-normal text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                +91 97694 22606
              </a>
              <div className="absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-500" />
            </div>
          </FadeInOnScroll>

          {/* Email */}
          <FadeInOnScroll direction="up" delay={0.22} className="h-full">
            <div className="group relative h-full flex flex-col items-center justify-center px-8 py-8 bg-[var(--color-bg-primary)] border-b sm:border-b-0 sm:border-r border-[var(--color-border)] text-center transition-colors duration-500 hover:border-[var(--color-accent)]">
              <div className="w-9 h-9 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4">
                <Mail size={13} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3 text-[var(--color-accent)]">
                Email Us
              </p>
              <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
              <a
                href="mailto:linenmantra@gmail.com"
                className="font-display font-normal text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 break-all"
              >
                linenmantra@gmail.com
              </a>
              <div className="absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-500" />
            </div>
          </FadeInOnScroll>

          {/* Vipul */}
          <FadeInOnScroll direction="left" delay={0.15} className="h-full">
            <div className="group relative h-full flex flex-col items-center justify-center px-8 py-8 bg-[var(--color-bg-secondary)] text-center transition-colors duration-500 hover:border-[var(--color-accent)]">
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3 text-[var(--color-accent)]">
                Vipul Raichura
              </p>
              <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
              <a
                href="tel:+919820286875"
                className="font-display font-normal text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                +91 98202 86875
              </a>
              <div className="absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-500" />
            </div>
          </FadeInOnScroll>

        </div>

        {/* ── Google Map (left) + Enquiry Form (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

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
