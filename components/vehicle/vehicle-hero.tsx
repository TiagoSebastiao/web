import type { CSSProperties } from "react"
import Image from "next/image"
import { ArrowLeft, Images } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import type { Vehicle } from "@/data/vehicles"
import { formatKm } from "@/lib/format"
import { WhatsAppIcon } from "@/components/ui/icons"
import { VehicleIntro } from "@/components/vehicle/vehicle-intro"

type Props = { vehicle: Vehicle; locale: string; name: string; price: string; whatsappHref: string }

/**
 * Hero: foto de capa em ecrã inteiro.
 * Coluna flex: o link "voltar" fica no topo, logo abaixo do menu;
 * o título, o preço e os botões ficam encostados ao fundo da foto.
 */
export async function VehicleHero({ vehicle, locale, name, price, whatsappHref }: Props) {
  const t = await getTranslations("vehicle")
  const tl = await getTranslations("labels")
  const tv = await getTranslations("vehicles")
  const unavailable = vehicle.status !== "available"

  return (
    <section aria-labelledby="vehicle-title" className="relative -mt-20 flex min-h-[88svh] flex-col overflow-hidden md:-mt-24">
      <VehicleIntro vehicleId={vehicle.id} />
      {/* As fotos são 4:3. No telemóvel a foto aparece inteira no topo (sem cortar o carro dos lados);
       * a partir de md ocupa o ecrã todo. */}
      {/* Moldura da foto: a fotografia, os degradês e o escurecimento ficam sempre juntos e parados
       * uns em relação aos outros, por isso a foto nunca "clareia" quando a página desce. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-20 aspect-[4/3] overflow-hidden md:inset-0 md:aspect-auto">
        <div data-intro-media className="absolute inset-0">
          <Image
            src={vehicle.images[0]}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className={`ken-burns object-cover object-[50%_55%] ${unavailable ? "grayscale-[60%]" : ""}`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:via-background/50 md:to-black/50" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background/90 via-background/30 to-transparent md:block" />
        {/* Escurece à medida que a página desce (controlado por VehicleIntro). */}
        <div data-intro-shade className="absolute inset-0 bg-background opacity-0 [will-change:opacity]" />
      </div>
      {/* Fusão fixa com o fundo na base da secção: a foto desce mais devagar (parallax), mas aqui
       * nunca aparece uma aresta. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent md:h-64" />

      {/* Marca gigante em contorno, por trás do título (decorativa). */}
      <p
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-[0.16em] right-0 select-none text-[30vw] font-black leading-none tracking-tighter md:text-[20vw]"
      >
        {vehicle.make}
      </p>

      <div className="container relative mx-auto max-w-6xl px-4 pt-24 md:pt-32">
        <Link
          href="/#veiculos"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("back")}
        </Link>
      </div>

      <div className="container relative mx-auto mt-auto max-w-6xl px-4 pb-12 pt-16 md:pb-20">
        <span data-intro-target className="enter inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
          {unavailable ? (
            tv(`status.${vehicle.status}`)
          ) : (
            <>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgb(52_211_153/0.6)]" aria-hidden="true" />
              {tv("status.available")}
            </>
          )}
        </span>

        <h1 id="vehicle-title" className="text-gradient mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
          {name}
        </h1>
        <p className="enter mt-4 text-base text-white/75 md:text-lg" style={{ "--enter-delay": "100ms" } as CSSProperties}>
          {vehicle.year} · {formatKm(locale, vehicle.mileageKm)} · {tl(`fuel.${vehicle.fuel}`)} · {tl(`transmission.${vehicle.transmission}`)}
        </p>

        <div className="enter mt-7 flex flex-wrap items-center gap-3" style={{ "--enter-delay": "180ms" } as CSSProperties}>
          <p
            className={`inline-flex h-14 items-center rounded-2xl bg-white px-6 font-black tracking-tight text-black ${vehicle.price ? "text-2xl md:text-3xl" : "text-lg"}`}
          >
            {price}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow hidden h-14 items-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t("whatsappCta")}
          </a>
          <a
            href="#galeria"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            {t("viewGallery")} ({vehicle.images.length})
          </a>
        </div>
      </div>
    </section>
  )
}
