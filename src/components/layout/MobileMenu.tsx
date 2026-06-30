"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
};

export default function MobileMenu({ isOpen, onClose, currentPath }: Props) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(28,28,26,0.5)" }}
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm flex flex-col"
            style={{ backgroundColor: "var(--color-bg-dark)" }}
          >
            {/* Top bar — logo + close */}
            <div className="flex items-center justify-between px-8 py-5">
              <Image
                src="/images/logo/logo.png"
                alt="Linen Mantra"
                width={1536}
                height={1024}
                style={{
                  width: "auto",
                  height: "38px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <button
                onClick={onClose}
                className="p-2 transition-opacity hover:opacity-60 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={22} color="var(--color-text-light)" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-2">
              {navLinks.map((link, i) => {
                const isActive = currentPath === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 font-display text-3xl font-normal transition-opacity hover:opacity-60"
                      style={{
                        color: isActive
                          ? "var(--color-accent)"
                          : "var(--color-text-light)",
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom — Enquiry CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="px-10 pb-12"
            >
              <div
                className="h-px w-full mb-8"
                style={{ backgroundColor: "var(--color-border-dark)" }}
              />
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: "var(--color-accent)" }}
              >
                Get a Quote
              </Link>
              <p
                className="mt-6 text-sm leading-relaxed opacity-40"
                style={{ color: "var(--color-text-light)" }}
              >
                linenmantra@gmail.com
              </p>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
