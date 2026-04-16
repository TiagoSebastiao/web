"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { MissionSection } from "@/components/mission-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { LanguageProvider } from "@/hooks/use-language"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
    // Small delay before showing content with animations
    setTimeout(() => setShowContent(true), 100)
  }, [])

  return (
    <LanguageProvider>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Header is always rendered so the fixed navbar is visible immediately after loading */}
      <Header />

      <div
        className={`min-h-screen transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <main className="pt-24">
          <HeroSection />
          <FeaturedCars />
          <MissionSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
