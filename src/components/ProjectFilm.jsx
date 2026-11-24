"use client";

import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export default function ProjectFilm({ poster, className, onError }) {
  const videoRef = useRef(null);
  const [message, setMessage] = useState("");

  const playWithMusic = async () => {
    const video = videoRef.current;
    video.muted = false;
    video.volume = 1;
    try {
      await video.play();
      setMessage("");
    } catch {
      setMessage("Premi Play nel lettore per avviare il film.");
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        className={className}
        controls
        playsInline
        preload="none"
        width="1920"
        height="1080"
        poster={poster}
        onError={onError}
        src="/portfolio/coppola-capoluogo/film-chill-house-rev03.mp4"
        aria-label="Cortometraggio Capoluogo Coppola con musica e didascalie"
      />
      <button
        type="button"
        onClick={playWithMusic}
        className="mt-4 inline-flex cursor-pointer items-center gap-2 border border-primary px-5 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-background"
      >
        <Volume2 className="h-4 w-4" aria-hidden="true" />
        Riproduci con musica
      </button>
      {message && <p role="status" className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

