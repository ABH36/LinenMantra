import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import Divider from "@/components/shared/Divider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* Main footer content */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-70 transition-opacity">
              <span
                className="font-display text-2xl font-normal tracking-wide block"
                style={{ color: "var(--color-text-light)" }}
              >
                Linen Mantra
              </span>
              <span
                className="text-label mt-1 opacity-50 block"
                style={{ color: "var(--color-text-light)", fontSize: "0.6rem" }}
              >
                Premium Linen Fabrics
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs mt-5"
              style={{ color: "var(--color-text-light)", opacity: 0.5 }}
            >
              India&apos;s leading manufacturer of premium linen and linen blend
              fabrics — trusted by brands, designers, and export markets
              worldwide since 1991.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 mt-7">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Follow Linen Mantra on Instagram"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--color-text-light)", opacity: 0.5 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="Connect on LinkedIn"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--color-text-light)", opacity: 0.5 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:linenmantra@gmail.com"
                aria-label="Email Linen Mantra"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--color-text-light)", opacity: 0.5 }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-label mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-text-light)", opacity: 0.6 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3
              className="text-label mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.8 }}
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918975972300"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-text-light)", opacity: 0.6 }}
                  >
                    +91 89759 72300
                  </a>
                  <a
                    href="tel:+919769422606"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-text-light)", opacity: 0.6 }}
                  >
                    +91 97694 22606
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.8 }}
                />
                <a
                  href="mailto:linenmantra@gmail.com"
                  className="text-sm transition-opacity hover:opacity-70 break-all"
                  style={{ color: "var(--color-text-light)", opacity: 0.6 }}
                >
                  linenmantra@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)", opacity: 0.8 }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-light)", opacity: 0.6 }}
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
      <Divider light />
      <div className="container-site py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-sm"
            style={{ color: "var(--color-text-light)", opacity: 0.35 }}
          >
            &copy; {currentYear} Linen Mantra. All rights reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-light)", opacity: 0.25 }}
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
    </footer>
  );
}
