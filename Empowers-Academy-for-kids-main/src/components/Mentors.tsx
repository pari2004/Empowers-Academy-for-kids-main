import Image from "next/image";
import { MENTORS } from "@/lib/site-data";

export default function Mentors() {
  return (
    <section id="mentors" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
          Meet Your Mentors
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
          Learn From FAANG &amp; MAANG Practitioners
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MENTORS.map((m) => (
            <div key={m.name} className="brutal-card brutal-hover overflow-hidden bg-surface">
              <div className="relative aspect-[4/3] border-b-3 border-ink bg-cobalt/15">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-yellow">
                    <span className="font-display text-6xl text-black">{m.initials}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-heading text-lg font-bold leading-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                    {m.focus}
                  </p>
                </div>
                <span className="brutal-sm flex h-9 w-9 shrink-0 items-center justify-center bg-orange font-display text-xs text-black">
                  {m.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
