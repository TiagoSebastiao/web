import { Check, HandCoins } from "lucide-react"
import { useTranslations } from "next-intl"
import { whatsappLink } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"

/** Chamada para quem quer vender o carro ao stand. */
export function SellSection() {
  const t = useTranslations("sell")
  const points = t.raw("points") as string[]

  return (
    <section id="vender" className="scroll-mt-20 px-4 py-10 md:py-16">
      <div
        data-reveal="zoom"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-red-700 to-red-950 p-8 sm:p-12 md:p-16"
      >
        <HandCoins
          aria-hidden="true"
          className="float absolute -bottom-10 -right-6 h-64 w-64 text-white/10 md:h-80 md:w-80"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">{t("title")}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{t("text")}</p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {points.map((point) => (
                <li key={point} className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-semibold text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <a
              href={whatsappLink(t("whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-black text-black shadow-2xl transition-transform hover:-translate-y-1 md:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6 text-emerald-600" />
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
