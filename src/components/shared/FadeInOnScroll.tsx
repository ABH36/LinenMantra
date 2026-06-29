"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

const getInitial = (direction: Direction) => {
  switch (direction) {
    case "up":    return { opacity: 0, y: 32 };
    case "down":  return { opacity: 0, y: -32 };
    case "left":  return { opacity: 0, x: 32 };
    case "right": return { opacity: 0, x: -32 };
    case "none":  return { opacity: 0 };
  }
};

const getAnimate = (direction: Direction) => {
  switch (direction) {
    case "up":
    case "down":  return { opacity: 1, y: 0 };
    case "left":
    case "right": return { opacity: 1, x: 0 };
    case "none":  return { opacity: 1 };
  }
};

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={inView ? getAnimate(direction) : getInitial(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
