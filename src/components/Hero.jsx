"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Briefcase, Award } from "lucide-react";

export default function Hero() {
  const images = [
    "/immagini/rendering/VILLA-PROG-1.png",
    "/immagini/rendering/PORTICO-2-RENDER.png",
    "/immagini/rendering/CUCINA-2.png"
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            idx === currentIdx ? "opacity-40 scale-105 duration-[6000ms]" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Dark overlay & grid lines for architectural blueprint feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-[#090d16]/40 z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6 uppercase tracking-wider animate-pulse">
          <Award className="h-3.5 w-3.5" /> Architettura & Ingegneria Strutturale
        </span>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Arch. Antonio Zambrano
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-primary font-light tracking-wide mt-2">
            Progettazione e Direzione Lavori dal 1996
          </span>
        </h1>
        
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed">
          Trent'anni di esperienza nella gestione integrale di cantieri e nella progettazione di strutture complesse. Rigore tecnico, sicurezza e precisione formale al servizio del territorio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#galleria"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <Briefcase className="mr-2 h-5 w-5" /> Esplora i Progetti
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/40 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm"
          >
            Contattami
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#bio"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scopri di più</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
        </a>
      </div>
    </section>
  );
}
