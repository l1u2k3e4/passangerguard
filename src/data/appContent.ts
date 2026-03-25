export const appContent = {
  hero: {
    tag: 'Flugangst-App für iOS & Android',
    title: 'Dein persönliches Flugangst-Seminar — immer in deiner Hosentasche',
    subtitle:
      'PassengerGuard hilft dir, Flugangst nachhaltig zu bewältigen. Mit 8 aufeinander abgestimmten Modulen, Audio-Flugsimulationen und wissenschaftlich fundierten Methoden.',
    features: [
      'Kognitive Verhaltenstherapie (KVT) als Grundlage',
      '8 Module · 36 Lektionen · 1:39h Audio-Training',
      'Funktioniert offline im Flugmodus',
      'Entwickelt mit Ruhr-Universität Bochum & Lufthansa Aviation Training',
    ],
    ctaPrimary: 'Jetzt herunterladen',
    ctaSecondary: 'Trainingsplan ansehen',
  },
  seo: {
    title: 'PassengerGuard Flugangst-App: 8 Module gegen Flugangst | iOS & Android',
    description:
      'PassengerGuard — die wissenschaftlich geprüfte App gegen Flugangst. 8 Module, Audio-Flugsimulation, Atemübungen & Pilotenwissen. Jetzt für iPhone und Android.',
  },
  modules: {
    title: '8 Module für deinen Weg zu entspanntem Fliegen',
    items: [
      {
        number: 1,
        title: 'Flugangst verstehen',
        description: 'Lerne, woher deine Angst kommt und wie sie funktioniert.',
        icon: 'Brain' as const,
      },
      {
        number: 2,
        title: 'Wissen über das Fliegen',
        description: 'Ein Pilot erklärt alle Abläufe, Geräusche und Sicherheitsstandards.',
        icon: 'Compass' as const,
      },
      {
        number: 3,
        title: 'Kopfflug (Mentale Flugsimulation)',
        description: 'Erlebe einen kompletten Flug im Kopf — mit echten Sounds und Erklärungen.',
        icon: 'Headphones' as const,
      },
      {
        number: 4,
        title: 'Entspannung & Meditation',
        description: 'Geführte Meditationen und Atemübungen für jede Flugphase.',
        icon: 'Wind' as const,
      },
      {
        number: 5,
        title: 'Phasen des Fliegens',
        description: 'Verstehe jeden Moment: Boarding, Start, Reiseflug, Turbulenz, Landung.',
        icon: 'Layers' as const,
      },
      {
        number: 6,
        title: 'Besondere Situationen',
        description: 'Turbulenzen, Geräusche, Nachtflug — erklärt und entmystifiziert.',
        icon: 'CloudLightning' as const,
      },
      {
        number: 7,
        title: 'Quiz & Wissenstest',
        description: 'Teste und festige dein Wissen über das Fliegen.',
        icon: 'Award' as const,
      },
      {
        number: 8,
        title: 'Soforthilfe',
        description: 'Schnelle Beruhigung bei akuter Angst — auch im Flugmodus.',
        icon: 'Heart' as const,
      },
    ],
  },
  trainingsplan: {
    tag: 'Wissenschaftlich fundiert',
    title: 'Trainingsplan — entwickelt mit der Ruhr-Universität Bochum',
    text: 'Unsere wissenschaftlich fundierten Trainingspläne unterstützen dich dabei, Schritt für Schritt deine Flugangst zu meistern. Wähle zwischen dem 4-Wochen-Plan für nachhaltiges Training oder der Intensivwoche für schnelle Vorbereitung.',
    plans: [
      {
        title: '4-Wochen-Plan',
        subtitle: 'Nachhaltig trainieren',
        details: '4 Wochen, je 2-3 Sitzungen pro Woche',
        ideal: 'Ideal für langfristigen Erfolg',
      },
      {
        title: 'Intensivwoche',
        subtitle: 'Schnell vorbereiten',
        details: '7 Tage intensives Training vor dem Flug',
        ideal: 'Ideal bei kurzfristiger Reiseplanung',
      },
    ],
  },
  studie: {
    title: 'Wissenschaftlich getestet — Ruhr-Universität Bochum',
    text: 'PassengerGuard wurde in einer wissenschaftlichen Studie des Forschungs- und Behandlungszentrums (FBZ) der Ruhr-Universität Bochum auf seine Wirksamkeit untersucht.',
    timeline: [
      {
        date: 'November 2023',
        event: 'Studienstart mit ausführlichem Briefing der Teilnehmer',
      },
      {
        date: '3 Monate Training',
        event: '150 Teilnehmer, davon 50 mit intensivem App-Training über 3 Monate',
      },
      {
        date: 'März 2024',
        event: 'Flugangst-Training am Flughafen Düsseldorf unter Leitung von Dr. André Wannemüller',
      },
    ],
    wdrNote: 'Die Ergebnisse wurden im WDR-Fernsehen in der Sendung „Hier und Heute" vorgestellt.',
  },
}
