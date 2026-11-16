import type { CSSProperties } from "react"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { siteConfig, whatsappLink } from "@/config/site"
import { WhatsAppIcon } from "@/components/ui/icons"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/home/contact-form"

export function ContactSection() {
  const t = useTranslations("contact")

  const channels = [
    {
      icon: WhatsAppIcon,
      title: t("whatsapp"),
      value: t("whatsappAction"),
      href: whatsappLink(t("whatsappMessage")),
      external: true,
      accent: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Phone,
      title: t("phoneTitle"),
      value: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
      accent: "from-primary to-red-800",
    },
    {
      icon: Mail,
      title: t("emailTitle"),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      accent: "from-zinc-500 to-zinc-700",
    },
  ]

  return (
    <section id="contactos" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ul className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {channels.map(({ icon: Icon, title, value, href, external, accent }, index) => (
              <li key={title} data-reveal="left" style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card-glow group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wider text-white/50">{title}</span>
                    <span className="block truncate font-bold text-white">{value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div data-reveal="right" className="relative">
            <div aria-hidden="true" className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/50 via-white/10 to-transparent" />
            <div className="relative rounded-[2rem] bg-card p-6 sm:p-8 md:p-10">
              <h3 className="mb-7 text-2xl font-black text-white">{t("formTitle")}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
