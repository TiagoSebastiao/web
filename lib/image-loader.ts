"use client"

import variants from "./image-variants.json"

/** [hash, largura original, altura original, larguras geradas…] — ver scripts/generate-image-variants.mjs */
const manifest = variants as unknown as Record<string, [string, number, number, ...number[]]>

/**
 * Loader do `next/image` (ver `images.loaderFile` no next.config.mjs).
 *
 * Em vez de pedir a um serviço que redimensione a foto (Vercel/Cloudflare Images, com custos),
 * escolhe a variante pré-gerada por `npm run images` mais pequena que ainda cobre a largura
 * pedida. O `next/image` continua a gerar o `srcset`/`sizes`, o lazy loading e o preload da
 * imagem LCP; o browser escolhe a variante certa para o ecrã.
 *
 * Imagens sem variantes (ex.: uma foto nova antes de correr o script) são servidas tal como estão.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const entry = manifest[src]
  if (!entry) return src
  const [hash, originalWidth, , ...generated] = entry
  const variant = (w: number) => `/img/${src.slice(1).replace(/\.[^.]+$/, "")}-${w}w.${hash}.webp`

  const best = generated.find((w) => w >= width)
  if (best) return variant(best)
  // Pedida uma largura maior do que todas as variantes: o original (WebP) ou a maior variante gerada.
  return src.endsWith(".webp") ? src : variant(generated[generated.length - 1] ?? originalWidth)
}
