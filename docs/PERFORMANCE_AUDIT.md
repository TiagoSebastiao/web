# Auditoria de performance

Medições feitas em 28/11/2026, nesta máquina, com Lighthouse 12 (Chrome headless, perfil telemóvel com rede 4G lenta simulada, e perfil desktop).
- **Antes:** versão anterior (`next start`, com o otimizador de imagens do Next a fazer de Vercel).
- **Depois:** versão Cloudflare (`wrangler dev` local, runtime dos Workers).
- **SEO:** em `localhost` o Lighthouse dá 92, porque o canonical aponta para `https://www.otenmotors.com`. Com o domínio real em HTTPS apontado para o Worker local, dá **100** (ver SEO_AUDIT.md).
- **Variação:** o Lighthouse varia bastante entre corridas nesta máquina (o mesmo código deu 81 e 91). Os valores "depois" são a **mediana de 3 corridas** (28/11, versão final).

| Página | Performance antes → depois | Acessib. | Boas práticas | LCP antes → depois | TBT antes → depois | Peso antes → depois |
|---|---|---|---|---|---|---|
| Homepage, telemóvel | **82 → 90** (89/90/91) | 100 → 100 | 96 → 100 | 4,8 → 3,6 s | 110 → 55 ms | 1036 → 830 KB |
| Homepage, desktop | **98 → 100** (99/100/100) | 100 → 100 | 96 → 100 | 1,1 → 0,8 s | 0 → 0 ms | 1053 → 1014 KB |
| Viatura Série 4, telemóvel | **77 → 88** (87/88/91) | 100 → 100 | 93 → 96 | 4,0 → 3,7 s | 400 → 49 ms | 491 → 542 KB |
| Termos, telemóvel | **91 → 95** (94/95/96) | 100 → 100 | 96 → 100 | 3,4 → 2,9 s | 90 → 31 ms | 377 → 346 KB |
| Guia (DE), telemóvel | — → **93** (93/93/96) | — → **100** | — → 100 | — → 3,3 s | — → 30 ms | — → 356 KB |

CLS: 0 a 0,013 em todas (sem saltos de layout). Acessibilidade 100 em todas as páginas medidas (o guia DE estava em 96 por contraste; corrigido).

**Objetivo 95–100 no telemóvel:**
- **Atingido:** termos (95) e desktop (100).
- **Perto, mas não atingido:** homepage (90), viatura (88) e guia (93).
- O LCP real medido localmente é de 0,26 a 0,8 s. A nota vem da simulação de 4G lenta do Lighthouse, que conta o download e a execução do JavaScript antes do LCP.
- Dos 216 KB de JavaScript da homepage, cerca de 154 KB são o próprio React e Next.js e cerca de 27 KB são o next-intl. O código do site é cerca de 14 KB.
- Para baixar mais seria preciso retirar interatividade (montra, seletor de idioma, assistente, simulador, galeria) ou reescrever o site sem React. Isso não foi feito, conforme as regras.
- **Testado sem ganho:** o CSS dentro do HTML (pior) e retirar o "grão" do banner (sem diferença mensurável, por isso ficou).
- Em produção, a Cloudflare serve a partir do servidor mais próximo (HTTP/2/3). Os números reais devem ser confirmados no PageSpeed Insights depois do deploy.

## Alterações e efeito

| Alteração | Ficheiros | Efeito medido |
|---|---|---|
| Seletor de idioma sem Radix (links normais, mesmo aspeto, Esc/setas/clique fora) | `components/layout/language-switcher.tsx`, removido `components/ui/dropdown-menu.tsx` | −31 KB JS (gzip) |
| `<label>` nativo em vez do Radix | `components/ui/label.tsx` | menos uma dependência |
| Vercel Analytics removido | `app/[locale]/layout.tsx` | −3 KB JS e um pedido a menos |
| Textos enviados ao browser só dos componentes interativos | `app/[locale]/layout.tsx` | HTML da homepage 236 → 215 KB (−9%) |
| Barra de progresso da montra com `transform` em vez de `width` (deixa de recalcular o layout a cada frame) | `app/effects.css` | menos trabalho contínuo no processador |
| Montra: só a 1.ª foto carrega logo (`fetchpriority="high"`, pré-carregada); as outras 5 entram 1 s depois do `load` (muito antes da 1.ª troca, aos 6,5 s) | `components/home/hero-showcase.tsx` | a foto LCP deixa de disputar a rede com 5 fotos grandes |
| Fonte Montserrat variável (um ficheiro latin de 35 KB para todos os pesos) | `app/[locale]/layout.tsx` | 1 pedido de fonte por página |
| Variantes responsivas das fotos (ver abaixo) | `scripts/generate-image-variants.mjs`, `lib/image-loader.ts`, `next.config.mjs` | telemóvel recebe 360/720/1080 px conforme o ecrã |
| Logótipo WebP (15 KB em vez do PNG de 57 KB) e tamanho declarado real | `header.tsx`, `footer.tsx` | −42 KB por página |
| Assistente "Que carro é para si?": motor e base de modelos (~26 KB) só carregam quando o visitante começa a responder | `components/finder/car-finder.tsx` | −8 KB JS na homepage (224 → 216 KB) |
| Variante de 828 px (telemóveis com ecrã de ~412 px e densidade 1,75–2 deixam de receber a de 1080 px) | `scripts/generate-image-variants.mjs`, `next.config.mjs` | homepage telemóvel 1093 → 830 KB |
| Vermelho de texto pequeno com contraste 5,2:1 (`text-primary-text`, mesmo tom da marca, ligeiramente mais claro) nos rótulos pequenos | `app/globals.css`, guia, simulador, ficha técnica, mostradores, assistente, banner Standvirtual | acessibilidade do guia 96 → 100 |
| Cache: `/_next/static/*` e `/img/*` permanentes (nome com hash); fotos originais 1 dia + 7 dias de revalidação | `public/_headers` | visitas repetidas sem novos downloads |

**Testado e revertido:** o CSS dentro do HTML (`experimental.inlineCss`) duplicava o HTML (35 → 69 KB comprimido) e piorou a nota (homepage telemóvel 85, viatura 83). Ficou desligado.

## Imagens
- **Inventário:** 24 fotos de viaturas em WebP, nenhuma com perfil de cor (sRGB). Série 4: 16 × 1440×1080 (81–356 KB). Série 1: 8 × 1067×800 (36–129 KB). Foto da marca: 1200×1600 (135 KB). Logótipo PNG: 400×100 (57 KB).
- **Variantes:** larguras de 360, 720, 828, 1080 e 1440 px, só abaixo da largura original (nunca se amplia). WebP qualidade 80. O logótipo usa qualidade 90 com transparência intacta. Só redimensionamento, sem cortes nem ajustes de cor, com a proporção mantida. São cerca de 90 ficheiros em `public/img/`, com hash no nome.
- **Originais:** intactos e no mesmo URL. Continuam a servir de variante maior, para o JSON-LD e o Open Graph, e os `alt` mantêm-se.
- **next/image:** continua a gerar `srcset`/`sizes`, lazy loading nas imagens fora do ecrã, dimensões/`aspect-ratio` (CLS 0) e preload da imagem LCP. O loader só escolhe o ficheiro.
- **Cloudflare Images:** não usado. Tem custo por transformação e, para 26 fotos que mudam raramente, a geração prévia dá o mesmo resultado sem custos.
- **Contrapartida:** perde-se o AVIF que a Vercel gerava. Com a variante de 828 px, o peso total ficou mesmo assim abaixo do anterior na homepage (telemóvel 1036 → 830 KB, desktop 1053 → 1014 KB). Só a página da viatura no telemóvel pesa ligeiramente mais (491 → 542 KB).

## JavaScript (homepage, gzip)
| | Antes | Depois |
|---|---|---|
| Scripts carregados | 11 | 10 |
| JavaScript | 247 KB | 216 KB |
| HTML | 38 KB | 35 KB |
| CSS | 17 KB | 16 KB |

## Ainda por fazer (opcional)
- **Tamanho da letra:** o texto `text-[11px]` (rótulos) faz o Lighthouse descer as Boas práticas para 96 na página da viatura. Mudar para 12 px é uma pequena alteração de design, por isso ficou por decidir.
- **Medir em produção:** repetir as medições na produção (PageSpeed Insights) depois do deploy, porque a Cloudflare serve por HTTP/2/3 a partir do servidor mais próximo e os números locais não refletem isso.
