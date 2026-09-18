"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.05 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.05 });

  const ringX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.2 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]") ||
        target.closest("[role='button']")
      ) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]") ||
        target.closest("[role='button']")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  const ringSize = hovering ? 48 : 36;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full bg-[var(--lime)]"
        style={{
          width: 8,
          height: 8,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full border border-[var(--lime)]/40"
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
