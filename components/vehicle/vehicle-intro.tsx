"use client"

import { useEffect } from "react"

/** Tempo com a foto em ecrã inteiro antes de descer. */
const HOLD_MS = 1800
/** Duração da descida (longa e com curva suave nas pontas). */
const SCROLL_MS = 1600

/** Curva "ease-in-out" quíntica: arranca e trava muito devagar, sem solavancos. */
const ease = (t: number) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2)

/**
 * Entrada da página da viatura:
 * 1. Mostra a foto de capa em ecrã inteiro durante uns segundos.
 * 2. Desce sozinha, devagar, até enquadrar o título, os mostradores e a galeria.
 *
 * Em paralelo, enquanto a página desce (sozinha ou pelo utilizador), a foto escurece aos
 * poucos. Isto suaviza a passagem da foto (com muita textura) para o conteúdo.
 *
 * Não desce sozinha se: o utilizador pediu menos movimento, a página estiver a meio no
 * momento da descida (voltar atrás, link com #, scroll manual), ou o utilizador mexer no
 * rato/teclado/ecrã antes disso.
 *
 * As condições são verificadas no momento da descida e não ao abrir: quando se chega da
 * homepage já com scroll, o Next.js só repõe a página no topo depois de este efeito correr.
 */
export function VehicleIntro({ vehicleId }: { vehicleId: string }) {
  useEffect(() => {
    const media = document.querySelector<HTMLElement>("[data-intro-media]")
    const shade = document.querySelector<HTMLElement>("[data-intro-shade]")
    const target = document.querySelector<HTMLElement>("[data-intro-target]")
    const header = document.querySelector<HTMLElement>("header")
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ---------- Escurecer a foto durante o scroll ----------
    // Só opacidade, numa camada já preparada desde o início (will-change: opacity). Não se mexe
    // a foto (transform) durante o scroll: no Chrome isso reorganizava as camadas no arranque da
    // descida e, durante um frame, a foto aparecia sem os degradês escuros por cima (o "flash").
    let frame = 0
    const paint = () => {
      frame = 0
      if (!shade || !media) return
      const height = media.offsetHeight || window.innerHeight
      const progress = Math.min(1, Math.max(0, window.scrollY / height))
      shade.style.opacity = String(Math.min(0.75, progress * 0.9))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    if (!reduce) {
      window.addEventListener("scroll", onScroll, { passive: true })
      paint()
    }

    // ---------- Descida automática ----------
    let timer = 0
    let raf = 0
    let cancelled = false
    const cancel = () => {
      cancelled = true
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
      document.documentElement.style.scrollBehavior = ""
    }
    const interactions = ["wheel", "touchstart", "keydown", "mousedown"] as const
    interactions.forEach((type) => window.addEventListener(type, cancel, { passive: true, once: true }))

    if (!reduce && target && !window.location.hash) {
      timer = window.setTimeout(() => {
        if (cancelled || window.scrollY > 8 || window.location.hash) return
        const offset = (header?.offsetHeight ?? 72) + 16
        const to = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset)
        const from = window.scrollY
        const start = performance.now()
        // O html tem "scroll-behavior: smooth"; aqui cada frame tem de ser imediato.
        document.documentElement.style.scrollBehavior = "auto"
        const step = (now: number) => {
          if (cancelled) return
          const t = Math.min(1, (now - start) / SCROLL_MS)
          window.scrollTo(0, from + (to - from) * ease(t))
          if (t < 1) raf = requestAnimationFrame(step)
          else document.documentElement.style.scrollBehavior = ""
        }
        raf = requestAnimationFrame(step)
      }, HOLD_MS)
    }

    return () => {
      cancel()
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      interactions.forEach((type) => window.removeEventListener(type, cancel))
    }
  }, [vehicleId])

  return null
}
