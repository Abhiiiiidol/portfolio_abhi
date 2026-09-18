"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  as = "div",
  strength = 0.35,
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | "button";
  strength?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouse(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
