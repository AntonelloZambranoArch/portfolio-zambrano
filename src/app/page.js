import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Gallery />
        <ContactForm />
      </main>
      <footer className="border-t border-foreground/10 bg-background py-10 text-center">
        <p className="font-serif text-2xl font-light tracking-[0.08em] text-foreground/90">
          Studio Architettura Zambrano
        </p>
        <p className="mt-2 text-sm font-light tracking-wide text-foreground/50">
          Via Papa Giovanni XXIII 26, 84085 Mercato San Severino (SA). Ordine Architetti Salerno n. 1142.
        </p>
        <p className="mt-4 text-xs font-light text-foreground/30">
          © {new Date().getFullYear()} Arch. Antonello Zambrano
        </p>
      </footer>
    </>
  );
}
