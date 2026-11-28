"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

type Props = {
  id: string
  title: string
  /** Texto do botão (ex.: "Ver o vídeo"). */
  cta: string
  /** Nome acessível do botão (ex.: "Reproduzir o vídeo: …"). */
  playLabel: string
}

/**
 * Vídeo do YouTube "leve": mostra só a miniatura e um botão de reproduzir.
 * O leitor do YouTube (versão sem cookies) só é carregado quando o visitante clica,
 * para a página não ficar mais lenta nem enviar dados ao YouTube sem necessidade.
 * Quando o vídeo sai do ecrã (scroll), é posto em pausa automaticamente.
 */
export function YouTubeVideo({ id, title, cta, playLabel }: Props) {
  const [playing, setPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Pausa o vídeo quando deixa de estar visível (usa a API de mensagens do leitor do YouTube).
  useEffect(() => {
    if (!playing || !containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Menos de 25% do vídeo visível = saiu do ecrã.
        if (entry.intersectionRatio < 0.25) {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "https://www.youtube-nocookie.com",
          )
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [playing])

  return (
    <div ref={containerRef} className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      {playing ? (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true)
            trackEvent("video_play", { video_id: id })
          }}
          aria-label={playLabel}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- miniatura externa do YouTube */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
            <span className="pulse-ring relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_40px_-5px_oklch(0.58_0.24_25/0.8)] transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
              <Play className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-black/60 px-4 py-1.5 text-sm font-bold text-white backdrop-blur">{cta}</span>
          </span>

          <span className="absolute inset-x-0 bottom-0 p-5 text-left md:p-7">
            <span className="block text-base font-extrabold leading-snug text-white md:text-xl">{title}</span>
          </span>
        </button>
      )}
    </div>
  )
}
