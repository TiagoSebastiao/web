import { defineCloudflareConfig } from "@opennextjs/cloudflare"
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache"

/**
 * Todas as páginas são geradas no build (SSG, sem ISR/revalidate), por isso a cache só precisa de
 * ler as páginas pré-geradas a partir dos Static Assets: sem R2, KV, filas nem custos.
 * Se um dia houver páginas com `revalidate`, trocar para a cache R2 (ver docs/CLOUDFLARE_MIGRATION.md).
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
