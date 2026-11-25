import { JOURNEY } from "@/lib/site-data";

export default function Journey() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
          The Path
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
          Your Journey with Empowers Academy
        </h2>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEY.map((step, i) => (
            <li
              key={step.title}
              className="brutal-card brutal-hover flex items-start gap-4 bg-surface p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] border-3 border-ink bg-yellow font-display text-2xl text-black">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-mono text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
