"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Translations } from "@/data/translations"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations["pt"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("oten-motors-language")
      return (saved as Language) || "pt"
    }
    return "pt"
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("oten-motors-language", language)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
