import type { Metadata } from "next";

export const SITE_URL = "https://linenmantra.com";
const SITE_NAME = "Linen Mantra";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

/** Crop a Cloudinary upload to the 1200×630 social-card size. */
export function cloudinaryOgImage(src: string) {
  return src.replace("/upload/", "/upload/c_fill,g_auto,w_1200,h_630,f_jpg,q_auto/");
}

type PageSeo = {
  /** Social title — shown on LinkedIn / WhatsApp / X cards. */
  title: string;
  description: string;
  /** Shorter og/twitter description; defaults to `description`. */
  socialDescription?: string;
  /** Route path, e.g. "/about". Used for canonical and og:url. */
  path: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Canonical + Open Graph + Twitter metadata for one page.
 * A page-level `openGraph` replaces the root one wholesale, so siteName/locale/type
 * are repeated here; `twitter` is set too, otherwise every page inherits the homepage card.
 */
export function pageMetadata({
  title,
  description,
  socialDescription = description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
}: PageSeo): Pick<Metadata, "description" | "alternates" | "openGraph" | "twitter"> {
  const url = `${SITE_URL}${path}`;
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      title,
      description: socialDescription,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: socialDescription,
      images: [image],
    },
  };
}

type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD, Home first. */
function breadcrumbJsonLd(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
}

type WebPageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

/**
 * Page-level JSON-LD graph: a WebPage node (linked to the site-wide Organization
 * and WebSite nodes from the root layout), plus a BreadcrumbList for inner pages.
 */
export function webPageJsonLd({
  type = "WebPage",
  name,
  description,
  path,
  breadcrumb,
  extra = [],
}: {
  type?: WebPageType;
  name: string;
  description: string;
  path: string;
  breadcrumb?: Crumb[];
  extra?: object[];
}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const graph: object[] = [
    {
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
  ];
  if (breadcrumb) {
    graph.push({ "@id": `${url}#breadcrumb`, ...breadcrumbJsonLd(breadcrumb) });
  }
  return { "@context": "https://schema.org", "@graph": [...graph, ...extra] };
}
