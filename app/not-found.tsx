import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow flex items-center gap-3">
        <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-[var(--lime)]" />
        404 · Deprioritized
      </span>
      <h1 className="display mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] text-white">
        This page didn&apos;t make the roadmap.
      </h1>
      <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[var(--text-secondary)]">
        It got cut in prioritization. Everything that shipped is on the
        homepage.
      </p>
      <Link href="/" className="btn-slab mt-10">
        Back to the roadmap
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
