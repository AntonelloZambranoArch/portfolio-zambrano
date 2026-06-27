"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, filters } from "@/lib/projects";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-widest text-sm font-light">
            Portfolio Lavori
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-medium mt-2">
            Galleria Progetti
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-2 text-sm font-light tracking-wide transition-all border ${
                activeFilter === f.id
                  ? "border-primary text-primary"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/40 hover:text-foreground/80"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {filteredProjects.map((p) => (
            <Link key={p.slug} href={`/progetti/${p.slug}`} className="group block">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="text-foreground/50 text-sm font-light mt-2 max-w-md leading-relaxed">
                    {p.teaser}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-primary/80 font-light whitespace-nowrap mt-2">
                  {p.categoryLabel}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
