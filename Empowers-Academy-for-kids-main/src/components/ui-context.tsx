"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CONTACT } from "@/lib/site-data";

type ModalMode = "brochure" | "advisor" | null;

type UIContextValue = {
  openModal: (mode: Exclude<ModalMode, null>) => void;
  closeModal: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within <UIProvider>");
  return ctx;
}

export function UIProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModalMode>(null);

  const openModal = useCallback((m: Exclude<ModalMode, null>) => setMode(m), []);
  const closeModal = useCallback(() => setMode(null), []);

  // Lock body scroll + close on Escape while a modal is open.
  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mode, closeModal]);

  return (
    <UIContext.Provider value={{ openModal, closeModal }}>
      {children}
      {mode && <LeadModal mode={mode} onClose={closeModal} />}
    </UIContext.Provider>
  );
}

function LeadModal({
  mode,
  onClose,
}: {
  mode: Exclude<ModalMode, null>;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isAdvisor = mode === "advisor";
  const title = isAdvisor ? "TALK TO AN ADVISOR" : "DOWNLOAD BROCHURE";
  const blurb = isAdvisor
    ? "Tell us where you are today. An advisor will reach out to map the right program for your career."
    : "Get the full curriculum, mentor, and format details — no obligation.";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (isAdvisor && !/^[0-9+\-\s()]{7,}$/.test(phone))
      next.phone = "Please enter a valid phone number.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div className="brutal-lg relative z-10 w-full max-w-md bg-surface p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl uppercase leading-none text-ink">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="brutal-sm flex h-9 w-9 shrink-0 items-center justify-center bg-orange font-display text-lg text-black"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="brutal mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-yellow text-3xl text-black">
              ✓
            </div>
            <p className="font-heading text-lg font-bold text-ink">
              {isAdvisor ? "Request received." : "You're all set."}
            </p>
            <p className="mt-2 font-mono text-sm text-ink-soft">
              {isAdvisor
                ? "An advisor will reach out shortly to talk through the right program for you."
                : "Check your inbox — the brochure is on its way. (Demo build: no email is actually sent yet.)"}
            </p>
            <button
              onClick={onClose}
              className="brutal-btn mt-6 bg-yellow px-6 py-3 text-black"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="mb-5 font-mono text-sm text-ink-soft">{blurb}</p>

            <Field label="Full name" name="name" type="text" error={errors.name} placeholder="Your name" />
            <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@example.com" />
            {isAdvisor && (
              <Field label="Phone" name="phone" type="tel" error={errors.phone} placeholder={CONTACT.phone} />
            )}

            <button
              type="submit"
              className="brutal-btn mt-2 w-full bg-yellow px-6 py-3 text-black"
            >
              {isAdvisor ? "REQUEST A CALL" : "DOWNLOAD BROCHURE"}
            </button>
            <p className="mt-3 text-center font-mono text-xs text-ink-soft">
              We never share your details. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1 block font-heading text-sm font-bold uppercase tracking-wide text-ink">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[4px] border-3 border-ink bg-bg px-3 py-2.5 font-mono text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:shadow-[3px_3px_0_0_var(--ink)]"
        style={{ borderWidth: 3 }}
      />
      {error && (
        <span className="mt-1 block font-mono text-xs font-bold text-orange">
          {error}
        </span>
      )}
    </label>
  );
}
