/**
 * Google Analytics 4: utilitários partilhados.
 *
 * O Google Analytics só é carregado depois de o visitante aceitar os cookies de estatística
 * (banner em components/layout/cookie-banner.tsx). Enquanto não aceitar, trackEvent não faz nada.
 */
import { siteConfig } from "@/config/site"

/** Chave no localStorage onde fica guardada a escolha do visitante. */
export const CONSENT_KEY = "oten-cookie-consent"
/** Evento do browser disparado quando a escolha muda (para carregar o GA sem recarregar a página). */
export const CONSENT_EVENT = "oten-consent-change"
/** Evento do browser para voltar a abrir o banner (link "Preferências de cookies" no rodapé). */
export const OPEN_CONSENT_EVENT = "oten-open-cookie-settings"

export type Consent = "granted" | "denied"

export const analyticsEnabled = Boolean(siteConfig.google.analyticsId)

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === "granted" || value === "denied" ? value : null
}

export function saveConsent(value: Consent) {
  window.localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}

type Gtag = (...args: unknown[]) => void

/** Regista um evento no Google Analytics (ex.: clique no WhatsApp). Ignorado sem consentimento. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (gtag) gtag("event", name, params)
}
