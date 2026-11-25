"use client";

import { useRef } from "react";
import { PROGRAMS } from "@/lib/site-data";
import { useUI } from "./ui-context";

export default function Programs() {
  const { openModal } = useUI();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  }

  return (
    <section id="programs" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
              Program Offerings
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
              Three Tracks. One Guarantee.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous program"
              className="brutal-btn brutal-btn-secondary h-12 w-12 bg-bg text-xl text-ink"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next program"
              className="brutal-btn brutal-btn-secondary h-12 w-12 bg-bg text-xl text-ink"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              data-card
              className="brutal-card flex w-[85vw] shrink-0 snap-start flex-col bg-bg p-7 sm:w-[26rem]"
            >
              <span className="inline-flex w-fit rounded-[4px] border-3 border-ink bg-yellow px-2 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-black">
                {p.tag}
              </span>
              <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-ink-soft">{p.goal}</p>

              <dl className="mt-4 space-y-2 font-mono text-xs text-ink">
                {p.eligibility && (
                  <div>
                    <dt className="font-bold uppercase tracking-wide text-cobalt">Eligibility</dt>
                    <dd className="text-ink-soft">{p.eligibility}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-bold uppercase tracking-wide text-cobalt">Format</dt>
                  <dd className="text-ink-soft">{p.format}</dd>
                </div>
                <div>
                  <dt className="font-bold uppercase tracking-wide text-cobalt">Mentors</dt>
                  <dd className="text-ink-soft">{p.mentors}</dd>
                </div>
              </dl>

              <div className="mt-4">
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-ink">
                  Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[4px] border-3 border-ink bg-surface px-2 py-0.5 font-mono text-[11px] text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-ink">
                  Curriculum
                </p>
                <ul className="mt-2 space-y-1.5">
                  {p.curriculum.map((c) => (
                    <li key={c} className="flex gap-2 font-mono text-xs leading-snug text-ink-soft">
                      <span className="mt-[2px] shrink-0 font-bold text-orange">▪</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5">
                <div className="mb-4 flex items-center gap-2 rounded-[4px] border-3 border-ink bg-orange px-3 py-2 font-heading text-[11px] font-bold uppercase tracking-wide text-black">
                  ✓ Covered by the 180-day better-offer guarantee
                </div>
                <button
                  onClick={() => openModal("advisor")}
                  className="brutal-btn w-full bg-yellow px-4 py-3 text-black"
                >
                  Talk to an Advisor
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-2 text-center font-mono text-xs text-ink-soft sm:hidden">
          ← swipe to explore all three programs →
        </p>
      </div>
    </section>
  );
}
