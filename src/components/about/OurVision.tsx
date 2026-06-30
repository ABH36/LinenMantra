import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function OurVision() {
  return (
    <section
      className="w-full section-py relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* Fabric texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/about/footer/fabric.png')",
          backgroundSize: "400px auto",
          backgroundRepeat: "repeat",
          opacity: 0.09,
        }}
      />
      <div className="container-site relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll direction="up">
            <span
              className="text-label block mb-8"
              style={{ color: "var(--color-accent)" }}
            >
              Our Vision
            </span>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            {/* Opening quote mark */}
            <span
              className="font-display font-normal block mb-4 leading-none select-none"
              style={{
                fontSize: "6rem",
                color: "var(--color-accent)",
                opacity: 0.25,
                lineHeight: 0.8,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              className="font-display font-normal leading-snug"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--color-text-light)",
                letterSpacing: "-0.01em",
              }}
            >
              To shape the future of linen by combining timeless craftsmanship
              with modern innovation, and to be the preferred global partner for
              premium linen fabrics, delivering excellence from yarn to finished
              fabric.
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <span
              className="block h-px w-10 mx-auto mt-10 mb-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p
              className="text-label"
              style={{ color: "rgba(248,245,240,0.4)" }}
            >
              Linen Mantra · Est. 1991 · Mumbai, India
            </p>
          </FadeInOnScroll>

          {/* Background decorative text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
            aria-hidden="true"
          >
            <span
              className="font-display font-normal opacity-[0.02] whitespace-nowrap"
              style={{
                fontSize: "clamp(6rem, 18vw, 16rem)",
                color: "var(--color-text-light)",
                letterSpacing: "-0.03em",
              }}
            >
              LINEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
