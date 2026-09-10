"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

type Project = {
  title: string;
  category: string;
  problem: string;
  outcome: string;
  metric?: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Payment Gateway & Connected Banking",
    category: "FinTech · BUSY InfoTech",
    problem:
      "Businesses on BUSY faced fragmented payment flows with high friction — leading to drop-offs and manual settlement across multiple banking partners.",
    outcome:
      "Built an in-product payment gateway with connected banking (ICICI, Axis, HDFC). Defined API contracts and user flows from 162-user research.",
    metric: "50% reduction in payment friction",
    tags: ["User Research", "API Design", "Banking Integration", "HLD/LLD"],
  },
  {
    title: "PM-Mem: AI Chat Memory for PMs",
    category: "AI Product · Side Project",
    problem:
      "Product Managers lose critical context across ChatGPT, Claude, Perplexity, and Gemini sessions — research threads die between conversations.",
    outcome:
      "Built a privacy-first memory layer that captures conversations with user consent. Export as Markdown or auto-summarize to keep research alive.",
    metric: "Cross-platform memory",
    tags: ["LLMs", "Privacy-First", "Developer Tool", "RAG"],
  },
  {
    title: "Rakthmanch: Blood Availability Platform",
    category: "HealthTech · Project",
    problem:
      "Finding available blood donors is time-critical and chaotic — no real-time visibility into blood-type availability nearby.",
    outcome:
      "Built a web platform surfacing real-time blood-type availability within 50 km. Ran A/B tests on redesigned UI.",
    metric: "15% better task completion · 22% fewer bugs",
    tags: ["A/B Testing", "Real-Time Data", "User-Centered Design"],
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative bg-[var(--cosmic-surface)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
            Selected Work
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] lg:text-4xl">
            Products I&apos;ve shaped
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--cosmic-bg)] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--text-muted)]">
                        {project.category}
                      </span>
                      <h3 className="flex items-center gap-2 text-xl font-semibold text-[var(--text-primary)] lg:text-2xl">
                        {project.title}
                        <ArrowUpRight
                          size={18}
                          className="text-[var(--lime)] opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                          Problem
                        </span>
                        <p className="mt-1 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                          What I did
                        </span>
                        <p className="mt-1 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metric && (
                    <div className="flex shrink-0 items-center lg:w-[220px]">
                      <div className="w-full rounded-xl border border-[var(--lime)]/10 bg-[rgba(184,255,46,0.03)] px-5 py-5">
                        <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                          Impact
                        </span>
                        <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-lg font-semibold text-[var(--lime)]">
                          {project.metric}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                  style={{ background: "rgba(184,255,46,0.06)" }}
                />
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
