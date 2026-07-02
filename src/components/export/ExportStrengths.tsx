import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";

const strengths = [
  {
    number: "01",
    title: "Consistent Quality Standards",
    description:
      "Every metre of fabric we produce meets rigorous internal quality checks — ensuring colour consistency, weave precision, and finish uniformity across every order.",
  },
  {
    number: "02",
    title: "Reliable Lead Times",
    description:
      "We understand the pressure of production schedules. Our streamlined manufacturing process and inventory management ensure dependable delivery timelines for international buyers.",
  },
  {
    number: "03",
    title: "Custom Development for Brands",
    description:
      "From exclusive compositions to proprietary weave constructions, we collaborate closely with global brands to develop fabrics that are uniquely theirs.",
  },
  {
    number: "04",
    title: "Export Documentation & Compliance",
    description:
      "Full export documentation support — including quality certifications, test reports, and shipment compliance — to ensure seamless international trade.",
  },
  {
    number: "05",
    title: "Wide Fabric Range",
    description:
      "25 LEA to 150 LEA across shirting, suiting, ceremonial, and fashion categories — giving international buyers the breadth to source complete collections from a single partner.",
  },
  {
    number: "06",
    title: "Direct Manufacturer Access",
    description:
      "No middlemen, no markups. Buyers work directly with our manufacturing team — enabling transparent communication, faster sampling, and competitive pricing.",
  },
];

export default function ExportStrengths() {
  return (
    <SectionWrapper cream>
      <FadeInOnScroll direction="up" className="mb-14">
        <span className="text-label block mb-5 text-[var(--color-accent)]">
          Why Partner With Us
        </span>
        <h2 className="font-display font-normal leading-tight text-[var(--text-h2)] text-[var(--color-text-primary)]">
          Built for Global Trade
        </h2>
        <span className="block h-px w-10 mt-5 bg-[var(--color-accent)]" />
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--color-border)]">
        {strengths.map((item, i) => (
          <FadeInOnScroll key={item.number} direction="up" delay={i * 0.07}>
            <div className="p-8 h-full group transition-colors duration-300 hover:bg-[var(--color-bg-primary)] border-r border-b border-[var(--color-border)]">
              <span
                className="font-display font-normal block mb-5 leading-none text-[var(--color-border)]"
                style={{ fontSize: "2rem" }}
              >
                {item.number}
              </span>
              <h3 className="font-display font-normal leading-tight mb-3 text-[var(--text-h4)] text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <span className="block h-px w-6 mb-4 transition-all duration-300 group-hover:w-10 bg-[var(--color-accent)]" />
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
