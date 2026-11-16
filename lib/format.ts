/** Formatação de números, preços e datas de acordo com o idioma da página. */

const intlLocale: Record<string, string> = {
  pt: "pt-PT",
  en: "en-GB",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
}

const toIntl = (locale: string) => intlLocale[locale] ?? "pt-PT"

export function formatNumber(locale: string, value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat(toIntl(locale), { maximumFractionDigits }).format(value)
}

export function formatPrice(locale: string, price: number) {
  return new Intl.NumberFormat(toIntl(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatKm(locale: string, km: number) {
  return `${formatNumber(locale, km, 0)} km`
}

/** "2021-11-03" → "11/2021" (mês/ano, como é habitual nos anúncios). */
export function formatRegistration(locale: string, isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00Z`)
  return new Intl.DateTimeFormat(toIntl(locale), { month: "2-digit", year: "numeric", timeZone: "UTC" }).format(date)
}

export function formatConsumption(locale: string, value: number | [number, number]) {
  const text = Array.isArray(value)
    ? `${formatNumber(locale, value[0])}–${formatNumber(locale, value[1])}`
    : formatNumber(locale, value)
  return `${text} L/100 km`
}
