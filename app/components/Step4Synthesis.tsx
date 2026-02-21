"use client";

import { useEffect, useMemo, useState } from "react";

const outputSlots = Array.from({ length: 10 }, (_, index) => index + 1);

export function Step4Synthesis() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isGenerating) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          setIsGenerating(false);
          return 100;
        }
        return Math.min(100, current + 10);
      });
    }, 260);

    return () => window.clearInterval(timer);
  }, [isGenerating]);

  const generatedCount = useMemo(() => Math.floor((progress / 100) * outputSlots.length), [progress]);

  const startGeneration = () => {
    setProgress(0);
    setIsGenerating(true);
  };

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Step 4</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-100">Video Synthesis</h3>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr),280px]">
        <section className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <p className="text-sm font-semibold text-slate-100">Output Preview</p>
          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
            {outputSlots.map((slot) => {
              const ready = slot <= generatedCount;
              return (
                <div
                  key={slot}
                  className={`aspect-video rounded-lg border p-2 ${
                    ready
                      ? "border-cyan-300/50 bg-cyan-400/10"
                      : "border-dashed border-slate-600 bg-slate-900/60"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.1em] text-slate-400">Video {slot}</p>
                  <p className={`mt-2 text-xs ${ready ? "text-cyan-100" : "text-slate-400"}`}>
                    {ready ? "Rendered" : "Queued"}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="space-y-4 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Quality Guard</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {progress === 100 ? "Passed: Frame, Audio, CTA checks" : "Monitoring outputs..."}
            </p>
            <p className="mt-1 text-xs text-slate-400">Brand safety, pacing, subtitle, and audio level validation enabled.</p>
          </div>

          <button
            type="button"
            onClick={startGeneration}
            disabled={isGenerating}
            className="w-full rounded-lg border border-cyan-300/60 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-100 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-cyan-400/20"
          >
            {isGenerating ? "Generating Videos..." : "Generate Videos"}
          </button>

          <div>
            <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-[width]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={progress < 100}
            className="w-full rounded-lg border border-violet-300/50 bg-violet-400/10 px-3 py-2 text-sm font-semibold text-violet-100 disabled:cursor-not-allowed disabled:opacity-45 hover:bg-violet-400/20"
          >
            Download All
          </button>
        </aside>
      </div>
    </section>
  );
}
