"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Briefcase, Award } from "lucide-react";

export default function Hero() {
  const images = ["/VILLA-PROG-1.png", "/PORTICO-2-RENDER.png", "/CUCINA-2.png"];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out bg-cover bg-center ${
            idx === currentIdx ? "opacity-30" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50 z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-light bg-primary/10 text-primary border border-primary/30 mb-6 uppercase tracking-wider">
          <Award className="h-3.5 w-3.5" /> Architettura & Interior Design
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground mb-6">
          <span className="block">Arch. Antonello Zambrano</span>
          <span className="block text-xl sm:text-2xl md:text-3xl text-primary font-sans font-light tracking-wide mt-3">
            Progettazione e Direzione Lavori dal 1996
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-foreground/60 font-light mb-10 leading-relaxed">
          Trent'anni di esperienza nella progettazione di spazi su misura e nella gestione integrale di cantieri e strutture complesse. Estetica, rigore tecnico e precisione formale al servizio del territorio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#galleria"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary/60 text-base font-light tracking-wide text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            <Briefcase className="mr-2 h-4 w-4" /> Esplora i Progetti
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 text-base font-light tracking-wide text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            Contattami
          </a>
        </div>

        <a
          href="#bio"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/40 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase mb-2 font-light">Scopri di più</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
        </a>
      </div>
    </section>
  );
}
