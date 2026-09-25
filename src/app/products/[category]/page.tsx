import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ProductsSection from "@/components/products/ProductsSection";
import CustomDevelopmentStrip from "@/components/products/CustomDevelopmentStrip";
import ContactCTABand from "@/components/shared/ContactCTABand";
import JsonLd from "@/components/shared/JsonLd";
import { CLD } from "@/lib/cloudinary";
import { SITE_URL, pageMetadata, webPageJsonLd } from "@/lib/seo";
import {
  categoryHref,
  categoryLabel,
  categorySeo,
  isProductCategory,
  productCategories,
  productHref,
  productsByCategory,
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
    ...pageMetadata({
      title: `${title} | Linen Mantra`,
      description,
      path: categoryHref(category),
      imageAlt: title,
    }),
  };
}

export default async function ProductsPage({
  params,
}: PageProps<"/products/[category]">) {
  const { category } = await params;
  if (!isProductCategory(category)) notFound();

  const seo = categorySeo[category];
  const path = categoryHref(category);
  const trail =
    category === "all"
      ? [{ name: "Products", path }]
      : [
          { name: "Products", path: categoryHref("all") },
          { name: `${categoryLabel(category)} Fabrics`, path },
        ];
  const itemList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}${path}#products`,
    name: seo.heading,
    itemListElement: productsByCategory(category)
      .filter((p) => p.category !== "all")
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}${productHref(p)}`,
      })),
  };

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          name: `${seo.title} | Linen Mantra`,
          description: seo.description,
          path,
          breadcrumb: trail,
          extra: [itemList],
        })}
      />

      {/* Page hero */}
      <PageHero
        label="Premium Linen Fabric Qualities"
        heading={seo.heading}
        subText={seo.subText}
        lightImage
        image={CLD.products.productHeroBanner}
        imageAlt="Folded pure linen fabrics in ecru, mustard and olive with a Linen Mantra tag and a cone of linen yarn"
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
