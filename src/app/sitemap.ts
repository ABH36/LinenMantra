import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://linenmantra.com";
  const now = new Date();

  // Every filter is a real, indexable route — /products/all, /products/shirting, …
  const productRoutes: MetadataRoute.Sitemap = productCategories.map(({ value }) => ({
    url: `${base}/products/${value}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: value === "all" ? 0.9 : 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productRoutes,
    {
      url: `${base}/export`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
