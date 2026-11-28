# Migração Vercel → Cloudflare Workers

Estado em 28/11/2026. A migração está preparada e testada **localmente** no runtime dos Workers (`wrangler dev`, através de `npm run preview`). Commit e push feitos para a `main` no GitHub (28/11/2026). **Em produção na Cloudflare desde 28/11/2026** em https://www.otenmotors.com: DNS na Cloudflare, deploy automático a partir do GitHub (ver DEPLOYMENT.md, ponto 0).

## 1. Auditoria inicial (antes de alterar)

| Item | Estado encontrado |
|---|---|
| Next.js | 16.4.6 (App Router, Turbopack) |
| React / React DOM | 19.2.7 |
| Node.js | `engines: 24.x` (máquina local: 25.9.0) |
| Traduções | next-intl 4.14.9, 5 idiomas (`pt` por omissão sem prefixo, `localePrefix: "as-needed"`, `localeDetection: false`) |
| Renderização | Todas as páginas SSG (`generateStaticParams`): homepage, viaturas, guias, termos, privacidade, cookies (5 idiomas). Dinâmicos: `/api/contact` (route handler, Node.js) e o catch-all 404 `/[locale]/[...rest]` |
| Middleware | `proxy.ts` (next-intl) — prefixos de idioma |
| Route handlers | `POST /api/contact` (Resend, zod, origem + limite por IP + campo-armadilha) |
| Server Actions | nenhuma |
| Redirects | `next.config.mjs`: `…gran-coupe-2015` → `…coupe-2015` (308, 5 idiomas) |
| Headers | `next.config.mjs`: CSP, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| Específico da Vercel | `@vercel/analytics`; otimizador de imagens da Vercel (`next/image` com AVIF/WebP); CSP com `vercel.live`/pusher; origens `*.vercel.app` no formulário; HSTS automático da Vercel |
| Testes existentes | Nenhum teste automático nem ESLint configurados (só `tsc`) |
| Build de referência | `next build` OK, 38 páginas estáticas; JavaScript da homepage 247 KB (gzip) |

## 2. OpenNext vs vinext

- **OpenNext (`@opennextjs/cloudflare` 1.20.19)** — adaptador oficial recomendado pela Cloudflare para Next.js. Suporta "todas as versões minor e patch do Next.js 16" (exige ≥ 16.4.5; o projeto tem 16.4.6), App Router, route handlers, SSG/ISR e middleware. **Escolhido.**
- **vinext** (1.4.7, "Run Next.js apps on Vite") — reimplementação do Next.js sobre Vite. Não foi possível ler a documentação oficial nesta sessão (a página do npm recusou o acesso automático), por isso não há base documentada para afirmar que é tão completo e estável como o OpenNext. Trocar de compilador e runtime é um risco desnecessário para um site que funciona com o OpenNext.

## 3. O que foi feito

### Configuração Cloudflare
| Ficheiro | O quê |
|---|---|
| `wrangler.jsonc` (novo) | Worker `oten-motors`; `nodejs_compat` + `global_fetch_strictly_public`; `compatibility_date` 2026-11-01; Static Assets (`.open-next/assets`, binding `ASSETS`); `WORKER_SELF_REFERENCE`; observabilidade ligada (logs, 100%); `workers.dev` e URLs de pré-visualização ligados. Sem binding de Images (sem custos) |
| `open-next.config.ts` (novo) | Cache incremental lida dos Static Assets (`staticAssetsIncrementalCache`) — o site é 100% SSG, não precisa de R2/KV/filas |
| `package.json` | Scripts `images`, `build` (gera variantes + `next build`), `preview`, `deploy`, `upload`, `cf-typegen`, `lint`. Dependências: + `@opennextjs/cloudflare`; dev: + `wrangler`, `sharp` (já vinha com o Next; agora explícito, usado pelo gerador de imagens), `eslint`, `eslint-config-next`. Removidas: `@vercel/analytics`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-label` |
| `next.config.mjs` | `initOpenNextCloudflareForDev()`; loader de imagens próprio; CSP sem domínios da Vercel; **HSTS** (a Vercel enviava-o sozinha); `poweredByHeader: false` |
| `proxy.ts` → `middleware.ts` | Ver "Incompatibilidades" abaixo |
| `public/_headers` (novo) | Cache e cabeçalhos dos ficheiros estáticos (o Worker não corre à frente deles) |
| `.gitignore` | `.open-next/`, `.wrangler/`, `.dev.vars*`, `cloudflare-env.d.ts`; exceções para `.env.example` e `.dev.vars.example` |
| `.env.example`, `.dev.vars.example` (novos) | Variáveis sem valores reais |
| `app/api/contact/route.ts` | Aceita `oten-motors.<conta>.workers.dev` (e pré-visualizações) em vez de `*.vercel.app`; IP real via `cf-connecting-ip`; respostas `Cache-Control: no-store`; texto sobre secrets da Cloudflare |
| `app/[locale]/layout.tsx` | Removido `<Analytics />` da Vercel; mensagens enviadas ao browser só dos componentes interativos; fonte variável |
| `eslint.config.mjs` (novo) | ESLint com as regras do Next.js (Core Web Vitals + TypeScript) |

Imagens, performance e SEO: ver `PERFORMANCE_AUDIT.md` e `SEO_AUDIT.md`.

### Consolidação do repositório
O repositório `web` passou a ter **só a branch `main`** com a versão mais recente do site (o conteúdo que estava em `web-main`: GA4 + banner de cookies, vídeo, dados das viaturas, SEO, etc.) mais a migração. As branches `rodape`, `seguranca`, `site-novo` e `banner-clicavel` já estavam contidas na `main`; `new-feature` e `v0/tiagosebastiao-1ac2ac42` eram versões antigas do site. Com a tua autorização (28/11/2026), todas foram apagadas, no GitHub e localmente. Fica só a `main`.

## 4. Incompatibilidades e riscos

| Tema | Detalhe | Decisão |
|---|---|---|
| `proxy.ts` (Next 16) | O OpenNext avisa: "Node.js middleware support is experimental in cloudflare, and not officially maintained". | Renomeado para `middleware.ts` (Edge), o caminho estável do OpenNext. O Next 16 mostra um aviso de "deprecated", mas funciona. Testado: prefixos, `/pt/…` → `/…`, 404 em todos os idiomas. Rever quando o OpenNext declarar o `proxy.ts` estável |
| Windows | O OpenNext não garante suporte total em Windows. O build e a pré-visualização funcionaram aqui, mas **os deploys devem ser feitos pelo Cloudflare Workers Builds (Linux)** a partir do GitHub |
| Otimizador de imagens | Não há otimização a pedido (seria Cloudflare Images, pago por transformação). Substituído por variantes pré-geradas (sem custos). Perde-se o AVIF: o peso total das imagens é ~5% maior no telemóvel e ~20% no desktop do que com a Vercel, mas a imagem principal carrega mais cedo (ver PERFORMANCE_AUDIT) |
| Vercel Analytics | Só existe na Vercel; removido. Fica o GA4 (já existente). Alternativa sem cookies: Cloudflare Web Analytics (grátis) |
| Limite de envios do formulário | A contagem em memória é por instância do Worker (aproximada). Proteção principal recomendada: regra de "Rate limiting" da Cloudflare (1 regra incluída no plano grátis) |
| Chave do Resend | A chave antiga em `.env.local` era recusada pelo Resend. **Resolvido:** foi criada uma chave nova, só de envio, guardada como Secret do Worker (28/11) |
| Tamanho do Worker | 1,43 MiB comprimido (limite do plano grátis: 3 MiB) |
| `upgrade-insecure-requests` | Em `http://localhost` o browser tenta passar alguns pré-carregamentos para `https://localhost` e falham (erro só local). Em produção (HTTPS) não acontece. Já era assim antes |

## 5. Turnstile (análise)
O Cloudflare Turnstile (grátis) acrescentaria uma verificação anti-robô ao formulário. Exige criar um widget no painel (site key + secret), mudar a CSP (`challenges.cloudflare.com`) e validar o token em `/api/contact`. **Não foi implementado** porque precisa de chaves da tua conta e o formulário já tem campo-armadilha, verificação de origem e limite por IP; com a regra de rate limiting da Cloudflare, o risco de spam é baixo. Recomendo ativá-lo só se começar a chegar spam.

## 6. Futuro: R2
As fotos estão em `public/` (Static Assets, até 20 000 ficheiros e 25 MiB por ficheiro — muito acima do necessário). Se um dia as fotos passarem para o R2, basta mudar o prefixo dos URLs em `lib/image-loader.ts` e no gerador (`scripts/generate-image-variants.mjs`); os componentes não mudam.
