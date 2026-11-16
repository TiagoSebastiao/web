"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { siteConfig, whatsappLink } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { cn } from "@/lib/utils"

/** Links do menu: âncoras da homepage. */
const navItems = [
  { key: "vehicles", hash: "veiculos" },
  { key: "tradeIn", hash: "vender" },
  { key: "about", hash: "sobre-nos" },
  { key: "contact", hash: "contactos" },
] as const

export function Header() {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fecha o menu móvel quando se muda de página.
  useEffect(() => setOpen(false), [pathname])

  // Cabeçalho transparente no topo; fundo sólido depois de fazer scroll. Sem backdrop-blur: por cima
  // de fotos em movimento (página da viatura) o desfoque fazia a imagem piscar no Chrome.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color] duration-500",
        solid
          ? "border-b border-white/10 bg-black/90"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between gap-4 px-4 transition-all duration-500",
          solid ? "h-16 md:h-[72px]" : "h-20 md:h-24",
        )}
      >
        <Link href="/" aria-label={t("home")} className="shrink-0 transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={400}
            height={100}
            priority
            className={cn("w-auto transition-all duration-500", solid ? "h-9 md:h-10" : "h-10 md:h-12")}
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/#${item.hash}`}
              className="relative whitespace-nowrap py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t("whatsapp")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav aria-label="Principal" className="min-h-0">
          <div className="container mx-auto flex flex-col gap-1 px-4 pb-5 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.key}
                href={`/#${item.hash}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-bold text-white transition-all duration-500 hover:bg-white/5",
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                )}
              >
                {t(item.key)}
                <span className="text-primary">→</span>
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="btn-glow mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-base font-bold text-primary-foreground"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t("whatsapp")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
