import { WHY_CARDS } from "@/lib/site-data";

export default function WhyEmpowers() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
          Why Empowers
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
          Built on a Promise We Put in Writing
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className={`brutal-card brutal-hover flex flex-col p-7 bg-surface text-ink ${
                card.loud
                  ? "sm:col-span-2 lg:col-span-1 lg:row-span-1 border-orange"
                  : ""
              }`}
              style={card.loud ? { borderColor: "var(--accent-orange)", borderWidth: 4 } : {}}
            >
              {card.loud && (
                <span className="mb-3 inline-flex w-fit rounded-[4px] border-3 border-black bg-yellow px-2 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-black shadow-sm">
                  The Big One
                </span>
              )}
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold leading-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-3 font-mono text-sm sm:text-base font-medium leading-relaxed text-ink">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
