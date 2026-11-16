import { notFound } from "next/navigation"

/** Qualquer URL desconhecido dentro de um idioma mostra a página 404 traduzida. */
export default function CatchAll() {
  notFound()
}
