
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/portfolio/coppola-capoluogo/04.webp"
        alt="Capoluogo Coppola, prospettiva d’insieme del progetto"
        width="1920"
        height="1080"
        fetchPriority="high"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-background/30" />

      {/* Linee di costruzione, come nel logo */}
      <div className="pointer-events-none absolute inset-y-0 left-[7%] z-10 hidden w-px bg-primary/30 md:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[22%] z-10 hidden h-px bg-primary/20 md:block" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-10 md:pb-28">
        <h1 className="rise max-w-4xl font-serif text-5xl font-light leading-[1.02] text-foreground sm:text-7xl md:text-8xl">
          Architettura.<br />Cultura del progetto.<br />Arte del costruire.
        </h1>

        <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
          ARCHITECTURE &amp; INTERIOR DESIGN — EST. 1996
        </p>

        <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a
            href="#galleria"
            className="bg-primary px-9 py-4 text-base font-normal tracking-wide text-background transition hover:bg-accent"
          >
            Vedi i progetti
          </a>
          <a
            href="#contatti"
            className="border-b border-primary/60 pb-1 text-base font-light tracking-wide text-foreground transition hover:border-primary hover:text-primary"
          >
            Scrivimi
          </a>
        </div>

      </div>
    </section>
  );
}
