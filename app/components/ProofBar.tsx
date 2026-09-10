"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Years in Product" },
  { value: 4, suffix: "", label: "Industry Domains" },
  { value: 40, suffix: "%", label: "DAU Growth Delivered" },
  { value: 500, suffix: "+", label: "Users Impacted" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ProofBar() {
  return (
    <section className="relative border-y border-white/5 bg-[var(--cosmic-surface)]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:gap-8 md:px-12 lg:px-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex flex-col gap-1"
          >
            <span className="font-[family-name:var(--font-geist-mono)] text-3xl font-semibold text-[var(--lime)] md:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm text-[var(--text-muted)]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
