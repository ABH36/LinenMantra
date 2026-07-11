"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import ProductLightbox from "@/components/products/ProductLightbox";
import { featuredProducts } from "@/data/products";

export default function FeaturedQualities() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-8 lg:py-12 bg-[var(--color-bg-secondary)]">
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <FadeInOnScroll direction="up">
            <div>
              <span className="text-label block mb-1 text-[var(--color-accent)]">
                Our Collections
              </span>
              <h2
                className="font-display font-normal leading-tight text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                Featured Fabric Qualities
              </h2>
              <AccentDivider className="mt-1" />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.1} className="shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group text-[var(--color-text-secondary)]"
            >
              <span>View All Products</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeInOnScroll>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProducts.map((product, i) => (
            <FadeInOnScroll key={product.id} direction="up" delay={i * 0.12}>
              <article className="group flex flex-col h-full bg-white border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow duration-500">

                {/* Clickable image */}
                <div
                  className="relative w-full overflow-hidden aspect-[5/3] cursor-pointer"
                  onClick={() => setLightboxIdx(i)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top gradient for badge */}
                  <div
                    className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, transparent 100%)" }}
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-3.5 left-3.5 text-label px-2.5 py-1 capitalize"
                    style={{
                      backgroundColor: "rgba(28,28,26,0.52)",
                      color: "rgba(248,245,240,0.92)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {product.category}
                  </span>
                  {/* Zoom overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: "rgba(0,0,0,0.20)" }}
                  >
                    <div
                      className="flex items-center gap-2 px-4 py-2.5"
                      style={{ backgroundColor: "rgba(10,10,8,0.58)", backdropFilter: "blur(6px)" }}
                    >
                      <ZoomIn size={14} style={{ color: "rgba(248,245,240,0.9)" }} />
                      <span className="text-label" style={{ color: "rgba(248,245,240,0.9)", letterSpacing: "0.1em" }}>
                        View
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display font-normal mb-1.5 text-2xl md:text-3xl text-[var(--color-text-primary)]">
                    {product.name}
                  </h3>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-70 group/link mt-auto text-[var(--color-text-primary)]"
                  >
                    <span>Get a Quote</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Bottom accent line on hover */}
                <div className="h-px w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-accent)]" />
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <ProductLightbox
            products={featuredProducts}
            startIndex={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
