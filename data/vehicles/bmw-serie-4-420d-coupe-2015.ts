import type { Vehicle } from "./types"

const dir = "/vehicles/bmw-serie-4-420d-coupe-2015"

export const bmwSerie4420dCoupe2015: Vehicle = {
  id: "bmw-serie-4-420d-coupe-2015",
  make: "BMW",
  model: "Série 4 Coupé",
  version: "420d",
  year: 2015,
  firstRegistration: "2015-01-09",
  mileageKm: 182000,
  price: 17900,
  status: "available",
  featured: true,
  updatedAt: "2026-11-18",

  fuel: "diesel",
  transmission: "automatic",
  bodyType: "coupe",
  color: "black",
  origin: "imported",
  // Coupé de 2 portas: a tampa da bagageira não conta como porta (só conta nos hatchback,
  // em que a porta traseira abre com o vidro). No Standvirtual corresponde a "2/3 portas".
  doors: 2,
  seats: 4,
  engineCc: 1995,
  cylinders: 4,
  powerHp: 184,
  powerKw: 135,

  images: [
    `${dir}/01-frente-lateral.webp`,
    `${dir}/02-frente.webp`,
    `${dir}/03-lateral-frontal.webp`,
    `${dir}/04-detalhe-frente-lateral.webp`,
    `${dir}/05-traseira-lateral.webp`,
    `${dir}/06-traseira.webp`,
    `${dir}/07-traseira-direta.webp`,
    `${dir}/08-detalhe-farolim-traseiro.webp`,
    `${dir}/09-interior-painel-volante.webp`,
    `${dir}/10-interior-porta-condutor.webp`,
    `${dir}/11-bancos-traseiros.webp`,
    `${dir}/12-bancos-traseiros-vista-lateral.webp`,
    `${dir}/13-bagageira-aberta.webp`,
    `${dir}/14-bagageira-vista-traseira.webp`,
    `${dir}/15-motor-capot-aberto.webp`,
    `${dir}/16-historico-manutencao.webp`,
  ],
  ogImage: `${dir}/og.jpg`,

  description: {
    pt: "BMW Série 4 Coupé 420d com caixa automática e motor diesel 2.0 de 184 cv. Linhas desportivas, jantes de 18\", volante M com patilhas, modos de condução e ar condicionado automático bizona. Um coupé elegante para quem gosta de conduzir, com consumos equilibrados para o dia a dia. Revisão feita e inspeção em dia.",
    en: "BMW 4 Series Coupé 420d with automatic transmission and a 184 hp 2.0 diesel engine. Sporty lines, 18\" alloy wheels, M steering wheel with paddle shifters, driving modes and dual-zone automatic climate control. An elegant coupé for those who enjoy driving, with sensible fuel consumption for everyday use. Freshly serviced and inspected.",
    es: "BMW Serie 4 Coupé 420d con cambio automático y motor diésel 2.0 de 184 CV. Líneas deportivas, llantas de 18\", volante M con levas, modos de conducción y climatizador automático bizona. Un coupé elegante para quien disfruta conduciendo, con consumos equilibrados para el día a día. Revisión hecha e ITV en vigor.",
    fr: "BMW Série 4 Coupé 420d à boîte automatique avec moteur diesel 2.0 de 184 ch. Lignes sportives, jantes 18\", volant M avec palettes, modes de conduite et climatisation automatique bizone. Un coupé élégant pour ceux qui aiment conduire, avec une consommation raisonnable au quotidien. Révisé, contrôle technique effectué.",
    de: "BMW 4er Coupé 420d mit Automatikgetriebe und 2,0-Liter-Dieselmotor mit 184 PS. Sportliche Linien, 18-Zoll-Felgen, M-Lenkrad mit Schaltwippen, Fahrmodi und Zwei-Zonen-Klimaautomatik. Ein elegantes Coupé für alle, die gerne fahren, mit vernünftigem Verbrauch im Alltag. Frisch gewartet, Hauptuntersuchung gültig.",
  },

  equipment: [
    "mSportSteeringWheel",
    "paddleShifters",
    "drivingModes",
    "cruiseControl",
    "bluetooth",
    "dabRadio",
    "dualZoneClimate",
    "parkingSensorsFrontRear",
    "remoteTrunkOpening",
    "ledHeadlights",
    "fogLights",
    "alloyWheels18",
    "metallicPaint",
    "pianoBlackTrim",
    "clothUpholstery",
    "airbags",
    "startStop",
  ],

  // Dados de fábrica do 420d Coupé (F32). Os restantes ficam ocultos até serem preenchidos.
  specs: {
    torqueNm: 380,
    consumptionL100km: 6.6,
    lengthMm: 4638,
    widthMm: 1825,
    heightMm: 1362,
    wheelbaseMm: 2810,
    trunkL: 445,
  },

  warrantyMonths: 18,
  serviceHistory: {
    pt: "Revisão feita e inspecionado",
    en: "Serviced and inspected",
    es: "Revisión hecha e ITV pasada",
    fr: "Révisé et contrôle technique effectué",
    de: "Gewartet und mit gültiger Hauptuntersuchung",
  },
}
