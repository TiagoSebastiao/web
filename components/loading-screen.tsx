"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Animate progress bar from 0 to 100 over ~1.8s
    const startTime = Date.now()
    const duration = 1800

    const tick = () => {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        // Start fade-out
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(() => onLoadingComplete(), 600)
        }, 200)
      }
    }

    requestAnimationFrame(tick)
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-10 flex flex-col items-center gap-2">
        <Image
          src="/logo.png"
          alt="OTEN MOTORS"
          width={220}
          height={64}
          className="h-16 w-auto md:h-20"
          priority
        />
      </div>

      {/* Loading bar */}
      <div className="w-48 overflow-hidden rounded-full bg-white/10 md:w-64" style={{ height: "3px" }}>
        <div
          className="h-full rounded-full bg-primary transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
