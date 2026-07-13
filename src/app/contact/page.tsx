import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import EnquiryForm from "@/components/contact/EnquiryForm";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import Image from "next/image";
import { CLD } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Linen Mantra for fabric sourcing enquiries, custom development, export pricing, or sampling requests. We respond within 1–2 business days.",
};

export default async function ContactPage() {
  return (
    <>
      <PageHero
        label="Start a Conversation"
        heading="Contact Us"
        subText="Tell us what you're looking for. Our team will respond with the detail and clarity your sourcing decisions deserve."
        lightImage
        image={CLD.contact.heroBanner}
      />

      {/* ════════════════════════════════════════════
           OFFICES — fabric texture bg (like footer)
          ════════════════════════════════════════════ */}
      <section
        className="w-full py-12 lg:py-16 relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-bg-dark)",
          backgroundImage: `url('${CLD.about.fabric}')`,
          backgroundSize: "400px auto",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Gold accent top line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(201,164,82,0.2) 100%)",
          }}
        />

        <div className="container-site">

          {/* ── Office cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* Head Office */}
            <FadeInOnScroll direction="right">
              <div className="group relative h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-primary)] transition-colors duration-500 hover:border-[var(--color-accent)]">
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]" />

                <div className="p-6 pt-7">
                  <p className="text-[10px] font-black tracking-[0.22em] uppercase text-center mb-2 text-[var(--color-accent)]">
                    Head Office
                  </p>
                  <div className="mx-auto mb-4 h-px w-10 bg-[var(--color-accent)] opacity-50" />
                  <h3 className="font-display font-semibold text-center mb-5 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                    Mumbai — Lower Parel
                  </h3>

                  <div className="mb-4 h-px bg-[var(--color-border)]" />

                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-2">
                      <Image src={CLD.social.googleMaps} alt="Address" width={18} height={18} />
                    </div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Address
                    </p>
                    <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      A-111, Kewal Industrial Estate, Lower Parel (West), Mumbai — 400013
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-2">
                      <Image src={CLD.social.landline} alt="Phone" width={18} height={18} />
                    </div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Phone
                    </p>
                    <a
                      href="tel:+912245005662"
                      className="text-sm text-[var(--color-text-secondary)] hover:opacity-70 transition-opacity duration-200"
                    >
                      +91 22 4500 5662
                    </a>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--color-accent)] transition-transform duration-500" />
              </div>
            </FadeInOnScroll>

            {/* Branch Office */}
            <FadeInOnScroll direction="left" delay={0.1}>
              <div className="group relative h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-primary)] transition-colors duration-500 hover:border-[var(--color-accent)]">
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]" />

                <div className="p-6 pt-7">
                  <p className="text-[10px] font-black tracking-[0.22em] uppercase text-center mb-2 text-[var(--color-accent)]">
                    Branch Office
                  </p>
                  <div className="mx-auto mb-4 h-px w-10 bg-[var(--color-accent)] opacity-50" />
                  <h3 className="font-display font-semibold text-center mb-5 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                    Mumbai — Kalbadevi
                  </h3>

                  <div className="mb-4 h-px bg-[var(--color-border)]" />

                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-2">
                      <Image src={CLD.social.googleMaps} alt="Address" width={18} height={18} />
                    </div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Address
                    </p>
                    <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      #384-M Building, Shop No. 1, Ground Floor, Dabholkar Wadi, Kalbadevi Road, Mumbai — 400002
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-2">
                      <Image src={CLD.social.landline} alt="Phone" width={18} height={18} />
                    </div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1 text-[var(--color-text-muted)]">
                      Phone
                    </p>
                    <a
                      href="tel:+912245687288"
                      className="text-sm text-[var(--color-text-secondary)] hover:opacity-70 transition-opacity duration-200"
                    >
                      +91 22 4568 7288
                    </a>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--color-accent)] transition-transform duration-500" />
              </div>
            </FadeInOnScroll>

          </div>

          {/* ── Contact strip: Shrey | Email | Vipul ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-[var(--color-border)] overflow-hidden">

            <FadeInOnScroll direction="right" delay={0.15} className="h-full">
              <div className="group relative h-full flex flex-col items-center justify-center px-8 py-5 bg-[var(--color-bg-primary)] border-b sm:border-b-0 sm:border-r border-[var(--color-border)] text-center">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2.5 text-[var(--color-accent)]">
                  Shrey Raichura
                </p>
                <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
                <a
                  href="tel:+919769422606"
                  className="text-base font-normal tracking-wide text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-200"
                >
                  +91 97694 22606
                </a>
                <div className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--color-accent)] transition-transform duration-500" />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.22} className="h-full">
              <div className="group relative h-full flex flex-col items-center justify-center px-8 py-5 bg-[var(--color-bg-primary)] border-b sm:border-b-0 sm:border-r border-[var(--color-border)] text-center">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2.5 text-[var(--color-accent)]">
                  Email Us
                </p>
                <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
                <a
                  href="mailto:linenmantra@gmail.com"
                  className="text-base font-normal tracking-wide text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-200 break-all"
                >
                  linenmantra@gmail.com
                </a>
                <div className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--color-accent)] transition-transform duration-500" />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="left" delay={0.15} className="h-full">
              <div className="group relative h-full flex flex-col items-center justify-center px-8 py-5 bg-[var(--color-bg-primary)] text-center">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2.5 text-[var(--color-accent)]">
                  Vipul Raichura
                </p>
                <div className="mb-3 h-px w-8 bg-[var(--color-accent)] opacity-50" />
                <a
                  href="tel:+919820286875"
                  className="text-base font-normal tracking-wide text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-200"
                >
                  +91 98202 86875
                </a>
                <div className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--color-accent)] transition-transform duration-500" />
              </div>
            </FadeInOnScroll>

          </div>

        </div>

        {/* Gold accent bottom line */}
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(201,164,82,0.2) 100%)",
          }}
        />
      </section>

      {/* ════════════════════════════════════════════
           MAP + ENQUIRY FORM
          ════════════════════════════════════════════ */}
      <section className="w-full py-10 lg:py-14 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">

            {/* Map */}
            <FadeInOnScroll direction="up" className="flex flex-col">
              <span className="text-label block mb-1 text-[var(--color-accent)]">Find Us</span>
              <div className="relative flex-1 min-h-[360px] border border-[var(--color-border)] overflow-hidden">
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
            </FadeInOnScroll>

            {/* Enquiry form */}
            <EnquiryForm />

          </div>
        </div>
      </section>
    </>
  );
}
