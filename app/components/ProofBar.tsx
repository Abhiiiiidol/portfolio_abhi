"use client";

import { motion } from "framer-motion";

const COMPANIES = [
  { name: "Busy Infotech", sub: "An IndiaMART Company" },
  { name: "CareSetu", sub: null },
  { name: "S-CUBE Technologies", sub: null },
];

export default function ProofBar() {
  return (
    <section className="relative border-y border-[var(--line)]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:gap-12 md:px-12 lg:px-16">
        <span className="eyebrow shrink-0">I&apos;ve worked with</span>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {COMPANIES.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <span className="text-sm font-medium uppercase tracking-[0.12em] text-white">
                {company.name}
              </span>
              {company.sub && (
                <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {company.sub}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
