import { ALUMNI, STATS } from "@/lib/site-data";

export default function Outcomes() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-cobalt">
          Placement &amp; Outcomes
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
          From Where They Were, To Where They Landed
        </h2>

        {/* Stats tiles */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="brutal-card bg-surface p-6 text-ink">
              <div className="font-display text-3xl font-extrabold leading-none text-ink sm:text-4xl">{s.value}</div>
              <div className="mt-2 font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wide text-ink">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes table (desktop) */}
        <div className="brutal mt-8 hidden overflow-hidden bg-surface md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-ink text-bg">
                {["Name", "Prior Role", "New Role", "Company"].map((h) => (
                  <th key={h} className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALUMNI.map((a, i) => (
                <tr key={a.name} className={i % 2 ? "bg-bg" : "bg-surface"}>
                  <td className="border-t-3 border-ink px-5 py-3 font-heading text-sm sm:text-base font-bold text-ink">
                    {a.name}
                  </td>
                  <td className="border-t-3 border-ink px-5 py-3 font-mono text-sm sm:text-base font-medium text-ink">
                    {a.prior}
                  </td>
                  <td className="border-t-3 border-ink px-5 py-3 font-mono text-sm sm:text-base font-bold text-ink">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-orange font-extrabold">→</span> {a.role}
                    </span>
                  </td>
                  <td className="border-t-3 border-ink px-5 py-3">
                    <span className="inline-flex rounded-[4px] border-3 border-ink bg-cobalt px-2.5 py-1 font-heading text-xs sm:text-sm font-bold text-white shadow-sm">
                      {a.company}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Outcomes cards (mobile) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:hidden">
          {ALUMNI.map((a) => (
            <div key={a.name} className="brutal-card bg-surface p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-heading text-base font-bold text-ink">{a.name}</span>
                <span className="inline-flex rounded-[4px] border-3 border-ink bg-cobalt px-2.5 py-1 font-heading text-xs font-bold text-white shadow-sm">
                  {a.company}
                </span>
              </div>
              <p className="mt-2 font-mono text-sm font-medium text-ink">
                {a.prior} <span className="font-bold text-orange">→</span>{" "}
                <span className="font-bold text-ink">{a.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
