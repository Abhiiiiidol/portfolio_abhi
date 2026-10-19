import FadeIn from "./FadeIn";

type Impact = { value: string; label: string };

type Project = {
  title: string;
  category: string;
  problem: string;
  outcome: string;
  impact: Impact[];
  impactKind?: "Impact" | "Scope";
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Smart Reconciliation & Connected Banking",
    category: "FinTech · BUSY InfoTech",
    problem:
      "On a platform serving 4.6 lakh+ active users, people were dropping off mid-flow. Reconciling bank transactions meant leaving BUSY to do it somewhere else.",
    outcome:
      "Walked the full flow to find where users dropped off, then built AI-powered smart reconciliation on connected banking: download and reconcile transactions without leaving BUSY. Payment pain points validated with 162 users.",
    impact: [{ value: "40%", label: "fewer drop-offs · retention up" }],
    tags: ["User Research", "AI Features", "Connected Banking", "Retention"],
  },
  {
    title: "PM-Mem: AI Chat Memory for PMs",
    category: "AI Product · Side Project",
    problem:
      "Research, chats and decisions are scattered across ChatGPT, Claude, Perplexity and Gemini, and they vanish the moment a session closes. A very real PM pain point.",
    outcome:
      "Built a privacy-first memory layer that saves conversations from all four tools in one place, only with explicit consent. Export any chat as Markdown to seed a fresh session, or auto-summarize it to keep long research alive across context windows.",
    impact: [{ value: "4", label: "AI tools, one memory" }],
    impactKind: "Scope",
    tags: ["LLMs", "Privacy-First", "Cross-Platform", "PM Tooling"],
  },
  {
    title: "Rakthmanch: Blood Availability Platform",
    category: "HealthTech · Side Project",
    problem:
      "When someone needs blood, every minute counts, and there was no live view of which blood types were available nearby.",
    outcome:
      "Built a consumer web platform showing real-time blood-type availability within 50 km, with auth, interactive posts and live database updates linking donors and recipients. Then A/B tested a Figma redesign of the UI.",
    impact: [
      { value: "+15%", label: "task completion" },
      { value: "−22%", label: "user-reported bugs" },
    ],
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
            Work with <span className="text-[var(--lime)]">receipts</span>
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

                <div className="lg:border-l lg:border-[var(--line)] lg:pl-8">
                  <span className="eyebrow">{project.impactKind ?? "Impact"}</span>
                  <dl className="mt-3 flex flex-wrap gap-x-10 gap-y-6 lg:flex-col">
                    {project.impact.map((item) => (
                      <div key={item.label} className="flex flex-col-reverse gap-2">
                        <dt className="eyebrow">
                          {item.label.split(" · ").map((part) => (
                            <span key={part} className="block">
                              {part}
                            </span>
                          ))}
                        </dt>
                        <dd className="text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-none tracking-tight tabular-nums text-[var(--text-primary)]">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
