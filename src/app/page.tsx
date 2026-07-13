import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedQualities from "@/components/home/FeaturedQualities";
import PremiumStrip from "@/components/home/PremiumStrip";
import NewsletterStrip from "@/components/home/NewsletterStrip";

// Below-fold "use client" components — code-split to reduce initial JS parse
const ArtAndScience   = dynamic(() => import("@/components/home/ArtAndScience"));
const FlaxToFabric    = dynamic(() => import("@/components/home/FlaxToFabric"));
const LinenSpecialists = dynamic(() => import("@/components/home/LinenSpecialists"));

export const metadata: Metadata = {
  title: "Linen Mantra — Premium Linen Fabric Manufacturer",
  description:
    "India's leading manufacturer of premium linen and linen blend fabrics. 35+ years of textile expertise. Serving fashion brands, designers, garment manufacturers, and export markets worldwide.",
};

export default function HomePage() {
  return (
    <>
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
