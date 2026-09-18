"use client";

import { Mail, Download, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[var(--cosmic-surface)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeIn>
            <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
              Get in Touch
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] lg:text-4xl">
              Let&apos;s build something
              <br />
              great together.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m open to Product Manager roles, collaborations, and
              conversations about product, AI, and building things people love.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="mailto:rajputabhinav1245@gmail.com"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--lime)] px-7 text-sm font-semibold text-[var(--cosmic-bg-deep)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ boxShadow: "0 14px 28px rgba(var(--accent-rgb),0.22)" }}
              >
                <Mail size={16} />
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/in29abhinav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-hover)] px-7 text-sm font-medium text-[var(--text-primary)] backdrop-blur-sm transition-colors hover:border-[var(--lime)]/50 hover:bg-[rgba(var(--accent-rgb),0.06)]"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>

              <a
                href="/Abhinav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-hover)] px-7 text-sm font-medium text-[var(--text-primary)] backdrop-blur-sm transition-colors hover:border-[var(--lime)]/50 hover:bg-[rgba(var(--accent-rgb),0.06)]"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
