import { Phone } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"

/** Barra fixa de contacto no telemóvel. */
export async function MobileContactBar({ price, hasPrice, whatsappHref }: { price: string; hasPrice: boolean; whatsappHref: string }) {
  const t = await getTranslations("vehicle")

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-4 py-3 lg:hidden">
      <div className="flex items-center gap-3">
        <p className={`min-w-0 flex-1 truncate font-extrabold text-white ${hasPrice ? "text-lg" : "text-sm"}`}>{price}</p>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          aria-label={`${t("call")} ${siteConfig.contact.phoneDisplay}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
