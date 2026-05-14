"use client";

import { motion } from "framer-motion";

type Props = {
  /** ring "diameter" in px — actual horizontal size of the ellipse */
  size: number;
  /** initial rotateZ offset (degrees) — staggers visual orientation */
  rotateZ: number;
  /** seconds for one full revolution */
  duration: number;
  reverse?: boolean;
  delay?: number;
};

/**
 * A thin, subtle orbit ring tilted 70° around X so it reads as an elliptical
 * orbital plane. Continuously rotates around its own normal. Tight around the
 * upper body — these are "thoughts circling the mind," not a solar system.
 */
export default function OrbitRing({ size, rotateZ, duration, reverse = false, delay = 0 }: Props) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 70, rotateZ }}
        animate={{
          rotateX: 70,
          rotateZ: rotateZ + (reverse ? -360 : 360),
        }}
        transition={{
          rotateZ: { duration, repeat: Infinity, ease: "linear", delay },
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(184,255,46,0.12)",
            boxShadow: "0 0 8px rgba(184,255,46,0.06)",
          }}
        />
      </motion.div>
    </div>
  );
}
