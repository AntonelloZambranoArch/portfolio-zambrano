import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Bio />
        <Gallery />
        <ContactForm />
      </main>
      <footer className="bg-background border-t border-foreground/10 py-12 text-foreground/50 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-serif text-foreground/80 text-base mb-1">
                Arch. Antonello Zambrano
              </p>
              <p className="font-light text-xs max-w-md">
                Iscritto all'Albo dell'Ordine degli Architetti P.P.C. della Provincia di Salerno col n. 1142. Specializzato in progettazione architettonica e d'interni, calcolo strutturale, direzione lavori e coordinamento sicurezza (D.Lgs. 81/08).
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-xs">
              <p className="font-light">
                &copy; {new Date().getFullYear()} Arch. Antonello Zambrano. Tutti i diritti riservati.
              </p>
              <p className="text-foreground/30 font-light">
                Sviluppato con Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
