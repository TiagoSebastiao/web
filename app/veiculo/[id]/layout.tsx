import type React from "react"
import { LanguageProvider } from "@/hooks/use-language"

export default function VehicleLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
