import type { CSSProperties } from "react"
import { getTranslations } from "next-intl/server"
import type { Locale, Vehicle } from "@/data/vehicles"
import { formatConsumption, formatNumber } from "@/lib/format"
import { SectionLabel } from "@/components/vehicle/section-label"

/** Ficha técnica completa: características, dados técnicos e condições. */
export async function DataSheet({ vehicle, locale, index }: { vehicle: Vehicle; locale: Locale; index: number }) {
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const s = vehicle.specs ?? {}
  const mm = (value: number) => `${formatNumber(locale, value, 0)} mm`

  const details = [
    [t("bodyType"), tl(`bodyType.${vehicle.bodyType}`)],
    [t("doors"), String(vehicle.doors)],
    [t("seats"), String(vehicle.seats)],
    [t("color"), tl(`color.${vehicle.color}`)],
    [t("origin"), tl(`origin.${vehicle.origin}`)],
  ]

  const technical = [
    s.torqueNm && [t("torque"), `${formatNumber(locale, s.torqueNm, 0)} Nm`],
    s.acceleration0to100s && [t("acceleration"), `${formatNumber(locale, s.acceleration0to100s)} s`],
    s.topSpeedKmh && [t("topSpeed"), `${s.topSpeedKmh} km/h`],
    s.consumptionL100km && [t("consumption"), formatConsumption(locale, s.consumptionL100km)],
    s.co2gKm && [t("co2"), `${s.co2gKm} g/km`],
    s.weightKg && [t("weight"), `${formatNumber(locale, s.weightKg, 0)} kg`],
    s.lengthMm && [t("length"), mm(s.lengthMm)],
    s.widthMm && [t("width"), mm(s.widthMm)],
    s.heightMm && [t("height"), mm(s.heightMm)],
    s.wheelbaseMm && [t("wheelbase"), mm(s.wheelbaseMm)],
    s.trunkL && [t("trunk"), `${s.trunkL} L`],
  ].filter(Boolean) as string[][]

  const conditions = [
    vehicle.warrantyMonths && [t("warranty"), t("warrantyValue", { months: vehicle.warrantyMonths })],
    vehicle.serviceHistory && [t("serviceHistory"), vehicle.serviceHistory[locale]],
    vehicle.iucPaid && [t("iuc"), t("iucPaid")],
  ].filter(Boolean) as string[][]

  return (
    <section aria-labelledby="datasheet-title" className="mt-24">
      <SectionLabel index={index} id="datasheet-title">
        {t("dataSheet")}
      </SectionLabel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SpecList title={t("keySpecs")} rows={details} />
        {technical.length > 0 && <SpecList title={t("technicalData")} rows={technical} delay={90} />}
        {conditions.length > 0 && <SpecList title={t("conditions")} rows={conditions} delay={180} />}
      </div>
    </section>
  )
}

function SpecList({ title, rows, delay = 0 }: { title: string; rows: string[][]; delay?: number }) {
  return (
    <section
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className="card-glow rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 md:p-7"
    >
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-text">{title}</h3>
      <dl className="divide-y divide-white/10 text-sm">
        {rows.map(([label, value]) => (
          <div key={`${label}-${value}`} className="flex justify-between gap-4 py-2.5">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="text-right font-semibold text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
