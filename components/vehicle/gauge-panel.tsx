import type { CSSProperties } from "react"
import { getTranslations } from "next-intl/server"
import type { Vehicle } from "@/data/vehicles"
import { formatConsumption, formatNumber, formatRegistration } from "@/lib/format"

type GaugeData = { label: string; value: string; unit: string; sub: string; ratio: number }

/** Painel de instrumentos: valores reais da viatura, desenhados como mostradores. */
export async function GaugePanel({ vehicle, locale }: { vehicle: Vehicle; locale: string }) {
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const s = vehicle.specs ?? {}

  const gauges: GaugeData[] = [
    {
      label: t("power"),
      value: formatNumber(locale, vehicle.powerHp, 0),
      unit: t("hpUnit"),
      sub: `${vehicle.powerKw} kW`,
      ratio: vehicle.powerHp / 300,
    },
    s.torqueNm
      ? {
          label: t("torque"),
          value: formatNumber(locale, s.torqueNm, 0),
          unit: "Nm",
          sub: t("engineValue", { cc: formatNumber(locale, vehicle.engineCc, 0) }),
          ratio: s.torqueNm / 500,
        }
      : {
          label: t("engine"),
          value: formatNumber(locale, vehicle.engineCc, 0),
          unit: "cm³",
          sub: vehicle.cylinders ? t("cylindersValue", { count: vehicle.cylinders }) : "",
          ratio: vehicle.engineCc / 3000,
        },
    {
      label: t("mileage"),
      value: formatNumber(locale, vehicle.mileageKm, 0),
      unit: "km",
      sub: formatRegistration(locale, vehicle.firstRegistration),
      ratio: vehicle.mileageKm / 300000,
    },
    s.acceleration0to100s
      ? {
          label: t("acceleration"),
          value: formatNumber(locale, s.acceleration0to100s),
          unit: "s",
          sub: s.topSpeedKmh ? `${s.topSpeedKmh} km/h` : "",
          ratio: 1 - (s.acceleration0to100s - 4) / 12,
        }
      : s.consumptionL100km
        ? {
            label: t("consumption"),
            value: formatConsumption(locale, s.consumptionL100km).replace(" L/100 km", ""),
            unit: "L/100 km",
            sub: tl(`fuel.${vehicle.fuel}`),
            ratio: (Array.isArray(s.consumptionL100km) ? s.consumptionL100km[1] : s.consumptionL100km) / 12,
          }
        : {
            label: t("seats"),
            value: String(vehicle.seats),
            unit: "",
            sub: `${t("doors")}: ${vehicle.doors}`,
            ratio: vehicle.seats / 9,
          },
  ]

  return (
    <section aria-label={t("performance")}>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gauges.map((gauge, i) => (
          <li
            key={gauge.label}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] px-3 pb-5 pt-4 text-center transition-colors hover:border-primary/40 md:px-6 md:pt-6"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[180px]">
              <Gauge ratio={gauge.ratio} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-black tabular-nums tracking-tight text-white md:text-3xl lg:text-4xl">{gauge.value}</p>
                {gauge.unit && <p className="text-xs font-bold text-white/50">{gauge.unit}</p>}
              </div>
            </div>
            <p className="-mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary md:text-xs">{gauge.label}</p>
            {gauge.sub && <p className="mt-1 truncate text-xs text-muted-foreground">{gauge.sub}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Mostrador de 270° que se preenche quando entra no ecrã (só CSS, sem JavaScript). */
function Gauge({ ratio }: { ratio: number }) {
  const fill = Math.max(0.06, Math.min(1, ratio)) * 75
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full rotate-[135deg] overflow-visible">
      <circle cx="60" cy="60" r="50" pathLength={100} fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="6" strokeLinecap="round" strokeDasharray="75 100" />
      <circle cx="60" cy="60" r="41" pathLength={100} fill="none" stroke="rgb(255 255 255 / 0.15)" strokeWidth="3" strokeDasharray="0.3 2.2" />
      <circle
        cx="60"
        cy="60"
        r="50"
        pathLength={100}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="6"
        strokeLinecap="round"
        className="gauge-value"
        style={{ "--gauge-fill": `${fill} 100` } as CSSProperties}
      />
    </svg>
  )
}
