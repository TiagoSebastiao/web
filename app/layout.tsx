import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/hooks/use-language"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "OTEN MOTORS - Stand Automóvel Premium",
  description:
    "Descubra veículos exclusivos onde qualidade e prestígio se encontram. Stand automóvel de confiança com os melhores carros do mercado.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      }, 
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
