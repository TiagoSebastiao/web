"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="OTEN MOTORS" width={360} height={120} className="h-24 w-auto" />
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Excelência em veículos premium desde 2010.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-tight">Links</h3>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>
                <button className="hover:text-foreground transition-colors">{t.footer.terms}</button>
              </li>
              <li>
                <button className="hover:text-foreground transition-colors">{t.footer.privacy}</button>
              </li>
              <li>
                <button className="hover:text-foreground transition-colors">{t.footer.cookies}</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-tight">Contactos</h3>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>+351 912 345 678</li>
              <li>info@otenmotors.pt</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-tight">Redes Sociais</h3>
            <div className="flex gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-2 ring-primary/20 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:ring-primary">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-2 ring-primary/20 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:ring-primary">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-2 ring-primary/20 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:ring-primary">
                <Youtube className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-2 ring-primary/20 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:ring-primary">
                <TikTokIcon />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-2 ring-primary/20 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:ring-primary">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
