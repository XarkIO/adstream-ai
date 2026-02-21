"use client";

import { useMemo, useState } from "react";

type HookVariation = "Question" | "Stat" | "Visual";

type ScriptContent = {
  hook: string;
  body: string;
  cta: string;
};

const hookOptions: HookVariation[] = ["Question", "Stat", "Visual"];
const keyframeSlots = Array.from({ length: 6 }, (_, index) => index + 1);

function buildScript(variation: HookVariation): ScriptContent {
  if (variation === "Stat") {
    return {
      hook: "72% of top-performing mobile ads win attention in the first 2 seconds.",
      body: "Show the product solving one urgent pain point with layered UI callouts and fast proof beats.",
      cta: "Install now to unlock the full experience in under a minute.",
    };
  }

  if (variation === "Visual") {
    return {
      hook: "Open on a high-contrast before/after sequence with motion-tracked text overlays.",
      body: "Cut through three moments: frustration, product interaction, and transformation with clean pacing.",
      cta: "Tap to install and see your first result today.",
    };
  }

  return {
    hook: "Still editing ads manually while competitors auto-optimize every frame?",
    body: "Introduce the product value prop, demo the workflow in motion, and reinforce credibility with proof points.",
    cta: "Start now and turn raw assets into campaign-ready creatives.",
  };
}

export function Step3Scripting() {
  const [hookVariation, setHookVariation] = useState<HookVariation>("Question");
  const [script, setScript] = useState<ScriptContent>(() => buildScript("Question"));

  const scriptScore = useMemo(() => {
    const text = `${script.hook} ${script.body} ${script.cta}`;
    const words = text.trim().split(/\s+/).length;
    let score = 70;

    if (words >= 28 && words <= 55) score += 10;
    if (script.hook.includes("?") || /\d/.test(script.hook)) score += 8;
    if (/install|start|tap|try|download/i.test(script.cta)) score += 7;
    if (hookVariation === "Visual") score += 3;

    return Math.min(98, score);
  }, [hookVariation, script]);

  const generateScript = () => {
    setScript(buildScript(hookVariation));
  };

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Step 3</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-100">Scripting & Storyboarding</h3>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr),340px]">
        <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-100">Script Structure</p>
            <div className="flex gap-2">
              {hookOptions.map((option) => {
                const active = option === hookVariation;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setHookVariation(option)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                      active
                        ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <article className="rounded-lg border border-[color:var(--hook)]/40 bg-[color:var(--hook)]/10 p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Hook</p>
              <p className="mt-1 text-sm text-slate-100">{script.hook}</p>
            </article>
            <article className="rounded-lg border border-slate-600/70 bg-slate-900/75 p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Body</p>
              <p className="mt-1 text-sm text-slate-100">{script.body}</p>
            </article>
            <article className="rounded-lg border border-violet-400/35 bg-violet-400/10 p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-violet-200">CTA</p>
              <p className="mt-1 text-sm text-slate-100">{script.cta}</p>
            </article>
          </div>
        </div>

        <div className="space-y-5">
          <section className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-100">Script Score</p>
              <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs font-semibold text-cyan-200">{scriptScore}/100</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                style={{ width: `${scriptScore}%` }}
              />
            </div>
            <button
              type="button"
              onClick={generateScript}
              className="mt-4 w-full rounded-lg border border-cyan-300/60 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/20"
            >
              Generate
            </button>
          </section>

          <section className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-slate-100">Keyframe Preview</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {keyframeSlots.map((slot) => (
                <div
                  key={slot}
                  className="aspect-video rounded-lg border border-dashed border-slate-600 bg-slate-900/60 p-2"
                >
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Frame {slot}</p>
                  <p className="mt-2 text-xs text-slate-300">{slot <= 2 ? "Hook" : slot <= 5 ? "Body" : "CTA"}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
