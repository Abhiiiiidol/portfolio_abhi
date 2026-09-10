"use client";

import { motion } from "framer-motion";
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
      "Funnel & Conversion Analysis",
      "GTM Strategy",
      "SQL",
      "Power BI",
    ],
  },
  {
    category: "Execution & Strategy",
    skills: [
      "Roadmapping",
      "Go-to-Market",
      "Prioritization",
      "3P Integrations",
      "Merchant Onboarding",
      "Stakeholder Management",
      "KPI Tracking",
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
      "REST APIs",
      "Webhooks",
      "System Design (HLD & LLD)",
      "MySQL",
      "Supabase",
      "Git / GitHub",
    ],
  },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Toolkit() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
            Toolkit
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] lg:text-4xl">
            What I work with
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <FadeIn key={group.category} delay={groupIdx * 0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  {group.category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={pillVariants}
                      whileHover={{
                        borderColor: "rgba(184,255,46,0.3)",
                        color: "var(--text-primary)",
                        boxShadow: "0 0 12px rgba(184,255,46,0.1)",
                      }}
                      className="cursor-default rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-sm text-[var(--text-secondary)] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
