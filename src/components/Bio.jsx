const expertises = [
  {
    title: "Interior design e alta progettazione",
    desc: "Spazi sartoriali: arredi su misura, materiali pregiati e illuminazione d'atmosfera, per ambienti dove estetica e funzione coincidono.",
  },
  {
    title: "Progettazione strutturale",
    desc: "Calcoli e verifiche strutturali complesse nel pieno rispetto delle NTC 2018 e degli Eurocodici.",
  },
  {
    title: "Direzione lavori e sicurezza",
    desc: "Coordinamento di cantieri civili e industriali, con ruolo di CSP e CSE e un record di sicurezza senza infortuni.",
  },
  {
    title: "Iscrizione all'Ordine",
    desc: "Albo degli Architetti Pianificatori Paesaggisti e Conservatori della Provincia di Salerno, n. 1142.",
  },
];

export default function Bio() {
  return (
    <section id="bio" className="theme-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-5xl font-light leading-[1.02] text-foreground sm:text-7xl">
              Il pensiero progettuale
            </h2>

            <div className="mt-12 flex gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-az-avatar.webp"
                alt="Studio Architettura Zambrano, logo"
                width="160"
                height="160"
                className="hidden h-36 w-36 flex-shrink-0 sm:block"
              />
              <div className="max-w-xl space-y-6 text-lg leading-[1.75] text-foreground/75">
                <p>
                  Fondato nel 1996, lo Studio Architettura Zambrano opera nel campo dell’architettura, dell’interior design e della progettazione integrata.
                </p>
                <p>
                  La ricerca progettuale indaga le relazioni tra spazio, materia, luce e contesto, attraverso un processo nel quale composizione architettonica e conoscenza costruttiva concorrono alla definizione dell’opera.
                </p>
                <p>
                  Dalla scala dell’edificio al disegno degli interni, ogni progetto sviluppa una propria identità, interpretando il luogo e le esigenze di chi lo abita.
                </p>
                <p>
                  Il progetto è concepito come un processo unitario, dall’ideazione alla costruzione, nel quale la qualità architettonica trova la sua espressione nella precisione del dettaglio.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <h3 className="font-serif text-3xl font-light text-foreground">Competenze</h3>
            <ul className="mt-6 divide-y divide-foreground/15 border-y border-foreground/15">
              {expertises.map((e) => (
                <li key={e.title} className="py-7">
                  <h4 className="font-serif text-2xl text-foreground">{e.title}</h4>
                  <p className="mt-2 text-base leading-relaxed text-foreground/65">{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
