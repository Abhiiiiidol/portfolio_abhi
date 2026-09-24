"use client";

import { motion, type Variants } from "framer-motion";
import TextScramble from "../TextScramble";
import RotatingText from "../RotatingText";
import MagneticButton from "../MagneticButton";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Products Shipped" },
  { value: "4.6L+", label: "Users Impacted" },
  { value: "4+", label: "Industries" },
];

export default function HeroCopy() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5 text-left"
    >
      <motion.span
        variants={item}
        className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-primary)] backdrop-blur-sm"
      >
        <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
        Product Manager
      </motion.span>

      <motion.h1
        variants={item}
        className="text-3xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[3rem]"
      >
        Hi, I&apos;m{" "}
        <span className="relative inline-block">
          <span className="text-[var(--lime)]">
            <TextScramble text="Abhinav" delay={600} />
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 blur-2xl"
            style={{ background: "rgba(var(--accent-rgb),0.25)" }}
          />
        </span>
      </motion.h1>

      <motion.h2
        variants={item}
        className="min-h-[2.4em] text-lg font-medium leading-tight text-[var(--text-secondary)] sm:min-h-[1.4em] sm:text-xl lg:text-2xl"
      >
        <RotatingText />
      </motion.h2>

      <motion.p
        variants={item}
        className="max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)] sm:text-base"
      >
        Product Manager with{" "}
        <span className="font-semibold text-[var(--text-primary)]">2+ years</span> of experience across
        FinTech, Healthcare, E-Commerce and Logistics. I combine deep{" "}
        <span className="text-[var(--lime)]">user empathy</span> with data-driven{" "}
        <span className="text-[var(--lime)]">product strategy</span> to build scalable,
        real-world solutions.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
        <MagneticButton strength={0.3} data-magnetic>
          <a
            href="#work"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[var(--lime-deep)] via-[var(--lime)] to-[var(--accent-3)] px-7 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ boxShadow: "0 0 32px rgba(var(--accent-rgb),0.4)" }}
          >
            See my work
            <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </MagneticButton>
        <MagneticButton strength={0.3} data-magnetic>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-7 text-sm font-medium text-[var(--text-primary)] backdrop-blur-sm transition-colors hover:border-[var(--lime)]/40 hover:bg-white/[0.08]"
          >
            Get in touch
          </a>
        </MagneticButton>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-x-8"
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`flex flex-col gap-0.5 ${i > 0 ? "sm:border-l sm:border-white/[0.06] sm:pl-8" : ""}`}>
            <span className="font-[family-name:var(--font-geist-mono)] text-xl font-bold text-[var(--lime)] lg:text-2xl">
              {stat.value}
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
