"use client";

import { useState } from "react";
import { Folder, Layers, Eye } from "lucide-react";
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
        "/aci/Senza titolo.png", "/aci/12-citro.png", "/aci/13-ascolese.png", "/aci/14-mimmo.png", "/aci/15-verzella.png", "/aci/16-mimmo.png", "/aci/17-izzo.png", "/aci/18-annalea.png", "/aci/19-dificdio.png", "/aci/20-impresa-napoli.png", "/aci/5-vincenzo.png", "/aci/6-ascolese.png", "/aci/8-pasquale.png", "/aci/9-gaetanino.png",
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
        "/RENDER-1-LIBRERIA.jpg", "/1-S10.png", "/5-S10.png", "/BAGNO-10-4.png", "/BAGNO-GIORNO-3.png", "/BLU-1.png", "/CAMINO-11.jpg", "/CAMINO-9.png", "/CUCINA-1.png", "/CUCINA-3.jpg", "/ELVIRA-C.png", "/ERNESTO-CY-6B.png", "/IMAG-4.png", "/INTERNO-3.jpg", "/LECCE-12.png", "/LECCE-5.png", "/PART-1.png", "/PROG-1A.png", "/PROG-ASC-4.png", "/PROSPETTO-FRONTALE.png", "/REND-14.jpg", "/REND-8.jpg", "/RENDER-1.png", "/RENDER-10-SOPPALCO.jpg", "/RENDER-2.png", "/RENDER-3.png", "/RENDER-4.png", "/RENDER-5-K.jpg", "/RENDER-5.png", "/RENDER-6-K.jpg", "/RENDER-6.png", "/RENDER-7-LETTO.jpg", "/RENDER-8-LETTO.jpg", "/RENDER-8.png", "/RENDER-9.png", "/RENDER-CART-2.jpg", "/RESC-1.png", "/ROMA-1.png", "/SOGG-4.png", "/SOGG-6.png", "/TAVERNETTA-3.png", "/VISTA-4.png", "/_RENDER-G.png", "/elvira-B.png", "/garage-4.png", "/persiane.png",
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-widest text-sm font-bold">Portfolio Lavori</h2>
          <h3 className="text-4xl text-white font-bold mt-2">Galleria Progetti</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button 
              key={f.id} 
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition ${activeFilter === f.id ? "bg-primary text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((p) => {
            const globalIdx = projects.findIndex((pro) => pro.title === p.title);
            return (
              <div key={p.title} onClick={() => openLightbox(globalIdx)} className="cursor-pointer group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition">
                <img src={p.cover} alt={p.title} className="w-full aspect-video object-cover" />
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
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
        />
      )}
    </section>
  );
}
