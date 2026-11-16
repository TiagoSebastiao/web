import { ArrowUpRight, Car } from "lucide-react"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

/** Banner de marketing que leva os visitantes ao perfil no Standvirtual. */
export function StandvirtualBanner() {
  const t = useTranslations("standvirtual")

  return (
    <section aria-labelledby="standvirtual-title" className="px-4 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/25 bg-[radial-gradient(ellipse_at_top_left,oklch(0.58_0.24_25/0.22),transparent_45%)] bg-black">
          {/* Ícone decorativo de carro, cortado na margem direita */}
          <Car
            aria-hidden="true"
            strokeWidth={2.5}
            className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 text-primary/20"
          />

          <div className="relative grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto]">
            <div className="max-w-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t("eyebrow")}
              </p>
              <h2
                id="standvirtual-title"
                className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl"
              >
                {t("title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                {t("text")}
              </p>
            </div>

            <div className="md:pr-6">
              <a
                href={siteConfig.standvirtualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-7 py-4 text-base font-bold text-black transition hover:-translate-y-0.5 hover:bg-white/90 md:w-auto"
              >
                {t("cta")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">({t("newWindow")})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
