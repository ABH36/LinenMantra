export type ProductCategory =
  | "all"
  | "shirting"
  | "suiting";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  composition: string;
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
    composition: "100% Pure Linen",
    leaRange: "60 LEA",
    description:
      "A refined, breathable shirting fabric with a natural muted finish — ideal for premium menswear collections.",
    image: "/images/products/Limestone.png",
    featured: true,
  },
  {
    id: "alpino",
    name: "Alpino",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "80 LEA",
    description:
      "A sophisticated linen suiting fabric offering exceptional drape and structure for formal tailoring.",
    image: "/images/products/Alpino.png",
    featured: true,
  },
  {
    id: "la-seta-linen",
    name: "La Seta Linen",
    category: "shirting",
    composition: "Linen-Silk Blend",
    leaRange: "70 LEA",
    description:
      "An exquisite linen fabric with a silken hand-feel — crafted for designers who seek fabric that bridges heritage and luxury.",
    image: "/images/products/la-seta-linen.jpg",
    featured: true,
  },
  {
    id: "rare-lea",
    name: "Rare Lea",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "100 LEA",
    description:
      "A premium high-count linen suiting with unmatched finesse — delivering rare construction and superior drape for bespoke tailoring.",
    image: "/images/products/rare-lea.png",
  },
  {
    id: "ireland",
    name: "Ireland",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "40 LEA",
    description:
      "Inspired by the finest Irish linen tradition — a pure linen shirting with crisp texture and superior breathability for discerning menswear.",
    image: "/images/products/ireland.png",
  },
];

export const productCategories: { value: ProductCategory; label: string }[] = [
  { value: "all", label: "All Collections" },
  { value: "shirting", label: "Shirting" },
];

export const featuredProducts = products.filter((p) => p.featured);
