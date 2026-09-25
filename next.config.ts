import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ── LM-003: Content Security Policy ───────────────────────
// 'unsafe-inline' required for Next.js hydration scripts and Tailwind inline styles.
// 'unsafe-eval' added in dev only — React needs eval() for error stack reconstruction.
// Cloudinary CDN whitelisted for images/video. Google Maps whitelisted for embed iframe.
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self'",
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com${isDev ? " ws: wss:" : ""}`,
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

  // ── Permanent 301 redirects for legacy URLs and single-hop routes ──
  async redirects() {
    return [
      { source: "/index.:ext(php|html)", destination: "/", permanent: true },
      { source: "/:p(about-us.php|aboutus.html|infrastructure.php)", destination: "/about", permanent: true },
      { source: "/:p(contact-us.php|contactus.html|enquiry.php|enquiry.html)", destination: "/contact", permanent: true },
      { source: "/products.html", destination: "/products/all", permanent: true },
      { source: "/:p(regular-shirting.php|linen-new-arrival-shirting.php)", destination: "/products/shirting", permanent: true },
      { source: "/linen-regular-suiting.php", destination: "/products/suiting", permanent: true },
      { source: "/gift-packing.php", destination: "/products/gift-packing", permanent: true },
      { source: "/products", destination: "/products/all", permanent: true },
    ];
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
