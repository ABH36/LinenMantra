import type { NextConfig } from "next";

// ── LM-003: Content Security Policy ───────────────────────
// 'unsafe-inline' required for Next.js hydration scripts and Tailwind inline styles.
// Cloudinary CDN whitelisted for images/video. Google Maps whitelisted for embed iframe.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self' https://res.cloudinary.com",
  "frame-src https://maps.google.com https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains, submit to preload list
  { key: "Strict-Transport-Security",  value: "max-age=63072000; includeSubDomains; preload" },
  // Prevent clickjacking — page cannot be embedded in any iframe
  { key: "X-Frame-Options",            value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options",     value: "nosniff" },
  // Limit referrer info sent to external domains
  { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
  // Disable unused browser features
  { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
  // Enable DNS prefetch for performance
  { key: "X-DNS-Prefetch-Control",     value: "on" },
  // Content Security Policy
  { key: "Content-Security-Policy",    value: CSP },
];

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [412, 512, 640, 750, 828, 1080, 1200, 1920, 2048],
  },

  // ── LM-003: Apply security headers to all routes ─────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
