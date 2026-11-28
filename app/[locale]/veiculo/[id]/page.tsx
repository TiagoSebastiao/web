import type { Metadata } from "next"
import type { CSSProperties } from "react"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { siteConfig, whatsappLink } from "@/config/site"
import { getVehicle, vehicleName, vehicles, type Locale } from "@/data/vehicles"
import { formatKm, formatPrice } from "@/lib/format"
import { absoluteUrl, buildAlternates, localizedPath, ogLocale } from "@/lib/seo"
import { vehicleBreadcrumbJsonLd, vehicleJsonLd } from "@/lib/vehicle-json-ld"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { VehicleHero } from "@/components/vehicle/vehicle-hero"
import { GaugePanel } from "@/components/vehicle/gauge-panel"
import { SectionLabel } from "@/components/vehicle/section-label"
import { VehicleGallery } from "@/components/vehicle/vehicle-gallery"
import { TransparencySection } from "@/components/vehicle/transparency-section"
import { FinanceCalculator } from "@/components/vehicle/finance-calculator"
import { PurchasePanel } from "@/components/vehicle/purchase-panel"
import { DataSheet } from "@/components/vehicle/data-sheet"
import { VehicleCard } from "@/components/vehicle/vehicle-card"
import { MobileContactBar } from "@/components/vehicle/mobile-contact-bar"

type Props = { params: Promise<{ locale: string; id: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => vehicles.map((vehicle) => ({ locale, id: vehicle.id })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params
  const vehicle = getVehicle(id)
  const t = await getTranslations({ locale, namespace: "meta" })
  if (!vehicle) return { title: t("vehicleNotFound"), robots: { index: false } }

  const tl = await getTranslations({ locale, namespace: "labels" })
  const tv = await getTranslations({ locale, namespace: "vehicles" })
  const name = vehicleName(vehicle)
  const title = `${name} ${vehicle.year}`
  const description = t("vehicleDescription", {
    name,
    year: vehicle.year,
    mileage: formatKm(locale, vehicle.mileageKm),
    fuel: tl(`fuel.${vehicle.fuel}`),
    transmission: tl(`transmission.${vehicle.transmission}`).toLowerCase(),
    price: vehicle.price ? formatPrice(locale, vehicle.price) : tv("priceOnRequest"),
  })
  const path = `/veiculo/${vehicle.id}`

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: "website",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(localizedPath(locale, path)),
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      images: [{ url: vehicle.ogImage, width: 1200, height: 630, alt: name }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description, images: [vehicle.ogImage] },
  }
}

/**
 * Página de uma viatura. Só monta as secções; cada uma vive em components/vehicle/.
 * Ordem: hero → mostradores → (galeria, descrição, equipamento, transparência,
 * prestação | painel de compra) → ficha técnica → outras viaturas.
 */
export default async function VehiclePage({ params }: Props) {
  const { locale, id } = await params
  setRequestLocale(locale)
  const vehicle = getVehicle(id)
  if (!vehicle) notFound()

  const lang = locale as Locale
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const tv = await getTranslations("vehicles")
  const tf = await getTranslations("finance")

  const name = vehicleName(vehicle)
  const fullName = `${name} ${vehicle.year}`
  const url = absoluteUrl(localizedPath(locale, `/veiculo/${vehicle.id}`))
  const price = vehicle.price ? formatPrice(locale, vehicle.price) : tv("priceOnRequest")
  const whatsappHref = whatsappLink(t("whatsappMessage", { name: fullName, url }))
  const others = vehicles.filter((other) => other.id !== vehicle.id && other.status !== "sold").slice(0, 3)

  // Numeração das secções: segue a ordem em que aparecem (o simulador só existe com preço).
  let section = 0
  const next = () => ++section

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([vehicleJsonLd(vehicle, lang), vehicleBreadcrumbJsonLd(vehicle, lang)]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="relative">
        <VehicleHero vehicle={vehicle} locale={locale} name={name} price={price} whatsappHref={whatsappHref} />

        <div className="relative">
          <div className="container relative mx-auto max-w-6xl px-4 pb-28 pt-10 md:pt-14 lg:pb-20">
            <GaugePanel vehicle={vehicle} locale={locale} />

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="min-w-0 space-y-20">
                <section id="galeria" aria-labelledby="gallery-title" className="scroll-mt-24">
                  <SectionLabel index={next()} id="gallery-title">
                    {t("gallery")}
                  </SectionLabel>
                  <div data-reveal="zoom">
                    <VehicleGallery images={vehicle.images} name={name} priority={false} />
                  </div>
                </section>

                <section aria-labelledby="overview-title">
                  <SectionLabel index={next()} id="overview-title">
                    {t("overview")}
                  </SectionLabel>
                  <div data-reveal className="relative border-l-2 border-primary pl-6 md:pl-8">
                    <p className="relative text-lg leading-relaxed text-white/85 md:text-2xl md:leading-relaxed">{vehicle.description[lang]}</p>
                  </div>
                </section>

                <section aria-labelledby="equipment-title">
                  <SectionLabel
                    index={next()}
                    id="equipment-title"
                    extra={<span className="rounded-full bg-white/10 px-2.5 py-0.5 text-sm font-bold text-white/60">{vehicle.equipment.length}</span>}
                  >
                    {t("equipment")}
                  </SectionLabel>
                  <ul data-reveal className="flex flex-wrap gap-2">
                    {vehicle.equipment.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                        {tl(`equipment.${item}`)}
                      </li>
                    ))}
                  </ul>
                </section>

                <TransparencySection vehicle={vehicle} locale={lang} index={next()} />

                {vehicle.price && (
                  <section id="prestacao" aria-labelledby="finance-title" className="scroll-mt-24">
                    <SectionLabel index={next()} id="finance-title">
                      {tf("title")}
                    </SectionLabel>
                    <FinanceCalculator price={vehicle.price} name={fullName} url={url} />
                  </section>
                )}

              </div>

              <PurchasePanel vehicle={vehicle} locale={locale} name={name} price={price} whatsappHref={whatsappHref} />
            </div>

            <DataSheet vehicle={vehicle} locale={lang} index={next()} />

            {/* Outras viaturas (também reforça as ligações internas). */}
            {others.length > 0 && (
              <section aria-labelledby="others-title" className="mt-24">
                <SectionLabel index={next()} id="others-title">
                  {t("otherVehicles")}
                </SectionLabel>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {others.map((other, i) => (
                    <div key={other.id} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}>
                      <VehicleCard vehicle={other} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <MobileContactBar price={price} hasPrice={Boolean(vehicle.price)} whatsappHref={whatsappHref} />
      <Footer />
    </>
  )
}
