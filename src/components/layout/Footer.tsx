import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { footerLinks, productCategoryLinks } from "@/data/navigation";

// ── Thin gold accent line under each heading ──────────────────────────
function HeadingLine() {
  return (
    <div
      className="mt-3 mb-6 h-px w-8"
      style={{ backgroundColor: "var(--color-accent)" }}
    />
  );
}

// ── Circular icon wrapper (used for social + contact) ─────────────────
function CircleIcon({ children, size = 36 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 rounded-full"
      style={{
        width:  size,
        height: size,
        border: "1px solid var(--color-accent)",
        color:  "var(--color-accent)",
      }}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/footer/fabric.png')",
        backgroundSize:  "400px auto",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Large leaf watermark — centered */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage:    "url('/images/about/footer/footer%20background.png')",
          backgroundRepeat:   "no-repeat",
          backgroundSize:     "auto 130%",
          backgroundPosition: "center center",
          opacity:             0.09,
          mixBlendMode:        "multiply",
        } as React.CSSProperties}
      />

      {/* Gold top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 40%, rgba(201,164,82,0.25) 100%)" }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 container-site py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

          {/* ── Col 1: Brand ── */}
          <div className="md:col-span-3">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/images/about/footer/companylogo.png"
                alt="Silverline Linen Mantra"
                width={1536}
                height={1024}
                style={{ height: "111px", width: "auto" }}
              />
            </Link>

            {/* Company name + thin line */}
            <p
              className="mt-3 text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-text-primary)" }}
            >
              Silverline Fashion Fabrics Ltd.
            </p>
            <div className="mt-2 mb-4 h-px w-full" style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }} />

            {/* Description — justified */}
            <p
              className="text-sm leading-relaxed text-justify"
              style={{ color: "var(--color-text-secondary)" }}
            >
              India&apos;s leading manufacturer of premium linen and linen blend
              fabrics — trusted by brands, designers, and export markets
              worldwide since 1991.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <CircleIcon size={36}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </CircleIcon>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <CircleIcon size={36}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </CircleIcon>
              </a>
              {/* Gmail */}
              <a href="mailto:linenmantra@gmail.com" aria-label="Email" className="hover:opacity-70 transition-opacity">
                <CircleIcon size={36}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </CircleIcon>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="md:col-span-2 md:col-start-4">
            <h3
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Quick Links
            </h3>
            <HeadingLine />
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span style={{ color: "var(--color-accent)", fontSize: "0.65rem" }}>›</span>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Product Categories ── */}
          <div className="md:col-span-3 md:col-start-6">
            <h3
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Product Categories
            </h3>
            <HeadingLine />
            <ul className="flex flex-col gap-3">
              {productCategoryLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span style={{ color: "var(--color-accent)", fontSize: "0.65rem" }}>›</span>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Get in Touch ── */}
          <div className="md:col-span-4 md:col-start-9">
            <h3
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Get in Touch
            </h3>
            <HeadingLine />
            <ul className="flex flex-col gap-5">

              {/* Phone */}
              <li className="flex items-start gap-3.5">
                <CircleIcon size={34}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.72 5.72l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </CircleIcon>
                <div className="flex flex-col gap-0.5 pt-1">
                  <a href="tel:+918975972300" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--color-text-secondary)" }}>
                    +91 89759 72300
                  </a>
                  <a href="tel:+919769422606" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--color-text-secondary)" }}>
                    +91 97694 22606
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3.5">
                <CircleIcon size={34}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </CircleIcon>
                <div className="flex flex-col gap-0.5 pt-1">
                  <a href="mailto:linenmantra@gmail.com" className="text-sm hover:opacity-60 transition-opacity break-all" style={{ color: "var(--color-text-secondary)" }}>
                    linenmantra@gmail.com
                  </a>
                  <a href="mailto:export@linenmantra.com" className="text-sm hover:opacity-60 transition-opacity break-all" style={{ color: "var(--color-text-secondary)" }}>
                    export@linenmantra.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3.5">
                <CircleIcon size={34}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </CircleIcon>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--color-text-secondary)" }}>
                  A-111 Kewal Industrial Estate,<br />
                  Lower Parel (West),<br />
                  Mumbai — 400013
                </p>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-site py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">

            {/* Left */}
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              &copy; {currentYear}{" "}
              <span className="font-medium" style={{ color: "var(--color-text-secondary)" }}>
                Linen Mantra
              </span>
              . All rights reserved.
            </p>

            {/* Center — leaf icon */}
            <Leaf
              size={14}
              style={{ color: "var(--color-accent)", opacity: 0.7 }}
            />

            {/* Right */}
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Designed &amp; Developed by{" "}
              <a
                href="http://www.bdminfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-text-secondary)" }}
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
