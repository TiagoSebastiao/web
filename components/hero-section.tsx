"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden bg-background pt-20">
      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div
          className={`mx-auto max-w-6xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-6xl font-black leading-tight text-balance text-foreground md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>
          <p className="mt-8 text-lg text-balance font-medium text-muted-foreground md:text-xl lg:text-2xl max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("anuncios")}
              className="group min-w-[200px] rounded-md bg-primary px-8 py-7 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
            >
              {t.hero.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group min-w-[200px] gap-2 rounded-md border-2 border-border bg-background px-8 py-7 text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
              onClick={() => window.open("https://wa.me/351912345678", "_blank")}
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              {t.hero.cta2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
