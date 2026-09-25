import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebVitals from "@/components/shared/WebVitals";
import ContactClickTracker from "@/components/shared/ContactClickTracker";

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

const googleVerificationRaw = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleVerification = googleVerificationRaw
  ? (googleVerificationRaw.match(/content=["']([^"']+)["']/)?.[1] || googleVerificationRaw).trim()
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL("https://linenmantra.com"),
  title: {
    default: "Linen Mantra — Premium Linen Fabric Manufacturer",
    template: "%s | Linen Mantra",
  },
  description:
    "India's leading manufacturer of premium linen and linen blend fabrics. Serving fashion brands, garment manufacturers, designers, and export markets worldwide. 35+ years of textile expertise.",
  authors: [{ name: "Linen Mantra" }],
  creator: "Linen Mantra",
  icons: {
    // favicon.ico holds 16/32/48px; icon.png (src/app/icon.png) is the 192px mark Google Search prefers.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: googleVerification,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://linenmantra.com",
    siteName: "Linen Mantra",
    title: "Linen Fabric Manufacturer in India | Linen Mantra",
    description:
      "India's leading manufacturer of premium linen and linen blend fabrics. 35+ years of textile expertise. Serving global brands, designers, and garment manufacturers.",
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
    title: "Linen Fabric Manufacturer in India | Linen Mantra",
    description:
      "India's leading manufacturer of premium linen and linen blend fabrics. 35+ years of textile expertise. Serving global brands, designers, and garment manufacturers.",
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
      legalName: "Silverline Fashion Fabrics Ltd.",
      url: "https://linenmantra.com",
      logo: {
        "@type": "ImageObject",
        url: "https://linenmantra.com/linen-mantra-logo.png",
        width: 512,
        height: 512,
      },
      description:
        "India's leading manufacturer of premium linen and linen blend fabrics. Serving global fashion brands, garment manufacturers, and designers.",
      foundingDate: "2010",
      telephone: "+91-22-4500-5662",
      email: "info@linenmantra.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-111, Kewal Industrial Estate, Lower Parel (West)",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400013",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91-22-4500-5662",
          email: "info@linenmantra.com",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      subOrganization: [
        { "@id": "https://linenmantra.com/#office-lower-parel" },
        { "@id": "https://linenmantra.com/#office-kalbadevi" },
      ],
      sameAs: [
        "https://www.instagram.com/linen_mantra",
        "https://www.linkedin.com/company/linen-mantra/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://linenmantra.com/#office-lower-parel",
      name: "Linen Mantra — Head Office (Lower Parel)",
      parentOrganization: { "@id": "https://linenmantra.com/#organization" },
      url: "https://linenmantra.com/contact",
      telephone: "+91-22-4500-5662",
      email: "info@linenmantra.com",
      image: "https://linenmantra.com/linen-mantra-logo.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-111, Kewal Industrial Estate, Lower Parel (West)",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400013",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.9971884,
        longitude: 72.8267863,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://linenmantra.com/#office-kalbadevi",
      name: "Linen Mantra — Branch Office (Kalbadevi)",
      parentOrganization: { "@id": "https://linenmantra.com/#organization" },
      url: "https://linenmantra.com/contact",
      telephone: "+91-22-4568-7288",
      email: "info@linenmantra.com",
      image: "https://linenmantra.com/linen-mantra-logo.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#384-M Building, Shop No. 1, Ground Floor, Dabholkar Wadi, Kalbadevi Road",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.9482,
        longitude: 72.8286,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        {/* Establish early connection to Cloudinary CDN */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
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
        {/* overflow-x-clip: slide-in animations start off-screen and would otherwise widen the
            mobile layout viewport. Set on <main>, not <body>, because body overflow propagates to
            the viewport; clip (unlike hidden) keeps position: sticky working. */}
        <main id="main-content" className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gaId && <WebVitals />}
        {gaId && <ContactClickTracker />}
      </body>
    </html>
  );
}
