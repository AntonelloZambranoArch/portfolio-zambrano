import { ShieldCheck, HardHat, FileCheck, Landmark } from "lucide-react";

export default function Bio() {
  const stats = [
    { value: "30+", label: "Anni di Esperienza" },
    { value: "60+", label: "Cantieri Coordinati" },
    { value: "0", label: "Infortuni sul Lavoro" },
    { value: "100%", label: "Conformità Normativa" },
  ];

  const expertises = [
    {
      icon: <HardHat className="h-6 w-6 text-primary" />,
      title: "Direzione Lavori & Sicurezza",
      desc: "Coordinamento completo di cantieri civili ed industriali, con ruolo di CSP/CSE e record impeccabile di sicurezza sul lavoro.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Progettazione Strutturale",
      desc: "Calcoli e verifiche strutturali complesse nel pieno rispetto delle normative NTC 2018 e degli Eurocodici.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      title: "Controllo Commessa & Budget",
      desc: "Gestione analitica dei cronoprogrammi e dei costi di costruzione, per minimizzare gli imprevisti e ottimizzare le risorse.",
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: "Iscrizione Ordine Architetti",
      desc: "Iscritto all'Albo dell'Ordine degli Architetti Pianificatori Paesaggisti e Conservatori della Provincia di Salerno col n. 1142.",
    },
  ];

  return (
    <section id="bio" className="py-24 bg-[#090d16] border-t border-gray-800/40 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Biography text and stats */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Profilo Professionale</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Arch. Antonio Zambrano
              </h3>
              <p className="text-lg text-gray-400 font-light mt-1">
                Architetto e Tecnico Strutturista
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed font-light text-lg">
              Sono un architetto e tecnico strutturista operante nel settore edile e delle opere civili. Il mio percorso professionale si basa sulla capacità di risolvere problemi complessi in contesti dove la continuità operativa, il rigore normativo e la sicurezza sono priorità assolute.
            </p>
            
            <p className="text-gray-300 leading-relaxed font-light text-lg">
              In trent'anni di attività ho diretto e coordinato oltre 60 cantieri, affrontando sfide strutturali ed infrastrutturali in contesti ad alta complessità e densità urbana. La mia professionalità spazia dalla progettazione di massima ed esecutiva alla direzione dei lavori, fino al coordinamento della sicurezza in fase di progettazione ed esecuzione (CSP/CSE), dove mantengo un record di zero infortuni.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-4 text-center backdrop-blur-sm shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Competencies Grid */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-3">
              Competenze Chiave
            </h4>
            
            <div className="space-y-6">
              {expertises.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 border border-gray-800/30 hover:border-gray-800/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
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
