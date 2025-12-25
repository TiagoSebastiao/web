"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="OTEN MOTORS" width={550} height={160} className="h-32 w-auto md:h-36" priority />
        </div>

        {/* Desktop Navigation - Centered - Changed text color to white */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <button
            onClick={() => scrollToSection("anuncios")}
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/90"
          >
            <span className="relative z-10">{t.nav.vehicles}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-primary/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/90"
          >
            <span className="relative z-10">{t.nav.services}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-primary/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </button>
          <button
            onClick={() => scrollToSection("contactos")}
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/90"
          >
            <span className="relative z-10">{t.nav.contacts}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-primary/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </button>
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            <button
              onClick={() => scrollToSection("anuncios")}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.nav.vehicles}
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("contactos")}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.nav.contacts}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
