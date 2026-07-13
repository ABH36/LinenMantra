import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GlobalMapSection from "@/components/export/GlobalMapSection";
import ExportFeatures from "@/components/export/ExportFeatures";
import { CLD } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Export",
  description:
    "Linen Mantra supplies premium linen fabrics to brands and garment manufacturers across 14+ countries — UK, Europe, USA, UAE, Japan, Australia, and more. B2B export inquiries welcome.",
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        label="Trusted by Brands Across 14+ Countries"
        heading="Global Export"
        subText="India's trusted B2B source for premium apparel linen — shirting, suiting, and linen blend fabrics supplied to fashion labels and garment manufacturers across 14+ countries."
        lightImage
        image={CLD.export.heroBanner}
      />

      {/* 7 export feature cards — 3-3-1 layout */}
      <ExportFeatures />

      {/* Global map */}
      <GlobalMapSection />

    </>
  );
}
