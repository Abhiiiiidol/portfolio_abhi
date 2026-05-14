"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  /** rendered height in px — width scales by source aspect ratio (1122/1402) */
  height?: number;
};

export default function AvatarCharacter({ height = 560 }: Props) {
  const width = Math.round(height * (1122 / 1402));

  return (
    <motion.div
      className="relative"
      style={{ height, width }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Subtle lime glow behind — character pops, no visible halo edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 58%, rgba(184,255,46,0.05) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* The image, edge-masked + color-graded + bottom/side fade-to-bg overlays */}
      <div
        className="relative h-full w-full"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 80% at center, #000 50%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 80% at center, #000 50%, transparent 90%)",
        }}
      >
        <Image
          src="/abhinav-v3.png"
          alt="Abhinav, Product Manager"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 460px"
          className="object-contain"
          style={{ filter: "brightness(0.85) contrast(1.1)" }}
        />

        {/* Bottom fade into the page bg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, rgba(5,5,16,0.55) 85%, rgba(5,5,16,1) 100%)",
          }}
        />
        {/* Side fade — pulls left/right edges into the bg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,16,0.85) 0%, transparent 14%, transparent 86%, rgba(5,5,16,0.85) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
