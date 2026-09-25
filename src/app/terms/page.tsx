import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import JsonLd from "@/components/shared/JsonLd";
import { CLD } from "@/lib/cloudinary";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "Terms of Service | Linen Mantra";
const DESCRIPTION =
  "Terms of Service governing commercial quotes, fabric sampling, minimum order quantities (MOQ), and export supply by Linen Mantra (Silverline Fashion Fabrics Ltd.).";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/terms", imageAlt: "Terms of Service" }),
};

export default function TermsPage() {
  const lastUpdated = "September 24, 2026";

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/terms",
          breadcrumb: [{ name: "Terms of Service", path: "/terms" }],
        })}
      />
      <PageHero
        label="Commercial Governance"
        heading="Terms of Service"
        subText="Conditions governing website usage, fabric sampling, price quotations, and wholesale supply with Linen Mantra."
        lightImage
        image={CLD.products.productHeroBanner}
        imageAlt="Folded linen fabrics with a Linen Mantra tag and a cone of linen yarn"
      />

      <article className="w-full py-14 lg:py-20 bg-[var(--color-bg-primary)]">
        <div className="container-site max-w-4xl mx-auto px-6">

          <div className="flex flex-wrap items-center justify-between pb-6 mb-10 border-b border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
            <p>Effective Date: <span className="font-semibold text-[var(--color-text-primary)]">{lastUpdated}</span></p>
            <p>Jurisdiction: <span className="font-semibold text-[var(--color-text-primary)]">Mumbai, India</span></p>
          </div>

          <div className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                These Terms of Service (&quot;Terms&quot;) govern access to and use of <strong className="text-[var(--color-text-primary)]">linenmantra.com</strong> and all related commercial interactions with <strong className="text-[var(--color-text-primary)]">Silverline Fashion Fabrics Ltd.</strong> (operating as <strong className="text-[var(--color-text-primary)]">Linen Mantra</strong>).
              </p>
              <p>
                By requesting swatches, submitting RFQs (Requests for Quotation), or engaging in commercial trade with us, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                2. Nature of Business & Quotations
              </h2>
              <p className="mb-4">
                Linen Mantra operates exclusively as a Business-to-Business (B2B) textile manufacturer, fabric converter, and exporter. We cater to fashion labels, garment manufacturers, wholesale merchants, institutional clients, and bespoke tailoring houses.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[var(--color-text-primary)]">Non-Binding Inquiries:</strong> Inquiries submitted through our forms do not constitute a binding purchase order until confirmed in writing with an official Proforma Invoice (PI) or Sales Contract.</li>
                <li><strong className="text-[var(--color-text-primary)]">Price & Stock Validity:</strong> Fabric prices are subject to raw material flax price fluctuations, currency exchange rates, and quantity tiers. Quotations remain valid for the period specified on the formal quote sheet.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                3. Sampling, Swatches & Fabric Characteristics
              </h2>
              <p className="mb-4">
                Pure linen is a natural cellulosic fibre spun from the flax plant (<em>Linum usitatissimum</em>). Discerning buyers acknowledge the following inherent textile characteristics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[var(--color-text-primary)]">Natural Slubs & Texture:</strong> Subtle variations in yarn thickness, natural flax slubs, and gentle grain differences are organic hallmarks of genuine linen craft and are not defects.</li>
                <li><strong className="text-[var(--color-text-primary)]">Dye Lot Consistency:</strong> While we maintain rigorous colour-matching standards across our modern dye house, minor shade variances (+/- 3%) between laboratory dipping swatches and production bulk dye lots may occur.</li>
                <li><strong className="text-[var(--color-text-primary)]">Dimensional Tolerances:</strong> Fabric widths (standard 58&quot; and extra-wide 128&quot;) and GSM weights carry a standard industry manufacturing tolerance of +/- 3% to 5%.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                4. MOQs, Production Lead Times & Export Terms
              </h2>
              <p className="mb-4">
                Wholesale bulk supply, custom colour developments, and bespoke weave constructions are subject to Minimum Order Quantities (MOQ) as agreed per fabric quality.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[var(--color-text-primary)]">Incoterms:</strong> Export shipments are handled under standard ICC Incoterms 2020 (FOB Nhava Sheva / Mumbai, CIF, or CFR), as mutually confirmed in the Sales Contract.</li>
                <li><strong className="text-[var(--color-text-primary)]">Delivery Schedules:</strong> Production and shipping timelines communicated are estimates based on standard loom planning and port logistics. Unforeseen force majeure events (port congestion, natural events, customs clearance holds) are treated accordingly.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All trademarks, weave pattern names, photographs, product descriptions, digital line sheets, and graphics published on linenmantra.com are the exclusive intellectual property of Silverline Fashion Fabrics Ltd. or its licensors. Unauthorized reproduction, scraping, or commercial publication is strictly prohibited.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                6. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms and all commercial transactions originating from this website shall be governed by and construed in accordance with the laws of India. Any legal dispute or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-[var(--color-text-primary)]">Mumbai, Maharashtra, India</strong>.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                7. Contact for Commercial Enquiries
              </h2>
              <p className="mb-4">
                For contract clarifications, formal line sheets, or agency representation queries:
              </p>
              <div className="p-6 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] space-y-2 text-sm">
                <p><strong className="text-[var(--color-text-primary)]">Company:</strong> Silverline Fashion Fabrics Ltd. (Linen Mantra)</p>
                <p><strong className="text-[var(--color-text-primary)]">Offices:</strong> Lower Parel (West) & Kalbadevi, Mumbai, India</p>
                <p><strong className="text-[var(--color-text-primary)]">Email:</strong> <a href="mailto:info@linenmantra.com" className="underline text-[var(--color-accent)]">info@linenmantra.com</a></p>
                <p><strong className="text-[var(--color-text-primary)]">Direct:</strong> <a href="tel:+912245005662" className="underline text-[var(--color-text-primary)]">+91 22 4500 5662</a></p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] hover:opacity-75 transition-opacity">
              ← Return to Home
            </Link>
            <Link href="/privacy-policy" className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">
              View Privacy Policy →
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
