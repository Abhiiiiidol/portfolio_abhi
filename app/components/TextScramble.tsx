"use client";

import { useEffect, useState, useCallback } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_abcdefghijklmnopqrstuvwxyz";

export default function TextScramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = text.length * 3;
    let rafId: number;

    const tick = () => {
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * text.length);

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < revealed) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);
      frame++;

      if (frame <= totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        setDone(true);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return (
    <span className={className} aria-label={text}>
      {done ? text : display}
    </span>
  );
}
