"use client";

import { useState, useEffect } from "react";
import { heroImages, heroVideo } from "@/lib/projects";

export default function Hero() {
  const images = heroImages;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
      {heroVideo ? (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={heroVideo.src}
          poster={heroVideo.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-[2400ms] ease-in-out ${
              idx === currentIdx ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              key={idx === currentIdx ? `on-${currentIdx}` : `off-${idx}`}
              className={`h-full w-full bg-cover bg-center ${idx === currentIdx ? "kenburns" : ""}`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-background/30" />

      {/* Linee di costruzione, come nel logo */}
      <div className="pointer-events-none absolute inset-y-0 left-[7%] z-10 hidden w-px bg-primary/30 md:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[22%] z-10 hidden h-px bg-primary/20 md:block" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-10 md:pb-28">
        <h1 className="rise max-w-4xl font-serif text-5xl font-light leading-[1.02] text-foreground sm:text-7xl md:text-8xl">
          Spazi su misura, dal primo schizzo al cantiere.
        </h1>

        <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
          Arch. Antonello Zambrano, architetto dal 1996. Progettazione, interior design, strutture e direzione lavori.
        </p>

        <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a
            href="#galleria"
            className="bg-primary px-9 py-4 text-base font-normal tracking-wide text-background transition hover:bg-accent"
          >
            Vedi i progetti
          </a>
          <a
            href="#contatti"
            className="border-b border-primary/60 pb-1 text-base font-light tracking-wide text-foreground transition hover:border-primary hover:text-primary"
          >
            Scrivimi
          </a>
        </div>

        <div className="absolute bottom-8 right-6 hidden items-center gap-2 sm:right-10 md:flex" aria-hidden="true">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-px transition-all duration-700 ${i === currentIdx ? "w-10 bg-primary" : "w-5 bg-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
