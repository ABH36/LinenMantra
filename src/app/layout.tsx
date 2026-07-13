import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://linenmantra.com"),
  title: {
    default: "Linen Mantra — Premium Linen Fabric Manufacturer",
    template: "%s | Linen Mantra",
  },
  description:
    "India's leading manufacturer of premium linen and linen blend fabrics. Serving fashion brands, garment manufacturers, designers, and export markets worldwide. 35+ years of textile expertise.",
  keywords: [
    "linen fabric manufacturer",
    "premium linen",
    "linen shirting",
    "linen suiting",
    "linen blends",
    "textile manufacturer India",
    "linen export India",
    "Navsari Gujarat textile",
  ],
  authors: [{ name: "Linen Mantra" }],
  creator: "Linen Mantra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://linenmantra.com",
    siteName: "Linen Mantra",
    title: "Linen Mantra — Premium Linen Fabric Manufacturer",
    description:
      "16+ years of linen manufacturing expertise. Serving global brands, designers, and garment manufacturers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linen Mantra — Premium Linen Fabrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linen Mantra — Premium Linen Fabric Manufacturer",
    description:
      "16+ years of linen manufacturing. Premium shirting, suiting & blends for global brands.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://linenmantra.com/#organization",
      name: "Linen Mantra",
      url: "https://linenmantra.com",
      logo: {
        "@type": "ImageObject",
        url: "https://linenmantra.com/logo.png",
      },
      description:
        "Premium linen and linen blend fabric manufacturer based in India. Serving global fashion brands, garment manufacturers, and designers since 2010.",
      foundingDate: "2010",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Bhiwandi",
        addressRegion: "Maharashtra",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@linenmantra.com",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.instagram.com/linenmantra",
        "https://www.linkedin.com/company/linenmantra",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://linenmantra.com/#website",
      url: "https://linenmantra.com",
      name: "Linen Mantra",
      publisher: { "@id": "https://linenmantra.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        {/* Establish early connection to Cloudinary CDN */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Preload LCP hero image (mobile) — imageSrcSet lets browser pick right size for DPR */}
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_640,q_auto/linen-mantra/hero/herobanner2mob.png`}
          imageSrcSet={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_412,q_auto/linen-mantra/hero/herobanner2mob.png 412w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_512,q_auto/linen-mantra/hero/herobanner2mob.png 512w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_640,q_auto/linen-mantra/hero/herobanner2mob.png 640w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_750,q_auto/linen-mantra/hero/herobanner2mob.png 750w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_828,q_auto/linen-mantra/hero/herobanner2mob.png 828w`}
          imageSizes="100vw"
          media="(max-width: 767px)"
        />
        {/* Preload LCP hero image (desktop) */}
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_1920,q_auto/linen-mantra/hero/herobanner2.jpg`}
          imageSrcSet={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_1080,q_auto/linen-mantra/hero/herobanner2.jpg 1080w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_1200,q_auto/linen-mantra/hero/herobanner2.jpg 1200w, https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,c_limit,w_1920,q_auto/linen-mantra/hero/herobanner2.jpg 1920w`}
          imageSizes="100vw"
          media="(min-width: 768px)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased bg-[var(--color-bg-primary)]"
      >
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
