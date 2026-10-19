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
    companyNote: "An IndiaMART company",
    title: "Associate Product Manager",
    period: "Jan 2026 — Present",
    highlights: [
      "Owned a 0→1 product end-to-end on a platform serving 4.6 lakh+ active users. Mapped the full flow, found the friction, and shipped iterative releases with engineering and senior stakeholders.",
      "Cut drop-offs 40% with AI-powered smart reconciliation built on connected banking, so users download and reconcile transactions without leaving BUSY. Retention went up too.",
      "Halved payment friction time by kicking off Phase-1 integrations with ICICI, Axis and HDFC for in-product payments. Added contextual CA suggestions that connect users with BUSY-associated Chartered Accountants right when they need one.",
      "Spotted stock-outs, manual reorder cycles and poor demand visibility, then proposed an AI inventory forecasting feature with automated replenishment alerts. Manual inventory work dropped 50%.",
      "Co-built \"Busy Magic,\" an AI-powered platform initiative with corporate-banking integrations: 40% higher adoption, 30% less user friction.",
      "Heard from 162 users, in-app and off-platform, to validate inventory and payment pain. Prioritized the fixes that mattered and closed the loop on what they surfaced.",
    ],
  },
  {
    company: "MantraCare",
    title: "Associate Product Manager",
    period: "Jun 2025 — Jan 2026",
    highlights: [
      "Lifted engagement and retention 25% by designing and improving a personalised provider recommendation system that matches users with best-fit therapists and doctors, on a B2C healthcare app used by 500+ users globally.",
      "Built an AI agent that automated the BD team's manual contact extraction: ~30% more operational efficiency, way less repetitive work.",
      "Dug into analytics and feedback to pinpoint the biggest drop-off and friction points in the consumer journey, then shipped MVPs with design, tech and QA to fix them.",
      "Shaped the roadmap through market and competitor research, and wrote the PRDs and GTM strategy. Result: a 20% lift in user interest and faster release cycles.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative pb-16 pt-24 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="eyebrow">Experience</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="display display-2 mt-4 text-[var(--text-primary)]">
            Where I&apos;ve shipped
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-col gap-0">
          {ROLES.map((role, i) => (
            <FadeIn key={role.company} delay={i * 0.15}>
              <div className="relative border-l border-[var(--line)] py-8 pl-8">
                <div aria-hidden="true" className="absolute -left-[3.5px] top-10 h-2 w-2 rotate-45 bg-[var(--lime)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.6)]" />

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
                      className="relative pl-4 text-[15px] leading-relaxed text-[var(--text-secondary)] before:absolute before:left-0 before:top-[12px] before:h-px before:w-2 before:bg-[var(--text-muted)]"
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
