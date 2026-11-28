/**
 * Política de Cookies: texto nos 5 idiomas. A página está em app/[locale]/cookies/page.tsx.
 *
 * Reflete o que o site usa de facto (novembro de 2026):
 * - cookie NEXT_LOCALE (next-intl): guarda o idioma; cookie de sessão, estritamente necessário;
 * - Vercel Web Analytics: estatísticas sem cookies;
 * - Google Analytics 4: só com consentimento (banner em components/layout/cookie-banner.tsx);
 * - vídeo do YouTube (youtube-nocookie.com): só é carregado quando o visitante carrega em reproduzir.
 */
import type { Locale } from "@/data/vehicles"
import type { LegalContent } from "./index"

export const cookies: Record<Locale, LegalContent> = {
  pt: {
    title: "Política de Cookies",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        title: "1. O que são cookies",
        text: [
          "Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um website. Esta política explica quais usamos neste website, gerido por {company}.",
        ],
      },
      {
        title: "2. O que usamos",
        text: [
          "Cookie “NEXT_LOCALE” (estritamente necessário): guarda o idioma que escolheu, para mostrar o website nesse idioma. É um cookie de sessão, apagado quando fecha o navegador.",
          "Não usamos cookies de publicidade, de perfil nem de redes sociais.",
        ],
      },
      {
        title: "3. Estatísticas",
        text: [
          "Usamos o Vercel Web Analytics para contar visitas de forma agregada e anónima. Este serviço não usa cookies nem identifica o visitante.",
          "Se aceitar no banner de cookies, usamos também o Google Analytics (Google Ireland Limited) para perceber como o website é usado: páginas vistas, origem das visitas e cliques em contactos. Coloca os cookies “_ga” e “_ga_<ID>”, que duram até 2 anos, e o endereço IP é anonimizado. Pode retirar o consentimento a qualquer momento em “Preferências de cookies”, no rodapé.",
        ],
      },
      {
        title: "4. Serviços de terceiros",
        text: [
          "O website tem ligações para serviços externos (WhatsApp, Standvirtual e redes sociais). Ao abrir essas ligações, passa a estar no website desses terceiros, que podem usar os seus próprios cookies, nos termos das respetivas políticas. O vídeo do YouTube na página inicial usa o modo de privacidade reforçada (youtube-nocookie.com) e só é carregado quando carrega em reproduzir; a partir desse momento, o YouTube (Google) pode guardar dados no seu navegador, nos termos da sua política.",
        ],
      },
      {
        title: "5. Consentimento",
        text: [
          "Os cookies estritamente necessários não precisam de consentimento (Lei n.º 41/2004, art. 5.º, n.º 2). Os cookies de estatística do Google Analytics só são colocados depois de carregar em “Aceitar” no banner; se recusar, o website funciona exatamente da mesma forma.",
        ],
      },
      {
        title: "6. Como gerir ou apagar",
        text: [
          "Pode bloquear ou apagar cookies e dados de navegação nas definições do seu navegador. Se bloquear o cookie de idioma, o website continua a funcionar, mas pode não se lembrar do idioma escolhido.",
        ],
      },
      {
        title: "7. Alterações",
        text: ["Podemos atualizar esta Política. A versão em vigor é a publicada nesta página. Contacto: {email}."],
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    updated: "Last updated: November 2026",
    sections: [
      {
        title: "1. What cookies are",
        text: [
          "Cookies are small files stored on your device when you visit a website. This policy explains which ones we use on this website, operated by {company}.",
        ],
      },
      {
        title: "2. What we use",
        text: [
          "“NEXT_LOCALE” cookie (strictly necessary): stores the language you chose, so the website is shown in that language. It is a session cookie, deleted when you close the browser.",
          "We do not use advertising, profiling or social media cookies.",
        ],
      },
      {
        title: "3. Statistics",
        text: [
          "We use Vercel Web Analytics to count visits in an aggregated, anonymous way. This service does not use cookies or identify visitors.",
          "If you accept in the cookie banner, we also use Google Analytics (Google Ireland Limited) to understand how the website is used: pages viewed, where visits come from and clicks on contact links. It sets the “_ga” and “_ga_<ID>” cookies, which last up to 2 years, and the IP address is anonymised. You can withdraw consent at any time under “Cookie preferences” in the footer.",
        ],
      },
      {
        title: "4. Third-party services",
        text: [
          "The website links to external services (WhatsApp, Standvirtual and social networks). When you open these links, you are on the third party's website, which may use its own cookies under its own policies. The YouTube video on the home page uses privacy-enhanced mode (youtube-nocookie.com) and only loads when you press play; from then on, YouTube (Google) may store data in your browser under its own policy.",
        ],
      },
      {
        title: "5. Consent",
        text: [
          "Strictly necessary cookies do not require consent (Portuguese Law No. 41/2004, Art. 5(2)). Google Analytics statistics cookies are only set after you click “Accept” in the banner; if you decline, the website works exactly the same.",
        ],
      },
      {
        title: "6. How to manage or delete them",
        text: [
          "You can block or delete cookies and browsing data in your browser settings. If you block the language cookie, the website still works but may not remember the language you chose.",
        ],
      },
      {
        title: "7. Changes",
        text: ["We may update this Policy. The version in force is the one published on this page. Contact: {email}."],
      },
    ],
  },
  es: {
    title: "Política de Cookies",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      {
        title: "1. Qué son las cookies",
        text: [
          "Las cookies son pequeños archivos que se guardan en su dispositivo cuando visita un sitio web. Esta política explica cuáles usamos en este sitio web, gestionado por {company}.",
        ],
      },
      {
        title: "2. Qué utilizamos",
        text: [
          "Cookie “NEXT_LOCALE” (estrictamente necesaria): guarda el idioma elegido para mostrar el sitio web en ese idioma. Es una cookie de sesión, que se elimina al cerrar el navegador.",
          "No utilizamos cookies publicitarias, de perfiles ni de redes sociales.",
        ],
      },
      {
        title: "3. Estadísticas",
        text: [
          "Utilizamos Vercel Web Analytics para contar las visitas de forma agregada y anónima. Este servicio no usa cookies ni identifica al visitante.",
          "Si lo acepta en el banner de cookies, también usamos Google Analytics (Google Ireland Limited) para entender cómo se usa el sitio web: páginas vistas, origen de las visitas y clics en los contactos. Instala las cookies «_ga» y «_ga_<ID>», que duran hasta 2 años, y la dirección IP se anonimiza. Puede retirar el consentimiento en cualquier momento en «Preferencias de cookies», en el pie de página.",
        ],
      },
      {
        title: "4. Servicios de terceros",
        text: [
          "El sitio web contiene enlaces a servicios externos (WhatsApp, Standvirtual y redes sociales). Al abrirlos, pasa a estar en el sitio de dichos terceros, que pueden usar sus propias cookies según sus políticas. El vídeo de YouTube de la página de inicio usa el modo de privacidad mejorada (youtube-nocookie.com) y solo se carga cuando pulsa reproducir; a partir de ese momento, YouTube (Google) puede guardar datos en su navegador según su propia política.",
        ],
      },
      {
        title: "5. Consentimiento",
        text: [
          "Las cookies estrictamente necesarias no requieren consentimiento (Ley portuguesa n.º 41/2004, art. 5.2). Las cookies de estadística de Google Analytics solo se instalan después de pulsar «Aceptar» en el banner; si las rechaza, el sitio web funciona exactamente igual.",
        ],
      },
      {
        title: "6. Cómo gestionarlas o eliminarlas",
        text: [
          "Puede bloquear o eliminar cookies y datos de navegación en la configuración de su navegador. Si bloquea la cookie de idioma, el sitio web sigue funcionando, pero puede no recordar el idioma elegido.",
        ],
      },
      {
        title: "7. Modificaciones",
        text: ["Podemos actualizar esta Política. La versión vigente es la publicada en esta página. Contacto: {email}."],
      },
    ],
  },
  fr: {
    title: "Politique des cookies",
    updated: "Dernière mise à jour : novembre 2026",
    sections: [
      {
        title: "1. Qu'est-ce qu'un cookie",
        text: [
          "Les cookies sont de petits fichiers enregistrés sur votre appareil lorsque vous consultez un site. Cette politique explique celles que nous utilisons sur ce site, exploité par {company}.",
        ],
      },
      {
        title: "2. Ce que nous utilisons",
        text: [
          "Cookie « NEXT_LOCALE » (strictement nécessaire) : enregistre la langue choisie afin d'afficher le site dans cette langue. Il s'agit d'un cookie de session, supprimé à la fermeture du navigateur.",
          "Nous n'utilisons pas de cookies publicitaires, de profilage ni de réseaux sociaux.",
        ],
      },
      {
        title: "3. Statistiques",
        text: [
          "Nous utilisons Vercel Web Analytics pour compter les visites de manière agrégée et anonyme. Ce service n'utilise pas de cookies et n'identifie pas les visiteurs.",
          "Si vous l'acceptez dans le bandeau cookies, nous utilisons également Google Analytics (Google Ireland Limited) pour comprendre l'utilisation du site : pages vues, provenance des visites et clics sur les contacts. Il dépose les cookies « _ga » et « _ga_<ID> », conservés jusqu'à 2 ans, et l'adresse IP est anonymisée. Vous pouvez retirer votre consentement à tout moment via « Préférences cookies », en bas de page.",
        ],
      },
      {
        title: "4. Services tiers",
        text: [
          "Le site contient des liens vers des services externes (WhatsApp, Standvirtual et réseaux sociaux). En ouvrant ces liens, vous vous trouvez sur le site de ces tiers, qui peuvent utiliser leurs propres cookies selon leurs politiques. La vidéo YouTube de la page d'accueil utilise le mode de confidentialité renforcée (youtube-nocookie.com) et ne se charge que lorsque vous lancez la lecture ; dès lors, YouTube (Google) peut stocker des données dans votre navigateur selon sa propre politique.",
        ],
      },
      {
        title: "5. Consentement",
        text: [
          "Les cookies strictement nécessaires ne requièrent pas de consentement (loi portugaise n° 41/2004, art. 5, par. 2). Les cookies de mesure d'audience de Google Analytics ne sont déposés qu'après avoir cliqué sur « Accepter » dans le bandeau ; si vous refusez, le site fonctionne exactement de la même manière.",
        ],
      },
      {
        title: "6. Gérer ou supprimer",
        text: [
          "Vous pouvez bloquer ou supprimer les cookies et les données de navigation dans les paramètres de votre navigateur. Si vous bloquez le cookie de langue, le site continue de fonctionner mais peut ne pas mémoriser la langue choisie.",
        ],
      },
      {
        title: "7. Modifications",
        text: ["Nous pouvons mettre à jour cette Politique. La version en vigueur est celle publiée sur cette page. Contact : {email}."],
      },
    ],
  },
  de: {
    title: "Cookie-Richtlinie",
    updated: "Letzte Aktualisierung: November 2026",
    sections: [
      {
        title: "1. Was sind Cookies",
        text: [
          "Cookies sind kleine Dateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Diese Richtlinie erklärt, welche wir auf dieser von {company} betriebenen Website verwenden.",
        ],
      },
      {
        title: "2. Was wir verwenden",
        text: [
          "Cookie „NEXT_LOCALE“ (unbedingt erforderlich): speichert die gewählte Sprache, damit die Website in dieser Sprache angezeigt wird. Es handelt sich um ein Sitzungscookie, das beim Schließen des Browsers gelöscht wird.",
          "Wir verwenden keine Werbe-, Profiling- oder Social-Media-Cookies.",
        ],
      },
      {
        title: "3. Statistiken",
        text: [
          "Wir verwenden Vercel Web Analytics, um Besuche aggregiert und anonym zu zählen. Dieser Dienst verwendet keine Cookies und identifiziert keine Besucher.",
          "Wenn Sie im Cookie-Banner zustimmen, verwenden wir zusätzlich Google Analytics (Google Ireland Limited), um zu verstehen, wie die Website genutzt wird: aufgerufene Seiten, Herkunft der Besuche und Klicks auf Kontaktlinks. Dabei werden die Cookies „_ga“ und „_ga_<ID>“ mit einer Laufzeit von bis zu 2 Jahren gesetzt; die IP-Adresse wird anonymisiert. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ in der Fußzeile widerrufen.",
        ],
      },
      {
        title: "4. Dienste Dritter",
        text: [
          "Die Website enthält Links zu externen Diensten (WhatsApp, Standvirtual und soziale Netzwerke). Wenn Sie diese öffnen, befinden Sie sich auf der Website des Dritten, der nach eigenen Richtlinien eigene Cookies verwenden kann. Das YouTube-Video auf der Startseite nutzt den erweiterten Datenschutzmodus (youtube-nocookie.com) und wird erst geladen, wenn Sie auf Abspielen klicken; ab dann kann YouTube (Google) nach eigenen Richtlinien Daten in Ihrem Browser speichern.",
        ],
      },
      {
        title: "5. Einwilligung",
        text: [
          "Unbedingt erforderliche Cookies benötigen keine Einwilligung (portugiesisches Gesetz Nr. 41/2004, Art. 5 Abs. 2). Statistik-Cookies von Google Analytics werden erst gesetzt, nachdem Sie im Banner auf „Akzeptieren“ geklickt haben; wenn Sie ablehnen, funktioniert die Website genauso.",
        ],
      },
      {
        title: "6. Verwalten oder löschen",
        text: [
          "Sie können Cookies und Browserdaten in den Einstellungen Ihres Browsers blockieren oder löschen. Wenn Sie das Sprachcookie blockieren, funktioniert die Website weiterhin, merkt sich aber möglicherweise die gewählte Sprache nicht.",
        ],
      },
      {
        title: "7. Änderungen",
        text: ["Wir können diese Richtlinie aktualisieren. Gültig ist die auf dieser Seite veröffentlichte Fassung. Kontakt: {email}."],
      },
    ],
  },
}
