"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    projectIndex: 0,
    imageIndex: 0,
  });

  const filters = [
    { id: "all", name: "Tutti" },
    { id: "residenziale", name: "Residenziale" },
    { id: "commerciale", name: "Commerciale & Uffici" },
    { id: "strutture", name: "Ingegneria & Strutture" },
    { id: "rendering", name: "Rendering 3D" },
  ];

  const projects = [
    {
      title: 'Ristorante "Antica Lucciola"',
      category: "commerciale",
      categoryLabel: "Commerciale",
      desc: "Progettazione degli spazi interni ed esterni per l'attività di ristorazione 'Antica Lucciola', combinando estetica rustico-moderna e funzionalità commerciale.",
      cover: "/antica-lucciola/LUCCIOLA.png",
      images: [
        "/antica-lucciola/LUCCIOLA.png",
        "/antica-lucciola/antica-lucciola.jpeg",
        "/antica-lucciola/antica-lucciola-1.jpeg",
      ],
    },
    {
      title: "Residenza Lombardi",
      category: "residenziale",
      categoryLabel: "Residenziale",
      desc: "Progetto di ristrutturazione edilizia e ridistribuzione dei volumi interni per villa monofamiliare, ottimizzando l'illuminazione naturale e la vivibilità.",
      cover: "/lombardi/1.png",
      images: [
        "/lombardi/1.png",
        "/lombardi/2.png",
        "/lombardi/3.png",
        "/lombardi/4.png",
        "/lombardi/5.png",
        "/lombardi/Senza titolo.png",
      ],
    },
    {
      title: "Disegni Strutturali Priscoli",
      category: "strutture",
      categoryLabel: "Ingegneria & Strutture",
      desc: "Calcolo strutturale e produzione di esecutivi di carpenteria metallica e cemento armato (Daponte) per opere di consolidamento e miglioramento sismico.",
      cover: "/priscoli/DAPONTE.png",
      images: [
        "/priscoli/DAPONTE.png",
        "/priscoli/DAPONTE-1.png",
        "/priscoli/DAPONTE-2.png",
        "/priscoli/Senza titolo.png",
      ],
    },
    {
      title: "Villa San Vincenzo",
      category: "residenziale",
      categoryLabel: "Residenziale",
      desc: "Progettazione e direzione lavori di una palazzina signorile con dettagli costruttivi ed infissi ad alta efficienza termico-acustica.",
      cover: "/san-vincenzo/1.png",
      images: [
        "/san-vincenzo/1.png",
        "/san-vincenzo/2.png",
        "/san-vincenzo/3.png",
        "/san-vincenzo/4.png",
        "/san-vincenzo/5.png",
        "/san-vincenzo/6.png",
        "/san-vincenzo/7.png",
        "/san-vincenzo/8.png",
        "/san-vincenzo/9.png",
        "/san-vincenzo/Senza titolo.png",
      ],
    },
    {
      title: "Lottizzazione e Lotto Torello",
      category: "residenziale",
      categoryLabel: "Residenziale & Urbanistica",
      desc: "Piano di lottizzazione ed edificabilità per comparto residenziale. Rilievo topografico, progettazione architettonica e particolari costruttivi delle singole unità.",
      cover: "/torello/1.png",
      images: [
        "/torello/1.png",
        "/torello/2.png",
        "/torello/3.png",
        "/torello/4.png",
        "/torello/5.png",
        "/torello/6.png",
        "/torello/7.png",
        "/torello/8.png",
        "/torello/9.png",
        "/torello/Lotto-1.png",
        "/torello/Senza titolo.png",
      ],
    },
    {
      title: "Uffici e Pratiche Tecniche ACI",
      category: "commerciale",
      categoryLabel: "Uffici & Pratiche",
      desc: "Progettazione esecutiva per l'adeguamento impiantistico e antincendio di filiali locali ACI, con redazione di piante, sezioni ed esecutivi di cantiere.",
      cover: "/aci/4-zam.png",
      images: [
        "/aci/4-zam.png",
        "/aci/1-peppe.jpg",
        "/aci/2-orlando.png",
        "/aci/3-tonino.png",
        "/aci/10-pasquale.png",
        "/aci/11-antonino.png",
        "/aci/21-lucio.png",
        "/aci/Senza titolo.png",
      ],
    },
    {
      title: "Rendering Architettonici 3D",
      category: "rendering",
      categoryLabel: "Rendering 3D",
      desc: "Raccolta di rendering fotorealistici realizzati per la modellazione d'interni, cucine di lusso, loft con soppalco, zone giorno e facciate di palazzine residenziali.",
      cover: "/VILLA-PROG-1.png",
      images: [
        "/VILLA-PROG-1.png",
        "/PORTICO-2-RENDER.png",
        "/CUCINA-2.png",
        "/garage-1.png",
        "/SOGG-1.png",
        "/TERRAZZO-1.png",
        "/PALAZZINA-2.png",
        "/RENDER-4-SOGG.jpg",
        "/RENDER-1-LIBRERIA.jpg",
      ],
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (projIdx, imgIdx = 0) => {
    setLightboxState({ isOpen: true, projectIndex: projIdx, imageIndex: imgIdx });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const activeProject = projects[lightboxState.projectIndex];

  return (
    <section id="galleria" className="py-24 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="eyebrow text-primary uppercase text-sm font-semibold">Portfolio Lavori</h2>
          <h3 className="font-display text-3xl sm:text-4xl text-white font-semibold mt-3">Galleria Progetti</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === f.id
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((p) => {
            const globalIdx = projects.findIndex((pro) => pro.title === p.title);
            return (
              <div
                key={p.title}
                onClick={() => openLightbox(globalIdx)}
                className="cursor-pointer group bg-gray-900/40 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-primary/60 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-[#090d16]/10 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#090d16]/70 text-primary border border-primary/30 backdrop-blur-sm">
                    {p.categoryLabel}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg">
                      <Eye className="h-4 w-4" /> Vedi progetto
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-semibold text-white">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightboxState.isOpen && (
        <Lightbox
          images={activeProject?.images}
          currentIndex={lightboxState.imageIndex}
          onClose={closeLightbox}
          onPrev={() => setLightboxState(p => ({...p, imageIndex: (p.imageIndex - 1 + activeProject.images.length) % activeProject.images.length}))}
          onNext={() => setLightboxState(p => ({...p, imageIndex: (p.imageIndex + 1) % activeProject.images.length}))}
          onSelectIndex={(idx) => setLightboxState(p => ({...p, imageIndex: idx}))}
        />
      )}
    </section>
  );
}
