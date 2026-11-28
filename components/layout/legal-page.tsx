import type { LegalContent } from "@/data/legal"
import { siteConfig } from "@/config/site"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const { legal, contact } = siteConfig

/**
 * Campos que os textos legais podem usar entre chavetas, ex.: "{company}".
 * Vêm de config/site.ts; o que estiver vazio aparece como "[…]" para se ver o que falta preencher.
 */
const fields: Record<string, string> = {
  site: siteConfig.url.replace(/^https?:\/\//, ""),
  company: legal.companyName || siteConfig.name,
  legalForm: legal.legalForm,
  nipc: legal.nipc,
  office: legal.registeredOffice,
  registry: legal.commercialRegistry,
  capital: legal.shareCapital,
  showroom: legal.showroomAddress,
  email: contact.email,
  phone: contact.phoneDisplay,
  adr: legal.adrEntityName,
  adrUrl: legal.adrEntityUrl,
  warrantyPartner: [legal.warrantyPartnerName, legal.warrantyPartnerUrl && `(${legal.warrantyPartnerUrl})`].filter(Boolean).join(" "),
}

function fill(text: string) {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in fields ? fields[key] || "[…]" : match))
}

/** Apresentação comum das páginas legais (o texto vem de data/legal/). */
export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto px-4 pb-14 pt-28 md:pb-20 md:pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="hyphens-auto break-words text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">{content.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">{content.updated}</p>

            <div className="mt-10 space-y-8">
              {content.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-muted-foreground">
                    {section.text.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed">
                        {fill(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
