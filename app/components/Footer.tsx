export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--cosmic-bg-deep)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <span className="text-sm text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Abhinav Kumar
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/in29abhinav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--lime)]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rajputabhinav1245@gmail.com"
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--lime)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
