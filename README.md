# Studio Architettura Zambrano — sito portfolio

Next.js 16 + Tailwind 4. Deploy automatico su Vercel a ogni push su `main`.

## Aggiornare i progetti
- Dati e ordine: `src/lib/projects.js` (ordine = ordine del portfolio PDF).
- Immagini: `public/portfolio/<slug>/NN.webp`, lato lungo 2000 px, WebP qualità ~82.
  Evitare PNG da molti MB: su iPhone possono non caricarsi.
- Foto profilo: aggiungere `public/antonello-zambrano.jpg` (quadrata, 800×800 circa).

## Modulo contatti
Invio dal browser tramite Web3Forms alla casella verificata `antonellozambrano@gmail.com`.
L'identificativo pubblico del modulo è in `src/lib/contact-config.js`; non è una password.
Il servizio viene chiamato dal browser secondo le indicazioni Web3Forms per il piano gratuito.
Il successo richiede una risposta esplicita `success: true`; gli errori conservano il testo e offrono email e WhatsApp.
La vecchia rotta FormSubmit è stata rimossa.
