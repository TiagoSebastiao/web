import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const securityHeaders = [
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
