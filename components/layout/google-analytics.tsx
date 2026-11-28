"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { siteConfig } from "@/config/site"
import { CONSENT_EVENT, readConsent, trackEvent, type Consent } from "@/lib/analytics"

/**
 * Carrega o Google Analytics 4 apenas se:
 * 1. houver um ID configurado em config/site.ts (google.analyticsId), e
 * 2. o visitante tiver aceitado os cookies de estatística.
 *
 * Também regista automaticamente os cliques que interessam ao negócio:
 * WhatsApp, telefone, e-mail, Standvirtual e redes sociais.
 */
export function GoogleAnalytics() {
  const id = siteConfig.google.analyticsId
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- o consentimento está no localStorage, só legível no browser
    setConsent(readConsent())
    const onChange = (event: Event) => setConsent((event as CustomEvent<Consent>).detail)
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  // Retirar o consentimento: desliga o envio de dados e apaga os cookies do GA.
  useEffect(() => {
    if (consent !== "denied" || !id) return
    ;(window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = true
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim()
      if (name.startsWith("_ga")) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`
        document.cookie = `${name}=; Max-Age=0; path=/`
      }
    }
  }, [consent, id])

  // Cliques em contactos e ligações externas → eventos no GA4.
  useEffect(() => {
    if (consent !== "granted" || !id) return
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a")
      if (!link) return
      const href = link.getAttribute("href") ?? ""
      const page = location.pathname
      if (href.includes("wa.me/")) trackEvent("whatsapp_click", { page })
      else if (href.startsWith("tel:")) trackEvent("phone_click", { page })
      else if (href.startsWith("mailto:")) trackEvent("email_click", { page })
      else if (href.includes("standvirtual.com")) trackEvent("standvirtual_click", { page })
      else if (/instagram|facebook|tiktok|youtube/.test(href)) trackEvent("social_click", { page, network: new URL(href).hostname })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [consent, id])

  if (!id || consent !== "granted") return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
window['ga-disable-${id}'] = false;
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  )
}
