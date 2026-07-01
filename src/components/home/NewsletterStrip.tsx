"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const CREAM    = "var(--color-text-light)";
const CREAM_60 = "rgba(248,245,240,0.60)";
const CREAM_55 = "rgba(248,245,240,0.55)";

export default function NewsletterStrip() {
  const [email,  setEmail]  = useState("");
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
      className="w-full py-14 md:py-16"
      style={{ backgroundColor: "var(--color-cta)" }}
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left — heading */}
          <FadeInOnScroll direction="up">
            <h2
              className="font-display font-normal leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                color: CREAM,
              }}
            >
              Subscribe for the
              <br />
              exclusive updates!
            </h2>
          </FadeInOnScroll>

          {/* Right — form */}
          <FadeInOnScroll direction="up" delay={0.12} className="shrink-0">
            {status === "success" ? (
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: CREAM }}
              >
                Thank you for subscribing. We&apos;ll be in touch!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Email + button row */}
                <div className="flex items-end gap-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    required
                    className="flex-1 bg-transparent text-sm pb-3 outline-none"
                    style={{
                      borderBottom: `1px solid ${CREAM_55}`,
                      color:        CREAM,
                      fontFamily:   "inherit",
                      minWidth:     "220px",
                    }}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:bg-white/10 shrink-0 cursor-pointer"
                    style={{
                      border:     `1px solid ${CREAM_55}`,
                      color:      CREAM,
                      background: "none",
                      fontFamily: "inherit",
                    }}
                  >
                    <Send size={12} />
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
                    style={{ accentColor: CREAM }}
                  />
                  <span className="text-xs" style={{ color: CREAM_60 }}>
                    I agree to the{" "}
                    <span className="underline" style={{ color: CREAM }}>
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
