// Next.js 16 chama a isto "proxy.ts". Fica como middleware.ts (Edge) porque o OpenNext para Cloudflare
// só suporta o proxy.ts (Node.js) a título experimental; ver docs/CLOUDFLARE_MIGRATION.md.
import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

/** Trata os prefixos de idioma (/en, /es, …) e envia o português para "/". */
export default createMiddleware(routing)

export const config = {
  // Todas as rotas exceto API, ficheiros internos do Next/Vercel e ficheiros com extensão (imagens, etc.).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
