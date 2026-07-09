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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initial = category === "shirting" || category === "suiting" || category === "gift" ? category : "all";

  return (
    <>
      {/* Page hero */}
      <PageHero
        label="Premium Linen Fabric Qualities"
        heading="Our Collections"
        subText="A curated range of signature linen fabrics — crafted across the full count spectrum for brands, designers, and garment manufacturers worldwide."
        lightImage
        image="/images/products/poductherobanner.png"
      />

      {/* Filter tabs + animated product grid */}
      <ProductsSection initialCategory={initial} />

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
