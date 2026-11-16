import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { buildAlternates } from "@/lib/seo"

/**
 * Metadados (título, canonical, hreflang) das páginas legais.
 * O texto das páginas está em data/legal/.
 */
export async function legalMetadata(
  params: Promise<{ locale: string }>,
  key: "terms" | "privacy" | "cookies",
  path: string,
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "footer" })
  return {
    title: t(key),
    alternates: buildAlternates(locale, path),
  }
}
