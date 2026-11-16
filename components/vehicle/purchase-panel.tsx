import { Calculator, ExternalLink, Phone } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"
import type { Vehicle } from "@/data/vehicles"
import { formatKm, formatNumber, formatRegistration } from "@/lib/format"
import { WhatsAppIcon } from "@/components/ui/icons"

type Props = { vehicle: Vehicle; locale: string; name: string; price: string; whatsappHref: string }

/** Painel de compra fixo ao lado da galeria (no desktop): preço, dados-chave e contactos. */
export async function PurchasePanel({ vehicle, locale, name, price, whatsappHref }: Props) {
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const tf = await getTranslations("finance")

  const keySpecs = [
    [t("firstRegistration"), formatRegistration(locale, vehicle.firstRegistration)],
    [t("mileage"), formatKm(locale, vehicle.mileageKm)],
    [t("fuel"), tl(`fuel.${vehicle.fuel}`)],
    [t("transmission"), tl(`transmission.${vehicle.transmission}`)],
    [t("power"), t("powerValue", { hp: vehicle.powerHp, kw: vehicle.powerKw })],
    [
      t("engine"),
      [t("engineValue", { cc: formatNumber(locale, vehicle.engineCc, 0) }), vehicle.cylinders && t("cylindersValue", { count: vehicle.cylinders })]
        .filter(Boolean)
        .join(" · "),
    ],
  ]

  const shortcut =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-3 py-3 text-xs font-bold text-white transition-colors hover:border-white/30 hover:bg-white/5"

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] shadow-[0_40px_100px_-40px_oklch(0.58_0.24_25/0.5)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative p-6 md:p-7">
          <p className="text-lg font-black leading-tight text-white">{name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{vehicle.year}</p>
          <p className={`mt-4 font-black tracking-tight text-white ${vehicle.price ? "text-4xl" : "text-2xl"}`}>{price}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-5 text-sm">
            {keySpecs.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="font-bold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
            <p className="font-bold text-foreground">{t("contactTitle")}</p>
            <p className="text-sm text-muted-foreground">{t("contactText")}</p>
            <div className="flex gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t("whatsappCta")}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                aria-label={`${t("call")} ${siteConfig.contact.phoneDisplay}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t("call")}
              </a>
            </div>
            {vehicle.price && (
              <a href="#prestacao" className={`${shortcut} w-full`}>
                <Calculator className="h-4 w-4 text-primary" aria-hidden="true" />
                {tf("shortcut")}
              </a>
            )}
            <a
              href={vehicle.standvirtualUrl ?? siteConfig.standvirtualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              {t("standvirtualCta")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 px-1 text-xs text-muted-foreground">{t("disclaimer")}</p>
    </aside>
  )
}
