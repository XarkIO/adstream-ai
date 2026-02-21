"use client";

import { useState } from "react";

type Segment = {
  id: "hook" | "story" | "cta";
  label: "HOOK" | "STORY" | "CTA";
  start: number;
  end: number;
  color: string;
  note: string;
};

const DURATION_SECONDS = 20;

const segments: Segment[] = [
  {
    id: "hook",
    label: "HOOK",
    start: 0,
    end: 3,
    color: "#00FFFF",
    note: "Pattern interrupt and opening visual punch.",
  },
  {
    id: "story",
    label: "STORY",
    start: 3,
    end: 17,
    color: "#333333",
    note: "Core narrative, proof, and product context.",
  },
  {
    id: "cta",
    label: "CTA",
    start: 17,
    end: 20,
    color: "#8B5CF6",
    note: "Offer, urgency, and next action.",
  },
];

const formatTime = (seconds: number) => `${String(seconds).padStart(2, "0")}s`;

export function Timeline() {
  const [selected, setSelected] = useState<Segment["id"]>("hook");
  const [hovered, setHovered] = useState<Segment["id"] | null>(null);

  const activeId = hovered ?? selected;
  const activeSegment = segments.find((segment) => segment.id === activeId) ?? segments[0];
  const centerPercent = ((activeSegment.start + activeSegment.end) / 2 / DURATION_SECONDS) * 100;

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-[0.24em] text-slate-200">TIMELINE</h2>
        <span className="rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
          20s AD
        </span>
      </div>

      <div className="relative">
        <div className="flex h-16 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70">
          {segments.map((segment) => {
            const isActive = activeId === segment.id;
            const width = `${((segment.end - segment.start) / DURATION_SECONDS) * 100}%`;
            return (
              <button
                key={segment.id}
                type="button"
                className={`group flex h-full flex-col justify-center border-r border-slate-950/80 px-3 text-left text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 last:border-r-0 ${
                  isActive ? "ring-2 ring-cyan-300/80 ring-inset" : "hover:brightness-110"
                }`}
                style={{ width, backgroundColor: segment.color }}
                onClick={() => setSelected(segment.id)}
                onMouseEnter={() => setHovered(segment.id)}
                onMouseLeave={() => setHovered(null)}
                aria-label={`${segment.label} ${formatTime(segment.start)}-${formatTime(segment.end)}`}
              >
                <span>{segment.label}</span>
                <span className="mt-1 text-[10px] text-white/75">
                  {String(segment.start).padStart(2, "0")}-{String(segment.end).padStart(2, "0")}s
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="pointer-events-none absolute top-full z-10 mt-3 w-60 -translate-x-1/2 rounded-lg border border-cyan-300/35 bg-slate-950/95 px-3 py-2 text-xs text-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
          style={{ left: `${Math.min(Math.max(centerPercent, 14), 86)}%` }}
        >
          <p className="font-semibold text-cyan-200">
            {activeSegment.label}: {formatTime(activeSegment.start)}-{formatTime(activeSegment.end)}
          </p>
          <p className="mt-1 text-slate-300">{activeSegment.note}</p>
        </div>
      </div>
    </section>
  );
}
