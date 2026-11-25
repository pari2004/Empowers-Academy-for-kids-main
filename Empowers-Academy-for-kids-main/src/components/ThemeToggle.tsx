"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`brutal-btn brutal-btn-secondary h-11 w-11 shrink-0 bg-surface text-lg text-ink ${className}`}
    >
      {mounted ? (dark ? "☀" : "☾") : "☾"}
    </button>
  );
}
