// Banque de contenu FR — reprise fidèle des textes déjà validés dans
// HoroscopeModels.swift (generateAdvancedHoroscope / getDailyPredictions /
// getWeeklyPredictions / getMonthlyPredictions) pour garder le même ton
// entre le générateur local de l'app (filet de secours) et cette source
// "serveur" auto-hébergée.
//
// ⚠️ Ceci reste du contenu rédigé/rotatif (comme avant), pas un calcul
// d'éphémérides réel. Voir REAL_SOURCE.md pour brancher une vraie source
// astrologique (transits) à la place, sans changer le reste du pipeline.

export const SIGNS = [
  "belier", "taureau", "gemeaux", "cancer", "lion", "vierge",
  "balance", "scorpion", "sagittaire", "capricorne", "verseau", "poissons"
];

export const DAILY = {
  belier: [
    "Votre énergie de leader sera particulièrement forte aujourd'hui. Les nouveaux défis vous stimulent.",
    "C'est le moment idéal pour prendre des initiatives audacieuses. Votre courage ouvre des portes.",
    "Votre dynamisme naturel attire les opportunités. Foncez sans hésiter.",
    "Les projets personnels bénéficient de votre détermination. Persévérez dans vos efforts."
  ],
  taureau: [
    "La stabilité que vous recherchez se profile à l'horizon. Vos efforts constants portent leurs fruits.",
    "Votre patience légendaire sera récompensée aujourd'hui. Les investissements à long terme payent.",
    "Les plaisirs simples et authentiques colorent votre journée. Savourez ces moments précieux.",
    "Votre pragmatisme résout les problèmes complexes avec une remarquable efficacité."
  ],
  gemeaux: [
    "Votre curiosité naturelle vous mène vers de fascinantes découvertes. Restez ouvert aux nouveautés.",
    "La communication sera votre superpouvoir aujourd'hui. Multipliez les échanges enrichissants.",
    "Votre adaptabilité remarquable vous permet de naviguer avec aisance dans tous les domaines.",
    "Les connexions intellectuelles stimulent votre créativité de manière surprenante."
  ],
  cancer: [
    "Votre intuition exceptionnelle vous guide vers les meilleures décisions. Écoutez votre voix intérieure.",
    "L'harmonie familiale occupe une place centrale dans vos préoccupations du jour.",
    "Votre sensibilité se révèle être une force extraordinaire. Assumez cette qualité précieuse.",
    "Les émotions profondes révèlent des vérités importantes sur votre parcours de vie."
  ],
  lion: [
    "Votre charisme magnétique attire naturellement l'attention positive. C'est votre moment de briller.",
    "La créativité explose et se révèle être votre meilleur atout du jour.",
    "Votre générosité naturelle sera reconnue et célébrée par votre entourage.",
    "L'expression artistique vous apporte une satisfaction profonde et durable."
  ],
  vierge: [
    "Votre attention méticuleuse aux détails fait toute la différence dans vos projets.",
    "L'organisation méthodique sera la clé de votre succès remarquable aujourd'hui.",
    "Votre pragmatisme intelligent résout les problèmes les plus complexes avec brio.",
    "La quête de perfection dans vos entreprises vous mène vers l'excellence."
  ],
  balance: [
    "L'équilibre tant recherché est enfin à portée de vos mains. La sérénité vous habite.",
    "Votre sens naturel de la justice sera mis en lumière de façon éclatante.",
    "Les relations harmonieuses vous apportent une satisfaction profonde et sincère.",
    "Votre diplomatie remarquable résout les conflits les plus délicats avec finesse."
  ],
  scorpion: [
    "Votre intensité émotionnelle se révèle être votre plus grande force aujourd'hui.",
    "Les mystères les plus profonds se dévoilent à votre perspicacité exceptionnelle.",
    "Votre détermination inébranlable surmonte tous les obstacles sur votre chemin.",
    "Les transformations profondes s'annoncent à l'horizon de votre destinée."
  ],
  sagittaire: [
    "Votre soif insatiable d'aventure vous guide vers de nouveaux horizons prometteurs.",
    "L'optimisme contagieux sera votre meilleur compagnon de route aujourd'hui.",
    "Votre philosophie de vie inspire et éclaire naturellement votre entourage.",
    "Les voyages, même modestes, apportent une joie immense à votre âme."
  ],
  capricorne: [
    "Votre persévérance légendaire sera enfin récompensée par un succès mérité.",
    "Les objectifs à long terme se concrétisent progressivement grâce à votre ténacité.",
    "Votre discipline exemplaire devient un modèle inspirant pour votre entourage.",
    "L'autorité naturelle que vous dégagez sera respectée et reconnue."
  ],
  verseau: [
    "Votre originalité créative apporte des solutions innovantes aux défis contemporains.",
    "L'engagement humanitaire et collectif vous motive de façon particulièrement intense.",
    "Votre vision avant-gardiste sera enfin comprise et pleinement appréciée.",
    "L'indépendance d'esprit vous permet de voir clair dans les situations complexes."
  ],
  poissons: [
    "Votre créativité artistique atteint des sommets d'inspiration remarquables.",
    "L'empathie profonde vous connecte de manière authentique aux autres âmes.",
    "Votre intuition puissante vous guide vers les décisions les plus justes.",
    "Les rêves et l'imaginaire nourrissent votre âme de visions enchanteresses."
  ]
};

export const WEEKLY = {
  belier: [
    "Cette semaine, votre leadership naturel sera particulièrement sollicité.",
    "Semaine énergique où votre impulsivité créative pourrait vous ouvrir des portes.",
    "Vos qualités de pionnier seront reconnues et célébrées cette semaine.",
    "Une semaine qui mettra votre courage légendaire à l'épreuve."
  ],
  taureau: [
    "Cette semaine privilégie la stabilité et la consolidation de vos acquis.",
    "Semaine propice aux investissements réfléchis à long terme.",
    "Les plaisirs simples coloreront cette semaine de nuances délicieuses.",
    "Votre persévérance sera mise à l'honneur cette semaine."
  ],
  gemeaux: [
    "Semaine riche en échanges stimulants et découvertes passionnantes.",
    "La communication sera votre superpouvoir cette semaine.",
    "Une semaine polyvalente où votre adaptabilité sera votre avantage.",
    "Votre intellect sera particulièrement aiguisé cette semaine."
  ],
  cancer: [
    "Cette semaine met l'accent sur votre foyer et votre cercle familial.",
    "Semaine émotionnellement riche où votre sensibilité sera une force.",
    "Votre capacité d'écoute sera particulièrement appréciée.",
    "Une semaine pour cultiver vos racines et renforcer vos liens."
  ],
  lion: [
    "Semaine éclatante où votre charisme attirera tous les regards.",
    "Votre créativité sera à son apogée cette semaine.",
    "Une semaine généreuse où votre leadership inspirera votre entourage.",
    "Cette semaine met en lumière vos talents uniques."
  ],
  vierge: [
    "Semaine méthodique où votre attention aux détails fera la différence.",
    "Votre pragmatisme sera particulièrement apprécié cette semaine.",
    "Une semaine pour peaufiner et perfectionner vos projets.",
    "Cette semaine favorise l'analyse et la résolution de problèmes."
  ],
  balance: [
    "Semaine harmonieuse où l'équilibre sera votre meilleur allié.",
    "Votre sens esthétique colorera positivement cette semaine.",
    "Une semaine pour créer des ponts et résoudre les conflits.",
    "Cette semaine met l'accent sur les partenariats."
  ],
  scorpion: [
    "Semaine intense où votre pouvoir de transformation sera à l'œuvre.",
    "Votre intuition psychologique sera particulièrement aiguisée.",
    "Une semaine pour explorer vos profondeurs.",
    "Cette semaine privilégie la régénération et le renouveau."
  ],
  sagittaire: [
    "Semaine aventureuse où votre soif de découverte vous guidera.",
    "Votre philosophie de vie inspirera votre entourage.",
    "Une semaine pour élargir vos perspectives.",
    "Cette semaine favorise les voyages de l'esprit et du corps."
  ],
  capricorne: [
    "Semaine studieuse où votre discipline vous rapprochera de vos objectifs.",
    "Votre sens des responsabilités sera particulièrement valorisé.",
    "Une semaine pour construire sur des bases solides.",
    "Cette semaine met en valeur votre autorité naturelle."
  ],
  verseau: [
    "Semaine innovante où vos idées avant-gardistes trouveront un écho.",
    "Votre vision humanitaire sera mise en lumière.",
    "Une semaine pour révolutionner votre environnement.",
    "Cette semaine privilégie les amitiés et projets de groupe."
  ],
  poissons: [
    "Semaine inspirée où votre créativité vous guidera.",
    "Votre compassion créera des liens profonds.",
    "Une semaine pour laisser parler votre imagination.",
    "Cette semaine favorise la spiritualité et la connexion intérieure."
  ]
};

export const MONTHLY = {
  belier: [
    "Ce mois marque le début d'un nouveau cycle énergétique prometteur.",
    "Mois dynamisé où votre leadership vous ouvrira des portes.",
    "Un mois d'action et d'initiatives audacieuses vous attend."
  ],
  taureau: [
    "Mois de consolidation et de croissance stable.",
    "Ce mois favorise la patience et la persévérance.",
    "Un mois pour savourer les plaisirs authentiques."
  ],
  gemeaux: [
    "Mois stimulant sur le plan intellectuel et créatif.",
    "Ce mois multiplie les opportunités d'apprentissage.",
    "Un mois de découvertes et de rencontres enrichissantes."
  ],
  cancer: [
    "Ce mois met l'accent sur votre foyer et vos relations.",
    "Mois émotionnellement riche où votre sensibilité sera une force.",
    "Un mois pour cultiver vos racines et renforcer vos liens."
  ],
  lion: [
    "Mois radieux où votre charisme brillera de mille feux.",
    "Ce mois exalte votre créativité et expression personnelle.",
    "Un mois généreux où votre leadership inspirera."
  ],
  vierge: [
    "Mois méticuleux où votre attention aux détails vous mènera vers l'excellence.",
    "Ce mois privilégie l'organisation et l'efficacité.",
    "Un mois pour analyser et perfectionner tous les aspects."
  ],
  balance: [
    "Mois harmonieux privilégiant l'équilibre et les relations.",
    "Ce mois exalte votre sens esthétique et recherche de beauté.",
    "Un mois pour cultiver la justice et l'équité."
  ],
  scorpion: [
    "Mois transformateur où votre pouvoir de régénération opérera.",
    "Ce mois intensifie votre magnétisme et votre intuition.",
    "Un mois pour explorer vos profondeurs psychologiques."
  ],
  sagittaire: [
    "Mois aventureux où votre soif d'expansion vous guidera.",
    "Ce mois privilégie l'apprentissage et l'enseignement.",
    "Un mois pour élargir vos horizons et embrasser une vision plus vaste."
  ],
  capricorne: [
    "Mois ambitieux où votre persévérance vous rapprochera de vos objectifs.",
    "Ce mois consolide vos acquis et renforce votre position.",
    "Un mois pour gravir les échelons et assumer de nouvelles responsabilités."
  ],
  verseau: [
    "Mois révolutionnaire où vos idées avant-gardistes trouveront leur audience.",
    "Ce mois privilégie l'amitié et les projets collectifs.",
    "Un mois pour affirmer votre individualité tout en servant la collectivité."
  ],
  poissons: [
    "Mois inspiré où votre créativité et intuition vous guideront.",
    "Ce mois amplifie votre compassion et votre empathie.",
    "Un mois pour plonger dans votre imaginaire et donner vie à vos rêves."
  ]
};

export function seasonalInfluence(month) {
  switch (month) {
    case 12: case 1: case 2: return "L'énergie hivernale vous invite à la réflexion.";
    case 3: case 4: case 5: return "Le renouveau printanier dynamise vos projets.";
    case 6: case 7: case 8: return "La chaleur estivale amplifie votre rayonnement.";
    case 9: case 10: case 11: return "L'automne vous encourage à récolter les fruits de vos efforts.";
    default: return "Les cycles naturels soutiennent votre évolution.";
  }
}

export function monthlyFocus(month) {
  const focuses = [
    "Ce mois privilégie votre développement personnel.",
    "Focus sur vos relations et votre impact positif.",
    "Période favorable pour concrétiser vos projets.",
    "Mois d'équilibre entre vos priorités de vie."
  ];
  return focuses[(month - 1) % focuses.length];
}
