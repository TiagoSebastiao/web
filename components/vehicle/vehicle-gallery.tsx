"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

type Props = { images: string[]; name: string; /** Pré-carregar a 1.ª foto (desligar se já houver outra imagem LCP na página). */ priority?: boolean }

/**
 * Galeria da viatura: imagem principal, miniaturas e vista ampliada
 * (fecha com Esc, navega com as setas do teclado e com swipe no telemóvel).
 */
export function VehicleGallery({ images, name, priority = true }: Props) {
  const t = useTranslations("vehicle")
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const total = images.length

  const previous = useCallback(() => setIndex((i) => (i === 0 ? total - 1 : i - 1)), [total])
  const next = useCallback(() => setIndex((i) => (i === total - 1 ? 0 : i + 1)), [total])

  useEffect(() => {
    if (!expanded) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false)
      if (event.key === "ArrowLeft") previous()
      if (event.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [expanded, previous, next])

  const swipe = {
    onTouchStart: (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchStart === null) return
      const diff = touchStart - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) (diff > 0 ? next : previous)()
      setTouchStart(null)
    },
  }

  const alt = (i: number) => t("photoAlt", { name, number: i + 1 })
  const navButton =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-primary"

  return (
    <div className="min-w-0">
      <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]" {...swipe}>
        <Image
          src={images[index]}
          alt={alt(index)}
          fill
          priority={priority && index === 0}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />

        <button type="button" onClick={() => setExpanded(true)} aria-label={t("openPhoto")} className="absolute inset-0 cursor-zoom-in" />

        {total > 1 && (
          <>
            <button type="button" onClick={previous} aria-label={t("previousPhoto")} className={cn(navButton, "left-3")}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={next} aria-label={t("nextPhoto")} className={cn(navButton, "right-3")}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
          {t("photoCounter", { current: index + 1, total })}
        </span>
        <Expand className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 text-white/80" aria-hidden="true" />
      </div>

      {total > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, i) => (
            <li key={image} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t("thumbnail", { number: i + 1 })}
                aria-current={i === index}
                className={cn(
                  "relative block aspect-[4/3] w-20 overflow-hidden rounded-xl border-2 transition-all duration-300 md:w-28",
                  i === index ? "border-primary shadow-[0_0_20px_-4px_oklch(0.58_0.24_25/0.8)]" : "border-transparent opacity-50 hover:-translate-y-0.5 hover:opacity-100",
                )}
              >
                <Image src={image} alt="" fill sizes="112px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          onClick={() => setExpanded(false)}
          {...swipe}
        >
          <div className="relative aspect-[4/3] max-h-[85vh] w-[94vw] max-w-[calc(85vh*4/3)]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[index]} alt={alt(index)} fill sizes="94vw" className="object-contain" />
          </div>

          <button
            type="button"
            autoFocus
            onClick={() => setExpanded(false)}
            aria-label={t("closePhoto")}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); previous() }}
                aria-label={t("previousPhoto")}
                className={cn(navButton, "left-4")}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label={t("nextPhoto")}
                className={cn(navButton, "right-4")}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
            {t("photoCounter", { current: index + 1, total })}
          </span>
        </div>
      )}
    </div>
  )
}
