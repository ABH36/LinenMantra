import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ContactCTABand from "@/components/shared/ContactCTABand";
import RelatedProducts from "@/components/products/RelatedProducts";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import JsonLd from "@/components/shared/JsonLd";
import {
  products,
  getProductBySlug,
  categoryLabel,
  categoryHref,
  isProductCategory,
  productHref,
  type Product,
} from "@/data/products";
import { SITE_URL, cloudinaryOgImage, pageMetadata, webPageJsonLd } from "@/lib/seo";

/** Shared by generateMetadata and the page JSON-LD so both always agree. */
function productSeo(product: Product) {
  const catLabel = categoryLabel(product.category);
  const title = `${product.name} — ${product.leaRange ? product.leaRange + " " : ""}${catLabel} Linen Fabric`;
  // Keep within ~155 chars so Google shows it without truncation.
  const withCta = `${product.description} Request swatches from Linen Mantra.`;
  const description =
    withCta.length <= 158 ? withCta : `${product.description.replace(/\.$/, "")} — Linen Mantra.`;
  return { title, description };
}

export function generateStaticParams() {
  return products
    .filter((p) => p.category !== "all")
    .map((p) => ({ category: p.category, slug: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/products/[category]/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const { title, description } = productSeo(product);
  return {
    title,
    ...pageMetadata({
      title: `${title} | Linen Mantra`,
      description,
      path: productHref(product),
      image: cloudinaryOgImage(product.image),
      imageAlt: `${product.name} linen fabric — Linen Mantra`,
    }),
  };
}

const specLabels: Record<string, string> = {
  composition: "Composition",
  leaRange: "Yarn Count (LEA)",
  gsm: "Weight (GSM)",
  width: "Width",
  weave: "Weave Type",
  finish: "Finish",
  colorways: "Available Colorways",
  moq: "MOQ",
  leadTime: "Lead Time",
};

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[category]/[slug]">) {
  const { category, slug } = await params;
  if (!isProductCategory(category)) notFound();
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();
  const catLabel = categoryLabel(product.category);
  const pageUrl = `${SITE_URL}${productHref(product)}`;

  const specRows: { label: string; value: string }[] = [];
  if (product.composition)
    specRows.push({ label: specLabels.composition, value: product.composition });
  if (product.leaRange)
    specRows.push({ label: specLabels.leaRange, value: product.leaRange });
  if (product.specs) {
    const s = product.specs;
    if (s.gsm)       specRows.push({ label: specLabels.gsm,       value: s.gsm });
    if (s.width)     specRows.push({ label: specLabels.width,     value: s.width });
    if (s.weave)     specRows.push({ label: specLabels.weave,     value: s.weave });
    if (s.finish)    specRows.push({ label: specLabels.finish,    value: s.finish });
    if (s.colorways) specRows.push({ label: specLabels.colorways, value: s.colorways });
    if (s.moq)       specRows.push({ label: specLabels.moq,       value: s.moq });
    if (s.leadTime)  specRows.push({ label: specLabels.leadTime,  value: s.leadTime });
  }

  const enquiryHref = `/contact?product=${encodeURIComponent(product.name)}#enquiry`;

  // ── Product JSON-LD ───────────────────────────────────────────────────
  const additionalProps: object[] = [];
  if (product.leaRange)
    additionalProps.push({ "@type": "PropertyValue", name: "Yarn Count (LEA)", value: product.leaRange });
  if (product.specs?.gsm)
    additionalProps.push({ "@type": "PropertyValue", name: "Weight (GSM)", value: product.specs.gsm });
  if (product.specs?.width)
    additionalProps.push({ "@type": "PropertyValue", name: "Fabric Width", value: product.specs.width });
  if (product.specs?.weave)
    additionalProps.push({ "@type": "PropertyValue", name: "Weave Type", value: product.specs.weave });
  if (product.specs?.finish)
    additionalProps.push({ "@type": "PropertyValue", name: "Finish", value: product.specs.finish });
  if (product.specs?.moq)
    additionalProps.push({ "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.specs.moq });
  if (product.specs?.leadTime)
    additionalProps.push({ "@type": "PropertyValue", name: "Lead Time", value: product.specs.leadTime });

  const productNode = {
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: `${product.name}${product.leaRange ? " " + product.leaRange : ""} ${catLabel} Linen Fabric`,
    url: pageUrl,
    description: product.description,
    image: [product.image],
    brand: {
      "@type": "Brand",
      name: "Linen Mantra",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: `${catLabel} Linen Fabric`,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    ...(product.composition ? { material: product.composition } : {}),
    ...(additionalProps.length > 0 ? { additionalProperty: additionalProps } : {}),
  };
  const { title, description } = productSeo(product);

  return (
    <>
      {/* WebPage + BreadcrumbList (matches the visible trail below) + Product */}
      <JsonLd
        data={webPageJsonLd({
          name: `${title} | Linen Mantra`,
          description,
          path: productHref(product),
          breadcrumb: [
            { name: `${catLabel} Fabrics`, path: categoryHref(product.category) },
            { name: product.name, path: productHref(product) },
          ],
          extra: [productNode],
        })}
      />

      {/* Breadcrumb */}
      <div
        className="w-full border-b border-[var(--color-border)]"
        style={{ backgroundColor: "var(--color-bg-secondary)", paddingTop: "80px" }}
      >
        <div className="container-site py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-text-muted)]"
          >
            <Link href="/" className="py-1 -my-1 hover:text-[var(--color-text-primary)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={categoryHref(product.category)}
              className="py-1 -my-1 hover:text-[var(--color-text-primary)] transition-colors"
            >
              {catLabel}
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-primary)]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product hero split */}
      <section className="w-full bg-[var(--color-bg-primary)]">
        <div className="container-site py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left: image */}
            <FadeInOnScroll direction="up">
              <div
                className="relative w-full overflow-hidden bg-[var(--color-bg-secondary)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.name}${product.leaRange ? ` ${product.leaRange}` : ""} ${catLabel} linen fabric — Linen Mantra`}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
                <span
                  className="absolute top-4 left-4 text-[0.75rem] tracking-[0.12em] uppercase px-3 py-1.5"
                  style={{
                    backgroundColor: "rgba(28,28,26,0.55)",
                    color: "rgba(248,245,240,0.9)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {catLabel}
                </span>
                {product.leaRange && (
                  <span
                    className="absolute top-4 right-4 text-[0.75rem] tracking-[0.12em] uppercase px-3 py-1.5"
                    style={{
                      backgroundColor: "rgba(28,28,26,0.55)",
                      color: "rgba(248,245,240,0.9)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {product.leaRange}
                  </span>
                )}
              </div>
            </FadeInOnScroll>

            {/* Right: details */}
            <FadeInOnScroll direction="up" delay={0.1}>
              <div className="flex flex-col gap-6">

                <div>
                  <p className="text-[0.75rem] tracking-[0.18em] uppercase mb-3 text-[var(--color-text-muted)]">
                    {catLabel} Collection
                  </p>
                  <h1
                    className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
                    style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
                  >
                    {product.name}
                  </h1>
                  <AccentDivider className="mt-3" />
                  {product.tagline && (
                    <p
                      className="mt-4 font-display italic leading-snug text-[var(--color-text-secondary)]"
                      style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
                    >
                      {product.tagline}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {product.description}
                  </p>
                </div>

                {specRows.length > 0 && (
                  <div>
                    <p className="text-[0.75rem] tracking-[0.18em] uppercase mb-3 text-[var(--color-text-muted)]">
                      Fabric Specifications
                    </p>
                    <table className="w-full text-sm border-collapse">
                      <tbody>
                        {specRows.map(({ label, value }, i) => (
                          <tr
                            key={label}
                            style={{
                              backgroundColor:
                                i % 2 === 0 ? "var(--color-bg-secondary)" : "transparent",
                              borderBottom: "1px solid var(--color-border)",
                            }}
                          >
                            <td
                              className="py-2.5 px-4 text-[0.7rem] tracking-[0.08em] uppercase font-medium"
                              style={{ color: "var(--color-text-muted)", width: "42%" }}
                            >
                              {label}
                            </td>
                            <td
                              className="py-2.5 px-4"
                              style={{ color: "var(--color-text-primary)" }}
                            >
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link
                    href={enquiryHref}
                    id={`cta-swatch-${product.id}`}
                    data-swatch-product={product.name}
                    data-swatch-category={product.category}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80 group"
                    style={{
                      backgroundColor: "var(--color-cta)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    <span>Request Swatches / Quote</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href={categoryHref(product.category)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-widest uppercase border transition-colors hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    ← All {catLabel}
                  </Link>
                </div>

              </div>
            </FadeInOnScroll>

          </div>
        </div>
      </section>

      <RelatedProducts product={product} />

      <ContactCTABand
        heading={`Interested in ${product.name}?`}
        subText="Send us an enquiry and our team will get back to you with detailed specifications, pricing, and sampling options."
        ctaLabel="Get a Quote"
        ctaHref={enquiryHref}
      />
    </>
  );
}
