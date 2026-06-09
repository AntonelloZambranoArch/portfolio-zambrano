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
      title: "Ristorante \"Antica Lucciola\"",
      category: "commerciale",
      categoryLabel: "Commerciale",
      desc: "Progettazione degli spazi interni ed esterni per l'attività di ristorazione 'Antica Lucciola', combinando estetica rustico-moderna e funzionalità commerciale.",
      cover: "/immagini/antica-lucciola/LUCCIOLA.png",
      images: [
        "/immagini/antica-lucciola/LUCCIOLA.png",
        "/immagini/antica-lucciola/antica-lucciola.jpeg",
        "/immagini/antica-lucciola/antica-lucciola-1.jpeg",
      ],
    },
    {
      title: "Residenza Lombardi",
      category: "residenziale",
      categoryLabel: "Residenziale",
      desc: "Progetto di ristrutturazione edilizia e ridistribuzione dei volumi interni per villa monofamiliare, ottimizzando l'illuminazione naturale e la vivibilità.",
      cover: "/immagini/lombardi/1.png",
      images: [
        "/immagini/lombardi/1.png",
        "/immagini/lombardi/2.png",
        "/immagini/lombardi/3.png",
        "/immagini/lombardi/4.png",
        "/immagini/lombardi/5.png",
        "/immagini/lombardi/Senza titolo.png",
      ],
    },
    {
      title: "Disegni Strutturali Priscoli",
      category: "strutture",
      categoryLabel: "Ingegneria & Strutture",
      desc: "Calcolo strutturale e produzione di esecutivi di carpenteria metallica e cemento armato (Daponte) per opere di consolidamento e miglioramento sismico.",
      cover: "/immagini/priscoli/DAPONTE.png",
      images: [
        "/immagini/priscoli/DAPONTE.png",
        "/immagini/priscoli/DAPONTE-1.png",
        "/immagini/priscoli/DAPONTE-2.png",
        "/immagini/priscoli/Senza titolo.png",
      ],
    },
    {
      title: "Villa San Vincenzo",
      category: "residenziale",
      categoryLabel: "Residenziale",
      desc: "Progettazione e direzione lavori di una palazzina signorile con dettagli costruttivi ed infissi ad alta efficienza termico-acustica.",
      cover: "/immagini/san-vincenzo/1.png",
      images: [
        "/immagini/san-vincenzo/1.png",
        "/immagini/san-vincenzo/2.png",
        "/immagini/san-vincenzo/3.png",
        "/immagini/san-vincenzo/4.png",
        "/immagini/san-vincenzo/5.png",
        "/immagini/san-vincenzo/6.png",
        "/immagini/san-vincenzo/7.png",
        "/immagini/san-vincenzo/8.png",
        "/immagini/san-vincenzo/9.png",
        "/immagini/san-vincenzo/Senza titolo.png",
      ],
    },
    {
      title: "Lottizzazione e Lotto Torello",
      category: "residenziale",
      categoryLabel: "Residenziale & Urbanistica",
      desc: "Piano di lottizzazione ed edificabilità per comparto residenziale. Rilievo topografico, progettazione architettonica e particolari costruttivi delle singole unità.",
      cover: "/immagini/torello/1.png",
      images: [
        "/immagini/torello/1.png",
        "/immagini/torello/2.png",
        "/immagini/torello/3.png",
        "/immagini/torello/4.png",
        "/immagini/torello/5.png",
        "/immagini/torello/6.png",
        "/immagini/torello/7.png",
        "/immagini/torello/8.png",
        "/immagini/torello/9.png",
        "/immagini/torello/Lotto-1.png",
        "/immagini/torello/Senza titolo.png",
      ],
    },
    {
      title: "Uffici e Pratiche Tecniche ACI",
      category: "commerciale",
      categoryLabel: "Uffici & Pratiche",
      desc: "Progettazione esecutiva per l'adeguamento impiantistico e antincendio di filiali locali ACI, con redazione di piante, sezioni ed esecutivi di cantiere.",
      cover: "/immagini/aci/4-zam.png",
      images: [
        "/immagini/aci/4-zam.png",
        "/immagini/aci/1-peppe.jpg",
        "/immagini/aci/2-orlando.png",
        "/immagini/aci/3-tonino.png",
        "/immagini/aci/10-pasquale.png",
        "/immagini/aci/11-antonino.png",
        "/immagini/aci/21-lucio.png",
        "/immagini/aci/Senza titolo.png",
      ],
    },
    {
      title: "Rendering Architettonici 3D",
      category: "rendering",
      categoryLabel: "Rendering 3D",
      desc: "Raccolta di rendering fotorealistici realizzati per la modellazione d'interni, cucine di lusso, loft con soppalco, zone giorno e facciate di palazzine residenziali.",
      cover: "/immagini/rendering/VILLA-PROG-1.png",
      images: [
        "/immagini/rendering/VILLA-PROG-1.png",
        "/immagini/rendering/PORTICO-2-RENDER.png",
        "/immagini/rendering/CUCINA-2.png",
        "/immagini/rendering/garage-1.png",
        "/immagini/rendering/SOGG-1.png",
        "/immagini/rendering/TERRAZZO-1.png",
        "/immagini/rendering/PALAZZINA-2.png",
        "/immagini/rendering/RENDER-4-SOGG.jpg",
        "/immagini/rendering/RENDER-1-LIBRERIA.jpg",
      ],
    },
    {
      title: "Progetti e Ristrutturazioni Private",
      category: "residenziale",
      categoryLabel: "Residenziale",
      desc: "Interventi mirati di ridistribuzione spaziale e ammodernamento per residenze private e laboratori (progetti Maiellaro, Pasticciere, Guido).",
      cover: "/immagini/1-maiellaro.png",
      images: [
        "/immagini/1-maiellaro.png",
        "/immagini/2-pasticciere.png",
        "/immagini/3-guido.png",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (projIdx, imgIdx = 0) => {
    setLightboxState({
      isOpen: true,
      projectIndex: projIdx,
      imageIndex: imgIdx,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevImage = () => {
    setLightboxState((prev) => {
      const imagesCount = projects[prev.projectIndex].images.length;
      return {
        ...prev,
        imageIndex: (prev.imageIndex - 1 + imagesCount) % imagesCount,
      };
    });
  };

  const handleNextImage = () => {
    setLightboxState((prev) => {
      const imagesCount = projects[prev.projectIndex].images.length;
      return {
        ...prev,
        imageIndex: (prev.imageIndex + 1) % imagesCount,
      };
    });
  };

  const handleSelectImageIndex = (idx) => {
    setLightboxState((prev) => ({ ...prev, imageIndex: idx }));
  };

  const activeProject = projects[lightboxState.projectIndex];

  return (
    <section id="galleria" className="py-24 bg-[#090d16] border-t border-gray-800/40 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Portfolio Lavori</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Galleria dei Progetti</h3>
          <p className="max-w-xl mx-auto mt-4 text-base text-gray-400 font-light">
            Esplora le tavole tecniche, gli elaborati grafici strutturali e i rendering 3D cliccando su ciascun progetto per sfogliare le immagini relative.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide border transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                  : "bg-gray-900/30 border-gray-850 text-gray-400 hover:text-white hover:border-gray-750"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            // Find index in global projects array to pass to lightbox
            const globalIndex = projects.findIndex((p) => p.title === project.title);
            
            return (
              <div
                key={project.title}
                onClick={() => openLightbox(globalIndex)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/20 border border-gray-800/40 hover:border-primary/40 hover:bg-gray-900/40 transition-all duration-300 shadow-md flex flex-col h-full hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20 scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="h-4 w-4" /> Vedi Gallerie ({project.images.length})
                    </span>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-gray-950/80 text-primary border border-primary/20 backdrop-blur-sm">
                    <Folder className="h-3 w-3" /> {project.categoryLabel}
                  </span>
                </div>

                {/* Details Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-gray-800/40 pt-4 mt-auto">
                    <span className="text-gray-500 font-medium flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-primary" /> {project.images.length} elaborati grafici
                    </span>
                    <span className="text-primary group-hover:underline font-semibold">
                      Sfoglia &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxState.isOpen && (
        <Lightbox
          images={activeProject?.images}
          currentIndex={lightboxState.imageIndex}
          onClose={closeLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          onSelectIndex={handleSelectImageIndex}
        />
      )}
    </section>
  );
}
