"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Fuel, Gauge, Settings, X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react"
import { featuredCars } from "@/data/featuredCars"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

type SortOption = "price-asc" | "price-desc" | "year-desc" | "year-asc" | "km-asc" | "km-desc"

const brands = ["Mercedes-Benz", "BMW", "Audi"]
const fuelTypes = ["Diesel", "Gasolina", "Elétrico", "Híbrido"]
const transmissionTypes = ["Automática", "Manual"]

export default function VeiculosPage() {
  const { t, language } = useLanguage()
  const [showFilters, setShowFilters] = useState(true)
  const [sortBy, setSortBy] = useState<SortOption>("price-asc")
  
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
  const [yearRange, setYearRange] = useState<[number, number]>([2015, 2024])

  const translations = {
    pt: {
      title: "Veículos",
      found: "veículos encontrados",
      filters: "Filtros",
      reset: "Limpar",
      brand: "Marca",
      allBrands: "Todas as Marcas",
      fuel: "Combustível",
      transmission: "Transmissão",
      priceRange: "Faixa de Preço",
      yearRange: "Ano",
      sortBy: "Ordenar por",
      priceLowHigh: "Preço: Menor para Maior",
      priceHighLow: "Preço: Maior para Menor",
      yearNewOld: "Ano: Mais Recente",
      yearOldNew: "Ano: Mais Antigo",
      kmLowHigh: "Quilometragem: Menor",
      kmHighLow: "Quilometragem: Maior",
      viewDetails: "Ver Detalhes",
      diesel: "Diesel",
      gasoline: "Gasolina",
      electric: "Elétrico",
      hybrid: "Híbrido",
      automatic: "Automática",
      manual: "Manual",
    },
    en: {
      title: "Vehicles",
      found: "vehicles found",
      filters: "Filters",
      reset: "Reset",
      brand: "Brand",
      allBrands: "All Brands",
      fuel: "Fuel",
      transmission: "Transmission",
      priceRange: "Price Range",
      yearRange: "Year",
      sortBy: "Sort by",
      priceLowHigh: "Price: Low to High",
      priceHighLow: "Price: High to Low",
      yearNewOld: "Year: Newest First",
      yearOldNew: "Year: Oldest First",
      kmLowHigh: "Mileage: Lowest",
      kmHighLow: "Mileage: Highest",
      viewDetails: "View Details",
      diesel: "Diesel",
      gasoline: "Gasoline",
      electric: "Electric",
      hybrid: "Hybrid",
      automatic: "Automatic",
      manual: "Manual",
    },
    es: {
      title: "Vehículos",
      found: "vehículos encontrados",
      filters: "Filtros",
      reset: "Limpiar",
      brand: "Marca",
      allBrands: "Todas las Marcas",
      fuel: "Combustible",
      transmission: "Transmisión",
      priceRange: "Rango de Precio",
      yearRange: "Año",
      sortBy: "Ordenar por",
      priceLowHigh: "Precio: Menor a Mayor",
      priceHighLow: "Precio: Mayor a Menor",
      yearNewOld: "Año: Más Reciente",
      yearOldNew: "Año: Más Antiguo",
      kmLowHigh: "Kilometraje: Menor",
      kmHighLow: "Kilometraje: Mayor",
      viewDetails: "Ver Detalles",
      diesel: "Diésel",
      gasoline: "Gasolina",
      electric: "Eléctrico",
      hybrid: "Híbrido",
      automatic: "Automática",
      manual: "Manual",
    },
    fr: {
      title: "Véhicules",
      found: "véhicules trouvés",
      filters: "Filtres",
      reset: "Réinitialiser",
      brand: "Marque",
      allBrands: "Toutes les Marques",
      fuel: "Carburant",
      transmission: "Transmission",
      priceRange: "Gamme de Prix",
      yearRange: "Année",
      sortBy: "Trier par",
      priceLowHigh: "Prix: Croissant",
      priceHighLow: "Prix: Décroissant",
      yearNewOld: "Année: Plus Récent",
      yearOldNew: "Année: Plus Ancien",
      kmLowHigh: "Kilométrage: Plus Bas",
      kmHighLow: "Kilométrage: Plus Élevé",
      viewDetails: "Voir Détails",
      diesel: "Diesel",
      gasoline: "Essence",
      electric: "Électrique",
      hybrid: "Hybride",
      automatic: "Automatique",
      manual: "Manuelle",
    },
    de: {
      title: "Fahrzeuge",
      found: "Fahrzeuge gefunden",
      filters: "Filter",
      reset: "Zurücksetzen",
      brand: "Marke",
      allBrands: "Alle Marken",
      fuel: "Kraftstoff",
      transmission: "Getriebe",
      priceRange: "Preisbereich",
      yearRange: "Jahr",
      sortBy: "Sortieren nach",
      priceLowHigh: "Preis: Aufsteigend",
      priceHighLow: "Preis: Absteigend",
      yearNewOld: "Jahr: Neueste",
      yearOldNew: "Jahr: Älteste",
      kmLowHigh: "Kilometerstand: Niedrigste",
      kmHighLow: "Kilometerstand: Höchste",
      viewDetails: "Details Anzeigen",
      diesel: "Diesel",
      gasoline: "Benzin",
      electric: "Elektrisch",
      hybrid: "Hybrid",
      automatic: "Automatik",
      manual: "Manuell",
    },
  }

  const text = translations[language as keyof typeof translations] || translations.pt

  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^\d]/g, ""))
  }

  const parseKm = (kmStr: string): number => {
    return parseInt(kmStr.replace(/[^\d]/g, ""))
  }

  const translateFuel = (fuel: string) => {
    switch (fuel.toLowerCase()) {
      case "diesel": return text.diesel
      case "gasolina": return text.gasoline
      case "elétrico": return text.electric
      case "híbrido": return text.hybrid
      default: return fuel
    }
  }

  const translateTransmission = (transmission: string) => {
    switch (transmission.toLowerCase()) {
      case "automática": return text.automatic
      case "manual": return text.manual
      default: return transmission
    }
  }

  const filteredAndSortedCars = useMemo(() => {
    let result = [...featuredCars]

    // Apply filters
    if (selectedBrands.length > 0) {
      result = result.filter(car => 
        selectedBrands.some(brand => car.name.toLowerCase().includes(brand.toLowerCase()))
      )
    }

    if (selectedFuels.length > 0) {
      result = result.filter(car => selectedFuels.includes(car.fuel))
    }

    if (selectedTransmissions.length > 0) {
      result = result.filter(car => selectedTransmissions.includes(car.transmission))
    }

    result = result.filter(car => {
      const price = parsePrice(car.price)
      return price >= priceRange[0] && price <= priceRange[1]
    })

    result = result.filter(car => {
      return car.year >= yearRange[0] && car.year <= yearRange[1]
    })

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
        break
      case "price-desc":
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "year-asc":
        result.sort((a, b) => a.year - b.year)
        break
      case "km-asc":
        result.sort((a, b) => parseKm(a.km) - parseKm(b.km))
        break
      case "km-desc":
        result.sort((a, b) => parseKm(b.km) - parseKm(a.km))
        break
    }

    return result
  }, [selectedBrands, selectedFuels, selectedTransmissions, priceRange, yearRange, sortBy])

  const activeFilters = [
    ...selectedBrands.map(b => ({ type: "brand", value: b })),
    ...selectedFuels.map(f => ({ type: "fuel", value: f })),
    ...selectedTransmissions.map(t => ({ type: "transmission", value: t })),
  ]

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "brand":
        setSelectedBrands(prev => prev.filter(b => b !== value))
        break
      case "fuel":
        setSelectedFuels(prev => prev.filter(f => f !== value))
        break
      case "transmission":
        setSelectedTransmissions(prev => prev.filter(t => t !== value))
        break
    }
  }

  const resetFilters = () => {
    setSelectedBrands([])
    setSelectedFuels([])
    setSelectedTransmissions([])
    setPriceRange([0, 100000])
    setYearRange([2015, 2024])
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleFuel = (fuel: string) => {
    setSelectedFuels(prev => 
      prev.includes(fuel) ? prev.filter(f => f !== fuel) : [...prev, fuel]
    )
  }

  const toggleTransmission = (transmission: string) => {
    setSelectedTransmissions(prev => 
      prev.includes(transmission) ? prev.filter(t => t !== transmission) : [...prev, transmission]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">{text.title}</h1>
              <p className="mt-2 text-muted-foreground">
                {filteredAndSortedCars.length} {text.found}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                {text.filters}
                {showFilters ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
              
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder={text.sortBy} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">{text.priceLowHigh}</SelectItem>
                  <SelectItem value="price-desc">{text.priceHighLow}</SelectItem>
                  <SelectItem value="year-desc">{text.yearNewOld}</SelectItem>
                  <SelectItem value="year-asc">{text.yearOldNew}</SelectItem>
                  <SelectItem value="km-asc">{text.kmLowHigh}</SelectItem>
                  <SelectItem value="km-desc">{text.kmHighLow}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {activeFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {filter.value}
                  <button
                    onClick={() => removeFilter(filter.type, filter.value)}
                    className="ml-1 rounded-full p-0.5 hover:bg-primary/20"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-primary hover:underline"
              >
                {text.reset}
              </button>
            </div>
          )}

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Filters Sidebar */}
            <aside className={`w-full shrink-0 lg:w-72 ${showFilters ? "block" : "hidden md:block"}`}>
              <div className="sticky top-28 space-y-6 rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">{text.filters}</h2>
                  <button
                    onClick={resetFilters}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {text.reset}
                  </button>
                </div>

                {/* Brand Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">{text.brand}</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex cursor-pointer items-center gap-2">
                        <Checkbox
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <span className="text-sm text-muted-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">{text.fuel}</h3>
                  <div className="space-y-2">
                    {fuelTypes.map((fuel) => (
                      <label key={fuel} className="flex cursor-pointer items-center gap-2">
                        <Checkbox
                          checked={selectedFuels.includes(fuel)}
                          onCheckedChange={() => toggleFuel(fuel)}
                        />
                        <span className="text-sm text-muted-foreground">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Transmission Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">{text.transmission}</h3>
                  <div className="space-y-2">
                    {transmissionTypes.map((transmission) => (
                      <label key={transmission} className="flex cursor-pointer items-center gap-2">
                        <Checkbox
                          checked={selectedTransmissions.includes(transmission)}
                          onCheckedChange={() => toggleTransmission(transmission)}
                        />
                        <span className="text-sm text-muted-foreground">{transmission}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">{text.priceRange}</h3>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      min={0}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0].toLocaleString()}€</span>
                      <span>{priceRange[1].toLocaleString()}€</span>
                    </div>
                  </div>
                </div>

                {/* Year Range */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">{text.yearRange}</h3>
                  <div className="px-2">
                    <Slider
                      value={yearRange}
                      onValueChange={(value) => setYearRange(value as [number, number])}
                      min={2015}
                      max={2024}
                      step={1}
                      className="w-full"
                    />
                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                      <span>{yearRange[0]}</span>
                      <span>{yearRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Car Grid */}
            <div className="flex-1">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAndSortedCars.map((car) => (
                  <Card
                    key={car.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={car.image || "/placeholder.svg?height=400&width=600"}
                        alt={car.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <CardContent className="flex flex-col gap-3 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="flex-1 text-base font-bold uppercase leading-tight text-foreground">
                          {car.name}
                        </h3>
                        <span className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground">
                          {car.price}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{car.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{car.km}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{translateFuel(car.fuel)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{translateTransmission(car.transmission)}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="px-5 pb-5">
                      <Link href={`/veiculo/${car.id}`} className="w-full">
                        <Button className="w-full rounded-md bg-primary py-5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                          {text.viewDetails}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredAndSortedCars.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-lg text-muted-foreground">Nenhum veículo encontrado com os filtros selecionados.</p>
                  <Button onClick={resetFilters} variant="outline" className="mt-4">
                    {text.reset}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
