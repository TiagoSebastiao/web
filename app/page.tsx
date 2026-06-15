"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { MissionSection } from "@/components/mission-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/hooks/use-language"

export const metadata = {
  title: 'Oten Motors | Carros Usados e Semi-Novos',
  description:
    'Stand automóveis de carros usados e semi-novos selecionados. Conheça a Oten Motors.',
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturedCars />
          <AboutSection />
          <MissionSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
