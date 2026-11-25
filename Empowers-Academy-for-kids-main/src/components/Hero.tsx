"use client";

import { HERO } from "@/lib/site-data";
import { useUI } from "./ui-context";

export default function Hero() {
  const { openModal } = useUI();

  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* subtle geometric backdrop shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]">
        <div className="absolute -left-10 top-20 h-40 w-40 rounded-full border-3 border-ink" />
        <div className="absolute right-8 top-40 h-24 w-24 rotate-12 border-3 border-ink bg-cobalt/20" />
        <div className="absolute bottom-10 left-1/3 h-16 w-16 border-3 border-ink bg-yellow/40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="brutal-sm inline-flex rotate-[-2deg] items-center gap-2 bg-orange px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-black">
            ● 180-Day Better-Offer Guarantee
          </span>

          <h1 className="mt-5 font-display text-[clamp(2.5rem,9vw,6rem)] uppercase leading-[1.02] tracking-tight text-ink">
            Get a Better Offer in{" "}
            <span className="bg-yellow px-2 text-black decoration-clone box-decoration-clone">
              180 Days
            </span>
            . Or Your Money Back.{" "}
            <span className="text-orange">In Writing.</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-base leading-relaxed text-ink-soft sm:text-lg">
            {HERO.subhead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openModal("advisor")}
              className="brutal-btn bg-yellow px-6 py-4 text-base text-black"
            >
              Talk to an Advisor →
            </button>
            <button
              onClick={() => openModal("brochure")}
              className="brutal-btn brutal-btn-secondary bg-surface px-6 py-4 text-base text-ink"
            >
              Download Brochure
            </button>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
            Live · Mentor-led · ~8–10 learners per cohort
          </p>
        </div>

        {/* Stamped "GUARANTEED IN WRITING" seal */}
        <div className="flex justify-center lg:justify-end">
          <div className="brutal-lg relative aspect-square w-full max-w-xs rotate-[-3deg] bg-orange p-6 text-black">
            <div className="flex h-full flex-col items-center justify-center rounded-[4px] border-3 border-black text-center">
              <span className="font-display text-[clamp(3.5rem,12vw,5rem)] leading-none">
                180
              </span>
              <span className="mt-1 font-heading text-lg font-bold uppercase tracking-widest">
                Day Guarantee
              </span>
              <div className="my-3 h-1 w-24 bg-black" />
              <span className="max-w-[12rem] font-mono text-xs font-bold uppercase leading-snug tracking-wide">
                Better offer or full refund — signed before you pay
              </span>
            </div>
            <span className="brutal-sm absolute -right-3 -top-3 rotate-6 bg-yellow px-2 py-1 font-display text-[10px] uppercase tracking-widest text-black">
              In Writing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
