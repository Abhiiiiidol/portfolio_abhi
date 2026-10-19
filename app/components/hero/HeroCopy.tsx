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
  { value: "0→1", label: "Product Owned" },
  { value: "4.6L+", label: "Platform Users" },
  { value: "162", label: "Users Heard" },
  { value: "40%", label: "Fewer Drop-offs" },
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
        Product Manager · FinTech &amp; AI
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
        Associate PM at BUSY InfoTech, owning a{" "}
        <span className="text-white">0→1 product</span> on a platform with{" "}
        <span className="text-white">4.6 lakh+ active users</span>. Before that,
        healthcare at MantraCare. I chase user pain, back every call with data,
        and ship what moves <span className="text-white">retention</span>.
      </motion.p>

      <motion.div variants={item} className="flex flex-col items-start gap-6 pt-1 sm:flex-row sm:items-center sm:gap-8">
        <a href="#work" className="btn-slab w-full sm:w-auto">
          See the work
          <span aria-hidden="true">→</span>
        </a>
        <a href="#contact" className="link-editorial">
          Let&apos;s talk
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
