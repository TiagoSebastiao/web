# OTEN MOTORS — website

Website do stand OTEN MOTORS (Next.js 16 + next-intl, 5 idiomas: PT, EN, ES, FR, DE). Publicado na Vercel.

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção (corre também a verificação de tipos)
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
2. Criar `public/vehicles/<id>/og.jpg` com 1200×630 px: é a imagem que aparece quando o link é partilhado no WhatsApp/Facebook.
3. Copiar um ficheiro de `data/vehicles/` (ex.: `bmw-serie-1-116d-2021.ts`), mudar o nome e preencher os dados.
   - `price: null` mostra "Preço sob consulta".
   - Dados técnicos que não se saibam: deixar de fora (não aparecem).
   - Equipamento e opções (combustível, cor, etc.) usam chaves; as traduções estão em `messages/*.json` → `labels`.
4. Importar o ficheiro em `data/vehicles/index.ts` e juntá-lo à lista `vehicles`.

**Viatura vendida:** mudar `status` para `"sold"` (fica marcada como vendida e sai do sitemap) ou `featured: false` (deixa de aparecer na homepage). Não mudar o `id` de uma viatura publicada; se for mesmo preciso, criar um redirecionamento em `next.config.mjs`.

## Formulário de contacto (Vercel → Settings → Environment Variables)

| Variável | Exemplo |
|---|---|
| `RESEND_API_KEY` | chave da conta [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | `geral@otenmotors.com` |
| `CONTACT_FROM_EMAIL` | `OTEN MOTORS <site@otenmotors.com>` (requer o domínio verificado no Resend) |

## Analytics

O site inclui Vercel Web Analytics (sem cookies). Para começar a recolher dados, ativar em Vercel → projeto → **Analytics**.

## Estrutura

```
app/[locale]/          páginas (homepage, viatura, guias, legais, 404): só montam as secções
app/api/contact/       envio do formulário
components/
  home/                secções da homepage (hero, sobre, viaturas, vender, contactos…)
  vehicle/             página da viatura (hero, mostradores, galeria, simulador, ficha técnica…)
  finder/              assistente "Que carro é para si?"
  layout/              cabeçalho, rodapé, WhatsApp flutuante, idiomas, página legal
  ui/                  peças genéricas (ícones, títulos de secção, inputs, menus)
config/site.ts         contactos, links e dados legais
data/
  vehicles/            viaturas (um ficheiro por viatura)
  finder/              base de modelos do mercado de usados, com fontes
  guides/              guias (texto nos vários idiomas)
  legal/               texto das páginas legais
lib/                   formatação, SEO, dados estruturados e motor do assistente
i18n/                  configuração de idiomas
messages/              textos traduzidos da interface
public/vehicles/       fotografias das viaturas
proxy.ts               prefixos de idioma (/en, /es, …)
```
