"use client";

import { useEffect, useRef, useState } from "react";
import { useUI } from "./ui-context";

type Msg = { from: "bot" | "user"; text: string };

const WELCOME: Msg = {
  from: "bot",
  text: "Hi! I can help you find the right AI program or connect you with an advisor.",
};

export default function ChatWidget() {
  const { openModal } = useUI();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function push(from: Msg["from"], text: string) {
    setMessages((m) => [...m, { from, text }]);
  }

  function handleQuickReply(label: string) {
    push("user", label);
    if (label === "Talk to an Advisor") {
      setTimeout(() => {
        push("bot", "Great — opening the advisor request form for you now.");
        openModal("advisor");
      }, 350);
    } else if (label === "Download Brochure") {
      setTimeout(() => {
        push("bot", "Opening the brochure download form — takes a few seconds.");
        openModal("brochure");
      }, 350);
    } else {
      setTimeout(() => {
        push(
          "bot",
          "We run three tracks: AI & ML Professional, PG Executive Agentic AI & Generative AI, and Forward Deployed Engineering — all beginner-friendly and covered by the 180-day guarantee. Want an advisor to help you pick?"
        );
      }, 400);
    }
  }

  const quickReplies = ["Talk to an Advisor", "Download Brochure", "Which program fits me?"];

  return (
    <>
      {/* Launcher — sits above the sticky contact bar */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="brutal-btn fixed bottom-20 right-4 z-40 h-14 w-14 bg-yellow text-2xl text-black sm:right-6"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="brutal-lg fixed bottom-36 right-4 z-40 flex h-[26rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden bg-surface sm:right-6">
          {/* header */}
          <div className="flex items-center justify-between border-b-3 border-ink bg-ink px-4 py-3 text-bg">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-[4px] border-3 border-bg bg-yellow font-display text-sm text-black">
                E
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-wide">
                Empowers Assistant
              </span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-lg">
              ✕
            </button>
          </div>

          {/* messages */}
          <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto bg-bg p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`brutal-sm max-w-[85%] px-3 py-2 font-mono text-sm leading-snug ${
                    m.from === "user" ? "bg-cobalt text-white" : "bg-surface text-ink"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* quick replies */}
          <div className="flex flex-wrap gap-2 border-t-3 border-ink bg-surface p-3">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => handleQuickReply(q)}
                className="brutal-sm bg-yellow px-3 py-1.5 font-heading text-xs font-bold text-black transition-transform active:translate-x-[2px] active:translate-y-[2px]"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
