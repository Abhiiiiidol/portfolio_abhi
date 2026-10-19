"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Talk to users, dig through the data, scope the competition. Find the real problem, not the loudest one.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Sharp PRDs and ruthless prioritization. Saying no to ten things so the right one actually ships.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Map the flow, prototype in Figma, write the A/B hypothesis, all before engineering writes a line.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Build in lockstep with engineering, design and QA. Stakeholders stay in the loop, so launch day has no surprises.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "Funnels, retention, drop-off points. Every feature has to earn its spot with data.",
  },
];

export default function ProductThinking() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="eyebrow">How I Think</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="display display-2 mt-4 max-w-3xl text-[var(--text-primary)]">
            Ship to learn, not to impress
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
            I don&apos;t start with solutions. I start with the user, the
            constraints and the business, then ship the smallest thing that
            teaches us the most.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-0 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <motion.div
                className="group relative flex flex-col gap-3 border-l border-[var(--line)] py-6 pl-6 md:border-l-0 md:border-t md:py-0 md:pl-0 md:pt-6"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute -left-px top-0 h-full w-px bg-[var(--lime)] md:hidden"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15 + 0.3,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{ transformOrigin: "top" }}
                />
                <motion.div
                  className="absolute -top-px left-0 hidden h-px w-full bg-[var(--lime)] md:block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15 + 0.3,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{ transformOrigin: "left" }}
                />
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--text-muted)] transition-colors group-hover:text-white">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:pr-4">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
