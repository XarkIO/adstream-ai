"use client";

type StepIndicatorProps = {
  currentStep: number;
  onStepChange: (step: number) => void;
};

const steps = [
  { number: 1, label: "Ingestion" },
  { number: 2, label: "Storyboard" },
  { number: 3, label: "Generate" },
  { number: 4, label: "Export" },
];

export function StepIndicator({ currentStep, onStepChange }: StepIndicatorProps) {
  const progress = (currentStep / steps.length) * 100;

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Pipeline Progress</p>
          <p className="mt-1 text-lg font-semibold text-slate-100">
            Step {currentStep} of {steps.length}
          </p>
        </div>
        <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-900">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {steps.map((step) => {
          const isActive = step.number === currentStep;
          return (
            <button
              key={step.number}
              type="button"
              onClick={() => onStepChange(step.number)}
              className={`rounded-lg border px-3 py-2 text-left transition-colors ${
                isActive
                  ? "border-cyan-300/80 bg-cyan-400/10 text-cyan-100"
                  : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-slate-500"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.14em]">Step {step.number}</p>
              <p className="mt-1 text-sm font-semibold">{step.label}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
