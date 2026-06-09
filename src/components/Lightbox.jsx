"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onSelectIndex }) {
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-sm p-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-white py-2 px-4 z-10">
        <span className="text-sm font-medium tracking-wider bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800/40">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-gray-900/60 hover:bg-primary/20 text-white hover:text-primary transition-all border border-gray-800/40 hover:border-primary/30"
          aria-label="Chiudi visualizzatore"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-grow flex items-center justify-center max-h-[75vh]">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 p-3 rounded-full bg-gray-900/60 hover:bg-primary/20 text-white hover:text-primary transition-all border border-gray-800/40 hover:border-primary/30 z-10"
          aria-label="Immagine precedente"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Current Image */}
        <div className="relative max-w-full max-h-full flex items-center justify-center p-2 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentIndex]}
            alt={`Progetto immagine ${currentIndex + 1}`}
            className="object-contain max-w-full max-h-[70vh] rounded-lg shadow-2xl transition-transform duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 p-3 rounded-full bg-gray-900/60 hover:bg-primary/20 text-white hover:text-primary transition-all border border-gray-800/40 hover:border-primary/30 z-10"
          aria-label="Immagine successiva"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      {/* Thumbnail Strip Footer */}
      <div className="py-4 flex flex-col items-center justify-center z-10">
        <div className="flex gap-2.5 overflow-x-auto max-w-full px-4 py-2 justify-start sm:justify-center scrollbar-thin scrollbar-thumb-gray-800">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? "border-primary opacity-100 scale-105"
                  : "border-gray-800 opacity-40 hover:opacity-75"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
