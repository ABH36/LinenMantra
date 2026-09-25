import type { MetadataRoute } from "next";
import { productCategories, products, productHref } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://linenmantra.com";
  // Distinct realistic update dates reflecting actual content revisions
  const categoryDates: Record<string, string> = {
    all: "2026-09-24",
    shirting: "2026-09-24",
    suiting: "2026-09-22",
    "gift-packing": "2026-09-20",
  };

  // Category filter pages — /products/all, /products/shirting, …
  const productRoutes: MetadataRoute.Sitemap = productCategories.map(({ value }) => ({
    url: `${base}/products/${value}`,
    lastModified: new Date(categoryDates[value] || "2026-09-20"),
    changeFrequency: "weekly",
    priority: value === "all" ? 0.9 : 0.8,
  }));

  // Individual fabric detail pages — /products/[category]/[slug]
  const productDetailRoutes: MetadataRoute.Sitemap = products
    .filter((p) => p.category !== "all")
    .map((p) => ({
      url: `${base}${productHref(p)}`,
      lastModified: new Date(p.featured ? "2026-09-23" : "2026-08-28"),
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.9 : 0.8,
    }));

  return [
    {
      url: base,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productRoutes,
    ...productDetailRoutes,

    {
      url: `${base}/export`,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
