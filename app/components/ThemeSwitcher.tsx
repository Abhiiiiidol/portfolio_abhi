"use client";

import { useState } from "react";

const THEMES = [
  {
    id: "light",
    label: "Light",
    dot: "#d95035",
    vars: {
      "--cosmic-bg": "#f7f5f0",
      "--cosmic-bg-deep": "#171514",
      "--cosmic-surface": "#eeebe4",
      "--lime": "#d95035",
      "--lime-soft": "#ef765d",
      "--lime-deep": "#a63824",
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
    id: "violet",
    label: "Midnight Violet",
    dot: "#8b5cf6",
    vars: {
      "--cosmic-bg": "#0a0a0f",
      "--cosmic-bg-deep": "#050508",
      "--cosmic-surface": "#12111a",
      "--lime": "#8b5cf6",
      "--lime-soft": "#a78bfa",
      "--lime-deep": "#7c3aed",
      "--text-primary": "#f5f5fa",
      "--text-secondary": "rgba(245,245,250,0.65)",
      "--text-muted": "rgba(245,245,250,0.4)",
      "--ink": "#f5f5fa",
      "--line": "rgba(245,245,250,0.1)",
      "--accent-rgb": "139, 92, 246",
      "--surface-hover": "rgba(255,255,255,0.03)",
    },
  },
  {
    id: "blue",
    label: "Obsidian Blue",
    dot: "#3b82f6",
    vars: {
      "--cosmic-bg": "#060609",
      "--cosmic-bg-deep": "#020204",
      "--cosmic-surface": "#0d0f17",
      "--lime": "#3b82f6",
      "--lime-soft": "#60a5fa",
      "--lime-deep": "#2563eb",
      "--text-primary": "#f0f4f8",
      "--text-secondary": "rgba(240,244,248,0.65)",
      "--text-muted": "rgba(240,244,248,0.4)",
      "--ink": "#f0f4f8",
      "--line": "rgba(240,244,248,0.1)",
      "--accent-rgb": "59, 130, 246",
      "--surface-hover": "rgba(255,255,255,0.03)",
    },
  },
  {
    id: "coral",
    label: "Dark Coral",
    dot: "#d95035",
    vars: {
      "--cosmic-bg": "#0a0908",
      "--cosmic-bg-deep": "#050404",
      "--cosmic-surface": "#141210",
      "--lime": "#d95035",
      "--lime-soft": "#ef765d",
      "--lime-deep": "#a63824",
      "--text-primary": "#f5f2ef",
      "--text-secondary": "rgba(245,242,239,0.65)",
      "--text-muted": "rgba(245,242,239,0.4)",
      "--ink": "#f5f2ef",
      "--line": "rgba(245,242,239,0.1)",
      "--accent-rgb": "217, 80, 53",
      "--surface-hover": "rgba(255,255,255,0.03)",
    },
  },
] as const;

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
    setActive(themeId);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--cosmic-surface)] shadow-lg backdrop-blur-xl"
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
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--cosmic-surface)] p-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6 px-1">
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
      <div className="flex flex-col gap-1">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => applyTheme(theme.id)}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
              active === theme.id
                ? "bg-[var(--lime)]/10 text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span
              className="h-3 w-3 shrink-0 rounded-full ring-1 ring-white/20"
              style={{ background: theme.dot }}
            />
            {theme.label}
            {active === theme.id && (
              <span className="ml-auto text-[10px] text-[var(--lime)]">Active</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
