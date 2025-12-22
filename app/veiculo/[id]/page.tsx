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
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const car = featuredCars.find((c) => c.id === params.id)

  if (!car) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Veículo não encontrado</h1>
            <Link href="/#anuncios">
              <Button className="mt-4">Voltar aos Veículos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1))
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  const handleExpandImage = () => {
    if (!isDragging) {
      setIsImageExpanded(true)
    }
  }

  const handleCloseExpanded = () => {
    setIsImageExpanded(false)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false)
    setDragStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      const diff = e.clientX - dragStartX
      if (Math.abs(diff) > 50) {
        setIsDragging(true)
        if (diff > 0) {
          handlePrevImage()
        } else {
          handleNextImage()
        }
        setDragStartX(e.clientX)
      }
      e.currentTarget.style.cursor = "grabbing"
    } else {
      e.currentTarget.style.cursor = "grab"
    }
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = "grab"
    if (!isDragging) {
      handleExpandImage()
    }
    setTimeout(() => setIsDragging(false), 100)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-2">
          <Link href="/#anuncios">
            <Button variant="ghost" className="mb-1 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.vehicleDetail.backToVehicles}
            </Button>
          </Link>

          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-tight text-foreground">{car.name}</h1>
              <p className="mt-2 text-muted-foreground">{car.description[language as keyof typeof car.description]}</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div
                className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-muted cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={(e) => {
                  e.currentTarget.style.cursor = "grab"
                }}
              >
                <img
                  src={car.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${car.name} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover select-none pointer-events-none"
                  draggable="false"
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 bg-transparent"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex flex-1 gap-2 overflow-x-auto">
                    {car.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                          currentImageIndex === index ? "border-primary ring-2 ring-primary/50" : "border-border"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${car.name} thumbnail ${index + 1}`}
                          className="h-20 w-28 object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 bg-transparent"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.vehicleDetail.specifications}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.vehicleDetail.registration}</p>
                        <p className="font-semibold">{car.specifications.registration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.featured.km}</p>
                        <p className="font-semibold">{car.km}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.vehicleDetail.fuelType}</p>
                        <p className="font-semibold">{car.specifications.fuelType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.featured.transmission}</p>
                        <p className="font-semibold">{car.transmission}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.motor}</span>
                      <span className="font-semibold">{car.specifications.motor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.category}</span>
                      <span className="font-semibold">{car.specifications.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.seats}</span>
                      <span className="font-semibold">{car.specifications.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.color}</span>
                      <span className="font-semibold">{car.specifications.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.doors}</span>
                      <span className="font-semibold">{car.specifications.doors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.origin}</span>
                      <span className="font-semibold">{car.specifications.origin}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="mb-4 text-center">
                      <p className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {car.price}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="h-14 flex-1 gap-2 bg-primary text-base font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-5 w-5" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        className="h-14 w-14 shrink-0 bg-primary hover:bg-primary/90 shadow-lg"
                        asChild
                      >
                        <a href="tel:+351912345678">
                          <Phone className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-border">
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
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  {t.vehicleDetail.technicalData}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.weight}</p>
                  <p className="font-semibold">{car.technicalData.weight}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.engine}</p>
                  <p className="font-semibold">{car.technicalData.engine}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.power}</p>
                  <p className="font-semibold">{car.technicalData.power}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.torque}</p>
                  <p className="font-semibold">{car.technicalData.torque}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.acceleration}</p>
                  <p className="font-semibold">{car.technicalData.acceleration}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.topSpeed}</p>
                  <p className="font-semibold">{car.technicalData.topSpeed}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.consumption}</p>
                  <p className="font-semibold">{car.technicalData.consumption}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.emissions}</p>
                  <p className="font-semibold">{car.technicalData.emissions}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="mb-3 font-semibold">{t.vehicleDetail.dimensions}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.length}</span>
                      <span>{car.technicalData.dimensions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.width}</span>
                      <span>{car.technicalData.dimensions.width}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.height}</span>
                      <span>{car.technicalData.dimensions.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.wheelbase}</span>
                      <span>{car.technicalData.dimensions.wheelbase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.vehicleDetail.trunkCapacity}</span>
                      <span>{car.technicalData.dimensions.trunkCapacity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  {t.vehicleDetail.details}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.financing}</p>
                  <p className="font-semibold text-green-600">
                    {car.details.financing ? t.vehicleDetail.financingAvailable : "Não disponível"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.warranty}</p>
                  <p className="font-semibold">{car.details.warranty}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.ownerHistory}</p>
                  <p className="font-semibold">{car.details.ownerHistory}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.vehicleDetail.serviceHistory}</p>
                  <p className="font-semibold">{car.details.serviceHistory}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {isImageExpanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={handleCloseExpanded}
          >
            <button
              onClick={handleCloseExpanded}
              className="absolute left-4 top-4 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close expanded image"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={car.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${car.name} expanded`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
