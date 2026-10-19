"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";
import HeroOrbit from "./hero/HeroOrbit";

const EDGE_FEATHER =
  "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 86%, transparent 100%)";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const [offscreen, setOffscreen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative overflow-hidden px-5 pb-12 pt-24 md:px-10 lg:px-14 lg:pb-16 lg:pt-28">
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        <HeroCopy />
        <motion.div className="relative mx-auto w-full max-w-[600px] lg:mr-0" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>
          <div
            style={{
              maskImage: EDGE_FEATHER,
              WebkitMaskImage: EDGE_FEATHER,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <HeroOrbit paused={offscreen} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
