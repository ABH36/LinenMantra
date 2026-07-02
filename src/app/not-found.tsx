import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-20 bg-[var(--color-bg-secondary)]">
      <div className="container-site text-center max-w-lg">
        <span
          className="font-display font-normal block mb-6 opacity-15 select-none text-[var(--color-text-primary)]"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)", lineHeight: 1 }}
        >
          404
        </span>
        <h1 className="font-display font-normal mb-4 text-[var(--text-h2)] text-[var(--color-text-primary)]">
          Page Not Found
        </h1>
        <span className="block h-px w-10 mx-auto mb-6 bg-[var(--color-accent)]" />
        <p className="mb-10 max-w-sm mx-auto text-[var(--color-text-secondary)]">
          The page you were looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80 group bg-[var(--color-cta)] text-[var(--color-text-light)]"
          >
            <span>Back to Home</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-widest uppercase border transition-opacity hover:opacity-70 border-[var(--color-border)] text-[var(--color-text-secondary)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
