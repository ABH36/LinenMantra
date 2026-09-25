import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import OurStory from "@/components/about/OurStory";
import WeavingExcellence from "@/components/about/WeavingExcellence";
import WhatWeCreate from "@/components/about/WhatWeCreate";
import OurVision from "@/components/about/OurVision";
import ContactCTABand from "@/components/shared/ContactCTABand";
import JsonLd from "@/components/shared/JsonLd";
import { CLD } from "@/lib/cloudinary";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "About Linen Mantra | Premium Linen Fabric Maker";
const DESCRIPTION =
  "Learn about Linen Mantra's 35+ year journey — premium linen fabric manufacturer founded by Vipul Raichura with weaving facilities in Navsari, Gujarat.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/about", imageAlt: "About Linen Mantra" }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: "AboutPage",
          name: TITLE,
          description: DESCRIPTION,
          path: "/about",
          breadcrumb: [{ name: "About", path: "/about" }],
        })}
      />

      {/* Page hero */}
      <PageHero
        label="A Legacy of Linen Excellence"
        heading="About Linen Mantra"
        subText="35+ years of craftsmanship, manufacturing expertise, and an unwavering commitment to quality — from Mumbai to global markets."
        lightImage
        image={CLD.about.heroBanner}
        imageAlt="Folded pure linen fabrics in natural ecru, mustard, olive and brown with a Linen Mantra swing tag and a cone of linen yarn"
      />

      {/* Our Story — company narrative + leadership */}
      <OurStory />

      {/* Weaving Excellence — manufacturing depth */}
      <WeavingExcellence />

      {/* What We Create — 7 product types */}
      <WhatWeCreate />

      {/* Our Vision — dark full-width quote */}
      <OurVision />

      {/* Contact CTA */}
      <ContactCTABand
        heading="Ready to Source Premium Linen?"
        subText="Connect with us to discuss your fabric requirements, request samples, or explore our latest collections."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
