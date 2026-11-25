"use client";

import { useUI } from "./ui-context";

export default function BrochureCTA() {
  const { openModal } = useUI();
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="brutal-lg flex flex-col items-center gap-6 bg-yellow p-8 text-center text-black sm:p-12">
          <span className="brutal-sm rotate-[-2deg] bg-surface px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-ink">
            No obligation
          </span>
          <h2 className="max-w-2xl font-display text-3xl uppercase leading-none sm:text-5xl">
            Want the Full Program Breakdown?
          </h2>
          <p className="max-w-xl font-mono text-sm leading-relaxed sm:text-base">
            Download the Empowers Academy brochure for complete curriculum,
            mentor, and format details — no obligation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openModal("brochure")}
              className="brutal-btn bg-surface px-6 py-4 text-base text-ink"
            >
              Download Brochure
            </button>
            <button
              onClick={() => openModal("advisor")}
              className="brutal-btn brutal-btn-secondary bg-orange px-6 py-4 text-base text-black"
            >
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
