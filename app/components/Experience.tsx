"use client";

import FadeIn from "./FadeIn";

type Role = {
  company: string;
  companyNote?: string;
  title: string;
  period: string;
  highlights: string[];
};

const ROLES: Role[] = [
  {
    company: "BUSY InfoTech",
    companyNote: "An IndiaMart Company",
    title: "Associate Product Manager",
    period: "Jan 2026 — Present",
    highlights: [
      "Owned a 0→1 product end-to-end on a platform serving 4.6 lakh+ active users — mapped user flows, identified friction points, and shipped iterative releases to accelerate time-to-market.",
      "Built an AI-powered smart reconciliation feature blended with connected banking (ICICI, Axis, HDFC), enabling in-app transaction reconciliation — increased retention and reduced drop-offs by 40%.",
      "Ran direct discovery with 162 users to validate inventory and payment pain points, prioritized the right fixes, and closed the loop on surfaced issues.",
      "Co-built \"Busy Magic,\" an AI-powered platform initiative with corporate-banking integrations — drove 40% higher adoption and 30% reduction in user friction.",
    ],
  },
  {
    company: "MantraCare",
    title: "Associate Product Manager",
    period: "Jun 2025 — Jan 2026",
    highlights: [
      "Drove product strategy for a B2C healthcare app used by 500+ users globally — designed a personalised provider recommendation system, lifting engagement and retention by 25%.",
      "Built an AI agent to automate contact extraction for BD teams, improving operational efficiency by ~30%.",
      "Used analytics and feedback tools to isolate top drop-off points in the consumer journey — partnered with design, tech, and QA to ship MVPs.",
      "Drove product roadmap through market and competitor research, delivering PRDs and GTM strategy — achieved 20% lift in user interest.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
            Experience
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] lg:text-4xl">
            Where I&apos;ve built
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-col gap-0">
          {ROLES.map((role, i) => (
            <FadeIn key={role.company} delay={i * 0.15}>
              <div
                className="relative border-l-2 border-[var(--lime)]/20 py-8 pl-8"
              >
                <div
                  className="absolute -left-[7px] top-10 h-3 w-3 rounded-full border-2 border-[var(--lime)] bg-[var(--cosmic-bg)]"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {role.company}
                  </h3>
                  {role.companyNote && (
                    <span className="text-sm text-[var(--text-muted)]">
                      {role.companyNote}
                    </span>
                  )}
                </div>

                <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    {role.title}
                  </span>
                  <span className="hidden text-[var(--text-muted)] sm:inline">
                    ·
                  </span>
                  <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--text-muted)]">
                    {role.period}
                  </span>
                </div>

                <ul className="mt-5 flex flex-col gap-3">
                  {role.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-[15px] leading-relaxed text-[var(--text-secondary)] before:absolute before:left-0 before:top-[10px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--lime)]/40"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
