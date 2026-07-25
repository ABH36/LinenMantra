import { CLD } from "@/lib/cloudinary";

// These values are the URL segments: /products/all, /products/gift-packing, …
export type ProductCategory =
  | "all"
  | "shirting"
  | "suiting"
  | "gift-packing";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  composition?: string;
  leaRange?: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "limestone",
    name: "Limestone",
    category: "shirting",
    leaRange: "60 LEA",
    description:
      "A refined, breathable shirting fabric with a natural muted finish — ideal for premium menswear collections.",
    image: CLD.products.limestone,
    featured: true,
  },
  {
    id: "alpino",
    name: "Alpino",
    category: "shirting",
    composition: "100% Linen",
    leaRange: "60 LEA",
    description:
      "A sophisticated linen suiting fabric offering exceptional drape and structure for formal tailoring.",
    image: CLD.products.alpino,
    featured: true,
  },
  {
    id: "la-seta-linen",
    name: "La Seta Linen",
    category: "shirting",
    composition: "Linen-Silk Blend",
    leaRange: "60 LEA",
    description:
      "An exquisite linen fabric with a silken hand-feel — crafted for designers who seek fabric that bridges heritage and luxury.",
    image: CLD.products.laSetaLinen,
    featured: true,
  },
  {
    id: "rare-lea",
    name: "Rare Lea",
    category: "shirting",
    description:
      "A premium high-count linen suiting with unmatched finesse — delivering rare construction and superior drape for bespoke tailoring.",
    image: CLD.products.rareLea,
  },
  {
    id: "ireland",
    name: "Ireland",
    category: "shirting",
    leaRange: "60 LEA",
    description:
      "Inspired by the finest Irish linen tradition — a pure linen shirting with crisp texture and superior breathability for discerning menswear.",
    image: CLD.products.ireland,
  },
  {
    id: "euro-style",
    name: "Euro Style",
    category: "suiting",
    leaRange: "25 LEA",
    description:
      "A classic European-inspired linen suiting with refined structure and a clean hand-feel — ideal for formal and semi-formal tailoring.",
    image: CLD.products.euroStyle,
  },
  {
    id: "foglia",
    name: "Foglia",
    category: "suiting",
    description:
      "A lightweight linen suiting with natural texture and elegant drape — where Italian design sensibility meets premium linen craft.",
    image: CLD.products.foglia,
  },
  {
    id: "leonard",
    name: "Leonard",
    category: "suiting",
    leaRange: "40 LEA",
    description:
      "A premium high-count linen suiting delivering weight, structure, and versatility — built for brands that demand the finest.",
    image: CLD.products.leonard,
  },
  {
    id: "on-star",
    name: "On Star",
    category: "suiting",
    leaRange: "60 LEA",
    description:
      "A distinguished linen suiting with standout character — crafted for fashion-forward brands seeking fabrics that make a statement.",
    image: CLD.products.onStar,
  },
  {
    id: "coord-set-gift-box",
    name: "Coord Set Linen Gift Box",
    category: "gift-packing",
    description:
      "A curated linen coord set presented in an elegant gift box — the perfect premium gifting solution for lifestyle and fashion brands.",
    image: CLD.products.coordSetGiftBox,
    featured: false,
  },
  {
    id: "linen-duo-gift-set",
    name: "Linen Duo Gift Set",
    category: "gift-packing",
    description:
      "A thoughtfully paired duo of premium linen pieces, beautifully packaged — ideal for corporate gifting and retail collections.",
    image: CLD.products.linenDuoGiftSet,
    featured: false,
  },
  {
    id: "single-piece-gift-box",
    name: "Single Piece Gift Box",
    category: "gift-packing",
    description:
      "A single premium linen piece presented in a refined gift box — perfect for individual gifting with a touch of elegance.",
    image: CLD.products.singlePieceGiftBox,
    featured: false,
  },
];

export const productCategories: { value: ProductCategory; label: string }[] = [
  { value: "all", label: "All Collections" },
  { value: "shirting", label: "Shirting" },
  { value: "suiting", label: "Suiting" },
  { value: "gift-packing", label: "Gift Packing" },
];

export const featuredProducts = products.filter((p) => p.featured);

/** Each category is its own route — /products/all, /products/shirting, … */
export function categoryHref(category: ProductCategory) {
  return `/products/${category}`;
}

/** Human-readable name for a category — slugs like "gift-packing" never reach the UI. */
export function categoryLabel(category: ProductCategory) {
  return productCategories.find((cat) => cat.value === category)?.label ?? category;
}

/** Guards the `[category]` URL segment before it is used as a ProductCategory. */
export function isProductCategory(value: string): value is ProductCategory {
  return productCategories.some((cat) => cat.value === value);
}

export function productsByCategory(category: ProductCategory) {
  return category === "all"
    ? products
    : products.filter((p) => p.category === category);
}

/** Per-route SEO copy, so every filter URL is indexable on its own terms. */
export const categorySeo: Record<ProductCategory, { title: string; description: string }> = {
  all: {
    title: "Products",
    description:
      "Explore Linen Mantra's premium linen fabric collections — 100% linen, linen blends, shirting, suiting, and home furnishing fabrics ranging from 6 to 150 LEA. Custom development available.",
  },
  shirting: {
    title: "Linen Shirting Fabrics",
    description:
      "Premium linen shirting fabrics from Linen Mantra — pure linen and linen-silk blends with crisp texture, breathability, and a refined hand-feel for discerning menswear brands.",
  },
  suiting: {
    title: "Linen Suiting Fabrics",
    description:
      "Linen suiting fabrics from Linen Mantra — 25 to 60 LEA constructions offering weight, structure, and elegant drape for formal, semi-formal, and bespoke tailoring.",
  },
  "gift-packing": {
    title: "Linen Gift Packing",
    description:
      "Curated linen gift boxes and coord sets from Linen Mantra — premium presentation for corporate gifting, retail collections, and lifestyle brands.",
  },
};
