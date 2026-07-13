import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: "jpcr3zsi",
  api_key:    "861631195519142",
  api_secret: "S-6J4R6-ChkvCzP80Gau1xiyMxk",
});

// All files to upload: [localPath, cloudinaryPublicId]
const FILES = [
  // Hero banners
  ["public/images/hero/herobanner.png",      "linen-mantra/hero/herobanner"],
  ["public/images/hero/herobanner1.png",     "linen-mantra/hero/herobanner1"],
  ["public/images/hero/herobanner2.png",     "linen-mantra/hero/herobanner2"],
  ["public/images/hero/herobannermob.png",   "linen-mantra/hero/herobannermob"],
  ["public/images/hero/herobanner1mob.png",  "linen-mantra/hero/herobanner1mob"],
  ["public/images/hero/herobanner2mob.png",  "linen-mantra/hero/herobanner2mob"],

  // About
  ["public/images/about/aboutherobanner.png",          "linen-mantra/about/aboutherobanner"],
  ["public/images/about/mill1.jpeg",                   "linen-mantra/about/mill1"],
  ["public/images/about/mill2.jpeg",                   "linen-mantra/about/mill2"],
  ["public/images/about/mill4.jpeg",                   "linen-mantra/about/mill4"],
  ["public/images/about/mill5.jpeg",                   "linen-mantra/about/mill5"],
  ["public/images/about/footer/companylogo.png",       "linen-mantra/about/footer/companylogo"],
  ["public/images/about/footer/fabric.webp",           "linen-mantra/about/footer/fabric"],
  ["public/images/about/footer/leaf.webp",             "linen-mantra/about/footer/leaf"],
  ["public/images/about/A_cinematic_slow_motion_docum.mp4", "linen-mantra/about/mill-video"],

  // Process
  ["public/images/process/Flax.png",   "linen-mantra/process/flax"],
  ["public/images/process/Fiber.png",  "linen-mantra/process/fiber"],
  ["public/images/process/Yarn.png",   "linen-mantra/process/yarn"],
  ["public/images/process/Weave.png",  "linen-mantra/process/weave"],
  ["public/images/process/Fabric.png", "linen-mantra/process/fabric"],

  // Products
  ["public/images/products/Limestone.PNG",              "linen-mantra/products/limestone"],
  ["public/images/products/Alpino.PNG",                 "linen-mantra/products/alpino"],
  ["public/images/products/ireland.png",                "linen-mantra/products/ireland"],
  ["public/images/products/la-seta-linen.jpg",          "linen-mantra/products/la-seta-linen"],
  ["public/images/products/rare-lea.png",               "linen-mantra/products/rare-lea"],
  ["public/images/products/productherobanner.png",      "linen-mantra/products/productherobanner"],
  ["public/images/products/suiting/euro-style.png",     "linen-mantra/products/suiting/euro-style"],
  ["public/images/products/suiting/foglia.png",         "linen-mantra/products/suiting/foglia"],
  ["public/images/products/suiting/leonard.jpg",        "linen-mantra/products/suiting/leonard"],
  ["public/images/products/suiting/on-star.png",        "linen-mantra/products/suiting/on-star"],
  ["public/images/products/giftproducts/Coord Set Linen Gift Box.PNG",  "linen-mantra/products/gift/coord-set-gift-box"],
  ["public/images/products/giftproducts/Linen Duo Gift Set.jpg",         "linen-mantra/products/gift/linen-duo-gift-set"],
  ["public/images/products/giftproducts/Single Piece Gift Box.PNG",      "linen-mantra/products/gift/single-piece-gift-box"],

  // Contact
  ["public/images/contactus/contactherobanner.png", "linen-mantra/contactus/contactherobanner"],

  // Export
  ["public/images/Export/exportherobanner.png", "linen-mantra/export/exportherobanner"],
  ["public/images/Export/globlemap.webp",       "linen-mantra/export/globlemap"],

  // Social Media Icons
  ["public/images/SocialMediaicon/whatsapp.png",   "linen-mantra/social/whatsapp"],
  ["public/images/SocialMediaicon/instagram.png",  "linen-mantra/social/instagram"],
  ["public/images/SocialMediaicon/linkedin.png",   "linen-mantra/social/linkedin"],
  ["public/images/SocialMediaicon/facebook.png",   "linen-mantra/social/facebook"],
  ["public/images/SocialMediaicon/gmail.png",      "linen-mantra/social/gmail"],
  ["public/images/SocialMediaicon/google-maps.png","linen-mantra/social/google-maps"],
  ["public/images/SocialMediaicon/landline.png",   "linen-mantra/social/landline"],

  // Expert / logo
  ["public/images/expert/expert1.webp", "linen-mantra/expert/expert1"],
  ["public/images/expert/expert2.png",  "linen-mantra/expert/expert2"],
  ["public/images/logo/logo.webp",      "linen-mantra/logo/logo"],
];

const BASE = process.cwd();
const results = {};

for (const [localPath, publicId] of FILES) {
  const abs = path.join(BASE, localPath);
  if (!fs.existsSync(abs)) {
    console.log(`⚠  SKIP (not found): ${localPath}`);
    continue;
  }

  const isVideo = localPath.endsWith(".mp4");
  try {
    const res = await cloudinary.uploader.upload(abs, {
      public_id:    publicId,
      resource_type: isVideo ? "video" : "image",
      overwrite:    true,
      unique_filename: false,
    });
    results[localPath] = res.secure_url;
    console.log(`✓  ${localPath}\n   → ${res.secure_url}`);
  } catch (err) {
    console.error(`✗  FAILED: ${localPath}`, err.message);
  }
}

// Write results to a JSON file for reference
fs.writeFileSync(
  path.join(BASE, "scripts/cloudinary-urls.json"),
  JSON.stringify(results, null, 2)
);
console.log("\n✅ Done! URLs saved to scripts/cloudinary-urls.json");
