import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import { featuredProducts, productHref, productImageAlt } from "@/data/products";

export default function FeaturedQualities() {

  return (
    <section className="w-full py-8 lg:py-12 bg-[var(--color-bg-secondary)]">
      <div className="container-site">

        {/* Heading — centred, one line on desktop */}
        <FadeInOnScroll direction="up" className="mb-8 text-center">
          {/* inline-block shrinks to the title's width, so the divider starts where the title starts */}
          <div className="inline-block">
            <h2
              className="font-display font-normal leading-tight text-[var(--color-text-primary)] xl:whitespace-nowrap"
              // 1.75rem is the largest size at which this line fits the ~1150px container on one line
              style={{ fontSize: "1.75rem" }}
            >
              Our Premium Linen Fabric Collections &amp; Featured Fabric Qualities for Global Fashion Brands.
            </h2>
            {/* Centred while the title wraps (below xl); starts under the title once it is one line */}
            <div className="text-center xl:text-left">
              <AccentDivider className="mt-1" />
            </div>
          </div>
        </FadeInOnScroll>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProducts.map((product, i) => (
            <FadeInOnScroll key={product.id} direction="up" delay={i * 0.12}>
              <article className="group flex flex-col h-full bg-white border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow duration-500">

                {/* Image */}
                <Link href={productHref(product)} className="relative w-full overflow-hidden aspect-[5/3] block" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={product.image}
                    alt={productImageAlt(product)}
                    width={600}
                    height={360}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top gradient for badge */}
                  <div
                    className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, transparent 100%)" }}
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-3.5 left-3.5 text-label px-2.5 py-1 capitalize"
                    style={{
                      backgroundColor: "rgba(28,28,26,0.52)",
                      color: "rgba(248,245,240,0.92)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {product.category}
                  </span>
                  {/* LEA badge — top right */}
                  {product.leaRange && (
                    <span
                      className="absolute top-3.5 right-3.5 text-label px-2.5 py-1"
                      style={{
                        backgroundColor: "rgba(28,28,26,0.52)",
                        color: "rgba(248,245,240,0.92)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {product.leaRange}
                    </span>
                  )}
                </Link>

                {/* Card body */}
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <Link href={productHref(product)} className="block group/name">
                    <h3 className="font-display font-normal leading-tight text-xl md:text-2xl text-[var(--color-text-primary)] group-hover/name:text-[var(--color-accent)] transition-colors">
                      {product.name}
                    </h3>
                    {product.composition && (
                      <p className="text-label mt-0.5 text-[var(--color-accent)]">{product.composition}</p>
                    )}
                  </Link>
                  <Link
                    href={productHref(product)}
                    className="inline-flex items-center gap-1.5 py-1 -my-1 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-70 group/link shrink-0 text-[var(--color-text-primary)]"
                  >
                    <span>View Quality</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Bottom accent line on hover */}
                <div className="h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[var(--color-accent)]" />
              </article>
            </FadeInOnScroll>
          ))}
        </div>

        {/* View more — bottom right of the section */}
        <FadeInOnScroll direction="up" delay={0.1} className="flex justify-end mt-8">
          <Link
            href="/products/all"
            className="inline-flex items-center gap-2 py-1 -my-1 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60 group text-[var(--color-text-secondary)]"
          >
            <span>View More Products</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </FadeInOnScroll>
      </div>

    </section>
  );
}
