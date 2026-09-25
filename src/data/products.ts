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
  /** Short tagline shown on the detail page hero */
  tagline?: string;
  image: string;
  featured?: boolean;
  /** Rich specification fields for the detail page */
  specs?: {
    gsm?: string;
    width?: string;
    weave?: string;
    finish?: string;
    colorways?: string;
    moq?: string;
    leadTime?: string;
  };
};

export const products: Product[] = [
  {
    id: "limestone",
    name: "Limestone",
    category: "shirting",
    leaRange: "60 LEA",
    composition: "100% Linen",
    tagline: "A natural muted finish — crafted for premium menswear.",
    description:
      "A refined, breathable shirting fabric with a natural muted finish — ideal for premium menswear collections.",
    image: CLD.products.limestone,
    featured: true,
    specs: {
      gsm: "130–145 GSM",
      width: "58 inches",
      weave: "Plain Weave",
      finish: "Enzyme Washed",
      colorways: "15+ seasonal shades",
      moq: "500 metres",
      leadTime: "3–4 weeks",
    },
  },
  {
    id: "alpino",
    name: "Alpino",
    category: "shirting",
    composition: "100% Linen",
    leaRange: "60 LEA",
    tagline: "Exceptional drape and structure for formal tailoring.",
    description:
      "A sophisticated linen suiting fabric offering exceptional drape and structure for formal tailoring.",
    image: CLD.products.alpino,
    featured: true,
    specs: {
      gsm: "140–160 GSM",
      width: "58 inches",
      weave: "Twill Weave",
      finish: "Singeing & Calendering",
      colorways: "12+ classic tones",
      moq: "500 metres",
      leadTime: "3–4 weeks",
    },
  },
  {
    id: "la-seta-linen",
    name: "La Seta Linen",
    category: "shirting",
    composition: "Linen-Silk Blend",
    leaRange: "60 LEA",
    tagline: "Heritage meets luxury — silken hand-feel, linen soul.",
    description:
      "An exquisite linen fabric with a silken hand-feel — crafted for designers who seek fabric that bridges heritage and luxury.",
    image: CLD.products.laSetaLinen,
    featured: true,
    specs: {
      gsm: "120–135 GSM",
      width: "56 inches",
      weave: "Satin Weave",
      finish: "Lustre Finish",
      colorways: "10+ curated shades",
      moq: "300 metres",
      leadTime: "4–5 weeks",
    },
  },
  {
    id: "rare-lea",
    name: "Rare Lea",
    category: "shirting",
    composition: "100% Linen",
    tagline: "Rare construction. Superior drape. Bespoke finesse.",
    description:
      "A premium high-count linen suiting with unmatched finesse — delivering rare construction and superior drape for bespoke tailoring.",
    image: CLD.products.rareLea,
    specs: {
      gsm: "150–170 GSM",
      width: "58 inches",
      weave: "Plain Weave",
      finish: "Soft Hand Finish",
      colorways: "8+ premium tones",
      moq: "300 metres",
      leadTime: "4–5 weeks",
    },
  },
  {
    id: "ireland",
    name: "Ireland",
    category: "shirting",
    leaRange: "60 LEA",
    composition: "100% Linen",
    tagline: "Finest Irish linen tradition — crisp texture, pure breathability.",
    description:
      "Inspired by the finest Irish linen tradition — a pure linen shirting with crisp texture and superior breathability for discerning menswear.",
    image: CLD.products.ireland,
    specs: {
      gsm: "125–145 GSM",
      width: "58 inches",
      weave: "Plain Weave",
      finish: "Beetled Finish",
      colorways: "10+ heritage tones",
      moq: "500 metres",
      leadTime: "3–4 weeks",
    },
  },
  {
    id: "euro-style",
    name: "Euro Style",
    category: "suiting",
    leaRange: "25 LEA",
    composition: "100% Linen",
    tagline: "Classic European suiting — refined structure, clean hand-feel.",
    description:
      "A classic European-inspired linen suiting with refined structure and a clean hand-feel — ideal for formal and semi-formal tailoring.",
    image: CLD.products.euroStyle,
    specs: {
      gsm: "200–220 GSM",
      width: "58 inches",
      weave: "Plain Weave",
      finish: "Singeing & Decatising",
      colorways: "10+ formal shades",
      moq: "500 metres",
      leadTime: "3–4 weeks",
    },
  },
  {
    id: "foglia",
    name: "Foglia",
    category: "suiting",
    composition: "100% Linen",
    tagline: "Italian design sensibility meets premium linen craft.",
    description:
      "A lightweight linen suiting with natural texture and elegant drape — where Italian design sensibility meets premium linen craft.",
    image: CLD.products.foglia,
    specs: {
      gsm: "180–200 GSM",
      width: "58 inches",
      weave: "Dobby Weave",
      finish: "Natural Washed",
      colorways: "8+ earthy tones",
      moq: "500 metres",
      leadTime: "3–4 weeks",
    },
  },
  {
    id: "leonard",
    name: "Leonard",
    category: "suiting",
    leaRange: "40 LEA",
    composition: "100% Linen",
    tagline: "Weight, structure, versatility — built for the finest brands.",
    description:
      "A premium high-count linen suiting delivering weight, structure, and versatility — built for brands that demand the finest.",
    image: CLD.products.leonard,
    specs: {
      gsm: "220–240 GSM",
      width: "60 inches",
      weave: "Twill Weave",
      finish: "Decatised",
      colorways: "12+ classic shades",
      moq: "300 metres",
      leadTime: "4–5 weeks",
    },
  },
  {
    id: "on-star",
    name: "On Star",
    category: "suiting",
    leaRange: "60 LEA",
    composition: "100% Linen",
    tagline: "Standout character — for fashion-forward brands.",
    description:
      "A distinguished linen suiting with standout character — crafted for fashion-forward brands seeking fabrics that make a statement.",
    image: CLD.products.onStar,
    specs: {
      gsm: "240–260 GSM",
      width: "58 inches",
      weave: "Oxford Weave",
      finish: "Mercerised",
      colorways: "8+ bold shades",
      moq: "300 metres",
      leadTime: "4–5 weeks",
    },
  },
  {
    id: "coord-set-gift-box",
    name: "Coord Set Linen Gift Box",
    category: "gift-packing",
    composition: "100% Linen",
    tagline: "Premium curated linen coord set in an elegant gift box.",
    description:
      "A curated linen coord set presented in an elegant gift box — the perfect premium gifting solution for lifestyle and fashion brands.",
    image: CLD.products.coordSetGiftBox,
    featured: false,
    specs: {
      colorways: "Assorted premium palettes",
      moq: "50 sets",
      leadTime: "2–3 weeks",
    },
  },
  {
    id: "linen-duo-gift-set",
    name: "Linen Duo Gift Set",
    category: "gift-packing",
    composition: "100% Linen",
    tagline: "Thoughtfully paired linen — beautifully presented.",
    description:
      "A thoughtfully paired duo of premium linen pieces, beautifully packaged — ideal for corporate gifting and retail collections.",
    image: CLD.products.linenDuoGiftSet,
    featured: false,
    specs: {
      colorways: "Curated duo palettes",
      moq: "50 sets",
      leadTime: "2–3 weeks",
    },
  },
  {
    id: "single-piece-gift-box",
    name: "Single Piece Gift Box",
    category: "gift-packing",
    composition: "100% Linen",
    tagline: "One piece, refined presentation — the art of gifting.",
    description:
      "A single premium linen piece presented in a refined gift box — perfect for individual gifting with a touch of elegance.",
    image: CLD.products.singlePieceGiftBox,
    featured: false,
    specs: {
      colorways: "Any available colorway",
      moq: "100 pieces",
      leadTime: "1–2 weeks",
    },
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

/** Detail-page URL for a single product — /products/[category]/[slug] */
export function productHref(product: Pick<Product, "id" | "category">) {
  return `/products/${product.category}/${product.id}`;
}

/** Human-readable name for a category — slugs like "gift-packing" never reach the UI. */
export function categoryLabel(category: ProductCategory) {
  return productCategories.find((cat) => cat.value === category)?.label ?? category;
}

/** Descriptive alt text for a product photo, e.g. "Limestone 60 LEA 100% Linen Shirting fabric — Linen Mantra". */
export function productImageAlt(product: Product) {
  return `${product.name}${product.leaRange ? ` ${product.leaRange}` : ""}${product.composition ? ` ${product.composition}` : " linen"} ${categoryLabel(product.category)} fabric — Linen Mantra`;
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

/** Up to `limit` other products — same category first, then the rest of the range. */
export function relatedProducts(product: Product, limit = 3): Product[] {
  const others = products.filter((p) => p.id !== product.id);
  const same = others.filter((p) => p.category === product.category);
  const rest = others.filter((p) => p.category !== product.category);
  return [...same, ...rest].slice(0, limit);
}

/** Find a product by its id/slug — used by the detail-page route. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}


/** Per-route SEO copy and hero copy, so every filter URL is unique and indexable on its own terms. */
export const categorySeo: Record<
  ProductCategory,
  { title: string; description: string; heading: string; subText: string }
> = {
  all: {
    title: "Linen Fabrics: Shirting, Suiting & Gift Sets",
    description:
      "Explore Linen Mantra's premium linen fabric collections — pure linen, blends, shirting, suiting, and gift sets from 25 to 150 LEA. Request samples.",
    heading: "Linen Fabric Collections",
    subText:
      "A curated range of signature linen fabrics — crafted across the full count spectrum for brands, designers, and garment manufacturers worldwide.",
  },
  shirting: {
    title: "Linen Shirting Fabric: 60 LEA & Blends",
    description:
      "Pure linen and linen-silk shirting fabrics in 60 LEA and finer counts. Breathable texture and refined hand-feel for premium menswear brands.",
    heading: "Linen Shirting Fabrics",
    subText:
      "Pure linen and linen-silk shirting fabrics in 60 LEA and finer counts — crafted for premium menswear, shirts, and designer collections.",
  },
  suiting: {
    title: "Linen Suiting Fabric: 25 to 60 LEA",
    description:
      "Structured linen suiting fabrics in 25 to 60 LEA constructions for formal, bespoke, and casual tailoring. Request swatches and bulk pricing.",
    heading: "Linen Suiting Fabrics",
    subText:
      "Structured linen suiting fabrics in 25 to 60 LEA constructions — offering superior drape, body, and breathability for bespoke tailoring.",
  },
  "gift-packing": {
    title: "Linen Fabric Gift Boxes & Sets",
    description:
      "Linen fabric gift boxes, duo sets, and coord sets for corporate gifting and retail presentation. Custom branding and bulk supply available.",
    heading: "Linen Fabric Gift Boxes & Sets",
    subText:
      "Curated linen fabric gift boxes, duo sets, and coord sets — premium presentation for corporate gifting, luxury packaging, and retail collections.",
  },
};

export type FaqItem = { q: string; a: string };

/**
 * Category-specific buying guide copy + FAQ items.
 * Used to generate the Buying Guide section + FAQPage JSON-LD on each category page.
 * "all" is intentionally omitted — FAQs apply to focused category pages only.
 */
export const categoryGuide: Record<
  Exclude<ProductCategory, "all">,
  { guide: string; faqs: FaqItem[] }
> = {
  shirting: {
    guide:
      "Linen shirting fabric is woven from long-staple flax fibres, making it significantly stronger and more breathable than cotton alternatives. The LEA count — a linen-specific yarn measurement — determines the fabric's fineness and hand-feel: 60 LEA produces a lightweight, smooth drape ideal for premium dress shirts, while lower counts yield a more textured, casual finish. Linen Mantra's shirting range spans pure 100% linen, linen-silk blends (La Seta), and heritage-inspired constructions like the Ireland quality — each finished with processes such as enzyme washing, beetling, or calendering to achieve the desired softness and lustre. All fabrics are available in full bolt lengths for garment manufacturers, with custom dyeing, width options, and sampling available on request.",
    faqs: [
      {
        q: "What is the minimum order quantity (MOQ) for linen shirting fabric?",
        a: "Our standard MOQ for linen shirting fabrics is 300–500 metres per quality, depending on the construction. For sampling, we supply 5–10 metre cut lengths so you can assess hand-feel, drape, and colour accuracy before placing a bulk order.",
      },
      {
        q: "Do you provide fabric samples before bulk production?",
        a: "Yes. We offer physical swatch cards and sample lengths for all shirting qualities. Simply send us an enquiry with your preferred quality name, desired colourways, and destination country — our team will dispatch samples typically within 5–7 working days.",
      },
      {
        q: "What is the difference between 40 LEA and 60 LEA linen shirting?",
        a: "LEA is the standard yarn count system for linen. A higher LEA number means a finer, lighter yarn. 60 LEA linen produces a smooth, refined fabric with a silkier hand-feel — ideal for formal dress shirts and luxury menswear. 40 LEA linen is slightly heavier with more visible texture, suited to casual shirts and relaxed tailoring. Linen Mantra specialises in 60 LEA and finer shirting constructions.",
      },
      {
        q: "What weave types are available in your shirting range?",
        a: "Our shirting collection includes plain weave (crisp, structured), twill weave (smooth diagonal texture), and satin weave (lustrous, silken finish). Dobby and jacquard constructions are available through our custom development programme. Each weave produces a distinct hand-feel and drape character.",
      },
      {
        q: "Can linen shirting fabric be custom-dyed to specific Pantone shades?",
        a: "Yes. We offer reactive dyeing on all linen shirting constructions with Pantone-matched colour development. Minimum dye-lot quantities apply (typically 200–300 metres per colour). Standard colourways are available off-the-shelf from our seasonal palette.",
      },
      {
        q: "What are your export lead times and payment terms for shirting fabrics?",
        a: "Standard in-stock colourways ship within 2–3 weeks. Custom dyed or specially finished orders require 4–6 weeks from order confirmation. We accept T/T (bank transfer), L/C at sight, and advance payment for sample orders. Export documentation including GSP, COO, and commercial invoice is provided for all international shipments.",
      },
    ],
  },
  suiting: {
    guide:
      "Linen suiting fabric demands a heavier, more structured construction than shirting — typically ranging from 180 GSM to 260 GSM — to deliver the body, drape, and tailoring ease that garment manufacturers require. The LEA count in suiting determines the balance between weight and refinement: 25 LEA produces a dense, traditionally textured suiting ideal for unstructured jackets, while 40–60 LEA constructions offer a finer, more formal hand-feel suitable for bespoke tailoring and luxury blazers. Linen Mantra's suiting range covers European-inspired plain weave, Italian dobby, high-count twill, and structured Oxford constructions — each processed through singeing, decatising, or mercerising to ensure smooth sewing performance and dimensional stability in finished garments.",
    faqs: [
      {
        q: "What GSM range is suitable for linen suiting fabric?",
        a: "Linen suiting fabrics typically range from 180 GSM to 260 GSM. Lighter constructions (180–200 GSM) are suited for tropical and summer suiting, while heavier weights (220–260 GSM) provide the structure needed for formal blazers, trousers, and full suits. Our suiting range covers this full spectrum across different LEA counts.",
      },
      {
        q: "What is the minimum order quantity (MOQ) for linen suiting fabric?",
        a: "MOQ for linen suiting fabrics is 300–500 metres per quality and colourway. Sample lengths of 3–5 metres are available for pattern-making and fit testing before bulk production. Contact us for special requirements on smaller pilot runs.",
      },
      {
        q: "Do you provide sampling before bulk suiting production?",
        a: "Yes. We supply physical samples and lab-dipped colour standards for all suiting constructions. Our sampling process includes hand-feel swatches, construction details (composition, GSM, width, weave), and shrinkage data — everything a pattern maker and production team needs to make an informed sourcing decision.",
      },
      {
        q: "What is the difference between 25 LEA and 60 LEA linen suiting?",
        a: "25 LEA linen suiting uses a thicker, coarser yarn resulting in a heavier, more textured fabric with strong natural character — perfect for casual and resort suiting. 60 LEA linen suiting uses a finer yarn for a smoother, dressier surface with better drape and tailoring performance — ideal for formal bespoke suits and luxury menswear. Linen Mantra's suiting range spans both ends of this spectrum.",
      },
      {
        q: "Can linen suiting fabric be used for both jackets and trousers?",
        a: "Yes. Our suiting constructions at 200–240 GSM are engineered specifically for co-ord tailoring — delivering consistent hand-feel, colour, and shrinkage behaviour across jacket and trouser panels from the same fabric bolt. This is critical for matching sets in bespoke and ready-to-wear collections.",
      },
      {
        q: "What are your export payment terms and lead times for suiting fabrics?",
        a: "Standard stock colours ship in 2–3 weeks. Custom dyed or specially constructed suiting orders require 5–7 weeks from order confirmation. We accept T/T bank transfer and L/C at sight for export orders. Full export documentation — commercial invoice, packing list, COO, and GSP certificate — is provided for all international shipments.",
      },
    ],
  },
  "gift-packing": {
    guide:
      "Linen fabric gift packaging has emerged as a premium category for lifestyle brands, corporate gifting programmes, and luxury retail. Unlike standard poly or paper packaging, linen gift boxes and sets carry the tactile richness, natural texture, and sustainability story that modern consumers expect. Linen Mantra's gift packaging range — coordinated sets, duo gift boxes, and single-piece presentation boxes — is crafted from the same premium linen fabrics used in our shirting and suiting collections, ensuring consistent brand quality throughout. Each set is available with custom branding options, and the minimum order quantities are structured to support both boutique retail launches and large corporate gifting programmes. All packaging is fully exportable with commercial documentation for international buyers.",
    faqs: [
      {
        q: "What is the minimum order quantity (MOQ) for linen gift boxes and sets?",
        a: "MOQ for linen gift sets starts from 50 sets for coord and duo configurations, and 100 pieces for single-item gift boxes. For custom branded or specially packaged orders, MOQs may vary — contact us with your specific requirements and we will provide a tailored quote.",
      },
      {
        q: "Can you provide custom branding on the linen gift packaging?",
        a: "Yes. We offer custom branding options including woven labels, printed hang tags, ribbon closures, and branded tissue inserts. Custom branding orders require a minimum lead time of 3–4 weeks and minimum quantities as agreed. Please share your brand guidelines when submitting your enquiry.",
      },
      {
        q: "Are your linen gift sets suitable for corporate gifting programmes?",
        a: "Absolutely. Our linen gift sets are designed for corporate gifting, employee recognition, client gifting, and festive hampers. We handle bulk corporate orders with consistent packaging quality, coordinated colour palettes, and volume pricing. We can also customise the contents and box format to match your gifting brief.",
      },
      {
        q: "What fabric qualities are used inside the gift sets?",
        a: "All fabric pieces inside our gift sets are crafted from the same premium linen constructions available in our shirting and suiting collections — 100% linen, enzyme washed or soft finished, in curated seasonal colourways. The quality inside the box matches the premium exterior presentation.",
      },
      {
        q: "Do you export linen gift sets internationally?",
        a: "Yes. We export to Europe, the Middle East, the USA, and across Asia. All export orders include commercial invoice, packing list, and country of origin documentation. For EU buyers, GDPR-compliant packaging and eco-certifiable materials are available. Lead times for international export are typically 2–4 weeks.",
      },
    ],
  },
};

