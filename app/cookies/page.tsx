"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

const content = {
  pt: {
    title: "Política de Cookies",
    updated: "Última atualização: janeiro de 2026",
    sections: [
      {
        title: "1. O que são cookies",
        text: [
          "Cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador quando visita determinados websites.",
          "Estes ficheiros permitem reconhecer o dispositivo, melhorar a navegação, guardar preferências e obter estatísticas de utilização.",
        ],
      },
      {
        title: "2. Utilização de cookies",
        text: [
          "A OTEN MOTORS pode utilizar cookies para garantir o correto funcionamento do website, melhorar a experiência de navegação e analisar a utilização das páginas.",
          "A utilização de cookies não permite, por si só, identificar diretamente o utilizador.",
        ],
      },
      {
        title: "3. Tipos de cookies utilizados",
        text: [
          "Cookies essenciais: necessários para o funcionamento básico do website e para permitir funcionalidades principais.",
          "Cookies funcionais: permitem guardar preferências do utilizador, como idioma ou opções de navegação.",
          "Cookies analíticos: ajudam a compreender como os visitantes utilizam o website, permitindo melhorar conteúdos e desempenho.",
        ],
      },
      {
        title: "4. Gestão de cookies",
        text: [
          "O utilizador pode configurar o seu navegador para bloquear, eliminar ou alertar sobre a utilização de cookies.",
          "A desativação de alguns cookies poderá afetar o funcionamento correto de determinadas funcionalidades do website.",
        ],
      },
      {
        title: "5. Cookies de terceiros",
        text: [
          "O website poderá utilizar serviços de terceiros que recorram a cookies, como ferramentas de análise, mapas, vídeos ou integrações externas.",
          "A OTEN MOTORS não controla diretamente os cookies definidos por terceiros, recomendando a consulta das respetivas políticas de privacidade e cookies.",
        ],
      },
      {
        title: "6. Alterações à Política de Cookies",
        text: [
          "A OTEN MOTORS poderá atualizar esta Política de Cookies sempre que necessário.",
          "As alterações serão publicadas nesta página.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "1. What cookies are",
        text: [
          "Cookies are small text files stored on the user’s device when visiting certain websites.",
          "These files allow the website to recognise the device, improve browsing, save preferences and obtain usage statistics.",
        ],
      },
      {
        title: "2. Use of cookies",
        text: [
          "OTEN MOTORS may use cookies to ensure the proper functioning of the website, improve browsing experience and analyse page usage.",
          "The use of cookies does not, by itself, directly identify the user.",
        ],
      },
      {
        title: "3. Types of cookies used",
        text: [
          "Essential cookies: necessary for the basic functioning of the website and to enable core features.",
          "Functional cookies: allow user preferences to be saved, such as language or browsing options.",
          "Analytical cookies: help understand how visitors use the website, allowing content and performance improvements.",
        ],
      },
      {
        title: "4. Cookie management",
        text: [
          "The user can configure their browser to block, delete or alert them about the use of cookies.",
          "Disabling some cookies may affect the proper functioning of certain website features.",
        ],
      },
      {
        title: "5. Third-party cookies",
        text: [
          "The website may use third-party services that use cookies, such as analytics tools, maps, videos or external integrations.",
          "OTEN MOTORS does not directly control cookies set by third parties and recommends consulting their respective privacy and cookie policies.",
        ],
      },
      {
        title: "6. Changes to this Cookie Policy",
        text: [
          "OTEN MOTORS may update this Cookie Policy whenever necessary.",
          "Changes will be published on this page.",
        ],
      },
    ],
  },
  es: {
    title: "Política de Cookies",
    updated: "Última actualización: enero de 2026",
    sections: [
      {
        title: "1. Qué son las cookies",
        text: [
          "Las cookies son pequeños archivos de texto almacenados en el dispositivo del usuario al visitar determinados sitios web.",
          "Estos archivos permiten reconocer el dispositivo, mejorar la navegación, guardar preferencias y obtener estadísticas de uso.",
        ],
      },
      {
        title: "2. Uso de cookies",
        text: [
          "OTEN MOTORS puede utilizar cookies para garantizar el correcto funcionamiento del sitio web, mejorar la experiencia de navegación y analizar el uso de las páginas.",
          "El uso de cookies no permite, por sí solo, identificar directamente al usuario.",
        ],
      },
      {
        title: "3. Tipos de cookies utilizadas",
        text: [
          "Cookies esenciales: necesarias para el funcionamiento básico del sitio web y para permitir funcionalidades principales.",
          "Cookies funcionales: permiten guardar preferencias del usuario, como idioma u opciones de navegación.",
          "Cookies analíticas: ayudan a comprender cómo los visitantes utilizan el sitio web, permitiendo mejorar contenidos y rendimiento.",
        ],
      },
      {
        title: "4. Gestión de cookies",
        text: [
          "El usuario puede configurar su navegador para bloquear, eliminar o alertar sobre el uso de cookies.",
          "La desactivación de algunas cookies puede afectar el correcto funcionamiento de determinadas funcionalidades del sitio web.",
        ],
      },
      {
        title: "5. Cookies de terceros",
        text: [
          "El sitio web puede utilizar servicios de terceros que recurran a cookies, como herramientas de análisis, mapas, vídeos o integraciones externas.",
          "OTEN MOTORS no controla directamente las cookies establecidas por terceros y recomienda consultar sus respectivas políticas de privacidad y cookies.",
        ],
      },
      {
        title: "6. Cambios en esta Política",
        text: [
          "OTEN MOTORS podrá actualizar esta Política de Cookies cuando sea necesario.",
          "Los cambios serán publicados en esta página.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique des Cookies",
    updated: "Dernière mise à jour : janvier 2026",
    sections: [
      {
        title: "1. Que sont les cookies",
        text: [
          "Les cookies sont de petits fichiers texte stockés sur l’appareil de l’utilisateur lorsqu’il visite certains sites web.",
          "Ces fichiers permettent de reconnaître l’appareil, d’améliorer la navigation, d’enregistrer des préférences et d’obtenir des statistiques d’utilisation.",
        ],
      },
      {
        title: "2. Utilisation des cookies",
        text: [
          "OTEN MOTORS peut utiliser des cookies pour assurer le bon fonctionnement du site, améliorer l’expérience de navigation et analyser l’utilisation des pages.",
          "L’utilisation des cookies ne permet pas, à elle seule, d’identifier directement l’utilisateur.",
        ],
      },
      {
        title: "3. Types de cookies utilisés",
        text: [
          "Cookies essentiels : nécessaires au fonctionnement de base du site et à l’activation des fonctionnalités principales.",
          "Cookies fonctionnels : permettent d’enregistrer les préférences de l’utilisateur, comme la langue ou les options de navigation.",
          "Cookies analytiques : aident à comprendre comment les visiteurs utilisent le site, permettant d’améliorer les contenus et les performances.",
        ],
      },
      {
        title: "4. Gestion des cookies",
        text: [
          "L’utilisateur peut configurer son navigateur pour bloquer, supprimer ou être alerté de l’utilisation des cookies.",
          "La désactivation de certains cookies peut affecter le bon fonctionnement de certaines fonctionnalités du site.",
        ],
      },
      {
        title: "5. Cookies tiers",
        text: [
          "Le site peut utiliser des services tiers ayant recours à des cookies, tels que des outils d’analyse, cartes, vidéos ou intégrations externes.",
          "OTEN MOTORS ne contrôle pas directement les cookies définis par des tiers et recommande de consulter leurs politiques de confidentialité et de cookies.",
        ],
      },
      {
        title: "6. Modifications de cette Politique",
        text: [
          "OTEN MOTORS peut mettre à jour cette Politique des Cookies chaque fois que nécessaire.",
          "Les modifications seront publiées sur cette page.",
        ],
      },
    ],
  },
  de: {
    title: "Cookie-Richtlinie",
    updated: "Letzte Aktualisierung: Januar 2026",
    sections: [
      {
        title: "1. Was Cookies sind",
        text: [
          "Cookies sind kleine Textdateien, die auf dem Gerät des Nutzers gespeichert werden, wenn bestimmte Websites besucht werden.",
          "Diese Dateien ermöglichen es, das Gerät zu erkennen, die Navigation zu verbessern, Präferenzen zu speichern und Nutzungsstatistiken zu erfassen.",
        ],
      },
      {
        title: "2. Verwendung von Cookies",
        text: [
          "OTEN MOTORS kann Cookies verwenden, um das ordnungsgemäße Funktionieren der Website sicherzustellen, die Nutzererfahrung zu verbessern und die Nutzung der Seiten zu analysieren.",
          "Die Verwendung von Cookies ermöglicht für sich allein keine direkte Identifizierung des Nutzers.",
        ],
      },
      {
        title: "3. Arten verwendeter Cookies",
        text: [
          "Essenzielle Cookies: erforderlich für die grundlegende Funktion der Website und zur Aktivierung wichtiger Funktionen.",
          "Funktionale Cookies: ermöglichen das Speichern von Nutzerpräferenzen, wie Sprache oder Navigationsoptionen.",
          "Analytische Cookies: helfen zu verstehen, wie Besucher die Website nutzen, und ermöglichen Verbesserungen von Inhalten und Leistung.",
        ],
      },
      {
        title: "4. Cookie-Verwaltung",
        text: [
          "Der Nutzer kann seinen Browser so konfigurieren, dass Cookies blockiert, gelöscht oder gemeldet werden.",
          "Die Deaktivierung einiger Cookies kann die ordnungsgemäße Funktion bestimmter Website-Funktionen beeinträchtigen.",
        ],
      },
      {
        title: "5. Cookies von Drittanbietern",
        text: [
          "Die Website kann Dienste Dritter verwenden, die Cookies einsetzen, wie Analyse-Tools, Karten, Videos oder externe Integrationen.",
          "OTEN MOTORS kontrolliert Cookies von Drittanbietern nicht direkt und empfiehlt, deren Datenschutz- und Cookie-Richtlinien zu konsultieren.",
        ],
      },
      {
        title: "6. Änderungen dieser Richtlinie",
        text: [
          "OTEN MOTORS kann diese Cookie-Richtlinie bei Bedarf aktualisieren.",
          "Änderungen werden auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },
}

export default function CookiesPage() {
  const { language } = useLanguage()
  const page = content[language as keyof typeof content] || content.pt

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              {page.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{page.updated}</p>

            <div className="mt-10 space-y-8">
              {page.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-muted-foreground">
                    {section.text.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}