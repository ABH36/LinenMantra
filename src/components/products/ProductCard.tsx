"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categoryLabel, productHref, productImageAlt, type Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col h-full bg-white border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* ── Product image ─────────────────────────── */}
      <Link href={productHref(product)} className="relative block overflow-hidden aspect-[5/3]" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.image}
          alt={productImageAlt(product)}
          width={600}
          height={360}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top gradient for badge readability */}
        <div
          className="absolute inset-x-0 top-0 h-20 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)",
          }}
        />

        {/* Category badge */}
        <span
          className="absolute top-4 left-4 text-label px-3 py-1.5"
          style={{
            backgroundColor: "rgba(28,28,26,0.55)",
            color: "rgba(248,245,240,0.9)",
            backdropFilter: "blur(6px)",
          }}
        >
          {categoryLabel(product.category)}
        </span>

        {/* LEA badge — top right */}
        {product.leaRange && (
          <span
            className="absolute top-4 right-4 text-label px-3 py-1.5"
            style={{
              backgroundColor: "rgba(28,28,26,0.55)",
              color: "rgba(248,245,240,0.9)",
              backdropFilter: "blur(6px)",
            }}
          >
            {product.leaRange}
          </span>
        )}
      </Link>

      {/* ── Card body ─────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <Link href={productHref(product)} className="block group/name">
          <h2 className="font-display font-normal leading-tight text-xl md:text-2xl text-[var(--color-text-primary)] group-hover/name:text-[var(--color-accent)] transition-colors">
            {product.name}
          </h2>
          {product.composition && (
            <p className="text-label mt-0.5 text-[var(--color-accent)]">{product.composition}</p>
          )}
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}#enquiry`}
          className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 group/link shrink-0 text-[var(--color-text-primary)]"
        >
          <span>Get a Quote</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>

      {/* Accent bottom line — slides in on hover */}
      <div className="h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[var(--color-accent)]" />
    </motion.article>
  );
}
