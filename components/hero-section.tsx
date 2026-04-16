"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

const carouselImages = [
  "/cars/1/luxury-mercedes-benz-c-class-amg-black.jpg",
  "/cars/2/luxury-bmw-x5-m-sport-grey.jpg",
  "/cars/3/luxury-audi-a6-avant-s-line-white.jpg",
]

export function HeroSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <div
          className={`mx-auto max-w-6xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-6xl font-black leading-tight text-balance text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>
          <p className="mt-8 text-lg text-balance font-medium text-white/80 drop-shadow-md md:text-xl lg:text-2xl max-w-3xl mx-auto">
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
              className="group min-w-[200px] gap-2 rounded-md border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-7 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
              onClick={() => window.open("https://wa.me/351912345678", "_blank")}
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              {t.hero.cta2}
            </Button>
          </div>
          
          {/* Carousel indicators */}
          <div className="mt-10 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
