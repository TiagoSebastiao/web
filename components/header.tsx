"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import Link from "next/link"

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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black shadow-lg">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="OTEN MOTORS" width={165} height={48} className="h-9 w-auto md:h-12" priority/>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <Link
            href="/veiculos"
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/80"
          >
            <span className="relative z-10">{t.nav.vehicles}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </Link>
          <button
            onClick={() => scrollToSection("servicos")}
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/80"
          >
            <span className="relative z-10">{t.nav.services}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </button>
          <button
            onClick={() => scrollToSection("contactos")}
            className="group relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-white/80"
          >
            <span className="relative z-10">{t.nav.contacts}</span>
            <span className="absolute inset-0 scale-75 rounded-md bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </button>
        </nav>

        {/* Theme Toggle, Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            <Link
              href="/veiculos"
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.vehicles}
            </Link>
            <button
              onClick={() => scrollToSection("servicos")}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("contactos")}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {t.nav.contacts}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
