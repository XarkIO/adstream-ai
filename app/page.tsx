"use client";

import { useState } from "react";
import { AssetTray } from "./components/AssetTray";
import { Step1Ingestion } from "./components/Step1Ingestion";
import { StepIndicator } from "./components/StepIndicator";
import { Step2Strategic } from "./components/Step2Strategic";
import { Step3Scripting } from "./components/Step3Scripting";
import { Step4Synthesis } from "./components/Step4Synthesis";
import { Timeline } from "./components/Timeline";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <header className="rounded-2xl border border-cyan-300/25 bg-slate-950/70 px-5 py-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">AdStream AI</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">
            Creative Control Room
          </h1>
        </header>

        <Timeline />

        <div className="grid gap-5 lg:grid-cols-[320px,1fr]">
          <AssetTray />

          <section className="space-y-5">
            <StepIndicator currentStep={currentStep} onStepChange={setCurrentStep} />
            {currentStep === 1 ? <Step1Ingestion /> : null}
            {currentStep === 2 ? <Step2Strategic /> : null}
            {currentStep === 3 ? <Step3Scripting /> : null}
            {currentStep === 4 ? <Step4Synthesis /> : null}
          </section>
        </div>
      </div>
    </main>
  );
}
