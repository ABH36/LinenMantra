import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function OurVision() {
  return (
    <section
      className="w-full section-py relative overflow-hidden bg-[var(--color-bg-primary)]"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.png')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll direction="up">
            <span className="text-label block mb-8 text-[var(--color-accent)]">
              Our Vision
            </span>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            {/* Opening quote mark */}
            <span
              className="font-display font-normal block mb-4 select-none text-[var(--color-accent)] opacity-25"
              style={{ fontSize: "6rem", lineHeight: 0.8 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              className="font-display font-normal leading-snug text-[var(--color-text-primary)] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              To shape the future of linen by combining timeless craftsmanship
              with modern innovation, and to be the preferred global partner for
              premium linen fabrics, delivering excellence from yarn to finished
              fabric.
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <span className="block h-px w-10 mx-auto mt-10 mb-8 bg-[var(--color-accent)]" />
            <p className="text-label text-[var(--color-text-muted)]">
              Linen Mantra · Est. 1991 · Mumbai, India
            </p>
          </FadeInOnScroll>

          {/* Background decorative text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
            aria-hidden="true"
          >
            <span
              className="font-display font-normal opacity-[0.05] whitespace-nowrap text-[var(--color-text-primary)] tracking-[-0.03em]"
              style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
            >
              LINEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
