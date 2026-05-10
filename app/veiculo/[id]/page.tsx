"use client"

import type React from "react"

import { useParams } from "next/navigation"
import { featuredCars } from "@/data/featuredCars"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  MessageCircle,
  Phone,
  Settings,
  X,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function VehicleDetailPage() {
  const params = useParams()
  const { t, language } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [touchStartX, setTouchStartX] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const car = featuredCars.find((c) => c.id === params.id)

  if (!car) {
    return (
      <>
        <Header />
        <main className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Veículo não encontrado</h1>
            <Link href="/#anuncios">
              <Button className="mt-4">Voltar aos Veículos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handlePrevImage = () => {
    setZoom(1)
    setCurrentImageIndex((prev) =>
      prev === 0 ? car.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setZoom(1)
    setCurrentImageIndex((prev) =>
      prev === car.images.length - 1 ? 0 : prev + 1
    )
  }

  const handleImageClick = (index: number) => {
    setZoom(1)
    setCurrentImageIndex(index)
  }

  const handleExpandImage = () => {
    setZoom(1)
    setIsImageExpanded(true)
  }

  const handleCloseExpanded = () => {
    setZoom(1)
    setIsImageExpanded(false)
  }

  const handleWheelZoom = (e: React.WheelEvent<HTMLImageElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.2, 3))
    } else {
      setZoom((prev) => Math.max(prev - 0.2, 1))
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextImage()
      } else {
        handlePrevImage()
      }
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pb-12 pt-5">
          <Link href="/#anuncios">
            <Button
              variant="ghost"
              className="mb-4 gap-2 px-0 text-sm font-semibold hover:bg-transparent hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.vehicleDetail.backToVehicles}
            </Button>
          </Link>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_400px]">
            <div>
              <div className="relative mb-3">
                <div
                  onClick={handleExpandImage}
                  className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted shadow-xl md:aspect-[16/8.5]"
                >
                  <img
                    src={car.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${car.name} - Image ${currentImageIndex + 1}`}
                    className="block h-full w-full select-none object-cover object-center pointer-events-none"
                    draggable="false"
                  />

                  <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/30 to-transparent md:block" />

                  <div className="absolute bottom-0 left-0 right-0 hidden p-7 md:block">
                    <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight tracking-tight text-white">
                      {car.name}
                    </h1>

                    <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/75">
                      {
                        car.description[
                          language as keyof typeof car.description
                        ]
                      }
                    </p>
                  </div>
                </div>

                <div className="mt-5 block md:hidden">
                  <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-foreground">
                    {car.name}
                  </h1>

                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {car.description[language as keyof typeof car.description]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevImage()
                  }}
                  className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-primary md:flex"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextImage()
                  }}
                  className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-primary md:flex"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary ring-2 ring-primary/40"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${car.name} thumbnail ${index + 1}`}
                      className="block h-16 w-28 object-cover md:h-20 md:w-32"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-28 rounded-2xl border border-border bg-card shadow-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-black">
                    {t.vehicleDetail.specifications}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {t.vehicleDetail.registration}
                        </p>
                        <p className="font-bold">
                          {car.specifications.registration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Gauge className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {t.featured.km}
                        </p>
                        <p className="font-bold">{car.km}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Fuel className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {t.vehicleDetail.fuelType}
                        </p>
                        <p className="font-bold">
                          {car.specifications.fuelType}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {t.featured.transmission}
                        </p>
                        <p className="font-bold">{car.transmission}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 border-t border-border pt-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.motor}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.motor}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.category}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.category}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.seats}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.seats}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.color}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.color}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.doors}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.doors}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.origin}
                      </span>
                      <span className="text-right font-bold">
                        {car.specifications.origin}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-4 text-center text-4xl font-black text-white">
                      {car.price}
                    </p>

                    <div className="flex gap-3">
                      <Button
                        className="h-12 flex-1 gap-2 bg-primary text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                        asChild
                      >
                        <a
                          href="https://wa.me/351938798993"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-5 w-5" />
                          WhatsApp
                        </a>
                      </Button>

                      <Button
                        size="icon"
                        className="h-12 w-12 shrink-0 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href="tel:+351938798993">
                          <Phone className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  {t.vehicleDetail.equipment}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {car.equipment.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  {t.vehicleDetail.technicalData}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                {[
                  [t.vehicleDetail.weight, car.technicalData.weight],
                  [t.vehicleDetail.engine, car.technicalData.engine],
                  [t.vehicleDetail.power, car.technicalData.power],
                  [t.vehicleDetail.torque, car.technicalData.torque],
                  [
                    t.vehicleDetail.acceleration,
                    car.technicalData.acceleration,
                  ],
                  [t.vehicleDetail.topSpeed, car.technicalData.topSpeed],
                  [t.vehicleDetail.consumption, car.technicalData.consumption],
                  [t.vehicleDetail.emissions, car.technicalData.emissions],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}

                <div className="border-t border-border pt-4">
                  <p className="mb-3 font-semibold">
                    {t.vehicleDetail.dimensions}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.length}
                      </span>
                      <span>{car.technicalData.dimensions.length}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.width}
                      </span>
                      <span>{car.technicalData.dimensions.width}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.height}
                      </span>
                      <span>{car.technicalData.dimensions.height}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.wheelbase}
                      </span>
                      <span>{car.technicalData.dimensions.wheelbase}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t.vehicleDetail.trunkCapacity}
                      </span>
                      <span>{car.technicalData.dimensions.trunkCapacity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  {t.vehicleDetail.details}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <div>
                  <p className="text-xs text-muted-foreground">
                    {t.vehicleDetail.financing}
                  </p>
                  <p className="font-semibold text-green-600">
                    {car.details.financing
                      ? t.vehicleDetail.financingAvailable
                      : "Não disponível"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {t.vehicleDetail.warranty}
                  </p>
                  <p className="font-semibold">{car.details.warranty}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {t.vehicleDetail.serviceHistory}
                  </p>
                  <p className="font-semibold">{car.details.serviceHistory}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {isImageExpanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/95 p-4"
            onClick={handleCloseExpanded}
          >
            <button
              onClick={handleCloseExpanded}
              className="absolute left-4 top-4 z-50 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close expanded image"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevImage()
              }}
              className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-primary"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNextImage()
              }}
              className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-primary"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <img
              src={car.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${car.name} expanded`}
              className="max-h-[90vh] max-w-[90vw] cursor-pointer select-none object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
              draggable="false"
              onClick={(e) => {
                e.stopPropagation()
                handleNextImage()
              }}
              onWheel={handleWheelZoom}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />

            <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              {currentImageIndex + 1} / {car.images.length} · Zoom{" "}
              {Math.round(zoom * 100)}%
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}