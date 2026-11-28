# Auditoria de SEO técnico

Estado em 28/11/2026, verificado na versão Cloudflare (`npm run preview`).

## Mantido (sem mudanças de URL)
- **Domínio de produção:** `https://www.otenmotors.com` (`config/site.ts` → `url`), usado no canonical, hreflang, sitemap, Open Graph e JSON-LD.
- **URLs:** iguais aos anteriores. Português sem prefixo (`/`, `/veiculo/<id>`), restantes idiomas com `/en`, `/es`, `/fr`, `/de`. `/pt/...` redireciona para `/...` (307, comportamento do next-intl, igual ao anterior).
- **Redirecionamento antigo:** `/veiculo/bmw-serie-4-420d-gran-coupe-2015` → `/veiculo/bmw-serie-4-420d-coupe-2015` (308) nos 5 idiomas. Testado.
- **Metadata:** título, descrição, Open Graph e Twitter por página e por idioma. Nas viaturas inclui nome, ano, km, combustível, caixa e preço.
- **Canonical + hreflang (pt, en, es, fr, de, x-default):** em todas as páginas. Os guias só existem em EN, FR e DE, com slugs próprios.
- **Sitemap:** `/sitemap.xml` com 33 URLs, hreflang e `lastmod`. **Os 33 respondem 200** (testado). As viaturas vendidas saem automaticamente.
- **robots.txt:** permite tudo exceto `/api/` e aponta para o sitemap.
- **404:** URLs desconhecidos em qualquer idioma devolvem o **código 404**, com a página traduzida e `noindex` (testado: `/nao-existe`, `/en/nope`, `/veiculo/inexistente`).
- **HTML semântico:** um `<h1>` por página, secções com `aria-labelledby`, `lang` correto em cada idioma.

## Melhorado
- **BreadcrumbList** (novo) nas páginas das viaturas: Início → viatura (`lib/vehicle-json-ld.ts`).
- **Seletor de idioma** com links reais (`<a href hreflang>`) para a mesma página noutro idioma, sem passar por redirecionamento (antes era um menu em JavaScript sem links).
- **HSTS** enviado pelo próprio site, porque a Vercel acrescentava-o sozinha.

## Dados estruturados (verificados: JSON válido nas páginas)
| Página | Tipos |
|---|---|
| Todas | `WebSite` + `AutoDealer` (nome, nomes alternativos, logótipo, telefone, e-mail, NIPC, denominação legal, redes sociais, Standvirtual, `address` Faro · Algarve · PT, `areaServed` Faro, Algarve, Portugal Continental, Portugal) |
| Viatura | `Car` (marca, modelo, ano, 1.ª matrícula, km, combustível, caixa, carroçaria, portas, lugares, motor, potência, fotos) + `Offer` (preço em EUR, disponibilidade, estado "usado") quando há preço + `BreadcrumbList` |

O `Organization` está coberto pelo `AutoDealer`, que é um subtipo. Recomenda-se validar depois do deploy em https://search.google.com/test/rich-results.

## Lighthouse SEO: 100 (confirmado)
- Em `localhost` o resultado é 92, só por causa do `canonical`, que aponta para `https://www.otenmotors.com`.
- Para confirmar, o Lighthouse correu com o **domínio real em HTTPS** a apontar para o Worker local (`wrangler dev --local-protocol https` + `--host-resolver-rules`).
- Resultado: **SEO 100** em `/`, `/veiculo/bmw-serie-4-420d-coupe-2015`, `/en/veiculo/bmw-serie-1-116d-2021` e `/de/guides/auto-kaufen-in-portugal-als-auslaender` (28/11/2026).
- Depois do deploy, voltar a confirmar no PageSpeed Insights.

## SEO local: Faro, Algarve, Portugal (feito a 28/11/2026)
Decisão tua: enquanto não houver morada do stand, a marca fica associada a **Faro, Algarve, Portugal**, com **entrega em todo o Portugal continental**.
- **Dados estruturados (`AutoDealer`):**
  - `address` só com cidade, região e país (Faro, Algarve, PT), sem rua nem coordenadas, porque ainda não há morada;
  - `areaServed`: Faro, Algarve, Portugal Continental e Portugal.
  - Nas viaturas, o `Offer` tem `eligibleRegion: Portugal`.
  - A configuração está em `config/site.ts` → `location`.
- **Textos, nos 5 idiomas:**
  - título e descrição do site (`meta.title` e `meta.description`);
  - descrição de cada viatura no Google (`meta.vehicleDescription`);
  - texto por cima do título da homepage (`hero.eyebrow`);
  - descrição do rodapé (`footer.description`);
  - passo "Entregamos o seu carro" (`about.steps.drive.text`), que passa a dizer "em qualquer ponto de Portugal continental".
- **Quando houver morada:**
  1. preencher `legal.showroomAddress` em `config/site.ts`;
  2. acrescentar `streetAddress`, `postalCode` e `geo` (coordenadas) ao `address` do `AutoDealer`, em `app/[locale]/layout.tsx`;
  3. criar o **Perfil de Empresa no Google** (Google Business Profile), o fator mais forte nas pesquisas locais. Já pode ser criado agora como "empresa de área de serviço" (sem morada pública), com Faro, o Algarve e Portugal continental como zonas servidas.

## Viaturas vendidas e páginas removidas
- **Vendida:** `status: "sold"`. A página continua online, marcada como vendida e com `SoldOut` no JSON-LD, mas sai do sitemap e da homepage. Assim, quem chega por um link antigo não encontra um erro.
- **Remover a ficha de todo:** apagar a ficha faz o URL devolver 404. É preferível redirecionar para a homepage, criando uma entrada em `redirects()` no `next.config.mjs`, como já existe para o "gran-coupe".
- **Nunca mudar o `id` de uma viatura publicada** sem criar um redirecionamento.

## Alt texts
- A foto principal da galeria tem `alt` descritivo ("<viatura> — fotografia N") e os cartões usam o nome da viatura.
- As miniaturas estão dentro de botões com `aria-label`, e as fotos decorativas (montra, segunda foto no hover) têm `alt=""` de propósito, para não serem lidas em duplicado.
