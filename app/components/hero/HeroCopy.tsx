"use client";

import { motion, type Variants } from "framer-motion";
import RotatingText from "../RotatingText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
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
      <motion.span variants={item} className="eyebrow flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-[var(--lime)]" />
        Product Manager
      </motion.span>

      <motion.h1
        variants={item}
        className="display text-[clamp(2.5rem,4.4vw,3.75rem)] text-white"
      >
        Hi, I&apos;m{" "}
        <motion.span
          className="inline-block text-[var(--lime)]"
          initial={{ opacity: 0, y: "0.15em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
        >
          Abhinav
        </motion.span>
      </motion.h1>

      <motion.h2
        variants={item}
        className="min-h-[2.6em] text-[clamp(1rem,1.6vw,1.25rem)] leading-snug text-[var(--text-secondary)] sm:min-h-[1.4em]"
      >
        <RotatingText />
      </motion.h2>

      <motion.p
        variants={item}
        className="max-w-lg text-[clamp(0.875rem,1.15vw,0.95rem)] leading-relaxed text-[var(--text-secondary)]"
      >
        Product Manager with{" "}
        <span className="text-white">2+ years</span> of experience across
        FinTech, Healthcare, E-Commerce and Logistics. I combine deep{" "}
        <span className="text-white">user empathy</span> with data-driven{" "}
        <span className="text-white">product strategy</span> to build scalable,
        real-world solutions.
      </motion.p>

      <motion.div variants={item} className="flex flex-col items-start gap-6 pt-1 sm:flex-row sm:items-center sm:gap-8">
        <a href="#work" className="btn-slab w-full sm:w-auto">
          See my work
          <span aria-hidden="true">→</span>
        </a>
        <a href="#contact" className="link-editorial">
          Get in touch
          <svg aria-hidden="true" width="28" height="10" viewBox="0 0 28 10" fill="none">
            <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
      </motion.div>

      <motion.dl
        variants={item}
        className="mt-3 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[var(--line)] pt-5 sm:grid-cols-4 sm:gap-x-0"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse justify-end gap-1 ${i > 0 ? "sm:border-l sm:border-[var(--line)] sm:pl-4" : ""}`}
          >
            <dt className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] xl:whitespace-nowrap">
              {stat.label}
            </dt>
            <dd className="text-2xl font-medium tabular-nums text-white">{stat.value}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.div>
  );
}
