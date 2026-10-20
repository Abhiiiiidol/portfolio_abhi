"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Stop decoding the video once it's scrolled away; it's the most expensive thing on the page.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative overflow-hidden px-5 pb-12 pt-24 md:px-10 lg:px-14 lg:pb-20 lg:pt-28">
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        <HeroCopy />
        <motion.div className="relative w-full" style={{ y: mediaY, opacity: mediaOpacity }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>
          {/* Baked with ffmpeg: grayscale except the light rings (shifted to sapphire), blacks crushed after the colour pass so the backdrop is true #000 */}
          <div
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 86%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 86%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <video
              ref={videoRef}
              className="pointer-events-none block aspect-video w-full object-cover"
              autoPlay muted loop playsInline preload="metadata"
              poster="/hero-video-sapphire-v2-poster.jpg"
              aria-label="Introduction video featuring Abhinav Kumar"
            >
              <source src="/hero-video-sapphire-v2.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
