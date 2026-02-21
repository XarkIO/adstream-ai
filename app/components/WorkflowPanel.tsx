const steps = [
  {
    number: 1,
    title: "Ingest Assets",
    detail: "Load reference footage and product stills into the tray.",
  },
  {
    number: 2,
    title: "Build Narrative",
    detail: "Assemble Hook, Story, and CTA beats into timeline markers.",
  },
  {
    number: 3,
    title: "Style & Voice",
    detail: "Apply motion presets, captions, and audio profile.",
  },
  {
    number: 4,
    title: "Render Output",
    detail: "Export final creative package for campaign launch.",
  },
];

type WorkflowPanelProps = {
  currentStep: number;
};

export function WorkflowPanel({ currentStep }: WorkflowPanelProps) {
  const current = steps[currentStep - 1];

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Current Step</p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-100">
        {current.number}. {current.title}
      </h3>
      <p className="mt-2 max-w-2xl text-slate-300">{current.detail}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {steps.map((step) => {
          const isActive = step.number === currentStep;
          return (
            <div
              key={step.number}
              className={`rounded-xl border p-4 ${
                isActive
                  ? "border-cyan-300/70 bg-cyan-400/10"
                  : "border-slate-700/80 bg-slate-900/55"
              }`}
            >
              <p className="text-sm font-semibold text-slate-100">
                Step {step.number}: {step.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">{step.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
