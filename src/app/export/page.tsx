import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ExportRegions from "@/components/export/ExportRegions";
import ExportStrengths from "@/components/export/ExportStrengths";
import WhyGlobalBuyers from "@/components/export/WhyGlobalBuyers";
import ContactCTABand from "@/components/shared/ContactCTABand";

export const metadata: Metadata = {
  title: "Export",
  description:
    "Linen Mantra supplies premium linen fabrics to brands and garment manufacturers across 14+ countries — UK, Europe, USA, UAE, Japan, Australia, and more. B2B export inquiries welcome.",
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        label="Global Export"
        heading="Trusted by Brands Across 14+ Countries"
        subText="We partner with garment manufacturers, fashion labels, and designers worldwide — delivering premium linen fabrics with the reliability that global production demands."
        image="/images/Export/exportpageherobanner.png"
      />

      {/* Stats + world map + country listing */}
      <ExportRegions />

      {/* 6-strength capability grid */}
      <ExportStrengths />

      {/* Why global buyers choose us */}
      <WhyGlobalBuyers />

      {/* Contact band */}
      <ContactCTABand
        heading="Ready to Source Premium Linen?"
        subText="Whether you're placing your first order or scaling an existing line, our team is ready to discuss specifications, sampling, and pricing."
        ctaLabel="Send Export Enquiry"
        ctaHref="/contact"
        dark
      />
    </>
  );
}
