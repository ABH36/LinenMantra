import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { featuredProducts } from "@/data/products";

export default function FeaturedQualities() {
  return (
    <SectionWrapper cream>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <FadeInOnScroll direction="up">
          <SectionTitle
            label="Our Collections"
            heading="Featured Fabric Qualities"
            subText="A selection of our signature linen fabrics — crafted for precision, designed for distinction."
          />
        </FadeInOnScroll>
        <FadeInOnScroll direction="up" delay={0.1} className="shrink-0">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <span>View All Products</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeInOnScroll>
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product, i) => (
          <FadeInOnScroll key={product.id} direction="up" delay={i * 0.12}>
            <article
              className="group flex flex-col h-full cursor-pointer transition-all duration-350"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Product image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Top gradient for badge readability */}
                <div
                  className="absolute inset-x-0 top-0 h-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)",
                  }}
                />
                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 text-label px-3 py-1.5"
                  style={{
                    backgroundColor: "rgba(28,28,26,0.55)",
                    color: "rgba(248,245,240,0.9)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="font-display font-normal mb-2 transition-colors duration-300"
                  style={{
                    fontSize: "var(--text-h3)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-label mb-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  {product.composition}
                  {product.leaRange ? ` · ${product.leaRange}` : ""}
                </p>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-70 group/link mt-auto"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <span>Get a Quote</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Bottom accent line — appears on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            </article>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
