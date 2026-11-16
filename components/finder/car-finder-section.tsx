import { useTranslations } from "next-intl"
import { getFeaturedVehicles, vehicleName } from "@/data/vehicles"
import { SectionHeading } from "@/components/ui/section-heading"
import { CarFinder, type FinderCar } from "@/components/finder/car-finder"

/** Secção "Que carro é para si?": 4 perguntas, sugestões do stock e pedido de procura personalizada. */
export function CarFinderSection() {
  const t = useTranslations("finder")
  const cars: FinderCar[] = getFeaturedVehicles()
    .filter((vehicle) => vehicle.status === "available")
    .map((vehicle) => ({
      id: vehicle.id,
      name: vehicleName(vehicle),
      year: vehicle.year,
      mileageKm: vehicle.mileageKm,
      price: vehicle.price,
      fuel: vehicle.fuel,
      transmission: vehicle.transmission,
      image: vehicle.images[0],
    }))

  return (
    <section id="encontrar" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
        <div data-reveal>
          <CarFinder cars={cars} />
        </div>
      </div>
    </section>
  )
}
