import type { CSSProperties } from "react"
import { BadgeCheck, Camera, HandCoins, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"

const items = [
  { key: "selection", icon: BadgeCheck },
  { key: "photos", icon: Camera },
  { key: "direct", icon: MessageCircle },
  { key: "buy", icon: HandCoins },
] as const

/** Os 4 pontos fortes do stand, em cartões. */
export function HighlightsSection() {
  const t = useTranslations("highlights")

  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t("title")} title={t("heading")} subtitle={t("subtitle")} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              className="card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <span className="absolute -right-6 -top-6 text-[7rem] font-black leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-primary/10">
                0{index + 1}
              </span>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-red-800 text-white shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 text-lg font-extrabold text-white">{t(`${key}.title`)}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/60">{t(`${key}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
