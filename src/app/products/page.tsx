import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProductsSection from "@/components/products/ProductsSection";
import CustomDevelopmentStrip from "@/components/products/CustomDevelopmentStrip";
import ContactCTABand from "@/components/shared/ContactCTABand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Linen Mantra's premium linen fabric collections — 100% pure linen, linen blends, shirting, suiting, and designer fabrics ranging from 25 to 150 LEA. Custom development available.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page hero */}
      <PageHero
        label="Our Collections"
        heading="Premium Linen Fabric Qualities"
        subText="A curated range of signature linen fabrics — crafted across the full count spectrum for brands, designers, and garment manufacturers worldwide."
        image="/images/products/productpageherobanner.png"
      />

      {/* Filter tabs + animated product grid */}
      <ProductsSection />

      {/* Custom development CTA */}
      <CustomDevelopmentStrip />

      {/* Contact CTA band */}
      <ContactCTABand
        heading="Interested in Our Fabrics?"
        subText="Send us an enquiry and our team will get back to you with detailed specifications, pricing, and sampling options."
        ctaLabel="Get a Quote"
      />
    </>
  );
}
