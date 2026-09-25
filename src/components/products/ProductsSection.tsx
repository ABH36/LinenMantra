"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import CategoryGuideSection from "./CategoryGuideSection";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import {
  categoryGuide,
  categoryHref,
  categoryLabel,
  productsByCategory,
  type ProductCategory,
} from "@/data/products";
import { CLD } from "@/lib/cloudinary";


export default function ProductsSection({
  activeCategory,
}: {
  activeCategory: ProductCategory;
}) {
  // The URL segment is the single source of truth for the active filter.
  const filtered = productsByCategory(activeCategory);
  // categoryGuide only has keys for shirting/suiting/gift-packing, not "all"
  const guide = activeCategory !== "all"
    ? categoryGuide[activeCategory as Exclude<ProductCategory, "all">]
    : null;

  return (
    <>
      {/* ── Filter tabs ────────────────────────────────── */}
      <ProductFilter active={activeCategory} />

      {/* ── Product grid ───────────────────────────────── */}
      <section
        className="w-full py-8 lg:py-10 relative overflow-hidden"
        style={{
          backgroundImage: `url('${CLD.about.fabric}')`,
          backgroundSize: "400px auto",
          backgroundRepeat: "repeat",
          backgroundColor: "var(--color-bg-secondary)",
        }}
      >
        <div className="container-site">

          {/* Result count */}
          <FadeInOnScroll direction="up">
            <p className="text-sm mb-5 text-[var(--color-text-muted)]">
              Showing{" "}
              <span className="font-medium text-[var(--color-text-primary)]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "quality" : "qualities"}
              {activeCategory !== "all" && (
                <>
                  {" "}in{" "}
                  <span className="font-medium text-[var(--color-accent)]">
                    {categoryLabel(activeCategory)}
                  </span>
                </>
              )}
            </p>
          </FadeInOnScroll>

          {/* Animated grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-display font-normal text-3xl mb-4 text-[var(--color-text-secondary)]">
                No fabrics found
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Try a different category or{" "}
                <Link
                  href={categoryHref("all")}
                  scroll={false}
                  className="underline cursor-pointer text-[var(--color-accent)]"
                >
                  view all collections
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Buying guide + FAQ ──────────────────────────────── */}
      {guide && (
        <CategoryGuideSection
          category={categoryLabel(activeCategory)}
          guide={guide.guide}
          faqs={guide.faqs}
        />
      )}

    </>
  );
}
