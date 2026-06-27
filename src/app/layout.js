import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Arch. Antonello Zambrano | Progettazione, Interior Design & Strutture",
  description:
    "Portfolio dell'Architetto Antonello Zambrano. Progettazione architettonica e d'interni di alta gamma, calcolo strutturale e direzione lavori a Salerno.",
  keywords: [
    "Antonello Zambrano",
    "Architetto Salerno",
    "Interior Design",
    "Ingegneria Strutturale",
    "Direzione Lavori",
    "Salerno",
    "Calcolo Strutturale",
    "NTC 2018",
  ],
  authors: [{ name: "Arch. Antonello Zambrano" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
