import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col h-full"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* ── Product image ─────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
          className="absolute top-4 left-4 text-label px-3 py-1.5 capitalize"
          style={{
            backgroundColor: "rgba(28,28,26,0.55)",
            color: "rgba(248,245,240,0.9)",
            backdropFilter: "blur(6px)",
          }}
        >
          {product.category}
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
      </div>

      {/* ── Card body ─────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Quality name */}
        <h3
          className="font-display font-normal leading-tight mb-2"
          style={{
            fontSize: "var(--text-h3)",
            color: "var(--color-text-primary)",
          }}
        >
          {product.name}
        </h3>

        {/* Composition label */}
        <p
          className="text-label mb-5"
          style={{ color: "var(--color-accent)" }}
        >
          {product.composition}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {product.description}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group/link"
          style={{ color: "var(--color-text-primary)" }}
        >
          <span>Send Enquiry</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Accent bottom line — slides in on hover */}
      <div
        className="h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </motion.article>
  );
}
