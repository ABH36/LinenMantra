import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Office",
    lines: ["A-111 Kewal Industrial Estate,", "Lower Parel (West), Mumbai — 400013"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 89759 72300", "+91 97694 22606"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["linenmantra@gmail.com", "export@linenmantra.com"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      {/* Intro */}
      <FadeInOnScroll direction="up">
        <span className="text-label block mb-5 text-[var(--color-accent)]">
          Get In Touch
        </span>
        <h2 className="font-display font-normal leading-tight mb-5 text-[var(--text-h2)] text-[var(--color-text-primary)]">
          Let&apos;s Talk
          <br />
          Linen
        </h2>
        <span className="block h-px w-10 mb-6 bg-[var(--color-accent)]" />
        <p className="leading-relaxed max-w-sm text-[var(--color-text-secondary)]">
          Whether you&apos;re looking to source a specific fabric, develop a custom
          construction, or simply learn more about what we do — we&apos;re here to
          help.
        </p>
      </FadeInOnScroll>

      {/* Contact detail cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactDetails.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeInOnScroll key={item.label} direction="up" delay={i * 0.08}>
              <div className="p-6 border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0 bg-[var(--color-bg-secondary)]">
                    <Icon size={16} color="var(--color-accent)" />
                  </div>
                  <div>
                    <p className="text-label mb-2 text-[var(--color-text-muted)]">
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm leading-snug text-[var(--color-text-primary)]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          );
        })}
      </div>

      {/* Export note */}
      <FadeInOnScroll direction="up" delay={0.2}>
        <div className="p-6 border-l-[3px] border-[var(--color-accent)] bg-[var(--color-bg-secondary)]">
          <p className="text-label mb-2 text-[var(--color-accent)]">
            International Buyers
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            For export enquiries — fabric specifications, minimum order quantities,
            sampling requests, and pricing — please write to{" "}
            <a
              href="mailto:export@linenmantra.com"
              className="underline underline-offset-2 text-[var(--color-text-primary)]"
            >
              export@linenmantra.com
            </a>
          </p>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
