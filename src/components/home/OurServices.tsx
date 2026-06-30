import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const services = [
  {
    number: "01",
    title: "Pure Linen Fabrics",
    description: "100% premium linen across the full 25–150 LEA count spectrum",
    image: "/images/products/Limestone.png",
    href: "/products",
  },
  {
    number: "02",
    title: "Linen Blends",
    description: "Cotton-linen, viscose-linen, and poly-linen compositions",
    image: "/images/products/Ivory%20Plain.png",
    href: "/products",
  },
  {
    number: "03",
    title: "Custom Development",
    description: "Bespoke fabric construction and exclusive weave development",
    image: "/images/about/mill2.png",
    href: "/contact",
  },
  {
    number: "04",
    title: "Export & Sampling",
    description: "B2B export support from sampling to bulk production",
    image: "/images/about/mill4.png",
    href: "/export",
  },
];

export default function OurServices() {
  return (
    <SectionWrapper>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <FadeInOnScroll direction="up">
          <SectionTitle label="What We Offer" heading="Our Services" />
        </FadeInOnScroll>
        <FadeInOnScroll direction="up" delay={0.1} className="shrink-0">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <span>View All</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeInOnScroll>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <FadeInOnScroll key={service.number} direction="up" delay={i * 0.1}>
            <Link
              href={service.href}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,9,8,0.92) 0%, rgba(10,9,8,0.35) 55%, rgba(10,9,8,0.08) 100%)",
                }}
              />

              {/* Number — top left */}
              <span
                className="absolute top-5 left-5 font-display font-normal"
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(248,245,240,0.38)",
                  letterSpacing: "0.12em",
                }}
              >
                {service.number}
              </span>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="font-display font-normal leading-tight mb-1.5"
                  style={{
                    fontSize: "var(--text-h3)",
                    color: "var(--color-text-light)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(248,245,240,0.6)" }}
                >
                  {service.description}
                </p>

                {/* Green accent line on hover */}
                <div
                  className="h-px w-0 group-hover:w-full mt-3 transition-all duration-500"
                  style={{ backgroundColor: "var(--color-cta)" }}
                />
              </div>
            </Link>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
