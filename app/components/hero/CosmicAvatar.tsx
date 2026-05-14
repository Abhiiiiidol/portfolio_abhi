"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import AvatarCharacter from "./AvatarCharacter";
import OrbitRing from "./OrbitRing";
import LabelLayer from "./LabelLayer";
import ParticleField from "./ParticleField";

/**
 * Tight, intimate composition:
 * - Avatar ~560px tall (the focal point)
 * - 3 thin orbit rings, each only modestly bigger than the avatar's torso area
 * - Labels scattered around the edges as quiet thoughts
 * - 7 tiny ambient particles
 *
 * Container is 640x680 — just enough breathing room without becoming a "solar system".
 */
const RING_OUTER = 480; // largest, IN FRONT of avatar (the 3D trick)
const RING_MID = 420;
const RING_INNER = 360;

export default function CosmicAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  const sceneX = useTransform(sx, [-1, 1], [-10, 10]);
  const sceneY = useTransform(sy, [-1, 1], [-8, 8]);
  const particlesX = useTransform(sx, [-1, 1], [8, -8]);
  const particlesY = useTransform(sy, [-1, 1], [6, -6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(nx);
    mouseY.set(ny);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex h-[680px] w-full max-w-[640px] items-center justify-center"
    >
      {/* Particles — ambient dust */}
      <motion.div
        className="absolute inset-0"
        style={{ x: particlesX, y: particlesY, zIndex: 1 }}
      >
        <ParticleField count={7} />
      </motion.div>

      {/* Scene wrapper — subtle mouse parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x: sceneX, y: sceneY }}
      >
        {/* BACK rings — z=5, behind the avatar */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 5 }}>
          <OrbitRing size={RING_MID} rotateZ={60} duration={25} reverse delay={0.2} />
          <OrbitRing size={RING_INNER} rotateZ={120} duration={18} delay={0.4} />
        </div>

        {/* Avatar — z=10, focal point */}
        <div className="relative flex items-end justify-center" style={{ zIndex: 10 }}>
          <AvatarCharacter height={560} />
        </div>

        {/* FRONT ring — z=20, passes IN FRONT of the figure (3D illusion) */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 20 }}>
          <OrbitRing size={RING_OUTER} rotateZ={0} duration={32} delay={0} />
        </div>

        {/* Whisper-size scattered labels — z=30, above everything, never behind the figure */}
        <div className="absolute inset-0" style={{ zIndex: 30 }}>
          <LabelLayer />
        </div>
      </motion.div>
    </div>
  );
}
