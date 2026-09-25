import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedQualities from "@/components/home/FeaturedQualities";
import PremiumStrip from "@/components/home/PremiumStrip";
import NewsletterStrip from "@/components/home/NewsletterStrip";
import JsonLd from "@/components/shared/JsonLd";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

// Below-fold "use client" components — code-split to reduce initial JS parse
const ArtAndScience   = dynamic(() => import("@/components/home/ArtAndScience"));
const FlaxToFabric    = dynamic(() => import("@/components/home/FlaxToFabric"));
const LinenSpecialists = dynamic(() => import("@/components/home/LinenSpecialists"));

const TITLE = "Linen Fabric Manufacturer & Exporter in India | Linen Mantra";
const DESCRIPTION =
  "Linen Mantra is a linen fabric manufacturer and exporter in India, supplying premium linen and linen blend fabrics to fashion brands, garment manufacturers and global textile buyers.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    socialDescription:
      "Premium linen and linen blend fabrics from an Indian manufacturer and exporter serving global textile buyers.",
    path: "/",
    image: "/linen-logo-og.png",
    imageAlt: "Linen Mantra — Premium Linen Fabric Manufacturer & Exporter in India",
  }),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/" })} />
      <HeroBanner />
      <ArtAndScience />
      <FeaturedQualities />
      <PremiumStrip />
      <FlaxToFabric />
      <LinenSpecialists />
      <NewsletterStrip />
    </>
  );
}
