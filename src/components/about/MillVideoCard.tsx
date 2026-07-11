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
      style={{ aspectRatio: "3/4", backgroundColor: "var(--color-bg-dark)" }}
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
          className="h-[140px] md:h-[200px] w-auto transition-all duration-300"
          style={{
            filter: "brightness(0) invert(1)",
            opacity: 0.85,
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
        <source src="/images/about/A_cinematic_slow_motion_docum.mp4" type="video/mp4" />
      </video>

    </div>
  );
}
