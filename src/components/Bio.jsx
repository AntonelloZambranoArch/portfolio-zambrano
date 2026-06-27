"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, FileCheck, Landmark } from "lucide-react";

export default function Bio() {
  const [photoError, setPhotoError] = useState(false);

  const stats = [
    { value: "30+", label: "Anni di Esperienza" },
    { value: "60+", label: "Cantieri Coordinati" },
    { value: "0", label: "Infortuni sul Lavoro" },
    { value: "100%", label: "Conformità Normativa" },
  ];

  const expertises = [
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "Interior Design & Alta Progettazione",
      desc: "Creazione di spazi sartoriali esclusivi: arredi su misura, materiali pregiati e illuminazione d'atmosfera, per ambienti che uniscono estetica e funzionalità.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: "Progettazione Strutturale",
      desc: "Calcoli e verifiche strutturali complesse nel pieno rispetto delle normative NTC 2018 e degli Eurocodici.",
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: "Direzione Lavori & Sicurezza",
      desc: "Coordinamento completo di cantieri civili ed industriali, con ruolo di CSP/CSE e record impeccabile di sicurezza sul lavoro.",
    },
    {
      icon: <Landmark className="h-5 w-5 text-primary" />,
      title: "Iscrizione Ordine Architetti",
      desc: "Iscritto all'Albo dell'Ordine degli Architetti Pianificatori Paesaggisti e Conservatori della Provincia di Salerno col n. 1142.",
    },
  ];

  return (
    <section id="bio" className="py-24 bg-background border-t border-foreground/10 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-primary/40 overflow-hidden bg-card-bg flex items-center justify-center">
                {!photoError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/antonello-zambrano.jpg"
                    alt="Arch. Antonello Zambrano"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <span className="font-serif text-3xl text-primary/70">AZ</span>
                )}
              </div>
              <div>
                <h2 className="text-sm font-light tracking-wider text-primary uppercase mb-2">
                  Profilo Professionale
                </h2>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                  Arch. Antonello Zambrano
                </h3>
                <p className="text-lg text-foreground/50 font-light mt-1">
                  Architetto e Tecnico Strutturista
                </p>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed font-light text-lg">
              Sono un architetto operante nel settore edile e delle opere civili, con una particolare sensibilità per la progettazione di spazi esclusivi su misura. Il mio percorso professionale unisce visione estetica, rigore normativo e capacità di gestire la complessità tecnica dei progetti più ambiziosi.
            </p>

            <p className="text-foreground/70 leading-relaxed font-light text-lg">
              In trent'anni di attività ho diretto e coordinato oltre 60 cantieri, affrontando sfide progettuali e strutturali in contesti ad alta complessità. La mia professionalità spazia dalla progettazione di massima ed esecutiva, all'interior design su misura, fino alla direzione dei lavori e al coordinamento della sicurezza (CSP/CSE), dove mantengo un record di zero infortuni.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="border border-foreground/10 p-4 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-light uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-serif text-xl font-medium text-foreground mb-6 border-b border-foreground/10 pb-3">
              Competenze Chiave
            </h4>

            <div className="space-y-6">
              {expertises.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 border border-foreground/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2.5 border border-primary/20">{item.icon}</div>
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-foreground mb-1">{item.title}</h5>
                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
