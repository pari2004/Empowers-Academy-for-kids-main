import { GUARANTEE_STEPS } from "@/lib/site-data";

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-cobalt px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center text-white">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-yellow">
            The Guarantee Procedure
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">
            Plain-Language. In Writing.
          </h2>
        </div>

        {/* Stamped legal-document card */}
        <div className="brutal-lg relative bg-surface p-6 sm:p-10">
          <span className="brutal-sm absolute -right-3 -top-4 rotate-6 bg-orange px-3 py-2 font-display text-xs uppercase tracking-widest text-black sm:text-sm">
            Guaranteed
          </span>

          <div className="mb-6 flex items-center justify-between border-b-3 border-ink pb-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-ink-soft">
              Empowers Academy · Better-Offer Agreement
            </span>
            <span className="font-mono text-xs text-ink-soft">Ref. 180-DAY</span>
          </div>

          <ol className="space-y-5">
            {GUARANTEE_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border-3 border-ink bg-yellow font-display text-base text-black">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-4 border-t-3 border-ink pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                Signed before any payment is collected
              </p>
              <p className="mt-2 font-display text-2xl italic text-ink">Empowers Academy</p>
              <div className="mt-1 h-1 w-40 bg-ink" />
            </div>
            <div className="brutal-sm flex h-20 w-20 rotate-[-6deg] items-center justify-center bg-orange text-center font-display text-[10px] uppercase leading-tight text-black">
              Signed &amp; Sealed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
