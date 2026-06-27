// Dati centralizzati dei progetti del portfolio.
// Descrizioni tecniche e didascalie estratte direttamente dal file
// "PORTFOLIO-AZ" su Google Drive (su richiesta dell'Arch. Antonello Zambrano).

export const filters = [
  { id: "all", name: "Tutti" },
  { id: "residenziale", name: "Residenziale" },
  { id: "commerciale", name: "Commerciale & Uffici" },
  { id: "strutture", name: "Ingegneria & Strutture" },
  { id: "rendering", name: "Rendering 3D" },
];

export const projects = [
  {
    slug: "antica-lucciola",
    title: 'Ristorante "Antica Lucciola"',
    category: "commerciale",
    categoryLabel: "Commerciale",
    teaser:
      "Ristrutturazione edilizia nel centro storico di Torello per la creazione dell'elegante locale ricettivo Antica Lucciola.",
    fullDesc:
      'La ristrutturazione edilizia del fabbricato situato nel centro storico della frazione Torello ha permesso di creare l\'elegante locale ricettivo "Antica Lucciola", caratterizzato da un\'integrazione armoniosa tra gli spazi interni ed esterni. L\'intervento ha dato vita a una struttura dedicata alla ristorazione che gioca sulla continuità visiva tra la sala da pranzo e il giardino circostante, tipica delle location per eventi.',
    cover: "/antica-lucciola/LUCCIOLA.png",
    images: [
      "/antica-lucciola/LUCCIOLA.png",
      "/antica-lucciola/antica-lucciola.jpeg",
      "/antica-lucciola/antica-lucciola-1.jpeg",
    ],
    captions: [
      "Veduta serale della struttura che mette in risalto il sistema di illuminazione esterna, il volume principale e la cura delle terrazze panoramiche.",
      "Prospettiva diurna che evidenzia l'inserimento del fabbricato nel contesto urbano e paesaggistico della frazione, con l'ampia scalinata d'accesso e le aree verdi.",
      "Interno della sala ristorazione caratterizzato da ampie vetrate ad arco che permettono una perfetta connessione visiva con il verde esterno, creando un ambiente luminoso per cerimonie ed eventi.",
    ],
  },
  {
    slug: "residenza-lombardi",
    title: "Residenza Lombardi",
    category: "residenziale",
    categoryLabel: "Residenziale",
    teaser:
      "Piano di riqualificazione post-sismica della Frazione Lombardi: 24 alloggi a corte semicircolare, 5 villette a schiera e servizi commerciali.",
    fullDesc:
      "L'intervento di riqualificazione nella Frazione Lombardi si configura come un'operazione di pianificazione integrale volta al superamento degli effetti del sisma del 1980. Attraverso una progettazione unitaria, il piano ha dato forma a un nuovo centro gravitazionale per la frazione, bilanciando una densa offerta abitativa — declinata in un complesso residenziale semicircolare da 24 alloggi e una tipologia a schiera da 5 villette — con una dotazione di servizi diversificata che include spazi commerciali e una struttura polifunzionale, quest'ultima concepita specificamente per favorire la coesione sociale e il benessere dei residenti del centro storico.",
    cover: "/lombardi/1.png",
    images: [
      "/lombardi/1.png",
      "/lombardi/2.png",
      "/lombardi/3.png",
      "/lombardi/4.png",
      "/lombardi/5.png",
      "/lombardi/Senza titolo.png",
    ],
    captions: [
      "Ortofoto dell'area dell'intervento urbanistico ed edilizio. Il masterplan evidenzia un'integrazione equilibrata tra le volumetrie residenziali — tra cui il complesso multipiano e le soluzioni a schiera — e gli spazi aperti collettivi, definendo un nuovo margine urbano che dialoga con le aree pubbliche e il contesto agricolo limitrofo.",
      "Edificio residenziale: dinamismo architettonico. Fabbricato polifunzionale che integra attività commerciali al piano terra e tre unità abitative ai piani superiori, ottimizzando la fruizione urbana del lotto.",
      "Edificio a corte: sviluppo semicircolare. Struttura a pianta semicircolare dotata di tre corpi scala, capace di accogliere 24 unità abitative in un'architettura armoniosa e protetta.",
      "Edificio residenziale: continuità volumetrica. Dettaglio del complesso principale che enfatizza la continuità dei prospetti e la qualità degli spazi comuni esterni.",
      "Complesso a schiera: 5 villette. Edificio residenziale a schiera composto da 5 unità abitative, progettato per garantire indipendenza e comfort nel contesto della riqualificazione.",
      "Edificio misto: integrazione commerciale. Fronti residenziali a schiera composti da 5 villette indipendenti; una soluzione progettuale che coniuga privacy e coesione architettonica in un contesto di rigenerazione urbana.",
    ],
  },
  {
    slug: "priscoli",
    title: "Disegni Strutturali Priscoli",
    category: "strutture",
    categoryLabel: "Ingegneria & Strutture",
    teaser:
      "Riqualificazione post-sismica del centro storico di Priscoli: 12 appartamenti, 5 villette a schiera e spazi collettivi, con calcolo strutturale ed esecutivi.",
    fullDesc:
      "L'intervento di riqualificazione del centro storico della Frazione Priscoli nasce in attuazione del piano di recupero di un'area urbana profondamente segnata dai danni del sisma del 1980. Il progetto ha previsto una ricostruzione integrale mirata a ricucire il tessuto storico, bilanciando la realizzazione di nuove volumetrie residenziali — un edificio da 12 appartamenti e un complesso di 5 villette a schiera — con la creazione di funzioni collettive, tra cui un manufatto dedicato alle attività sociali di integrazione e uno spazio ludico attrezzato (campo di bocce), promuovendo così una rigenerazione non solo architettonica ma anche sociale della comunità locale. Il calcolo strutturale e la produzione degli esecutivi di carpenteria metallica e cemento armato hanno garantito il pieno rispetto delle normative di consolidamento e miglioramento sismico.",
    cover: "/priscoli/DAPONTE.png",
    images: [
      "/priscoli/DAPONTE.png",
      "/priscoli/DAPONTE-1.png",
      "/priscoli/DAPONTE-2.png",
      "/priscoli/Senza titolo.png",
    ],
    captions: [
      "Ortofoto dell'area oggetto dell'intervento urbanistico mediante Piano di Recupero. Il piano d'intervento ha previsto una precisa articolazione volumetrica, focalizzata sulla valorizzazione dei margini urbani e sulla definizione di nuovi fronti stradali.",
      "Edificio residenziale: ricomposizione urbana. Fabbricato multipiano destinato a 12 unità abitative, caratterizzato da linee curve che armonizzano l'innesto volumetrico all'interno del contesto storico riqualificato.",
      "Complesso residenziale: tipologia a schiera. Unità abitative a schiera progettate con particolare attenzione al ritmo dei fronti, garantendo un'estetica coesa e un alto standard di comfort residenziale.",
      "Villa unifamiliare: integrazione residenziale. Unità indipendente caratterizzata da un impianto tipologico che dialoga con le aree di pertinenza, definendo un margine curato e accogliente per l'insediamento.",
    ],
  },
  {
    slug: "san-vincenzo",
    title: "Villa San Vincenzo",
    category: "residenziale",
    categoryLabel: "Residenziale",
    teaser:
      "Lottizzazione C/1 in località San Vincenzo: un masterplan ad ampio respiro che integra volumi residenziali complessi e ville bifamiliari.",
    fullDesc:
      "La lottizzazione C/1 in località San Vincenzo rappresenta un intervento di ampio respiro caratterizzato da un'articolata densità insediativa. Il masterplan integra volumi residenziali complessi, mediamente composti da circa 20 unità abitative, con tipologie più minute come ville bifamiliari, favorendo una eterogeneità tipologica che arricchisce il tessuto urbano e ottimizza l'uso del suolo attraverso una disposizione strategica degli edifici.",
    cover: "/san-vincenzo/1.png",
    images: [
      "/san-vincenzo/1.png",
      "/san-vincenzo/2.png",
      "/san-vincenzo/3.png",
      "/san-vincenzo/4.png",
      "/san-vincenzo/5.png",
      "/san-vincenzo/6.png",
      "/san-vincenzo/7.png",
      "/san-vincenzo/8.png",
      "/san-vincenzo/9.png",
      "/san-vincenzo/Senza titolo.png",
    ],
    captions: [
      "Ortofoto dell'area oggetto dell'intervento urbanistico ed edilizio. L'intervento si distingue per l'adozione di un linguaggio progettuale che privilegia geometrie complesse e forme curve, integrate in un sistema viario e di piazze pensato per la fruizione pubblica.",
      "Edificio residenziale: dinamismo delle curve. Fabbricato caratterizzato da linee curve che definiscono il prospetto, conferendo fluidità volumetrica e una spiccata cifra stilistica contemporanea.",
      "Complesso residenziale: articolazione a gradoni. Edificio a sviluppo orizzontale con una volumetria articolata su più livelli, che ottimizza l'esposizione e la fruibilità degli spazi esterni privati.",
      "Edificio residenziale: contrappunto volumetrico. Struttura definita da volumi circolari contrapposti che creano un gioco di pieni e vuoti, favorendo una dinamica spaziale di grande impatto visivo.",
      "Residenza plurifamiliare: sviluppo avvolgente. Edificio che integra percorsi di distribuzione esterna a vista con linee curve avvolgenti, enfatizzando il dialogo tra struttura e spazio urbano.",
      "Edificio residenziale: simmetria e rigore. Fabbricato connotato da una composizione volumetrica equilibrata, che alterna elementi lineari a aggetti curvilinei, garantendo funzionalità e coerenza estetica.",
      "Residenza: estetica organica. Progetto caratterizzato da volumi plastici che si snodano nel lotto, creando un'architettura organica capace di fondersi con l'ambiente circostante.",
      "Edificio residenziale: trasparenza e aggetti. Struttura definita da ampie balconate aggettanti che scandiscono il prospetto, conferendo leggerezza e favorendo l'integrazione tra interno ed esterno.",
      "Villa bifamiliare: armonia residenziale. Abitazione definita da volumi compatti e rifiniti con cura, che si inserisce nel contesto della lottizzazione garantendo privacy e comfort abitativo.",
      "Veduta del progetto.",
    ],
  },
  {
    slug: "torello",
    title: "Lottizzazione e Lotto Torello",
    category: "residenziale",
    categoryLabel: "Residenziale & Urbanistica",
    teaser:
      "Lottizzazione convenzionata C/3 nella Frazione Torello: coerenza architettonica dei volumi e permeabilità visiva con il contesto urbano.",
    fullDesc:
      "L'intervento di lottizzazione convenzionata C/3 presso la Frazione Torello di Mercato San Severino rappresenta un esempio di sviluppo residenziale integrato nel tessuto urbano esistente. Il masterplan privilegia la coerenza architettonica dei volumi e una distribuzione funzionale che ottimizza gli spazi pubblici e le aree di pertinenza privata, garantendo al contempo un elevato grado di permeabilità visiva tra il nuovo insediamento e l'ambiente circostante.",
    cover: "/torello/1.png",
    images: [
      "/torello/1.png",
      "/torello/2.png",
      "/torello/3.png",
      "/torello/4.png",
      "/torello/5.png",
      "/torello/6.png",
      "/torello/7.png",
      "/torello/8.png",
      "/torello/9.png",
      "/torello/Lotto-1.png",
      "/torello/Senza titolo.png",
    ],
    captions: [
      "Ortofoto dell'area. Il masterplan evidenzia un'organizzazione planimetrica che alterna corpi di fabbrica a sviluppo compatto e aggregazioni residenziali più minute, ottimizzando la viabilità interna.",
      "Residenza unifamiliare: armonia volumetrica. Edificio residenziale caratterizzato da un impianto compatto, con volumi studiati per dialogare con le preesistenze del contesto urbano di Torello.",
      "Villa unifamiliare: sintesi formale. Abitazione definita da linee pulite e una distribuzione funzionale dei volumi, che massimizza la fruizione degli spazi aperti di pertinenza.",
      "Residenza unifamiliare: equilibrio architettonico. Progetto caratterizzato da un'attenta articolazione dei prospetti, dove l'uso dei materiali definisce un linguaggio sobrio ed elegante.",
      "Villa unifamiliare: integrazione funzionale. Struttura residenziale che coniuga un'estetica moderna con un impianto planimetrico ottimizzato per il comfort domestico.",
      "Residenza unifamiliare: plasticità dei volumi. Edificio connotato da una movimentazione volumetrica che conferisce dinamismo alla facciata, enfatizzando il rapporto con lo spazio esterno.",
      "Villa unifamiliare: design contemporaneo. Residenza studiata con un approccio formale nitido, caratterizzata da ampie aperture che favoriscono la luminosità degli ambienti interni.",
      "Residenza unifamiliare: coerenza compositiva. Progetto residenziale che si distingue per il rigore dei volumi e una finitura curata, armonizzandosi con l'impianto della lottizzazione.",
      "Villa unifamiliare: articolazione materica. Abitazione che esplora il contrasto materico nei prospetti, definendo una volumetria riconoscibile ed equilibrata.",
      "Residenza unifamiliare: dialogo con il sito. Edificio residenziale progettato per integrare i volumi nel lotto di pertinenza, con un'attenzione particolare alle finiture esterne.",
      "Residenza unifamiliare: chiusura del comparto. Elemento architettonico conclusivo della lottizzazione, caratterizzato da un'impostazione formale che completa il profilo urbano dell'area.",
    ],
  },
  {
    slug: "aci",
    title: "Uffici e Pratiche Tecniche ACI",
    category: "commerciale",
    categoryLabel: "Uffici & Pratiche",
    teaser:
      "Progettazione esecutiva per l'adeguamento impiantistico e antincendio di filiali locali ACI.",
    fullDesc:
      "Progettazione esecutiva per l'adeguamento impiantistico e antincendio di filiali locali ACI, con redazione di piante, sezioni ed esecutivi di cantiere.",
    cover: "/aci/4-zam.png",
    images: [
      "/aci/4-zam.png",
      "/aci/1-peppe.jpg",
      "/aci/2-orlando.png",
      "/aci/3-tonino.png",
      "/aci/10-pasquale.png",
      "/aci/11-antonino.png",
      "/aci/21-lucio.png",
      "/aci/Senza titolo.png",
    ],
    captions: null,
  },
  {
    slug: "rendering-3d",
    title: "Rendering Architettonici 3D",
    category: "rendering",
    categoryLabel: "Rendering 3D",
    teaser:
      "Raccolta di rendering fotorealistici: interni, cucine di lusso, loft con soppalco e facciate residenziali.",
    fullDesc:
      "Raccolta di rendering fotorealistici realizzati per la modellazione d'interni, cucine di lusso, loft con soppalco, zone giorno e facciate di palazzine residenziali.",
    cover: "/VILLA-PROG-1.png",
    images: [
      "/VILLA-PROG-1.png",
      "/PORTICO-2-RENDER.png",
      "/CUCINA-2.png",
      "/garage-1.png",
      "/SOGG-1.png",
      "/TERRAZZO-1.png",
      "/PALAZZINA-2.png",
      "/RENDER-4-SOGG.jpg",
      "/RENDER-1-LIBRERIA.jpg",
    ],
    captions: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
