"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export type HeroSlide = { id: string; images: string[]; name: string; meta: string; price: string }

/** Tempo de cada fotografia. Cada carro mostra 2–3 fotos antes de passar ao seguinte. */
const PHOTO_MS = 6500
const FADE_MS = 1600

/**
 * Montra do hero: fotografias das viaturas disponíveis, 2–3 por carro, a alternar no desktop.
 *
 * Transição sem "glitch": a foto nova entra POR CIMA da anterior, que fica totalmente opaca
 * por baixo até ao fim do fade (nunca há um momento com as duas meio transparentes a mostrar
 * o fundo preto). Todas as fotos são carregadas logo, para não aparecerem a meio do fade.
 *
 * A barra de progresso comanda a troca (fim da animação → foto seguinte), por isso pausar
 * congela tudo ao mesmo tempo. O rato não pausa; só o foco do teclado (acessibilidade).
 * Clicar na fotografia abre a página da viatura que está a ser mostrada.
 * Sem movimento para quem pediu menos movimento.
 *
 * Dois layouts (variante `wide:` em globals.css):
 * - empilhado (telemóvel, tablet, monitor vertical): a foto ocupa a largura toda, em cima,
 *   com a legenda por cima do fundo da foto; o texto do hero vem a seguir;
 * - largo (desktop deitado): a foto fica à direita (60%), a legenda no canto inferior direito.
 */
export function HeroShowcase({ slides }: { slides: HeroSlide[] }) {
  const t = useTranslations("hero")
  const [car, setCar] = useState(0)
  const [photo, setPhoto] = useState(0)
  const [previous, setPrevious] = useState<string | null>(null)
  const [paused, setPaused] = useState(true)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  // As fotos seguintes só entram na página depois de a página carregar (+1 s), para não
  // disputarem a rede e o processador com a primeira foto (a imagem LCP). Chegam muito antes
  // da primeira troca (6,5 s).
  const [loadRest, setLoadRest] = useState(false)
  const clearPrevious = useRef<number | undefined>(undefined)

  useEffect(() => {
    let timer: number | undefined
    const start = () => {
      timer = window.setTimeout(() => setLoadRest(true), 1000)
    }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => {
      window.removeEventListener("load", start)
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- preferência do sistema só existe no browser (a página é gerada estática, começa em pausa)
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(false)
    return () => window.clearTimeout(clearPrevious.current)
  }, [])

  const total = slides.reduce((n, s) => n + s.images.length, 0)
  const running = total > 1 && !paused && !keyboardFocus
  const slide = slides[car]
  const currentKey = `${car}-${photo}`

  const go = (nextCar: number, nextPhoto: number) => {
    if (nextCar === car && nextPhoto === photo) return
    setPrevious(currentKey)
    setCar(nextCar)
    setPhoto(nextPhoto)
    // Depois do fade, a anterior já não é precisa por baixo.
    window.clearTimeout(clearPrevious.current)
    clearPrevious.current = window.setTimeout(() => setPrevious(null), FADE_MS + 100)
  }

  const advance = () => {
    // Com "menos movimento" o CSS desliga as animações: não deixar a montra disparar.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (photo + 1 < slide.images.length) go(car, photo + 1)
    else go((car + 1) % slides.length, 0)
  }

  const playState = running ? "running" : "paused"

  return (
    <div
      className="relative wide:absolute wide:inset-0"
      onFocus={(event) => setKeyboardFocus(event.target.matches(":focus-visible"))}
      onBlur={() => setKeyboardFocus(false)}
    >
      {/* Fotografias. A primeira é a imagem LCP. */}
      <div aria-hidden="true" className="relative isolate aspect-[4/3] max-h-[72svh] w-full overflow-hidden [clip-path:inset(0)] wide:absolute wide:right-0 wide:top-0 wide:max-h-full wide:w-[60%]">
        {slides.flatMap((s, c) =>
          s.images.map((src, p) => {
            const key = `${c}-${p}`
            const isCurrent = key === currentKey
            const isPrevious = key === previous
            const isFirst = key === "0-0"
            if (!isFirst && !isCurrent && !isPrevious && !loadRest) return null
            return (
              <Image
                key={key}
                src={src}
                alt=""
                fill
                // Só a primeira foto é a imagem LCP: pré-carregada e com prioridade alta.
                priority={isFirst}
                fetchPriority={isFirst ? "high" : "low"}
                sizes="(min-width: 1024px) and (min-aspect-ratio: 5/4) 60vw, 100vw"
                className={cn(
                  "object-cover",
                  // A atual entra por cima com fade; a anterior fica opaca por baixo; as outras escondidas.
                  isCurrent && "z-20 opacity-100 transition-opacity ease-in-out",
                  isPrevious && "z-10 opacity-100",
                  !isCurrent && !isPrevious && "z-0 opacity-0",
                  // Zoom lento (Ken Burns) na atual e na anterior, para não "saltar" durante o fade.
                  (isCurrent || isPrevious) && "hero-zoom",
                )}
                style={{
                  // Fotos alternadas deslizam para lados opostos: movimento mais "cinema" e menos repetitivo.
                  ["--pan" as string]: p % 2 === 0 ? "-1.2%" : "1.2%",
                  transitionDuration: `${FADE_MS}ms`,
                  animationDuration: `${PHOTO_MS + FADE_MS}ms`,
                  animationPlayState: playState,
                }}
              />
            )
          }),
        )}
        {/* Degradês com várias paragens (curva suave, sem "degraus" visíveis no escuro). */}
        <div className="hero-fade-bottom absolute inset-0 z-30" />
        <div className="hero-fade-left absolute inset-y-0 -left-1 z-30 hidden w-3/4 wide:block" />
        <div className="absolute inset-x-0 top-0 z-30 h-40 bg-gradient-to-b from-background/70 to-transparent" />
        {/* Grão muito fino por cima dos degradês: elimina o efeito de bandas/píxeis nas zonas escuras. */}
        <div className="hero-grain absolute inset-0 z-40" />
        {/* Remate sólido nas arestas de baixo e da esquerda (evita uma linha de 1 px da foto em movimento). */}
        <div className="absolute inset-x-0 bottom-0 z-50 h-1 bg-background" />
        <div className="absolute inset-y-0 left-0 z-50 hidden w-1 bg-background wide:block" />
        {/* A foto toda é clicável. Fora do teclado e dos leitores de ecrã: a legenda já tem a mesma ligação. */}
        <Link href={`/veiculo/${slide.id}`} tabIndex={-1} className="absolute inset-0 z-[60]" />
      </div>

      {/* Legenda + progresso. Empilhado: sobre o fundo da foto. Largo: canto inferior direito do hero. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="container mx-auto flex justify-end px-4 pb-3 sm:pb-5 wide:pb-14">
          <div className="pointer-events-auto w-full wide:w-[min(480px,44vw)]">
            {total > 1 && (
              <div className="flex items-center gap-3">
                {slides.map((s, c) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(c, 0)}
                    aria-label={t("showSlide", { name: s.name })}
                    aria-current={c === car}
                    className="flex h-8 flex-1 items-center gap-1"
                  >
                    {/* Um traço por fotografia do carro: cheio (já vista), a encher (atual) ou vazio. */}
                    {s.images.map((_, p) => (
                      <span key={p} className="relative h-px flex-1 bg-white/25">
                        {(c < car || (c === car && p < photo)) && <span className="absolute inset-0 bg-white/60" />}
                        {c === car && p === photo && (
                          <span
                            key={currentKey}
                            onAnimationEnd={advance}
                            className="hero-progress absolute inset-y-0 left-0 bg-white"
                            style={{ animationDuration: `${PHOTO_MS}ms`, animationPlayState: playState }}
                          />
                        )}
                      </span>
                    ))}
                  </button>
                ))}
              </div>
            )}

            <Link href={`/veiculo/${slide.id}`} className="group mt-2 flex items-end justify-between gap-4 border-t border-white/15 pt-3 sm:gap-6 wide:mt-4 wide:pt-4">
              <span key={slide.id} className="caption-in min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
                  {String(car + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-base font-bold leading-snug text-white sm:text-lg">{slide.name}</span>
                <span className="mt-0.5 hidden text-sm text-white/60 sm:block">{slide.meta}</span>
              </span>
              <span key={`${slide.id}-price`} className="caption-in flex shrink-0 flex-col items-end gap-2">
                <span className="whitespace-nowrap text-base font-bold text-white">{slide.price}</span>
                <span className="hidden items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/60 sm:inline-flex transition-colors group-hover:text-white">
                  {t("viewCar")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
