export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <span className="text-sm text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Abhinav Kumar · Delhi, India
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/in29abhinav/"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rajputabhinav1245@gmail.com"
            className="eyebrow transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
