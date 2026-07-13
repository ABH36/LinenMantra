import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import { CLD } from "@/lib/cloudinary";

export default function OurVision() {
  return (
    <section
      className="w-full py-10 lg:py-12 relative overflow-hidden bg-[var(--color-bg-primary)]"
      style={{
        backgroundImage: `url('${CLD.about.fabric}')`,
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll direction="up">
            <span className="text-label block mb-1 text-[var(--color-accent)]">
              Our Vision
            </span>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <AccentDivider className="mx-auto mb-6" />
            <blockquote
              className="font-display font-normal leading-snug text-[var(--color-text-primary)] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              To shape the future of linen by combining timeless craftsmanship
              with modern innovation, and to be the preferred global partner for
              premium linen fabrics, delivering excellence from yarn to finished
              fabric.
            </blockquote>
            <AccentDivider className="mx-auto mt-6" />
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
