"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import ProductLightbox from "./ProductLightbox";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { products, type ProductCategory } from "@/data/products";

export default function ProductsSection({ initialCategory = "all" }: { initialCategory?: ProductCategory }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory);
  const [lightboxIdx, setLightboxIdx]       = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      {/* ── Filter tabs ────────────────────────────────── */}
      <ProductFilter active={activeCategory} onChange={setActiveCategory} />

      {/* ── Product grid ───────────────────────────────── */}
      <section
        className="w-full section-py relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-bg-dark)",
          backgroundImage: "url('/images/about/footer/fabric.png')",
          backgroundSize: "400px auto",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container-site">

          {/* Result count */}
          <FadeInOnScroll direction="up">
            <p className="text-sm mb-8 text-[var(--color-text-light)] opacity-55">
              Showing{" "}
              <span className="opacity-100 font-medium text-[var(--color-text-light)]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "quality" : "qualities"}
              {activeCategory !== "all" && (
                <>
                  {" "}in{" "}
                  <span className="font-medium text-[var(--color-accent)]">
                    {activeCategory}
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
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onImageClick={() => setLightboxIdx(i)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display font-normal text-3xl mb-4 text-[var(--color-text-light)]">
                No fabrics found
              </p>
              <p className="text-sm text-[var(--color-text-light)] opacity-50">
                Try a different category or{" "}
                <button
                  onClick={() => setActiveCategory("all")}
                  className="underline cursor-pointer text-[var(--color-accent)]"
                >
                  view all collections
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ───────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <ProductLightbox
            products={filtered}
            startIndex={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
