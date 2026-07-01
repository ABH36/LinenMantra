"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
    <section
      className="w-full relative overflow-hidden bg-[var(--color-cta)]"
    >
      {/* Subtle leaf watermarks — far left + far right */}
      <div
        className="absolute inset-y-0 left-0 w-40 pointer-events-none"
        style={{
          backgroundImage:    "url('/images/about/footer/footerbackground.png')",
          backgroundRepeat:   "no-repeat",
          backgroundSize:     "auto 220%",
          backgroundPosition: "left center",
          opacity:             0.07,
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-40 pointer-events-none"
        style={{
          backgroundImage:    "url('/images/about/footer/footerbackground.png')",
          backgroundRepeat:   "no-repeat",
          backgroundSize:     "auto 220%",
          backgroundPosition: "right center",
          opacity:             0.07,
          transform:           "scaleX(-1)",
        }}
      />

      <div className="relative z-10 container-site py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">

          {/* Left — icon + heading + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-start gap-5"
          >
            {/* Circular mail icon */}
            <div
              className="flex items-center justify-center shrink-0 rounded-full border"
              style={{
                width:  52,
                height: 52,
                borderColor: "rgba(248,245,240,0.45)",
                color:       "var(--color-text-light)",
              }}
            >
              <Mail size={20} />
            </div>

            <div>
              <h2
                className="font-display font-normal leading-tight"
                style={{
                  fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
                  color:    "var(--color-text-light)",
                }}
              >
                Stay Inspired with Linen Mantra
              </h2>
              <p
                className="mt-1.5 text-sm leading-relaxed max-w-sm"
                style={{ color: "rgba(248,245,240,0.65)" }}
              >
                Subscribe to our newsletter and be the first to know about new
                arrivals, collections and exclusive offers.
              </p>
            </div>
          </motion.div>

          {/* Right — input + button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
            className="w-full md:w-auto md:min-w-[420px] shrink-0"
          >
            {status === "success" ? (
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-light)" }}
              >
                Thank you! We&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch h-12">
                {/* Input with mail icon inside */}
                <div className="relative flex-1 min-w-0">
                  <Mail
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "rgba(248,245,240,0.55)" }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-full pl-9 pr-4 text-sm outline-none focus:ring-0 focus:border-transparent"
                    style={{
                      backgroundColor: "rgba(248,245,240,0.10)",
                      border:          "1px solid rgba(248,245,240,0.28)",
                      borderRight:     "none",
                      color:           "var(--color-text-light)",
                      fontFamily:      "inherit",
                      outline:         "none",
                    }}
                  />
                </div>

                {/* Gold subscribe button */}
                <button
                  type="submit"
                  className="px-7 text-[11px] font-bold tracking-widest uppercase rounded-r shrink-0 cursor-pointer transition-opacity hover:opacity-85 flex items-center gap-2.5"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    color:           "var(--color-text-light)",
                    border:          "none",
                    fontFamily:      "inherit",
                  }}
                >
                  <span>Subscribe</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
