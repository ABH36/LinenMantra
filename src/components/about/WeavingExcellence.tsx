import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MillImageSlider from "./MillImageSlider";

const capabilities = [
  { label: "Yarn Count Range", value: "25 – 150 LEA" },
  { label: "Fabric Types", value: "Shirting · Suiting · Ceremonial · Fashion" },
  { label: "Blends", value: "Linen · Wool · Cotton · Art Silk" },
  { label: "Finishes", value: "Plain · Yarn-Dyed · Dobby · Jacquard · Digital Print" },
  { label: "Manufacturing", value: "Navsari, Gujarat" },
  { label: "Machinery", value: "European Technology" },
];

export default function WeavingExcellence() {
  return (
    <SectionWrapper cream>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — image placeholder */}
        <FadeInOnScroll direction="right" delay={0.1} className="order-2 lg:order-1">
          <div className="relative">
            {/* Mill images — auto-swapping slideshow */}
            <MillImageSlider />

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 p-6 hidden md:block"
              style={{ backgroundColor: "var(--color-bg-dark)", width: "200px", zIndex: 10 }}
            >
              <p
                className="font-display font-normal leading-none mb-2"
                style={{
                  fontSize: "2.5rem",
                  color: "var(--color-accent-light)",
                }}
              >
                25+
              </p>
              <p
                className="text-label"
                style={{ color: "rgba(248,245,240,0.5)" }}
              >
                Years of Weaving Excellence
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Right — text content */}
        <div className="order-1 lg:order-2">
          <FadeInOnScroll direction="up">
            <span
              className="text-label block mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Manufacturing Excellence
            </span>
            <h2
              className="font-display font-normal leading-tight mb-6"
              style={{
                fontSize: "var(--text-h2)",
                color: "var(--color-text-primary)",
              }}
            >
              Weaving Excellence
              <br />
              for Over{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                25 Years
              </em>
            </h2>
            <span
              className="block h-px w-10 mb-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <p
              className="leading-relaxed mb-6"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--text-body)",
              }}
            >
              With over 25 years of experience in textiles, Linen Mantra has
              built its reputation as a linen specialist, combining deep
              technical expertise with an unwavering commitment to quality.
            </p>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--text-body)",
              }}
            >
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
            <div
              className="mt-10 grid grid-cols-1 gap-0"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex items-start gap-6 py-4"
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-label shrink-0 w-36"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {cap.label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {cap.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
