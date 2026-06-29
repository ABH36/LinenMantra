"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  light?: boolean;
  className?: string;
};

export default function SecondaryButton({
  label,
  href,
  onClick,
  showArrow = false,
  light = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase border transition-all duration-300 group";

  const colorStyle: React.CSSProperties = light
    ? {
        borderColor: "var(--color-text-light)",
        color: "var(--color-text-light)",
      }
    : {
        borderColor: "var(--color-text-primary)",
        color: "var(--color-text-primary)",
      };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${className} hover:opacity-70`}
        style={colorStyle}
      >
        <span>{label}</span>
        {showArrow && (
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${className} hover:opacity-70 cursor-pointer`}
      style={colorStyle}
    >
      <span>{label}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
