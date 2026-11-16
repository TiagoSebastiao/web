import type { CSSProperties } from "react"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { getFeaturedVehicles } from "@/data/vehicles"
import { SectionHeading } from "@/components/ui/section-heading"
import { VehicleCard } from "@/components/vehicle/vehicle-card"
import { cn } from "@/lib/utils"

export function VehiclesSection() {
  const t = useTranslations("vehicles")
  const vehicles = getFeaturedVehicles()

  return (
    <section id="veiculos" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        {vehicles.length > 0 ? (
          <div
            className={cn(
              "mx-auto grid gap-8 sm:grid-cols-2",
              vehicles.length === 1 && "max-w-md sm:grid-cols-1",
              vehicles.length === 2 && "max-w-5xl",
              vehicles.length > 2 && "max-w-6xl lg:grid-cols-3",
            )}
          >
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id} data-reveal className="h-full" style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}>
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        ) : (
          <p className="mx-auto max-w-xl text-center text-white/60">{t("empty")}</p>
        )}

        <div className="mt-12 text-center" data-reveal>
          <a
            href={siteConfig.standvirtualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white/30 hover:bg-white/10"
          >
            {t("moreOnStandvirtual")}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
