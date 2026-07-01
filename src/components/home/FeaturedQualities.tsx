import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { featuredProducts } from "@/data/products";

export default function FeaturedQualities() {
  return (
    <section className="w-full py-10 lg:py-14 bg-[var(--color-bg-primary)]">
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
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
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group text-[var(--color-text-secondary)]"
            >
              <span>View All Products</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeInOnScroll>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProducts.map((product, i) => (
            <FadeInOnScroll key={product.id} direction="up" delay={i * 0.12}>
              <article className="group flex flex-col h-full cursor-pointer bg-white border border-[var(--color-border)]">

                {/* Product image */}
                <div className="relative w-full overflow-hidden aspect-[3/2]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top gradient for badge */}
                  <div
                    className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, transparent 100%)" }}
                  />
                  {/* Category badge — complex backdrop-filter, inline unavoidable */}
                  <span
                    className="absolute top-3.5 left-3.5 text-label px-2.5 py-1"
                    style={{
                      backgroundColor: "rgba(28,28,26,0.52)",
                      color: "rgba(248,245,240,0.92)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className="font-display font-normal mb-1.5 text-[var(--color-text-primary)]"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-label mb-3 text-[var(--color-accent)]">
                    {product.composition}
                    {product.leaRange ? ` · ${product.leaRange}` : ""}
                  </p>
                  <p className="text-sm leading-relaxed flex-1 mb-4 text-[var(--color-text-secondary)]">
                    {product.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-70 group/link mt-auto text-[var(--color-text-primary)]"
                  >
                    <span>Get a Quote</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Bottom accent line on hover */}
                <div className="h-px w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-accent)]" />

              </article>
            </FadeInOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
