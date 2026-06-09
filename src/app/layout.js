import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arch. Antonio Zambrano | Progettazione, Strutture e Sicurezza",
  description: "Portfolio dell'Architetto e Tecnico Strutturista Antonio Zambrano. 30 anni di esperienza nella gestione di cantieri complessi, calcoli strutturali e coordinamento della sicurezza (CSP/CSE) a Salerno.",
  keywords: ["Antonio Zambrano", "Architetto Salerno", "Ingegneria Strutturale", "Direzione Lavori", "Coordinatore Sicurezza", "Salerno", "Calcolo Strutturale", "NTC 2018"],
  authors: [{ name: "Arch. Antonio Zambrano" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
