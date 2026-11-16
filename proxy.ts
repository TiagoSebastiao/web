import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

/** Trata os prefixos de idioma (/en, /es, …) e envia o português para "/". */
export default createMiddleware(routing)

export const config = {
  // Todas as rotas exceto API, ficheiros internos do Next/Vercel e ficheiros com extensão (imagens, etc.).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
