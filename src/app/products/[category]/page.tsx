import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ProductsSection from "@/components/products/ProductsSection";
import CustomDevelopmentStrip from "@/components/products/CustomDevelopmentStrip";
import ContactCTABand from "@/components/shared/ContactCTABand";
import { CLD } from "@/lib/cloudinary";
import {
  categorySeo,
  isProductCategory,
  productCategories,
} from "@/data/products";

// One static page per filter — /products/all, /products/shirting, …
export function generateStaticParams() {
  return productCategories.map(({ value }) => ({ category: value }));
}

// Any other segment (e.g. /products/foo) 404s instead of rendering.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/products/[category]">): Promise<Metadata> {
  const { category } = await params;
  if (!isProductCategory(category)) return {};

  const { title, description } = categorySeo[category];
  return {
    title,
    description,
    alternates: { canonical: `/products/${category}` },
  };
}

export default async function ProductsPage({
  params,
}: PageProps<"/products/[category]">) {
  const { category } = await params;
  if (!isProductCategory(category)) notFound();

  return (
    <>
      {/* Page hero */}
      <PageHero
        label="Premium Linen Fabric Qualities"
        heading="Our Collections"
        subText="A curated range of signature linen fabrics — crafted across the full count spectrum for brands, designers, and garment manufacturers worldwide."
        lightImage
        image={CLD.products.productHeroBanner}
      />

      {/* Filter tabs + animated product grid */}
      <ProductsSection activeCategory={category} />

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
