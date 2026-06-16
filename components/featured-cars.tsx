"use client"

import { featuredCars } from "@/data/featuredCars"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Fuel, Gauge, Settings } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export function FeaturedCars() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const visibleCars = featuredCars.filter((car) => car.featured)

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

  const getStatusLabel = (status?: string) => {
    if (status === "reservado") return "Reservado"
    if (status === "vendido") return "Vendido"
    return null
  }

  if (visibleCars.length === 0) return null

  return (
    <section
      id="anuncios"
      ref={ref}
      className="scroll-mt-20 bg-muted/20 pb-12 pt-8 md:pb-14 md:pt-10"
    >
      <div className="container mx-auto px-4">
        <div
          className={`mb-8 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              {t.featured.title}
            </h2>

            <div className="mx-auto mt-3 h-1 w-3/4 rounded-full bg-primary" />
          </div>
        </div>

        <div
          className={
            visibleCars.length === 1
              ? "mx-auto grid max-w-sm gap-6"
              : visibleCars.length === 2
                ? "mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
                : "mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {visibleCars.map((car, index) => {
            const statusLabel = getStatusLabel(car.status)

            return (
              <Link
                key={car.id}
                href={`/veiculo/${car.id}`}
                className={`block transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-xl hover:shadow-primary/15">
                  <div className="relative aspect-[16/8] overflow-hidden bg-muted">
                    <img
                      src={car.image || "/placeholder.svg?height=400&width=600"}
                      alt={car.name}
                      className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

                    {statusLabel && (
                      <div className="absolute left-[-46px] top-5 z-20 w-[180px] -rotate-45 bg-zinc-500 py-1.5 text-center text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                        {statusLabel}
                      </div>
                    )}

                    <span className="absolute right-3 top-3 z-10 rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground shadow-lg">
                      {car.price}
                    </span>
                  </div>

                  <CardContent className="p-3">
                    <h3 className="min-h-[38px] text-sm font-black uppercase leading-tight tracking-tight text-foreground md:text-base">
                      {car.name}
                    </h3>

                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs md:text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-semibold text-foreground">
                          {car.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Gauge className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-semibold text-foreground">
                          {car.km}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Fuel className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-semibold text-foreground">
                          {translateFuel(car.fuel)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Settings className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-semibold text-foreground">
                          {translateTransmission(car.transmission)}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-3 pt-0">
                    <Button
                      className="
                        w-full
                        rounded-lg
                        bg-primary
                        py-3
                        text-xs
                        font-black
                        uppercase
                        tracking-wide
                        text-primary-foreground
                        transition-all
                        duration-300
                        ease-out
                        group-hover:scale-[1.03]
                        group-hover:bg-primary/90
                        group-hover:shadow-xl
                        group-hover:shadow-primary/50
                        active:scale-[0.98]
                        md:text-sm
                      "
                    >
                      <span className="flex items-center justify-center gap-2">
                        {t.featured.viewDetails}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}