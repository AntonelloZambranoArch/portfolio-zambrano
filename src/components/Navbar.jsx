"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Chi Sono", href: "#bio" },
    { name: "Progetti", href: "#galleria" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/10 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center gap-3 font-serif text-xl sm:text-2xl font-light tracking-[0.06em] text-foreground hover:text-primary transition-colors duration-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-az-trasp.webp" alt="AZ" width="48" height="48" className="h-12 w-12 sm:h-14 sm:w-14" />
              <span className="max-w-[10.5rem] text-lg leading-[1.1] sm:max-w-none sm:text-2xl sm:leading-none">Studio Architettura Zambrano</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-light tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-foreground focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-lg border-b border-foreground/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 h-auto py-6"
            : "opacity-0 scale-y-0 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-light text-foreground/80 hover:text-primary transition-colors duration-200 w-full text-center py-2 border-b border-foreground/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
