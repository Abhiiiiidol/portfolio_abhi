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

          <div className="absolute inset-x-8 -bottom-2 h-24 rounded-full bg-[rgb(var(--accent-rgb))]/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#1a1a1a] shadow-2xl shadow-black/50" style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset" }}>
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#161616] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-auto font-[family-name:var(--font-geist-mono)] text-[10px] tracking-wider text-white/30">abhinav.dev</span>
            </div>
            <div className="relative aspect-video">
              <video className="pointer-events-none h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/hero-video-poster.jpg" aria-label="Introduction video featuring Abhinav Kumar"><source src="/hero-video-clean.mp4" type="video/mp4" /></video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} aria-hidden="true" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[.16em] text-white/60"><span>Product manager</span><span>New Delhi, India</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
