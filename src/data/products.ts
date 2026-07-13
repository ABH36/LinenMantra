import { CLD } from "@/lib/cloudinary";

export type ProductCategory =
  | "all"
  | "shirting"
  | "suiting"
  | "gift";

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
    category: "gift",
    description:
      "A curated linen coord set presented in an elegant gift box — the perfect premium gifting solution for lifestyle and fashion brands.",
    image: CLD.products.coordSetGiftBox,
    featured: false,
  },
  {
    id: "linen-duo-gift-set",
    name: "Linen Duo Gift Set",
    category: "gift",
    description:
      "A thoughtfully paired duo of premium linen pieces, beautifully packaged — ideal for corporate gifting and retail collections.",
    image: CLD.products.linenDuoGiftSet,
    featured: false,
  },
  {
    id: "single-piece-gift-box",
    name: "Single Piece Gift Box",
    category: "gift",
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
  { value: "gift", label: "Gift Packing" },
];

export const featuredProducts = products.filter((p) => p.featured);
