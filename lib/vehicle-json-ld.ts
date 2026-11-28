import { siteConfig } from "@/config/site"
import { vehicleName, type Locale, type Vehicle } from "@/data/vehicles"
import { absoluteUrl, localizedPath } from "@/lib/seo"

/** Dados estruturados schema.org/Car para o Google. */
export function vehicleJsonLd(vehicle: Vehicle, locale: Locale) {
  const url = absoluteUrl(localizedPath(locale, `/veiculo/${vehicle.id}`))
  const availability = {
    available: "https://schema.org/InStock",
    reserved: "https://schema.org/LimitedAvailability",
    sold: "https://schema.org/SoldOut",
  }[vehicle.status]

  return {
    "@context": "https://schema.org",
    "@type": "Car",
    "@id": `${url}#vehicle`,
    name: vehicleName(vehicle),
    description: vehicle.description[locale],
    url,
    image: vehicle.images.map((image) => absoluteUrl(image)),
    brand: { "@type": "Brand", name: vehicle.make },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    dateVehicleFirstRegistered: vehicle.firstRegistration,
    mileageFromOdometer: { "@type": "QuantitativeValue", value: vehicle.mileageKm, unitCode: "KMT" },
    fuelType: vehicle.fuel,
    vehicleTransmission: vehicle.transmission,
    bodyType: vehicle.bodyType,
    numberOfDoors: vehicle.doors,
    seatingCapacity: vehicle.seats,
    vehicleEngine: {
      "@type": "EngineSpecification",
      engineDisplacement: { "@type": "QuantitativeValue", value: vehicle.engineCc, unitCode: "CMQ" },
      enginePower: { "@type": "QuantitativeValue", value: vehicle.powerHp, unitCode: "BHP" },
    },
    itemCondition: "https://schema.org/UsedCondition",
    // Sem preço não se publica "offers" (o Google considera inválido um preço vazio).
    ...(vehicle.price
      ? {
          offers: {
            "@type": "Offer",
            url,
            price: vehicle.price,
            priceCurrency: "EUR",
            availability,
            itemCondition: "https://schema.org/UsedCondition",
            // Entrega em todo o Portugal continental.
            eligibleRegion: { "@type": "Country", name: siteConfig.location.country },
            seller: { "@id": `${siteConfig.url}/#organization` },
          },
        }
      : {}),
  }
}

/**
 * Trilho de navegação (schema.org/BreadcrumbList): Início → viatura.
 * O Google pode mostrá-lo no resultado da pesquisa em vez do URL.
 */
export function vehicleBreadcrumbJsonLd(vehicle: Vehicle, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteConfig.name, item: absoluteUrl(localizedPath(locale, "/")) },
      {
        "@type": "ListItem",
        position: 2,
        name: `${vehicleName(vehicle)} ${vehicle.year}`,
        item: absoluteUrl(localizedPath(locale, `/veiculo/${vehicle.id}`)),
      },
    ],
  }
}
