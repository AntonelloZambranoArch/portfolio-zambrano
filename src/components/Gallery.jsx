"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import Lightbox from "./Lightbox";
import ProjectFilm from "./ProjectFilm";
import { filters, projects } from "@/lib/projects";

// Disegni tecnici: mai ritagliati, per restare leggibili.
const CONTAIN_SLUGS = new Set(["studi-di-facciata"]);

function Tile({ project, index, className, onOpen, remaining }) {
  const contain = CONTAIN_SLUGS.has(project.slug);
  const [w, h] = project.sizes[index];
  const cap = project.captions?.[index];
  const label = cap ? cap.split(". ")[0].replace(/\.$/, "") : null;
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
        className={`absolute inset-0 h-full w-full  ${
          contain ? "object-contain p-2" : "object-cover"
        }`}
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10 group-hover:ring-primary/60 transition" />
      {label && remaining === 0 && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-2 pt-8 text-[11px] leading-snug text-[#f4ede1] md:text-xs">
          <span className="line-clamp-2">{label}</span>
        </span>
      )}
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
    <section id="galleria" className="theme-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="font-serif text-5xl font-light leading-none text-foreground sm:text-7xl md:col-span-7">
            Lavori selezionati
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-foreground/65 md:col-span-5">
            Lottizzazioni, residenze, rigenerazione urbana, interni e strutture: una selezione di trent'anni di progetti.
          </p>
        </div>

        <div className="mb-20 flex flex-wrap gap-x-8 gap-y-3 border-y border-foreground/15 py-4">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`border-b pb-1 text-base tracking-wide transition ${
                activeFilter === f.id
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/55 hover:text-foreground"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="space-y-28 sm:space-y-40">
          {visible.map((p) => (
            <article key={p.slug} id={p.slug} className="scroll-mt-24">
              <header className="mb-8 grid items-end gap-4 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="font-serif text-xl italic text-primary">{p.kicker}</p>
                  <h4 className="mt-2 font-serif text-4xl font-light leading-[1.05] text-foreground sm:text-6xl">
                    {p.title}
                  </h4>
                </div>
                <p className="text-lg font-light leading-relaxed text-foreground/65 md:col-span-5">
                  {p.teaser}
                </p>
              </header>

              {p.slug === "coppola-capoluogo" && (
                <section aria-label="Cortometraggio Capoluogo Coppola" className="mb-10">
                  <h3 className="mb-4 font-serif text-3xl text-foreground">Guarda il cortometraggio</h3>
                  <ProjectFilm
                    poster={p.cover}
                    className="aspect-video w-full bg-black object-contain"
                  />
                  <a
                    href="/portfolio/coppola-capoluogo/film-chill-house-rev03.mp4"
                    className="mt-3 inline-block border-b border-primary pb-1 text-sm text-primary"
                  >
                    Apri il video a schermo intero
                  </a>
                </section>
              )}

              <Mosaic project={p} onOpen={(index) => setLightbox({ slug: p.slug, index })} />

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-base font-light tracking-wide">
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

