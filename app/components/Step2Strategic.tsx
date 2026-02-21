"use client";

import { useMemo, useState } from "react";

type Vibe = "Minimal" | "Bold" | "Premium" | "Playful" | "Professional";
type Music = "Upbeat" | "Calm" | "Corporate" | "Trendy" | "Cinematic";
type Animation = "UI Overlays" | "Cinematic B-Roll" | "Stop Motion" | "3D Render" | "Live Action";
type Goal = "App Installs" | "Brand Awareness" | "Conversions" | "Traffic";

const vibeOptions: Vibe[] = ["Minimal", "Bold", "Premium", "Playful", "Professional"];
const musicOptions: Music[] = ["Upbeat", "Calm", "Corporate", "Trendy", "Cinematic"];
const animationOptions: Animation[] = ["UI Overlays", "Cinematic B-Roll", "Stop Motion", "3D Render", "Live Action"];
const goalOptions: Goal[] = ["App Installs", "Brand Awareness", "Conversions", "Traffic"];

export function Step2Strategic() {
  const [vibe, setVibe] = useState<Vibe>("Bold");
  const [music, setMusic] = useState<Music>("Trendy");
  const [animationStyle, setAnimationStyle] = useState<Animation>("UI Overlays");
  const [goal, setGoal] = useState<Goal>("Conversions");

  const warnings = useMemo(() => {
    const conflicts: string[] = [];

    if (vibe === "Professional" && (music === "Trendy" || music === "Upbeat")) {
      conflicts.push("Professional vibe can clash with Trendy/Upbeat tracks for enterprise messaging.");
    }

    if (vibe === "Minimal" && animationStyle === "Stop Motion") {
      conflicts.push("Minimal vibe usually underperforms with Stop Motion due to visual complexity.");
    }

    if (goal === "App Installs" && animationStyle === "Cinematic B-Roll") {
      conflicts.push("App Installs campaigns need stronger product UI focus than Cinematic B-Roll usually provides.");
    }

    if (goal === "Conversions" && music === "Cinematic") {
      conflicts.push("Cinematic music can reduce direct-response clarity for conversion-focused ads.");
    }

    if (vibe === "Premium" && music === "Upbeat") {
      conflicts.push("Premium positioning generally performs better with Calm or Cinematic tracks than Upbeat.");
    }

    return conflicts;
  }, [animationStyle, goal, music, vibe]);

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Step 2</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-100">Strategic Alignment Dashboard</h3>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Visual Grid for Vibe</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {vibeOptions.map((item) => {
              const active = item === vibe;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVibe(item)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Music Selection</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {musicOptions.map((item) => {
              const active = item === music;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMusic(item)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Animation Style</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {animationOptions.map((item) => {
              const active = item === animationStyle;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAnimationStyle(item)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                    active
                      ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Campaign Goal</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {goalOptions.map((item) => {
              const active = item === goal;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGoal(item)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                    active
                      ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-700/80 bg-slate-950/70 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-100">Constraint Enforcement</p>
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              warnings.length === 0 ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"
            }`}
          >
            {warnings.length === 0 ? "No conflicts" : `${warnings.length} warnings`}
          </span>
        </div>

        {warnings.length === 0 ? (
          <p className="mt-2 text-sm text-slate-300">Current strategy alignment is valid for generation.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {warnings.map((warning) => (
              <li key={warning} className="rounded-lg border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-sm text-amber-100">
                {warning}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
