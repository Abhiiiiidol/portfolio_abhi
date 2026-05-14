"use client";

import { motion } from "framer-motion";

export default function AuraGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* Core lime glow — bright and tight */}
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,255,46,0.35) 0%, rgba(184,255,46,0.12) 35%, transparent 70%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid halo — softer purple-tinted */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(140,100,255,0.18) 0%, rgba(184,255,46,0.06) 45%, transparent 75%)",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Outer ambient bloom */}
      <motion.div
        className="absolute h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,255,46,0.08) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
