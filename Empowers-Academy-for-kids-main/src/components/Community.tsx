import { COMMUNITY } from "@/lib/site-data";

export default function Community() {
  return (
    <section className="bg-orange px-4 py-16 text-black sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest">
          Community Exclusive
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-none sm:text-5xl">
          More Than a Program — A Career-Long Network
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {COMMUNITY.map((item) => (
            <li
              key={item}
              className="brutal-card flex items-start gap-3 bg-surface p-5 text-ink"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border-3 border-ink bg-yellow font-display text-xs text-black">
                ◆
              </span>
              <span className="font-mono text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
