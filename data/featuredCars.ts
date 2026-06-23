export type Language = "pt" | "en" | "es" | "fr" | "de"

export type TranslatedText = Record<Language, string>

export interface FeaturedCar {
  id: string
  name: string
  price: string
  year: number
  km: string
  fuel: TranslatedText
  transmission: TranslatedText
  image: string
  featured: boolean
  status?: "disponivel" | "reservado" | "vendido"

  images: string[]

  description: TranslatedText

  specifications: {
    registration: string
    fuelType: TranslatedText
    motor: TranslatedText
    category: TranslatedText
    seats: number
    color: TranslatedText
    doors: number
    origin: TranslatedText
  }

  equipment: TranslatedText[]

  technicalData: {
    weight: TranslatedText
    engine: TranslatedText
    power: TranslatedText
    torque: TranslatedText
    acceleration: TranslatedText
    topSpeed: TranslatedText
    consumption: TranslatedText
    emissions: TranslatedText
    dimensions: {
      length: TranslatedText
      width: TranslatedText
      height: TranslatedText
      wheelbase: TranslatedText
      trunkCapacity: TranslatedText
    }
  }

  details: {
    financing: boolean
    warranty: TranslatedText
    serviceHistory: TranslatedText
  }
}

const toConfirm: TranslatedText = {
  pt: "A confirmar",
  en: "To be confirmed",
  es: "Por confirmar",
  fr: "À confirmer",
  de: "Zu bestätigen",
}

const diesel: TranslatedText = {
  pt: "Diesel",
  en: "Diesel",
  es: "Diésel",
  fr: "Diesel",
  de: "Diesel",
}

const automatic: TranslatedText = {
  pt: "Automática",
  en: "Automatic",
  es: "Automática",
  fr: "Automatique",
  de: "Automatik",
}

const imported: TranslatedText = {
  pt: "Importado",
  en: "Imported",
  es: "Importado",
  fr: "Importé",
  de: "Importiert",
}

export const featuredCars: FeaturedCar[] = [
  {
    id: "bmw-serie-1-116d-2021",
    name: "BMW Série 1 116d",
    price: "21.900€",
    year: 2021,
    km: "136.000 km",
    fuel: diesel,
    transmission: automatic,
    image: "/bmw-serie-1-116d-1.jpg",
    featured: true,
    status: "disponivel",

    images: [
      "/bmw-serie-1-116d-1.jpg",
      "/bmw-serie-1-116d-3.jpg",
      "/bmw-serie-1-116d-2.jpg",
      "/bmw-serie-1-116d-4.jpg",
      "/bmw-serie-1-116d-5.jpg",
      "/bmw-serie-1-116d-6.jpg",
      "/bmw-serie-1-116d-7.jpg",
    ],

    description: {
      pt: "BMW Série 1 116d automático, de 5 portas, com motor diesel 1.5 de 116 cv. Viatura compacta, elegante e eficiente, ideal para utilização diária, oferecendo conforto, tecnologia e a qualidade típica da BMW.",
      en: "BMW 1 Series 116d automatic, 5-door hatchback, with a 1.5 diesel engine producing 116 hp. A compact, elegant and efficient vehicle, ideal for daily use, offering comfort, technology and BMW build quality.",
      es: "BMW Serie 1 116d automático, de 5 puertas, con motor diésel 1.5 de 116 cv. Vehículo compacto, elegante y eficiente, ideal para el uso diario, con confort, tecnología y la calidad típica de BMW.",
      fr: "BMW Série 1 116d automatique, 5 portes, avec moteur diesel 1.5 de 116 ch. Véhicule compact, élégant et efficient, idéal pour un usage quotidien, offrant confort, technologie et qualité BMW.",
      de: "BMW 1er 116d Automatik, 5-Türer, mit 1,5-Liter-Dieselmotor und 116 PS. Ein kompakter, eleganter und effizienter Wagen, ideal für den Alltag, mit Komfort, Technologie und BMW-Qualität.",
    },

    specifications: {
      registration: "03/11/2021",
      fuelType: diesel,
      motor: {
        pt: "1.5L 3 Cilindros",
        en: "1.5L 3-cylinder",
        es: "1.5L 3 cilindros",
        fr: "1.5L 3 cylindres",
        de: "1,5L 3-Zylinder",
      },
      category: {
        pt: "Hatchback",
        en: "Hatchback",
        es: "Hatchback",
        fr: "Berline compacte",
        de: "Schrägheck",
      },
      seats: 5,
      color: {
        pt: "Azul",
        en: "Blue",
        es: "Azul",
        fr: "Bleu",
        de: "Blau",
      },
      doors: 5,
      origin: imported,
    },

    equipment: [
      {
        pt: "Ajuda ao estacionamento",
        en: "Parking assistance",
        es: "Ayuda al aparcamiento",
        fr: "Aide au stationnement",
        de: "Einparkhilfe",
      },
      {
        pt: "Assistente de estacionamento automático",
        en: "Automatic parking assistant",
        es: "Asistente de aparcamiento automático",
        fr: "Assistant de stationnement automatique",
        de: "Automatischer Parkassistent",
      },
      {
        pt: "Sensores de estacionamento dianteiros e traseiros",
        en: "Front and rear parking sensors",
        es: "Sensores de aparcamiento delanteros y traseros",
        fr: "Capteurs de stationnement avant et arrière",
        de: "Einparksensoren vorne und hinten",
      },
      {
        pt: "Ar condicionado automático",
        en: "Automatic air conditioning",
        es: "Aire acondicionado automático",
        fr: "Climatisation automatique",
        de: "Automatische Klimaanlage",
      },
      {
        pt: "Estofos em tecido",
        en: "Fabric upholstery",
        es: "Tapicería de tela",
        fr: "Sellerie en tissu",
        de: "Stoffpolsterung",
      },
      {
        pt: "Isofix",
        en: "Isofix",
        es: "Isofix",
        fr: "Isofix",
        de: "Isofix",
      },
      {
        pt: "Espelho interior com regulação automática da intensidade da luz",
        en: "Auto-dimming interior mirror",
        es: "Espejo interior con regulación automática de luz",
        fr: "Rétroviseur intérieur anti-éblouissement automatique",
        de: "Automatisch abblendender Innenspiegel",
      },
      {
        pt: "Espelhos elétricos ajustáveis e aquecidos",
        en: "Electrically adjustable and heated mirrors",
        es: "Retrovisores eléctricos ajustables y calefactados",
        fr: "Rétroviseurs électriques réglables et chauffants",
        de: "Elektrisch verstellbare und beheizte Spiegel",
      },
      {
        pt: "Android Auto & Apple CarPlay",
        en: "Android Auto & Apple CarPlay",
        es: "Android Auto & Apple CarPlay",
        fr: "Android Auto & Apple CarPlay",
        de: "Android Auto & Apple CarPlay",
      },
      {
        pt: "Bluetooth",
        en: "Bluetooth",
        es: "Bluetooth",
        fr: "Bluetooth",
        de: "Bluetooth",
      },
      {
        pt: "Sistema de navegação",
        en: "Navigation system",
        es: "Sistema de navegación",
        fr: "Système de navigation",
        de: "Navigationssystem",
      },
      {
        pt: "Faróis LED",
        en: "LED headlights",
        es: "Faros LED",
        fr: "Phares LED",
        de: "LED-Scheinwerfer",
      },
      {
        pt: "Faróis de nevoeiro",
        en: "Fog lights",
        es: "Faros antiniebla",
        fr: "Feux antibrouillard",
        de: "Nebelscheinwerfer",
      },
      {
        pt: "Luzes de circulação diurna",
        en: "Daytime running lights",
        es: "Luces de circulación diurna",
        fr: "Feux de jour",
        de: "Tagfahrlicht",
      },
      {
        pt: "Sensor de luz",
        en: "Light sensor",
        es: "Sensor de luz",
        fr: "Capteur de luminosité",
        de: "Lichtsensor",
      },
      {
        pt: "Arranque do motor sem chave",
        en: "Keyless engine start",
        es: "Arranque del motor sin llave",
        fr: "Démarrage sans clé",
        de: "Schlüsselloser Motorstart",
      },
      {
        pt: "Sistema de controlo da pressão dos pneus",
        en: "Tyre pressure monitoring system",
        es: "Sistema de control de presión de neumáticos",
        fr: "Système de contrôle de la pression des pneus",
        de: "Reifendruckkontrollsystem",
      },
      {
        pt: "Airbags",
        en: "Airbags",
        es: "Airbags",
        fr: "Airbags",
        de: "Airbags",
      },
      {
        pt: "Assistente de controlo da faixa de rodagem",
        en: "Lane keeping assistant",
        es: "Asistente de mantenimiento de carril",
        fr: "Assistant de maintien de voie",
        de: "Spurhalteassistent",
      },
      {
        pt: "Chamada de emergência",
        en: "Emergency call",
        es: "Llamada de emergencia",
        fr: "Appel d’urgence",
        de: "Notrufsystem",
      },
      {
        pt: "Cockpit digital",
        en: "Digital cockpit",
        es: "Cockpit digital",
        fr: "Cockpit numérique",
        de: "Digitales Cockpit",
      },
      {
        pt: "Controlo de cruzeiro adaptativo",
        en: "Adaptive cruise control",
        es: "Control de crucero adaptativo",
        fr: "Régulateur de vitesse adaptatif",
        de: "Adaptiver Tempomat",
      },
      {
        pt: "Sensor de chuva",
        en: "Rain sensor",
        es: "Sensor de lluvia",
        fr: "Capteur de pluie",
        de: "Regensensor",
      },
      {
        pt: "Sistema de alarme",
        en: "Alarm system",
        es: "Sistema de alarma",
        fr: "Système d’alarme",
        de: "Alarmanlage",
      },
      {
        pt: "Vidros elétricos dianteiros",
        en: "Front electric windows",
        es: "Elevalunas eléctricos delanteros",
        fr: "Vitres électriques avant",
        de: "Elektrische Fensterheber vorne",
      },
      {
        pt: "Volante em pele multifunções",
        en: "Multifunction leather steering wheel",
        es: "Volante de cuero multifunción",
        fr: "Volant multifonction en cuir",
        de: "Multifunktions-Lederlenkrad",
      },
      {
        pt: "Sistema Start & Stop",
        en: "Start & Stop system",
        es: "Sistema Start & Stop",
        fr: "Système Start & Stop",
        de: "Start-Stopp-System",
      },
    ],

    technicalData: {
      weight: {
        pt: "1.385 kg",
        en: "1,385 kg",
        es: "1.385 kg",
        fr: "1 385 kg",
        de: "1.385 kg",
      },
      engine: {
        pt: "1.5L Turbo Diesel",
        en: "1.5L turbo diesel",
        es: "1.5L turbo diésel",
        fr: "1.5L turbo diesel",
        de: "1,5L Turbodiesel",
      },
      power: {
        pt: "116 cv (85 kW)",
        en: "116 hp (85 kW)",
        es: "116 cv (85 kW)",
        fr: "116 ch (85 kW)",
        de: "116 PS (85 kW)",
      },
      torque: {
        pt: "270 Nm",
        en: "270 Nm",
        es: "270 Nm",
        fr: "270 Nm",
        de: "270 Nm",
      },
      acceleration: {
        pt: "10,3 segundos (0-100 km/h)",
        en: "10.3 seconds (0-100 km/h)",
        es: "10,3 segundos (0-100 km/h)",
        fr: "10,3 secondes (0-100 km/h)",
        de: "10,3 Sekunden (0-100 km/h)",
      },
      topSpeed: {
        pt: "200 km/h",
        en: "200 km/h",
        es: "200 km/h",
        fr: "200 km/h",
        de: "200 km/h",
      },
      consumption: {
        pt: "4.2-5.0 L/100km",
        en: "4.2-5.0 L/100km",
        es: "4,2-5,0 L/100km",
        fr: "4,2-5,0 L/100km",
        de: "4,2-5,0 L/100km",
      },
      emissions: {
        pt: "99 g/km CO₂",
        en: "99 g/km CO₂",
        es: "99 g/km CO₂",
        fr: "99 g/km CO₂",
        de: "99 g/km CO₂",
      },
      dimensions: {
        length: {
          pt: "4.319 mm",
          en: "4,319 mm",
          es: "4.319 mm",
          fr: "4 319 mm",
          de: "4.319 mm",
        },
        width: {
          pt: "1.799 mm",
          en: "1,799 mm",
          es: "1.799 mm",
          fr: "1 799 mm",
          de: "1.799 mm",
        },
        height: {
          pt: "1.434 mm",
          en: "1,434 mm",
          es: "1.434 mm",
          fr: "1 434 mm",
          de: "1.434 mm",
        },
        wheelbase: {
          pt: "2.670 mm",
          en: "2,670 mm",
          es: "2.670 mm",
          fr: "2 670 mm",
          de: "2.670 mm",
        },
        trunkCapacity: {
          pt: "380 L",
          en: "380 L",
          es: "380 L",
          fr: "380 L",
          de: "380 L",
        },
      },
    },

    details: {
      financing: true,
      warranty: {
        pt: "18 meses",
        en: "18 months",
        es: "18 meses",
        fr: "18 mois",
        de: "18 Monate",
      },
      serviceHistory: {
        pt: "Revisões & Histórico Completo",
        en: "Full Service & Maintenance History",
        es: "Historial Completo de Revisiones y Mantenimiento",
        fr: "Historique Complet d’Entretien et de Révisions",
        de: "Vollständige Service- und Wartungshistorie",
      },
    },
  },
  {
    id: "bmw-serie-4-420d-gran-coupe-2015",
    name: "BMW Série 4 420d Coupé Auto",
    price: "A confirmar",
    year: 2015,
    km: "182.000 km", 
    fuel: diesel,
    transmission: automatic,
    image: "/bmw-serie-4-420d-preto.png",
    featured: true,
    status: "disponivel",

    images: [
      "/bmw-serie-4-420d-preto.png",
      "/bmw-serie-4-420d-preto.png",
      "/bmw-serie-4-420d-preto.png",
    ],

    description: {
      pt: "BMW Série 4 420d Coupé automático, de 5 portas, com motor diesel 2.0 de 184 cv. Viatura elegante, desportiva e confortável, com boa performance, consumos equilibrados e qualidade premium BMW.",
      en: "BMW 4 Series 420d Coupé automatic, 5-door, with a 2.0 diesel engine producing 184 hp. An elegant, sporty and comfortable vehicle with strong performance, balanced fuel consumption and BMW premium quality.",
      es: "BMW Serie 4 420d Coupé automático, de 5 puertas, con motor diésel 2.0 de 184 cv. Vehículo elegante, deportivo y cómodo, con buen rendimiento y calidad premium BMW.",
      fr: "BMW Série 4 420d Coupé automatique, 5 portes, avec moteur diesel 2.0 de 184 ch. Véhicule élégant, sportif et confortable, offrant de bonnes performances et la qualité premium BMW.",
      de: "BMW 4er 420d Coupé Automatik, 5-Türer, mit 2,0-Liter-Dieselmotor und 184 PS. Ein elegantes, sportliches und komfortables Fahrzeug mit BMW Premium-Qualität.",
    },

    specifications: {
      registration: "09/01/2015",
      fuelType: diesel,
      motor: {
        pt: "2.0L Diesel",
        en: "2.0L diesel",
        es: "2.0L diésel",
        fr: "2.0L diesel",
        de: "2,0L Diesel",
      },
      category: {
        pt: "Coupé",
        en: "Coupe",
        es: "Coupé",
        fr: "Coupé",
        de: "Coupé",
      },
      seats: 5,
      color: {
        pt: "Preto",
        en: "Black",
        es: "Negro",
        fr: "Noir",
        de: "Schwarz",
      },
      doors: 5,
      origin: imported,
    },

    equipment: [
      {
        pt: "Sensores traseiros de estacionamento",
        en: "Rear parking sensors",
        es: "Sensores traseros de aparcamiento",
        fr: "Capteurs de stationnement arrière",
        de: "Parksensoren hinten",
      },
      {
        pt: "Ar condicionado automático",
        en: "Automatic air conditioning",
        es: "Aire acondicionado automático",
        fr: "Climatisation automatique",
        de: "Automatische Klimaanlage",
      },
      {
        pt: "Estofos em tecido",
        en: "Fabric upholstery",
        es: "Tapicería de tela",
        fr: "Sellerie en tissu",
        de: "Stoffpolsterung",
      },
      {
        pt: "Rádio DAB",
        en: "DAB radio",
        es: "Radio DAB",
        fr: "Radio DAB",
        de: "DAB-Radio",
      },
      {
        pt: "Faróis de nevoeiro",
        en: "Fog lights",
        es: "Faros antiniebla",
        fr: "Feux antibrouillard",
        de: "Nebelscheinwerfer",
      },
      {
        pt: "Faróis LED",
        en: "LED headlights",
        es: "Faros LED",
        fr: "Phares LED",
        de: "LED-Scheinwerfer",
      },
      {
        pt: "Jantes de liga leve",
        en: "Alloy wheels",
        es: "Llantas de aleación",
        fr: "Jantes en alliage",
        de: "Leichtmetallfelgen",
      },
      {
        pt: "Airbags",
        en: "Airbags",
        es: "Airbags",
        fr: "Airbags",
        de: "Airbags",
      },
      {
        pt: "Pintura metálica",
        en: "Metallic paint",
        es: "Pintura metalizada",
        fr: "Peinture métallisée",
        de: "Metallic-Lackierung",
      },
    ],

    technicalData: {
      weight: toConfirm,
      engine: {
        pt: "1.995 Turbo Diesel",
        en: "1,995 turbo diesel",
        es: "1.995 turbo diésel",
        fr: "1 995 turbo diesel",
        de: "1.995 Turbodiesel",
      },
      power: {
        pt: "184 cv (135 kW)",
        en: "184 hp (135 kW)",
        es: "184 cv (135 kW)",
        fr: "184 ch (135 kW)",
        de: "184 PS (135 kW)",
      },
      torque: toConfirm,
      acceleration: toConfirm,
      topSpeed: toConfirm,
      consumption: {
        pt: "A confirmar L/100km",
        en: "To be confirmed L/100km",
        es: "Por confirmar L/100km",
        fr: "À confirmer L/100km",
        de: "Zu bestätigen L/100km",
      },
      emissions: toConfirm,
      dimensions: {
        length: toConfirm,
        width: toConfirm,
        height: toConfirm,
        wheelbase: toConfirm,
        trunkCapacity: toConfirm,
      },
    },

    details: {
      financing: true,
      warranty: toConfirm,
      serviceHistory: toConfirm,
    },
  },
]