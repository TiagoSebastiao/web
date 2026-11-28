import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

/** ESLint (regras recomendadas do Next.js: Core Web Vitals, React, acessibilidade básica e TypeScript). */
const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  { ignores: [".next/**", ".open-next/**", ".wrangler/**", "node_modules/**", "next-env.d.ts", "cloudflare-env.d.ts"] },
]

export default config
