import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import JsonLd from "@/components/shared/JsonLd";
import { CLD } from "@/lib/cloudinary";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "Privacy Policy | Linen Mantra";
const DESCRIPTION =
  "Privacy Policy of Linen Mantra (Silverline Fashion Fabrics Ltd.). Learn how we handle B2B enquiries, sample requests, and protect your commercial data under DPDP Act 2023.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/privacy-policy", imageAlt: "Privacy Policy" }),
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 24, 2026";

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/privacy-policy",
          breadcrumb: [{ name: "Privacy Policy", path: "/privacy-policy" }],
        })}
      />
      <PageHero
        label="Legal & Transparency"
        heading="Privacy Policy"
        subText="How Linen Mantra (Silverline Fashion Fabrics Ltd.) collects, protects, and manages your personal and business information."
        lightImage
        image={CLD.products.productHeroBanner}
        imageAlt="Folded linen fabrics with a Linen Mantra tag and a cone of linen yarn"
      />

      <article className="w-full py-14 lg:py-20 bg-[var(--color-bg-primary)]">
        <div className="container-site max-w-4xl mx-auto px-6">

          <div className="flex flex-wrap items-center justify-between pb-6 mb-10 border-b border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
            <p>Effective Date: <span className="font-semibold text-[var(--color-text-primary)]">{lastUpdated}</span></p>
            <p>Governing Law: <span className="font-semibold text-[var(--color-text-primary)]">India (DPDP Act, 2023)</span></p>
          </div>

          <div className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                1. About Us & Scope
              </h2>
              <p className="mb-4">
                This Privacy Policy applies to the website <strong className="text-[var(--color-text-primary)]">linenmantra.com</strong>, operated by <strong className="text-[var(--color-text-primary)]">Silverline Fashion Fabrics Ltd.</strong> under the brand name <strong className="text-[var(--color-text-primary)]">Linen Mantra</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are a B2B manufacturer and exporter of pure linen and linen-blend fabrics, with offices in Mumbai and manufacturing facilities in Navsari, Gujarat, India.
              </p>
              <p>
                We respect your business privacy and are committed to protecting the commercial and personal data you share when requesting fabric swatches, pricing quotations, export catalogues, or custom weaving development.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">When you interact with our website or submit an enquiry, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[var(--color-text-primary)]">Contact Details:</strong> Your full name, business email address, direct phone / WhatsApp number, and company / brand name.</li>
                <li><strong className="text-[var(--color-text-primary)]">Sourcing Requirements:</strong> Fabric type (shirting, suiting, blends, etc.), yarn count (LEA), quantity specifications, target delivery markets, and custom sampling requirements.</li>
                <li><strong className="text-[var(--color-text-primary)]">Technical & Log Data:</strong> IP address, browser type, device information, and interaction data via server logs to prevent spam and verify secure transmission.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                3. Purpose of Processing Your Information
              </h2>
              <p className="mb-4">We collect and use your data strictly for legitimate commercial and transactional purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To evaluate, respond to, and fulfill fabric sampling or pricing enquiries.</li>
                <li>To coordinate export shipping, logistics, and documentation (e.g., Certificates of Origin, commercial invoices).</li>
                <li>To communicate relevant product catalogue updates, seasonal collections, or technical specification sheets.</li>
                <li>To safeguard our platform against spam, abusive submissions, or fraudulent trade activity.</li>
              </ul>
              <p className="mt-4 font-medium text-[var(--color-text-primary)]">
                We do not sell, rent, or trade your personal or business information to third-party advertisers or data brokers under any circumstances.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                4. Data Protection & International Transfer
              </h2>
              <p className="mb-4">
                As an international fabric exporter serving clients across 14+ countries (including the EU, UK, USA, UAE, and APAC), we comply with applicable cross-border data transfer safeguards and the Digital Personal Data Protection Act, 2023 (India).
              </p>
              <p>
                Your data is stored on secure servers with encrypted transit protocols (TLS 1.3 / HTTPS). Third-party infrastructure partners (such as Cloudinary for media delivery and secure email gateways for quote dispatch) adhere to industry-standard data security benchmarks.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                5. Your Data Rights
              </h2>
              <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[var(--color-text-primary)]">Access & Rectification:</strong> Request a summary of the personal information we hold or correct inaccurate contact details.</li>
                <li><strong className="text-[var(--color-text-primary)]">Erasure:</strong> Request the deletion of your enquiry data when your commercial relationship with us concludes.</li>
                <li><strong className="text-[var(--color-text-primary)]">Opt-out:</strong> Withdraw consent for ongoing catalogue updates or seasonal newsletters at any time.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                6. Contact & Grievance Redressal
              </h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our grievance officer:
              </p>
              <div className="p-6 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] space-y-2 text-sm">
                <p><strong className="text-[var(--color-text-primary)]">Entity:</strong> Silverline Fashion Fabrics Ltd. (Linen Mantra)</p>
                <p><strong className="text-[var(--color-text-primary)]">Address:</strong> A-111, Kewal Industrial Estate, Lower Parel (West), Mumbai — 400013, Maharashtra, India</p>
                <p><strong className="text-[var(--color-text-primary)]">Email:</strong> <a href="mailto:info@linenmantra.com" className="underline text-[var(--color-accent)]">info@linenmantra.com</a></p>
                <p><strong className="text-[var(--color-text-primary)]">Phone:</strong> <a href="tel:+912245005662" className="underline text-[var(--color-text-primary)]">+91 22 4500 5662</a></p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] hover:opacity-75 transition-opacity">
              ← Return to Home
            </Link>
            <Link href="/terms" className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">
              View Terms of Service →
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
