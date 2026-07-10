import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import AccentDivider from "@/components/shared/AccentDivider";
import MillImageSlider from "./MillImageSlider";

const capabilities = [
  { label: "Yarn Count Range", value: "25 – 150 LEA" },
  { label: "Fabric Types", value: "Shirting · Suiting · Ceremonial · Fashion" },
  { label: "Blends", value: "Linen · Wool · Cotton · Art Silk" },
  { label: "Finishes", value: "Plain · Yarn-Dyed · Dobby · Jacquard · Digital Print" },
  { label: "Manufacturing", value: "Navsari, Gujarat" },
  { label: "Warehousing", value: "Bhiwandi, Maharashtra" },
  { label: "Machinery", value: "European Technology" },
];

export default function WeavingExcellence() {
  return (
    <section className="w-full py-10 lg:py-12 bg-[var(--color-bg-secondary)]" id="infrastructure">
      <div className="container-site">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left — text content */}
        <div className="order-1">
          <FadeInOnScroll direction="up">
            <span className="text-label block mb-1 text-[var(--color-accent)]">
              Manufacturing Excellence
            </span>
            <h2
              className="font-display font-normal leading-tight mb-5 text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
            >
              Weaving Excellence for Over <em className="italic text-[var(--color-accent)]">35 Years</em>
            </h2>
            <AccentDivider className="mb-6" />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <p className="leading-relaxed mb-6 text-[var(--color-text-secondary)] text-[var(--text-body)]">
              With over 35 years of experience in textiles, Linen Mantra has built its reputation as a linen specialist, combining deep technical expertise with an unwavering commitment to quality.
            </p>
            <p className="leading-relaxed text-[var(--color-text-secondary)] text-[var(--text-body)]">
              Our manufacturing facility in Navsari, Gujarat, is equipped with
              modern weaving and finishing technology, enabling us to create
              premium shirting, suiting, ceremonial wear, and fashion fabrics
              across a wide range of constructions, textures, colours, and
              finishes. This versatility allows us to serve the evolving needs
              of brands and garment manufacturers across domestic and
              international markets.
            </p>
          </FadeInOnScroll>

          {/* Capability specs */}
          <FadeInOnScroll direction="up" delay={0.15}>
            <div className="mt-7 grid grid-cols-1 gap-0 border-t border-[var(--color-border)]">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="flex items-start gap-6 py-4 border-b border-[var(--color-border)]"
                >
                  <span className="text-label shrink-0 w-36 text-[var(--color-text-muted)]">
                    {cap.label}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {cap.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>

        {/* Right — mill image slider */}
        <FadeInOnScroll direction="left" delay={0.1} className="order-2">
          <div className="relative">
            <MillImageSlider />

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 p-6 hidden md:block bg-[var(--color-bg-dark)] w-[200px] z-10">
              <p
                className="font-display font-normal leading-none mb-2 text-[var(--color-accent-light)]"
                style={{ fontSize: "2.5rem" }}
              >
                35+
              </p>
              <p className="text-label" style={{ color: "rgba(248,245,240,0.5)" }}>
                Years of Textile Expertise
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
      </div>
    </section>
  );
}
