import type { routing } from "@/i18n/routing"

export type Locale = (typeof routing.locales)[number]

/** Texto livre traduzido nos 5 idiomas. */
export type Localized = Record<Locale, string>

/*
 * Os valores abaixo são CHAVES. O texto que aparece no site (em cada idioma)
 * está em messages/<idioma>.json, dentro de "labels". Para acrescentar uma
 * opção nova (ex.: outra cor), junta a chave aqui e a tradução nos 5 ficheiros.
 */
export type FuelType = "diesel" | "petrol" | "hybrid" | "pluginHybrid" | "electric" | "lpg"
export type Transmission = "automatic" | "manual"
export type BodyType = "hatchback" | "coupe" | "sedan" | "estate" | "suv" | "convertible" | "van"
export type Origin = "national" | "imported"
export type Color = "black" | "blue" | "white" | "grey" | "silver" | "red" | "green" | "brown" | "beige"
export type VehicleStatus = "available" | "reserved" | "sold"

export type EquipmentKey =
  | "adaptiveCruiseControl"
  | "airbags"
  | "alarm"
  | "alloyWheels"
  | "alloyWheels18"
  | "androidAutoAppleCarplay"
  | "autoDimmingMirror"
  | "autoParkingAssist"
  | "automaticClimate"
  | "bluetooth"
  | "clothUpholstery"
  | "cruiseControl"
  | "dabRadio"
  | "daytimeRunningLights"
  | "digitalCockpit"
  | "drivingModes"
  | "dualZoneClimate"
  | "eCall"
  | "electricHeatedMirrors"
  | "electricWindowsFront"
  | "fogLights"
  | "idrive"
  | "isofix"
  | "keylessStart"
  | "laneKeepingAssist"
  | "leatherMultifunctionSteeringWheel"
  | "ledHeadlights"
  | "lightSensor"
  | "metallicPaint"
  | "mSportSteeringWheel"
  | "navigation"
  | "paddleShifters"
  | "pianoBlackTrim"
  | "parkingAssist"
  | "parkingSensorsFrontRear"
  | "parkingSensorsRear"
  | "rainSensor"
  | "remoteTrunkOpening"
  | "startStop"
  | "tyrePressureMonitoring"

export interface Vehicle {
  /** Usado no URL: /veiculo/<id>. Não mudar depois de publicado (perde-se o SEO). */
  id: string
  make: string
  model: string
  /** Versão / motorização, ex.: "116d". */
  version: string
  year: number
  /** Data da 1.ª matrícula, formato "AAAA-MM-DD". */
  firstRegistration: string
  mileageKm: number
  /** Preço em euros. `null` mostra "Preço sob consulta". */
  price: number | null
  status: VehicleStatus
  /** Se aparece na homepage. */
  featured: boolean
  /** Link do anúncio desta viatura no Standvirtual (opcional). */
  standvirtualUrl?: string

  fuel: FuelType
  transmission: Transmission
  bodyType: BodyType
  color: Color
  origin: Origin
  doors: number
  seats: number
  engineCc: number
  cylinders?: number
  powerHp: number
  powerKw: number

  /** Caminhos dentro de /public. A primeira imagem é a capa. */
  images: string[]
  /** Imagem 1200×630 para partilhas (WhatsApp, Facebook…). */
  ogImage: string

  description: Localized
  equipment: EquipmentKey[]

  /** Dados técnicos opcionais: os que ficarem vazios não aparecem no site. */
  specs?: {
    torqueNm?: number
    acceleration0to100s?: number
    topSpeedKmh?: number
    /** Consumo médio em L/100 km (um valor ou intervalo [mín, máx]). */
    consumptionL100km?: number | [number, number]
    co2gKm?: number
    weightKg?: number
    lengthMm?: number
    widthMm?: number
    heightMm?: number
    wheelbaseMm?: number
    trunkL?: number
  }

  /** Garantia em meses. */
  warrantyMonths?: number
  /** Nota curta sobre manutenção / histórico. */
  serviceHistory?: Localized
  /** IUC (imposto único de circulação) do ano já pago. */
  iucPaid?: boolean
  /** Data da última alteração desta ficha ("AAAA-MM-DD"), usada no sitemap para o Google. */
  updatedAt?: string
}
