"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SectionId = "videos" | "photos";

type Asset = {
  id: string;
  name: string;
  previewUrl: string;
  kind: SectionId;
  mimeType: string;
};

const sections = [
  { id: "videos" as const, title: "Reference Videos", hint: "Drop MP4 or MOV clips" },
  { id: "photos" as const, title: "Product Photos", hint: "Drop PNG or JPG images" },
];

export function AssetTray() {
  const [videoAssets, setVideoAssets] = useState<Asset[]>([]);
  const [photoAssets, setPhotoAssets] = useState<Asset[]>([]);
  const [dragging, setDragging] = useState<SectionId | null>(null);
  const [hoveredAsset, setHoveredAsset] = useState<Asset | null>(null);
  const idRef = useRef(0);
  const createdUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    const urlsRef = createdUrlsRef;
    return () => {
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const pushAssets = (files: FileList | null, forcedSection?: SectionId) => {
    if (!files || files.length === 0) return;
    const nextVideos: Asset[] = [];
    const nextPhotos: Asset[] = [];

    Array.from(files).forEach((file) => {
      const inferredKind: SectionId =
        forcedSection ?? (file.type.startsWith("video/") ? "videos" : "photos");
      const asset: Asset = {
        id: `asset-${idRef.current++}`,
        name: file.name,
        previewUrl: (() => {
          const previewUrl = URL.createObjectURL(file);
          createdUrlsRef.current.push(previewUrl);
          return previewUrl;
        })(),
        kind: inferredKind,
        mimeType: file.type,
      };
      if (inferredKind === "videos") {
        nextVideos.push(asset);
      } else {
        nextPhotos.push(asset);
      }
    });

    if (nextVideos.length) setVideoAssets((prev) => [...prev, ...nextVideos]);
    if (nextPhotos.length) setPhotoAssets((prev) => [...prev, ...nextPhotos]);
  };

  return (
    <aside className="relative h-full rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
      <h2 className="mb-4 text-sm font-semibold tracking-[0.24em] text-slate-200">ASSET TRAY</h2>

      <div className="space-y-4">
        {sections.map((section) => {
          const assets = section.id === "videos" ? videoAssets : photoAssets;
          const isDragging = dragging === section.id;
          return (
            <div
              key={section.id}
              className={`rounded-xl border bg-[color:var(--panel-muted)] p-4 transition-colors ${
                isDragging ? "border-cyan-300/80" : "border-cyan-300/30"
              }`}
              onDragOver={(event) => {
                event.preventDefault();
                setDragging(section.id);
              }}
              onDragLeave={() => setDragging(null)}
              onDrop={(event) => {
                event.preventDefault();
                setDragging(null);
                pushAssets(event.dataTransfer.files, section.id);
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-100">{section.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{section.hint}</p>
                </div>
                <label className="cursor-pointer rounded-md border border-cyan-300/40 bg-slate-900/60 px-2 py-1 text-xs text-cyan-200 hover:border-cyan-300/70">
                  Upload
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    accept={section.id === "videos" ? "video/*" : "image/*"}
                    onChange={(event) => pushAssets(event.target.files, section.id)}
                  />
                </label>
              </div>

              <div className="mt-3 rounded-lg border border-dashed border-slate-600/70 bg-slate-900/70 p-3 text-xs text-slate-400">
                {assets.length === 0 ? (
                  <p className="text-center">Drag and drop files here</p>
                ) : (
                  <ul className="space-y-2">
                    {assets.map((asset) => (
                      <li
                        key={asset.id}
                        className="rounded-md border border-slate-700/70 bg-slate-950/75 px-2 py-1 text-slate-200"
                        onMouseEnter={() => setHoveredAsset(asset)}
                        onMouseLeave={() => setHoveredAsset((current) => (current?.id === asset.id ? null : current))}
                      >
                        {asset.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hoveredAsset ? (
        <div className="pointer-events-none absolute right-4 top-4 z-20 w-48 rounded-lg border border-cyan-300/45 bg-slate-950/95 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <p className="mb-2 truncate text-[11px] text-cyan-200">{hoveredAsset.name}</p>
          {hoveredAsset.kind === "videos" || hoveredAsset.mimeType.startsWith("video/") ? (
            <video className="h-28 w-full rounded object-cover" src={hoveredAsset.previewUrl} muted />
          ) : (
            <Image
              className="h-28 w-full rounded object-cover"
              src={hoveredAsset.previewUrl}
              alt={hoveredAsset.name}
              width={192}
              height={112}
              unoptimized
            />
          )}
        </div>
      ) : null}
    </aside>
  );
}
