"use client"

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Check, Globe } from "lucide-react"
import NextLink from "next/link"
import { getPathname, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const languageNames: Record<string, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
}

/**
 * Seletor de idioma: botão + lista de links (padrão "disclosure").
 *
 * Antes usava o menu do Radix (~31 KB de JavaScript comprimido só para isto). Agora são links
 * normais para a mesma página noutro idioma: o Google também os consegue seguir, e o aspeto e
 * o comportamento mantêm-se (abre por baixo do botão, fecha com Esc, clique fora ou ao escolher;
 * setas ↑/↓ percorrem as opções; troca de idioma sem saltar para o topo da página).
 */
export function LanguageSwitcher() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  // Fecha ao mudar de página/idioma (ajuste durante o render, sem efeito extra).
  const route = `${locale}:${pathname}`
  const [lastRoute, setLastRoute] = useState(route)
  if (route !== lastRoute) {
    setLastRoute(route)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    // Ao abrir, o foco vai para o idioma atual (como no menu anterior).
    rootRef.current?.querySelector<HTMLAnchorElement>('[aria-current="true"]')?.focus()
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [open])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!open) return
    if (event.key === "Escape") {
      event.preventDefault()
      setOpen(false)
      buttonRef.current?.focus()
      return
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()
    const items = Array.from(rootRef.current?.querySelectorAll<HTMLAnchorElement>("[data-lang-option]") ?? [])
    const current = items.indexOf(document.activeElement as HTMLAnchorElement)
    const step = event.key === "ArrowDown" ? 1 : -1
    items[(current + step + items.length) % items.length]?.focus()
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onKeyDown={onKeyDown}
      onBlur={(event) => {
        if (open && !rootRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        // O nome acessível começa pelo texto visível ("PT"), como pedem as regras de acessibilidade.
        aria-label={`${locale.toUpperCase()} — ${t("language")}: ${languageNames[locale]}`}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-bold uppercase text-foreground/90 outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {locale}
      </button>

      <ul
        id={listId}
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-1 w-44 min-w-[8rem] origin-top-right rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
      >
        {routing.locales.map((code) => (
          <li key={code}>
            <NextLink
              // URL final de cada idioma (o português sem prefixo: "/", "/veiculo/…"), sem passar
              // por um redirecionamento — melhor para o Google e um pedido a menos.
              href={getPathname({ href: pathname, locale: code })}
              replace
              scroll={false}
              lang={code}
              hrefLang={code}
              data-lang-option=""
              aria-current={code === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "relative flex cursor-pointer select-none items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
              )}
            >
              {languageNames[code]}
              {code === locale && <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
