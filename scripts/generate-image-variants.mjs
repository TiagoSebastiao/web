#!/usr/bin/env node
/**
 * Gera variantes responsivas (360, 720, 1080 e 1440 px de largura) das fotografias do site.
 *
 *   npm run images
 *
 * Porquê: na Vercel o `next/image` redimensionava as fotos a pedido. Na Cloudflare isso exigiria
 * o Cloudflare Images (pago por transformação). Em vez disso, as variantes são geradas uma vez,
 * aqui, e servidas como ficheiros estáticos (Workers Static Assets, sem custos).
 *
 * Regras:
 * - Os originais ficam intactos e no mesmo URL (/vehicles/…, /brand/…): continuam a ser usados no
 *   JSON-LD, no Open Graph e como variante maior.
 * - Nunca se aumenta a resolução: só se geram larguras MENORES do que o original.
 * - Só se redimensiona: sem cortes, sem alterar cores/exposição. Proporções mantidas.
 * - Nome com hash do conteúdo (ex.: 01-frente-lateral-720w.3f9a1c2b.webp): se a foto mudar, o URL
 *   muda, por isso as variantes podem ter cache permanente (ver public/_headers).
 * - O mapa original → variantes fica em lib/image-variants.json, lido por lib/image-loader.ts.
 *   Formato compacto (vai no JavaScript do browser): [hash, largura, altura, larguras geradas…].
 *   URL de cada variante: /img/<caminho sem extensão>-<largura>w.<hash>.webp
 *
 * Para acrescentar uma viatura: pôr as fotos em public/vehicles/<id>/ e correr `npm run images`
 * (o build também o corre; fotos já processadas são ignoradas).
 */
import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs"
import { dirname, join, posix, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const PUBLIC = join(ROOT, "public")
const OUT_DIR = join(PUBLIC, "img")
const MANIFEST = join(ROOT, "lib", "image-variants.json")

/** Larguras pedidas. Também são os `deviceSizes` do next.config.mjs. */
export const WIDTHS = [360, 720, 828, 1080, 1440]
/** Pastas (dentro de public/) e ficheiros com fotografias usadas pelo `next/image`. */
const SOURCES = ["vehicles", "brand", "logo.png"]
/**
 * Fotografias: WebP com perdas, qualidade alta. Imagens com transparência (logótipo): qualidade 90
 * com o canal de transparência intacto (metade do tamanho do WebP sem perdas, sem diferença visível).
 * As definições entram no hash: se mudarem, as variantes são regeneradas com outro nome.
 */
const PHOTO = { quality: 80, effort: 6, smartSubsample: true }
const ALPHA = { quality: 90, alphaQuality: 100, effort: 6 }

const toUrl = (file) => "/" + relative(PUBLIC, file).split(sep).join(posix.sep)

function listImages(entry) {
  const full = join(PUBLIC, entry)
  if (!existsSync(full)) return []
  if (statSync(full).isFile()) return [full]
  return readdirSync(full, { withFileTypes: true }).flatMap((e) => {
    const path = join(full, e.name)
    if (e.isDirectory()) return listImages(relative(PUBLIC, path))
    // og.jpg (partilhas) não passa pelo next/image.
    return /\.(webp|png|jpe?g)$/i.test(e.name) && !/^og\./i.test(e.name) ? [path] : []
  })
}

async function main() {
  const manifest = {}
  const keep = new Set()
  let created = 0

  for (const file of SOURCES.flatMap(listImages).sort()) {
    const input = readFileSync(file)
    const meta = await sharp(input).metadata()
    const { width, height } = meta
    const alpha = Boolean(meta.hasAlpha)
    const isWebp = meta.format === "webp"
    const url = toUrl(file)
    const base = url.replace(/^\//, "").replace(/\.[^.]+$/, "")
    const hash = createHash("sha1").update(input).update(JSON.stringify(alpha ? ALPHA : PHOTO)).digest("hex").slice(0, 8)

    // Larguras menores do que o original + o tamanho original (o próprio ficheiro, se já for WebP).
    const targets = WIDTHS.filter((w) => w < width)
    if (!isWebp) targets.push(width)

    for (const w of targets) {
      const outRel = `${base}-${w}w.${hash}.webp`
      const out = join(OUT_DIR, ...outRel.split("/"))
      keep.add(out)
      if (existsSync(out)) continue
      mkdirSync(dirname(out), { recursive: true })
      await sharp(input)
        .resize({ width: w, withoutEnlargement: true })
        .webp(alpha ? ALPHA : PHOTO)
        .toFile(out)
      created++
    }
    manifest[url] = [hash, width, height, ...targets]
  }

  // Remove variantes antigas (fotos apagadas ou alteradas).
  let removed = 0
  const sweep = (dir) => {
    if (!existsSync(dir)) return
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, e.name)
      if (e.isDirectory()) {
        sweep(path)
        if (readdirSync(path).length === 0) rmSync(path, { recursive: true })
      } else if (!keep.has(path)) {
        rmSync(path)
        removed++
      }
    }
  }
  sweep(OUT_DIR)

  const json =
    "{\n" +
    Object.entries(manifest)
      .map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`)
      .join(",\n") +
    "\n}\n"
  const previous = existsSync(MANIFEST) ? readFileSync(MANIFEST, "utf8") : ""
  if (json !== previous) writeFileSync(MANIFEST, json)

  console.log(
    `Imagens: ${Object.keys(manifest).length} fotografias, ${created} variantes novas, ${removed} removidas` +
      (json !== previous ? ", lib/image-variants.json atualizado." : "."),
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
