"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect if we're on the homepage (transparent hero header)
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check on mount in case page loads mid-scroll
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On inner pages, header is always solid
  const isSolid = !isHome || scrolled;

  // Homepage hero is dark — transparent header with light text
  // Inner pages / scrolled — solid cream header with dark text
  const headerBg = isSolid
    ? "bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]"
    : "bg-transparent";

  const linkColor = isSolid ? "var(--color-text-secondary)" : "rgba(248,245,240,0.75)";
  const linkActiveColor = isSolid ? "var(--color-text-primary)" : "rgba(248,245,240,1)";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${headerBg}`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[90px] md:h-[104px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-75"
              aria-label="Linen Mantra — Home"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Linen Mantra"
                width={1536}
                height={1024}
                priority
                className="h-[84px] md:h-[98px] w-auto transition-all duration-300"
                style={{
                  filter: isSolid ? "none" : "invert(1) brightness(1.1)",
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
               {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold tracking-wide transition-all duration-200 link-underline"
                    style={{
                      color: isActive ? linkActiveColor : linkColor,
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA + Mobile menu trigger */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:opacity-80"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-light)",
                }}
              >
                Send Enquiry
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2 transition-opacity hover:opacity-60 cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu
                  size={22}
                  color={isSolid ? "var(--color-text-primary)" : "rgba(248,245,240,0.9)"}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
