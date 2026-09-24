"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative isolate overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:min-h-[760px] lg:px-16 lg:pb-24 lg:pt-40">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
        <HeroCopy />
        <motion.div className="relative mx-auto w-full max-w-[640px] lg:mr-0" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute -left-8 top-8 z-10 hidden font-[family-name:var(--font-caveat)] text-xl text-white/70 lg:block"
            style={{ transform: "rotate(-8deg)" }}
          >
            From ideas to impact
            <svg className="ml-2 mt-1" width="40" height="30" viewBox="0 0 40 30" fill="none">
              <path d="M2 2c10 8 22 12 30 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M28 18l5 7-8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.span>

          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[540px]">
            <video
              className="pointer-events-none h-full w-full rounded-2xl object-cover"
              autoPlay muted loop playsInline preload="metadata"
              poster="/hero-video-poster.jpg"
              aria-label="Introduction video featuring Abhinav Kumar"
            >
              <source src="/hero-video-clean.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 rounded-2xl" aria-hidden="true" style={{ background: "linear-gradient(to top, var(--cosmic-bg) 0%, transparent 30%), linear-gradient(to bottom, var(--cosmic-bg) 0%, transparent 20%), linear-gradient(to left, var(--cosmic-bg) 0%, transparent 15%), linear-gradient(to right, var(--cosmic-bg) 0%, transparent 15%)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
