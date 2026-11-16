/**
 * Páginas legais (Termos, Privacidade, Cookies). Só texto: a apresentação está em
 * components/layout/legal-page.tsx. Para mudar um texto, edita o ficheiro da página
 * nesta pasta; para um idioma novo, junta a chave ao objeto (o TypeScript avisa se faltar).
 */
export type LegalContent = {
  title: string
  updated: string
  sections: { title: string; text: string[] }[]
}

export { terms } from "./terms"
export { privacy } from "./privacy"
export { cookies } from "./cookies"
