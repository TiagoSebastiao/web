import { setRequestLocale } from "next-intl/server"
import { cookies } from "@/data/legal"
import type { Locale } from "@/data/vehicles"
import { legalMetadata } from "@/lib/legal-metadata"
import { LegalPage } from "@/components/layout/legal-page"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return legalMetadata(params, "cookies", "/cookies")
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <LegalPage content={cookies[locale as Locale] ?? cookies.pt} />
}
