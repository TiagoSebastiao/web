# Publicação na Cloudflare: passo a passo

As ações marcadas com **[TU]** são tuas: contas, pagamentos, chaves, DNS e autorizações. O resto está pronto no código.

## 0. Estado atual (28/11/2026)
- O código está pronto e testado localmente no runtime dos Workers (`npm run preview`): páginas, 5 idiomas, redirecionamentos, 404, sitemap, robots, cabeçalhos, formulário (validação, origem, campo-armadilha) e Lighthouse.
- Código na `main` do GitHub. **Por fazer:** ligar o GitHub à Cloudflare, os secrets, o domínio e o DNS.
- **DNS atual** (lido em 28/11): nameservers da Google (`ns-cloud-b1…b4.googledomains.com`).
  - MX do Google Workspace: `aspmx.l.google.com`, mais `alt1`–`alt4`.
  - TXT `google-site-verification=…` (Search Console).
  - DKIM do Resend: `resend._domainkey`.
  - `send.otenmotors.com`: MX e SPF do Resend (Amazon SES).
  - `www` aponta para a Vercel (216.198.79.1).

## 1. Conta e projeto [TU]
1. Criar conta em https://dash.cloudflare.com, com o e-mail da empresa. O plano **Free** chega para este site: o Worker tem 1,43 MiB (o limite é 3 MiB) e o plano inclui 100 000 pedidos por dia ao Worker. Os ficheiros estáticos não contam para esse limite.
2. **Workers & Pages → Create → Import a repository →** ligar o GitHub e escolher `TiagoSebastiao/web`.
3. Configuração do build:
   - Production branch: `main`
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
   - Non-production branches (pré-visualizações): `npx opennextjs-cloudflare upload`
   - Variável de **build**: `NODE_VERSION` = `24`
4. O nome do Worker tem de ser **`oten-motors`**, igual ao do `wrangler.jsonc`. O formulário aceita esse nome nos endereços `*.workers.dev`.

## 2. Secrets do formulário [TU]
Em **Workers → oten-motors → Settings → Variables and Secrets**, criar como tipo **Secret**:

| Nome | Valor |
|---|---|
| `RESEND_API_KEY` | **Uma chave nova.** A chave guardada no `.env.local` é recusada pelo Resend ("API key is invalid", testado a 28/11). Cria uma em https://resend.com/api-keys, com permissão "Sending access" restrita ao domínio otenmotors.com |
| `CONTACT_TO_EMAIL` | `geral@otenmotors.com` |
| `CONTACT_FROM_EMAIL` | `OTEN MOTORS <site@otenmotors.com>` (o DKIM do Resend já está no DNS; confirma em resend.com → Domains que o domínio aparece "Verified") |

Alternativa por linha de comandos: `npx wrangler secret put RESEND_API_KEY` (e o mesmo para os outros).

**Os segredos nunca vão para o GitHub.** O `.env.local` e o `.dev.vars` estão no `.gitignore`. Só os ficheiros `*.example`, sem valores, são publicados.

## 3. Testar no endereço provisório
Depois do 1.º deploy, o site fica em `https://oten-motors.<a-tua-conta>.workers.dev`. Verificar:
- homepage nos 5 idiomas, uma viatura, a galeria, o simulador e o seletor de idioma;
- o formulário: enviar **uma** mensagem de teste e confirmar que chega a geral@;
- **Workers → oten-motors → Observability**: deve ter pedidos e nenhum erro.

## 4. Domínio www.otenmotors.com [TU — só depois do passo 3 aprovado]
Para um Worker responder no domínio, o DNS de `otenmotors.com` tem de passar para a Cloudflare (mudança de nameservers).
1. **Cloudflare → Add a domain →** `otenmotors.com`, plano Free. A Cloudflare importa os registos existentes.
2. **Confirmar que foram importados TODOS os registos**, comparando com a lista do ponto 0:
   - MX do Google (5): sem eles, o e-mail geral@ para;
   - TXT `google-site-verification`;
   - TXT/SPF, se existir;
   - `resend._domainkey` (TXT);
   - `send` (MX + TXT do Resend);
   - qualquer outro registo que exista no painel atual (Google Domains/Squarespace).
   - Registos de e-mail em **"DNS only"** (nuvem cinzenta).
3. No registador do domínio, trocar os nameservers pelos 2 indicados pela Cloudflare. A propagação demora de minutos a 24 h.
4. Quando o domínio estiver "Active":
   - **Workers → oten-motors → Settings → Domains & Routes → Add → Custom domain:** `www.otenmotors.com`. A Cloudflare cria o registo e o certificado.
   - Redirecionar `otenmotors.com` para `https://www.otenmotors.com`: **Rules → Redirect Rules →** "Redirect from root to WWW" (modelo pronto), código 301, mantendo o caminho e a query string.
   - Apagar o registo antigo do `www` que aponta para a Vercel, se a Cloudflare o tiver importado.
5. **SSL/TLS → Overview:** modo "Full (strict)". **Always Use HTTPS:** ligado.

## 5. Proteção (grátis) [TU]
- **Security → WAF → Rate limiting rules:** caminho `/api/contact`, método POST, máximo 5 pedidos por 10 minutos por IP, ação Block durante 1 hora.
- **Security → Bots → "Block AI bots":** opcional. Impede crawlers de IA como o GPTBot, que causou a pausa da conta Vercel. Não afeta o Google.
- **Analytics sem cookies:** opcional. Ativar o Cloudflare Web Analytics (Analytics & Logs → Web Analytics), em substituição do Vercel Analytics.

## 6. Depois da mudança
- **Search Console:** a propriedade de domínio continua válida, desde que o TXT `google-site-verification` tenha sido importado. Voltar a submeter o `sitemap.xml`.
- Testar no PageSpeed Insights e no Rich Results Test (https://search.google.com/test/rich-results).
- **Vercel:** quando a pausa terminar (24/12/2026), retirar o domínio do projeto "oten" na Vercel para não haver confusão. **Não apagar o projeto** antes de a Cloudflare estar estável algumas semanas, porque é o plano de recurso.

## 7. Rollback para a Vercel
Usar se algo correr mal depois da mudança do domínio:
1. **Mais rápido, mantendo o DNS na Cloudflare:** na Cloudflare, retirar o custom domain do Worker e criar um `CNAME www → cname.vercel-dns.com` em "DNS only". O projeto Vercel tem de estar ativo, ou seja, fora de pausa ou em plano Pro.
2. **Completo:** voltar a pôr os nameservers da Google no registador. O DNS antigo continua lá, porque a Cloudflare só copia os registos.
3. **Código:** o código continua compatível com `next build`/`next start`. Para voltar a publicar na Vercel, reverter o commit da migração no GitHub, ou manter o código atual sabendo que as imagens passam a sair das variantes estáticas, o que funciona igualmente na Vercel.

## 8. Comandos úteis (na pasta do projeto)
```
npm run preview      # build Cloudflare + site local em http://localhost:8787 (usa .dev.vars)
npm run deploy       # publicar a partir do teu computador (preferir o deploy automático do GitHub)
npx wrangler tail    # ver os registos do Worker em produção em tempo real
```
Para testar o formulário localmente sem enviar e-mails reais, usar `CONTACT_TO_EMAIL=delivered@resend.dev` no `.dev.vars`.

## 9. GitHub
O repositório tem só a branch `main` (28/11/2026). As outras branches (`banner-clicavel`, `rodape`, `seguranca`, `site-novo`, `new-feature`, `v0/tiagosebastiao-1ac2ac42`) foram apagadas com a tua autorização.

Atenção: enquanto a conta Vercel estiver ligada ao repositório, um push para a `main` tenta um deploy na Vercel. Neste momento isso falha sem consequências, porque a conta está em pausa. Depois de mudar para a Cloudflare, desliga o repositório na Vercel (Project → Settings → Git → Disconnect).
