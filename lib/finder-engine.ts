/**
 * Motor de recomendação do assistente "Que carro é para si?".
 *
 * Não é um modelo de linguagem: são regras explícitas, fáceis de rever, aplicadas a uma
 * base de modelos com fontes (data/finder/models.ts). Assim cada sugestão tem um porquê
 * verificável e nunca inventa dados.
 */
import type { FuelType } from "@/data/vehicles"
import { finderModels, type Body, type Budget, type FinderModel } from "@/data/finder/models"

export type Use = "city" | "mixed" | "road"
export type Km = "low" | "mid" | "high"
export type Gearbox = "automatic" | "manual" | "any"
export type BodyChoice = Body | "any"

export type FinderAnswers = { budget: Budget; body: BodyChoice; use: Use; km: Km; gearbox: Gearbox }

/** Chave do texto que explica a escolha de combustível (em messages/*.json → finder.reason). */
export type ReasonKey = "dieselRoad" | "dieselMixed" | "hybridCity" | "hybridMixed" | "petrolLow" | "petrolLowCity"

/**
 * Combustíveis por ordem de preferência para o uso e a quilometragem indicados.
 * Base: o diesel só compensa com muitos km (sobretudo em estrada); em cidade o híbrido
 * aproveita o pára-arranca; com poucos km, o gasolina é mais barato de comprar.
 * O elétrico só entra para cidade/misto (autonomia e carregamento).
 */
export function fuelPreferences(use: Use, km: Km): { fuels: FuelType[]; reason: ReasonKey } {
  if (km === "high") {
    if (use === "city") return { fuels: ["hybrid", "electric", "diesel", "lpg"], reason: "hybridCity" }
    return { fuels: ["diesel", "hybrid", "lpg"], reason: use === "road" ? "dieselRoad" : "dieselMixed" }
  }
  if (km === "mid") {
    if (use === "road") return { fuels: ["diesel", "hybrid", "petrol", "lpg"], reason: "dieselRoad" }
    if (use === "city") return { fuels: ["hybrid", "electric", "petrol"], reason: "hybridCity" }
    return { fuels: ["hybrid", "petrol", "diesel", "electric"], reason: "hybridMixed" }
  }
  if (use === "city") return { fuels: ["petrol", "hybrid", "electric"], reason: "petrolLowCity" }
  return { fuels: ["petrol", "hybrid", "lpg"], reason: "petrolLow" }
}

const budgetOrder: Budget[] = ["b10", "b15", "b25", "b25plus"]

export type Recommendation = {
  model: FinderModel
  years: string
  fuel: FuelType
  /** Sugestão do escalão abaixo (mais barata do que o orçamento). */
  cheaper: boolean
}

export function recommend(a: FinderAnswers): { reason: ReasonKey; fuels: FuelType[]; recommendations: Recommendation[]; relaxed: boolean } {
  const { fuels: prefs, reason } = fuelPreferences(a.use, a.km)
  const lower = budgetOrder[budgetOrder.indexOf(a.budget) - 1]

  const score = (strictBody: boolean) =>
    finderModels
      .map((model) => {
        const exact = Boolean(model.years[a.budget])
        const tier: Budget | undefined = exact ? a.budget : lower && model.years[lower] ? lower : undefined
        if (!tier) return null
        if (a.gearbox === "automatic" && !model.automatic) return null
        if (strictBody && a.body !== "any" && !model.body.includes(a.body)) return null

        const available = model.fuelsByBudget?.[tier] ?? model.fuels
        const rank = prefs.findIndex((fuel) => available.includes(fuel))
        if (rank === -1) return null
        const fuel = prefs[rank]

        const points =
          (exact ? 4 : 1) + // dentro do orçamento pesa mais do que "abaixo do orçamento"
          (prefs.length - rank) * 2 + // combustível mais adequado ao uso
          (a.body !== "any" && model.body.includes(a.body) ? 3 : 0) +
          (a.gearbox === "automatic" && model.automatic ? 1 : 0)
        return { model, years: model.years[tier]!, fuel, cheaper: !exact, points }
      })
      .filter((r): r is Recommendation & { points: number } => r !== null)
      .sort((x, y) => y.points - x.points)

  // Só o tipo de carro pedido (melhor 1–2 sugestões certas do que 3 fora do pedido).
  // Só se não houver nenhum desse tipo é que se mostram outros tipos.
  let list = score(true)
  const relaxed = list.length === 0
  if (relaxed) list = score(false)
  return { reason, fuels: prefs, recommendations: list.slice(0, 3), relaxed }
}
