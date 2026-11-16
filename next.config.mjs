import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

/*
 * Content-Security-Policy: o browser só carrega scripts, estilos, imagens e ligações do
 * próprio site. 'unsafe-inline' é necessário porque as páginas são estáticas (SSG) e o
 * Next.js, o JSON-LD e o script de animações usam scripts inline; ainda assim bloqueia
 * qualquer script de outro domínio, plugins, <base> alterado e o site dentro de iframes.
 * vercel.live: barra de comentários da Vercel nas pré-visualizações.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // As imagens são otimizadas automaticamente (tamanho certo + WebP/AVIF) pela Vercel.
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 só para a montra do primeiro ecrã (fotos grandes); o resto usa 75.
    qualities: [75, 90],
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
