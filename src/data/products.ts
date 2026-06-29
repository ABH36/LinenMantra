export type ProductCategory =
  | "all"
  | "shirting"
  | "suiting"
  | "blends"
  | "designer"
  | "custom";

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
    category: "suiting",
    composition: "Linen-Wool Blend",
    leaRange: "80 LEA",
    description:
      "A sophisticated linen-wool blend suiting fabric offering exceptional drape and structure for formal tailoring.",
    image: "/images/products/Alpino.png",
    featured: true,
  },
  {
    id: "coastal",
    name: "Coastal",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "40 LEA",
    description:
      "A textured, yarn-dyed linen shirting fabric with subtle stripe patterns — perfect for resort and casual wear.",
    image: "/images/products/Coastal.png",
    featured: true,
  },
  {
    id: "aurora",
    name: "Aurora",
    category: "blends",
    composition: "Linen-Cotton Blend",
    leaRange: "44 LEA",
    description:
      "A soft linen-cotton blend offering versatility and comfort — suited for summer collections and casual wear.",
    image: "/images/products/Aurora.png",
  },
  {
    id: "veldt",
    name: "Veldt",
    category: "suiting",
    composition: "100% Pure Linen",
    leaRange: "100 LEA",
    description:
      "A finely woven, high-count linen suiting for premium tailoring — smooth hand-feel with exceptional breathability.",
    image: "/images/products/Veldt.png",
  },
  {
    id: "nordic",
    name: "Nordic",
    category: "designer",
    composition: "Linen-Art Silk Blend",
    leaRange: "70 LEA",
    description:
      "A luxurious linen-art silk blend with a natural sheen — designed for ceremonial and fashion-forward collections.",
    image: "/images/products/Nordic.png",
  },
  {
    id: "tierra",
    name: "Tierra",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "25 LEA",
    description:
      "A heavier-weight pure linen with a rich, earthy texture — ideal for outerwear and structured garment pieces.",
    image: "/images/products/Tierra.png",
  },
  {
    id: "ivory-plain",
    name: "Ivory Plain",
    category: "shirting",
    composition: "100% Pure Linen",
    leaRange: "60 LEA",
    description:
      "Classic optical white linen shirting with a clean, minimal finish — the essential base fabric for any collection.",
    image: "/images/products/Ivory%20Plain.png",
  },
  {
    id: "dunes",
    name: "Dunes",
    category: "blends",
    composition: "Linen-Cotton Dobby",
    leaRange: "44 LEA",
    description:
      "A textured dobby weave linen-cotton blend — adds visual depth and tactile interest to casual and semi-formal ranges.",
    image: "/images/products/Dunes.png",
  },
  {
    id: "meridian",
    name: "Meridian",
    category: "custom",
    composition: "Custom Linen Blend",
    leaRange: "Upon Request",
    description:
      "Fully custom-developed fabric specifications — built to your design brief, count, composition, and finish requirements.",
    image: "/images/products/Meridian.png",
  },
];

export const productCategories: { value: ProductCategory; label: string }[] = [
  { value: "all", label: "All Collections" },
  { value: "shirting", label: "Shirting" },
  { value: "suiting", label: "Suiting" },
  { value: "blends", label: "Blends" },
  { value: "designer", label: "Designer" },
  { value: "custom", label: "Custom" },
];

export const featuredProducts = products.filter((p) => p.featured);
