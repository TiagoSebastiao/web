/**
 * Lista de viaturas do site.
 *
 * Para adicionar uma viatura:
 * 1. Coloca as fotografias em public/vehicles/<id>/ (01-…, 02-…; a 01 é a capa)
 *    e uma imagem og.jpg de 1200×630 para as partilhas.
 * 2. Copia um dos ficheiros desta pasta, muda o nome e preenche os dados.
 * 3. Importa-o aqui e junta-o à lista `vehicles` (a ordem é a ordem no site).
 *
 * Viatura vendida: muda `status` para "sold" (continua visível, marcada como
 * vendida) ou `featured: false` (deixa de aparecer na homepage). Evita apagar
 * a página logo: o URL pode estar partilhado ou indexado no Google.
 */
import type { Vehicle } from "./types"
import { bmwSerie1116d2021 } from "./bmw-serie-1-116d-2021"
import { bmwSerie4420dCoupe2015 } from "./bmw-serie-4-420d-coupe-2015"

export type * from "./types"

export const vehicles: Vehicle[] = [bmwSerie4420dCoupe2015, bmwSerie1116d2021]

export function getVehicle(id: string) {
  return vehicles.find((vehicle) => vehicle.id === id)
}

export function getFeaturedVehicles() {
  return vehicles.filter((vehicle) => vehicle.featured)
}

/** Nome completo, ex.: "BMW Série 4 Coupé 420d". */
export function vehicleName(vehicle: Vehicle) {
  return `${vehicle.make} ${vehicle.model} ${vehicle.version}`
}
