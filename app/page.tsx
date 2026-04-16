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
      
      <div 
        className={`min-h-screen transition-all duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={`transition-all duration-700 delay-100 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <Header />
        </div>
        
        <main>
          <div className={`transition-all duration-700 delay-200 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <HeroSection />
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <FeaturedCars />
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <MissionSection />
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <AboutSection />
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <ServicesSection />
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <ContactSection />
          </div>
        </main>
        
        <div className={`transition-all duration-700 delay-500 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}
