"use client"

import { useEffect, useState } from "react"
import { Cookie } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { OPEN_CONSENT_EVENT, analyticsEnabled, readConsent, saveConsent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/**
 * Banner de consentimento de cookies (RGPD / Lei n.º 41/2004).
 * Só aparece se o Google Analytics estiver configurado e o visitante ainda não tiver escolhido.
 * "Recusar" tem o mesmo destaque que "Aceitar", como exige a CNPD.
 */
export function CookieBanner() {
  const t = useTranslations("cookieBanner")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!analyticsEnabled) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- o consentimento está no localStorage, só legível no browser
    if (readConsent() === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  if (!analyticsEnabled) return null

  const choose = (value: "granted" | "denied") => {
    saveConsent(value)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-hidden={!open}
      className={cn(
        "fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 md:inset-x-auto md:bottom-6 md:left-6 md:p-6",
        open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Cookie className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p id="cookie-banner-title" className="font-bold text-white">{t("title")}</p>
          <p className="mt-1 text-sm leading-relaxed text-white/70">
            {t.rich("text", {
              link: (chunks) => (
                <Link href="/cookies" className="underline underline-offset-2 hover:text-white" tabIndex={open ? 0 : -1}>
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          tabIndex={open ? 0 : -1}
          className="h-11 rounded-full border border-white/20 bg-white/5 text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          {t("reject")}
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          tabIndex={open ? 0 : -1}
          className="h-11 rounded-full border border-white bg-white text-sm font-bold text-black transition-colors hover:bg-white/90"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  )
}

/** Link "Preferências de cookies" (rodapé): volta a abrir o banner. Só aparece com o GA configurado. */
export function CookieSettingsLink({ className }: { className?: string }) {
  const t = useTranslations("cookieBanner")
  if (!analyticsEnabled) return null
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))} className={className}>
      {t("settings")}
    </button>
  )
}
