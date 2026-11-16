import { setRequestLocale } from "next-intl/server"
import { terms } from "@/data/legal"
import type { Locale } from "@/data/vehicles"
import { legalMetadata } from "@/lib/legal-metadata"
import { LegalPage } from "@/components/layout/legal-page"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return legalMetadata(params, "terms", "/termos")
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <LegalPage content={terms[locale as Locale] ?? terms.pt} />
}
