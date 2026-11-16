import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { buildAlternates } from "@/lib/seo"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp"
import { VehiclesSection } from "@/components/home/vehicles-section"
import { CarFinderSection } from "@/components/finder/car-finder-section"
import { StandvirtualBanner } from "@/components/home/standvirtual-banner"
import { AboutSection } from "@/components/home/about-section"
import { SellSection } from "@/components/home/sell-section"
import { SocialSection } from "@/components/home/social-section"
import { ContactSection } from "@/components/home/contact-section"
import { Footer } from "@/components/layout/footer"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return { alternates: buildAlternates(locale, "/") }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VehiclesSection />
        <CarFinderSection />
        <HighlightsSection />
        <StandvirtualBanner />
        <AboutSection />
        <SellSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
