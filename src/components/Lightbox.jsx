"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export default function Lightbox({
  images,
  captions,
  title,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelectIndex = () => {},
}) {
  const [zoom, setZoom] = useState(false);
  const touchX = useRef(null);
  const thumbs = useRef(null);

  // Torna alla vista intera ad ogni cambio immagine.
  useEffect(() => setZoom(false), [currentIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  // Tiene visibile la miniatura attiva.
  useEffect(() => {
    const el = thumbs.current?.children[currentIndex];
    el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [currentIndex]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = useCallback(
    (e) => {
      if (touchX.current === null || zoom) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      touchX.current = null;
      if (Math.abs(dx) > 60) (dx > 0 ? onPrev : onNext)();
    },
    [zoom, onPrev, onNext]
  );

  if (!images || images.length === 0) return null;
  const caption = captions?.[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate font-serif text-base text-foreground/90">{title}</p>
          <p className="text-xs tracking-widest text-primary">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom((z) => !z)}
            className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:border-primary/60 hover:text-primary"
            aria-label={zoom ? "Riduci" : "Ingrandisci"}
          >
            {zoom ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </button>
          <button
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:border-primary/60 hover:text-primary"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`relative flex min-h-0 flex-1 ${zoom ? "overflow-auto" : "overflow-hidden"}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={caption || `${title} — immagine ${currentIndex + 1}`}
          onClick={() => setZoom((z) => !z)}
          draggable={false}
          className={`m-auto select-none ${
            zoom ? "max-w-none cursor-zoom-out" : "max-h-full max-w-full cursor-zoom-in object-contain"
          }`}
          style={zoom ? { width: "220%" } : undefined}
        />
        {!zoom && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 transition hover:border-primary/60 hover:text-primary sm:left-5"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 transition hover:border-primary/60 hover:text-primary sm:right-5"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {caption && !zoom && (
        <p className="mx-auto max-h-24 max-w-3xl overflow-y-auto px-6 pt-3 text-center text-sm font-light leading-relaxed text-foreground/70">
          {caption}
        </p>
      )}

      <div className="px-4 pb-4 pt-3">
        <div ref={thumbs} className="flex gap-2 overflow-x-auto px-1 py-1 sm:justify-center">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => onSelectIndex(idx)}
              aria-label={`Vai all'immagine ${idx + 1}`}
              className={`h-12 w-16 flex-shrink-0 overflow-hidden border transition sm:h-14 sm:w-20 ${
                idx === currentIndex ? "border-primary opacity-100" : "border-white/10 opacity-40 hover:opacity-80"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
