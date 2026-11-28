import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/config/site"
import { ogLocale } from "@/lib/seo"
import { GoogleAnalytics } from "@/components/layout/google-analytics"
import { CookieBanner } from "@/components/layout/cookie-banner"
import "@/app/globals.css"
import "@/app/effects.css"

// Montserrat variável: um só ficheiro (latin) cobre todos os pesos usados (400–900), em vez de
// um ficheiro por peso. Alojada no próprio site pelo next/font (sem pedidos ao Google).
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

/**
 * Textos enviados para o browser: só os dos componentes interativos ("use client").
 * O resto é desenhado no servidor e não precisa de ir no HTML de cada página.
 * Ao criar um componente cliente com useTranslations("x"), juntar "x" aqui.
 */
const CLIENT_NAMESPACES = ["nav", "hero", "vehicles", "vehicle", "labels", "finance", "finder", "contact", "cookieBanner"] as const

/**
 * Animação "aparecer ao fazer scroll" (ver app/effects.css). Script mínimo,
 * independente do React: se não correr, o conteúdo aparece normalmente.
 */
const revealScript = `(function(){var d=document.documentElement;if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("reveal-ready");var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute("data-shown","");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:0.1});function scan(){document.querySelectorAll("[data-reveal]:not([data-observed])").forEach(function(el){el.setAttribute("data-observed","");io.observe(el)})}scan();document.addEventListener("DOMContentLoaded",scan);new MutationObserver(scan).observe(d,{childList:true,subtree:true})})();`

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t("title"), template: `%s | ${siteConfig.name}` },
    description: t("description"),
    applicationName: siteConfig.name,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
      locale: ogLocale[locale],
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), images: ["/og-default.jpg"] },
    icons: { icon: [{ url: "/icon.png", type: "image/png" }], apple: "/apple-icon.png" },
    // Verificação do Google Search Console por meta tag (opcional; ver config/site.ts).
    ...(siteConfig.google.searchConsoleVerification
      ? { verification: { google: siteConfig.google.searchConsoleVerification } }
      : {}),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "meta" })
  const messages = await getMessages()
  const clientMessages = Object.fromEntries(CLIENT_NAMESPACES.map((ns) => [ns, messages[ns]]))

  // Dados estruturados do negócio (schema.org) para o Google.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        inLanguage: routing.locales,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "AutoDealer",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        description: t("description"),
        url: `${siteConfig.url}/`,
        logo: `${siteConfig.url}/icon.png`,
        image: `${siteConfig.url}/og-default.jpg`,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        // Localização: Faro, Algarve (sem morada de rua enquanto o stand não tiver morada própria).
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.countryCode,
        },
        // Entrega das viaturas em todo o Portugal continental.
        areaServed: [
          { "@type": "City", name: siteConfig.location.city },
          { "@type": "AdministrativeArea", name: siteConfig.location.region },
          { "@type": "AdministrativeArea", name: siteConfig.location.deliveryArea },
          { "@type": "Country", name: siteConfig.location.country },
        ],
        ...(siteConfig.legal.companyName ? { legalName: siteConfig.legal.companyName } : {}),
        ...(siteConfig.legal.nipc ? { taxID: siteConfig.legal.nipc } : {}),
        sameAs: [...Object.values(siteConfig.social), siteConfig.standvirtualUrl.replace(/\/inventory$/, "")],
      },
    ],
  }

  return (
    // data-scroll-behavior: o Next.js desliga o scroll suave durante a mudança de página
    // (senão, ao abrir um carro a partir da homepage, a página subia animada e entrava em
    // conflito com a descida automática da página da viatura).
    <html lang={locale} className={`dark ${montserrat.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <NextIntlClientProvider messages={clientMessages}>
          {children}
          <CookieBanner />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
