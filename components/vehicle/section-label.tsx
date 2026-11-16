import type { ReactNode } from "react"

/** Título de secção numerado ("01 — Galeria"). O número e o extra ficam fora do <h2>. */
export function SectionLabel({ index, id, extra, children }: { index: number; id: string; extra?: ReactNode; children: ReactNode }) {
  return (
    <div data-reveal className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-white/40" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <span className="h-px w-8 bg-primary" aria-hidden="true" />
      <h2 id={id} className="text-2xl font-black tracking-tight text-white md:text-3xl">
        {children}
      </h2>
      {extra}
    </div>
  )
}
