"use client"

import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-12 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-block">
              <h2 className="text-5xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
                {t.about.title}
              </h2>
              <div className="mt-4 h-1 w-full bg-primary"></div>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="h-full rounded-xl border border-border bg-card p-8">
                <p className="text-lg font-light leading-relaxed text-foreground">{t.about.description1}</p>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="h-full rounded-xl border border-border bg-card p-8">
                <p className="text-lg font-light leading-relaxed text-foreground">{t.about.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
