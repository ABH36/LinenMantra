"use client";

import { useState, FormEvent } from "react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function NewsletterStrip() {
  const [email,  setEmail]  = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <section className="w-full py-6 md:py-8 bg-[var(--color-cta)]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left — heading + subtitle */}
          <FadeInOnScroll direction="up">
            <h2
              className="font-display font-normal leading-tight"
              style={{ fontSize: "clamp(1.4rem,2.2vw,1.9rem)", color: "var(--color-text-light)" }}
            >
              Subscribe to Newsletter
            </h2>
            <p
              className="mt-1.5 text-sm leading-relaxed"
              style={{ color: "rgba(248,245,240,0.65)" }}
            >
              Get the latest fabric updates directly to your inbox.
            </p>
          </FadeInOnScroll>

          {/* Right — inline input + button */}
          <FadeInOnScroll direction="up" delay={0.12} className="w-full md:w-auto md:min-w-[420px] shrink-0">
            {status === "success" ? (
              <p className="text-sm font-medium text-[var(--color-text-light)]">
                Thank you! We&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch h-12">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 min-w-0 px-4 text-sm outline-none"
                  style={{
                    backgroundColor: "rgba(248,245,240,0.12)",
                    border:          "1px solid rgba(248,245,240,0.28)",
                    borderRight:     "none",
                    color:           "var(--color-text-light)",
                    fontFamily:      "inherit",
                  }}
                />
                <button
                  type="submit"
                  className="px-7 text-xs font-semibold tracking-widest uppercase shrink-0 cursor-pointer transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: "var(--color-text-light)",
                    color:           "var(--color-cta)",
                    border:          "none",
                    fontFamily:      "inherit",
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
