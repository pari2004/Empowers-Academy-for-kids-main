"use client";

import { CONTACT } from "@/lib/site-data";
import { useUI } from "./ui-context";

export default function StickyBar() {
  const { openModal } = useUI();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t-3 border-ink bg-ink text-bg"
      style={{ borderTopWidth: 4 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <p className="font-heading text-[11px] font-bold uppercase leading-tight tracking-wide sm:text-sm">
          <span className="hidden sm:inline">
            Not sure which program fits your career?{" "}
          </span>
          Talk to us at{" "}
          <a href={CONTACT.phoneHref} className="text-yellow underline">
            {CONTACT.phone}
          </a>
        </p>
        <button
          onClick={() => openModal("advisor")}
          className="brutal-btn shrink-0 bg-yellow px-3 py-2 text-xs text-black sm:px-4 sm:text-sm"
        >
          Request a Call
        </button>
      </div>
    </div>
  );
}
