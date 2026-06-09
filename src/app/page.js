import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra di Navigazione */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Sezione Hero */}
        <Hero />

        {/* Sezione Biografia */}
        <Bio />

        {/* Galleria dei Progetti */}
        <Gallery />

        {/* Modulo di Contatto */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-[#05080f] border-t border-gray-900 py-12 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-bold text-gray-300 text-base mb-1">
                Arch. Antonio Zambrano
              </p>
              <p className="font-light text-xs max-w-md">
                Iscritto all'Albo dell'Ordine degli Architetti P.P.C. della Provincia di Salerno col n. 1142. Specializzato in calcolo strutturale, direzione lavori e coordinamento sicurezza (D.Lgs. 81/08).
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-xs">
              <p className="font-light">
                &copy; {new Date().getFullYear()} Arch. Antonio Zambrano. Tutti i diritti riservati.
              </p>
              <p className="text-gray-600 font-light">
                Sviluppato con Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
