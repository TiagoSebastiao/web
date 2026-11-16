"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { whatsappLink } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

/** Botão do WhatsApp fixo no canto, aparece depois de descer um pouco na página. */
export function FloatingWhatsApp() {
  const t = useTranslations()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={whatsappLink(t("contact.whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("nav.floatingWhatsapp")}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "pulse-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_-5px_rgba(16,185,129,0.6)] transition-all duration-500 hover:scale-110 md:bottom-8 md:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
