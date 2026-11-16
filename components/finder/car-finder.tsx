"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { AlertTriangle, ArrowUpRight, ExternalLink, RotateCcw, Sparkles } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { whatsappLink } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"
import { formatKm, formatPrice } from "@/lib/format"
import { recommend, type FinderAnswers } from "@/lib/finder-engine"
import type { FuelType, Locale, Transmission } from "@/data/vehicles"

export type FinderCar = {
  id: string
  name: string
  year: number
  mileageKm: number
  price: number | null
  fuel: FuelType
  transmission: Transmission
  image: string
}

/*
 * As 5 perguntas. Os escalões de orçamento seguem a procura real: em 2025–2026 a procura
 * de usados até 15 000 € foi a que mais cresceu (Standvirtual).
 */
const questions = {
  budget: ["b10", "b15", "b25", "b25plus"],
  body: ["small", "compact", "suv", "family", "any"],
  use: ["city", "mixed", "road"],
  km: ["low", "mid", "high"],
  gearbox: ["automatic", "manual", "any"],
} as const

type Question = keyof typeof questions
type Answers = Partial<FinderAnswers>

const budgetMax: Record<string, number> = { b10: 10_000, b15: 15_000, b25: 25_000, b25plus: Infinity }

export function CarFinder({ cars }: { cars: FinderCar[] }) {
  const t = useTranslations("finder")
  const tv = useTranslations("vehicles")
  const tl = useTranslations("labels")
  const locale = useLocale() as Locale
  const [answers, setAnswers] = useState<Answers>({})

  const order = Object.keys(questions) as Question[]
  const complete = order.every((q) => answers[q])

  const result = useMemo(() => {
    if (!complete) return null
    const a = answers as FinderAnswers
    const { reason, fuels, recommendations, relaxed } = recommend(a)
    // Do nosso stock: dentro do orçamento e da caixa pedida, combustível mais adequado primeiro.
    const stock = cars
      .filter((car) => car.price === null || car.price <= budgetMax[a.budget])
      .filter((car) => a.gearbox === "any" || car.transmission === a.gearbox)
      // Só combustíveis que fazem sentido para o uso indicado (ex.: nada de diesel para poucos km em cidade).
      .filter((car) => fuels.includes(car.fuel))
      .sort((x, y) => rank(fuels, x.fuel) - rank(fuels, y.fuel) || (x.price ?? Infinity) - (y.price ?? Infinity))
    return { reason, recommendations, relaxed, stock, electric: recommendations.some((r) => r.fuel === "electric") }
  }, [answers, cars, complete])

  const label = (q: Question, value: string) => t(`${q}.${value}`)
  const message =
    complete && result
      ? t("whatsappMessage", {
          budget: label("budget", answers.budget!),
          body: label("body", answers.body!),
          use: label("use", answers.use!),
          km: label("km", answers.km!),
          gearbox: label("gearbox", answers.gearbox!),
          models: result.recommendations.map((r) => `${r.model.name} (${r.years}, ${tl(`fuel.${r.fuel}`)})`).join("; ") || "—",
        })
      : ""

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Perguntas */}
      <div className="space-y-7">
        {order.map((q, index) => (
          <fieldset key={q}>
            <legend className="mb-3 flex items-center gap-3 text-base font-extrabold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-white">{index + 1}</span>
              {t(`${q}.question`)}
            </legend>
            <div className="flex flex-wrap gap-2">
              {questions[q].map((value) => (
                <label
                  key={value}
                  className="cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/75 transition-all hover:border-white/30 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white"
                >
                  <input
                    type="radio"
                    name={`finder-${q}`}
                    value={value}
                    checked={answers[q] === value}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q]: value }))}
                    className="sr-only"
                  />
                  {t(`${q}.${value}`)}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      {/* Resultado */}
      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 md:p-8"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        {!result ? (
          <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
            <Sparkles className="h-10 w-10 text-primary" aria-hidden="true" />
            <p className="mt-4 max-w-xs text-white/60">{t("waiting", { answered: order.filter((q) => answers[q]).length })}</p>
          </div>
        ) : (
          <div>
            {/* Análise */}
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t("analysisTitle")}
            </p>
            <p className="mt-2 leading-relaxed text-white/85">{t(`reason.${result.reason}`)}</p>
            {result.electric && <p className="mt-2 text-sm text-white/60">{t("chargeHome")}</p>}

            {/* Modelos recomendados */}
            <p className="mt-7 text-sm font-bold text-white">{t("modelsTitle")}</p>
            {result.relaxed && <p className="mt-1 text-xs text-amber-300/90">{t("relaxed")}</p>}
            <ol className="mt-3 space-y-3">
              {result.recommendations.map(({ model, years, fuel, cheaper }, i) => (
                <li key={model.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-black">{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-black leading-tight text-white">{model.name}</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5 text-xs font-semibold">
                        <li className="rounded-full bg-primary/20 px-2.5 py-1 text-white">{years}</li>
                        <li className="rounded-full bg-white/10 px-2.5 py-1 text-white/80">{tl(`fuel.${fuel}`)}</li>
                        {answers.gearbox === "automatic" && <li className="rounded-full bg-white/10 px-2.5 py-1 text-white/80">{t("automaticAvailable")}</li>}
                        {cheaper && <li className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-emerald-300">{t("cheaper")}</li>}
                      </ul>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{model.why[locale]}</p>
                      {model.check && (
                        <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-amber-300/90">
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {model.check[locale]}
                        </p>
                      )}
                      <a
                        href={model.source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-white/40 underline-offset-2 hover:text-white/70 hover:underline"
                      >
                        {t("source")}: {model.source.name}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* Do nosso stock */}
            {result.stock.length > 0 && (
              <>
                <p className="mt-7 text-sm font-bold text-white">{t("stockTitle")}</p>
                <ul className="mt-3 space-y-3">
                  {result.stock.slice(0, 2).map((car) => (
                    <li key={car.id}>
                      <Link
                        href={`/veiculo/${car.id}`}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-2.5 pr-4 transition-colors hover:border-primary/60"
                      >
                        <span className="relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-xl">
                          <Image src={car.image} alt="" fill sizes="80px" className="object-cover" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold text-white">{car.name}</span>
                          <span className="block text-xs text-white/60">
                            {car.year} · {formatKm(locale, car.mileageKm)} · {tl(`fuel.${car.fuel}`)}
                          </span>
                          <span className="mt-0.5 block text-sm font-black text-white">
                            {car.price ? formatPrice(locale, car.price) : tv("priceOnRequest")}
                          </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:rotate-45 group-hover:text-primary" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Procura personalizada */}
            <div className="mt-7 rounded-2xl border border-primary/30 bg-primary/10 p-4">
              <p className="text-sm text-white/85">{t("searchForYou")}</p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t("cta")}
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition-colors hover:text-white"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {t("reset")}
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t("disclaimer")}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function rank(fuels: FuelType[], fuel: FuelType) {
  const i = fuels.indexOf(fuel)
  return i === -1 ? fuels.length : i
}
