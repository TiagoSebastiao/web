"use client"

import { useLocale, useTranslations } from "next-intl"
import { Check, Globe } from "lucide-react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languageNames: Record<string, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
}

export function LanguageSwitcher() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    // modal={false}: o modo modal bloqueia o scroll do <body>; como o <html> tem overflow-x: clip,
    // o body passava a ser o contentor de scroll e o cabeçalho "sticky" desaparecia do ecrã.
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={`${t("language")}: ${languageNames[locale]}`}
        className="inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-bold uppercase text-foreground/90 outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {locale}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {routing.locales.map((code) => (
          <DropdownMenuItem
            key={code}
            lang={code}
            onSelect={() => router.replace(pathname, { locale: code, scroll: false })}
            className="cursor-pointer justify-between"
          >
            {languageNames[code]}
            {code === locale && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
