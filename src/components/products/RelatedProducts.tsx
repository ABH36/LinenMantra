import Link from "next/link";
import ProductCard from "./ProductCard";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import { categoryHref, categoryLabel, relatedProducts, type Product } from "@/data/products";

/** "Related Fabrics" strip on a product detail page — contextual links to sibling qualities. */
export default function RelatedProducts({ product }: { product: Product }) {
  const related = relatedProducts(product);
  if (related.length === 0) return null;

  return (
    <section className="w-full py-8 lg:py-12 bg-[var(--color-bg-secondary)]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <FadeInOnScroll direction="up">
            <div>
              <span className="text-label block mb-1 text-[var(--color-accent)]">
                You May Also Like
              </span>
              <h2
                className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                Related Linen Fabrics
              </h2>
              <AccentDivider className="mt-1" />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.1} className="shrink-0">
            <Link
              href={categoryHref(product.category)}
              className="inline-flex items-center gap-2 py-1 -my-1 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group text-[var(--color-text-secondary)]"
            >
              <span>All {categoryLabel(product.category)} Fabrics</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
