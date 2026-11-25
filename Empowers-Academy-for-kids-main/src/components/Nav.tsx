"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/site-data";
import { useUI } from "./ui-context";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { openModal } = useUI();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => mq.matches && setOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-ink bg-bg" style={{ borderBottomWidth: 4 }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center" aria-label="Empowers Academy home">
          <span className="flex h-11 items-center justify-center px-1">
            <Image src="/logo-light.png" alt="Empowers Academy" width={180} height={44} className="h-9 sm:h-10 w-auto object-contain dark:hidden" priority />
            <Image src="/logo.png" alt="Empowers Academy" width={180} height={44} className="hidden h-9 sm:h-10 w-auto object-contain dark:block" priority />
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[4px] border-3 border-transparent px-3 py-2 font-heading text-sm font-bold tracking-wide text-ink transition-colors hover:border-ink hover:bg-cobalt hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => openModal("advisor")}
            className="brutal-btn hidden bg-yellow px-4 py-2.5 text-sm text-black sm:inline-flex"
          >
            Talk to an Advisor
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="brutal-btn brutal-btn-secondary flex h-11 w-11 items-center justify-center bg-surface text-ink md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-3 border-ink bg-bg px-4 py-4 md:hidden" style={{ borderTopWidth: 3 }}>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="brutal-card brutal-hover bg-surface px-4 py-3 font-heading text-sm font-bold tracking-wide text-ink"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openModal("advisor");
              }}
              className="brutal-btn mt-1 bg-yellow px-4 py-3 text-black"
            >
              Talk to an Advisor
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
