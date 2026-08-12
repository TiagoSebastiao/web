import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.otenmotors.com"),

  title: {
    default: "OTEN MOTORS | Stand Automóvel",
    template: "%s | OTEN MOTORS",
  },

  description:
    "OTEN MOTORS é um stand automóvel especializado na compra e venda de viaturas selecionadas, com financiamento, garantia e acompanhamento personalizado.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
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

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.otenmotors.com/#website",

        url: "https://www.otenmotors.com/",

        name: "OTEN MOTORS",

        alternateName: [
          "Oten Motors",
          "otenmotors.com",
        ],

        publisher: {
          "@id": "https://www.otenmotors.com/#organization",
        },
      },

      {
        "@type": "AutoDealer",
        "@id": "https://www.otenmotors.com/#organization",

        name: "OTEN MOTORS",
        alternateName: "Oten Motors",

        url: "https://www.otenmotors.com/",

        logo: {
          "@type": "ImageObject",
          url: "https://www.otenmotors.com/icon.png",
        },

        telephone: "+351967339061",

        email: "geral@otenmotors.com",

        areaServed: {
          "@type": "Country",
          name: "Portugal",
        },

        sameAs: [
          "https://www.instagram.com/otenmotors/",
          "https://www.facebook.com/otenmotors/",
          "https://www.tiktok.com/@otenmotors",
          "https://www.youtube.com/@otenmotors",
        ],
      },
    ],
  }
  return (
    <html lang="pt" className="dark scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  )
}