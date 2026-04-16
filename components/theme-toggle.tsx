"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-white">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group h-10 w-10 rounded-lg text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
