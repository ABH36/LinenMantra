import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactInfo from "@/components/contact/ContactInfo";
import EnquiryForm from "@/components/contact/EnquiryForm";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { MapPin, Phone, Mail } from "lucide-react";

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

        {/* ── Office addresses — Head Office (left) | Branch Office (right) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Head Office */}
          <FadeInOnScroll direction="up">
            <div className="h-full p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <span className="text-label block mb-4 text-[var(--color-accent)]">Head Office</span>
              <h3 className="font-display font-normal mb-6 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                Mumbai — Lower Parel
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    A-111, Kewal Industrial Estate,<br />
                    Lower Parel (West),<br />
                    Mumbai — 400013
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <div className="flex flex-col gap-0.5 text-sm text-[var(--color-text-secondary)]">
                    <a href="tel:+918975972300" className="hover:opacity-70 transition-opacity">+91 89759 72300</a>
                    <a href="tel:+919769422606" className="hover:opacity-70 transition-opacity">+91 97694 22606</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <div className="flex flex-col gap-0.5 text-sm text-[var(--color-text-secondary)]">
                    <a href="mailto:linenmantra@gmail.com" className="hover:opacity-70 transition-opacity">linenmantra@gmail.com</a>
                    <a href="mailto:export@linenmantra.com" className="hover:opacity-70 transition-opacity">export@linenmantra.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Branch Office */}
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="h-full p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <span className="text-label block mb-4 text-[var(--color-accent)]">Branch Office</span>
              <h3 className="font-display font-normal mb-6 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                Mumbai — Kalbadevi
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-[var(--color-accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    #384-M Building, Shop No. 1,<br />
                    Ground Floor, Dabholkar Wadi,<br />
                    Kalbadevi Road,<br />
                    Mumbai — 400002
                  </span>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>

        </div>

        {/* ── Contact details (left) + Enquiry form (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <ContactInfo />
          <EnquiryForm />
        </div>

      </SectionWrapper>
    </>
  );
}
