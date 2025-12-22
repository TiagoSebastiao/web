"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Car, CreditCard, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      icon: Car,
      title: t.services.service1,
      description: t.services.service1desc,
      image: "/luxury-car-showroom.png",
    },
    {
      icon: CreditCard,
      title: t.services.service2,
      description: t.services.service2desc,
      image: "/car-financing-and-payment.jpg",
    },
    {
      icon: ShieldCheck,
      title: t.services.service3,
      description: t.services.service3desc,
      image: "/car-quality-inspection-warranty.jpg",
    },
  ]

  return (
    <section id="servicos" ref={ref} className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block">
            <h2 className="text-5xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
              {t.services.title}
            </h2>
            <div className="mt-3 h-1 w-full bg-primary"></div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-border bg-card transition-all duration-1000 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 opacity-50 transition-opacity group-hover:opacity-60">
                  <img src={service.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
                </div>
                <CardContent className="relative p-8 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:ring-primary">
                    <Icon className="h-10 w-10 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">{service.title}</h3>
                  <p className="font-medium text-foreground/80 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
