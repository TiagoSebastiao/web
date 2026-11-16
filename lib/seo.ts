import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/config/site"

/**
 * Caminho de uma página num idioma. O português não tem prefixo
 * ("/veiculo/x"); os outros idiomas têm ("/en/veiculo/x").
 */
export function localizedPath(locale: string, path: string) {
  const clean = path === "/" ? "" : path
  if (locale === routing.defaultLocale) return clean || "/"
  return `/${locale}${clean}`
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path === "/" ? "" : path}`
}

/** Canonical + hreflang para uma página que existe em todos os idiomas. */
export function buildAlternates(locale: string, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) languages[l] = absoluteUrl(localizedPath(l, path))
  languages["x-default"] = absoluteUrl(localizedPath(routing.defaultLocale, path))

  return {
    canonical: absoluteUrl(localizedPath(locale, path)),
    languages,
  }
}

/** Código Open Graph do idioma (ex.: pt_PT). */
export const ogLocale: Record<string, string> = {
  pt: "pt_PT",
  en: "en_GB",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
}
