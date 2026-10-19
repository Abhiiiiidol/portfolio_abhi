import FadeIn from "./FadeIn";

type SkillGroup = {
  category: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Product & Analytics",
    skills: [
      "User Research",
      "A/B Testing",
      "PRDs",
      "Figma",
      "Data Analysis",
      "SQL",
      "Power BI",
      "Excel",
    ],
  },
  {
    category: "Execution & Strategy",
    skills: [
      "Roadmapping",
      "Go-to-Market",
      "Prioritization",
      "Process Automation",
      "Competitive Research",
      "Stakeholder Management",
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "OpenAI APIs",
      "n8n / Make",
    ],
  },
  {
    category: "Technical",
    skills: [
      "Python",
      "JavaScript",
      "HTML / CSS",
      "MySQL",
      "Supabase",
      "REST APIs",
      "Git / GitHub",
    ],
  },
];

export default function Toolkit() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="eyebrow">Toolkit</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="display display-2 mt-4 text-[var(--text-primary)]">
            What I work with
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <FadeIn key={group.category} delay={groupIdx * 0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--text-primary)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default border border-[var(--line)] px-3.5 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-white/50 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
