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
    "India's leading manufacturer of premium linen and linen blend fabrics. Serving fashion brands, garment manufacturers, designers, and export markets worldwide. 25+ years of textile expertise.",
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
      "25+ years of linen manufacturing expertise. Serving global brands, designers, and garment manufacturers.",
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
      "25+ years of linen manufacturing. Premium shirting, suiting & blends for global brands.",
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
        "Premium linen and linen blend fabric manufacturer based in India. Serving global fashion brands, garment manufacturers, and designers since 1991.",
      foundingDate: "1991",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
