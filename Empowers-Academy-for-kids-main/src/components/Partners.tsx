import { PARTNERS } from "@/lib/site-data";

export default function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bg-cobalt px-4 py-14 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-extrabold uppercase leading-none sm:text-4xl text-white drop-shadow">
          Where Our Alumni Work
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-sm font-bold text-white sm:text-base">
          200+ hiring partner companies, from global tech to India&apos;s
          fastest-growing startups.
        </p>
      </div>

      <div className="marquee-track mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="brutal-sm shrink-0 whitespace-nowrap bg-surface px-5 py-3 font-heading text-base sm:text-lg font-extrabold text-ink border-ink"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
