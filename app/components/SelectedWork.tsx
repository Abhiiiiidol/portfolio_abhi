"use client";

import { motion } from "framer-motion";
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
    title: "Smart Reconciliation & Connected Banking",
    category: "FinTech · BUSY InfoTech",
    problem:
      "Users on a platform serving 4.6 lakh+ active businesses faced fragmented payment flows, manual reconciliation, and drop-offs across multiple banking partners.",
    outcome:
      "Built an AI-powered smart reconciliation feature blended with connected banking (ICICI, Axis, HDFC). Validated pain points through 162-user discovery research.",
    metric: "40% fewer drop-offs",
    tags: ["User Research", "AI/ML", "Banking Integration", "Connected Banking"],
  },
  {
    title: "PM-Mem: AI Chat Memory for PMs",
    category: "AI Product · Side Project",
    problem:
      "Product Managers lose critical context across ChatGPT, Claude, Perplexity, and Gemini sessions — research, chats, and decisions die when sessions close.",
    outcome:
      "Built a privacy-first memory layer that captures conversations with explicit user consent. Export as Markdown or auto-summarize to keep research threads alive across context windows.",
    metric: "Cross-platform memory",
    tags: ["LLMs", "Privacy-First", "Developer Tool", "RAG"],
  },
  {
    title: "Rakthmanch: Blood Availability Platform",
    category: "HealthTech · Project",
    problem:
      "Finding available blood donors is time-critical and chaotic — no real-time visibility into blood-type availability nearby.",
    outcome:
      "Built a consumer web platform surfacing real-time blood-type availability within 50 km, with user auth, interactive posts, and live database updates. Ran A/B testing on redesigned UI in Figma.",
    metric: "15% better task completion · 22% fewer bugs",
    tags: ["A/B Testing", "Real-Time Data", "Figma", "User-Centered Design"],
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
                className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--cosmic-bg)] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--text-muted)]">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] lg:text-2xl">
                        {project.title}
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
                          className="rounded-full border border-black/[0.06] bg-black/[0.02] px-3 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metric && (
                    <div className="flex shrink-0 items-center lg:w-[220px]">
                      <div className="w-full rounded-xl border border-[var(--lime)]/10 bg-[rgba(217,80,53,0.03)] px-5 py-5">
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
                  style={{ background: "rgba(217,80,53,0.06)" }}
                />
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
