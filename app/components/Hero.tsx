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
    <section ref={sectionRef} aria-label="Introduction" className="relative overflow-hidden px-5 pb-10 pt-24 md:px-10 lg:px-14 lg:pb-16 lg:pt-28">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        <HeroCopy />
        <motion.div className="relative w-full mix-blend-screen" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute left-[7%] top-[3%] z-10 hidden font-[family-name:var(--font-caveat)] text-lg text-white/60 lg:block"
            style={{ transform: "rotate(-6deg)" }}
          >
            From ideas to impact
            <svg className="ml-1.5 mt-0.5" width="30" height="22" viewBox="0 0 40 30" fill="none">
              <path d="M2 2c10 8 22 12 30 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M28 18l5 7-8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.span>

          {/* Screen blend makes the video's black backdrop vanish into the page; contrast crushes its near-black room (rgb ~8) to true black so no box shows */}
          <div
            className="relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 86%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 86%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <video
              className="pointer-events-none block aspect-video w-full object-cover contrast-[1.12]"
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
