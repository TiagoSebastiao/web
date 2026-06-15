"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

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
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-car.png"
          alt="Luxury Car"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Gradient Effects */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-20">
        <div
          className={`mx-auto max-w-6xl text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Title */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-3xl text-lg font-medium text-gray-300 md:text-xl lg:text-2xl">
            {t.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("anuncios")}
              className="group min-w-[220px] rounded-md bg-primary px-8 py-7 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
            >
              {t.hero.cta1}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group min-w-[220px] gap-2 rounded-md border-2 border-white/20 bg-white/5 px-8 py-7 text-base font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
              onClick={() =>
                window.open("https://wa.me/351967339061", "_blank")
              }
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