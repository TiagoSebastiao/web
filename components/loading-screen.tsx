"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState<"logo" | "content" | "fadeOut" | "complete">("logo")
  const { t } = useLanguage()

  useEffect(() => {
    // Stage 1: Show logo (1.2s)
    const logoTimer = setTimeout(() => {
      setStage("content")
    }, 1200)

    // Stage 2: Show title and car (2.5s after logo)
    const contentTimer = setTimeout(() => {
      setStage("fadeOut")
    }, 3700)

    // Stage 3: Fade out loading screen (0.8s after content)
    const fadeOutTimer = setTimeout(() => {
      setStage("complete")
      onLoadingComplete()
    }, 4500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(contentTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [onLoadingComplete])

  if (stage === "complete") return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        stage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Animated accent lines */}
      <div className="absolute left-0 top-1/3 h-px w-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-1000 ${
            stage !== "logo" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />
      </div>
      <div className="absolute bottom-1/3 left-0 h-px w-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-1000 delay-200 ${
            stage !== "logo" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>

      {/* Logo */}
      <div
        className={`relative z-10 mb-8 transition-all duration-700 ${
          stage === "logo"
            ? "scale-100 opacity-100"
            : "scale-90 opacity-100 -translate-y-8"
        }`}
      >
        <div className="relative">
          <Image
            src="/logo.png"
            alt="OTEN MOTORS"
            width={200}
            height={60}
            className="h-16 w-auto md:h-20"
            priority
          />
          {/* Glow effect behind logo */}
          <div 
            className={`absolute inset-0 -z-10 blur-2xl transition-opacity duration-1000 ${
              stage === "logo" ? "opacity-40" : "opacity-20"
            }`}
          >
            <div className="h-full w-full rounded-full bg-primary/30" />
          </div>
        </div>
      </div>

      {/* Title - slides in from left */}
      <div className="relative z-10 overflow-hidden">
        <h1
          className={`text-center text-4xl font-black uppercase tracking-wider text-foreground transition-all duration-700 ease-out md:text-5xl lg:text-6xl ${
            stage !== "logo"
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          {t.hero.title}
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className={`relative z-10 mt-4 max-w-lg px-4 text-center text-sm font-medium text-muted-foreground transition-all delay-200 duration-700 md:text-base ${
          stage !== "logo"
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        {t.hero.subtitle}
      </p>

      {/* Featured Car - slides in from right */}
      <div className="relative z-10 mt-8 overflow-hidden">
        <div
          className={`transition-all delay-300 duration-700 ease-out ${
            stage !== "logo"
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative">
            <Image
              src="/luxury-mercedes-benz-c-class-amg-black.jpg"
              alt="Featured Vehicle"
              width={600}
              height={400}
              className="h-48 w-auto rounded-lg object-cover shadow-2xl md:h-64 lg:h-72"
              priority
            />
            {/* Premium shadow/glow effect */}
            <div className="absolute -inset-1 -z-10 rounded-lg bg-primary/20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      <div
        className={`relative z-10 mt-8 flex items-center gap-2 transition-all duration-500 ${
          stage === "fadeOut" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
          <div 
            className="h-full animate-pulse rounded-full bg-primary transition-all duration-300"
            style={{
              width: stage === "logo" ? "30%" : stage === "content" ? "70%" : "100%"
            }}
          />
        </div>
      </div>
    </div>
  )
}
