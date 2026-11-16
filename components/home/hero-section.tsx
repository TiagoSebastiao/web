import type { CSSProperties } from "react"
import { ArrowRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { getFeaturedVehicles, vehicleName } from "@/data/vehicles"
import { formatKm, formatPrice } from "@/lib/format"
import { HeroShowcase, type HeroSlide } from "@/components/home/hero-showcase"

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties

/** Quantas fotografias de cada carro a montra mostra (as primeiras são as de exterior). */
const PHOTOS_PER_CAR = 3

/**
 * Primeiro ecrã. Estilo editorial: montra de fotografias das viaturas à direita,
 * texto curto à esquerda, um botão principal e um secundário. O vermelho fica
 * para os detalhes; nada de brilhos nem grelhas.
 */
export function HeroSection() {
  const t = useTranslations("hero")
  const tv = useTranslations("vehicles")
  const tl = useTranslations("labels")
  const locale = useLocale()

  // Viaturas disponíveis: as que têm preço primeiro (quem chega quer ver valores) e,
  // entre essas, a mais recente primeiro.
  const available = getFeaturedVehicles()
    .filter((vehicle) => vehicle.status === "available")
    .sort((a, b) => Number(b.price !== null) - Number(a.price !== null) || b.year - a.year)

  const slides: HeroSlide[] = available.map((vehicle) => ({
    id: vehicle.id,
    images: vehicle.images.slice(0, PHOTOS_PER_CAR),
    name: vehicleName(vehicle),
    meta: `${vehicle.year} · ${formatKm(locale, vehicle.mileageKm)} · ${tl(`fuel.${vehicle.fuel}`)}`,
    price: vehicle.price ? formatPrice(locale, vehicle.price) : tv("priceOnRequest"),
  }))

  return (
    <section className="relative -mt-20 overflow-hidden md:-mt-24 wide:flex wide:min-h-[100svh] wide:flex-col">
      {slides.length > 0 && <HeroShowcase slides={slides} />}

      <div className="container relative z-10 mx-auto px-4 pb-14 pt-6 sm:pt-10 wide:pointer-events-none wide:flex wide:flex-1 wide:flex-col wide:justify-center wide:pb-40 wide:pt-32">
        <div className="max-w-2xl wide:pointer-events-auto wide:max-w-xl xl:wide:max-w-2xl">
          <p className="enter flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60" style={delay(0)}>
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            OTEN MOTORS · {t("eyebrow")}
          </p>

          <h1
            className="enter mt-6 text-[clamp(2.4rem,9vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white wide:text-[clamp(3rem,5.6vw,5.25rem)]"
            style={delay(100)}
          >
            {t.rich("title", {
              hl: (chunks) => <span className="block text-white/45">{chunks}</span>,
            })}
          </h1>

          <p className="enter mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg" style={delay(200)}>
            {t("intro")}
          </p>

          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" style={delay(300)}>
            <Link
              href="/#veiculos"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white"
            >
              {t("ctaVehicles")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
