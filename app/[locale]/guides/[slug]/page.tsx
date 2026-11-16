import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, BookOpen, Check, ChevronDown, Clock, ExternalLink, Lightbulb } from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { Link, redirect } from "@/i18n/navigation"
import { siteConfig, whatsappLink } from "@/config/site"
import { absoluteUrl, localizedPath, ogLocale } from "@/lib/seo"
import {
  guide,
  guideLocaleForSlug,
  guideLocales,
  isGuideLocale,
  published,
  readingMinutes,
  reviewed,
  type GuideContent,
  type GuideLocale,
} from "@/data/guides/buying-a-car-in-portugal"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppIcon } from "@/components/ui/icons"

/*
 * Guia "Comprar carro em Portugal sendo estrangeiro".
 * Existe só em EN, FR e DE, cada um com o seu endereço:
 *   /en/guides/buying-a-car-in-portugal-as-a-foreigner
 *   /fr/guides/acheter-une-voiture-au-portugal-etranger
 *   /de/guides/auto-kaufen-in-portugal-als-auslaender
 * O conteúdo está em data/guides/buying-a-car-in-portugal.ts.
 */

type Props = { params: Promise<{ locale: string; slug: string }> }

const guidePath = (locale: GuideLocale) => `/guides/${guide[locale].slug}`

export function generateStaticParams() {
  return guideLocales.map((locale) => ({ locale, slug: guide[locale].slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isGuideLocale(locale) || guide[locale].slug !== slug) return { robots: { index: false } }

  const content = guide[locale]
  const languages: Record<string, string> = {}
  for (const l of guideLocales) languages[l] = absoluteUrl(localizedPath(l, guidePath(l)))
  languages["x-default"] = languages.en
  const url = languages[locale]

  return {
    title: content.metaTitle,
    description: content.description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      title: content.metaTitle,
      description: content.description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      publishedTime: published,
      modifiedTime: reviewed,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: content.title }],
    },
    twitter: { card: "summary_large_image", title: content.metaTitle, description: content.description },
  }
}

/** Dados estruturados: artigo + perguntas frequentes + migalhas (breadcrumbs). */
function guideJsonLd(locale: GuideLocale, content: GuideContent) {
  const url = absoluteUrl(localizedPath(locale, guidePath(locale)))
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: content.title,
        description: content.description,
        inLanguage: locale,
        datePublished: published,
        dateModified: reviewed,
        mainEntityOfPage: url,
        image: absoluteUrl("/og-default.jpg"),
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: content.labels.breadcrumbHome, item: absoluteUrl(localizedPath(locale, "/")) },
          { "@type": "ListItem", position: 2, name: content.title, item: url },
        ],
      },
    ],
  }
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  // O guia não existe em PT/ES: quem mudar de idioma aqui vai para a página inicial.
  if (!isGuideLocale(locale)) redirect({ href: "/", locale })
  // Slug de outro idioma (ex.: o seletor de idioma em /fr com o slug inglês): vai para o slug certo.
  if (guide[locale as GuideLocale].slug !== slug) {
    if (guideLocaleForSlug(slug)) redirect({ href: guidePath(locale as GuideLocale), locale })
    notFound()
  }

  const lang = locale as GuideLocale
  const content = guide[lang]
  const { labels } = content
  const minutes = readingMinutes(content)
  const reviewedLabel = new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(new Date(reviewed))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(lang, content)).replace(/</g, "\\u003c") }}
      />
      <Header />

      <main className="relative">
        {/* ---------- Topo ---------- */}
        <section className="relative -mt-20 overflow-hidden pt-20 md:-mt-24 md:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>

          <div className="container relative mx-auto max-w-6xl px-4 pb-12 pt-10 md:pb-16 md:pt-16">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    {labels.breadcrumbHome}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/80">
                  {content.eyebrow}
                </li>
              </ol>
            </nav>

            <p className="enter inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h1 className="text-gradient mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">{content.intro}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/50">
              <span>
                {labels.reviewed}: <time dateTime={reviewed}>{reviewedLabel}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {labels.readingTime.replace("{minutes}", String(minutes))}
              </span>
            </p>
          </div>
        </section>

        <div className="container relative mx-auto max-w-6xl px-4 pb-24">
          {/* ---------- Resposta rápida ---------- */}
          <section
            aria-labelledby="quick-title"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 md:p-8"
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 id="quick-title" className="text-xl font-black text-white md:text-2xl">
              {content.quick.title}
            </h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {content.quick.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* ---------- Índice ---------- */}
            <aside className="hidden lg:block">
              <nav aria-label={labels.toc} className="sticky top-28">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">{labels.toc}</p>
                <ol className="space-y-1 border-l border-white/10 text-sm">
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-white/60 transition-colors hover:border-primary hover:text-white"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#faq"
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-white/60 transition-colors hover:border-primary hover:text-white"
                    >
                      {labels.faq}
                    </a>
                  </li>
                </ol>
              </nav>
            </aside>

            {/* ---------- Conteúdo ---------- */}
            <article className="min-w-0 max-w-3xl">
              <div className="space-y-14">
                {content.sections.map((section) => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
                    <h2 id={`${section.id}-title`} className="text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-white/75 md:text-lg md:leading-relaxed">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.list && (
                      <ul className="mt-5 space-y-3">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-white/80">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.tip && (
                      <p className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm leading-relaxed text-white/90 md:text-base">
                        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        {section.tip}
                      </p>
                    )}
                  </section>
                ))}

                {/* ---------- Perguntas frequentes ---------- */}
                <section id="faq" aria-labelledby="faq-title" className="scroll-mt-28">
                  <h2 id="faq-title" className="text-2xl font-black tracking-tight text-white md:text-3xl">
                    {labels.faq}
                  </h2>
                  <div className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
                    {content.faq.map(({ q, a }) => (
                      <details key={q} className="group px-5 md:px-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                          {q}
                          <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <p className="pb-5 leading-relaxed text-white/70">{a}</p>
                      </details>
                    ))}
                  </div>
                </section>

                {/* ---------- Chamada para ação ---------- */}
                <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-red-700 to-red-950 p-8 md:p-10">
                  <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40" />
                  <div className="relative">
                    <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">{content.cta.title}</h2>
                    <p className="mt-3 max-w-xl text-white/85">{content.cta.text}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={whatsappLink(content.cta.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-black text-black transition-transform hover:-translate-y-0.5"
                      >
                        <WhatsAppIcon className="h-5 w-5 text-emerald-600" />
                        {content.cta.whatsapp}
                      </a>
                      <Link
                        href="/#veiculos"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-sm font-bold text-white transition-colors hover:bg-white/10"
                      >
                        {content.cta.vehicles}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* ---------- Fontes e aviso ---------- */}
                <section aria-labelledby="sources-title">
                  <h2 id="sources-title" className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    {labels.sources}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {content.sources.map((source) => (
                      <li key={source.url + source.label}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                        >
                          {source.label}
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{labels.disclaimer}</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
