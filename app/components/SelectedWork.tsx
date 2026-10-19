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
    <section id="work" className="surface-paper relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="eyebrow">Selected Work</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="display display-2 mt-4 text-[var(--text-primary)]">
            Products I&apos;ve <span className="text-[var(--lime)]">shaped</span>
          </h2>
        </FadeIn>

        <div className="mt-14 border-b border-[var(--line)]">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.12}>
              <article className="group grid gap-6 border-t border-[var(--line)] py-10 lg:grid-cols-[170px_1fr_260px] lg:gap-12 lg:py-12">
                <div className="flex gap-4 lg:flex-col lg:gap-2">
                  <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {project.category.split(" · ").map((part) => (
                      <span key={part} className="block">
                        {part}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--lime)] lg:text-2xl">
                    {project.title}
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-1 xl:grid-cols-2">
                    <div>
                      <span className="eyebrow">Problem</span>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="eyebrow">What I did</span>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metric && (
                  <div className="lg:border-l lg:border-[var(--line)] lg:pl-8">
                    <span className="eyebrow">Impact</span>
                    <p className="mt-2 text-xl font-medium leading-snug text-[var(--text-primary)]">
                      {project.metric}
                    </p>
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
