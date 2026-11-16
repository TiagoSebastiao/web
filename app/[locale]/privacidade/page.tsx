import { setRequestLocale } from "next-intl/server"
import { privacy } from "@/data/legal"
import type { Locale } from "@/data/vehicles"
import { legalMetadata } from "@/lib/legal-metadata"
import { LegalPage } from "@/components/layout/legal-page"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return legalMetadata(params, "privacy", "/privacidade")
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <LegalPage content={privacy[locale as Locale] ?? privacy.pt} />
}
