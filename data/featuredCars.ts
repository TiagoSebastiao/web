export interface FeaturedCar {
  id: string
  name: string
  price: string
  year: number
  km: string
  fuel: string
  transmission: string
  image: string
  featured: boolean // Indicates if the car is featured on the homepage 
  status?: "disponivel" | "reservado" | "vendido" //status: "reservado" "vendido" ou "disponivel"
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
    serviceHistory: string
  }
}

export const featuredCars: FeaturedCar[] = [
  //bmw serie 1 116d 2021
  {
  id: "bmw-serie-1-116d-2021",
  name: "BMW Série 1 116d Auto",
  price: "21.900€",
  year: 2021,
  km: "136.000 km",
  fuel: "Diesel",
  transmission: "Automática",
  image: "/bmw-serie-1-116d-azul.png",
  featured: true,
  status: "disponivel",

  images: [
    "/bmw-serie-1-116d-azul.png",
    "/bmw-serie-1-116d-azul.png",
    "/bmw-serie-1-116d-azul.png",
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
    fuelType: "Diesel",
    motor: "1.5L 3 Cilindros",
    category: "Hatchback",
    seats: 5,
    color: "Azul",
    doors: 5,
    origin: "Importado",
  },

  equipment: [
  "Ajuda ao estacionamento",
  "Assistente de estacionamento automático",
  "Sensores de estacionamento dianteiros e traseiros",
  "Ar condicionado automático",
  "Estofos em tecido",
  "Isofix",
  "Espelho interior com regulação automática da intensidade da luz",
  "Espelhos elétricos ajustáveis e aquecidos",
  "Android Auto & Apple CarPlay",
  "Bluetooth",
  "Sistema de navegação",
  "Faróis LED",
  "Faróis de nevoeiro",
  "Luzes de circulação diurna",
  "Sensor de luz",
  "Arranque do motor sem chave",
  "Sistema de controlo da pressão dos pneus",
  "Airbags",
  "Assistente de controlo da faixa de rodagem",
  "Chamada de emergência",
  "Cockpit digital",
  "Controlo de cruzeiro adaptativo",
  "Sensor de chuva",
  "Sistema de alarme",
  "Vidros elétricos dianteiros",
  "Volante em pele multifunções",
  "Sistema Start & Stop",
  ],

  technicalData: {
    weight: "1.385 kg",
    engine: "1.5L Turbo Diesel",
    power: "116 cv (85 kW)",
    torque: "270 Nm",
    acceleration: "10,3 segundos (0-100 km/h)",
    topSpeed: "200 km/h",
    consumption: "4.2-5.0 L/100km",
    emissions: "99 g/km CO₂",
    dimensions: {
      length: "4.319 mm",
      width: "1.799 mm",
      height: "1.434 mm",
      wheelbase: "2.670 mm",
      trunkCapacity: "380 L",
    },
  },

  details: {
    financing: true,
    warranty: "A confirmar",
    serviceHistory: "A confirmar",
  },
  },

  //bmw serie 4 420d gran coupe 2015
  {
  id: "bmw-serie-4-420d-gran-coupe-2015",
  name: "BMW Série 4 420d Gran Coupé Auto",
  price: "A confirmar",
  year: 2015,
  km: "182.000 km",
  fuel: "Gasóleo",
  transmission: "Automática",
  image: "/bmw-serie-4-420d-preto.png",
  featured: true,
  status: "disponivel",

  images: [
    "/bmw-serie-4-420d-preto.png",
    "/bmw-serie-4-420d-preto.png",
    "/bmw-serie-4-420d-preto.png",
  ],

  description: {
    pt: "BMW Série 4 420d Gran Coupé automático, de 5 portas, com motor diesel 2.0 de 184 cv. Viatura elegante, desportiva e confortável, com boa performance, consumos equilibrados e qualidade premium BMW.",
    en: "BMW 4 Series 420d Gran Coupé automatic, 5-door, with a 2.0 diesel engine producing 184 hp. An elegant, sporty and comfortable vehicle with strong performance, balanced fuel consumption and BMW premium quality.",
    es: "BMW Serie 4 420d Gran Coupé automático, de 5 puertas, con motor diésel 2.0 de 184 cv. Vehículo elegante, deportivo y cómodo, con buen rendimiento y calidad premium BMW.",
    fr: "BMW Série 4 420d Gran Coupé automatique, 5 portes, avec moteur diesel 2.0 de 184 ch. Véhicule élégant, sportif et confortable, offrant de bonnes performances et la qualité premium BMW.",
    de: "BMW 4er 420d Gran Coupé Automatik, 5-Türer, mit 2,0-Liter-Dieselmotor und 184 PS. Ein elegantes, sportliches und komfortables Fahrzeug mit BMW Premium-Qualität.",
  },

  specifications: {
    registration: "09/01/2015",
    fuelType: "Gasóleo",
    motor: "2.0L Diesel",
    category: "Coupé",
    seats: 5,
    color: "Preto",
    doors: 5,
  },

  equipment: [
    "Sensores traseiros de estacionamento",
    "Ar condicionado automático",
    "Estofos em tecido",
    "Rádio DAB",
    "Faróis de nevoeiro",
    "Faróis LED",
    "Jantes de liga leve",
    "Airbags",
    "Pintura metálica",
  ],

  technicalData: {
    engine: "1.995 cc",
    power: "184 cv (135 kW)",
    fuel: "Gasóleo",
    transmission: "Automática",
    emissions: "0 g/km CO₂ (NEDC)",
    acceleration: "A confirmar",
    topSpeed: "A confirmar",
    consumption: "A confirmar",
    dimensions: {
      length: "A confirmar",
      width: "A confirmar",
      height: "A confirmar",
      wheelbase: "A confirmar",
      trunkCapacity: "A confirmar",
    },
  },

  details: {
    financing: true,
    warranty: "A confirmar",
    serviceHistory: "A confirmar",
  },
}
]
