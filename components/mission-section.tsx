"use client"

import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MissionSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="inline-block text-5xl font-bold uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {t.mission.title}
            </h2>
            <div className="mt-4 h-1 bg-primary"></div>
            <div className="mt-8 space-y-5">
              <p className="text-lg font-light leading-relaxed text-foreground">{t.mission.description}</p>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-primary/20">
              <img
                src="/modern-luxury-car-dealership-showroom-interior-pre.jpg"
                alt="Stand Premium OTEN MOTORS"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
