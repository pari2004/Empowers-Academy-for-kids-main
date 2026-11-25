"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/site-data";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  }

  return (
    <section className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
              Alumni Success Stories
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
              In Their Own Words
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonial"
              className="brutal-btn brutal-btn-secondary h-12 w-12 bg-bg text-xl text-ink"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next testimonial"
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
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              data-card
              className="brutal-card flex w-[85vw] shrink-0 snap-start flex-col bg-bg p-7 sm:w-[24rem]"
            >
              <span className="font-display text-5xl leading-none text-orange">&ldquo;</span>
              <blockquote className="mt-2 flex-1 font-mono text-sm leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t-3 border-ink pt-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border-3 border-ink bg-yellow font-display text-sm text-black">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="font-heading text-sm font-bold text-ink">{t.name}</div>
                  <div className="font-mono text-xs text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
