export const homeContent = {
  hero: {
    tag: 'Wissenschaftlich geprüft · Ruhr-Universität Bochum',
    title: 'Flugangst? Wir begleiten dich —',
    titleHighlight: 'Schritt für Schritt',
    titleEnd: 'zu entspanntem Fliegen.',
    subtitle:
      'PassengerGuard ist dein persönliches Flugangst-Seminar für die Hosentasche. Mit Audio-Flugsimulationen, mentalem Training & Pilotenwissen — wissenschaftlich geprüft.',
    features: [
      'Soforthilfe bei Panikattacken — in nur 30 Sekunden',
      'Funktioniert auch offline im Flugmodus',
      'In weniger als 10 Sitzungen Flugangst reduzieren',
    ],
    ctaPrimary: 'Jetzt App herunterladen',
    ctaSecondary: 'Mehr erfahren',
  },

  trustBar: {
    label: 'Bekannt aus',
    partners: 'In Zusammenarbeit mit der Ruhr-Universität Bochum',
    mediaNames: ['WDR', 'RTL', '1Live', 'Radio Vest', 'WAZ', 'Berliner Morgenpost', 'MySelf'],
  },

  problem: {
    tag: 'Flugangst in Zahlen',
    title: 'Du bist nicht allein — Millionen Menschen kennen dieses Gefühl',
    subtitle: 'Flugangst betrifft viele Menschen, wird aber selten offen angesprochen.',
    stats: [
      { value: '38%', label: 'der Deutschen haben Flugangst', icon: 'Users' as const },
      { value: '16%', label: 'empfinden Fliegen als Albtraum', icon: 'AlertTriangle' as const },
      { value: '22%', label: 'verspüren starkes Unbehagen', icon: 'Frown' as const },
    ],
    source: 'Quelle: Institut für Demoskopie Allensbach',
    empathyText:
      'Flugangst ist kein Zeichen von Schwäche — und doch wird sie oft als Tabuthema behandelt. Viele Betroffene schämen sich für ihre Angst, besonders im beruflichen Umfeld. Dabei ist Flugangst eine der häufigsten Phobien überhaupt. Der erste Schritt ist, sie ernst zu nehmen — und sich Unterstützung zu holen.',
  },

  solution: {
    tag: 'Die Lösung',
    title: 'PassengerGuard — Dein Flugangst-Coach für die Hosentasche',
    blocks: [
      {
        image: '/images/screen-training.jpg',
        title: 'Vorbereitung & mentale Sicherheit',
        text: 'Bereite dich mit strukturierten Trainingseinheiten auf deinen Flug vor. In weniger als 10 Sitzungen lernst du, deine Angstauslöser zu erkennen und zu bewältigen.',
        icon: 'Shield' as const,
      },
      {
        image: '/images/screen-meditation.jpg',
        title: 'Beruhigung & Kontrolle behalten',
        text: 'Atemübungen, Meditationen und Entspannungstechniken helfen dir, am Gate und beim Boarding ruhig zu bleiben.',
        icon: 'Heart' as const,
      },
      {
        image: '/images/screen-kopfflug.jpg',
        title: 'Akuthilfe bei Panikattacken',
        text: 'Beruhigende Atemtechniken und gezielte Übungen, die in nur 30 Sekunden wirken — und das alles funktioniert auch im Flugmodus.',
        icon: 'Plane' as const,
      },
    ],
  },

  features: {
    tag: '8 Module · 36 Lektionen',
    title: 'Alles was du brauchst, um entspannt zu fliegen',
    subtitle:
      'PassengerGuard kombiniert bewährte Methoden der kognitiven Verhaltenstherapie, meditative Techniken und fundiertes Pilotenwissen.',
    items: [
      {
        title: 'Soforthilfe bei Panik',
        description: 'Beruhigt bei Panikattacken mit gezielter Atemtechnik — in nur 30 Sekunden.',
        icon: 'Zap' as const,
      },
      {
        title: 'Audio-Flugsimulation',
        description: 'Original-Sounds, Ansagen & simulierte Flugabläufe für mentales Training.',
        icon: 'Headphones' as const,
      },
      {
        title: 'Pilotenwissen',
        description: 'Ein erfahrener Pilot erklärt alle Abläufe und Geräusche — vom Start bis zur Landung.',
        icon: 'Compass' as const,
      },
      {
        title: 'Strukturierter Trainingsplan',
        description: 'Schritt für Schritt zur inneren Ruhe. Wissenschaftlich fundiert.',
        icon: 'ClipboardList' as const,
      },
      {
        title: 'Quiz & Wissenstest',
        description: 'Teste dein Wissen und stärke dein Vertrauen in die Flugsicherheit.',
        icon: 'CheckCircle' as const,
      },
      {
        title: 'Entspannung & Meditation',
        description: 'Beruhigende Meditationen und Atemübungen für jede Flugphase.',
        icon: 'Wind' as const,
      },
      {
        title: 'Offline im Flugmodus',
        description: 'Alle Funktionen auch ohne Internet — an Bord immer für dich da.',
        icon: 'WifiOff' as const,
      },
      {
        title: 'Letzter Check vor dem Flug',
        description: 'Mentale Tools & Checklisten für den Tag des Abflugs.',
        icon: 'Plane' as const,
      },
    ],
  },

  kopfflug: {
    label: 'Modul 03 — Kopfflug',
    title: 'Mentales Flugtraining — Bereite dich vor wie ein Profisportler',
    text: 'Top-Athleten wie Skirennfahrer und Formel-1-Fahrer nutzen mentale Techniken zur optimalen Vorbereitung. PassengerGuard simuliert deinen Flug von Start bis Landung mit echten Geräuschen und Abläufen.',
    benefits: [
      'Gewöhnungseffekt — Fliegen fühlt sich vertrauter an',
      'Angst reduzieren — Dein Gehirn „erlebt" den Flug sicher im Kopf',
      'Körpersignale beruhigen — Der Stresslevel sinkt wie bei Profisportlern',
    ],
    cta: 'Mehr über den Kopfflug erfahren',
  },

  testimonials: {
    tag: 'Erfolgsgeschichten',
    title: 'So hat PassengerGuard geholfen',
    featured: {
      name: 'Christian Pittelkau',
      quote:
        'Die App hat mir die Flugangst genommen! Ohne PassengerGuard wäre ich heute nicht ins Flugzeug gestiegen.',
      context:
        'Christian, 41, hatte jahrelang das Fliegen vermieden. Nach 3 Monaten Training mit PassengerGuard absolvierte er seinen ersten Flug im Rahmen der wissenschaftlichen Studie der Ruhr-Universität Bochum.',
      image: '/images/christian-training.jpg',
    },
    reviews: [
      {
        stars: 5,
        title: 'Super App',
        author: 'xaboni',
        date: '04.10.2024',
        quote:
          'Tolle App, die mir beim Fliegen enorm geholfen hat. Besonders die Übungen im Flugmodus sind Gold wert.',
      },
      {
        stars: 5,
        title: 'Hat mein Leben verändert',
        author: 'Pottpig',
        date: '11.09.2024',
        quote:
          'Nach 3 Monaten Vorbereitung mit PassengerGuard konnte ich endlich wieder fliegen. Die strukturierten Trainingseinheiten waren perfekt.',
      },
      {
        stars: 5,
        title: 'Super App für alle',
        author: 'Olympia-Niklas Weidemann',
        date: '01.07.2023',
        quote:
          'Sehr benutzerfreundlich und durchdacht. Man merkt, dass echtes Wissen und Empathie dahinter stecken.',
      },
    ],
  },

  pricing: {
    tag: 'Preise',
    title: 'Wähle deinen Weg zu entspanntem Fliegen',
    subtitle: 'Keine versteckten Kosten. Jederzeit kündbar.',
    tiers: [
      {
        name: 'Soforthilfe',
        price: '7,99 €',
        period: '1 Woche',
        badge: 'Ideal vor dem Flug',
        highlighted: false,
        features: [
          'Alle 8 Module',
          'Atemübungen & Meditationen',
          'Offline im Flugmodus',
          'Pilotenwissen & Geräusche-Erklärungen',
        ],
        cta: 'Jetzt starten',
      },
      {
        name: 'Empfohlen',
        price: '24,99 €',
        period: '3 Monate',
        badge: 'Beliebteste Wahl',
        highlighted: true,
        features: [
          'Alles aus Soforthilfe',
          'Strukturierter Trainingsplan',
          'Quiz & Wissenstests',
          'Mentaler Kopfflug',
        ],
        cta: 'Jetzt starten',
      },
      {
        name: 'Transformation',
        price: '44,99 €',
        period: '12 Monate',
        badge: 'Für langfristige Veränderung',
        highlighted: false,
        features: [
          'Alles aus 3 Monate',
          'Volle Kontrolle & Wiederholung',
          'Unbegrenzter Zugriff auf Updates',
          'Langfristiges Training nach Uni-Trainingsplan',
        ],
        cta: 'Jetzt starten',
      },
    ],
  },

  media: {
    tag: 'In den Medien',
    title: 'PassengerGuard in der Presse',
    text: 'PassengerGuard wurde bereits in zahlreichen Medien vorgestellt — darunter WDR, RTL, 1Live, Radio Vest, WAZ, Berliner Morgenpost und MySelf.',
    items: [
      { image: '/images/wdr-bericht.jpg', label: 'WDR Fernsehen' },
      { image: '/images/rtl-bericht.jpg', label: 'RTL' },
      { image: '/images/bekannt-aus.png', label: 'Bekannt aus' },
    ],
  },

  faq: {
    tag: 'FAQ',
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Wie sicher ist Fliegen wirklich?',
        answer:
          'Fliegen zählt zu den sichersten Verkehrsmitteln weltweit. Die Wahrscheinlichkeit, bei einem Flugunfall ums Leben zu kommen, liegt bei etwa 1 zu 11 Millionen.',
      },
      {
        question: 'Wie funktioniert PassengerGuard?',
        answer:
          'PassengerGuard kombiniert kognitive Verhaltenstherapie, Atemübungen, Meditationen und Pilotenwissen in 8 aufeinander abgestimmten Modulen. In weniger als 10 Sitzungen kannst du viele Angstauslöser gezielt bewältigen.',
      },
      {
        question: 'Funktioniert die App auch im Flugmodus?',
        answer:
          'Ja! Alle Inhalte sind offline verfügbar. Tipp: Starte die App vor dem Aktivieren des Flugmodus, damit alle Module geladen sind.',
      },
      {
        question: 'Ist PassengerGuard wissenschaftlich getestet?',
        answer:
          'Ja. PassengerGuard wurde in einer wissenschaftlichen Studie des Forschungs- und Behandlungszentrums der Ruhr-Universität Bochum auf seine Wirksamkeit untersucht.',
      },
      {
        question: 'Kann Flugangst vollständig überwunden werden?',
        answer:
          'Viele Betroffene berichten, dass sie ihre Flugangst mit Training und der richtigen Unterstützung erfolgreich bewältigt haben. PassengerGuard hilft dir dabei, Schritt für Schritt sicherer zu werden.',
      },
      {
        question: 'Was kann ich tun, wenn während des Fluges Angst auftritt?',
        answer:
          'Nutze die Soforthilfe-Funktion der App mit beruhigenden Atemtechniken, die in nur 30 Sekunden wirken. Auch beruhigende Musik und das Informieren der Crew können helfen.',
      },
    ],
  },

  cta: {
    title: 'Bereit für entspanntes Fliegen?',
    subtitle: 'Lade PassengerGuard herunter und erlebe, wie entspannt Fliegen sein kann.',
    button: 'Jetzt herunterladen',
  },
}
