"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/about/mill1.png",
  "/images/about/mill2.png",
  "/images/about/mill3.png",
  "/images/about/mill4.png",
  "/images/about/mill5.png",
];

const INTERVAL = 3200;

export default function MillImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Linen Mantra weaving mill ${i + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.85s ease",
          }}
          priority={i === 0}
        />
      ))}

      {/* Bottom label */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 z-10"
        style={{
          background: "linear-gradient(to top, rgba(28,28,26,0.85) 0%, transparent 100%)",
        }}
      >
        <p className="text-label" style={{ color: "rgba(248,245,240,0.7)" }}>
          Weaving Mill · Navsari, Gujarat
        </p>
      </div>
    </div>
  );
}
