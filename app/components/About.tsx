import Image from "next/image";
import FadeIn from "./FadeIn";

const CERTS = [
  "GenAI Lead — Google",
  "Forward Learner — McKinsey",
  "Breaking into Product Management",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 md:px-12 lg:flex-row lg:gap-20 lg:px-16">
        <FadeIn className="relative shrink-0">
          <div className="relative h-[320px] w-[260px] overflow-hidden lg:h-[400px] lg:w-[320px]">
            <Image
              src="/abhinav.jpeg"
              alt="Abhinav Kumar"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 260px, 320px"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          <FadeIn>
            <span className="eyebrow">About</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="display display-2 text-[var(--text-primary)]">
              I turn ambiguity into
              <br />
              products that ship.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m a Product Manager who believes great products come from
              deeply understanding users, not from following frameworks blindly.
              I combine user research with data-driven decision making to ship
              products that create measurable impact.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              My approach: start with the user&apos;s pain, validate with data,
              ship fast, and iterate based on real feedback. I&apos;ve applied
              this across{" "}
              <span className="text-[var(--text-primary)]">
                FinTech, Healthcare, E-Commerce, and Logistics
              </span>{" "}
              — each domain teaching me something different about how people
              interact with technology.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-sm text-[var(--text-muted)]">
                BTech in CSE — VIT Bhopal (8.02 GPA)
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((cert) => (
                  <span key={cert} className="tag">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
