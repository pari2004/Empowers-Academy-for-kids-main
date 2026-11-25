"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-data";

const DUBAI_CONTACT = {
  phone: "+971 4 391 1111",
  phoneHref: "tel:+97143911111",
  email: "dubai@empowersacademy.in",
  emailHref: "mailto:dubai@empowersacademy.in",
  address:
    "Dubai Knowledge Park, Block 2B, Floor 3, Sheikh Zayed Road, Dubai, United Arab Emirates",
  hours: [
    "Mon–Thu 9:00 AM–6:00 PM",
    "Fri 9:00 AM–1:00 PM",
    "Sat–Sun Closed",
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=Dubai%20Knowledge%20Park%20Dubai%20UAE&t=&z=14&ie=UTF8&iwloc=&output=embed",
};

export default function Contact() {
  const [location, setLocation] = useState<"india" | "dubai">("india");
  const activeData = location === "india" ? CONTACT : DUBAI_CONTACT;

  return (
    <section id="contact" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
          Contact
        </p>
        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
            {location === "india" ? "Talk to Us in Bengaluru" : "Talk to Us in Dubai"}
          </h2>

          {/* Location Switcher Tabs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setLocation("india")}
              className={`brutal-btn px-5 py-2.5 text-sm sm:text-base ${
                location === "india"
                  ? "bg-yellow text-black font-extrabold shadow-[4px_4px_0_0_var(--ink)]"
                  : "brutal-btn-secondary bg-bg text-ink font-bold opacity-80 hover:opacity-100"
              }`}
            >
              🇮🇳 India (Bengaluru)
            </button>
            <button
              onClick={() => setLocation("dubai")}
              className={`brutal-btn px-5 py-2.5 text-sm sm:text-base ${
                location === "dubai"
                  ? "bg-yellow text-black font-extrabold shadow-[4px_4px_0_0_var(--ink)]"
                  : "brutal-btn-secondary bg-bg text-ink font-bold opacity-80 hover:opacity-100"
              }`}
            >
              🇦🇪 Dubai (UAE)
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <div className="brutal-card bg-bg p-6">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-ink-soft">
                Reach Us ({location === "india" ? "India Office" : "Dubai Office"})
              </h3>
              <a
                href={activeData.phoneHref}
                className="mt-2 block font-display text-2xl text-ink hover:text-cobalt"
              >
                {activeData.phone}
              </a>
              <a
                href={activeData.emailHref}
                className="mt-1 block break-all font-mono text-sm font-medium text-ink hover:text-cobalt"
              >
                {activeData.email}
              </a>
              <p className="mt-4 font-mono text-sm font-medium leading-relaxed text-ink">
                {activeData.address}
              </p>
            </div>

            <div className="brutal-card bg-bg p-6">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-ink-soft">
                Business Hours
              </h3>
              <ul className="mt-2 space-y-1 font-mono text-sm font-medium text-ink">
                {activeData.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn brutal-btn-secondary bg-bg px-4 py-2.5 text-sm font-bold text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="brutal overflow-hidden bg-bg">
            <iframe
              key={location}
              title={`Empowers Academy location — ${location === "india" ? "Bengaluru, India" : "Dubai, UAE"}`}
              src={activeData.mapEmbed}
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
