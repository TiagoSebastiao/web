"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

const flags = {
  pt: "https://flagcdn.com/w40/pt.png",
  en: "https://flagcdn.com/w40/gb.png",
  es: "https://flagcdn.com/w40/es.png",
  fr: "https://flagcdn.com/w40/fr.png",
  de: "https://flagcdn.com/w40/de.png",
}

const languages = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg">
          <Image
            src={flags[language] || "/placeholder.svg"}
            alt={languages[language]}
            width={24}
            height={16}
            className="rounded"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as keyof typeof flags)}
            className="gap-3 cursor-pointer"
          >
            <Image
              src={flags[code as keyof typeof flags] || "/placeholder.svg"}
              alt={name}
              width={24}
              height={16}
              className="rounded"
            />
            <span className="font-medium">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
