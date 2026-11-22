const stats = [
  { value: "30+", label: "anni di esperienza" },
  { value: "60+", label: "cantieri coordinati" },
  { value: "0", label: "infortuni sul lavoro" },
  { value: "100%", label: "conformità normativa" },
];

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
              Architetto e strutturista, con trent'anni di cantiere.
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
                  Sono un architetto del settore edile e delle opere civili, con una sensibilità particolare per gli spazi esclusivi su misura. Il mio lavoro unisce visione estetica, rigore normativo e capacità di governare la complessità tecnica.
                </p>
                <p>
                  In trent'anni ho diretto e coordinato oltre 60 cantieri, dalla progettazione di massima ed esecutiva all'interior design, fino alla direzione dei lavori e al coordinamento della sicurezza.
                </p>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-foreground/15 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-5xl font-light text-primary sm:text-6xl">{s.value}</dt>
                  <dd className="mt-2 text-base text-foreground/60">{s.label}</dd>
                </div>
              ))}
            </dl>
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
