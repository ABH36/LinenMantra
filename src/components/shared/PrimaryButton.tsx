"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

export default function PrimaryButton({
  label,
  href,
  onClick,
  showArrow = true,
  type = "button",
  disabled = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const style = {
    backgroundColor: "var(--color-cta)",
    color: "var(--color-text-light)",
  } as React.CSSProperties;

  const hoverStyle = {
    "--hover-bg": "var(--color-accent-hover)",
  } as React.CSSProperties;

  if (href) {
    return (
      <Link href={href} className={`${base} ${className} group`} style={style}>
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
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ backgroundColor: "var(--color-cta-hover)" }}
      transition={{ duration: 0.2 }}
      className={`${base} ${className} group cursor-pointer`}
      style={style}
    >
      <span>{label}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </motion.button>
  );
}
