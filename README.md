# Studio Architettura Zambrano — sito portfolio

Next.js 16 + Tailwind 4. Deploy automatico su Vercel a ogni push su `main`.

## Aggiornare i progetti
- Dati e ordine: `src/lib/projects.js` (ordine = ordine del portfolio PDF).
- Immagini: `public/portfolio/<slug>/NN.webp`, lato lungo 2000 px, WebP qualità ~82.
  Evitare PNG da molti MB: su iPhone possono non caricarsi.
- Foto profilo: aggiungere `public/antonello-zambrano.jpg` (quadrata, 800×800 circa).

## Modulo contatti
Il browser invia a `/api/contatti`; il server inoltra a FormSubmit per `anto.zambrano@virgilio.it`.
La risposta viene considerata positiva soltanto con conferma esplicita del servizio.
In caso di errore il testo resta disponibile e il visitatore può aprirlo in email o WhatsApp.
Attivazione una tantum: inviare un primo messaggio di prova dal sito e cliccare il link
di conferma che arriva nella casella email.
