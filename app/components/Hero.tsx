"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const mediaRotate = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative isolate overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:min-h-[760px] lg:px-16 lg:pb-24 lg:pt-40">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <HeroCopy />
        <motion.div className="relative mx-auto w-full max-w-[640px] lg:mr-0" style={{ y: mediaY, rotate: mediaRotate, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="absolute -right-4 -top-4 z-20 rounded-full bg-[var(--lime)] px-4 py-2 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[.16em] text-white shadow-lg" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>Open to work</motion.div>
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] border border-[var(--lime)]/20" aria-hidden="true" />
          <div className="absolute inset-x-8 bottom-2 h-20 rounded-full bg-[#f05a3d]/30 blur-3xl" aria-hidden="true" />
          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/20 bg-[#24201f] shadow-2xl shadow-black/30">
            <video className="pointer-events-none h-full w-full object-contain" autoPlay muted loop playsInline preload="metadata" poster="/hero-video-poster.jpg" aria-label="Introduction video featuring Abhinav Kumar"><source src="/hero-video-clean.mp4" type="video/mp4" /></video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171514]/75 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[.16em] text-white/75"><span>Product manager</span><span>New Delhi, India</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
