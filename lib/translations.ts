export type Lang = "en" | "pl";

type Translations = {
  nav: {
    products: string;
    pilot: string;
    contact: string;
  };
  common: {
    back: string;
    product: string;
    requestDemo: string;
    getInTouch: string;
    getQuote: string;
    watchPoc: string;
  };
  home: {
    heroBadge: string;
    heroFacility: string;
    heroH1: [string, string, string];
    heroP: string;
    heroCta: string;
    heroLink: string;
    statsLabels: [string, string, string, string];
    pullQuote: string;
    securityTitle: string;
    securityItems: [string, string, string, string, string];
    pilotBadge: string;
    pilotH2: [string, string];
    pilotP: string;
    pilotCta: string;
    footerRights: string;
  };
  products: {
    label: string;
    core: { tagline: string };
    vision: { tagline: string };
    simulators: { tagline: string };
  };
  core: {
    badge: string;
    h1: [string, string];
    heroP: string;
    flowLabel: string;
    flowH2: string;
    flowCaption: string;
    capLabel: string;
    capH2: string;
    features: { title: string; desc: string }[];
    ctaH2: [string, string];
    ctaP: string;
    ctaBtn: string;
  };
  vision: {
    badge: string;
    h1: [string, string];
    heroP: string;
    quoteBtn: string;
    problemLabel: string;
    problemH2: [string, string];
    problemP: string;
    stats: { label: string; sub: string }[];
    pipelineLabel: string;
    pipelineH2: string;
    pipeline: { step: string; label: string; desc: string }[];
    ctaH2: [string, string];
    ctaP: string;
    ctaBtn: string;
  };
  simulators: {
    badge: string;
    h1: [string, string];
    heroP: string;
    capLabel: string;
    capH2: [string, string];
    features: { label: string; desc: string }[];
    proofBadge: string;
    proofP: string;
    ctaH2: [string, string];
    ctaP: string;
    ctaBtn: string;
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      products: "Products",
      pilot: "Pilot",
      contact: "Contact",
    },
    common: {
      back: "← Back",
      product: "Product",
      requestDemo: "Request a Demo",
      getInTouch: "Get in Touch →",
      getQuote: "Get a Quote",
      watchPoc: "Watch POC →",
    },
    home: {
      heroBadge: "Pilot Deployed",
      heroFacility: "Book Printing Facility",
      heroH1: ["One Platform.", "Every Machine.", "Zero Silos."],
      heroP: "SimTwin digitizes your factory floor in real time — sensor data, AI analysis, and 3D visualization in one operating layer.",
      heroCta: "Request Early Access",
      heroLink: "See the Products",
      statsLabels: ["Facility Live", "Data Protocols", "Processing", "Architecture"],
      pullQuote: "“Once data flows, AI can finally do its job.”",
      securityTitle: "Security",
      securityItems: [
        "Cybersecurity-first architecture",
        "Air-gap compatible",
        "On-premise deployment",
        "No cloud dependency",
        "Encrypted data at rest",
      ],
      pilotBadge: "Live in Production",
      pilotH2: ["Already Running", "in a Real Factory"],
      pilotP: "Our first pilot is live at a book printing facility — sensors integrated, data flowing, AI analysis active. We’re proving the product before scaling.",
      pilotCta: "Join the Next Pilot",
      footerRights: "© 2025 SimTwin. All rights reserved.",
    },
    products: {
      label: "Product",
      core:       { tagline: "Your factory is talking."     },
      vision:     { tagline: "They quoted you 500k."        },
      simulators: { tagline: "Level up your operators."     },
    },
    core: {
      badge: "Product 01 — SimTwin Core",
      h1: ["Your factory is talking.", "Are you listening?"],
      heroP: "Most factories generate enormous amounts of data — and lose almost all of it. Trapped in PLCs, siloed per machine, invisible to the people making decisions. SimTwin Core is the integration layer that changes that.",
      flowLabel: "How it works",
      flowH2: "From factory floor to intelligence.",
      flowCaption: "White — factory data in · Amber — intelligence out",
      capLabel: "Capabilities",
      capH2: "Everything in one layer.",
      features: [
        { title: "OPC-UA & MQTT",        desc: "Native support for industrial protocols. Connect PLCs, SCADA systems, and sensors without custom drivers." },
        { title: "Real-time Pipeline",    desc: "Sub-second data ingestion from every machine on the floor, unified into a single live stream." },
        { title: "AI Anomaly Detection",  desc: "Trained on your factory’s baseline. Flags deviations before they become failures." },
        { title: "3D Visualization",      desc: "Every data point mapped to a live 3D model of your facility. See the factory, not just the numbers." },
        { title: "Live Dashboards",       desc: "Role-specific views for operators, line managers, and directors — updated in real time." },
        { title: "AI Reports",            desc: "Automated shift and production reports with AI-generated insights. No analyst required." },
      ],
      ctaH2: ["Ready to connect", "your factory?"],
      ctaP: "We deploy alongside your existing hardware. No rip-and-replace. No downtime.",
      ctaBtn: "Get in Touch →",
    },
    vision: {
      badge: "Product 02 — AI Vision Models",
      h1: ["They quoted you 500k.", "We start with a 3D scan."],
      heroP: "Traditional optical control systems are proprietary black boxes — expensive to install, expensive to maintain, impossible to modify. We build custom AI vision models from your own 3D geometry, deploy them on hardware you own, and hand you the keys.",
      quoteBtn: "Get a Quote",
      problemLabel: "The problem with traditional ML",
      problemH2: ["Real defects are rare.", "Synthetic ones aren’t."],
      problemP: "Training a vision model on real defect images means waiting weeks to collect enough examples — and manually labeling every single one. For rare failures, you might never gather enough data. Synthetic data solves this entirely: generate unlimited, perfectly labeled training images from 3D models of your machines. No waiting. No labeling. No privacy concerns.",
      stats: [
        { label: "−80%", sub: "vs. traditional system cost"   },
        { label: "10×",  sub: "faster than manual labeling"   },
        { label: "100%",      sub: "offline — no cloud dependency" },
      ],
      pipelineLabel: "The pipeline",
      pipelineH2: "From geometry to deployed model.",
      pipeline: [
        { step: "01", label: "3D Scan",               desc: "We scan your machine and product geometry to build an accurate digital base." },
        { step: "02", label: "Procedural Variation",  desc: "Houdini generates thousands of defect variations automatically — position, size, severity." },
        { step: "03", label: "Photorealistic Render", desc: "Unreal Engine renders images matching your exact camera position, lens, and lighting." },
        { step: "04", label: "Fine-tuning",           desc: "We fine-tune a compact vision model on your synthetic dataset using LoRA." },
        { step: "05", label: "Edge Deployment",       desc: "Optimized model deployed on dedicated Jetson hardware — offline, permanent, yours." },
      ],
      ctaH2: ["What does optical", "control cost you now?"],
      ctaP: "Tell us the machine, the defect type, the camera count. We’ll tell you what it takes.",
      ctaBtn: "Get a Quote →",
    },
    simulators: {
      badge: "Product 03 — Machine Simulators",
      h1: ["Level up", "your operators."],
      heroP: "Qualified operators are the bottleneck in every factory expansion. SimTwin Simulators turn certification into a quest — structured learning paths, live machine simulations streamed in the browser, and zero risk of breaking something real.",
      capLabel: "Capabilities",
      capH2: ["Train like it’s a game.", "Deploy like it’s real."],
      features: [
        { label: "Quests & Certifications",    desc: "Structured learning paths with progressive tasks. Operators earn certifications before ever touching real machinery. Every step logged, every competency verified." },
        { label: "Pixel-Streamed Simulations", desc: "Full machine simulations rendered in Unreal Engine, streamed live into the browser. No downloads, no GPU on the trainee side. Works on any laptop." },
        { label: "Failure Scenarios",          desc: "Simulate breakdowns, safety incidents, and edge cases that you can never safely recreate on a live line. Train for the worst without risking anything real." },
        { label: "Operator Analytics",         desc: "Track performance, completion rates, and decision-making under simulated pressure. Know who is ready before they touch the machine." },
        { label: "Multi-machine Support",      desc: "One platform for every machine in your facility. Add new simulators as you expand — same interface, same certification framework." },
        { label: "Custom Scenarios",           desc: "We build scenarios from your actual machine models. Your Schmedt, your SFK, your process — not a generic training tool." },
      ],
      proofBadge: "Proof of concept",
      proofP: "Currently in active discussion with leading Japanese manufacturers. The SimTwin Simulator POC — built on Unreal Engine with pixel streaming — demonstrates full machine operation training in a browser-native environment.",
      ctaH2: ["Your machines,", "safe to break."],
      ctaP: "We build the simulator from your actual machine models. Tell us what you operate.",
      ctaBtn: "Get in Touch →",
    },
  },

  pl: {
    nav: {
      products: "Produkty",
      pilot: "Pilot",
      contact: "Kontakt",
    },
    common: {
      back: "← Wróć",
      product: "Produkt",
      requestDemo: "Poproś o Demo",
      getInTouch: "Skontaktuj się →",
      getQuote: "Zapytaj o Wycenę",
      watchPoc: "Zobacz POC →",
    },
    home: {
      heroBadge: "Pilot Wdrożony",
      heroFacility: "Drukarnia Książek",
      heroH1: ["Jedna Platforma.", "Każda Maszyna.", "Zero Silosów."],
      heroP: "SimTwin digitalizuje halę produkcyjną w czasie rzeczywistym — dane z czujników, analiza AI i wizualizacja 3D w jednej warstwie operacyjnej.",
      heroCta: "Poproś o Wczesny Dostęp",
      heroLink: "Zobacz Produkty",
      statsLabels: ["Obiekt Live", "Protokoły Danych", "Przetwarzanie", "Architektura"],
      pullQuote: "„Gdy dane płyną, AI może w końcu wykonać swoją pracę.”",
      securityTitle: "Bezpieczeństwo",
      securityItems: [
        "Architektura cybersecurity-first",
        "Kompatybilny z air-gap",
        "Wdrożenie on-premise",
        "Bez zależności od chmury",
        "Szyfrowane dane w spoczynku",
      ],
      pilotBadge: "Na Żywo w Produkcji",
      pilotH2: ["Już Działa", "w Prawdziwej Fabryce"],
      pilotP: "Nasz pierwszy pilot działa w drukarni książek — czujniki zintegrowane, dane płyną, analiza AI aktywna. Udowadniamy produkt zanim zaczniemy skalować.",
      pilotCta: "Dołącz do Kolejnego Pilotu",
      footerRights: "© 2025 SimTwin. Wszelkie prawa zastrzeżone.",
    },
    products: {
      label: "Produkt",
      core:       { tagline: "Twoja fabryka mówi."             },
      vision:     { tagline: "Wycenili cię na 500k."           },
      simulators: { tagline: "Podnieś poziom operatorów."      },
    },
    core: {
      badge: "Produkt 01 — SimTwin Core",
      h1: ["Twoja fabryka mówi.", "Czy jej słuchasz?"],
      heroP: "Większość fabryk generuje ogromne ilości danych — i traci prawie wszystkie. Uwięzione w PLC, izolowane przy maszynach, niewidoczne dla osób podejmujących decyzje. SimTwin Core to warstwa integracji, która to zmienia.",
      flowLabel: "Jak to działa",
      flowH2: "Od hali produkcyjnej do inteligencji.",
      flowCaption: "Białe — dane fabryki · Bursztynowe — inteligencja",
      capLabel: "Możliwości",
      capH2: "Wszystko w jednej warstwie.",
      features: [
        { title: "OPC-UA & MQTT",             desc: "Natywna obsługa protokołów przemysłowych. Podłącz sterowniki PLC, systemy SCADA i czujniki bez niestandardowych sterowników." },
        { title: "Potok w Czasie Rzeczywistym", desc: "Pobieranie danych poniżej sekundy z każdej maszyny na hali, zunifikowane w jeden strumień na żywo." },
        { title: "Wykrywanie Anomalii przez AI", desc: "Wytrenowany na baseline twojej fabryki. Flagi odchyleń zanim staną się awariami." },
        { title: "Wizualizacja 3D",            desc: "Każdy punkt danych zmapowany do żywego modelu 3D twojego zakładu. Widzisz fabrykę, nie tylko liczby." },
        { title: "Panele na Żywo",             desc: "Widoki dostosowane do roli dla operatorów, kierowników linii i dyrektorów — aktualizowane w czasie rzeczywistym." },
        { title: "Raporty AI",                 desc: "Automatyczne raporty zmianowe i produkcyjne z wglądami generowanymi przez AI. Bez analityka." },
      ],
      ctaH2: ["Gotowy podłączyć", "swoją fabrykę?"],
      ctaP: "Wdrażamy obok istniejącego sprzętu. Bez wymiany. Bez przestojów.",
      ctaBtn: "Skontaktuj się →",
    },
    vision: {
      badge: "Produkt 02 — AI Vision Models",
      h1: ["Wycenili cię na 500k.", "My zaczynamy od skanu 3D."],
      heroP: "Tradycyjne systemy kontroli optycznej to zamknięte czarne skrzynki — drogie w instalacji, drogie w utrzymaniu, niemożliwe do modyfikacji. Budujemy niestandardowe modele AI wizyjne z twojej własnej geometrii 3D, wdrażamy je na sprzęcie, który posiadasz i oddajemy ci klucze.",
      quoteBtn: "Zapytaj o Wycenę",
      problemLabel: "Problem z tradycyjnym ML",
      problemH2: ["Prawdziwe defekty są rzadkie.", "Syntetyczne nie."],
      problemP: "Trenowanie modelu wizyjnego na prawdziwych obrazach defektów oznacza czekanie tygodniami na zebranie wystarczającej liczby przykładów — i ręczne oznaczanie każdego z nich. W przypadku rzadkich awarii możesz nigdy nie zebrać wystarczających danych. Dane syntetyczne rozwiązują ten problem całkowicie: generuj nieograniczone, idealnie oznakowane obrazy treningowe z modeli 3D twoich maszyn. Bez czekania. Bez oznaczania. Bez obaw o prywatność.",
      stats: [
        { label: "−80%", sub: "w porównaniu z tradycyjnym systemem" },
        { label: "10×",  sub: "szybciej niż ręczne oznaczanie"      },
        { label: "100%",      sub: "offline — bez zależności od chmury" },
      ],
      pipelineLabel: "Pipeline",
      pipelineH2: "Od geometrii do wdrożonego modelu.",
      pipeline: [
        { step: "01", label: "Skan 3D",                  desc: "Skanujemy twoją maszynę i geometrię produktu, aby zbudować dokładną bazę cyfrową." },
        { step: "02", label: "Wariacja Proceduralna",    desc: "Houdini automatycznie generuje tysiące wariacji defektów — pozycja, rozmiar, nasilenie." },
        { step: "03", label: "Fotorealistyczny Render",  desc: "Unreal Engine renderuje obrazy odpowiadające dokładnej pozycji kamery, obiektywowi i oświetleniu." },
        { step: "04", label: "Fine-tuning",              desc: "Dostrajamy kompaktowy model wizyjny na twoim syntetycznym zestawie danych używając LoRA." },
        { step: "05", label: "Wdrożenie Edge",           desc: "Zoptymalizowany model wdrożony na dedykowanym sprzęcie Jetson — offline, trwale, twój." },
      ],
      ctaH2: ["Ile kosztuje cię", "kontrola optyczna teraz?"],
      ctaP: "Podaj maszynę, typ defektu, liczbę kamer. My powiemy ci, co to wymaga.",
      ctaBtn: "Zapytaj o Wycenę →",
    },
    simulators: {
      badge: "Produkt 03 — Machine Simulators",
      h1: ["Podnieś poziom", "swoich operatorów."],
      heroP: "Wykwalifikowani operatorzy to wąskie gardło każdej ekspansji fabryki. SimTwin Simulators zamieniają certyfikację w quest — ustrukturyzowane ścieżki nauki, symulacje maszyn na żywo streamowane w przeglądarce i zero ryzyka zepsucia czegoś prawdziwego.",
      capLabel: "Możliwości",
      capH2: ["Trenuj jak w grze.", "Wdrażaj jak naprawdę."],
      features: [
        { label: "Questy i Certyfikaty",        desc: "Ustrukturyzowane ścieżki nauki z progresywnymi zadaniami. Operatorzy zdobywają certyfikaty zanim dotkną prawdziwej maszyny. Każdy krok zalogowany, każda kompetencja zweryfikowana." },
        { label: "Symulacje Pixel-Streamed",    desc: "Pełne symulacje maszyn renderowane w Unreal Engine, streamowane na żywo do przeglądarki. Bez pobierania, bez GPU po stronie kursanta. Działa na każdym laptopie." },
        { label: "Scenariusze Awarii",          desc: "Symuluj awarie, incydenty bezpieczeństwa i przypadki brzegowe, których nigdy nie można bezpiecznie odtworzyć na żywej linii. Trenuj na najgorsze bez ryzykowania czegokolwiek prawdziwego." },
        { label: "Analityka Operatorów",        desc: "Śledź wyniki, wskaźniki ukończenia i podejmowanie decyzji pod symulowaną presją. Wiedz, kto jest gotowy zanim dotknie maszyny." },
        { label: "Wsparcie Wielu Maszyn",       desc: "Jedna platforma dla każdej maszyny w twoim zakładzie. Dodawaj nowe symulatory w miarę ekspansji — ten sam interfejs, ta sama struktura certyfikacji." },
        { label: "Niestandardowe Scenariusze",  desc: "Budujemy scenariusze z twoich rzeczywistych modeli maszyn. Twój Schmedt, twój SFK, twój proces — nie generyczne narzędzie szkoleniowe." },
      ],
      proofBadge: "Proof of concept",
      proofP: "Aktualnie w aktywnej dyskusji z wiodącymi japońskimi producentami. POC SimTwin Simulator — zbudowany na Unreal Engine z pixel streamingiem — demonstruje pełne szkolenie operacyjne maszyny w środowisku natywnym dla przeglądarki.",
      ctaH2: ["Twoje maszyny,", "bezpieczne do zepsucia."],
      ctaP: "Budujemy symulator z twoich rzeczywistych modeli maszyn. Powiedz nam, co obsługujesz.",
      ctaBtn: "Skontaktuj się →",
    },
  },
};
