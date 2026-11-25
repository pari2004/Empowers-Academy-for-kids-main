import Image from "next/image";
import { CONTACT, FOOTER_COLUMNS, NAV_LINKS } from "@/lib/site-data";

const companyHrefs: Record<string, string> = {
  "Why Empowers": "#top",
  Trainers: "#mentors",
  "The Guarantee": "#guarantee",
  Contact: "#contact",
};

export default function Footer() {
  return (
    <footer className="border-t-8 border-ink bg-bg" style={{ borderTopWidth: 8 }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <span className="flex h-12 items-center justify-center">
                <Image src="/logo-light.png" alt="Empowers Academy" width={200} height={48} className="h-10 sm:h-11 w-auto object-contain dark:hidden" />
                <Image src="/logo.png" alt="Empowers Academy" width={200} height={48} className="hidden h-10 sm:h-11 w-auto object-contain dark:block" />
              </span>
            </div>
            <p className="mt-4 font-mono text-sm leading-relaxed text-ink-soft">
              Live, mentor-led AI programs backed by a signed 180-day
              better-offer guarantee.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-sm bg-surface px-3 py-1.5 font-heading text-xs font-bold text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <FooterCol title="Programs">
            {FOOTER_COLUMNS.programs.map((p) => (
              <a key={p} href="#programs" className="footer-link">
                {p}
              </a>
            ))}
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            {FOOTER_COLUMNS.company.map((c) => (
              <a key={c} href={companyHrefs[c] ?? "#top"} className="footer-link">
                {c}
              </a>
            ))}
          </FooterCol>

          {/* Resources + Contact */}
          <FooterCol title="Resources">
            {FOOTER_COLUMNS.resources.map((r) => (
              <a key={r} href="#" className="footer-link">
                {r}
              </a>
            ))}
          </FooterCol>
        </div>

        {/* Contact + hours strip */}
        <div className="mt-10 grid gap-6 border-t-3 border-ink pt-8 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-ink-soft">
              Contact
            </h3>
            <p className="mt-2 font-mono text-sm text-ink">
              <a href={CONTACT.phoneHref} className="hover:text-cobalt">{CONTACT.phone}</a>
              {" · "}
              <a href={CONTACT.emailHref} className="hover:text-cobalt">{CONTACT.email}</a>
            </p>
            <p className="mt-1 font-mono text-sm text-ink-soft">{CONTACT.address}</p>
          </div>
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-ink-soft">
              Business Hours
            </h3>
            <p className="mt-2 font-mono text-sm text-ink-soft">
              {CONTACT.hours.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* Repeated contact bar directly above copyright */}
      <div className="border-t-3 border-ink bg-ink text-bg" style={{ borderTopWidth: 3 }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3 text-center sm:px-6">
          <span className="font-heading text-[11px] font-bold uppercase tracking-wide sm:text-sm">
            Not sure which program fits your career? Talk to us at{" "}
            <a href={CONTACT.phoneHref} className="text-yellow underline">
              {CONTACT.phone}
            </a>{" "}
            or request a call.
          </span>
        </div>
      </div>

      <div className="bg-bg px-4 py-5 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          © 2026 Empowers Academy. All Rights Reserved.
        </p>
      </div>

      {/* keeps quick anchor list crawlable */}
      <nav className="sr-only" aria-hidden>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-cobalt">
        {title}
      </h3>
      <div className="mt-3 flex flex-col gap-2">{children}</div>
    </div>
  );
}
