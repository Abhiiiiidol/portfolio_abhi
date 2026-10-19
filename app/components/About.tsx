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
          <div
            className="relative h-[320px] w-[260px] overflow-hidden lg:h-[400px] lg:w-[320px]"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to bottom, transparent, black 8%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to bottom, transparent, black 8%, black 90%, transparent)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
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
              Obsessed with users.
              <br />
              Allergic to guesswork.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m an Associate PM who&apos;d rather sit with a frustrated user
              than a framework. I map the flow, find where people drop off, ship
              the fix, and then check the numbers to see if it actually worked.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              So far that&apos;s{" "}
              <span className="text-[var(--text-primary)]">
                FinTech at BUSY InfoTech and healthcare at MantraCare
              </span>
              : reconciliation and in-product payments on one side,
              therapist-and-doctor matching on the other. Different users, same
              rule: their pain sets the roadmap.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-sm text-[var(--text-muted)]">
                BTech CSE, VIT Bhopal · 8.02 GPA · NSO Gold Medalist
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
