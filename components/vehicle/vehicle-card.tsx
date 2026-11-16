import Image from "next/image"
import { ArrowUpRight, Calendar, Fuel, Gauge, Images, Settings2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { type Vehicle, vehicleName } from "@/data/vehicles"
import { formatKm, formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const t = useTranslations("vehicles")
  const tl = useTranslations("labels")
  const locale = useLocale()
  const name = vehicleName(vehicle)
  const unavailable = vehicle.status !== "available"

  const specs = [
    { icon: Calendar, value: String(vehicle.year) },
    { icon: Gauge, value: formatKm(locale, vehicle.mileageKm) },
    { icon: Fuel, value: tl(`fuel.${vehicle.fuel}`) },
    { icon: Settings2, value: tl(`transmission.${vehicle.transmission}`) },
  ]

  return (
    <Link
      href={`/veiculo/${vehicle.id}`}
      className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_oklch(0.58_0.24_25/0.55)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={vehicle.images[0]}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
            unavailable && "opacity-60 grayscale",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Fotografia seguinte aparece ao passar o rato. */}
        {vehicle.images[1] && (
          <Image
            src={vehicle.images[1]}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}

        <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white">
          {unavailable ? (
            t(`status.${vehicle.status}`)
          ) : (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t("status.available")}
            </>
          )}
        </span>
        <span className="glass absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white">
          <Images className="h-3.5 w-3.5" aria-hidden="true" />
          {vehicle.images.length}
        </span>

        <p className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1.5 text-base font-black text-black shadow-lg">
          {vehicle.price ? formatPrice(locale, vehicle.price) : t("priceOnRequest")}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-black leading-snug text-white">{name}</h3>

        <ul className="mb-6 mt-4 flex flex-wrap gap-2">
          {specs.map(({ icon: Icon, value }) => (
            <li
              key={value}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/75"
            >
              <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {value}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center justify-between rounded-full border border-white/10 py-1.5 pl-5 pr-1.5 text-sm font-bold text-white transition-colors duration-500 group-hover:border-primary group-hover:bg-primary">
          {t("viewVehicle")}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  )
}
