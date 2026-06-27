"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Messaggio di contatto inviato con successo:", formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Si è verificato un errore durante l'invio del messaggio. Riprova più tardi.",
      });
    }
  };

  return (
    <section id="contatti" className="py-24 bg-background border-t border-foreground/10 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-sm font-light tracking-wider text-primary uppercase mb-2">Contatti</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">Avvia una Collaborazione</h3>
          <p className="max-w-xl mx-auto mt-4 text-base text-foreground/50 font-light">
            Hai un progetto da realizzare, un cantiere da coordinare o hai bisogno di una consulenza tecnica? Inviami un messaggio o usa i recapiti diretti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-5 space-y-8">
            <h4 className="font-serif text-xl text-foreground mb-6 border-b border-foreground/10 pb-3">Recapiti Diretti</h4>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 border border-foreground/10">
                <div className="flex-shrink-0">
                  <div className="p-3 border border-primary/20 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-light text-foreground/50">Telefono / Cellulare</h5>
                  <a href="tel:+393381835951" className="text-lg font-medium text-foreground hover:text-primary transition-colors mt-1 block">
                    +39 338 1835951
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-foreground/10">
                <div className="flex-shrink-0">
                  <div className="p-3 border border-primary/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-light text-foreground/50">Indirizzo E-mail</h5>
                  <a href="mailto:anto.zambrano@virgilio.it" className="text-lg font-medium text-foreground hover:text-primary transition-colors mt-1 block break-all">
                    anto.zambrano@virgilio.it
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-foreground/10">
                <div className="flex-shrink-0">
                  <div className="p-3 border border-primary/20 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-light text-foreground/50">Ufficio / Area Operativa</h5>
                  <p className="text-lg font-medium text-foreground mt-1">
                    Salerno, Campania, Italia
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-foreground/10">
                <div className="flex-shrink-0">
                  <div className="p-3 border border-primary/20 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-light text-foreground/50">Orario di Ricevimento</h5>
                  <p className="text-lg font-medium text-foreground mt-1">
                    Lun - Ven: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-card-bg/40 border border-foreground/10 p-8 sm:p-10 backdrop-blur-sm">
            <h4 className="font-serif text-xl text-foreground mb-6 border-b border-foreground/10 pb-3">Invia un Messaggio</h4>

            {status.submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-primary animate-bounce" />
                <h5 className="font-serif text-2xl text-foreground">Messaggio Inviato!</h5>
                <p className="text-foreground/50 max-w-sm font-light">
                  Grazie per avermi contattato. Risponderò alla tua richiesta il prima possibile.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-foreground/15 text-sm font-light text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-light text-foreground/50 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      className="px-4 py-3 bg-background border border-foreground/15 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/80 transition-all font-light"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-light text-foreground/50 uppercase tracking-wider mb-2">
                      Indirizzo E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario.rossi@esempio.it"
                      className="px-4 py-3 bg-background border border-foreground/15 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/80 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-light text-foreground/50 uppercase tracking-wider mb-2">
                    Oggetto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Richiesta preventivo / Direzione lavori"
                    className="px-4 py-3 bg-background border border-foreground/15 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/80 transition-all font-light"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-light text-foreground/50 uppercase tracking-wider mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrivi brevemente il progetto o la tua richiesta..."
                    className="px-4 py-3 bg-background border border-foreground/15 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/80 transition-all font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-primary/60 text-base font-light tracking-wide text-primary hover:bg-primary hover:text-background disabled:opacity-50 transition-all duration-300"
                >
                  {status.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Invia Messaggio
                    </>
                  )}
                </button>

                {status.error && (
                  <p className="mt-2 text-sm text-red-500 font-medium">{status.error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
