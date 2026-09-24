"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative isolate overflow-hidden px-6 pb-12 pt-28 md:px-12 lg:min-h-[680px] lg:px-16 lg:pb-20 lg:pt-36">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <HeroCopy />
        <motion.div className="relative mx-auto w-full max-w-[520px] lg:mr-0" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute -left-6 top-4 z-10 hidden font-[family-name:var(--font-caveat)] text-lg text-white/60 lg:block"
            style={{ transform: "rotate(-8deg)" }}
          >
            From ideas to impact
            <svg className="ml-2 mt-1" width="36" height="26" viewBox="0 0 40 30" fill="none">
              <path d="M2 2c10 8 22 12 30 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M28 18l5 7-8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.span>

          <div className="relative overflow-hidden" style={{ maskImage: "radial-gradient(ellipse 85% 80% at 50% 45%, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 45%, black 40%, transparent 100%)" }}>
            <video
              className="pointer-events-none aspect-[3/4] w-full object-cover sm:aspect-[4/5] lg:aspect-[3/4]"
              autoPlay muted loop playsInline preload="metadata"
              poster="/hero-video-poster.jpg"
              aria-label="Introduction video featuring Abhinav Kumar"
            >
              <source src="/hero-video-clean.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
