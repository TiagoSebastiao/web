import { CalendarCheck, Camera, Globe2, ShieldCheck, Wrench } from "lucide-react"
import { getTranslations } from "next-intl/server"
import type { Locale, Vehicle } from "@/data/vehicles"
import { formatKm, formatRegistration } from "@/lib/format"
import { SectionLabel } from "@/components/vehicle/section-label"

type Props = { vehicle: Vehicle; locale: Locale; index: number }

/** Transparência: o que está provado nos dados da viatura (nada inventado). */
export async function TransparencySection({ vehicle, locale, index }: Props) {
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const tt = await getTranslations("transparency")

  const items = [
    { icon: Camera, label: tt("photosLabel"), value: tt("photosValue", { count: vehicle.images.length }) },
    { icon: Globe2, label: tt("originLabel"), value: tl(`origin.${vehicle.origin}`) },
    { icon: CalendarCheck, label: tt("registrationLabel"), value: `${formatRegistration(locale, vehicle.firstRegistration)} · ${formatKm(locale, vehicle.mileageKm)}` },
    vehicle.serviceHistory && { icon: Wrench, label: tt("serviceLabel"), value: vehicle.serviceHistory[locale] },
    vehicle.warrantyMonths && { icon: ShieldCheck, label: tt("warrantyLabel"), value: t("warrantyValue", { months: vehicle.warrantyMonths }) },
  ].filter(Boolean) as { icon: typeof Camera; label: string; value: string }[]

  return (
    <section aria-labelledby="transparency-title">
      <SectionLabel index={index} id="transparency-title">
        {tt("title")}
      </SectionLabel>
      <div data-reveal className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 md:p-8">
        <p className="text-white/70">{tt("intro")}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/50">{label}</span>
                <span className="mt-0.5 block font-semibold text-white">{value}</span>
              </span>
            </li>
          ))}
        </ul>
        {/* A garantia comercial é da empresa parceira, não da OTEN MOTORS (ver Termos, ponto 5). */}
        {vehicle.warrantyMonths && <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{tt("warrantyNote")}</p>}
      </div>
    </section>
  )
}
