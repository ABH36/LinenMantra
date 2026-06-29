import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import ExpertiseStrip from "@/components/home/ExpertiseStrip";
import FeaturedQualities from "@/components/home/FeaturedQualities";
import FlaxToFabric from "@/components/home/FlaxToFabric";
import LinenSpecialists from "@/components/home/LinenSpecialists";
import ExportTeaser from "@/components/home/ExportTeaser";
import ContactCTABand from "@/components/shared/ContactCTABand";

export const metadata: Metadata = {
  title: "Linen Mantra — Premium Linen Fabric Manufacturer",
  description:
    "India's leading manufacturer of premium linen and linen blend fabrics. 25+ years of textile expertise. Serving fashion brands, designers, garment manufacturers, and export markets worldwide.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ExpertiseStrip />
      <FeaturedQualities />
      <FlaxToFabric />
      <LinenSpecialists />
      <ExportTeaser />
      <ContactCTABand />
    </>
  );
}
