"use client"

import { featuredCars } from "@/data/featuredCars"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Fuel, Gauge, Settings } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export function FeaturedCars() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const translateFuel = (fuel: string) => {
    const fuelMap: { [key: string]: string } = {
      Diesel: t.featured.diesel,
      Gasolina: t.featured.gasoline,
      Elétrico: t.featured.electric,
      Híbrido: t.featured.hybrid,
    }
    return fuelMap[fuel] || fuel
  }

  const translateTransmission = (transmission: string) => {
    const transMap: { [key: string]: string } = {
      Automática: t.featured.automatic,
      Manual: t.featured.manual,
    }
    return transMap[transmission] || transmission
  }

  return (
    <section id="anuncios" ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`mb-14 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block">
            <h2 className="text-5xl font-black uppercase tracking-tight text-foreground md:text-6xl">
              {t.featured.title}
            </h2>
            <div className="mt-3 h-1 w-full bg-primary"></div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car, index) => (
            <Card
              key={car.id}
              className={`group overflow-hidden rounded-lg border-2 border-border bg-card shadow-lg transition-all duration-1000 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={car.image || "/placeholder.svg?height=400&width=600"}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground leading-tight">
                    {car.name}
                  </h3>
                  <span className="shrink-0 rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground shadow-md">
                    {car.price}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{car.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{car.km}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{translateFuel(car.fuel)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{translateTransmission(car.transmission)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/veiculo/${car.id}`} className="w-full">
                  <Button className="w-full rounded-lg bg-primary py-6 text-base font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-lg">
                    {t.featured.viewDetails}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
