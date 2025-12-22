export interface FeaturedCar {
  id: string
  name: string
  price: string
  year: number
  km: string
  fuel: string
  transmission: string
  image: string
  featured: boolean
  // Additional details for detail page
  images: string[]
  description: {
    pt: string
    en: string
    es: string
    fr: string
    de: string
  }
  specifications: {
    registration: string
    fuelType: string
    motor: string
    category: string
    seats: number
    color: string
    doors: number
    origin: string
  }
  equipment: string[]
  technicalData: {
    weight: string
    engine: string
    power: string
    torque: string
    acceleration: string
    topSpeed: string
    consumption: string
    emissions: string
    dimensions: {
      length: string
      width: string
      height: string
      wheelbase: string
      trunkCapacity: string
    }
  }
  details: {
    financing: boolean
    warranty: string
    ownerHistory: string
    serviceHistory: string
  }
}

export const featuredCars: FeaturedCar[] = [
  {
    id: "1",
    name: "Mercedes-Benz C 220 AMG Line",
    price: "45.900€",
    year: 2021,
    km: "45.000 km",
    fuel: "Diesel",
    transmission: "Automática",
    image: "/luxury-mercedes-benz-c-class-amg-black.jpg",
    featured: true,
    images: [
      "/luxury-mercedes-benz-c-class-amg-black.jpg",
      "/mercedes-c-class-interior.png",
      "/mercedes-c-class-dashboard.jpg",
      "/mercedes-c-class-rear-view.jpg",
      "/mercedes-c-class-side-profile.jpg",
    ],
    description: {
      pt: "Mercedes-Benz C 220 AMG Line em estado impecável. Este modelo combina elegância, performance e tecnologia de ponta. Equipado com o pack AMG completo, oferece uma experiência de condução premium.",
      en: "Mercedes-Benz C 220 AMG Line in impeccable condition. This model combines elegance, performance and cutting-edge technology. Equipped with the full AMG pack, it offers a premium driving experience.",
      es: "Mercedes-Benz C 220 AMG Line en estado impecable. Este modelo combina elegancia, rendimiento y tecnología de vanguardia. Equipado con el pack AMG completo, ofrece una experiencia de conducción premium.",
      fr: "Mercedes-Benz C 220 AMG Line en état impeccable. Ce modèle allie élégance, performance et technologie de pointe. Équipé du pack AMG complet, il offre une expérience de conduite premium.",
      de: "Mercedes-Benz C 220 AMG Line in einwandfreiem Zustand. Dieses Modell vereint Eleganz, Leistung und modernste Technologie. Ausgestattet mit dem kompletten AMG-Paket bietet es ein erstklassiges Fahrerlebnis.",
    },
    specifications: {
      registration: "08/2021",
      fuelType: "Diesel",
      motor: "2.0L 4 Cilindros",
      category: "Berlina",
      seats: 5,
      color: "Preto Obsidiana",
      doors: 4,
      origin: "Nacional",
    },
    equipment: [
      "Apple CarPlay / Android Auto",
      "Bluetooth",
      "Pack AMG",
      "AMG Line Exterior",
      "AMG Line Interior",
      "Cruise Control Adaptativo",
      "Sistema de Navegação",
      "Câmara de Estacionamento 360°",
      "Sensores de Estacionamento",
      "Bancos em Pele",
      "Bancos Aquecidos",
      "Ar Condicionado Automático",
      "Faróis LED",
      "Jantes AMG 19 polegadas",
    ],
    technicalData: {
      weight: "1.650 kg",
      engine: "2.0L Turbo Diesel",
      power: "194 cv (143 kW)",
      torque: "400 Nm",
      acceleration: "7,3 segundos (0-100 km/h)",
      topSpeed: "240 km/h",
      consumption: "5,2 L/100km",
      emissions: "137 g/km CO₂",
      dimensions: {
        length: "4.751 mm",
        width: "1.820 mm",
        height: "1.437 mm",
        wheelbase: "2.840 mm",
        trunkCapacity: "455 L",
      },
    },
    details: {
      financing: true,
      warranty: "24 meses de garantia",
      ownerHistory: "1 proprietário",
      serviceHistory: "Livro de revisões completo",
    },
  },
  {
    id: "2",
    name: "BMW X5 xDrive40d M Sport",
    price: "67.500€",
    year: 2022,
    km: "28.000 km",
    fuel: "Diesel",
    transmission: "Automática",
    image: "/luxury-bmw-x5-m-sport-grey.jpg",
    featured: true,
    images: [
      "/luxury-bmw-x5-m-sport-grey.jpg",
      "/bmw-x5-interior-luxury.jpg",
      "/bmw-x5-dashboard-technology.jpg",
      "/bmw-x5-rear-seats.jpg",
      "/bmw-x5-m-sport-wheels.jpg",
    ],
    description: {
      pt: "BMW X5 xDrive40d M Sport, o SUV premium por excelência. Com um design imponente e tecnologia de última geração, oferece conforto e performance incomparáveis.",
      en: "BMW X5 xDrive40d M Sport, the ultimate premium SUV. With an imposing design and state-of-the-art technology, it offers unparalleled comfort and performance.",
      es: "BMW X5 xDrive40d M Sport, el SUV premium por excelencia. Con un diseño imponente y tecnología de última generación, ofrece confort y rendimiento incomparables.",
      fr: "BMW X5 xDrive40d M Sport, le SUV premium par excellence. Avec un design imposant et une technologie de pointe, il offre un confort et des performances inégalés.",
      de: "BMW X5 xDrive40d M Sport, der ultimative Premium-SUV. Mit imposantem Design und modernster Technologie bietet er unvergleichlichen Komfort und Leistung.",
    },
    specifications: {
      registration: "03/2022",
      fuelType: "Diesel",
      motor: "3.0L 6 Cilindros",
      category: "SUV",
      seats: 5,
      color: "Cinzento Sophistograu",
      doors: 5,
      origin: "Importado",
    },
    equipment: [
      "Apple CarPlay / Android Auto",
      "Bluetooth",
      "Pack M Sport",
      "M Sport Exterior",
      "M Sport Interior",
      "Head-Up Display",
      "Sistema de Navegação Professional",
      "Câmara 360°",
      "Sensores de Estacionamento",
      "Bancos em Pele Vernasca",
      "Bancos Aquecidos e Ventilados",
      "Ar Condicionado 4 Zonas",
      "Faróis LED Adaptativos",
      "Jantes M Sport 21 polegadas",
      "Teto Panorâmico",
    ],
    technicalData: {
      weight: "2.145 kg",
      engine: "3.0L Turbo Diesel",
      power: "340 cv (250 kW)",
      torque: "700 Nm",
      acceleration: "5,5 segundos (0-100 km/h)",
      topSpeed: "250 km/h (limitada)",
      consumption: "6,8 L/100km",
      emissions: "179 g/km CO₂",
      dimensions: {
        length: "4.922 mm",
        width: "2.004 mm",
        height: "1.745 mm",
        wheelbase: "2.975 mm",
        trunkCapacity: "650 L",
      },
    },
    details: {
      financing: true,
      warranty: "36 meses de garantia",
      ownerHistory: "1 proprietário",
      serviceHistory: "Livro de revisões completo na rede oficial BMW",
    },
  },
  {
    id: "3",
    name: "Audi A6 Avant 50 TDI S Line",
    price: "52.900€",
    year: 2021,
    km: "38.500 km",
    fuel: "Diesel",
    transmission: "Automática",
    image: "/luxury-audi-a6-avant-s-line-white.jpg",
    featured: true,
    images: [
      "/luxury-audi-a6-avant-s-line-white.jpg",
      "/audi-a6-avant-interior.jpg",
      "/audi-a6-avant-virtual-cockpit.jpg",
      "/audi-a6-avant-cargo-space.jpg",
      "/audi-a6-avant-s-line-wheels.jpg",
    ],
    description: {
      pt: "Audi A6 Avant 50 TDI S Line, a perfeita combinação entre elegância e versatilidade. Station wagon premium com espaço generoso e equipamento de topo.",
      en: "Audi A6 Avant 50 TDI S Line, the perfect combination of elegance and versatility. Premium station wagon with generous space and top equipment.",
      es: "Audi A6 Avant 50 TDI S Line, la combinación perfecta entre elegancia y versatilidad. Station wagon premium con espacio generoso y equipamiento de primera.",
      fr: "Audi A6 Avant 50 TDI S Line, la combinaison parfaite entre élégance et polyvalence. Break premium avec un espace généreux et un équipement haut de gamme.",
      de: "Audi A6 Avant 50 TDI S Line, die perfekte Kombination aus Eleganz und Vielseitigkeit. Premium-Kombi mit großzügigem Platzangebot und Top-Ausstattung.",
    },
    specifications: {
      registration: "06/2021",
      fuelType: "Diesel",
      motor: "3.0L V6",
      category: "Station Wagon",
      seats: 5,
      color: "Branco Glaciar",
      doors: 5,
      origin: "Nacional",
    },
    equipment: [
      "Apple CarPlay / Android Auto",
      "Bluetooth",
      "Pack S Line",
      "S Line Exterior",
      "S Line Interior",
      "Audi Virtual Cockpit Plus",
      "MMI Navigation Plus",
      "Câmara de Visão Traseira",
      "Sensores de Estacionamento",
      "Bancos em Pele Milano",
      "Bancos Aquecidos",
      "Ar Condicionado Automático 3 Zonas",
      "Matrix LED",
      "Jantes S Line 20 polegadas",
      "Teto Panorâmico",
    ],
    technicalData: {
      weight: "1.880 kg",
      engine: "3.0L V6 Turbo Diesel",
      power: "286 cv (210 kW)",
      torque: "620 Nm",
      acceleration: "5,9 segundos (0-100 km/h)",
      topSpeed: "250 km/h (limitada)",
      consumption: "6,2 L/100km",
      emissions: "163 g/km CO₂",
      dimensions: {
        length: "4.939 mm",
        width: "1.886 mm",
        height: "1.465 mm",
        wheelbase: "2.924 mm",
        trunkCapacity: "565 L",
      },
    },
    details: {
      financing: true,
      warranty: "24 meses de garantia",
      ownerHistory: "1 proprietário",
      serviceHistory: "Histórico de manutenção completo",
    },
  },
]
