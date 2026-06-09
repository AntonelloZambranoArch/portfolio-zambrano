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

    // Simulate API request
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
    <section id="contatti" className="py-24 bg-[#090d16] border-t border-gray-800/40 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Contatti</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Avvia una Collaborazione</h3>
          <p className="max-w-xl mx-auto mt-4 text-base text-gray-400 font-light">
            Hai un progetto da realizzare, un cantiere da coordinare o hai bisogno di una consulenza tecnica? Inviami un messaggio o usa i recapiti diretti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Recapiti Diretti</h4>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-900/10 border border-gray-850">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Telefono / Cellulare</h5>
                  <a href="tel:+393381835951" className="text-lg font-bold text-white hover:text-primary transition-colors mt-1 block">
                    +39 338 1835951
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-900/10 border border-gray-850">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Indirizzo E-mail</h5>
                  <a href="mailto:anto.zambrano@virgilio.it" className="text-lg font-bold text-white hover:text-primary transition-colors mt-1 block break-all">
                    anto.zambrano@virgilio.it
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-900/10 border border-gray-850">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Ufficio / Area Operativa</h5>
                  <p className="text-lg font-bold text-white mt-1">
                    Salerno, Campania, Italia
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-900/10 border border-gray-850">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Orario di Ricevimento</h5>
                  <p className="text-lg font-bold text-white mt-1">
                    Lun - Ven: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-gray-900/20 border border-gray-800/40 p-8 sm:p-10 rounded-2xl backdrop-blur-sm shadow-xl">
            <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Invia un Messaggio</h4>
            
            {status.submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
                <h5 className="text-2xl font-bold text-white">Messaggio Inviato!</h5>
                <p className="text-gray-400 max-w-sm font-light">
                  Grazie per avermi contattato. Risponderò alla tua richiesta il prima possibile.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-lg text-gray-300 hover:text-white hover:bg-gray-850 hover:border-gray-600 transition-colors"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
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
                      className="px-4 py-3 rounded-lg bg-gray-950/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-light"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
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
                      className="px-4 py-3 rounded-lg bg-gray-950/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-light"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
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
                    className="px-4 py-3 rounded-lg bg-gray-950/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-light"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
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
                    className="px-4 py-3 rounded-lg bg-gray-950/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-light resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-primary disabled:opacity-50 transition-all duration-300 shadow-lg shadow-primary/15"
                >
                  {status.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
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
