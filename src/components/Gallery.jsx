"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import Lightbox from "./Lightbox";
import { filters, projects } from "@/lib/projects";

// Disegni tecnici: mai ritagliati, per restare leggibili.
const CONTAIN_SLUGS = new Set(["studi-di-facciata"]);

function Tile({ project, index, className, onOpen, remaining }) {
  const contain = CONTAIN_SLUGS.has(project.slug);
  const [w, h] = project.sizes[index];
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative overflow-hidden bg-card-bg text-left ${className}`}
      aria-label={`${project.title} — apri immagine ${index + 1}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.images[index]}
        alt={`${project.title} — immagine ${index + 1}`}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
          contain ? "object-contain p-2" : "object-cover"
        }`}
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10 group-hover:ring-primary/50 transition" />
      {remaining > 0 && (
        <span className="absolute inset-0 flex items-center justify-center bg-background/70 font-serif text-3xl text-primary">
          +{remaining}
        </span>
      )}
    </button>
  );
}

function Mosaic({ project, onOpen }) {
  const total = project.images.length;
  const shown = Math.min(total, 5);
  const remaining = total - shown;

  if (shown === 1) {
    return <Tile project={project} index={0} onOpen={onOpen} remaining={0} className="aspect-[16/9] w-full" />;
  }
  if (shown === 2) {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        {[0, 1].map((i) => (
          <Tile key={i} project={project} index={i} onOpen={onOpen} remaining={0} className="aspect-[4/3]" />
        ))}
      </div>
    );
  }
  if (shown === 3) {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        <Tile project={project} index={0} onOpen={onOpen} remaining={0} className="col-span-2 aspect-[16/9]" />
        <Tile project={project} index={1} onOpen={onOpen} remaining={0} className="aspect-[4/3]" />
        <Tile project={project} index={2} onOpen={onOpen} remaining={0} className="aspect-[4/3]" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
      <Tile
        project={project}
        index={0}
        onOpen={onOpen}
        remaining={0}
        className="col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto md:min-h-[26rem]"
      />
      {Array.from({ length: shown - 1 }, (_, k) => k + 1).map((i) => (
        <Tile
          key={i}
          project={project}
          index={i}
          onOpen={onOpen}
          remaining={i === shown - 1 ? remaining : 0}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { slug, index }

  const visible =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);
  const active = lightbox ? projects.find((p) => p.slug === lightbox.slug) : null;

  const step = (delta) =>
    setLightbox((s) => ({
      ...s,
      index: (s.index + delta + active.images.length) % active.images.length,
    }));

  return (
    <section id="galleria" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-sm font-light uppercase tracking-[0.3em] text-primary">Portfolio</h2>
          <h3 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Lavori selezionati
          </h3>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/60" />
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`border px-4 py-2 text-xs font-light uppercase tracking-widest transition sm:px-5 ${
                activeFilter === f.id
                  ? "border-primary bg-primary text-background"
                  : "border-foreground/15 text-foreground/60 hover:border-primary/60 hover:text-primary"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="space-y-24 sm:space-y-32">
          {visible.map((p) => (
            <article key={p.slug} id={p.slug} className="scroll-mt-24">
              <header className="mb-8 grid items-end gap-4 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                    <span className="mr-3 font-serif text-base tracking-normal text-primary/70">{p.num}</span>
                    {p.kicker}
                  </p>
                  <h4 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                    {p.title}
                  </h4>
                </div>
                <p className="text-base font-light leading-relaxed text-foreground/60 md:col-span-5">
                  {p.teaser}
                </p>
              </header>

              <Mosaic project={p} onOpen={(index) => setLightbox({ slug: p.slug, index })} />

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-light tracking-wide">
                <button
                  type="button"
                  onClick={() => setLightbox({ slug: p.slug, index: 0 })}
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-primary"
                >
                  <Images className="h-4 w-4" /> Sfoglia le {p.images.length} immagini
                </button>
                <Link
                  href={`/progetti/${p.slug}`}
                  className="inline-flex items-center gap-2 text-primary transition hover:text-accent"
                >
                  Scheda del progetto <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <Lightbox
          images={active.images}
          captions={active.captions}
          title={active.title}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onSelectIndex={(i) => setLightbox((s) => ({ ...s, index: i }))}
        />
      )}
    </section>
  );
}
