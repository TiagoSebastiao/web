"use client"

import { useMemo, useState } from "react"
import { Calculator } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { formatNumber, formatPrice } from "@/lib/format"
import type { Locale } from "@/data/vehicles"

type Props = { price: number; name: string; url: string }

const terms = [24, 36, 48, 60, 72, 84, 96]

const { minRate, maxRate, maxRatePeriod } = siteConfig.creditSimulator

/**
 * Simulador de prestação: ferramenta de cálculo para o próprio utilizador.
 * - A taxa é SEMPRE introduzida pelo visitante (nenhuma vem preenchida): o site não indica
 *   taxas nem custos de crédito, por isso não é publicidade a crédito (DL 133/2009, art. 5.º).
 * - A taxa só é aceite entre minRate e maxRate (config/site.ts); maxRate é a taxa máxima
 *   legal fixada pelo Banco de Portugal para crédito automóvel de usados.
 * - Sem botão de "pedir financiamento": a OTEN MOTORS não concede nem intermedeia crédito.
 * O prazo por defeito (84 meses) segue o prazo médio do crédito automóvel em Portugal
 * em 2025 (7,4 anos, Banco de Portugal).
 */
export function FinanceCalculator({ price, name, url }: Props) {
  const t = useTranslations("finance")
  const locale = useLocale()
  const maxDown = Math.floor((price * 0.8) / 500) * 500
  const [down, setDown] = useState(0)
  const [months, setMonths] = useState(84)
  const [rateText, setRateText] = useState("")

  const rate = Number.parseFloat(rateText.replace(",", "."))
  const typed = rateText.trim() !== ""
  const hasRate = typed && Number.isFinite(rate) && rate >= minRate && rate <= maxRate
  const financed = Math.max(0, price - down)

  const monthly = useMemo(() => {
    if (!hasRate) return null
    const r = rate / 100 / 12
    return r === 0 ? financed / months : (financed * r) / (1 - (1 + r) ** -months)
  }, [hasRate, rate, financed, months])

  const money = (value: number) => formatPrice(locale, Math.round(value))
  const limits = { min: formatNumber(locale, minRate), max: formatNumber(locale, maxRate) }

  return (
    <div data-reveal className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 md:p-8">
      <p className="text-white/70">{t("intro")}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="finance-down" className="text-sm font-bold text-white">
                {t("downPayment")}
              </label>
              <span className="font-black tabular-nums text-white">{money(down)}</span>
            </div>
            <input
              id="finance-down"
              type="range"
              min={0}
              max={maxDown}
              step={500}
              value={down}
              onChange={(e) => setDown(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--primary)]"
            />
          </div>

          <div>
            <label htmlFor="finance-term" className="text-sm font-bold text-white">
              {t("term")}
            </label>
            <select
              id="finance-term"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white focus:border-primary focus:outline-none"
            >
              {terms.map((m) => (
                <option key={m} value={m}>
                  {t("months", { count: m })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="finance-rate" className="text-sm font-bold text-white">
              {t("rate")}
            </label>
            <div className="relative mt-2">
              <input
                id="finance-rate"
                type="text"
                inputMode="decimal"
                value={rateText}
                onChange={(e) => setRateText(e.target.value)}
                placeholder={t("ratePlaceholder")}
                aria-describedby="finance-rate-help"
                aria-invalid={typed && !hasRate}
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 pr-10 text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">%</span>
            </div>
            <p id="finance-rate-help" className={`mt-2 text-xs ${typed && !hasRate ? "text-amber-300" : "text-muted-foreground"}`}>
              {typed && !hasRate ? t("rateOutOfRange", limits) : t("rateHelp", limits)}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/10 p-6" aria-live="polite">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Calculator className="h-4 w-4" aria-hidden="true" />
              {t("monthly")}
            </p>
            {monthly !== null ? (
              <p className="mt-2 text-4xl font-black tabular-nums tracking-tight text-white md:text-5xl">
                {money(monthly)}
                <span className="ml-1 text-base font-bold text-white/60">{t("perMonth")}</span>
              </p>
            ) : (
              <p className="mt-3 text-white/70">{t("missingRate")}</p>
            )}
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-white/60">{t("financed")}</dt>
                <dd className="font-bold tabular-nums text-white">{money(financed)}</dd>
              </div>
              {monthly !== null && (
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">{t("total")}</dt>
                  <dd className="font-bold tabular-nums text-white">{money(monthly * months + down)}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>

      {/* Letras pequenas: ferramenta de cálculo do utilizador; a OTEN MOTORS não faz crédito. */}
      <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
        {t("disclaimer", { ...limits, period: maxRatePeriod[locale as Locale] })}
      </p>
    </div>
  )
}
