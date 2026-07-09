import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import OurStory from "@/components/about/OurStory";
import WeavingExcellence from "@/components/about/WeavingExcellence";
import WhatWeCreate from "@/components/about/WhatWeCreate";
import OurVision from "@/components/about/OurVision";
import ContactCTABand from "@/components/shared/ContactCTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Linen Mantra's 35+ year journey — from a textile trading venture to one of India's leading premium linen fabric manufacturers. Founded by Vipul Raichura, manufacturing in Navsari, Gujarat.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <PageHero
        label="A Legacy of Linen Excellence"
        heading="About Linen Mantra"
        subText="35+ years of craftsmanship, manufacturing expertise, and an unwavering commitment to quality — from Mumbai to global markets."
        lightImage
        image="/images/about/aboutherobanner.png"
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
