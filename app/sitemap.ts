import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { vehicles } from "@/data/vehicles"
import { guide, guideLocales } from "@/data/guides/buying-a-car-in-portugal"
import { absoluteUrl, localizedPath } from "@/lib/seo"

/** Data da última alteração relevante do conteúdo. Atualizar quando se mexe nas páginas. */
const SITE_UPDATED = new Date("2026-11-18")

/** Uma entrada por página e por idioma, com as respetivas traduções (hreflang). */
function entry(path: string, priority: number, lastModified: Date = SITE_UPDATED): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(localizedPath(locale, path))]),
  )
  return routing.locales.map((locale) => ({
    url: absoluteUrl(localizedPath(locale, path)),
    lastModified,
    priority,
    alternates: { languages },
  }))
}

/** Guia para estrangeiros: só EN/FR/DE, com um endereço diferente em cada idioma. */
function guideEntries(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    guideLocales.map((locale) => [locale, absoluteUrl(localizedPath(locale, `/guides/${guide[locale].slug}`))]),
  )
  return guideLocales.map((locale) => ({ url: languages[locale], priority: 0.6, alternates: { languages } }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("/", 1),
    ...vehicles.filter((v) => v.status !== "sold").flatMap((v) => entry(`/veiculo/${v.id}`, 0.8, v.updatedAt ? new Date(v.updatedAt) : SITE_UPDATED)),
    ...guideEntries(),
    ...entry("/termos", 0.1),
    ...entry("/privacidade", 0.1),
    ...entry("/cookies", 0.1),
  ]
}
