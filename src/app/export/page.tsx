import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GlobalMapSection from "@/components/export/GlobalMapSection";
import ExportFeatures from "@/components/export/ExportFeatures";

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

      {/* Global map with stats */}
      <GlobalMapSection />

      {/* 7 export feature cards — 3-3-1 layout */}
      <ExportFeatures />

    </>
  );
}
