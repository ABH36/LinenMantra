import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import ExpertiseStrip from "@/components/home/ExpertiseStrip";
import ArtAndScience from "@/components/home/ArtAndScience";
import OurServices from "@/components/home/OurServices";
import FeaturedQualities from "@/components/home/FeaturedQualities";
import PremiumStrip from "@/components/home/PremiumStrip";
import FlaxToFabric from "@/components/home/FlaxToFabric";
import LinenSpecialists from "@/components/home/LinenSpecialists";
import NewsletterStrip from "@/components/home/NewsletterStrip";

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
      <ArtAndScience />
      <OurServices />
      <FeaturedQualities />
      <PremiumStrip />
      <FlaxToFabric />
      <LinenSpecialists />
      <NewsletterStrip />
    </>
  );
}
