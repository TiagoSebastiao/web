import { cn } from "@/lib/utils"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  /** id do <h2>, para aria-labelledby da secção. */
  id?: string
}

/** Título de secção usado em todo o site (rótulo + título + subtítulo), com animação ao aparecer. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center", className, id }: Props) {
  return (
    <div
      data-reveal
      className={cn("mb-12 md:mb-16", align === "center" && "mx-auto max-w-2xl text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/55",
          )}
        >
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-primary" aria-hidden="true" />}
        </p>
      )}
      <h2 id={id} className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base text-white/60 md:text-lg">{subtitle}</p>}
    </div>
  )
}
