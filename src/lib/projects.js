// Dati del portfolio, nell'ordine del PDF "Portfolio_A_Z_IT_RID".
// Per riordinare i progetti basta spostare gli oggetti in `projects`.
// Per aggiungere un lavoro: copia un oggetto, cambia slug/testi e metti le
// immagini in public/portfolio/<slug>/ (WebP consigliato, lato lungo 2000 px)
// indicando larghezza e altezza in `sizes`.

export const filters = [
  { id: "all", name: "Tutti" },
  { id: "urbanistica", name: "Urbanistica" },
  { id: "residenziale", name: "Residenziale" },
  { id: "interni", name: "Interior Design" },
  { id: "rendering", name: "Architettura 3D" },
  { id: "commerciale", name: "Commerciale" },
  { id: "strutture", name: "Strutture & Tecnica" },
];

export const heroImages = ["/portfolio/hero/1.webp", "/portfolio/hero/2.webp", "/portfolio/hero/3.webp", "/portfolio/hero/4.webp", "/portfolio/hero/5.webp", "/portfolio/hero/6.webp"];

// Per usare un video slow motion come apertura: metti il file in public/portfolio/hero/
// (MP4 H.264, 1080p, max ~8 MB) e imposta heroVideo = { src: "/portfolio/hero/coppola.mp4", poster: "/portfolio/hero/1.webp" }.
export const heroVideo = { src: "/portfolio/hero/slowmotion.mp4", poster: "/portfolio/hero/1.webp" };

export const projects = [
  {
    "slug": "coppola-capoluogo",
    "film": { "title": "Capoluogo Coppola — In movimento", "src": "/portfolio/coppola-capoluogo/film-chill-house-rev03.mp4" },
    "title": "Capoluogo Coppola — Rigenerazione Urbana",
    "kicker": "Progetto di Rigenerazione Urbana",
    "category": "urbanistica",
    "categoryLabel": "Urbanistica",
    "teaser": "Riqualificazione di un'area industriale dismessa: nuovo polo residenziale di 60 alloggi in classe A4, standard NZEB.",
    "fullDesc": "Progetto di Rigenerazione Urbana: riqualificazione di un'area industriale dismessa, ai sensi della normativa regionale Campania. L'ex industria conserviera diventa un nuovo polo residenziale di pregio, con cessione al Comune di una zona attrezzata a verde pubblico e parcheggio. 60 alloggi in classe A4, standard NZEB, con consumi ridotti fino a 10 volte.",
    "captions": [
        "Inquadramento dell'area di intervento: stato di fatto dell'ex sito industriale, perimetro e posizione strategica.",
        "Vista aerea e planivolumetria: compattezza dell'impianto, copertura piana e spazi aperti.",
        "Prospetto principale: scansione delle facciate, pieni e vuoti, balconate ampie.",
        "Prospettiva d'insieme: integrazione volumetrica, aree esterne e pensilina d'accesso.",
        "Dettaglio prospettico: il varco di accesso, finiture di pregio e illuminazione.",
        "Percorsi pedonali e integrazione del verde: piano terra e ingressi ai garage.",
        "Vista notturna: illuminazione integrata nelle facciate.",
        "Percorso di arrivo al complesso: il fronte residenziale incorniciato dagli alberi. Immagine originale 7-COPPOLA.tif."
    ],
    "images": [
        "/portfolio/coppola-capoluogo/01.webp",
        "/portfolio/coppola-capoluogo/02.webp",
        "/portfolio/coppola-capoluogo/03.webp",
        "/portfolio/coppola-capoluogo/04.webp",
        "/portfolio/coppola-capoluogo/05.webp",
        "/portfolio/coppola-capoluogo/06.webp",
        "/portfolio/coppola-capoluogo/07.webp",
        "/portfolio/coppola-capoluogo/08.webp"
    ],
    "sizes": [
        [
            1741,
            1183
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ],
        [
            1920,
            1080
        ]
    ],
    "cover": "/portfolio/coppola-capoluogo/04.webp",
    "coverSize": [
        1920,
        1080
    ],
    "num": "01"
},
  {
    "slug": "baronissi-villa-a-schiera",
    "film": { "title": "Baronissi — Villa a schiera bifamiliare", "src": "/portfolio/baronissi-villa-a-schiera/film-baronissi-rev01.mp4" },
    "title": "Villa a Schiera Bifamiliare — Baronissi",
    "kicker": "Residenziale",
    "category": "residenziale",
    "categoryLabel": "Residenziale",
    "teaser": "Demolizione di un fabbricato esistente e nuova villa a schiera bifamiliare dal linguaggio contemporaneo.",
    "fullDesc": "Progetto residenziale a Baronissi (SA): demolizione di un fabbricato esistente e costruzione di una villa a schiera bifamiliare, caratterizzata da un linguaggio architettonico contemporaneo.",
    "captions": [
      "Prospetto principale: rappresentazione frontale della villa per due alloggi, con la simmetria dei volumi aggettanti dei balconi e il rivestimento in doghe effetto legno.",
      "Inserimento stradale: vista d'insieme dalla strada che enfatizza la recinzione perimetrale in pietra e il design moderno delle facciate bifamiliari.",
      "Vista di spigolo: articolazione dei volumi su più livelli, pensilina in acciaio all'ingresso e recinzione con verde perimetrale.",
      "Vista zenitale (drone): inserimento nel lotto, distribuzione degli spazi esterni, rampa di accesso al piano interrato e pensilina ombreggiante.",
      "Dettaglio prospettico: focus sul piano terra, con integrazione tra il rivestimento in doghe effetto legno e i serramenti a tutta altezza."
    ],
    "images": [
      "/portfolio/baronissi-villa-a-schiera/01.webp",
      "/portfolio/baronissi-villa-a-schiera/02.webp",
      "/portfolio/baronissi-villa-a-schiera/03.webp",
      "/portfolio/baronissi-villa-a-schiera/04.webp",
      "/portfolio/baronissi-villa-a-schiera/05.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/baronissi-villa-a-schiera/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "01"
  },
  {
    "slug": "fisciano-residenze-universitarie",
    "title": "Residenze per Studenti Universitari — Fisciano",
    "kicker": "Progetto in evidenza",
    "category": "residenziale",
    "categoryLabel": "Residenziale",
    "teaser": "Facciata, presenza urbana, vista aerea e composizione architettonica contemporanea.",
    "fullDesc": "Set architettonico completo di rendering per il Comune di Fisciano: residenze per studenti universitari, con studio di facciata, presenza urbana, vista aerea e composizione residenziale contemporanea.",
    "captions": [
      "Vista d'insieme: volume a quattro livelli con facciata azzurra e infissi a colori differenziati, parcheggio di pertinenza e copertura piana con terrazza.",
      "Dettaglio di facciata: rivestimento in lastre chiare, cornici colorate e frangisole orizzontali che scandiscono il prospetto, con pensilina d'ingresso al piano terra.",
      "Prospetto sul fronte strada: facciata a capanna con rivestimento in lastre chiare, inserti in listelli di legno e mattone faccia a vista, balcone con parapetto in vetro.",
      "Vista d'angolo: volume a più livelli con ampie finestre a tutta altezza e balconi aggettanti, affacciato sulla corte.",
      "Corte esterna: pavimentazione in masselli, siepe perimetrale e recinzione a definire lo spazio di pertinenza."
    ],
    "images": [
      "/portfolio/fisciano-residenze-universitarie/01.webp",
      "/portfolio/fisciano-residenze-universitarie/02.webp",
      "/portfolio/fisciano-residenze-universitarie/03.webp",
      "/portfolio/fisciano-residenze-universitarie/04.webp",
      "/portfolio/fisciano-residenze-universitarie/05.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1080,
        1000
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/fisciano-residenze-universitarie/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "02"
  },
  {
    "slug": "caredil-capoluogo",
    "title": "Capoluogo Caredil — Sostituzione Edilizia",
    "kicker": "Piano Casa Regione Campania",
    "category": "residenziale",
    "categoryLabel": "Residenziale",
    "teaser": "Demolizione di fabbricati degradati e nuovo edificio residenziale di 9 unità, tre appartamenti per piano.",
    "fullDesc": "Intervento nel capoluogo di Mercato San Severino, nell'ambito del Piano Casa della Regione Campania: sostituzione edilizia con demolizione di fabbricati degradati e nuovo edificio residenziale di 9 unità, tre appartamenti per piano.",
    "captions": [
      "Ortofoto con fotoinserimento: vista zenitale, impronta a terra e integrazione nel tessuto urbano consolidato.",
      "Prospettiva: estetica contemporanea, vista d'angolo, rigore geometrico dei volumi e ampie balconate.",
      "Veduta aerea: articolazione dei volumi, disposizione razionale delle unità e copertura piana.",
      "Prospetto frontale: scansione dei tre livelli e linee orizzontali dei balconi.",
      "Dettaglio: percorsi e soglie, distribuzione esterna, accesso ai garage e verde integrato."
    ],
    "images": [
      "/portfolio/caredil-capoluogo/01.webp",
      "/portfolio/caredil-capoluogo/02.webp",
      "/portfolio/caredil-capoluogo/03.webp",
      "/portfolio/caredil-capoluogo/04.webp",
      "/portfolio/caredil-capoluogo/05.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/caredil-capoluogo/02.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "02"
  },
  {
    "slug": "san-vincenzo",
    "title": "Lottizzazione San Vincenzo",
    "kicker": "Masterplanning e struttura urbana",
    "category": "urbanistica",
    "categoryLabel": "Residenziale & Urbanistica",
    "teaser": "Lottizzazione C/1 in località San Vincenzo: un masterplan ad ampio respiro che integra volumi residenziali complessi e ville bifamiliari.",
    "fullDesc": "La lottizzazione C/1 in località San Vincenzo rappresenta un intervento di ampio respiro caratterizzato da un'articolata densità insediativa. Il masterplan integra volumi residenziali complessi, mediamente composti da circa 20 unità abitative, con tipologie più minute come ville bifamiliari, favorendo una eterogeneità tipologica che arricchisce il tessuto urbano e ottimizza l'uso del suolo attraverso una disposizione strategica degli edifici.",
    "captions": [
      "Ortofoto dell'area oggetto dell'intervento urbanistico ed edilizio. L'intervento si distingue per l'adozione di un linguaggio progettuale che privilegia geometrie complesse e forme curve, integrate in un sistema viario e di piazze pensato per la fruizione pubblica.",
      "Edificio residenziale: dinamismo delle curve. Fabbricato caratterizzato da linee curve che definiscono il prospetto, conferendo fluidità volumetrica e una spiccata cifra stilistica contemporanea.",
      "Complesso residenziale: articolazione a gradoni. Edificio a sviluppo orizzontale con una volumetria articolata su più livelli, che ottimizza l'esposizione e la fruibilità degli spazi esterni privati.",
      "Edificio residenziale: contrappunto volumetrico. Struttura definita da volumi circolari contrapposti che creano un gioco di pieni e vuoti, favorendo una dinamica spaziale di grande impatto visivo.",
      "Residenza plurifamiliare: sviluppo avvolgente. Edificio che integra percorsi di distribuzione esterna a vista con linee curve avvolgenti, enfatizzando il dialogo tra struttura e spazio urbano.",
      "Edificio residenziale: simmetria e rigore. Fabbricato connotato da una composizione volumetrica equilibrata, che alterna elementi lineari a aggetti curvilinei, garantendo funzionalità e coerenza estetica.",
      "Residenza: estetica organica. Progetto caratterizzato da volumi plastici che si snodano nel lotto, creando un'architettura organica capace di fondersi con l'ambiente circostante.",
      "Edificio residenziale: trasparenza e aggetti. Struttura definita da ampie balconate aggettanti che scandiscono il prospetto, conferendo leggerezza e favorendo l'integrazione tra interno ed esterno.",
      "Villa bifamiliare: armonia residenziale. Abitazione definita da volumi compatti e rifiniti con cura, che si inserisce nel contesto della lottizzazione garantendo privacy e comfort abitativo.",
      "Villa unifamiliare: porticato ad archi. Abitazione con loggia a tre archi al piano terra e copertura a falde, inserita nel lotto con recinzione piena."
    ],
    "images": [
      "/portfolio/san-vincenzo/01.webp",
      "/portfolio/san-vincenzo/02.webp",
      "/portfolio/san-vincenzo/03.webp",
      "/portfolio/san-vincenzo/04.webp",
      "/portfolio/san-vincenzo/05.webp",
      "/portfolio/san-vincenzo/06.webp",
      "/portfolio/san-vincenzo/07.webp",
      "/portfolio/san-vincenzo/08.webp",
      "/portfolio/san-vincenzo/09.webp",
      "/portfolio/san-vincenzo/10.webp"
    ],
    "sizes": [
      [
        1316,
        932
      ],
      [
        1136,
        746
      ],
      [
        1071,
        746
      ],
      [
        1518,
        816
      ],
      [
        1315,
        927
      ],
      [
        1638,
        966
      ],
      [
        1272,
        919
      ],
      [
        1068,
        875
      ],
      [
        1155,
        915
      ],
      [
        1521,
        935
      ]
    ],
    "cover": "/portfolio/san-vincenzo/01.webp",
    "coverSize": [
      1316,
      932
    ],
    "num": "03"
  },
  {
    "slug": "torello",
    "title": "Lottizzazione e Lotto Torello",
    "kicker": "Masterplanning e struttura urbana",
    "category": "urbanistica",
    "categoryLabel": "Residenziale & Urbanistica",
    "teaser": "Lottizzazione convenzionata C/3 nella Frazione Torello: coerenza architettonica dei volumi e permeabilità visiva con il contesto urbano.",
    "fullDesc": "L'intervento di lottizzazione convenzionata C/3 presso la Frazione Torello di Mercato San Severino rappresenta un esempio di sviluppo residenziale integrato nel tessuto urbano esistente. Il masterplan privilegia la coerenza architettonica dei volumi e una distribuzione funzionale che ottimizza gli spazi pubblici e le aree di pertinenza privata, garantendo al contempo un elevato grado di permeabilità visiva tra il nuovo insediamento e l'ambiente circostante.",
    "captions": [
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
      "Residenza unifamiliare: struttura in corso di realizzazione. Edificio a più livelli con struttura portante completata, in attesa delle finiture, a chiusura del comparto."
    ],
    "images": [
      "/portfolio/torello/01.webp",
      "/portfolio/torello/02.webp",
      "/portfolio/torello/03.webp",
      "/portfolio/torello/04.webp",
      "/portfolio/torello/05.webp",
      "/portfolio/torello/06.webp",
      "/portfolio/torello/07.webp",
      "/portfolio/torello/08.webp",
      "/portfolio/torello/09.webp",
      "/portfolio/torello/10.webp",
      "/portfolio/torello/11.webp"
    ],
    "sizes": [
      [
        1078,
        891
      ],
      [
        1403,
        920
      ],
      [
        1712,
        928
      ],
      [
        1465,
        922
      ],
      [
        1566,
        931
      ],
      [
        1361,
        935
      ],
      [
        1565,
        911
      ],
      [
        1265,
        937
      ],
      [
        1651,
        953
      ],
      [
        1085,
        943
      ],
      [
        1192,
        876
      ]
    ],
    "cover": "/portfolio/torello/01.webp",
    "coverSize": [
      1078,
      891
    ],
    "num": "04"
  },
  {
    "slug": "acigliano",
    "title": "Lottizzazione C/3 — Acigliano",
    "kicker": "Masterplanning e coordinamento complesso",
    "category": "urbanistica",
    "categoryLabel": "Residenziale & Urbanistica",
    "teaser": "30 lotti residenziali con urbanizzazione primaria e secondaria: dal singolo edificio all'ambiente completo.",
    "fullDesc": "Lottizzazione convenzionata nella frazione Acigliano di Mercato San Severino: 30 lotti residenziali con urbanizzazione primaria e secondaria. Progettazione architettonica e strutturale, strade, reti e illuminazione pubblica, spazi pubblici e collettivi, direzione lavori e consegna, accatastamento, studio termico e pratiche per l'agibilità. Un quadro pianificatorio completo che dimostra il coordinamento tra sito, edifici e infrastrutture.",
    "captions": [
      "Lottizzazione convenzionata C/3, Acigliano: masterplan e infrastrutture. L'ortofoto illustra l'assetto morfologico della lottizzazione, caratterizzata da una trama insediativa ordinata e coerente con il contesto paesaggistico circostante, con maglia viaria interna di collegamento tra le unità unifamiliari e plurifamiliari.",
      "Residenza unifamiliare: sintesi volumetrica. Composizione architettonica caratterizzata dall'integrazione tra un corpo basamentale rivestito in ceramica e una geometria superiore curva, che modula la plasticità della struttura nel contesto residenziale.",
      "Villa unifamiliare: contrasti materici. Progetto residenziale basato sul contrasto tra il rivestimento chiaro dei volumi geometrici e la volumetria curva del coronamento, definendo un linguaggio moderno e armonico.",
      "Residenza bifamiliare: geometria e trasparenze. Edificio caratterizzato da una volumetria curva al piano superiore e da un ampio sistema di aperture, progettato per massimizzare il comfort visivo e l'integrazione con lo spazio esterno.",
      "Villa quadrifamiliare: articolazione dei prospetti. Intervento residenziale contraddistinto da una composizione dei volumi complessa, con terrazzamenti aggettanti e un uso sapiente dei pieni e dei vuoti che definisce l'identità dell'edificio.",
      "Villa unifamiliare: plasticità volumetrica. Residenza definita da linee curve continue che conferiscono dinamismo alla facciata, con un'articolazione dei volumi studiata per ottimizzare l'esposizione e il rapporto con il lotto di pertinenza.",
      "Residenza unifamiliare: equilibrio formale. Struttura residenziale caratterizzata da un'impostazione formale classica rivisitata, con un gioco di coperture a falde e volumi aggettanti che definiscono uno spazio domestico accogliente ed equilibrato.",
      "Residenza unifamiliare: integrazione paesaggistica. Abitazione caratterizzata da uno sviluppo orizzontale e da un linguaggio architettonico che integra elementi tradizionali a falde con ampie superfici vetrate, garantendo continuità tra interno ed esterno.",
      "Residenza unifamiliare: design contemporaneo. Fabbricato caratterizzato da un'impostazione geometrica netta e dall'impiego di ampie vetrate, progettato per enfatizzare la luminosità degli spazi abitativi interni e la leggerezza volumetrica.",
      "Villa unifamiliare: integrazione funzionale. Progetto residenziale che coniuga un impianto planimetrico funzionale con un'estetica ricercata, caratterizzato da finiture di pregio e da un'attenta cura nel rapporto con il lotto di pertinenza.",
      "Residenza unifamiliare: linguaggio tradizionale. Edificio caratterizzato da un impianto classico con tetto a falde, impreziosito da decorazioni in facciata e da un sistema di recinzione in pietra che ne definisce il perimetro.",
      "Villa unifamiliare: volumi dinamici. Edificio residenziale connotato dalla sovrapposizione di volumi distinti e dall'uso di una palette cromatica calda, con un'articolazione delle facciate che crea ritmi e profondità variabili.",
      "Residenza bifamiliare: volume curvo in sommità. Edificio con coronamento a pianta curva, ingresso con elementi in pietra e prospetti dalla cromia calda.",
      "Residenza in ristrutturazione: cantiere. Fabbricato in fase di riqualificazione, caratterizzato da un'impalcatura che avvolge la struttura, evidenziando l'intervento di recupero dei volumi e dei prospetti esistenti.",
      "Villa unifamiliare: porticati e archi. Abitazione definita da un sistema di ampi archi a tutto sesto che creano una loggia vivibile, conferendo eleganza e continuità spaziale tra l'interno e il giardino.",
      "Residenza in ristrutturazione: volumi. Immobile in fase di cantiere, caratterizzato da uno scheletro strutturale che rivela una volumetria definita, pronta per la definizione delle finiture architettoniche.",
      "Residenza plurifamiliare: rigore compositivo. Struttura residenziale caratterizzata da una chiara scansione volumetrica, con balconate aggettanti che definiscono l'estetica dei prospetti e ottimizzano la fruizione degli spazi aperti.",
      "Villa unifamiliare: spazi aperti. Abitazione connotata da aggetti pronunciati e da finiture in laterizio a vista nei pilastri, che creano un gioco di ombre e volumi architettonici di carattere moderno.",
      "Edificio residenziale a schiera bifamiliare: dinamismo plastico. Struttura caratterizzata da ampi volumi aggettanti, con un elemento curvo distintivo che dinamizza la facciata e definisce un linguaggio architettonico contemporaneo.",
      "Villa a schiera trifamiliare: composizione materica. Progetto residenziale che integra un elemento cilindrico in pietra con volumi geometrici regolari, creando un contrasto materico distintivo che valorizza l'ingresso e la facciata.",
      "Villa a schiera bifamiliare: dettagli costruttivi. Fronte a schiera con aggetti pronunciati e finiture in laterizio a vista, che definiscono l'ingombro dei volumi lungo la strada."
    ],
    "images": [
      "/portfolio/acigliano/01.webp",
      "/portfolio/acigliano/02.webp",
      "/portfolio/acigliano/03.webp",
      "/portfolio/acigliano/04.webp",
      "/portfolio/acigliano/05.webp",
      "/portfolio/acigliano/06.webp",
      "/portfolio/acigliano/07.webp",
      "/portfolio/acigliano/08.webp",
      "/portfolio/acigliano/09.webp",
      "/portfolio/acigliano/10.webp",
      "/portfolio/acigliano/11.webp",
      "/portfolio/acigliano/12.webp",
      "/portfolio/acigliano/13.webp",
      "/portfolio/acigliano/14.webp",
      "/portfolio/acigliano/15.webp",
      "/portfolio/acigliano/16.webp",
      "/portfolio/acigliano/17.webp",
      "/portfolio/acigliano/18.webp",
      "/portfolio/acigliano/19.webp",
      "/portfolio/acigliano/20.webp",
      "/portfolio/acigliano/21.webp"
    ],
    "sizes": [
      [
        693,
        919
      ],
      [
        1526,
        933
      ],
      [
        1566,
        953
      ],
      [
        1534,
        950
      ],
      [
        1530,
        890
      ],
      [
        1156,
        924
      ],
      [
        1700,
        939
      ],
      [
        1158,
        843
      ],
      [
        1040,
        949
      ],
      [
        1477,
        894
      ],
      [
        1491,
        954
      ],
      [
        1210,
        920
      ],
      [
        1508,
        930
      ],
      [
        1227,
        922
      ],
      [
        1415,
        938
      ],
      [
        1341,
        928
      ],
      [
        1372,
        939
      ],
      [
        1549,
        931
      ],
      [
        1328,
        885
      ],
      [
        1284,
        943
      ],
      [
        1233,
        653
      ]
    ],
    "cover": "/portfolio/acigliano/01.webp",
    "coverSize": [
      693,
      919
    ],
    "num": "05"
  },
  {
    "slug": "residenza-lombardi",
    "title": "Rigenerazione Urbana — Frazione Lombardi",
    "kicker": "Rigenerazione urbana",
    "category": "urbanistica",
    "categoryLabel": "Rigenerazione Urbana",
    "teaser": "Piano di riqualificazione post-sismica della Frazione Lombardi: 24 alloggi a corte semicircolare, 5 villette a schiera e servizi commerciali.",
    "fullDesc": "L'intervento di riqualificazione nella Frazione Lombardi si configura come un'operazione di pianificazione integrale volta al superamento degli effetti del sisma del 1980. Attraverso una progettazione unitaria, il piano ha dato forma a un nuovo centro gravitazionale per la frazione, bilanciando una densa offerta abitativa — declinata in un complesso residenziale semicircolare da 24 alloggi e una tipologia a schiera da 5 villette — con una dotazione di servizi diversificata che include spazi commerciali e una struttura polifunzionale, quest'ultima concepita specificamente per favorire la coesione sociale e il benessere dei residenti del centro storico.",
    "captions": [
      "Ortofoto dell'area dell'intervento urbanistico ed edilizio. Il masterplan evidenzia un'integrazione equilibrata tra le volumetrie residenziali — tra cui il complesso multipiano e le soluzioni a schiera — e gli spazi aperti collettivi, definendo un nuovo margine urbano che dialoga con le aree pubbliche e il contesto agricolo limitrofo.",
      "Edificio residenziale: dinamismo architettonico. Fabbricato polifunzionale che integra attività commerciali al piano terra e tre unità abitative ai piani superiori, ottimizzando la fruizione urbana del lotto.",
      "Edificio a corte: sviluppo semicircolare. Struttura a pianta semicircolare dotata di tre corpi scala, capace di accogliere 24 unità abitative in un'architettura armoniosa e protetta.",
      "Edificio residenziale: continuità volumetrica. Dettaglio del complesso principale che enfatizza la continuità dei prospetti e la qualità degli spazi comuni esterni.",
      "Complesso a schiera: 5 villette. Edificio residenziale a schiera composto da 5 unità abitative, progettato per garantire indipendenza e comfort nel contesto della riqualificazione.",
      "Edificio residenziale: volumi curvi e terrazzi. Fronte con balcone semicircolare in aggetto e volumi sfalsati, in dialogo con il complesso semicircolare."
    ],
    "images": [
      "/portfolio/residenza-lombardi/01.webp",
      "/portfolio/residenza-lombardi/02.webp",
      "/portfolio/residenza-lombardi/03.webp",
      "/portfolio/residenza-lombardi/04.webp",
      "/portfolio/residenza-lombardi/05.webp",
      "/portfolio/residenza-lombardi/06.webp"
    ],
    "sizes": [
      [
        1130,
        896
      ],
      [
        1584,
        911
      ],
      [
        1819,
        888
      ],
      [
        1655,
        914
      ],
      [
        1327,
        833
      ],
      [
        1703,
        945
      ]
    ],
    "cover": "/portfolio/residenza-lombardi/01.webp",
    "coverSize": [
      1130,
      896
    ],
    "num": "06"
  },
  {
    "slug": "priscoli",
    "title": "Rigenerazione Urbana — Frazione Priscoli",
    "kicker": "Rigenerazione urbana e strutture",
    "category": "strutture",
    "categoryLabel": "Ingegneria & Strutture",
    "teaser": "Riqualificazione post-sismica del centro storico di Priscoli: 12 appartamenti, 5 villette a schiera e spazi collettivi, con calcolo strutturale ed esecutivi.",
    "fullDesc": "L'intervento di riqualificazione del centro storico della Frazione Priscoli nasce in attuazione del piano di recupero di un'area urbana profondamente segnata dai danni del sisma del 1980. Il progetto ha previsto una ricostruzione integrale mirata a ricucire il tessuto storico, bilanciando la realizzazione di nuove volumetrie residenziali — un edificio da 12 appartamenti e un complesso di 5 villette a schiera — con la creazione di funzioni collettive, tra cui un manufatto dedicato alle attività sociali di integrazione e uno spazio ludico attrezzato (campo di bocce), promuovendo così una rigenerazione non solo architettonica ma anche sociale della comunità locale. Il calcolo strutturale e la produzione degli esecutivi di carpenteria metallica e cemento armato hanno garantito il pieno rispetto delle normative di consolidamento e miglioramento sismico.",
    "captions": [
      "Ortofoto dell'area oggetto dell'intervento urbanistico mediante Piano di Recupero. Il piano d'intervento ha previsto una precisa articolazione volumetrica, focalizzata sulla valorizzazione dei margini urbani e sulla definizione di nuovi fronti stradali.",
      "Edificio residenziale: ricomposizione urbana. Fabbricato multipiano destinato a 12 unità abitative, caratterizzato da linee curve che armonizzano l'innesto volumetrico all'interno del contesto storico riqualificato.",
      "Complesso residenziale: tipologia a schiera. Unità abitative a schiera progettate con particolare attenzione al ritmo dei fronti, garantendo un'estetica coesa e un alto standard di comfort residenziale.",
      "Villa unifamiliare: integrazione residenziale. Unità indipendente caratterizzata da un impianto tipologico che dialoga con le aree di pertinenza, definendo un margine curato e accogliente per l'insediamento."
    ],
    "images": [
      "/portfolio/priscoli/01.webp",
      "/portfolio/priscoli/02.webp",
      "/portfolio/priscoli/03.webp",
      "/portfolio/priscoli/04.webp"
    ],
    "sizes": [
      [
        1223,
        930
      ],
      [
        1636,
        949
      ],
      [
        1623,
        932
      ],
      [
        1587,
        913
      ]
    ],
    "cover": "/portfolio/priscoli/01.webp",
    "coverSize": [
      1223,
      930
    ],
    "num": "07"
  },
  {
    "slug": "antica-lucciola",
    "title": "Ristorante \"Antica Lucciola\"",
    "kicker": "Commerciale e ricettivo",
    "category": "commerciale",
    "categoryLabel": "Commerciale",
    "teaser": "Ristrutturazione edilizia nel centro storico di Torello per la creazione dell'elegante locale ricettivo Antica Lucciola.",
    "fullDesc": "La ristrutturazione edilizia del fabbricato situato nel centro storico della frazione Torello ha permesso di creare l'elegante locale ricettivo \"Antica Lucciola\", caratterizzato da un'integrazione armoniosa tra gli spazi interni ed esterni. L'intervento ha dato vita a una struttura dedicata alla ristorazione che gioca sulla continuità visiva tra la sala da pranzo e il giardino circostante, tipica delle location per eventi.",
    "captions": [
      "Veduta serale della struttura che mette in risalto il sistema di illuminazione esterna, il volume principale e la cura delle terrazze panoramiche.",
      "Prospettiva diurna che evidenzia l'inserimento del fabbricato nel contesto urbano e paesaggistico della frazione, con l'ampia scalinata d'accesso e le aree verdi.",
      "Interno della sala ristorazione caratterizzato da ampie vetrate ad arco che permettono una perfetta connessione visiva con il verde esterno, creando un ambiente luminoso per cerimonie ed eventi."
    ],
    "images": [
      "/portfolio/antica-lucciola/01.webp",
      "/portfolio/antica-lucciola/02.webp",
      "/portfolio/antica-lucciola/03.webp"
    ],
    "sizes": [
      [
        675,
        450
      ],
      [
        1627,
        936
      ],
      [
        960,
        640
      ]
    ],
    "cover": "/portfolio/antica-lucciola/02.webp",
    "coverSize": [
      1627,
      936
    ],
    "num": "08"
  },
  {
    "slug": "tipologie-residenziali",
    "title": "Tipologie residenziali",
    "kicker": "Architettura",
    "category": "rendering",
    "categoryLabel": "Architettura · Rendering",
    "teaser": "Dalle ville compatte all'edilizia collettiva.",
    "fullDesc": "Dalle ville compatte all'edilizia collettiva: un repertorio di tipologie residenziali, dal rendering al dettaglio di facciata.",
    "captions": null,
    "images": [
      "/portfolio/tipologie-residenziali/01.webp",
      "/portfolio/tipologie-residenziali/02.webp",
      "/portfolio/tipologie-residenziali/03.webp",
      "/portfolio/tipologie-residenziali/04.webp",
      "/portfolio/tipologie-residenziali/05.webp",
      "/portfolio/tipologie-residenziali/06.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1080,
        1920
      ],
      [
        1920,
        1080
      ],
      [
        1134,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/tipologie-residenziali/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "10"
  },
  {
    "slug": "sito-paesaggio-ingresso",
    "title": "Sito, paesaggio e ingresso",
    "kicker": "Architettura",
    "category": "rendering",
    "categoryLabel": "Architettura · Rendering",
    "teaser": "Architettura raccontata attraverso percorso, soglia e spazio esterno.",
    "fullDesc": "L'architettura raccontata attraverso percorso, soglia e spazio esterno: ingressi, pergole, portici e rapporto con il paesaggio.",
    "captions": null,
    "images": [
      "/portfolio/sito-paesaggio-ingresso/01.webp",
      "/portfolio/sito-paesaggio-ingresso/02.webp",
      "/portfolio/sito-paesaggio-ingresso/03.webp",
      "/portfolio/sito-paesaggio-ingresso/04.webp",
      "/portfolio/sito-paesaggio-ingresso/05.webp",
      "/portfolio/sito-paesaggio-ingresso/06.webp",
      "/portfolio/sito-paesaggio-ingresso/07.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1563,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/sito-paesaggio-ingresso/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "11"
  },
  {
    "slug": "abitare-contemporaneo-e-caldo",
    "title": "Abitare contemporaneo e caldo",
    "kicker": "Interni",
    "category": "interni",
    "categoryLabel": "Interior Design",
    "teaser": "Legno, arredi integrati, luce morbida e continuità spaziale.",
    "fullDesc": "Legno, arredi integrati, luce morbida e continuità spaziale: zone giorno progettate come un unico ambiente.",
    "captions": [
      "Zona living. Raffinata area soggiorno con parete attrezzata in marmo nero venato e inserti in legno, che crea un forte contrasto cromatico e un ambiente di grande prestigio.",
      "Zona living: dettaglio della parete attrezzata. Rivestimento in marmo nero venato, mobile sospeso, televisore e quadri a parete su pavimento in essenza chiara.",
      "Living & Dinette. Vista d'insieme che illustra l'integrazione tra la zona conversazione e l'area pranzo, valorizzata da arredi coordinati e illuminazione d'atmosfera.",
      "Sala di conversazione. Pareti rivestite in pietra, illuminazione d'atmosfera e ampie aperture con persiane.",
      "Open space: zona conversazione e cucina. Il soggiorno dialoga con la cucina a vista attraverso controsoffitto con illuminazione incassata e pavimento in essenza.",
      "Living area & Art wall. Soggiorno caratterizzato da una parete blu con doghe verticali che funge da fondale per una galleria d'arte, abbinata a un mobile sospeso in essenza.",
      "Soggiorno: parete TV attrezzata. Boiserie listellare in legno, mobili bianchi con inserti in essenza e libreria a giorno su pavimento a spina di pesce."
    ],
    "images": [
      "/portfolio/abitare-contemporaneo-e-caldo/01.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/02.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/03.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/04.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/05.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/06.webp",
      "/portfolio/abitare-contemporaneo-e-caldo/07.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/abitare-contemporaneo-e-caldo/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "12"
  },
  {
    "slug": "abitare-sotto-il-tetto",
    "title": "Abitare sotto il tetto",
    "kicker": "Interni",
    "category": "interni",
    "categoryLabel": "Interior Design",
    "teaser": "Interni mansardati: la geometria trasformata in identità.",
    "fullDesc": "Interni mansardati: la geometria della copertura trasformata in identità, con soppalchi e arredi su misura.",
    "captions": [
      "Sottotetto: zona living con soppalco. Salotto sotto la scala di accesso al soppalco, con travi di copertura a vista e illuminazione calda.",
      "Soppalco: zona notte. Camera sul soppalco con parapetto in vetro e testata in legno retroilluminata.",
      "Camera con letto contenitore. Letto su basamento a cassetti, armadiature bianche con profili in legno e luce lineare integrata.",
      "Camera con letto contenitore: vista opposta. Zona scrivania e galleria di fotografie a parete, con armadiature a tutta altezza.",
      "Camera matrimoniale. Testata in listelli di legno con taglio di luce LED, poltrona e dettagli decorativi alle pareti."
    ],
    "images": [
      "/portfolio/abitare-sotto-il-tetto/01.webp",
      "/portfolio/abitare-sotto-il-tetto/02.webp",
      "/portfolio/abitare-sotto-il-tetto/03.webp",
      "/portfolio/abitare-sotto-il-tetto/04.webp",
      "/portfolio/abitare-sotto-il-tetto/05.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/abitare-sotto-il-tetto/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "13"
  },
  {
    "slug": "dettaglio-contenimento-atmosfera",
    "title": "Dettaglio, contenimento e atmosfera",
    "kicker": "Interni",
    "category": "interni",
    "categoryLabel": "Interior Design",
    "teaser": "Elementi su misura, ritmo materico e illuminazione curata.",
    "fullDesc": "Elementi su misura, ritmo materico e illuminazione curata: cantinette, corridoi, sale e spazi accessori.",
    "captions": [
      "Vetrina e cantina. Mobile con profili neri e vetro, cantinetta illuminata e nicchia espositiva a lato del passaggio.",
      "Sala da pranzo. Tavolo in legno con sedute colorate, parete in pietra a vista e controsoffitto con gola luminosa.",
      "Design dell'autorimessa. Prospettiva d'insieme del box auto della villa, con continuità stilistica degli interni: illuminazione lineare a soffitto, pavimentazione neutra e pannelli fotografici che scandiscono il percorso.",
      "Galleria d'arte nel box auto. Parete attrezzata con boiserie in legno che incornicia una serie di stampe fotografiche, trasformando un ambiente di servizio in una galleria d'arte privata.",
      "Corridoio distributivo. Spazio di transizione caratterizzato da rivestimenti a doghe di legno, che conferiscono calore e una ritmica visiva costante che guida il percorso.",
      "Corridoio distributivo: prospettiva verso il living. Boiserie a listelli, specchio e pavimento in essenza."
    ],
    "images": [
      "/portfolio/dettaglio-contenimento-atmosfera/01.webp",
      "/portfolio/dettaglio-contenimento-atmosfera/02.webp",
      "/portfolio/dettaglio-contenimento-atmosfera/03.webp",
      "/portfolio/dettaglio-contenimento-atmosfera/04.webp",
      "/portfolio/dettaglio-contenimento-atmosfera/05.webp",
      "/portfolio/dettaglio-contenimento-atmosfera/06.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1125,
        2000
      ],
      [
        1100,
        1200
      ]
    ],
    "cover": "/portfolio/dettaglio-contenimento-atmosfera/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "14"
  },
  {
    "slug": "pranzo-cucina-spazio-sociale",
    "title": "Pranzo, cucina e spazio sociale",
    "kicker": "Interni",
    "category": "interni",
    "categoryLabel": "Interior Design",
    "teaser": "Spazi progettati intorno all'incontro, alla visibilità e ai flussi.",
    "fullDesc": "Spazi progettati intorno all'incontro, alla visibilità e ai flussi: cucine, isole e zone pranzo.",
    "captions": [
      "Cucina con isola (marmo bianco). Variante di finitura per l'isola, in marmo bianco venato, che conferisce luminosità e un'estetica più eterea allo spazio.",
      "Cucina con isola (marmo nero). Isola centrale in marmo nero venato, sovrastata da un sistema di illuminazione a sospensione dal design minimale.",
      "Integrazione zone pranzo e cucina. La separazione è mediata da ampie vetrate color ambra che permettono la continuità visiva mantenendo la distinzione funzionale degli ambienti.",
      "Cucina e zona pranzo. Isola con piano in legno che funge da tavolo, pensili chiari e ampia apertura sul giardino.",
      "Cucina lineare. Piano di lavoro con forni da incasso, penisola snack in essenza e illuminazione a gola.",
      "Cucina lineare: vista frontale. Basi bianche, paraschizzi in marmo venato e pensili in essenza con luce integrata."
    ],
    "images": [
      "/portfolio/pranzo-cucina-spazio-sociale/01.webp",
      "/portfolio/pranzo-cucina-spazio-sociale/02.webp",
      "/portfolio/pranzo-cucina-spazio-sociale/03.webp",
      "/portfolio/pranzo-cucina-spazio-sociale/04.webp",
      "/portfolio/pranzo-cucina-spazio-sociale/05.webp",
      "/portfolio/pranzo-cucina-spazio-sociale/06.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ],
      [
        1920,
        1080
      ]
    ],
    "cover": "/portfolio/pranzo-cucina-spazio-sociale/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "15"
  },
  {
    "slug": "ambienti-privati-benessere",
    "title": "Ambienti privati e benessere",
    "kicker": "Interni",
    "category": "interni",
    "categoryLabel": "Interior Design",
    "teaser": "Bagni e spazi intimi con una palette materica misurata.",
    "fullDesc": "Bagni e spazi intimi con una palette materica misurata.",
    "captions": [
      "Bagno. Rivestimento in marmo bianco venato, parete in listelli di legno e specchio circolare retroilluminato.",
      "Bagno. Mobile lavabo verde oliva, specchio retroilluminato e doccia con anta in vetro.",
      "Bagno. Decoro floreale a parete, specchio rotondo retroilluminato e mobile sospeso color terracotta.",
      "Bagno. Decoro floreale e rivestimento tridimensionale, mobile lavabo color terracotta e doccia a filo pavimento."
    ],
    "images": [
      "/portfolio/ambienti-privati-benessere/01.webp",
      "/portfolio/ambienti-privati-benessere/02.webp",
      "/portfolio/ambienti-privati-benessere/03.webp",
      "/portfolio/ambienti-privati-benessere/04.webp"
    ],
    "sizes": [
      [
        1800,
        1920
      ],
      [
        800,
        1000
      ],
      [
        1080,
        1000
      ],
      [
        1080,
        1200
      ]
    ],
    "cover": "/portfolio/ambienti-privati-benessere/01.webp",
    "coverSize": [
      1800,
      1920
    ],
    "num": "16"
  },
  {
    "slug": "spazi-di-lavoro-e-ospitalita",
    "title": "Spazi di lavoro e ospitalità",
    "kicker": "Interni",
    "category": "commerciale",
    "categoryLabel": "Commerciale & Uffici",
    "teaser": "Uffici e camere d'albergo progettati con arredi su misura.",
    "fullDesc": "Uffici direzionali e camera d'albergo progettati con arredi su misura e un'attenzione costante a luce e materiali.",
    "captions": [
      "Studio open space. Libreria divisoria a giorno con retroilluminazione, parete in mattone a vista e postazioni di lavoro.",
      "Studio open space: vista d'insieme. Pannello di verde verticale, partizioni vetrate e postazioni operative.",
      "Ufficio direzionale. Scrivania bianca, boiserie chiara e arredi contenitori in tonalità antracite.",
      "Camera di ospitalità. Scrivania, mobile-cucinotto in essenza e televisore a parete."
    ],
    "images": [
      "/portfolio/spazi-di-lavoro-e-ospitalita/01.webp",
      "/portfolio/spazi-di-lavoro-e-ospitalita/02.webp",
      "/portfolio/spazi-di-lavoro-e-ospitalita/03.webp",
      "/portfolio/spazi-di-lavoro-e-ospitalita/04.webp"
    ],
    "sizes": [
      [
        2000,
        1125
      ],
      [
        2000,
        1125
      ],
      [
        1920,
        1080
      ],
      [
        1058,
        575
      ]
    ],
    "cover": "/portfolio/spazi-di-lavoro-e-ospitalita/01.webp",
    "coverSize": [
      2000,
      1125
    ],
    "num": "17"
  },
  {
    "slug": "studi-di-facciata",
    "title": "Studi di facciata e visualizzazione",
    "kicker": "Architettura e strutture",
    "category": "strutture",
    "categoryLabel": "Elaborati tecnici & Strutture",
    "teaser": "Rappresentazione architettonica a supporto dello sviluppo progettuale.",
    "fullDesc": "Prospetti, planimetrie, stratigrafie e modelli strutturali: la rappresentazione architettonica a supporto dello sviluppo progettuale.",
    "captions": null,
    "images": [
      "/portfolio/studi-di-facciata/01.webp",
      "/portfolio/studi-di-facciata/02.webp",
      "/portfolio/studi-di-facciata/03.webp",
      "/portfolio/studi-di-facciata/04.webp",
      "/portfolio/studi-di-facciata/05.webp",
      "/portfolio/studi-di-facciata/06.webp",
      "/portfolio/studi-di-facciata/07.webp"
    ],
    "sizes": [
      [
        1920,
        1080
      ],
      [
        1557,
        789
      ],
      [
        1239,
        851
      ],
      [
        1557,
        888
      ],
      [
        1499,
        1253
      ],
      [
        1280,
        1600
      ],
      [
        1039,
        706
      ]
    ],
    "cover": "/portfolio/studi-di-facciata/01.webp",
    "coverSize": [
      1920,
      1080
    ],
    "num": "18"
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
