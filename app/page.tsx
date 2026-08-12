import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { MissionSection } from "@/components/mission-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
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
  )
}