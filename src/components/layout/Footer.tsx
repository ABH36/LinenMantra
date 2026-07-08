import Link from "next/link";
import Image from "next/image";
import { footerLinks, productCategoryLinks } from "@/data/navigation";

// ── Gold accent line under every heading ──────────────────────────────
function HeadingLine() {
  return <div className="mt-2.5 mb-4 h-px w-8 bg-[var(--color-accent)]" />;
}

// ── Botanical branch — bottom bar decoration ──────────────────────────
function LeafBranch({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="54" height="32" viewBox="0 0 54 32" fill="none"
      className="hidden md:block shrink-0 opacity-50 text-[var(--color-accent)]"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M2 30C18 22 34 13 52 5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M11 23C11 16 16 10 24 8"  stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M11 23C17 20 21 16 24 8"  stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M30 15C31 9 36 5 44 4"    stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M30 15C35 13 40 8 44 4"   stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

// ── Lotus icon — bottom bar center ────────────────────────────────────
function LotusIcon() {
  return (
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none"
      className="hidden md:block text-[var(--color-accent)] opacity-70">
      <path d="M15 22c0 0-7-5.5-7-12a7 7 0 0 1 7 6 7 7 0 0 1 7-6c0 6.5-7 12-7 12z"
        stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22c0 0-13-8-13-18a13 13 0 0 1 13 9 13 13 0 0 1 13-9c0 10-13 18-13 18z"
        stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
    </svg>
  );
}


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage:  "url('/images/about/footer/fabric.webp')",
        backgroundSize:   "400px auto",
        backgroundRepeat: "repeat",
      }}
    >

      {/* ── Gold accent top line ── */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(201,164,82,0.2) 100%)",
        }}
      />

      {/* ════════════════════════════════
           MAIN GRID
          ════════════════════════════════ */}
      <div className="relative z-10 container-site py-7 md:py-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-start">

          {/* ── Column 1: Brand (3 cols) ── */}
          <div className="md:col-span-3 flex flex-col">

            {/* Logo */}
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/images/about/footer/companylogo.png"
                alt="Silverline Linen Mantra"
                width={1536}
                height={1024}
                style={{ height: "111px", width: "auto" }}
              />
            </Link>

            {/* Company name */}
            <p className="mt-3 text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-text-primary)]">
              Silverline Fashion Fabrics Ltd.
            </p>

            {/* Thin gold rule */}
            <div className="mt-2 mb-3 h-px bg-[var(--color-accent)] opacity-50" />

            {/* Description */}
            <p className="text-[13px] leading-[1.75] text-justify text-[var(--color-text-secondary)]">
              India&apos;s leading manufacturer of premium linen and linen blend
              fabrics — trusted by brands, designers, and export markets
              worldwide since 2010.
            </p>
          </div>

          {/* ── Columns 2+3: Quick Links + Categories + Follow Us (4 cols) ── */}
          <div className="md:col-span-4 flex flex-col gap-y-8">

            {/* Quick Links + Categories side by side */}
            <div className="grid grid-cols-2 gap-x-6">

              {/* Quick Links */}
              <div>
                <h3 className="text-base font-black tracking-[0.1em] uppercase text-[var(--color-forest)]">
                  Quick Links
                </h3>
                <HeadingLine />
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none" style={{ fontSize: "0.75rem" }}>›</span>
                      <Link
                        href={link.href}
                        className="text-[13px] leading-snug hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-base font-black tracking-[0.1em] uppercase text-[var(--color-forest)]">
                  Categories
                </h3>
                <HeadingLine />
                <ul className="flex flex-col gap-3">
                  {productCategoryLinks.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none" style={{ fontSize: "0.75rem" }}>›</span>
                      <Link
                        href={link.href}
                        className="text-[13px] leading-snug hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Follow Us — sits below links, filling the empty space */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-center text-[var(--color-text-muted)] mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <span className="flex-1 h-px bg-[var(--color-accent)] opacity-30" />
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/linen_mantra?igsh=OHExNWpubWozczdl" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="hover:opacity-80 transition-opacity">
                    <Image src="/images/SocialMediaicon/instagram.png" alt="Instagram" width={32} height={32} style={{ width: 32, height: 32 }} />
                  </a>
                  <a href="https://www.linkedin.com/company/linen-mantra/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" className="hover:opacity-80 transition-opacity">
                    <Image src="/images/SocialMediaicon/linkedin.png" alt="LinkedIn" width={32} height={32} style={{ width: 32, height: 32 }} />
                  </a>
                  <a href="#" aria-label="Follow on Facebook" className="hover:opacity-80 transition-opacity">
                    <Image src="/images/SocialMediaicon/facebook.png" alt="Facebook" width={32} height={32} style={{ width: 32, height: 32 }} />
                  </a>
                </div>
                <span className="flex-1 h-px bg-[var(--color-accent)] opacity-30" />
              </div>
            </div>
          </div>

          {/* ── Columns 4+5: Offices wrapper (5 cols, internal 2-col grid) ── */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">

          {/* Head Office */}
          <div>
            <h3 className="text-base font-black tracking-[0.1em] uppercase text-[var(--color-forest)]">
              Head Office
            </h3>
            <HeadingLine />
            <ul className="flex flex-col gap-4">

              <li className="flex items-center gap-3">
                <a href="https://wa.me/919769422606" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                </a>
                <a href="https://wa.me/919769422606" target="_blank" rel="noopener noreferrer" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  +91 97694 22606
                </a>
              </li>

              <li className="flex items-center gap-3">
                <a href="tel:+912245005662" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/phone-call.png" alt="Phone" width={24} height={24} />
                </a>
                <a href="tel:+912245005662" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  +91 22 4500 5662
                </a>
              </li>

              <li className="flex items-center gap-3">
                <a href="mailto:linenmantra@gmail.com" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/gmail.png" alt="Email" width={24} height={24} />
                </a>
                <a href="mailto:linenmantra@gmail.com" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  linenmantra@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <a
                  href="https://maps.google.com/maps?q=18.9971884,72.8267863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity"
                >
                  <Image src="/images/SocialMediaicon/google-maps.png" alt="Location" width={24} height={24} />
                </a>
                <a
                  href="https://maps.google.com/maps?q=18.9971884,72.8267863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] leading-[1.75] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]"
                >
                  A-111 Kewal Industrial Estate,<br />
                  Lower Parel (West),<br />
                  Mumbai — 400013
                </a>
              </li>

            </ul>
          </div>

          {/* Branch Office */}
          <div>
            <h3 className="text-base font-black tracking-[0.1em] uppercase text-[var(--color-forest)]">
              Branch Office
            </h3>
            <HeadingLine />
            <ul className="flex flex-col gap-4">

              <li className="flex items-center gap-3">
                <a href="https://wa.me/919769422606" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                </a>
                <a href="https://wa.me/919769422606" target="_blank" rel="noopener noreferrer" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  +91 97694 22606
                </a>
              </li>

              <li className="flex items-center gap-3">
                <a href="tel:+912245687288" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/phone-call.png" alt="Phone" width={24} height={24} />
                </a>
                <a href="tel:+912245687288" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  +91 22 4568 7288
                </a>
              </li>

              <li className="flex items-center gap-3">
                <a href="mailto:linenmantra@gmail.com" className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity">
                  <Image src="/images/SocialMediaicon/gmail.png" alt="Email" width={24} height={24} />
                </a>
                <a href="mailto:linenmantra@gmail.com" className="text-[12px] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]">
                  linenmantra@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <a
                  href="https://maps.google.com/maps?q=384-M+Dabholkar+Wadi+Kalbadevi+Road+Mumbai+400002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center leading-none hover:opacity-60 transition-opacity"
                >
                  <Image src="/images/SocialMediaicon/google-maps.png" alt="Location" width={24} height={24} />
                </a>
                <a
                  href="https://maps.google.com/maps?q=384-M+Dabholkar+Wadi+Kalbadevi+Road+Mumbai+400002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] leading-[1.75] hover:opacity-60 transition-opacity text-[var(--color-text-secondary)]"
                >
                  #384-M Building, Shop No. 1,<br />
                  Ground Floor, Dabholkar Wadi,<br />
                  Kalbadevi Road,<br />
                  Mumbai — 400002
                </a>
              </li>

            </ul>
          </div>

          </div>{/* end offices wrapper */}

        </div>
      </div>

      {/* ════════════════════════════════
           BOTTOM BAR
          ════════════════════════════════ */}
      <div className="relative z-10 border-t border-[var(--color-border)]">
        <div className="container-site py-4">
          <div className="flex items-center justify-between gap-4">

            {/* Left: branch + copyright */}
            <div className="flex items-center gap-3">
              <LeafBranch />
              <p className="text-[11px] text-[var(--color-text-muted)]">
                &copy; {currentYear}{" "}
                <span className="font-semibold text-[var(--color-text-secondary)]">Linen Mantra</span>.
                {" "}All rights reserved.
              </p>
            </div>

            {/* Center: lotus */}
            <LotusIcon />

            {/* Right: credit + branch */}
            <div className="flex items-center gap-3">
              <p className="text-[11px] text-[var(--color-text-muted)]">
                Designed &amp; Developed by{" "}
                <a
                  href="http://www.bdminfotech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:opacity-70 transition-opacity text-[var(--color-text-secondary)]"
                >
                  BDM Infotech
                </a>
              </p>
              <LeafBranch flip />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
