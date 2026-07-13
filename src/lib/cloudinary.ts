const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const I = `https://res.cloudinary.com/${CLOUD}/image/upload`;
const V = `https://res.cloudinary.com/${CLOUD}/video/upload`;

export const CLD = {
  hero: {
    banner:     `${I}/linen-mantra/hero/herobanner.png`,
    banner1:    `${I}/linen-mantra/hero/herobanner1.png`,
    banner2:    `${I}/linen-mantra/hero/herobanner2.jpg`,
    bannerMob:  `${I}/linen-mantra/hero/herobannermob.png`,
    banner1Mob: `${I}/linen-mantra/hero/herobanner1mob.png`,
    banner2Mob: `${I}/linen-mantra/hero/herobanner2mob.png`,
  },
  about: {
    heroBanner:  `${I}/linen-mantra/about/aboutherobanner.png`,
    mill1:       `${I}/linen-mantra/about/mill1.jpg`,
    mill2:       `${I}/linen-mantra/about/mill2.jpg`,
    mill4:       `${I}/linen-mantra/about/mill4.jpg`,
    mill5:       `${I}/linen-mantra/about/mill5.jpg`,
    companyLogo: `${I}/linen-mantra/about/footer/companylogo.png`,
    fabric:      `${I}/linen-mantra/about/footer/fabric.webp`,
    leaf:        `${I}/linen-mantra/about/footer/leaf.webp`,
    millVideo:   `${V}/linen-mantra/about/mill-video.mp4`,
  },
  process: {
    flax:   `${I}/linen-mantra/process/flax.png`,
    fiber:  `${I}/linen-mantra/process/fiber.png`,
    yarn:   `${I}/linen-mantra/process/yarn.png`,
    weave:  `${I}/linen-mantra/process/weave.png`,
    fabric: `${I}/linen-mantra/process/fabric.png`,
  },
  products: {
    limestone:          `${I}/linen-mantra/products/limestone.png`,
    alpino:             `${I}/linen-mantra/products/alpino.png`,
    ireland:            `${I}/linen-mantra/products/ireland.png`,
    laSetaLinen:        `${I}/linen-mantra/products/la-seta-linen.jpg`,
    rareLea:            `${I}/linen-mantra/products/rare-lea.png`,
    productHeroBanner:  `${I}/linen-mantra/products/productherobanner.png`,
    euroStyle:          `${I}/linen-mantra/products/suiting/euro-style.png`,
    foglia:             `${I}/linen-mantra/products/suiting/foglia.png`,
    leonard:            `${I}/linen-mantra/products/suiting/leonard.jpg`,
    onStar:             `${I}/linen-mantra/products/suiting/on-star.png`,
    coordSetGiftBox:    `${I}/linen-mantra/products/gift/coord-set-gift-box.png`,
    linenDuoGiftSet:    `${I}/linen-mantra/products/gift/linen-duo-gift-set.jpg`,
    singlePieceGiftBox: `${I}/linen-mantra/products/gift/single-piece-gift-box.png`,
  },
  contact: {
    heroBanner: `${I}/linen-mantra/contactus/contactherobanner.png`,
  },
  export: {
    heroBanner: `${I}/linen-mantra/export/exportherobanner.png`,
    globeMap:   `${I}/linen-mantra/export/globlemap.webp`,
  },
  social: {
    whatsapp:   `${I}/linen-mantra/social/whatsapp.png`,
    instagram:  `${I}/linen-mantra/social/instagram.png`,
    linkedin:   `${I}/linen-mantra/social/linkedin.png`,
    facebook:   `${I}/linen-mantra/social/facebook.png`,
    gmail:      `${I}/linen-mantra/social/gmail.png`,
    googleMaps: `${I}/linen-mantra/social/google-maps.png`,
    landline:   `${I}/linen-mantra/social/landline.png`,
  },
  expert: {
    expert1: `${I}/linen-mantra/expert/expert1.webp`,
    expert2: `${I}/linen-mantra/expert/expert2.png`,
  },
  logo: `${I}/linen-mantra/logo/logo.webp`,
};
