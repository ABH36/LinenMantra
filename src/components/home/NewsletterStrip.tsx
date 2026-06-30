"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !agreed) return;
    setStatus("success");
    setEmail("");
    setAgreed(false);
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Left — heading */}
          <FadeInOnScroll direction="up">
            <h2
              className="font-display font-normal leading-snug"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                color: "var(--color-text-primary)",
              }}
            >
              Subscribe for the
              <br />
              exclusive updates!
            </h2>
          </FadeInOnScroll>

          {/* Right — form */}
          <FadeInOnScroll direction="up" delay={0.12}>
            {status === "success" ? (
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--color-cta)" }}
              >
                Thank you for subscribing. We&apos;ll be in touch!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Email row */}
                <div className="flex items-end gap-6">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      required
                      className="w-full bg-transparent text-sm pb-3 outline-none placeholder-shown:opacity-60"
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                        color: "var(--color-text-primary)",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 pb-3 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60 shrink-0 cursor-pointer"
                    style={{
                      color: "var(--color-text-primary)",
                      background: "none",
                      border: "none",
                      fontFamily: "inherit",
                    }}
                  >
                    <Send size={13} />
                    Subscribe
                  </button>
                </div>

                {/* Privacy checkbox */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-3.5 h-3.5 cursor-pointer"
                    style={{ accentColor: "var(--color-cta)" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    I agree to the{" "}
                    <span
                      className="underline"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Privacy Policy
                    </span>
                    .
                  </span>
                </label>
              </form>
            )}
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
