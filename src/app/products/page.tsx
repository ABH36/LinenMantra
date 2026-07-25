import { permanentRedirect } from "next/navigation";
import { isProductCategory } from "@/data/products";

// Categories that were reachable at an older URL, mapped to their route today.
const LEGACY_CATEGORIES: Record<string, string> = {
  gift: "gift-packing",
};

/**
 * /products has no content of its own — every collection view lives at
 * /products/[category]. This keeps old links working, including the
 * previous ?category= query form.
 *
 * Permanent (308) so search engines consolidate the old /products URL's
 * ranking signals onto /products/all. Note that browsers cache 308s
 * aggressively — if this ever needs to change, expect to clear that cache.
 */
export default async function ProductsIndexPage({
  searchParams,
}: PageProps<"/products">) {
  const { category } = await searchParams;
  const requested = Array.isArray(category) ? category[0] : category;
  const mapped = requested ? LEGACY_CATEGORIES[requested] ?? requested : undefined;

  permanentRedirect(`/products/${mapped && isProductCategory(mapped) ? mapped : "all"}`);
}
