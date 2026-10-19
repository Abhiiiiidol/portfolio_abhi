import Image from "next/image";

// Coordinates are in the portrait's own pixel space (public/hero-portrait-mono.jpg is 1400×1050).
const W = 1400;
const H = 1050;

// Rough outline of his head and shoulders. Each ring's back half is masked by it so the ring passes behind him.
const SILHOUETTE =
  "179,660 205,520 262,432 352,378 432,300 520,262 534,118 612,36 742,26 864,70 904,176 884,286 846,336 834,420 884,524 918,660";

const RINGS = [
  { id: "a", cx: 700, cy: 528, rx: 610, ry: 112, tilt: -6, dur: 9, reverse: false, base: 0.5 },
  { id: "b", cx: 712, cy: 582, rx: 566, ry: 152, tilt: 5, dur: 14, reverse: true, base: 0.26 },
];

const PARTICLES = [
  [128, 512, 0], [260, 640, 1.2], [342, 430, 2.4], [470, 690, 0.6], [930, 690, 1.8],
  [1080, 452, 3], [1190, 600, 0.9], [1262, 498, 2.1], [610, 420, 1.5], [1010, 380, 2.7],
] as const;

const LABELS = [
  { text: "Strategy", left: "9%", top: "37%", mobile: true, dur: 7.5, delay: 0 },
  { text: "AI-native", left: "67%", top: "27%", mobile: true, dur: 8.5, delay: 1.2 },
  { text: "Insights", left: "78%", top: "38%", mobile: false, dur: 7, delay: 2.1 },
  { text: "GTM", left: "84%", top: "66%", mobile: true, dur: 7.8, delay: 2.6 },
];

export default function HeroOrbit({ paused = false }: { paused?: boolean }) {
  return (
    <div className={`relative aspect-[4/3] w-full${paused ? " orbit-paused" : ""}`}>
      <Image
        src="/hero-portrait-mono.jpg"
        alt="Abhinav Kumar working at a laptop"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          {RINGS.map((r) => (
            <clipPath key={`clip-${r.id}`} id={`orbit-back-${r.id}`}>
              <rect
                x={r.cx - r.rx - 60}
                y={r.cy - r.ry - 60}
                width={2 * r.rx + 120}
                height={r.ry + 60}
                transform={`rotate(${r.tilt} ${r.cx} ${r.cy})`}
              />
            </clipPath>
          ))}
          {RINGS.map((r) => (
            <mask key={`mask-${r.id}`} id={`orbit-behind-${r.id}`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
              <rect width={W} height={H} fill="white" />
              <polygon points={SILHOUETTE} fill="black" clipPath={`url(#orbit-back-${r.id})`} />
            </mask>
          ))}
        </defs>

        {RINGS.map((r) => {
          const streak = {
            className: `orbit-streak${r.reverse ? " orbit-reverse" : ""}`,
            style: { animationDuration: `${r.dur}s` },
            cx: r.cx,
            cy: r.cy,
            rx: r.rx,
            ry: r.ry,
            pathLength: 1000,
            strokeDasharray: "170 830",
            strokeLinecap: "round" as const,
            fill: "none",
          };
          return (
            <g key={r.id} mask={`url(#orbit-behind-${r.id})`}>
              <g transform={`rotate(${r.tilt} ${r.cx} ${r.cy})`}>
                {/* soft haze + a bundle of fine lines read as one glowing band, without a blur filter */}
                <ellipse cx={r.cx} cy={r.cy} rx={r.rx} ry={r.ry} fill="none" stroke="var(--lime)" strokeOpacity={r.base * 0.3} strokeWidth={18} />
                {[-9, 0, 9].map((d) => (
                  <ellipse
                    key={d}
                    cx={r.cx}
                    cy={r.cy}
                    rx={r.rx + d * 1.4}
                    ry={r.ry + d}
                    fill="none"
                    stroke={d === 0 ? "var(--lime)" : "#ffffff"}
                    strokeOpacity={d === 0 ? r.base * 1.5 : r.base * 0.45}
                    strokeWidth={d === 0 ? 2 : 1}
                  />
                ))}
                <ellipse {...streak} stroke="var(--lime)" strokeOpacity={0.5} strokeWidth={11} />
                <ellipse {...streak} stroke="#ffffff" strokeOpacity={0.95} strokeWidth={2.6} />
              </g>
            </g>
          );
        })}

        {PARTICLES.map(([x, y, delay]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={2.6} fill="#ffffff" className="orbit-twinkle" style={{ animationDelay: `${delay}s` }} />
        ))}
      </svg>

      {LABELS.map((l) => (
        <span
          key={l.text}
          aria-hidden="true"
          className={`orbit-label absolute text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 lg:text-[11px] ${l.mobile ? "" : "hidden lg:block"}`}
          style={{ left: l.left, top: l.top, animationDuration: `${l.dur}s`, animationDelay: `${l.delay}s` }}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
}
