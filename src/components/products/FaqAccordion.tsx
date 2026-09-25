"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/products";

type Props = {
  faqs: FaqItem[];
  /** Prefix for unique id attributes — prevents collisions when multiple accordions exist */
  idPrefix?: string;
};

export default function FaqAccordion({ faqs, idPrefix = "faq" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const triggerId = `${idPrefix}-trigger-${i}`;

        return (
          <div key={i}>
            {/* Question / trigger */}
            <dt>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left group"
              >
                <span
                  className="text-sm font-medium leading-snug pr-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.q}
                </span>
                {/* +/− icon */}
                <span
                  className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center"
                  aria-hidden="true"
                  style={{ color: "var(--color-accent)" }}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  >
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            {/* Answer / panel */}
            <dd
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <p
                className="pb-5 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.a}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
