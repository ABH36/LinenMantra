"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MillVideoCard() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShowVideo(true), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "3/4", backgroundColor: "#111110" }}
    >
      {/* Logo — shown for first 2 seconds */}
      <div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{
          opacity: showVideo ? 0 : 1,
          transition: "opacity 0.9s ease",
        }}
      >
        <Image
          src="/images/logo/logo.png"
          alt="Linen Mantra"
          width={1536}
          height={1024}
          priority
          style={{
            width: "auto",
            height: "52px",
            filter: "brightness(0) invert(1)",
            opacity: 0.75,
          }}
        />
      </div>

      {/* Mill video — fades in after logo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: showVideo ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        <source src="/images/about/milltop.mp4" type="video/mp4" />
      </video>

      {/* Bottom label — always visible */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 z-10"
        style={{
          background: "linear-gradient(to top, rgba(28,28,26,0.82) 0%, transparent 100%)",
        }}
      >
        <p className="text-label" style={{ color: "rgba(248,245,240,0.7)" }}>
          Manufacturing · Navsari, Gujarat
        </p>
      </div>
    </div>
  );
}
