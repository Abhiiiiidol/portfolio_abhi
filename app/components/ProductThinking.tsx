"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "User interviews, data analysis, and competitive research to find the real problem — not the assumed one.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "PRDs, problem framing, and ruthless prioritization. Say no to 10 things to say yes to the right one.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Prototyping in Figma, user flow mapping, and A/B test hypotheses before engineering writes a single line.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Tight collaboration with engineering, clear API contracts, and stakeholder alignment to ship without surprises.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "Funnel analysis, retention tracking, and KPI dashboards. Every shipped feature earns its place with data.",
  },
];

export default function ProductThinking() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
            How I Think
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] lg:text-4xl">
            Product thinking, not feature shipping
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
            I don&apos;t start with solutions. I start with users, constraints,
            and the business context — then work toward the smallest thing we
            can ship to learn the most.
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
                className="group relative flex flex-col gap-3 border-l border-black/[0.06] py-6 pl-6 md:border-l-0 md:border-t md:py-0 md:pl-0 md:pt-6"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute -left-px top-0 h-0 w-px bg-[var(--lime)] md:-top-px md:left-0 md:h-px md:w-0"
                  initial={{ height: 0, width: 0 }}
                  whileInView={{
                    height: "100%",
                    width: "100%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15 + 0.3,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{
                    boxShadow: "0 0 8px rgba(217,80,53,0.3)",
                  }}
                />
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--lime)] transition-all group-hover:text-[var(--lime-soft)]">
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
