import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GlobalMapSection from "@/components/export/GlobalMapSection";
import ExportFeatures from "@/components/export/ExportFeatures";
import JsonLd from "@/components/shared/JsonLd";
import { CLD } from "@/lib/cloudinary";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "Linen Fabric Exporter From India | Linen Mantra";
const DESCRIPTION =
  "Linen shirting and suiting fabric supplied to buyers in 14+ countries. Export documentation, flexible MOQ, and worldwide delivery.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/export", imageAlt: "Linen fabric exporter from India" }),
};

export default function ExportPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/export",
          breadcrumb: [{ name: "Export", path: "/export" }],
        })}
      />
      <PageHero
        label="Trusted by Brands Across 14+ Countries"
        heading="Global Export"
        subText="India's trusted B2B source for premium apparel linen — shirting, suiting, and linen blend fabrics supplied to fashion labels and garment manufacturers across 14+ countries."
        lightImage
        image={CLD.export.heroBanner}
        imageAlt="Export-ready linen fabrics in ecru, mustard and olive with a Linen Mantra tag over a faint world map"
      />

      {/* 7 export feature cards — 3-3-1 layout */}
      <ExportFeatures />

      {/* Global map */}
      <GlobalMapSection />

    </>
  );
}
