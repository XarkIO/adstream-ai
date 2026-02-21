"use client";

import { useState } from "react";

type UploadedAsset = {
  id: string;
  name: string;
};

const MAX_COMPETITORS = 5;

export function Step1Ingestion() {
  const [brandUrl, setBrandUrl] = useState("");
  const [competitors, setCompetitors] = useState([""]);
  const [assets, setAssets] = useState<UploadedAsset[]>([]);
  const [dragging, setDragging] = useState(false);

  const addCompetitor = () => {
    setCompetitors((prev) => (prev.length < MAX_COMPETITORS ? [...prev, ""] : prev));
  };

  const updateCompetitor = (index: number, value: string) => {
    setCompetitors((prev) => prev.map((item, itemIndex) => (itemIndex === index ? value : item)));
  };

  const removeCompetitor = (index: number) => {
    setCompetitors((prev) => (prev.length === 1 ? prev : prev.filter((_, itemIndex) => itemIndex !== index)));
  };

  const addAssets = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const next = Array.from(files).map((file, index) => ({
      id: `${Date.now()}-${index}-${file.name}`,
      name: file.name,
    }));
    setAssets((prev) => [...prev, ...next]);
  };

  return (
    <section className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Step 1</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-100">Creative Ingestion</h3>

      <form className="mt-5 space-y-5">
        <div>
          <label htmlFor="brand-url" className="text-sm font-semibold text-slate-200">
            Brand URL
          </label>
          <input
            id="brand-url"
            type="url"
            value={brandUrl}
            onChange={(event) => setBrandUrl(event.target.value)}
            placeholder="https://yourbrand.com"
            className="mt-2 w-full rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/70 focus:outline-none"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-200">Competitor URLs</label>
            <button
              type="button"
              onClick={addCompetitor}
              disabled={competitors.length >= MAX_COMPETITORS}
              className="rounded-md border border-cyan-300/40 px-2 py-1 text-xs text-cyan-200 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Add URL
            </button>
          </div>

          <div className="space-y-2">
            {competitors.map((url, index) => (
              <div key={`competitor-${index}`} className="flex gap-2">
                <input
                  type="url"
                  value={url}
                  onChange={(event) => updateCompetitor(index, event.target.value)}
                  placeholder={`https://competitor-${index + 1}.com`}
                  className="w-full rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/70 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeCompetitor(index)}
                  className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 text-xs text-slate-300 hover:border-rose-300/50 hover:text-rose-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-200">Brand Assets</p>
          <label
            className={`mt-2 block cursor-pointer rounded-lg border border-dashed bg-slate-950/65 p-5 text-center transition-colors ${
              dragging ? "border-cyan-300/80" : "border-slate-600/70"
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              addAssets(event.dataTransfer.files);
            }}
          >
            <input
              type="file"
              multiple
              className="hidden"
              accept="image/*,video/*,.psd,.ai,.pdf"
              onChange={(event) => addAssets(event.target.files)}
            />
            <p className="text-sm text-slate-300">Drag files here or click to browse</p>
            <p className="mt-1 text-xs text-slate-500">Images, videos, and creative source files</p>
          </label>

          {assets.length > 0 ? (
            <ul className="mt-3 space-y-1">
              {assets.map((asset) => (
                <li
                  key={asset.id}
                  className="rounded-md border border-slate-700/70 bg-slate-900/75 px-2 py-1 text-xs text-slate-200"
                >
                  {asset.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </form>
    </section>
  );
}
