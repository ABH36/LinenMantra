import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MillVideoCard from "./MillVideoCard";

const paragraphs = [
  "Linen Mantra is one of India's leading manufacturers of premium linen and linen blend fabrics, serving fashion brands, garment manufacturers, designers, retailers, and export markets across the globe.",
  "Backed by over 25 years of textile expertise, we combine advanced manufacturing, innovative product development, and a deep understanding of evolving fashion trends to create fabrics that meet the highest standards of quality, performance, and design.",
  "Founded under the leadership of Vipul Raichura, Linen Mantra was established with a vision to bring world-class linen fabrics to the Indian and international fashion industry. What began as a textile trading venture has grown into a trusted manufacturing company known for its commitment to quality, consistency, and innovation.",
  "Today, alongside the experience and leadership of its founder, the company is strengthened by the involvement of the next generation. Shrey Raichura brings a fresh perspective to product development, branding, and global market expansion, while continuing to build on the values and expertise that have shaped Linen Mantra over the years.",
  "Together, this blend of experience and forward-thinking vision enables us to serve the evolving needs of modern brands while remaining committed to the craftsmanship, quality, and reliability that define our business.",
];

const leadership = [
  {
    name: "Vipul Raichura",
    role: "Founder & Director",
    description:
      "With over 25 years in the textile industry, Vipul has built Linen Mantra into a trusted name for premium linen manufacturing — known for unwavering quality and deep technical knowledge.",
  },
  {
    name: "Shrey Raichura",
    role: "Product Development & Branding",
    description:
      "Bringing a fresh perspective to the next chapter, Shrey leads product innovation, brand positioning, and global market expansion — continuing the legacy with a contemporary vision.",
  },
];

export default function OurStory() {
  return (
    <SectionWrapper id="story">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

        {/* Left — text content (3/5 width) */}
        <div className="lg:col-span-3">
          <FadeInOnScroll direction="up">
            <span className="text-label block mb-5 text-[var(--color-accent)]">
              Who We Are
            </span>
            <h2 className="font-display font-normal leading-tight mb-8 text-[var(--text-h2)] text-[var(--color-text-primary)]">
              Built on Craft.
              <br />
              <em className="italic text-[var(--color-accent)]">
                Driven by Quality.
              </em>
            </h2>
            <span className="block h-px w-10 mb-10 bg-[var(--color-accent)]" />
          </FadeInOnScroll>

          <div className="flex flex-col gap-6">
            {paragraphs.map((para, i) => (
              <FadeInOnScroll key={i} direction="up" delay={i * 0.08}>
                <p className="leading-relaxed text-[var(--color-text-secondary)] text-[var(--text-body)]">
                  {para}
                </p>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        {/* Right — image / stat cards (2/5 width) */}
        <FadeInOnScroll direction="left" delay={0.2} className="lg:col-span-2">
          <div className="sticky top-[158px] flex flex-col gap-4">
            {/* Mill video card — logo 2s → video */}
            <MillVideoCard />

            {/* Small caption stat */}
            <div className="flex items-center gap-6 px-6 py-5 bg-[var(--color-bg-secondary)] border-l-2 border-[var(--color-accent)]">
              <div>
                <p
                  className="font-display font-normal text-[var(--color-text-primary)] leading-none"
                  style={{ fontSize: "2rem" }}
                >
                  1991
                </p>
                <p className="text-label mt-1 text-[var(--color-text-muted)]">
                  Year Founded
                </p>
              </div>
              <div className="w-px self-stretch bg-[var(--color-border)]" />
              <div>
                <p
                  className="font-display font-normal text-[var(--color-text-primary)] leading-none"
                  style={{ fontSize: "2rem" }}
                >
                  25+
                </p>
                <p className="text-label mt-1 text-[var(--color-text-muted)]">
                  Years of Expertise
                </p>
              </div>
            </div>

            {/* Group company badge */}
            <div className="flex items-center gap-4 px-6 py-2 bg-[var(--color-bg-secondary)] border-l-2 border-[var(--color-accent)]">
              <span className="text-label shrink-0 text-[var(--color-text-muted)]">
                Group Company
              </span>
              <div className="w-px h-9 shrink-0 bg-[var(--color-border)]" />
              <Image
                src="/images/about/footer/companylogo.png"
                alt="Silverline Group"
                width={1536}
                height={1024}
                className="h-11 w-auto"
              />
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Leadership section */}
      <div className="mt-24">
        <FadeInOnScroll direction="up">
          <div className="w-full h-px mb-14 bg-[var(--color-border)]" />
          <span className="text-label block mb-8 text-[var(--color-accent)]">
            Leadership
          </span>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((person, i) => (
            <FadeInOnScroll key={person.name} direction="up" delay={i * 0.12}>
              <div className="p-8 h-full bg-[var(--color-bg-secondary)] border-l-2 border-[var(--color-accent)]">
                <h3 className="font-display font-normal mb-1 text-[var(--text-h3)] text-[var(--color-text-primary)]">
                  {person.name}
                </h3>
                <p className="text-label mb-5 text-[var(--color-accent)]">
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {person.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
