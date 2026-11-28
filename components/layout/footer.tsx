import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { siteConfig, whatsappLink } from "@/config/site"
import { CookieSettingsLink } from "@/components/layout/cookie-banner"
import { TikTokIcon } from "@/components/ui/icons"
import { guide, isGuideLocale } from "@/data/guides/buying-a-car-in-portugal"

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
]

const linkClass = "inline-block py-1 transition-all duration-300 hover:translate-x-1 hover:text-white"

export function Footer() {
  const t = useTranslations("footer")
  const tn = useTranslations("nav")
  const { legal } = siteConfig
  const locale = useLocale()
  // Guia para estrangeiros: só existe em EN, FR e DE.
  const guideLink = isGuideLocale(locale) ? guide[locale] : null

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-background to-black pt-16 pb-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt={siteConfig.name} width={192} height={48} className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("description")}</p>
            <ul className="mt-5 flex gap-2" aria-label={t("social")}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">{t("explore")}</h2>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="/#veiculos" className={linkClass}>{tn("vehicles")}</Link></li>
              <li><Link href="/#vender" className={linkClass}>{tn("tradeIn")}</Link></li>
              <li><Link href="/#sobre-nos" className={linkClass}>{tn("about")}</Link></li>
              {guideLink && (
                <li>
                  <Link href={`/guides/${guideLink.slug}`} className={linkClass}>
                    {guideLink.labels.footerLink}
                  </Link>
                </li>
              )}
              <li>
                <a href={siteConfig.standvirtualUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Standvirtual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">{t("legal")}</h2>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="/termos" className={linkClass}>{t("terms")}</Link></li>
              <li><Link href="/privacidade" className={linkClass}>{t("privacy")}</Link></li>
              <li><Link href="/cookies" className={linkClass}>{t("cookies")}</Link></li>
              <li><CookieSettingsLink className={`${linkClass} text-left`} /></li>
              <li>
                <a href={siteConfig.complaintsBookUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t("complaintsBook")}
                </a>
              </li>
              {legal.adrEntityName && (
                <li>
                  {t("adr")}:{" "}
                  {legal.adrEntityUrl ? (
                    <a href={legal.adrEntityUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {legal.adrEntityName}
                    </a>
                  ) : (
                    legal.adrEntityName
                  )}
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">{t("contacts")}</h2>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className={linkClass}>{siteConfig.contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className={linkClass}>{siteConfig.contact.email}</a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-14 select-none whitespace-nowrap text-center text-[10.5vw] font-black leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.08)] lg:text-[8.5rem]"
        >
          OTEN MOTORS
        </p>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  )
}
