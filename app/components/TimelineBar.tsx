const segments = [
  { label: "HOOK", range: "00-03s", width: "15%", color: "var(--hook)" },
  { label: "STORY", range: "03-17s", width: "70%", color: "var(--story)" },
  { label: "CTA", range: "17-20s", width: "15%", color: "var(--cta)" },
];

export function TimelineBar() {
  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-[0.24em] text-slate-200">
          TIMELINE
        </h2>
        <span className="rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
          20s
        </span>
      </div>

      <div className="flex h-16 overflow-hidden rounded-lg border border-slate-700/80 bg-slate-950/70">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="flex flex-col justify-center border-r border-slate-900/80 px-3 text-xs font-bold uppercase tracking-[0.14em] text-white last:border-r-0"
            style={{ width: segment.width, backgroundColor: segment.color }}
          >
            <span>{segment.label}</span>
            <span className="mt-1 text-[10px] text-white/75">{segment.range}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
