import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center pt-20"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container-site text-center max-w-lg">
        <span
          className="font-display font-normal block mb-6 opacity-15 select-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 12rem)",
            color: "var(--color-text-primary)",
            lineHeight: 1,
          }}
        >
          404
        </span>
        <h1
          className="font-display font-normal mb-4"
          style={{
            fontSize: "var(--text-h2)",
            color: "var(--color-text-primary)",
          }}
        >
          Page Not Found
        </h1>
        <span
          className="block h-px w-10 mx-auto mb-6"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        <p className="mb-10 max-w-sm mx-auto" style={{ color: "var(--color-text-secondary)" }}>
          The page you were looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80 group"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-light)",
            }}
          >
            <span>Back to Home</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-widest uppercase border transition-opacity hover:opacity-70"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
