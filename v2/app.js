/**
 * ATELIERUL DE MODELISM TEHNIC CORNEL NISTOR — V2 INTERACTIVE ENGINE
 * Zero external cloud links. Full local blueprints, 3-volume course reader (1,017 pages),
 * X-Ray structural comparator, and FAI aerodynamic/ballistic simulators.
 */

(() => {
  'use strict';

  /* ==========================================================================
     1. DATA — X-RAY COMPARATOR PRESETS
     ========================================================================== */
  const XRAY_PRESETS = {
    fokker: {
      beforeImg: 'assets/img/fokker_d7_skeleton_front-1600.webp',
      beforeAlt: 'Scheletul din lemn de balsa al biplanului Fokker D.VII înainte de împânzire',
      afterImg: 'assets/img/fokker_d7_front-1600.webp',
      afterAlt: 'Machetă finalizată Fokker D.VII F 5125/18 împânzită și vopsită (vedere semiprofil față)',
      labelBefore: 'FAZA I · SCHELET BALSA & NERVURI',
      labelAfter: 'FAZA II · MODEL ÎMPÂNZIT F 5125/18',
      badge: 'Treptele S2–P1 · Biplan Istoric (1918)',
      title: 'Fokker D.VII (F 5125/18) — Anatomia Aripii Dublu-Plan',
      desc: 'Structura internă folosește lonjeroane din balsa selecționată, nervuri profilate prin metoda „în pachet” (Vol. II, pag. 107) și montanți interplan în N. Împânzirea cu hârtie japoneză tensionată cu emaillit asigură rigiditatea torsională fără creșterea masei.',
      specs: [
        ['Structură aripă', '2 lonjeroane pin + 24 nervuri balsa 1,5 mm'],
        ['Tehnologie înveliș', 'Hârtie japoneză 14 g/m² + 3 straturi emaillit'],
        ['Marcaj istoric', 'Fokker D.VII (F 5125/18) · Crucea de Fier'],
        ['Toleranță simetrie', '±0,2 mm la încastrarea ampenajului']
      ]
    },
    camel: {
      beforeImg: 'assets/img/sopwith_camel_front-1600.webp',
      beforeAlt: 'Scheletul din balsa al biplanului Sopwith F.1 Camel văzut din față pe planșă',
      afterImg: 'assets/img/sopwith_camel_top-1600.webp',
      afterAlt: 'Vedere superioară a scheletului din balsa Sopwith F.1 Camel cu nervuri ușurate',
      labelBefore: 'VEDERE FRONTALĂ · CABAN & MOTOR ROTATIV',
      labelAfter: 'VEDERE SUPERIOARĂ · NERVURI CU DECUPAJE',
      badge: 'Treapta S2 · Structură Biplan din Balsa',
      title: 'Sopwith F.1 Camel — Geometria Nervurilor Ușurate și a Cabanului',
      desc: 'Scheletul biplanului britanic Sopwith Camel ilustrează decupajele circulare de ușurare din fiecare nervură, lonjeroanele duble, eleroanele pe ambele plane și fuselajul din baghete rigidizat cu diagonale.',
      specs: [
        ['Material schelet', 'Balsa selecționată 1,5–3,0 mm + placaj aviație'],
        ['Nervuri profilate', 'Cu orificii de ușurare pentru reducerea masei cu 28%'],
        ['Grup motopropulsor', 'Machetă motor rotativ Clerget + elice lemn'],
        ['Montaj', 'Pe planșă 1:1 protejată cu folie polietilenă']
      ]
    },
    ariane: {
      beforeImg: 'assets/img/ariane-nevopsite-1600.webp',
      beforeAlt: 'Două machete ale lansatorului Ariane 44P în fază albă înainte de vopsire și înmatriculare',
      afterImg: 'assets/img/atelier-ariane-banc-1600.webp',
      afterAlt: 'Pereche de machete Ariane 44P Eutelsat finisate alături de șubler și documentația Vol. 132',
      labelBefore: 'FAZĂ ALBĂ · CELULE & BOOSTERE NEVOPSITE',
      labelAfter: 'MACHETĂ S7 · ARIANE 44P EUTELSAT & ȘUBLER',
      badge: 'Treptele P2–P3 · Clasa FAI S7 Machete Cosmice',
      title: 'Lansatorul European Ariane 44P — De la Tubul Portant la Jurizarea FAI S7',
      desc: 'Construcția unei machete cosmice clasa S7 (Vol. III, pag. 210) impune coaxialitatea perfectă a celor 3 trepte centrale și a celor 4 boostere cu combustibil solid (PAP), urmată de verificarea cu șublerul față de documentația oficială Arianespace.',
      specs: [
        ['Clasa de concurs', 'FAI S7 — Machete Zburătoare de Rachete (500 p)'],
        ['Configurație', 'Treaptă centrală + 4 boostere solide + coif Eutelsat'],
        ['Control dimensional', 'Șubler 0,05 mm + Dosar Tehnic Vol. 132'],
        ['Sistem recuperare', 'Parașută pliată cu protecție termică la ejecție']
      ]
    }
  };

  /* ==========================================================================
     2. DATA — 3-VOLUME COURSE ENCYCLOPEDIA (1,017 PAGES, PROF. FLORIN G. URSA)
     ========================================================================== */
  const COURSE_VOLUMES = {
    vol1: {
      header: 'CUPRINS VOLUMUL I · ÎNCEPĂTORI (2018 · 148 PAGINI)',
      chapters: [
        {
          shortTitle: 'Cap. 1–4 · Istoric, NTSM, Materiale & Desen Tehnic',
          pages: 'p. 6–51',
          badge: 'VOLUMUL I · CAPITOLELE 1–4 · PAG. 6–51',
          step: 'Corespondență: Treapta B1–B2',
          title: 'Organizarea Atelierului, Scule de Prelucrare, Adezivi și Citirea Desenului Tehnic',
          excerpt: '„Construcția oricărui aeromodel începe cu însușirea regulilor de protecție a muncii (NTSM), cunoașterea esențelor lemnoase (brad, tei, pin, balsa, placaj de aviație) și citirea corectă a liniilor din desenul tehnic: linie continuă groasă pentru conturul vizibil, linie întreruptă pentru muchiile acoperite și linie-punct subțire pentru axele de simetrie.”',
          points: [
            '<strong>Esențe lemnoase și hârtii tehnice (pag. 19–30):</strong> Selecția baghetelor fără noduri și cu fibră dreaptă; utilizarea cartonului duplex și a hârtiei japoneze (12–22 g/m²) cu orientare longitudinală a fibrei.',
            '<strong>Adezivi în aeromodelism (pag. 26–30):</strong> Cleiul de tâmplărie și aracetul pentru structuri școlare; adezivii nitrocelulozici (Ago, Emaillit) cu uscare rapidă și rezistență la umiditate pentru balsa și împânzire.',
            '<strong>Scule și dispozitive (pag. 31–43):</strong> Traforajul manual, cutterul de precizie, rindeaua mică pentru balsa, blocul de șlefuit cu șmirghel și planșeta dreaptă din lemn de tei.',
            '<strong>Geometria planșei (pag. 44–51):</strong> Scări numerice (1:1, 1:2, 1:50), transferul șabloanelor pe carton și verificarea perpendicularității ampenajelor.'
          ]
        },
        {
          shortTitle: 'Cap. 5–7 · Părțile Aeromodelului & Planoare Hârtie/Carton',
          pages: 'p. 52–74',
          badge: 'VOLUMUL I · CAPITOLELE 5–7 · PAG. 52–74',
          step: 'Corespondență: Treptele B2–B3',
          title: 'Anatomia Aeromodelului, Forțele în Zbor și Construcția Planoarelor din Carton',
          excerpt: '„Un aeromodel planor se compune din: aripă (suprafața portantă principală), fuzelaj (corpul care leagă aripa de coadă și poartă lestul de echilibrare) și ampenaje (stabilizatorul orizontal pentru stabilitatea longitudinală și deriva verticală pentru stabilitatea de drum).”',
          points: [
            '<strong>Cele patru forțe aerodinamice (pag. 52–61):</strong> Portanța (P) perpendiculară pe direcția curentului de aer, Greutatea (G), Tracțiunea (T) și Rezistența la înaintare (R).',
            '<strong>Modele de inițiere (pag. 62–72):</strong> Construcția modelelor din hârtie și carton presat (YR-OZN, YR-Delta, YR-Sport, YR-Șoim, Felix 5) cu formarea curburii profilului pe muchia mesei.',
            '<strong>Unghiul diedru (pag. 68–74):</strong> Ridicarea extremităților aripii față de planul orizontal (ex. 40° la Felix 5) pentru crearea momentului de redresare automată la înclinare laterală.'
          ]
        },
        {
          shortTitle: 'Cap. 8–10 · Polistiren, Planor Faza I „Libelula” & Lansare',
          pages: 'p. 75–94',
          badge: 'VOLUMUL I · CAPITOLELE 8–10 · PAG. 75–94',
          step: 'Corespondență: Treapta M1',
          title: 'Construcția Planorului Școlar Faza I „Libelula” și Reglajul Zborului Planat',
          excerpt: '„Înaintea primei lansări, aeromodelul se privește din față și de sus pentru eliminarea oricărei asimetrii (aripă răsucită sau stabilizator înclinat). Centrul de greutate se aduce cu plastilină în bot la 30–33% din coarda aripii, apoi modelul se lansează ușor din mână sub un unghi de picaj de 5–8° contra vântului.”',
          points: [
            '<strong>Planorul Faza I „Libelula” (pag. 81–84):</strong> Construcție mixtă cu fuselaj din baghetă de lemn, aripă cu profil curbat, cârlig de remorcare și ampenaj cruciform.',
            '<strong>Corectarea evoluțiilor defectuoase (pag. 88–94):</strong> Dacă modelul cabrează și intră în angajare (zbor în valuri), se adaugă lest în bot; dacă pică brusc, se reduce lestul sau se mărește ușor unghiul de calaj.',
            '<strong>Remorcarea cu sfoară (pag. 91–94):</strong> Utilizarea cablului de 25 m cu inel și steguleț pentru urcarea planorului la altitudine maximă.'
          ]
        },
        {
          shortTitle: 'Cap. 11 & Anexe · Zmeie, Noduri, Șabloane & Dicționar',
          pages: 'p. 95–148',
          badge: 'VOLUMUL I · CAP. 11, DICȚIONAR & ANEXE · PAG. 95–148',
          step: 'Corespondență: Treptele B1–M1',
          title: 'Zmeie Zburătoare, Dicționarul Tehnic A–Z și Anexele Practice (Noduri, Șabloane, Jocuri)',
          excerpt: '„Anexele volumului I reunesc vocabularul tehnic fundamental al aeromodelistului (pag. 99–104), execuția nodurilor pescărești și de remorcare (Anexa 2), confecționarea șabloanelor durabile (Anexa 3) și regulile primelor întreceri școlare (Anexa 5).”',
          points: [
            '<strong>Zmeie plane și celulare (pag. 95–98):</strong> Echilibrul bridelor de ancorare și unghiul de atac față de vânt.',
            '<strong>Dicționar de termeni tehnici (pag. 99–104):</strong> Definiții riguroase pentru alungire, ampenaj, anvergură, bord de atac/fugă, calaj, centraj, coardă, diedru, extrados, finețe, intrados, lonjeron și nervură.',
            '<strong>Anexele 1–5 (pag. 107–148):</strong> Istoricul aviației românești (Vuia, Vlaicu, Coandă), noduri sigure pentru cablul de lansare și șabloane de atelier.'
          ]
        }
      ]
    },
    vol2: {
      header: 'CUPRINS VOLUMUL II · AVANSAȚI (2019 · 275 PAGINI)',
      chapters: [
        {
          shortTitle: 'Cap. 1–5 · Atmosfera, Curenți Termici & Coordonate Profil',
          pages: 'p. 1–50',
          badge: 'VOLUMUL II · CAPITOLELE 1–5 · PAG. 1–50',
          step: 'Corespondență: Treptele M2–M3',
          title: 'Fizica Atmosferei, Zborul Termic și Trasarea Profilului pe Coordonate (X, Ye, Yi)',
          excerpt: '„Profilul aerodinamic se trasează pe hârtie milimetrică pornind de la linia de referință (abscisa X împărțită în procente din coarda C: 0%, 1,25%, 2,5%, 5%, 10%... 100%), ridicând ordonatele extradosului (Ye) și ale intradosului (Yi) conform tabelului profilului ales (ex. Planor F2 Pițigoiul, pag. 41).”',
          points: [
            '<strong>Curenții termici și dinamici (pag. 8–22):</strong> Formarea bulelor și coloanelor termice deasupra terenurilor însorite; spirala planorului în nucleul curentului ascendent.',
            '<strong>Geometria aripii și a profilului (pag. 23–44):</strong> Coarda profilului (C), săgeata sau curbura maximă (f), grosimea relativă (d/C) și polara Lilienthal a profilului.',
            '<strong>Tabelul autentic pentru Planorul F2 „Pițigoiul” (pag. 41):</strong> Coordonate complete în mm pentru nervura R1 (coardă 110 mm) și nervura marginală R5 (coardă 70 mm).'
          ]
        },
        {
          shortTitle: 'Cap. 6–8 · Lemnul de Balsa, Nervuri în Pachet & Structuri',
          pages: 'p. 51–123',
          badge: 'VOLUMUL II · CAPITOLELE 6–8 · PAG. 51–123',
          step: 'Corespondență: Treptele S1–S2',
          title: 'Tehnologia Lemnului de Balsa, Calibrarea Nervurilor în Pachet și Asamblarea Aripii',
          excerpt: '„Pentru obținerea unor nervuri identice și a unui profil curat, semifabricatele dreptunghiulare din balsa se strâng între două șabloane metalice (R1 și R1) cu ajutorul a două tije filetate. Pachetul astfel format se prelucrează cu rindeaua și blocul cu șmirghel până la atingerea conturului șabloanelor, apoi se practică simultan locașurile pentru lonjeroane (pag. 107).”',
          points: [
            '<strong>Clasificarea și debitarea lemnului de balsa (pag. 51–71):</strong> Densități de la 0,08 g/cm³ (balsa moale pentru blocuri și placări) la 0,18 g/cm³ (balsa tare pentru lonjeroane și nervuri principale).',
            '<strong>Elemente de structură (pag. 72–112):</strong> Construcția lonjeroanelor chesonate, a bordurilor de atac și de fugă, a arcelor marginale și a cuplelor de fuzelaj.',
            '<strong>Împânzirea și lăcuirea (pag. 113–123):</strong> Aplicarea hârtiei japoneze umezite ușor și tensionarea cu 3–4 straturi de emaillit diluat, cu uscarea aripii fixate pe calapod.'
          ]
        },
        {
          shortTitle: 'Cap. 9–11 · Stabilitate, Determalizare & Reglajul Faza II',
          pages: 'p. 124–156',
          badge: 'VOLUMUL II · CAPITOLELE 9–11 · PAG. 124–156',
          step: 'Corespondență: Treptele M3 & S3',
          title: 'Centrajul, Înălțimea Adaosului de Calaj (X = C · sin α) și Sistemul de Determalizare',
          excerpt: '„Unghiul de calaj α dintre coarda aripii și stabilizator determină regimul de viteză al planorului. Înălțimea adaosului X așezat sub bordul de atac se calculează cu relația X = C · sin α (de exemplu, pentru C = 110 mm și α = 3°, adaosul este X = 5,76 mm). Pentru evitarea pierderii modelului în termică puternică, planorul se echipează cu determalizator cu fitil (pag. 137).”',
          points: [
            '<strong>Stabilitatea pe cele trei axe (pag. 124–133):</strong> Stabilitatea longitudinală (tangaj), transversală (ruliu prin diedru) și direcțională (girație prin derivă).',
            '<strong>Mecanismul de determalizare (pag. 134–140):</strong> Arderea fitilului din bumbac impregnat eliberează inelul de cauciuc, ridicând stabilizatorul la 40–45° pentru o coborâre stabilă fără angajare în vrie.',
            '<strong>Tabelul adaosului de calaj (pag. 148):</strong> Valori precalculate ale funcției sin α pentru unghiuri uzuale între 0,5° și 6°.'
          ]
        },
        {
          shortTitle: 'Cap. 12–16 · Elice, Tunel Aerodinamic & Planoare Concurs',
          pages: 'p. 157–275',
          badge: 'VOLUMUL II · CAPITOLELE 12–16 · PAG. 157–275',
          step: 'Corespondență: Treptele S1–S3',
          title: 'Geometria Elicei, Tunelul Aerodinamic cu Circuit Închis și Planoarele de Performanță',
          excerpt: '„Tunelul aerodinamic de atelier cu circuit închis (pag. 204–206) cuprinde colectorul cu grătar de liniștire (fagure), camera de experiențe în care se suspendă modelul pe balanța aerodinamică, difuzorul și ventilatorul axial antrenat electric.”',
          points: [
            '<strong>Pasul și tracțiunea elicei (pag. 157–178):</strong> Unghiul de calaj al palei la 75% din rază, sculptarea elicei din bloc de balsa/tei și echilibrarea pe lamă.',
            '<strong>Experimente în tunelul aerodinamic (pag. 199–215):</strong> Vizualizarea desprinderii stratului limită cu fire de mătase sau fum și măsurarea raportului portanță/rezistență (finețea K = Cz/Cx).',
            '<strong>Construcția planoarelor Faza II (pag. 216–275):</strong> Planuri și instrucțiuni pas cu pas pentru planoarele școlare avansate de 770–1200 mm anvergură.'
          ]
        }
      ]
    },
    vol3: {
      header: 'CUPRINS VOLUMUL III · PERFORMANȚĂ (2019 · 594 PAGINI)',
      chapters: [
        {
          shortTitle: 'Cap. 1–4 · Aerodinamică Avansată, F1A & Wakefield F1B',
          pages: 'p. 1–205',
          badge: 'VOLUMUL III · CAPITOLELE 1–4 · PAG. 1–205',
          step: 'Corespondență: Treptele S3–P2',
          title: 'Regimuri Critice Reynolds, Planoare Clasa F1A (A2) și Aeromodele cu Cauciuc F1B',
          excerpt: '„La numerele Reynolds mici specifice aeromodelelor (Re = 30.000 – 120.000), apariția bulei de desprindere laminară pe extrados mărește brusc rezistența la înaintare. Utilizarea turbulatoarelor (fir textil sau bandă zig-zag la 10–15% din coardă) forțează tranziția controlată și stabilizează polara aripii în zborul de concurs.”',
          points: [
            '<strong>Planoare de performanță F1A (pag. 45–138):</strong> Cârlige de remorcare mecanizate pentru urcare în cerc (cercuite), bracarea automată a cârmei și deblocarea la vârful cablului de 50 m.',
            '<strong>Clasa F1B — Wakefield cu motor de cauciuc (pag. 139–205):</strong> Pregătirea, spălarea și lubrifierea fasciculului de cauciuc Pirelli/Tan, bobinarea cu multiplicator la cuplu maxim și butucul cu pale pliabile.'
          ]
        },
        {
          shortTitle: 'Cap. 5–7 · Rachetomodele FAI (S3, S6, S7 Machete & Teodolite)',
          pages: 'p. 206–285',
          badge: 'VOLUMUL III · CAPITOLELE 5–7 · PAG. 206–285',
          step: 'Corespondență: Treptele P2–P3 (Lot FAI S7)',
          title: 'Tratat Complet de Rachetomodelism: Clasele S3, S6, Rachetoplane S4 și Machete Cosmice S7',
          excerpt: '„La concursurile de machete de rachete cosmice clasa S7 (pag. 210), comisia acordă până la 400 de puncte pentru documentație, grad de dificultate, fidelitate și exactitatea scării, și până la 100 de puncte pentru zborul stabil și aterizarea lină cu parașută (total 500 puncte). Măsurarea înălțimii de zbor se face prin triangulație cu două teodolite amplasate la capetele unei baze b = 300 m (pag. 208).”',
          points: [
            '<strong>Clasificarea FAI a rachetomodelelor (pag. 208–211):</strong> Clasa S1 (altitudine), S2 (sarcină utilă), S3 (durată cu parașută), S4 (rachetoplane), S5 (machete de altitudine), S6 (durată cu streamer) și S7 (machete cosmice).',
            '<strong>Anatomia și stabilitatea rachetomodelului (pag. 212–220):</strong> Conul ogival/parabolic, tubul de corp, ampenajele stabilizatoare, parașuta cu cel puțin 6 suspante și condiția de stabilitate (CP în spatele CG cu 1,5–2 calibre).',
            '<strong>Rachetomodele multistadiale și rachetoplane (pag. 221–285):</strong> Cuplarea și aprinderea în serie a motoarelor cu combustibil solid și mecanismele de transformare din configurație balistică în planor la apogeu.'
          ]
        },
        {
          shortTitle: 'Cap. 8–14 · Aeromodele Captive (U-Control) & Radiocomandă',
          pages: 'p. 286–521',
          badge: 'VOLUMUL III · CAPITOLELE 8–14 · PAG. 286–521',
          step: 'Corespondență: Treptele P1–P3',
          title: 'Zborul Circular Captiv (F2A Viteză, F2B Acrobație, F2D Luptă) și Sistemele RC',
          excerpt: '„În zborul captiv prin două cabluri de oțel (U-Control), pilotul comandă profunzorul prin intermediul mânerului, al cablurilor și al sectorului intern (T-ului de comandă). La aeromodelele radiocomandate (RC), comenzile proporționale controlează simultan eleroanele, profunzorul, direcția și turația motorului.”',
          points: [
            '<strong>Geometria zborului circular (pag. 286–390):</strong> Decalarea axei motorului în exteriorul cercului, lestul în semiaripa exterioară și întinderea constantă a cablurilor sub acțiunea forței centrifuge.',
            '<strong>Aeromodele radiocomandate (pag. 391–521):</strong> Alegerea servomecanismelor, cinematica tijelor de comandă fără jocuri, mixajele aerodinamice (V-tail, flaperon) și procedurile de testare la sol.'
          ]
        },
        {
          shortTitle: 'Anexe Vol. III · Motoare de Cauciuc, Rețete & Tabele FAI',
          pages: 'p. 522–594',
          badge: 'VOLUMUL III · ANEXE TEHNICE · PAG. 522–594',
          step: 'Corespondență: Sinteză S1–P3',
          title: 'Anexele de Performanță: Dimensionarea Motorului de Cauciuc, Lubrifianți și Tabele de Atelier',
          excerpt: '„Anexele volumului III (pag. 522–594) oferă diagramele de proiectare a elicei și a fasciculului de cauciuc, rețetele clasice de lubrifiere (ulei de ricin, săpun verde și glicerină), tabelele de conversie și normele de arbitraj pentru clasele de performanță.”',
          points: [
            '<strong>Anexa 1 — Motorul de cauciuc (pag. 522–545):</strong> Calculul numărului maxim de ture la rupere și la regim de concurs în funcție de secțiunea și lungimea fasciculului.',
            '<strong>Rețete și finisaje de atelier (pag. 546–572):</strong> Prepararea emaillitului plastifiat (cu 2–3% ulei de ricin pentru evitarea deformării aripilor subțiri) și impermeabilizarea motoarelor.',
            '<strong>Tabele trigonometrice și aerodinamice (pag. 573–594):</strong> Valori rapide pentru proiectarea nervurilor, calculul suprafețelor și verificarea încărcării alare minime FAI.'
          ]
        }
      ]
    }
  };

  /* ==========================================================================
     3. DATA — 36 AUTHENTIC GLOSSARY TERMS (VOL. I P. 99–104 & VOL. III P. 206–285)
     ========================================================================== */
  const GLOSSARY_TERMS = [
    { term: 'AERODINAMICĂ', cat: 'Fizică', def: 'Ramură a mecanicii fluidelor care studiază mișcarea aerului și forțele ce iau naștere la interacțiunea dintre curentul de aer și suprafața aeromodelului.' },
    { term: 'ALUNGIREA ARIPII (λ)', cat: 'Aerodinamică', def: 'Raportul dintre pătratul anvergurii și suprafața aripii (λ = b²/S). O alungire mare (8–14) reduce rezistența indusă la planoarele de performanță.' },
    { term: 'AMPENAJ', cat: 'Structură', def: 'Ansamblul suprafețelor de coadă (stabilizator orizontal + profunzor și derivă verticală + direcție) care asigură stabilitatea longitudinală și de drum.' },
    { term: 'ANGAJARE (Pierdere de viteză)', cat: 'Zbor', def: 'Desprinderea curentului de aer de pe extradosul aripii la depășirea unghiului de incidență critic, urmată de scăderea bruscă a portanței și căderea în picaj.' },
    { term: 'ANVERGURĂ (b)', cat: 'Geometrie', def: 'Distanța măsurată în linie dreaptă între extremitățile (planurile marginale) stânga și dreapta ale aripii aeromodelului.' },
    { term: 'APOGEU', cat: 'Balistică', def: 'Punctul de altitudine maximă atins pe traiectorie de un rachetomodel, moment în care încărcătura de întârziere declanșează ejecția parașutei.' },
    { term: 'BALSA (Ochroma lagopus)', cat: 'Materiale', def: 'Esență lemnoasă tropicală extrem de ușoară (densitate 0,08–0,20 g/cm³) și cu rezistență specifică remarcabilă, utilizată la nervuri, lonjeroane și borduri.' },
    { term: 'BORD DE ATAC', cat: 'Profil', def: 'Partea anterioară rotunjită a aripii sau ampenajului care întâmpină prima fileurile curentului de aer în timpul zborului.' },
    { term: 'BORD DE FUGĂ', cat: 'Profil', def: 'Muchia posterioară subțire și ascuțită a profilului aerodinamic pe unde fileurile de aer de pe extrados și intrados se reîntâlnesc.' },
    { term: 'BRACARE', cat: 'Comenzi', def: 'Rotirea cu un anumit unghi a unei suprafețe mobile de comandă (eleron, profunzor, direcție sau stabilizator determalizant) față de poziția neutră.' },
    { term: 'CABAN', cat: 'Structură', def: 'Sistemul central de montanți și piramide din sârmă sau lemn care susține aripa superioară (la biplane precum Sopwith Camel) sau aripa în parasolar.' },
    { term: 'CABRAJ', cat: 'Evoluție', def: 'Rotirea aeromodelului în jurul axei transversale (de tangaj) cu ridicarea botului și creșterea unghiului de incidență.' },
    { term: 'CALAJ (Unghi de calaj α)', cat: 'Reglaj', def: 'Unghiul constructiv format între coarda aripii și axa fuselajului (sau stabilizatorului). Înălțimea adaosului sub bordul de atac este X = C · sin α.' },
    { term: 'CALIBRU (d)', cat: 'Rachetomodele', def: 'Diametrul exterior de referință al corpului cilindric al rachetomodelului, folosit ca unitate de măsură pentru rezerva de stabilitate (CP − CG).' },
    { term: 'CENTRU DE GREUTATE (CG)', cat: 'Echilibru', def: 'Punctul de aplicație al rezultantei forțelor de greutate. La planoarele clasice se reglează între 28% și 35% din coarda medie înapoia bordului de atac.' },
    { term: 'CENTRU DE PRESIUNE (CP)', cat: 'Aerodinamică', def: 'Punctul în care acționează rezultanta forțelor aerodinamice. La rachetomodele trebuie să se situeze cu 1,5–2,5 calibre în spatele centrului de greutate.' },
    { term: 'CLASA FAI S7', cat: 'Concurs FAI', def: 'Categoria reglementată de Federația Aeronautică Internațională pentru machete zburătoare de rachete cosmice reale, jurizată pe 500 puncte (400p stand + 100p zbor).' },
    { term: 'COARDA PROFILULUI (C)', cat: 'Geometrie', def: 'Segmentul de dreaptă care unește punctul cel mai avansat al bordului de atac cu punctul extrem al bordului de fugă.' },
    { term: 'CUPLE (Cadre / Coaste)', cat: 'Structură', def: 'Elemente transversale de rezistență care dau forma secțiunii fuselajului unui aeromodel sau a carenei unui navomodel.' },
    { term: 'DERIVĂ', cat: 'Ampenaj', def: 'Partea fixă verticală a ampenajului de coadă care asigură stabilitatea de drum (pe axa de girație) a aeromodelului.' },
    { term: 'DETERMALIZATOR', cat: 'Mecanism F1A', def: 'Dispozitiv cu fitil calibrat, ceas mecanic sau electronic care brachează stabilizatorul la ~45° pentru a scoate planorul din curenții termici ascendenți.' },
    { term: 'DIEDRU (Unghi diedru)', cat: 'Stabilitate', def: 'Unghiul format de planul semiaripilor (sau de urechile aripii) față de planul orizontal, esențial pentru auto-stabilizarea laterală în ruliu.' },
    { term: 'ELERON', cat: 'Comenzi', def: 'Suprafață mobilă plasată la extremitatea posterioară a semiaripilor; eleroanele se brachează în sens opus pentru a comanda înclinarea în ruliu.' },
    { term: 'EMAILLIT', cat: 'Tehnologie', def: 'Lac nitrocelulozic special care, după aplicare pe hârtia japoneză sau mătasea de împânzire, se contractă la uscare și întinde perfect învelișul aripii.' },
    { term: 'EXTRADOS', cat: 'Profil', def: 'Suprafața superioară (de regulă convexă) a profilului aerodinamic, pe care accelerarea aerului creează depresiunea ce generează ~2/3 din portanță.' },
    { term: 'FINEȚE AERODINAMICĂ (K)', cat: 'Performanță', def: 'Raportul dintre coeficientul de portanță și coeficientul de rezistență la înaintare (K = Cz/Cx), egal cu distanța orizontală parcursă în zbor planat de la 1 m înălțime.' },
    { term: 'FUZELAJ', cat: 'Structură', def: 'Corpul central al aeromodelului pe care se fixează aripa, ampenajele, grupul motopropulsor și cârligul de remorcare.' },
    { term: 'IMPULS TOTAL (N·s)', cat: 'Motoare Rachetă', def: 'Produsul dintre forța medie de tracțiune a motorului rachetă și durata arderii (exprimat în Newton-secunde), criteriu după care motoarele se împart în clasele A, B, C, D.' },
    { term: 'ÎNCĂRCARE ALARĂ (p)', cat: 'Calcul', def: 'Raportul dintre masa totală de zbor a modelului și suprafața sa portantă (p = m/S, exprimat în g/dm²). Determină viteza minimă de zbor.' },
    { term: 'INTRADOS', cat: 'Profil', def: 'Suprafața inferioară a profilului aripii, pe care suprapresiunea fileurilor de aer contribuie cu aproximativ 1/3 la forța de portanță.' },
    { term: 'LONJERON', cat: 'Structură', def: 'Grinda longitudinală principală de rezistență a aripii sau a fuselajului, care preia momentele încovoietoare în timpul zborului și al remorcării.' },
    { term: 'NERVURĂ', cat: 'Structură', def: 'Element transversal al scheletului aripii care materializează conturul profilului aerodinamic și menține distanța exactă între extrados și intrados.' },
    { term: 'NERVURI ÎN PACHET', cat: 'Tehnologie', def: 'Metodă de prelucrare simultană a 12–24 semifabricate de balsa strânse între două șabloane metalice pe tije filetate (Vol. II, pag. 107).' },
    { term: 'PICAJ', cat: 'Evoluție', def: 'Rotirea aeromodelului în jurul axei transversale cu coborârea botului și creșterea vitezei de zbor.' },
    { term: 'STREAMER (Bandă S6)', cat: 'Rachetomodele', def: 'Bandă lungă din folie colorată cu raport lungime/lățime de minimum 10:1, utilizată ca sistem de frânare și recuperare la rachetomodelele clasa FAI S6.' },
    { term: 'TEODOLIT (Bază 300 m)', cat: 'Telemetrie FAI', def: 'Instrument optic de măsurare a azimutului și unghiului de elevație; două teodolite plasate la 300 m distanță determină prin triangulație altitudinea rachetomodelelor.' }
  ];

  /* ==========================================================================
     4. DATA — PLANOR F2 "PIȚIGOIUL" PERCENTAGE AIRFOIL STATIONS (VOL. II P. 41)
     ========================================================================== */
  const AIRFOIL_STATIONS = [
    { pct: 0, yePct: 2.0, yiPct: 2.0 },
    { pct: 2.5, yePct: 5.55, yiPct: 0.64 },
    { pct: 5, yePct: 7.27, yiPct: 0.27 },
    { pct: 10, yePct: 9.27, yiPct: 0.27 },
    { pct: 20, yePct: 10.91, yiPct: 1.09 },
    { pct: 30, yePct: 11.18, yiPct: 1.91 },
    { pct: 50, yePct: 9.55, yiPct: 2.18 },
    { pct: 70, yePct: 6.73, yiPct: 1.73 },
    { pct: 90, yePct: 2.91, yiPct: 0.82 },
    { pct: 100, yePct: 0.45, yiPct: 0.0 }
  ];

  /* ==========================================================================
     5. THEME TOGGLE, SCROLL PROGRESS & MOBILE MENU
     ========================================================================== */
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeLabel && themeIcon) {
      if (theme === 'dark') {
        themeLabel.textContent = 'Atelier Light';
        themeIcon.textContent = '☀';
      } else {
        themeLabel.textContent = 'Hangar Dark';
        themeIcon.textContent = '◐';
      }
    }
    try {
      localStorage.setItem('cornel_v2_theme', theme);
    } catch (_) {
      /* ignore storage errors */
    }
  }

  const savedTheme = (() => {
    try {
      return localStorage.getItem('cornel_v2_theme');
    } catch (_) {
      return null;
    }
  })();

  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Progress Bar & Active Section Highlighting
  const progressBar = document.getElementById('scroll-progress-bar');
  const navLinks = Array.from(document.querySelectorAll('.primary-nav .nav-link'));
  const trackedSections = navLinks
    .map((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  function onScrollUpdate() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      const ratio = Math.min(1, Math.max(0, scrollTop / docHeight));
      progressBar.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }

    let currentId = '';
    const offset = scrollTop + 180;
    for (const sec of trackedSections) {
      if (sec.offsetTop <= offset) {
        currentId = sec.id;
      }
    }
    navLinks.forEach((link) => {
      const match = link.getAttribute('href') === `#${currentId}`;
      if (match) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', onScrollUpdate, { passive: true });
  onScrollUpdate();

  /* ==========================================================================
     6. SCROLL REVEAL, ANIMATED COUNTERS & SPOTLIGHT HOVER
     ========================================================================== */
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => revealObs.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // Animated Counters ([data-counter])
  const counterElements = document.querySelectorAll('[data-counter]');
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el) {
    const target = Number(el.getAttribute('data-counter') || 0);
    if (!target || prefersReducedMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 900;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = String(target);
      }
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    counterElements.forEach((el) => counterObs.observe(el));
  }

  // Spotlight radial mouse tracking
  document.querySelectorAll('.spotlight-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${(e.clientX - rect.left).toFixed(0)}px`);
      card.style.setProperty('--my', `${(e.clientY - rect.top).toFixed(0)}px`);
    });
  });

  /* ==========================================================================
     7. INTERACTIVE X-RAY COMPARATOR (SCHELET ↔ MACHETĂ)
     ========================================================================== */
  const xrayStage = document.getElementById('xray-stage');
  const xraySlider = document.getElementById('xray-slider');
  const xrayImgBefore = document.getElementById('xray-img-before');
  const xrayImgAfter = document.getElementById('xray-img-after');
  const xrayLabelBefore = document.getElementById('xray-label-before');
  const xrayLabelAfter = document.getElementById('xray-label-after');
  const xrayDetailBadge = document.getElementById('xray-detail-badge');
  const xrayDetailTitle = document.getElementById('xray-detail-title');
  const xrayDetailDesc = document.getElementById('xray-detail-desc');
  const xraySpecList = document.getElementById('xray-spec-list');
  const xrayPresetBtns = document.querySelectorAll('[data-xray-preset]');

  if (xraySlider && xrayStage) {
    xraySlider.addEventListener('input', () => {
      xrayStage.style.setProperty('--split', `${xraySlider.value}%`);
    });
  }

  xrayPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-xray-preset');
      const preset = XRAY_PRESETS[key];
      if (!preset) return;

      xrayPresetBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });

      if (xrayImgBefore) {
        xrayImgBefore.src = preset.beforeImg;
        xrayImgBefore.alt = preset.beforeAlt;
      }
      if (xrayImgAfter) {
        xrayImgAfter.src = preset.afterImg;
        xrayImgAfter.alt = preset.afterAlt;
      }
      if (xrayLabelBefore) xrayLabelBefore.textContent = preset.labelBefore;
      if (xrayLabelAfter) xrayLabelAfter.textContent = preset.labelAfter;
      if (xrayDetailBadge) xrayDetailBadge.textContent = preset.badge;
      if (xrayDetailTitle) xrayDetailTitle.textContent = preset.title;
      if (xrayDetailDesc) xrayDetailDesc.textContent = preset.desc;
      if (xraySpecList) {
        xraySpecList.innerHTML = preset.specs
          .map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`)
          .join('');
      }
    });
  });

  /* ==========================================================================
     8. MATRICEA B1–P3 STAGE FILTER & 3-QUESTION DIAGNOSTIC CONSILIER
     ========================================================================== */
  const stageFilterBtns = document.querySelectorAll('[data-stage-filter]');
  const stepCards = document.querySelectorAll('#steps-grid .step-card');
  const stepsCountBadge = document.getElementById('steps-count-badge');

  function filterStepsByStage(stage) {
    let visibleCount = 0;
    stepCards.forEach((card) => {
      const match = stage === 'all' || card.getAttribute('data-stage') === stage;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });
    if (stepsCountBadge) {
      stepsCountBadge.textContent = `${visibleCount} trepte afișate`;
    }
  }

  stageFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage-filter') || 'all';
      stageFilterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      filterStepsByStage(stage);
    });
  });

  // Diagnostic Recommender
  const diagExp = document.getElementById('diag-exp');
  const diagBranch = document.getElementById('diag-branch');
  const diagGoal = document.getElementById('diag-goal');
  const diagRecCode = document.getElementById('diag-rec-code');
  const diagRecTitle = document.getElementById('diag-rec-title');
  const diagRecDesc = document.getElementById('diag-rec-desc');
  const diagJumpBtn = document.getElementById('diag-jump-btn');

  function updateDiagnostic() {
    if (!diagExp || !diagBranch || !diagGoal) return;
    const exp = diagExp.value;
    const branch = diagBranch.value;
    const goal = diagGoal.value;

    let stepId = 'step-B2';
    let codeText = 'RECOMANDARE: TREAPTA B2 → B3 (BASIC)';
    let titleText = 'Inițiere pe Planoarele din Carton YR-OZN, YR-Sport și Felix 5';
    let descText = 'Conform STRCTURA SITE.docx, începe cu Treapta B2 (Debutant) și B3 (Inițiat): descarcă mai jos planșele 1:1 pentru YR-O.Z.N., YR-Delta, YR-Șoim, YR-Sport și Felix 5 pentru a exersa decuparea simetrică, diedrul de 40° și primele lansări manuale.';

    if (exp === 'novice') {
      if (goal === 'balsa') {
        stepId = 'step-M1';
        codeText = 'RECOMANDARE: TREAPTA B3 → M1 (MEDIU)';
        titleText = 'Tranziție la Baghetă de Brad: Planoarele YR-Albatros & YR-5 Ciocîrlia';
        descText = 'După stăpânirea planorului Felix 5 (Treapta B3), treci la Treapta M1 (Constructor începător): planoarele YR-Albatros și YR-5 Ciocîrlia cu fuselaj din baghetă de brad și seminervuri.';
      } else {
        stepId = 'step-B2';
      }
    } else if (exp === 'inter') {
      if (branch === 'scale') {
        stepId = 'step-M2';
        codeText = 'RECOMANDARE: TREAPTA M2 (CONSTRUCTOR AUTONOM)';
        titleText = 'Machete Desfășurate la Scară: Sopwith Pup, Fokker Dr.I & Junkers D-1';
        descText = 'În Treapta M2 construiești primele machete istorice de aviație după planșele 1:1 din Planșotecă (Sopwith Pup N6453, Fokker Dr.I Jasta 7 și Junkers D-1).';
      } else {
        stepId = 'step-M3';
        codeText = 'RECOMANDARE: TREAPTA M3 (COMPETIȚIONAL JUNIOR)';
        titleText = 'Planor Faza II (770 mm), Biplan cu Motor de Cauciuc & Rachetomodel S3A';
        descText = 'Parcurge Volumul II (pag. 41–148) și construiește Planorul Faza II (anvergură 770 mm, coardă 110 mm, calaj +3°) sau primul model propulsat cu motor de cauciuc.';
      }
    } else if (exp === 'adv') {
      if (branch === 'scale' || branch === 'naval') {
        stepId = 'step-S2';
        codeText = 'RECOMANDARE: TREAPTA S2 (TEHNICIAN CONSTRUCTOR)';
        titleText = 'Biplane din Balsa (Sopwith F.1 Camel, Fokker D.VII) & Carene pe Cuple';
        descText = 'În grupa SPECIALIST (Treapta S2) abordezi structurile complexe din balsa cu nervuri ușurate, lonjeroane duble, caban central și împânzire cu hârtie japoneză tensionată cu emaillit.';
      } else if (branch === 'rocket') {
        stepId = 'step-S3';
        codeText = 'RECOMANDARE: TREAPTA S3 → P2 (SPECIALIST / LOT S7)';
        titleText = 'Stabilitate Balistică CP–CG, Rachete Sondă & Triangulație cu 2 Teodolite';
        descText = 'Studiază Volumul III (pag. 208–285) pentru calculul rezervei statice în calibre, cuplarea treptelor și măsurarea altitudinii de apogeu pe baza telemetrică b = 300 m.';
      } else {
        stepId = 'step-S1';
        codeText = 'RECOMANDARE: TREAPTA S1 → S3 (SPECIALIST)';
        titleText = 'Nervuri în Pachet, Profil pe Coordonate (X, Ye, Yi) & Determalizare';
        descText = 'Lucrează pe structuri portante din balsa (Monoplanul școlar, Treapta S1) și reglajul fin de concurs cu determalizator cu fitil și verificare în tunelul aerodinamic (Treapta S3).';
      }
    } else if (exp === 'comp') {
      if (branch === 'rocket') {
        stepId = 'step-P2';
        codeText = 'RECOMANDARE: TREAPTA P2 → P3 (LOT FAI CLASA S7)';
        titleText = 'Clasa FAI S7 — Machete Cosmice (Ariane 44P, Saturn IB, Rachete Sondă)';
        descText = 'Pregătește dosarul tehnic și macheta la scară după grila oficială FAI de 500 puncte (50p documentație + 350p stand + 100p zbor, Vol. III pag. 210).';
      } else {
        stepId = 'step-P1';
        codeText = 'RECOMANDARE: TREAPTA P1 → P3 (PROFESIONIST)';
        titleText = 'Machete de Înaltă Fidelitate (Focke-Wulf Fw 190, Fokker D.VII) & Maestru Modelist';
        descText = 'Execută machete de concurs cu finisaj muzeal, camuflaj autentic și dosar complet de omologare pentru Campionatele Naționale și Internaționale FAI.';
      }
    }

    if (diagRecCode) diagRecCode.textContent = codeText;
    if (diagRecTitle) diagRecTitle.textContent = titleText;
    if (diagRecDesc) diagRecDesc.textContent = descText;
    if (diagJumpBtn) diagJumpBtn.setAttribute('data-target-step', stepId);
  }

  [diagExp, diagBranch, diagGoal].forEach((sel) => {
    if (sel) sel.addEventListener('change', updateDiagnostic);
  });

  if (diagJumpBtn) {
    diagJumpBtn.addEventListener('click', () => {
      const targetId = diagJumpBtn.getAttribute('data-target-step') || 'step-B2';
      // Ensure all steps are visible
      filterStepsByStage('all');
      stageFilterBtns.forEach((b) => {
        const isAll = b.getAttribute('data-stage-filter') === 'all';
        b.classList.toggle('is-active', isAll);
        b.setAttribute('aria-selected', String(isAll));
      });

      stepCards.forEach((c) => c.classList.remove('is-highlighted'));
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.classList.add('is-highlighted');
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* ==========================================================================
     9. PLANȘOTECA & GALLERY FILTERS + DIALOG LIGHTBOX
     ========================================================================== */
  const planFilterBtns = document.querySelectorAll('[data-plan-filter]');
  const planCards = document.querySelectorAll('#plans-grid .plan-card');
  const plansCountBadge = document.getElementById('plans-count-badge');

  planFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-plan-filter') || 'all';
      planFilterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      let count = 0;
      planCards.forEach((card) => {
        const match = cat === 'all' || card.getAttribute('data-plan-cat') === cat;
        card.style.display = match ? '' : 'none';
        if (match) count++;
      });
      if (plansCountBadge) {
        plansCountBadge.textContent = `${count} planșe disponibile local`;
      }
    });
  });

  const galleryFilterBtns = document.querySelectorAll('[data-gallery-filter]');
  const galleryCards = document.querySelectorAll('#gallery-grid .gallery-card');
  const galleryCountBadge = document.getElementById('gallery-count-badge');

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-gallery-filter') || 'all';
      galleryFilterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      let count = 0;
      galleryCards.forEach((card) => {
        const match = cat === 'all' || card.getAttribute('data-gallery-cat') === cat;
        card.style.display = match ? '' : 'none';
        if (match) count++;
      });
      if (galleryCountBadge) {
        galleryCountBadge.textContent = `${count} fotografii autentice`;
      }
    });
  });

  // Lightbox Modal (<dialog>)
  const lightboxDialog = document.getElementById('lightbox-dialog');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDownload = document.getElementById('lightbox-download');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, title, caption) {
    if (!lightboxDialog || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Previzualizare tehnică';
    if (lightboxTitle) lightboxTitle.textContent = title || 'Exponat / Planșă Tehnică';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    if (lightboxDownload) lightboxDownload.href = src;
    if (typeof lightboxDialog.showModal === 'function') {
      lightboxDialog.showModal();
    } else {
      lightboxDialog.setAttribute('open', 'open');
    }
  }

  function closeLightbox() {
    if (!lightboxDialog) return;
    if (typeof lightboxDialog.close === 'function') {
      lightboxDialog.close();
    } else {
      lightboxDialog.removeAttribute('open');
    }
  }

  document.querySelectorAll('[data-lightbox-src]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-lightbox-src');
      const title = trigger.getAttribute('data-lightbox-title');
      const caption = trigger.getAttribute('data-lightbox-caption');
      if (src) openLightbox(src, title, caption);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxDialog) {
    lightboxDialog.addEventListener('click', (e) => {
      if (e.target === lightboxDialog) closeLightbox();
    });
  }

  /* ==========================================================================
     10. ENGINEERING LAB — 3 INTERACTIVE SIMULATORS
     ========================================================================== */
  const labTabBtns = document.querySelectorAll('[data-lab-tab]');
  const labPanels = {
    aero: document.getElementById('lab-panel-aero'),
    rocket: document.getElementById('lab-panel-rocket'),
    s7: document.getElementById('lab-panel-s7')
  };

  labTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetKey = btn.getAttribute('data-lab-tab');
      labTabBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      Object.entries(labPanels).forEach(([key, panel]) => {
        if (panel) panel.classList.toggle('is-active', key === targetKey);
      });
    });
  });

  // SIMULATOR 1: Aerodynamics, Incidence Shim (X = C * sin alpha) & Airfoil Coordinates
  const aeroSpan = document.getElementById('aero-span');
  const aeroChord = document.getElementById('aero-chord');
  const aeroMass = document.getElementById('aero-mass');
  const aeroAlpha = document.getElementById('aero-alpha');
  const aeroCgPct = document.getElementById('aero-cg-pct');

  function updateAeroLab() {
    if (!aeroSpan || !aeroChord || !aeroMass || !aeroAlpha || !aeroCgPct) return;
    const b = Number(aeroSpan.value); // mm
    const c = Number(aeroChord.value); // mm
    const m = Number(aeroMass.value); // g
    const alpha = Number(aeroAlpha.value); // deg
    const cgPct = Number(aeroCgPct.value); // %

    document.getElementById('aero-span-val').textContent = `${b} mm`;
    document.getElementById('aero-chord-val').textContent = `${c} mm`;
    document.getElementById('aero-mass-val').textContent = `${m} g`;
    document.getElementById('aero-alpha-val').textContent = `${alpha.toFixed(1).replace('.', ',')}°`;
    document.getElementById('aero-cg-pct-val').textContent = `${cgPct}%`;

    // Area in dm² (1 dm² = 10,000 mm²)
    const areaDm2 = (b * c) / 10000;
    const loading = m / areaDm2;
    const aspect = b / c;
    const cgMm = (c * cgPct) / 100;
    const shimMm = c * Math.sin((alpha * Math.PI) / 180);

    document.getElementById('aero-res-area').textContent = `${areaDm2.toFixed(2).replace('.', ',')} dm²`;
    document.getElementById('aero-res-loading').textContent = `${loading.toFixed(2).replace('.', ',')} g/dm²`;
    document.getElementById('aero-res-aspect').textContent = `λ = ${aspect.toFixed(1).replace('.', ',')} · CG ${cgMm.toFixed(1).replace('.', ',')} mm`;
    document.getElementById('aero-res-shim').textContent = `${shimMm.toFixed(2).replace('.', ',')} mm`;
    document.getElementById('airfoil-chord-tag').textContent = `C = ${c} mm`;

    const statusEl = document.getElementById('aero-status-banner');
    if (statusEl) {
      statusEl.classList.remove('is-warn', 'is-danger');
      if (cgPct > 36 || cgPct < 25) {
        statusEl.classList.add('is-warn');
        statusEl.textContent = `ATENȚIE CENTRAJ (${cgPct}% C): Poziția CG în afara plajei clasice (28%–35% C) poate provoca fie cabraj și angajare (CG prea în spate), fie picaj accentuat (CG prea în față).`;
      } else if (loading < 12) {
        statusEl.textContent = `Planor ultra-ușor de sală / micromodel (${loading.toFixed(1).replace('.', ',')} g/dm²). Sensibil la turbulențe, viteză minimă de coborâre excelentă.`;
      } else if (loading <= 24) {
        statusEl.textContent = `Regim optim de planor termic Faza I / Faza II (${loading.toFixed(1).replace('.', ',')} g/dm²). Adaos sub bordul de atac pentru calaj ${alpha.toFixed(1).replace('.', ',')}°: X = ${shimMm.toFixed(2).replace('.', ',')} mm.`;
      } else {
        statusEl.classList.add('is-warn');
        statusEl.textContent = `Încărcare alară ridicată (${loading.toFixed(1).replace('.', ',')} g/dm²) — specifică aeromodelelor de pantă, propulsate sau machetelor zburătoare rapide.`;
      }
    }

    // Dynamically plot SVG Airfoil Outline from AIRFOIL_STATIONS & tilt by incidence angle alpha
    const svgOutline = document.getElementById('svg-airfoil-outline');
    const cgMarker = document.getElementById('svg-cg-marker');
    const cgLabel = document.getElementById('svg-cg-label');
    const baseY = 88;
    const xSpan = 400; // 20..420
    const yScale = 4.0; // 1% thickness -> 4 SVG units
    const tiltRad = (alpha * 0.55 * Math.PI) / 180; // visual leading-edge shim lift about trailing edge x=420

    const mapStationPt = (pct, yPct) => {
      const x0 = 20 + (pct / 100) * xSpan;
      const y0 = baseY - yPct * yScale;
      const dx = 420 - x0;
      const liftedY = y0 - dx * Math.sin(tiltRad);
      return `${x0.toFixed(1)} ${liftedY.toFixed(1)}`;
    };

    if (svgOutline) {
      const upperPts = AIRFOIL_STATIONS.map((s) => mapStationPt(s.pct, s.yePct));
      const lowerPts = [...AIRFOIL_STATIONS]
        .reverse()
        .map((s) => mapStationPt(s.pct, s.yiPct));
      const dPath = `M ${upperPts[0]} L ${upperPts.slice(1).join(' L ')} L ${lowerPts.join(' L ')} Z`;
      svgOutline.setAttribute('d', dPath);
    }

    if (cgMarker && cgLabel) {
      const cx = 20 + (cgPct / 100) * xSpan;
      const cy = 72 - (420 - cx) * Math.sin(tiltRad);
      cgMarker.setAttribute('cx', cx.toFixed(1));
      cgMarker.setAttribute('cy', cy.toFixed(1));
      cgLabel.setAttribute('x', (cx + 10).toFixed(1));
      cgLabel.setAttribute('y', (cy - 4).toFixed(1));
      cgLabel.textContent = `CG (${cgMm.toFixed(1).replace('.', ',')} mm · α=${alpha.toFixed(1).replace('.', ',')}°)`;
    }

    // Update Coordinate Table (X, Ye, Yi) scaled to chord C
    const tbody = document.getElementById('airfoil-coord-tbody');
    if (tbody) {
      const fmt = (val) => val.toFixed(1).replace('.', ',');
      const rowX = AIRFOIL_STATIONS.map((s) => `<td>${fmt((c * s.pct) / 100)}</td>`).join('');
      const rowYe = AIRFOIL_STATIONS.map((s) => `<td>${fmt((c * s.yePct) / 100)}</td>`).join('');
      const rowYi = AIRFOIL_STATIONS.map((s) => `<td>${fmt((c * s.yiPct) / 100)}</td>`).join('');
      tbody.innerHTML = `
        <tr><td>Abscisă X (mm)</td>${rowX}</tr>
        <tr><td>Extrados Ye (mm)</td>${rowYe}</tr>
        <tr><td>Intrados Yi (mm)</td>${rowYi}</tr>
      `;
    }
  }

  [aeroSpan, aeroChord, aeroMass, aeroAlpha, aeroCgPct].forEach((input) => {
    if (input) input.addEventListener('input', updateAeroLab);
  });
  updateAeroLab();

  // SIMULATOR 2: Rocketry Stability (Calibers) & Dual-Theodolite 300 m Altitude Triangulation
  const rockDia = document.getElementById('rock-dia');
  const rockCg = document.getElementById('rock-cg');
  const rockCp = document.getElementById('rock-cp');
  const rockBase = document.getElementById('rock-base');
  const rockElev = document.getElementById('rock-elev');

  function updateRocketLab() {
    if (!rockDia || !rockCg || !rockCp || !rockBase || !rockElev) return;
    const d = Number(rockDia.value);
    const cg = Number(rockCg.value);
    const cp = Number(rockCp.value);
    const b = Number(rockBase.value);
    const elev = Number(rockElev.value);

    document.getElementById('rock-dia-val').textContent = `${d} mm`;
    document.getElementById('rock-cg-val').textContent = `${cg} mm`;
    document.getElementById('rock-cp-val').textContent = `${cp} mm`;
    document.getElementById('rock-base-val').textContent = `${b} m`;
    document.getElementById('rock-elev-val').textContent = `${elev}°`;

    const diff = cp - cg;
    const calibers = diff / d;
    // Symmetric dual-theodolite midpoint altitude H = (b / 2) * tan(elev)
    const altM = (b / 2) * Math.tan((elev * Math.PI) / 180);

    document.getElementById('rock-res-calibers').textContent = `${calibers.toFixed(2).replace('.', ',')} cal.`;
    document.getElementById('rock-res-diff').textContent = `${diff >= 0 ? '+' : ''}${diff} mm`;
    document.getElementById('rock-res-alt').textContent = `${altM.toFixed(1).replace('.', ',')} m`;

    const classEl = document.getElementById('rock-res-class');
    if (classEl) {
      if (d <= 25) classEl.textContent = 'Clasa A (1,26–2,5 Ns)';
      else if (d <= 36) classEl.textContent = 'Clasa B (2,51–5,0 Ns)';
      else if (d <= 55) classEl.textContent = 'Clasa C (5,01–10 Ns)';
      else classEl.textContent = 'Clasa D (10,01–20 Ns)';
    }

    const statusEl = document.getElementById('rock-status-banner');
    if (statusEl) {
      statusEl.classList.remove('is-warn', 'is-danger');
      if (calibers < 1.0) {
        statusEl.classList.add('is-danger');
        statusEl.textContent = `PERICOL DE INSTABILITATE (${calibers.toFixed(2).replace('.', ',')} calibre): Centrul de presiune este prea aproape sau în fața centrului de greutate! Adaugă lest în conul ogival sau mărește suprafața stabilizatoarelor.`;
      } else if (calibers <= 2.6) {
        statusEl.textContent = `STABILITATE OPTIMĂ FAI (${calibers.toFixed(2).replace('.', ',')} calibre): Centrul de presiune (CP) se află la ${diff} mm în spatele CG. Altitudine triangulată pe baza b = ${b} m: H = ${altM.toFixed(1).replace('.', ',')} m.`;
      } else {
        statusEl.classList.add('is-warn');
        statusEl.textContent = `SUPRA-STABILITATE (${calibers.toFixed(2).replace('.', ',')} calibre): Modelul este stabil, dar la vânt lateral va avea tendința să se încline puternic în direcția vântului (efect de giruetă).`;
      }
    }
  }

  [rockDia, rockCg, rockCp, rockBase, rockElev].forEach((input) => {
    if (input) input.addEventListener('input', updateRocketLab);
  });
  updateRocketLab();

  // SIMULATOR 3: FAI Class S7 500-Point Official Judging Simulator (Vol. III, p. 210)
  const s7Doc = document.getElementById('s7-doc');
  const s7Dim = document.getElementById('s7-dim');
  const s7Craft = document.getElementById('s7-craft');
  const s7Color = document.getElementById('s7-color');
  const s7Flight = document.getElementById('s7-flight');

  function updateS7Lab() {
    if (!s7Doc || !s7Dim || !s7Craft || !s7Color || !s7Flight) return;
    const doc = Number(s7Doc.value);
    const dim = Number(s7Dim.value);
    const craft = Number(s7Craft.value);
    const color = Number(s7Color.value);
    const flight = Number(s7Flight.value);

    document.getElementById('s7-doc-val').textContent = `${doc} / 50 p`;
    document.getElementById('s7-dim-val').textContent = `${dim} / 150 p`;
    document.getElementById('s7-craft-val').textContent = `${craft} / 120 p`;
    document.getElementById('s7-color-val').textContent = `${color} / 80 p`;
    document.getElementById('s7-flight-val').textContent = `${flight} / 100 p`;

    const staticPts = doc + dim + craft + color;
    const eligibleForFlight = staticPts >= 100;
    const totalPts = eligibleForFlight ? staticPts + flight : staticPts;
    const pct = Math.round((totalPts / 500) * 100);

    document.getElementById('s7-res-static').textContent = `${staticPts} / 400 p`;
    document.getElementById('s7-res-flight').textContent = eligibleForFlight ? `${flight} / 100 p` : '0 / 100 p (Sub prag)';
    document.getElementById('s7-res-total').textContent = `${totalPts} / 500 p`;

    const rankEl = document.getElementById('s7-res-rank');
    const statusEl = document.getElementById('s7-status-banner');
    if (statusEl && rankEl) {
      statusEl.classList.remove('is-warn', 'is-danger');
      if (!eligibleForFlight) {
        rankEl.textContent = `Neadmis la zbor (${pct}%)`;
        statusEl.classList.add('is-danger');
        statusEl.textContent = `SUB PRAGUL REGULAMENTAR DE 100 PUNCTE LA STAND (${staticPts}p): Conform regulamentului FAI S7 (Vol. III, pag. 210), macheta trebuie să obțină minimum 100 puncte la verificarea tehnică pentru a fi admisă la lansare.`;
      } else if (totalPts >= 435) {
        rankEl.textContent = `Lot Național (${pct}%)`;
        statusEl.textContent = `CALIFICAT PENTRU PODIUM INTERNAȚIONAL FAI S7 (${totalPts} / 500 p): Macheta întrunește standardul de lot național atât la controlul cu șublerul pe stand, cât și la evoluția de zbor și recuperare.`;
      } else if (totalPts >= 330) {
        rankEl.textContent = `Concurs Național (${pct}%)`;
        statusEl.textContent = `CLASARE SOLIDĂ ÎN CONCURS (${totalPts} / 500 p): Macheta este admisă la zbor și punctează constant. Pentru podium, crește detalierea inter-etajelor și precizia cotelor.`;
      } else {
        rankEl.textContent = `Nivel Școlar (${pct}%)`;
        statusEl.classList.add('is-warn');
        statusEl.textContent = `ADMIS LA ZBOR (${totalPts} / 500 p): Macheta depășește pragul minim de 100p la stand, însă dosarul tehnic și acuratețea scării mai pot fi îmbunătățite.`;
      }
    }
  }

  [s7Doc, s7Dim, s7Craft, s7Color, s7Flight].forEach((input) => {
    if (input) input.addEventListener('input', updateS7Lab);
  });
  updateS7Lab();

  /* ==========================================================================
     11. 3-VOLUME COURSE READER (1,017 PAGES) & SEARCHABLE A–Z GLOSSARY
     ========================================================================== */
  const volSelectBtns = document.querySelectorAll('[data-vol-select]');
  const readerTocHeader = document.getElementById('reader-toc-header');
  const readerTocList = document.getElementById('reader-toc-list');
  const readerChapterBadge = document.getElementById('reader-chapter-badge');
  const readerChapterStep = document.getElementById('reader-chapter-step');
  const readerChapterTitle = document.getElementById('reader-chapter-title');
  const readerChapterExcerpt = document.getElementById('reader-chapter-excerpt');
  const readerChapterPoints = document.getElementById('reader-chapter-points');

  let activeVolKey = 'vol1';

  function renderChapterContent(volKey, chapterIdx) {
    const vol = COURSE_VOLUMES[volKey];
    if (!vol || !vol.chapters[chapterIdx]) return;
    const ch = vol.chapters[chapterIdx];

    if (readerChapterBadge) readerChapterBadge.textContent = ch.badge;
    if (readerChapterStep) readerChapterStep.textContent = ch.step;
    if (readerChapterTitle) readerChapterTitle.textContent = ch.title;
    if (readerChapterExcerpt) readerChapterExcerpt.textContent = ch.excerpt;
    if (readerChapterPoints) {
      readerChapterPoints.innerHTML = ch.points.map((pt) => `<li>${pt}</li>`).join('');
    }

    if (readerTocList) {
      readerTocList.querySelectorAll('.toc-item-btn').forEach((btn, idx) => {
        btn.classList.toggle('is-active', idx === chapterIdx);
      });
    }
  }

  function renderVolumeToc(volKey) {
    const vol = COURSE_VOLUMES[volKey];
    if (!vol || !readerTocList) return;
    activeVolKey = volKey;
    if (readerTocHeader) readerTocHeader.textContent = vol.header;

    readerTocList.innerHTML = vol.chapters
      .map(
        (ch, idx) => `
        <li>
          <button type="button" class="toc-item-btn ${idx === 0 ? 'is-active' : ''}" data-chapter-idx="${idx}">
            <span>${ch.shortTitle}</span>
            <span class="toc-page-num">${ch.pages}</span>
          </button>
        </li>
      `
      )
      .join('');

    readerTocList.querySelectorAll('.toc-item-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-chapter-idx') || 0);
        renderChapterContent(activeVolKey, idx);
      });
    });

    renderChapterContent(volKey, 0);
  }

  volSelectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const volKey = btn.getAttribute('data-vol-select') || 'vol1';
      volSelectBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      renderVolumeToc(volKey);
    });
  });

  renderVolumeToc('vol1');

  // Searchable A-Z Glossary
  const glossarySearch = document.getElementById('glossary-search');
  const glossaryGrid = document.getElementById('glossary-grid');
  const glossaryCountBadge = document.getElementById('glossary-count-badge');

  function renderGlossary(query = '') {
    if (!glossaryGrid) return;
    const q = query.trim().toLowerCase();
    const filtered = GLOSSARY_TERMS.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q) ||
        item.def.toLowerCase().includes(q)
    );

    if (glossaryCountBadge) {
      glossaryCountBadge.textContent = `${filtered.length} termeni`;
    }

    if (filtered.length === 0) {
      glossaryGrid.innerHTML = `<p style="font-size: var(--text-xs); color: var(--text-muted); grid-column: 1 / -1;">Niciun termen găsit pentru „${query}”. Încearcă termeni precum: calaj, balsa, diedru, S7, teodolit.</p>`;
      return;
    }

    glossaryGrid.innerHTML = filtered
      .map(
        (item) => `
        <div class="glossary-item">
          <div class="glossary-term">
            <span>${item.term}</span>
            <span>${item.cat}</span>
          </div>
          <p class="glossary-def">${item.def}</p>
        </div>
      `
      )
      .join('');
  }

  if (glossarySearch) {
    glossarySearch.addEventListener('input', () => {
      renderGlossary(glossarySearch.value);
    });
  }
  renderGlossary('');

  /* ==========================================================================
     12. ENROLLMENT FORM VALIDATION & INSTANT FEEDBACK
     ========================================================================== */
  const enrollmentForm = document.getElementById('enrollment-form');
  const formFeedback = document.getElementById('form-feedback');

  if (enrollmentForm && formFeedback) {
    enrollmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('form-name');
      const contactInput = document.getElementById('form-contact');
      const stageSelect = document.getElementById('form-stage');

      const name = nameInput?.value.trim() || '';
      const contact = contactInput?.value.trim() || '';
      const stage = stageSelect?.value || 'B1-B3';

      if (!name || !contact) {
        formFeedback.className = 'form-feedback is-visible';
        formFeedback.style.borderColor = 'var(--status-danger)';
        formFeedback.style.color = 'var(--status-danger)';
        formFeedback.style.background = 'var(--status-danger-bg)';
        formFeedback.textContent = 'Te rugăm să completezi numele și o modalitate de contact (email sau telefon).';
        return;
      }

      formFeedback.className = 'form-feedback is-visible';
      formFeedback.style.borderColor = 'var(--status-ok)';
      formFeedback.style.color = 'var(--status-ok)';
      formFeedback.style.background = 'var(--status-ok-bg)';
      formFeedback.textContent = `Înregistrare confirmată pentru ${name} (Grupa ${stage}). Maestrul Cornel Nistor va pregăti fișa de parcurs și planșele 1:1 aferente treptei selectate!`;
      enrollmentForm.reset();
    });
  }
})();
