"use client";

import { motion, type Variants } from "framer-motion";

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

export default function HeroCopy() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6 text-left"
    >
      <motion.span
        variants={item}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--lime)]/30 bg-[rgba(var(--accent-rgb),0.06)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lime)] backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-warm)]" />
        Available for new opportunities
      </motion.span>

      <motion.h1
        variants={item}
        className="text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.4rem]"
      >
        Hi, I&apos;m{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[var(--lime)] via-[var(--accent-3)] to-[var(--accent-2)] bg-clip-text text-transparent">
            Abhinav
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
        className="text-2xl font-medium leading-tight text-[var(--text-secondary)] sm:text-3xl"
      >
        I build products people love.
      </motion.h2>

      <motion.p
        variants={item}
        className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-[17px]"
      >
        Product Manager with{" "}
        <span className="text-[var(--text-primary)]">2+ years</span> shipping across
        FinTech, Healthcare, E-Commerce, and Logistics. I pair deep{" "}
        <span className="text-[var(--lime)]">user empathy</span> with sharp{" "}
        <span className="text-[var(--lime)]">product strategy</span> to turn ambiguity
        into roadmaps that ship.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
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
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-hover)] px-7 text-sm font-medium text-[var(--text-primary)] backdrop-blur-sm transition-colors hover:border-[var(--lime)]/50 hover:bg-[rgba(var(--accent-rgb),0.06)]"
        >
          Get in touch
        </a>
      </motion.div>
    </motion.div>
  );
}
