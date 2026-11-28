import Image from "next/image"
import type { CSSProperties } from "react"
import { CarFront, KeyRound, MessageCircle, Route, Search } from "lucide-react"
import { useTranslations } from "next-intl"

const steps = [
  { key: "choose", icon: Search },
  { key: "talk", icon: MessageCircle },
  { key: "visit", icon: CarFront },
  { key: "drive", icon: KeyRound },
] as const

/** "Sobre nós" + "Como funciona": quem somos e como se compra um carro connosco. */
export function AboutSection() {
  const t = useTranslations("about")
  // Fotografia da marca: um carro do stand com o logótipo OTEN MOTORS na matrícula.
  const photo = "/brand/bmw-serie-4-grelha-oten-motors.webp"

  return (
    <section id="sobre-nos" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-primary" />
              {t("eyebrow")}
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">{t("title")}</h2>
            <p className="mt-7 text-lg leading-relaxed text-white/85">{t("text1")}</p>
            <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">{t("text2")}</p>
          </div>

          <div data-reveal="right" className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                {/* Recorte na parte de baixo da foto (vertical) para mostrar o emblema e a matrícula com o logótipo. */}
                <Image
                  src={photo}
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-bottom brightness-[0.8] saturate-[0.9]"
                />
                {/* Escurece ligeiramente para a foto se fundir com os tons escuros do site. */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-black/10" />
              </div>
              <div aria-hidden="true" className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-[2rem] border border-primary/40" />
              <div className="float-delayed absolute -top-5 right-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Route className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="max-w-[14rem]">
                  <p className="text-sm font-extrabold leading-tight text-white">{t("badgeTitle")}</p>
                  <p className="mt-1 text-xs leading-snug text-white/60">{t("badgeText")}</p>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-24">
          <h3 data-reveal className="mb-10 text-center text-2xl font-black text-white md:text-3xl">
            {t("stepsTitle")}
          </h3>
          <ol className="relative grid gap-6 md:grid-cols-4">
            {/* Linha que liga os passos (computador) */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 md:block"
            />
            {steps.map(({ key, icon: Icon }, index) => (
              <li
                key={key}
                data-reveal
                style={{ "--reveal-delay": `${index * 140}ms` } as CSSProperties}
                className="group relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-background text-primary shadow-[0_0_30px_-5px_oklch(0.58_0.24_25/0.6)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-black">
                    {index + 1}
                  </span>
                </span>
                <p className="mt-5 text-lg font-extrabold text-white">{t(`steps.${key}.title`)}</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/60">{t(`steps.${key}.text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
