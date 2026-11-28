# OTEN MOTORS — website

Website do stand OTEN MOTORS (Next.js 16 + next-intl, 5 idiomas: PT, EN, ES, FR, DE). Alojado na **Cloudflare Workers** (adaptador OpenNext).

Guias: [migração](docs/CLOUDFLARE_MIGRATION.md) · [publicação e DNS](docs/DEPLOYMENT.md) · [performance](docs/PERFORMANCE_AUDIT.md) · [SEO](docs/SEO_AUDIT.md)

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # desenvolvimento em http://localhost:3000
npm run images     # gerar as variantes das fotografias (360/720/1080 px) depois de mudar fotos
npm run build      # build Next.js (gera também as variantes das fotos e verifica os tipos)
npm run preview    # build para a Cloudflare + site em http://localhost:8787 no runtime real dos Workers
npm run deploy     # publicar na Cloudflare (só com autorização; normalmente é o GitHub que publica)
npm run lint       # ESLint
npm run typecheck  # só verificação de tipos
```

## Onde mudar o quê

| Quero mudar… | Ficheiro |
|---|---|
| Telefone, WhatsApp, e-mail, redes sociais, **link do Standvirtual** | `config/site.ts` |
| **Dados legais** (denominação, NIPC, sede, entidade RAL) — aparecem no rodapé quando preenchidos | `config/site.ts` → `legal` |
| Textos do site (todos os idiomas) | `messages/pt.json`, `en.json`, `es.json`, `fr.json`, `de.json` |
| Viaturas | `data/vehicles/` (ver abaixo) |
| Fotografias das viaturas | `public/vehicles/<id-da-viatura>/` |
| Conteúdo das páginas legais | `data/legal/terms.ts`, `privacy.ts`, `cookies.ts` |
| Modelos sugeridos no assistente "Que carro é para si?" | `data/finder/models.ts` (regras em `lib/finder-engine.ts`) |
| Guia para estrangeiros (EN/FR/DE) | `data/guides/buying-a-car-in-portugal.ts` |
| Cores e tipografia | `app/globals.css` |

## Adicionar uma viatura

1. Criar a pasta `public/vehicles/<id>/` com as fotografias numeradas (`01-frente-lateral.webp`, `02-…`). A `01` é a capa.
   Recomendado: WebP, **proporção 4:3 na horizontal** (ex.: 1440×1080), cerca de 150–300 KB por foto. A galeria e o hero estão desenhados para 4:3; outras proporções ficam recortadas.
   Depois correr `npm run images`: cria as versões pequenas (telemóvel, miniaturas) em `public/img/`. O build também o faz, mas convém fazer antes do commit para as versões irem para o GitHub.
2. Criar `public/vehicles/<id>/og.jpg` com 1200×630 px: é a imagem que aparece quando o link é partilhado no WhatsApp/Facebook.
3. Copiar um ficheiro de `data/vehicles/` (ex.: `bmw-serie-1-116d-2021.ts`), mudar o nome e preencher os dados.
   - `price: null` mostra "Preço sob consulta".
   - Dados técnicos que não se saibam: deixar de fora (não aparecem).
   - Equipamento e opções (combustível, cor, etc.) usam chaves; as traduções estão em `messages/*.json` → `labels`.
4. Importar o ficheiro em `data/vehicles/index.ts` e juntá-lo à lista `vehicles`.

**Viatura vendida:** mudar `status` para `"sold"` (fica marcada como vendida e sai do sitemap) ou `featured: false` (deixa de aparecer na homepage). Não mudar o `id` de uma viatura publicada; se for mesmo preciso, criar um redirecionamento em `next.config.mjs`.

## Formulário de contacto (Cloudflare → Workers → oten-motors → Settings → Variables and Secrets, tipo "Secret")

| Variável | Exemplo |
|---|---|
| `RESEND_API_KEY` | chave da conta [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | `geral@otenmotors.com` |
| `CONTACT_FROM_EMAIL` | `OTEN MOTORS <site@otenmotors.com>` (requer o domínio verificado no Resend) |

Em desenvolvimento: copiar `.env.example` para `.env.local` (`npm run dev`) e `.dev.vars.example` para `.dev.vars` (`npm run preview`). Estes ficheiros nunca vão para o GitHub.

## Analytics

Google Analytics 4 (só com consentimento; ver abaixo). O Vercel Web Analytics foi retirado com a mudança para a Cloudflare; em alternativa sem cookies existe o Cloudflare Web Analytics (ver docs/DEPLOYMENT.md).

## Estrutura

```
app/[locale]/          páginas (homepage, viatura, guias, legais, 404): só montam as secções
app/api/contact/       envio do formulário
components/
  home/                secções da homepage (hero, sobre, viaturas, vender, contactos…)
  vehicle/             página da viatura (hero, mostradores, galeria, simulador, ficha técnica…)
  finder/              assistente "Que carro é para si?"
  layout/              cabeçalho, rodapé, WhatsApp flutuante, idiomas, página legal
  ui/                  peças genéricas (ícones, títulos de secção, inputs, vídeo)
config/site.ts         contactos, links e dados legais
data/
  vehicles/            viaturas (um ficheiro por viatura)
  finder/              base de modelos do mercado de usados, com fontes
  guides/              guias (texto nos vários idiomas)
  legal/               texto das páginas legais
lib/                   formatação, SEO, dados estruturados, motor do assistente e loader das imagens
scripts/               gerador das variantes das fotografias
i18n/                  configuração de idiomas
messages/              textos traduzidos da interface
public/vehicles/       fotografias das viaturas (originais)
public/img/            variantes das fotografias (geradas; não editar à mão)
public/_headers        cache e cabeçalhos dos ficheiros estáticos na Cloudflare
docs/                  migração, publicação, performance e SEO
middleware.ts          prefixos de idioma (/en, /es, …)
wrangler.jsonc         configuração do Worker da Cloudflare
open-next.config.ts    configuração do adaptador OpenNext
```

## Google Analytics e Search Console

O código já está preparado; falta criar as contas Google e colar dois valores em `config/site.ts` → `google`.

**Google Search Console** (como o Google vê o site: pesquisas, cliques, erros de indexação)
1. Entrar em https://search.google.com/search-console com a conta Google da empresa.
2. Adicionar propriedade → **Domínio** → `otenmotors.com` (cobre www e os 5 idiomas).
3. Copiar o registo TXT indicado e criá-lo no DNS do domínio (onde o DNS estiver: Google/Squarespace ou Cloudflare). Carregar em "Verificar".
   - Alternativa sem DNS: propriedade **Prefixo do URL** `https://www.otenmotors.com` → método "Etiqueta HTML" → copiar só o valor de `content="..."` para `google.searchConsoleVerification` e publicar o site.
4. Em **Sitemaps**, submeter `https://www.otenmotors.com/sitemap.xml`.

**Google Analytics 4** (visitas, origem dos visitantes, cliques em contactos)
1. Entrar em https://analytics.google.com → Administração → Criar propriedade "OTEN MOTORS" (fuso horário Portugal, moeda EUR) → fluxo de dados **Web** → `https://www.otenmotors.com`.
2. Copiar o **ID de medição** (`G-XXXXXXXXXX`) para `google.analyticsId` e publicar o site.
3. A partir daí aparece o banner de cookies; o GA só carrega para quem aceitar.
   - **Estado (18/11/2026):** propriedade criada na conta geral@otenmotors.com (conta OTEN MOTORS, propriedade otenmotors.com, ID `G-TPCRMTRTEC`, já em `config/site.ts`).
4. Eventos registados automaticamente: `whatsapp_click`, `phone_click`, `email_click`, `standvirtual_click`, `social_click`, `video_play` e `generate_lead` (formulário enviado). Em GA4 → Administração → Eventos, marcar `generate_lead` e `whatsapp_click` como **eventos-chave** (estrela no separador "Eventos recentes"; só aparecem 24–48 h depois de acontecerem no site publicado) para os ver como conversões.
5. Search Console ligado ao Analytics (18/11/2026): propriedade de domínio `otenmotors.com` → fluxo "OTEN MOTORS – Website". Os relatórios estão em Relatórios → Search Console. O dono do Search Console também é Administrador da propriedade do Analytics.
