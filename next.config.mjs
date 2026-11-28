import createNextIntlPlugin from "next-intl/plugin"
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

/*
 * Content-Security-Policy: o browser só carrega scripts, estilos, imagens e ligações do
 * próprio site. 'unsafe-inline' é necessário porque as páginas são estáticas (SSG) e o
 * Next.js, o JSON-LD e o script de animações usam scripts inline; ainda assim bloqueia
 * qualquer script de outro domínio, plugins, <base> alterado e o site dentro de iframes.
 * YouTube: miniatura (i.ytimg.com) e leitor sem cookies (youtube-nocookie.com) do vídeo
 * da secção "Redes sociais"; o leitor só é carregado quando o visitante clica em reproduzir.
 * Google Analytics 4 (googletagmanager / google-analytics): só carrega com consentimento.
 *
 * Estes cabeçalhos aplicam-se às páginas e à API (respostas do Worker). Os ficheiros estáticos
 * (imagens, _next/static) são servidos pela Cloudflare sem passar pelo Worker: os cabeçalhos
 * deles estão em public/_headers.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src https://www.youtube-nocookie.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // A Vercel acrescentava este cabeçalho sozinha; na Cloudflare tem de ser o site a enviá-lo.
  // Sem includeSubDomains/preload: não afeta outros subdomínios de otenmotors.com.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  /*
   * Imagens: as variantes (360/720/1080/1440 px) são geradas por `npm run images`
   * (scripts/generate-image-variants.mjs) e servidas como ficheiros estáticos pela Cloudflare,
   * sem serviço de redimensionamento pago. O loader escolhe a variante; o next/image continua a
   * tratar do srcset/sizes, lazy loading e preload da imagem principal.
   */
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [360, 720, 828, 1080, 1440],
    imageSizes: [],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },

  // URLs antigos que mudaram de nome (para não perder visitas nem SEO).
  async redirects() {
    return [
      {
        source: "/veiculo/bmw-serie-4-420d-gran-coupe-2015",
        destination: "/veiculo/bmw-serie-4-420d-coupe-2015",
        permanent: true,
      },
      {
        source: "/:locale(en|es|fr|de)/veiculo/bmw-serie-4-420d-gran-coupe-2015",
        destination: "/:locale/veiculo/bmw-serie-4-420d-coupe-2015",
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)

// Dá acesso às bindings da Cloudflare durante o `next dev` (ver docs/CLOUDFLARE_MIGRATION.md).
initOpenNextCloudflareForDev()
