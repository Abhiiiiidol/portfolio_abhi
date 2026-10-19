import { Mail, Download, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="surface-cobalt relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeIn>
            <span className="eyebrow">Open to PM roles</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="display display-2 mt-4 text-[var(--text-primary)]">
              Got a messy problem?
              <br />
              Let&apos;s ship the fix.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m open to Product Manager roles, collabs, and long chats about
              product and AI. If you&apos;re hiring or building, my inbox is open.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row">
              <a
                href="mailto:rajputabhinav1245@gmail.com"
                className="btn-slab w-full font-semibold sm:w-auto"
                style={{
                  "--btn-bg": "#ffffff",
                  "--btn-fg": "#1c3e9c",
                  "--btn-wipe": "#000000",
                  "--btn-wipe-fg": "#ffffff",
                } as React.CSSProperties}
              >
                <Mail size={15} />
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/in29abhinav/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial font-semibold"
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>

              <a
                href="/Abhinav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial font-semibold"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
