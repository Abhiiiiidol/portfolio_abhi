"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative isolate overflow-hidden px-5 pb-10 pt-24 md:px-10 lg:px-14 lg:pb-16 lg:pt-28">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        <HeroCopy />
        <motion.div className="relative mx-auto w-full max-w-[460px] lg:mr-0" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute -left-4 top-2 z-10 hidden font-[family-name:var(--font-caveat)] text-base text-white/60 lg:block"
            style={{ transform: "rotate(-8deg)" }}
          >
            From ideas to impact
            <svg className="ml-1.5 mt-0.5" width="30" height="22" viewBox="0 0 40 30" fill="none">
              <path d="M2 2c10 8 22 12 30 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M28 18l5 7-8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.span>

          <div
            className="relative"
            style={{
              maskImage: "radial-gradient(ellipse 60% 55% at 55% 45%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 55% 45%, black 20%, transparent 70%)",
            }}
          >
            <video
              className="pointer-events-none aspect-[3/4] w-full scale-110 object-cover sm:aspect-[4/5] lg:aspect-[3/4]"
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
