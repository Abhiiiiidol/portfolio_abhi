"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const CERTS = [
  "GenAI Lead — Google",
  "Forward Learner — McKinsey",
  "Breaking into Product Management",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 md:px-12 lg:flex-row lg:gap-20 lg:px-16">
        <FadeIn className="relative shrink-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative h-[320px] w-[260px] overflow-hidden rounded-2xl lg:h-[400px] lg:w-[320px]"
          >
            <Image
              src="/abhinav.jpeg"
              alt="Abhinav Kumar"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 260px, 320px"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(var(--accent-rgb),0.15)",
              }}
            />
          </motion.div>
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-3xl"
            style={{ background: "rgba(var(--accent-rgb),0.08)" }}
          />
        </FadeIn>

        <div className="flex flex-col gap-6">
          <FadeIn>
            <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
              About
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight text-[var(--text-primary)] lg:text-4xl">
              I turn ambiguity into
              <br />
              products that ship.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m a Product Manager who believes great products come from
              deeply understanding users, not from following frameworks blindly.
              I combine user research with data-driven decision making to ship
              products that create measurable impact.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              My approach: start with the user&apos;s pain, validate with data,
              ship fast, and iterate based on real feedback. I&apos;ve applied
              this across{" "}
              <span className="text-[var(--text-primary)]">
                FinTech, Healthcare, E-Commerce, and Logistics
              </span>{" "}
              — each domain teaching me something different about how people
              interact with technology.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-sm text-[var(--text-muted)]">
                BTech in CSE — VIT Bhopal (8.02 GPA)
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-[var(--accent-warm)]/20 bg-[var(--accent-warm)]/5 px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
