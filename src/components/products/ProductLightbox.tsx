"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
  startIndex: number;
  onClose: () => void;
};

export default function ProductLightbox({ products, startIndex, onClose }: Props) {
  const [idx, setIdx]     = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + products.length) % products.length);
    setZoomed(false);
  }, [products.length]);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % products.length);
    setZoomed(false);
  }, [products.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const product = products[idx];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10,10,8,0.94)" }}
        onClick={onClose}
      />

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-20 p-2 transition-colors text-white/60 hover:text-[var(--color-accent)]"
      >
        <X size={26} />
      </button>

      {/* Prev arrow */}
      {products.length > 1 && (
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 md:left-6 z-20 p-3 transition-colors text-white/60 hover:text-[var(--color-accent)]"
        >
          <ChevronLeft size={42} strokeWidth={1.4} />
        </button>
      )}

      {/* Next arrow */}
      {products.length > 1 && (
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 md:right-6 z-20 p-3 transition-colors text-white/60 hover:text-[var(--color-accent)]"
        >
          <ChevronRight size={42} strokeWidth={1.4} />
        </button>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-12 md:mx-20">

        {/* Image panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative w-full overflow-hidden"
            style={{
              height: "min(66vh, 580px)",
              cursor: zoomed ? "zoom-out" : "zoom-in",
            }}
            onClick={() => setZoomed((z) => !z)}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="90vw"
              className="object-contain transition-transform duration-300"
              style={{ transform: zoomed ? "scale(1.9)" : "scale(1)" }}
            />

            {/* Zoom hint */}
            <span
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs select-none"
              style={{ backgroundColor: "rgba(0,0,0,0.50)", color: "rgba(255,255,255,0.70)" }}
            >
              {zoomed ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
              {zoomed ? "Zoom out" : "Zoom in"}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Product info */}
        <div className="mt-5 text-center select-none">
          <p className="font-display font-normal text-white" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)" }}>
            {product.name}
          </p>
          {(product.composition || product.leaRange) && (
            <p className="text-sm mt-1 text-[var(--color-accent)]">
              {product.composition}
              {product.composition && product.leaRange ? " · " : ""}
              {product.leaRange}
            </p>
          )}
        </div>

        {/* Dot indicators */}
        {products.length > 1 && (
          <div className="flex items-center gap-2 mt-5">
            {products.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setIdx(i); setZoomed(false); }}
                className="p-1 flex items-center"
              >
                <span
                  className="block h-2 rounded-full transition-all duration-300"
                  style={{
                    width:           i === idx ? "22px" : "8px",
                    backgroundColor: i === idx ? "var(--color-accent)" : "rgba(255,255,255,0.30)",
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
