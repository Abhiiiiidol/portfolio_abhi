"use client";

import { motion } from "framer-motion";

type ScatteredLabel = {
  text: string;
  /** position as percentage offset from container center: -50 = far left, +50 = far right */
  xPct: number;
  yPct: number;
  /** seconds per float cycle (5-8s range — whisper-quiet) */
  duration: number;
  /** float amplitude in px */
  amplitude: number;
  direction: "y" | "x" | "diag";
  variant?: "domain" | "strength";
  delay?: number;
};

/**
 * Six whisper-quiet labels scattered around the avatar — like passing thoughts.
 * NOT on orbits. Each floats independently. Strengths sit closest to the figure.
 */
const LABELS: ScatteredLabel[] = [
  // Top-left  — FinTech
  { text: "FinTech", xPct: -38, yPct: -34, duration: 6, amplitude: 5, direction: "y", delay: 0.1 },
  // Top-right — Healthcare
  { text: "Healthcare", xPct: 36, yPct: -32, duration: 7, amplitude: 6, direction: "diag", delay: 0.2 },
  // Mid-left — E-Commerce
  { text: "E-Commerce", xPct: -42, yPct: 4, duration: 5.5, amplitude: 4, direction: "x", delay: 0.3 },
  // Mid-right — Logistics
  { text: "Logistics", xPct: 40, yPct: 6, duration: 8, amplitude: 5, direction: "y", delay: 0.4 },
  // Bottom-left — User Empathy (strength, closer to figure)
  { text: "User Empathy", xPct: -30, yPct: 32, duration: 5, amplitude: 4, direction: "diag", variant: "strength", delay: 0.5 },
  // Bottom-right — Product Strategy (strength, closer to figure)
  { text: "Product Strategy", xPct: 28, yPct: 34, duration: 7, amplitude: 5, direction: "y", variant: "strength", delay: 0.6 },
];

export default function LabelLayer() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {LABELS.map((label, i) => (
        <FloatingLabel key={`${label.text}-${i}`} {...label} />
      ))}
    </div>
  );
}

function FloatingLabel({
  text,
  xPct,
  yPct,
  duration,
  amplitude,
  direction,
  variant = "domain",
  delay = 0,
}: ScatteredLabel) {
  const isStrength = variant === "strength";

  const driftAnim =
    direction === "y"
      ? { y: [0, -amplitude, 0] }
      : direction === "x"
        ? { x: [0, amplitude * 0.6, 0] }
        : { y: [0, -amplitude, 0], x: [0, amplitude * 0.4, 0] };

  return (
    <div
      className="absolute"
      style={{
        left: `${50 + xPct}%`,
        top: `${50 + yPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={driftAnim}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="whitespace-nowrap uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "1.5px",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: "20px",
              background: "rgba(10,10,20,0.6)",
              border: isStrength
                ? "1px solid rgba(184,255,46,0.3)"
                : "1px solid rgba(184,255,46,0.12)",
              color: "rgba(184,255,46,0.6)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {text}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
