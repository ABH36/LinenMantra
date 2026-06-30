"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, type EnquiryFormData } from "@/lib/emailjs";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

type FieldStatus = "idle" | "sending" | "success" | "error";

const productOptions = [
  "Pure Linen Shirting",
  "Pure Linen Suiting",
  "Linen Blends",
  "Designer / Luxury Fabric",
  "Custom Development",
  "General Enquiry",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  fontSize: "0.875rem",
  outline: "none",
  border: "1px solid var(--color-border)",
  backgroundColor: "var(--color-bg-primary)",
  color: "var(--color-text-primary)",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FieldStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [focused, setFocused] = useState<string | null>(null);

  function validate(data: EnquiryFormData): boolean {
    const errs: typeof errors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const data: EnquiryFormData = {
      name: (fd.get("name") as string) || "",
      email: (fd.get("email") as string) || "",
      phone: (fd.get("phone") as string) || undefined,
      company: (fd.get("company") as string) || undefined,
      message: (fd.get("message") as string) || "",
    };

    if (!validate(data)) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    color: "var(--color-text-muted)",
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor:
      focused === field
        ? "var(--color-accent)"
        : errors[field as keyof EnquiryFormData]
        ? "#c0392b"
        : "var(--color-border)",
  });

  if (status === "success") {
    return (
      <FadeInOnScroll direction="up">
        <div
          className="flex flex-col items-center justify-center text-center py-20 px-8"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-secondary)",
          }}
        >
          <div
            className="w-14 h-14 flex items-center justify-center mb-6"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11L9 16L18 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3
            className="font-display font-normal mb-3"
            style={{
              fontSize: "var(--text-h3)",
              color: "var(--color-text-primary)",
            }}
          >
            Enquiry Sent
          </h3>
          <p className="text-sm max-w-xs" style={{ color: "var(--color-text-secondary)" }}>
            Thank you for reaching out. Our team will review your enquiry and respond within 1–2 business days.
          </p>
        </div>
      </FadeInOnScroll>
    );
  }

  return (
    <FadeInOnScroll direction="up" delay={0.1}>
      <div
        className="p-8 md:p-10"
        style={{
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg-primary)",
        }}
      >
        <h3
          className="font-display font-normal mb-1"
          style={{
            fontSize: "var(--text-h3)",
            color: "var(--color-text-primary)",
          }}
        >
          Send an Enquiry
        </h3>
        <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>
          Fields marked with <span style={{ color: "var(--color-accent)" }}>*</span> are required.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                style={focusStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              {errors.name && (
                <p className="text-xs mt-1" style={{ color: "#c0392b" }}>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                style={focusStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
              {errors.email && (
                <p className="text-xs mt-1" style={{ color: "#c0392b" }}>{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" style={labelStyle}>Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 000 000 0000"
                style={focusStyle("phone")}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div>
              <label htmlFor="company" style={labelStyle}>Company / Brand</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                style={focusStyle("company")}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused(null)}
              />
            </div>
          </div>

          {/* Interest / category */}
          <div>
            <label htmlFor="interest" style={labelStyle}>I&apos;m Interested In</label>
            <select
              id="interest"
              name="interest"
              style={{
                ...inputBase,
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239C9490' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                paddingRight: "2.5rem",
                cursor: "pointer",
              }}
              onFocus={() => setFocused("interest")}
              onBlur={() => setFocused(null)}
            >
              {productOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" style={labelStyle}>
              Message <span style={{ color: "var(--color-accent)" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your fabric requirements — count, quantity, composition, end use..."
              style={{
                ...focusStyle("message"),
                resize: "vertical",
                minHeight: "130px",
              }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
            {errors.message && (
              <p className="text-xs mt-1" style={{ color: "#c0392b" }}>{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-opacity group"
              style={{
                backgroundColor:
                  status === "sending"
                    ? "var(--color-text-muted)"
                    : "var(--color-cta)",
                color: "var(--color-text-light)",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                border: "none",
                fontFamily: "inherit",
              }}
            >
              <span>{status === "sending" ? "Sending..." : "Get a Quote"}</span>
              {status !== "sending" && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              )}
            </button>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              We respond within 1–2 business days.
            </p>
          </div>

          {status === "error" && (
            <p className="text-sm p-4" style={{ backgroundColor: "#fdf2f2", color: "#c0392b", border: "1px solid #f5c6cb" }}>
              Something went wrong. Please try again or email us directly at{" "}
              <a href="mailto:info@linenmantra.com" className="underline">info@linenmantra.com</a>
            </p>
          )}
        </form>
      </div>
    </FadeInOnScroll>
  );
}
