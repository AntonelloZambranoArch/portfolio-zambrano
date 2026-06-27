"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Lightbox from "./Lightbox";

export default function CaseStudyView({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((idx) => (idx - 1 + project.images.length) % project.images.length);
  const showNext = () =>
    setLightboxIndex((idx) => (idx + 1) % project.images.length);

  return (
    <main className="bg-background min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-foreground/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/#galleria"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground/60 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" /> Torna alla Galleria
          </Link>
          <span className="font-serif text-lg text-foreground/80 hidden sm:block">
            Arch. Antonello Zambrano
          </span>
        </div>
      </div>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-primary/80 font-light">
          {project.categoryLabel}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mt-4 leading-tight">
          {project.title}
        </h1>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt={project.title}
          className="w-full max-h-[80vh] object-cover cursor-zoom-in"
          onClick={() => openLightbox(0)}
        />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-24">
        <h2 className="font-serif text-2xl text-foreground mb-6 border-b border-foreground/10 pb-3">
          Descrizione Tecnica
        </h2>
        <p className="text-foreground/70 leading-relaxed font-light text-lg whitespace-pre-line">
          {project.fullDesc}
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-32 space-y-24">
        {project.images.map((img, idx) => (
          <figure key={img} className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={`${project.title} - immagine ${idx + 1}`}
              className="w-full max-w-4xl object-contain cursor-zoom-in"
              onClick={() => openLightbox(idx)}
            />
            {project.captions && project.captions[idx] && (
              <figcaption className="mt-6 max-w-2xl text-center text-foreground/55 font-light text-base leading-relaxed">
                {project.captions[idx]}
              </figcaption>
            )}
          </figure>
        ))}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pb-32 text-center">
        <Link
          href="/#contatti"
          className="inline-flex items-center justify-center px-8 py-3 border border-primary/60 text-base font-light tracking-wide text-primary hover:bg-primary hover:text-background transition-all duration-300"
        >
          Richiedi Informazioni su Questo Progetto
        </Link>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          onSelectIndex={setLightboxIndex}
        />
      )}
    </main>
  );
}
