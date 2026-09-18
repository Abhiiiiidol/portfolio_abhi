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

          <div className="absolute -inset-10 rounded-full bg-[rgb(var(--accent-rgb))]/10 blur-[80px]" aria-hidden="true" />
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <video className="pointer-events-none h-full w-full scale-105 object-cover" autoPlay muted loop playsInline preload="metadata" poster="/hero-video-poster.jpg" aria-label="Introduction video featuring Abhinav Kumar"><source src="/hero-video-clean.mp4" type="video/mp4" /></video>
            <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, var(--cosmic-bg) 100%)" }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cosmic-bg)] via-transparent to-[var(--cosmic-bg)]/40" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--cosmic-bg)]/50 via-transparent to-[var(--cosmic-bg)]/50" aria-hidden="true" />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[.16em] text-white/50"><span>Product manager</span><span>New Delhi, India</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
