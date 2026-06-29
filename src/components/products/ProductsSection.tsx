"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { products, type ProductCategory } from "@/data/products";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

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
        className="w-full section-py"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="container-site">

          {/* Result count */}
          <FadeInOnScroll direction="up">
            <p
              className="text-sm mb-10"
              style={{ color: "var(--color-text-muted)" }}
            >
              Showing{" "}
              <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "quality" : "qualities"}
              {activeCategory !== "all" && (
                <>
                  {" "}in{" "}
                  <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
          </FadeInOnScroll>

          {/* Animated grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state (shouldn't happen with current data but safe fallback) */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p
                className="font-display font-normal text-3xl mb-4"
                style={{ color: "var(--color-text-secondary)" }}
              >
                No fabrics found
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Try a different category or{" "}
                <button
                  onClick={() => setActiveCategory("all")}
                  className="underline cursor-pointer"
                  style={{ color: "var(--color-accent)" }}
                >
                  view all collections
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
