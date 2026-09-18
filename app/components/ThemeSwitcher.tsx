"use client";

import { useState } from "react";

type Theme = {
  id: string;
  label: string;
  desc: string;
  dot: string;
  dark: boolean;
  vars: Record<string, string>;
};

const THEMES: Theme[] = [
  {
    id: "light",
    label: "Light",
    desc: "Current",
    dot: "#d95035",
    dark: false,
    vars: {
      "--cosmic-bg": "#f7f5f0",
      "--cosmic-bg-deep": "#171514",
      "--cosmic-surface": "#eeebe4",
      "--lime": "#d95035",
      "--lime-soft": "#ef765d",
      "--lime-deep": "#a63824",
      "--accent-2": "#0891b2",
      "--accent-3": "#be185d",
      "--accent-warm": "#d97706",
      "--accent-2-rgb": "8, 145, 178",
      "--accent-3-rgb": "190, 24, 93",
      "--text-primary": "#171514",
      "--text-secondary": "#615d57",
      "--text-muted": "#8b857d",
      "--ink": "#171514",
      "--line": "rgba(23,21,20,0.13)",
      "--accent-rgb": "217, 80, 53",
      "--surface-hover": "rgba(0,0,0,0.02)",
    },
  },
  {
    id: "dusk",
    label: "Dusk",
    desc: "Violet + cyan + rose",
    dot: "linear-gradient(135deg, #8b5cf6, #22d3ee, #f472b6)",
    dark: true,
    vars: {
      "--cosmic-bg": "#0c0a12",
      "--cosmic-bg-deep": "#06050a",
      "--cosmic-surface": "#13111c",
      "--lime": "#a78bfa",
      "--lime-soft": "#c4b5fd",
      "--lime-deep": "#8b5cf6",
      "--accent-2": "#22d3ee",
      "--accent-3": "#f472b6",
      "--accent-warm": "#fbbf24",
      "--accent-2-rgb": "34, 211, 238",
      "--accent-3-rgb": "244, 114, 182",
      "--text-primary": "#faf7ff",
      "--text-secondary": "rgba(250,247,255,0.60)",
      "--text-muted": "rgba(250,247,255,0.35)",
      "--ink": "#faf7ff",
      "--line": "rgba(167,139,250,0.10)",
      "--accent-rgb": "139, 92, 246",
      "--surface-hover": "rgba(167,139,250,0.04)",
    },
  },
  {
    id: "blue",
    label: "Deep Ocean",
    desc: "Blue + teal + violet",
    dot: "linear-gradient(135deg, #3b82f6, #2dd4bf, #a78bfa)",
    dark: true,
    vars: {
      "--cosmic-bg": "#060609",
      "--cosmic-bg-deep": "#020204",
      "--cosmic-surface": "#0c0e18",
      "--lime": "#60a5fa",
      "--lime-soft": "#93c5fd",
      "--lime-deep": "#3b82f6",
      "--accent-2": "#2dd4bf",
      "--accent-3": "#a78bfa",
      "--accent-warm": "#34d399",
      "--accent-2-rgb": "45, 212, 191",
      "--accent-3-rgb": "167, 139, 250",
      "--text-primary": "#f0f4f8",
      "--text-secondary": "rgba(240,244,248,0.60)",
      "--text-muted": "rgba(240,244,248,0.35)",
      "--ink": "#f0f4f8",
      "--line": "rgba(96,165,250,0.10)",
      "--accent-rgb": "59, 130, 246",
      "--surface-hover": "rgba(96,165,250,0.04)",
    },
  },
  {
    id: "ember",
    label: "Ember",
    desc: "Coral + amber + rose",
    dot: "linear-gradient(135deg, #d95035, #fbbf24, #f472b6)",
    dark: true,
    vars: {
      "--cosmic-bg": "#0a0908",
      "--cosmic-bg-deep": "#050404",
      "--cosmic-surface": "#141110",
      "--lime": "#ef765d",
      "--lime-soft": "#f7a08e",
      "--lime-deep": "#d95035",
      "--accent-2": "#fbbf24",
      "--accent-3": "#f472b6",
      "--accent-warm": "#fb923c",
      "--accent-2-rgb": "251, 191, 36",
      "--accent-3-rgb": "244, 114, 182",
      "--text-primary": "#faf5f0",
      "--text-secondary": "rgba(250,245,240,0.60)",
      "--text-muted": "rgba(250,245,240,0.35)",
      "--ink": "#faf5f0",
      "--line": "rgba(239,118,93,0.10)",
      "--accent-rgb": "217, 80, 53",
      "--surface-hover": "rgba(239,118,93,0.04)",
    },
  },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState("light");
  const [open, setOpen] = useState(true);

  function applyTheme(themeId: string) {
    const theme = THEMES.find((t) => t.id === themeId);
    if (!theme) return;
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme.vars)) {
      root.style.setProperty(key, value);
    }
    if (theme.dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    setActive(themeId);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--cosmic-surface)] shadow-lg backdrop-blur-xl transition-transform hover:scale-110"
        aria-label="Open theme switcher"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 2a6 6 0 0 1 0 12V2Z" fill="currentColor" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex w-52 flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--cosmic-surface)]/80 p-3 shadow-2xl backdrop-blur-2xl">
      <div className="flex items-center justify-between px-1">
        <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Theme
        </span>
        <button
          onClick={() => setOpen(false)}
          className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          aria-label="Minimize"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-0.5">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => applyTheme(theme.id)}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all ${
              active === theme.id
                ? "bg-[var(--lime)]/10 text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span
              className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-white/20"
              style={{ background: theme.dot }}
            />
            <span className="flex flex-col">
              <span className="text-xs font-semibold">{theme.label}</span>
              <span className="text-[10px] text-[var(--text-muted)]">{theme.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
