/**
 * Política de Cookies: texto nos 5 idiomas. A página está em app/[locale]/cookies/page.tsx.
 *
 * Reflete o que o site usa de facto (novembro de 2026):
 * - cookie NEXT_LOCALE (next-intl): guarda o idioma; cookie de sessão, estritamente necessário;
 * - Vercel Web Analytics: estatísticas sem cookies.
 * Como só há tecnologias estritamente necessárias, não é preciso banner de consentimento
 * (Lei n.º 41/2004, art. 5.º, n.º 2). Se forem acrescentados Google Analytics, píxeis de
 * redes sociais, mapas ou vídeos incorporados, passa a ser obrigatório pedir consentimento.
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
        title: "3. Estatísticas sem cookies",
        text: [
          "Usamos o Vercel Web Analytics para contar visitas de forma agregada e anónima. Este serviço não usa cookies nem identifica o visitante.",
        ],
      },
      {
        title: "4. Serviços de terceiros",
        text: [
          "O website tem ligações para serviços externos (WhatsApp, Standvirtual e redes sociais). Ao abrir essas ligações, passa a estar no website desses terceiros, que podem usar os seus próprios cookies, nos termos das respetivas políticas. Não incorporamos conteúdos de terceiros que coloquem cookies neste website.",
        ],
      },
      {
        title: "5. Consentimento",
        text: [
          "Como usamos apenas tecnologias estritamente necessárias ao funcionamento do website, a lei não exige o seu consentimento prévio (Lei n.º 41/2004, art. 5.º, n.º 2). Se no futuro passarmos a usar outros cookies, pediremos o seu consentimento antes de os colocar.",
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
        title: "3. Cookieless statistics",
        text: ["We use Vercel Web Analytics to count visits in an aggregated, anonymous way. This service does not use cookies or identify visitors."],
      },
      {
        title: "4. Third-party services",
        text: [
          "The website links to external services (WhatsApp, Standvirtual and social networks). When you open these links, you are on the third party's website, which may use its own cookies under its own policies. We do not embed third-party content that places cookies on this website.",
        ],
      },
      {
        title: "5. Consent",
        text: [
          "As we only use technologies that are strictly necessary for the website to work, the law does not require your prior consent (Portuguese Law No. 41/2004, Art. 5(2)). If we start using other cookies in the future, we will ask for your consent before placing them.",
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
        title: "3. Estadísticas sin cookies",
        text: ["Utilizamos Vercel Web Analytics para contar las visitas de forma agregada y anónima. Este servicio no usa cookies ni identifica al visitante."],
      },
      {
        title: "4. Servicios de terceros",
        text: [
          "El sitio web contiene enlaces a servicios externos (WhatsApp, Standvirtual y redes sociales). Al abrirlos, pasa a estar en el sitio de dichos terceros, que pueden usar sus propias cookies según sus políticas. No integramos contenidos de terceros que instalen cookies en este sitio web.",
        ],
      },
      {
        title: "5. Consentimiento",
        text: [
          "Como solo utilizamos tecnologías estrictamente necesarias para el funcionamiento del sitio web, la ley no exige su consentimiento previo (Ley portuguesa n.º 41/2004, art. 5.2). Si en el futuro utilizamos otras cookies, le pediremos su consentimiento antes de instalarlas.",
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
        title: "3. Statistiques sans cookies",
        text: ["Nous utilisons Vercel Web Analytics pour compter les visites de manière agrégée et anonyme. Ce service n'utilise pas de cookies et n'identifie pas les visiteurs."],
      },
      {
        title: "4. Services tiers",
        text: [
          "Le site contient des liens vers des services externes (WhatsApp, Standvirtual et réseaux sociaux). En ouvrant ces liens, vous vous trouvez sur le site de ces tiers, qui peuvent utiliser leurs propres cookies selon leurs politiques. Nous n'intégrons aucun contenu tiers déposant des cookies sur ce site.",
        ],
      },
      {
        title: "5. Consentement",
        text: [
          "Comme nous n'utilisons que des technologies strictement nécessaires au fonctionnement du site, la loi n'exige pas votre consentement préalable (loi portugaise n° 41/2004, art. 5, par. 2). Si nous utilisons d'autres cookies à l'avenir, nous vous demanderons votre consentement avant de les déposer.",
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
        title: "3. Statistiken ohne Cookies",
        text: ["Wir verwenden Vercel Web Analytics, um Besuche aggregiert und anonym zu zählen. Dieser Dienst verwendet keine Cookies und identifiziert keine Besucher."],
      },
      {
        title: "4. Dienste Dritter",
        text: [
          "Die Website enthält Links zu externen Diensten (WhatsApp, Standvirtual und soziale Netzwerke). Wenn Sie diese öffnen, befinden Sie sich auf der Website des Dritten, der nach eigenen Richtlinien eigene Cookies verwenden kann. Wir binden keine Inhalte Dritter ein, die auf dieser Website Cookies setzen.",
        ],
      },
      {
        title: "5. Einwilligung",
        text: [
          "Da wir nur Technologien verwenden, die für den Betrieb der Website unbedingt erforderlich sind, ist nach dem Gesetz keine vorherige Einwilligung nötig (portugiesisches Gesetz Nr. 41/2004, Art. 5 Abs. 2). Sollten wir künftig andere Cookies einsetzen, holen wir vorher Ihre Einwilligung ein.",
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
