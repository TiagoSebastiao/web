"use client"

import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-14 md:py-20"
    >
      {/* 🔥 Background showroom */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      >
        <img
          src="/luxury-car-showroom.png" 
          alt="Showroom"
          className="h-full w-full object-cover opacity-40 blur-[1px]"
        />

        {/* overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* 🔥 Conteúdo */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* 🔥 Título */}
          <div
            className={`mb-12 text-center transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-block">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
                {t.about.title}
              </h2>

              <div className="mx-auto mt-4 h-1 w-2/3 rounded-full bg-primary" />
            </div>
          </div>

          {/* 🔥 Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                <p className="text-base leading-relaxed text-white/80 md:text-lg">
                  {t.about.description1}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                <p className="text-base leading-relaxed text-white/80 md:text-lg">
                  {t.about.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}