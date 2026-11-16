import type { ComponentType, CSSProperties, SVGProps } from "react"
import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { TikTokIcon } from "@/components/ui/icons"
import { SectionHeading } from "@/components/ui/section-heading"

type Network = { key: keyof typeof siteConfig.social; name: string; icon: ComponentType<SVGProps<SVGSVGElement>> }

const networks: Network[] = [
  { key: "instagram", name: "Instagram", icon: Instagram },
  { key: "facebook", name: "Facebook", icon: Facebook },
  { key: "tiktok", name: "TikTok", icon: TikTokIcon },
  { key: "youtube", name: "YouTube", icon: Youtube },
]

/** "@otenmotors" a partir do link do perfil (último segmento do URL). */
function handle(url: string) {
  const last = new URL(url).pathname.split("/").filter(Boolean).pop() ?? ""
  return last.startsWith("@") ? last : `@${last}`
}

/** Redes sociais: quatro cartões com ligação para cada perfil, que entram um a um ao fazer scroll. */
export function SocialSection() {
  const t = useTranslations("social")

  return (
    <section aria-labelledby="social-title" className="relative scroll-mt-20 py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} id="social-title" />

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {networks.map(({ key, name, icon: Icon }, i) => {
            const href = siteConfig.social[key]
            return (
              <li key={key} data-reveal style={{ "--reveal-delay": `${i * 110}ms` } as CSSProperties}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("open", { name })}
                  className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 transition-transform duration-500 hover:-translate-y-1.5 md:p-7"
                >
                  {/* Símbolo da rede em grande, por trás (como os números da secção "Comprar carro, sem
                   * complicações"); acende em vermelho e roda ligeiramente ao passar o rato. */}
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 text-white/[0.04] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-primary/15 md:h-44 md:w-44"
                  />
                  <span className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-red-800 text-white shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:h-14 md:w-14">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-white/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="relative mt-8 block text-lg font-extrabold tracking-tight text-white md:mt-10 md:text-xl">{name}</span>
                  <span className="relative mt-1 block truncate text-sm text-white/50">{handle(href)}</span>
                  <span className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-primary">
                    <span className="h-px w-5 bg-current transition-all duration-500 group-hover:w-8" aria-hidden="true" />
                    {t("follow")}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
