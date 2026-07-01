import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.png')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Background leaf — multiply blend shows leaf shape on light fabric */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/about/footer/footer%20background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 150%",
          backgroundPosition: "right center",
          opacity: 0.07,
          mixBlendMode: "multiply",
        } as React.CSSProperties}
      />

      {/* Gradient top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-accent) 40%, rgba(92,138,101,0.3) 100%)",
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Column 1 — Brand (wider) */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/images/about/footer/companylogo.png"
                alt="Silverline"
                width={1536}
                height={1024}
                style={{
                  height: "72px",
                  width: "auto",
                }}
              />
              <p
                className="text-xs tracking-widest uppercase mt-1.5"
                style={{ color: "var(--color-text-primary)" }}
              >
                Silverline Pvt. Ltd.
              </p>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              India&apos;s leading manufacturer of premium linen and linen blend
              fabrics — trusted by brands, designers, and export markets
              worldwide since 1991.
            </p>

            {/* Get a Quote CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--color-cta)", color: "var(--color-text-light)" }}
            >
              Get a Quote
              <span>→</span>
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                aria-label="Follow Linen Mantra on Instagram"
                className="transition-opacity hover:opacity-70"
                style={{ color: "#E1306C" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Connect on LinkedIn"
                className="transition-opacity hover:opacity-70"
                style={{ color: "#0077B5" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="mailto:linenmantra@gmail.com"
                aria-label="Email Linen Mantra"
                className="transition-opacity hover:opacity-70"
                style={{ color: "#EA4335" }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="md:col-span-3">
            <h3
              className="text-label mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60 flex items-center gap-2 group"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="inline-block w-3 h-px group-hover:w-5 transition-all duration-300"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="md:col-span-4">
            <h3
              className="text-label mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Phone
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.85 }}
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918975972300"
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    +91 89759 72300
                  </a>
                  <a
                    href="tel:+919769422606"
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    +91 97694 22606
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.85 }}
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:linenmantra@gmail.com"
                    className="text-sm transition-opacity hover:opacity-60 break-all"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    linenmantra@gmail.com
                  </a>
                  <a
                    href="mailto:export@linenmantra.com"
                    className="text-sm transition-opacity hover:opacity-60 break-all"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    export@linenmantra.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.85 }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  A-111 Kewal Industrial Estate,
                  <br />
                  Lower Parel (West),
                  <br />
                  Mumbai — 400013
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-xs tracking-wide"
              style={{ color: "var(--color-text-muted)" }}
            >
              &copy; {currentYear} Linen Mantra. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Designed &amp; Developed by{" "}
              <a
                href="http://www.bdminfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                BDM Infotech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
