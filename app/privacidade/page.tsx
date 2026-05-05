"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

const content = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: janeiro de 2026",
    sections: [
      {
        title: "1. Enquadramento",
        text: [
          "A OTEN MOTORS respeita a privacidade dos utilizadores e compromete-se a proteger os seus dados pessoais.",
          "Esta Política de Privacidade explica como recolhemos, utilizamos, conservamos e protegemos os dados pessoais fornecidos através deste website.",
        ],
      },
      {
        title: "2. Responsável pelo tratamento",
        text: [
          "A entidade responsável pelo tratamento dos dados pessoais é a OTEN MOTORS.",
          "Contacto: geral@otenmotors.com | +351 938 798 993.",
        ],
      },
      {
        title: "3. Dados pessoais recolhidos",
        text: [
          "Podemos recolher dados pessoais fornecidos voluntariamente pelo utilizador, como nome, email, contacto telefónico e mensagem enviada através de formulários ou canais de contacto.",
          "Também poderão ser recolhidos dados técnicos básicos relacionados com a utilização do website, como endereço IP, tipo de dispositivo, navegador e estatísticas de navegação, quando aplicável.",
        ],
      },
      {
        title: "4. Finalidades do tratamento",
        text: [
          "Os dados pessoais são tratados para responder a pedidos de contacto, prestar informações sobre veículos, agendar contactos comerciais, gerir propostas, melhorar o website e cumprir obrigações legais.",
          "Os dados não serão utilizados para finalidades incompatíveis com aquelas para as quais foram recolhidos.",
        ],
      },
      {
        title: "5. Fundamento legal",
        text: [
          "O tratamento dos dados pode basear-se no consentimento do utilizador, na execução de diligências pré-contratuais, no cumprimento de obrigações legais ou no interesse legítimo da OTEN MOTORS em responder a pedidos e melhorar os seus serviços.",
        ],
      },
      {
        title: "6. Conservação dos dados",
        text: [
          "Os dados pessoais serão conservados apenas durante o período necessário para cumprir as finalidades para que foram recolhidos, salvo obrigação legal de conservação por período superior.",
        ],
      },
      {
        title: "7. Partilha de dados",
        text: [
          "A OTEN MOTORS não vende nem cede dados pessoais a terceiros.",
          "Os dados poderão ser partilhados com entidades terceiras apenas quando necessário para prestação de serviços, cumprimento de obrigações legais ou mediante consentimento do utilizador.",
        ],
      },
      {
        title: "8. Direitos dos titulares dos dados",
        text: [
          "O utilizador pode solicitar o acesso, retificação, apagamento, limitação do tratamento, oposição ao tratamento e portabilidade dos seus dados, nos termos legalmente aplicáveis.",
          "Para exercer estes direitos, deverá contactar a OTEN MOTORS através do email geral@otenmotors.com.",
          "O utilizador tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados.",
        ],
      },
      {
        title: "9. Segurança",
        text: [
          "A OTEN MOTORS adota medidas técnicas e organizativas adequadas para proteger os dados pessoais contra perda, acesso não autorizado, alteração ou divulgação indevida.",
        ],
      },
      {
        title: "10. Alterações à Política de Privacidade",
        text: [
          "A OTEN MOTORS poderá atualizar esta Política de Privacidade sempre que necessário.",
          "As alterações serão publicadas nesta página.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "1. Scope",
        text: [
          "OTEN MOTORS respects users’ privacy and is committed to protecting personal data.",
          "This Privacy Policy explains how we collect, use, store and protect personal data provided through this website.",
        ],
      },
      {
        title: "2. Data controller",
        text: [
          "The entity responsible for processing personal data is OTEN MOTORS.",
          "Contact: geral@otenmotors.com | +351 938 798 993.",
        ],
      },
      {
        title: "3. Personal data collected",
        text: [
          "We may collect personal data voluntarily provided by the user, such as name, email, phone number and messages sent through forms or contact channels.",
          "Basic technical data related to website use may also be collected, such as IP address, device type, browser and browsing statistics, where applicable.",
        ],
      },
      {
        title: "4. Purposes of processing",
        text: [
          "Personal data is processed to respond to contact requests, provide information about vehicles, schedule commercial contacts, manage proposals, improve the website and comply with legal obligations.",
          "Data will not be used for purposes incompatible with those for which it was collected.",
        ],
      },
      {
        title: "5. Legal basis",
        text: [
          "Processing may be based on user consent, pre-contractual steps, compliance with legal obligations or OTEN MOTORS’ legitimate interest in responding to requests and improving its services.",
        ],
      },
      {
        title: "6. Data retention",
        text: [
          "Personal data will be retained only for the period necessary to fulfil the purposes for which it was collected, unless a longer legal retention period applies.",
        ],
      },
      {
        title: "7. Data sharing",
        text: [
          "OTEN MOTORS does not sell or transfer personal data to third parties.",
          "Data may be shared with third parties only when necessary to provide services, comply with legal obligations or with the user’s consent.",
        ],
      },
      {
        title: "8. Data subject rights",
        text: [
          "The user may request access, rectification, erasure, restriction of processing, objection to processing and data portability, under applicable law.",
          "To exercise these rights, please contact OTEN MOTORS at geral@otenmotors.com.",
          "The user also has the right to lodge a complaint with the Portuguese Data Protection Authority.",
        ],
      },
      {
        title: "9. Security",
        text: [
          "OTEN MOTORS adopts appropriate technical and organisational measures to protect personal data against loss, unauthorised access, alteration or improper disclosure.",
        ],
      },
      {
        title: "10. Changes to this Privacy Policy",
        text: [
          "OTEN MOTORS may update this Privacy Policy whenever necessary.",
          "Changes will be published on this page.",
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: enero de 2026",
    sections: [
      {
        title: "1. Ámbito",
        text: [
          "OTEN MOTORS respeta la privacidad de los usuarios y se compromete a proteger sus datos personales.",
          "Esta Política de Privacidad explica cómo recopilamos, utilizamos, conservamos y protegemos los datos personales proporcionados a través de este sitio web.",
        ],
      },
      {
        title: "2. Responsable del tratamiento",
        text: [
          "La entidad responsable del tratamiento de los datos personales es OTEN MOTORS.",
          "Contacto: geral@otenmotors.com | +351 938 798 993.",
        ],
      },
      {
        title: "3. Datos personales recopilados",
        text: [
          "Podemos recopilar datos personales proporcionados voluntariamente por el usuario, como nombre, email, teléfono y mensajes enviados a través de formularios o canales de contacto.",
          "También podrán recopilarse datos técnicos básicos relacionados con el uso del sitio web, como dirección IP, tipo de dispositivo, navegador y estadísticas de navegación, cuando sea aplicable.",
        ],
      },
      {
        title: "4. Finalidades del tratamiento",
        text: [
          "Los datos personales se tratan para responder a solicitudes de contacto, proporcionar información sobre vehículos, programar contactos comerciales, gestionar propuestas, mejorar el sitio web y cumplir obligaciones legales.",
          "Los datos no se utilizarán para finalidades incompatibles con aquellas para las que fueron recopilados.",
        ],
      },
      {
        title: "5. Base legal",
        text: [
          "El tratamiento puede basarse en el consentimiento del usuario, en gestiones precontractuales, en el cumplimiento de obligaciones legales o en el interés legítimo de OTEN MOTORS en responder solicitudes y mejorar sus servicios.",
        ],
      },
      {
        title: "6. Conservación de datos",
        text: [
          "Los datos personales se conservarán solo durante el período necesario para cumplir las finalidades para las que fueron recopilados, salvo obligación legal de conservación durante un período superior.",
        ],
      },
      {
        title: "7. Compartición de datos",
        text: [
          "OTEN MOTORS no vende ni cede datos personales a terceros.",
          "Los datos podrán compartirse con terceros solo cuando sea necesario para prestar servicios, cumplir obligaciones legales o con el consentimiento del usuario.",
        ],
      },
      {
        title: "8. Derechos de los titulares",
        text: [
          "El usuario puede solicitar el acceso, rectificación, eliminación, limitación del tratamiento, oposición al tratamiento y portabilidad de sus datos, según la legislación aplicable.",
          "Para ejercer estos derechos, deberá contactar con OTEN MOTORS en geral@otenmotors.com.",
          "El usuario también tiene derecho a presentar una reclamación ante la autoridad portuguesa de protección de datos.",
        ],
      },
      {
        title: "9. Seguridad",
        text: [
          "OTEN MOTORS adopta medidas técnicas y organizativas adecuadas para proteger los datos personales contra pérdida, acceso no autorizado, alteración o divulgación indebida.",
        ],
      },
      {
        title: "10. Cambios en esta Política",
        text: [
          "OTEN MOTORS podrá actualizar esta Política de Privacidad cuando sea necesario.",
          "Los cambios serán publicados en esta página.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : janvier 2026",
    sections: [
      {
        title: "1. Champ d’application",
        text: [
          "OTEN MOTORS respecte la vie privée des utilisateurs et s’engage à protéger leurs données personnelles.",
          "Cette Politique de Confidentialité explique comment nous collectons, utilisons, conservons et protégeons les données personnelles fournies via ce site.",
        ],
      },
      {
        title: "2. Responsable du traitement",
        text: [
          "L’entité responsable du traitement des données personnelles est OTEN MOTORS.",
          "Contact : geral@otenmotors.com | +351 938 798 993.",
        ],
      },
      {
        title: "3. Données personnelles collectées",
        text: [
          "Nous pouvons collecter les données personnelles fournies volontairement par l’utilisateur, telles que nom, email, téléphone et messages envoyés via des formulaires ou canaux de contact.",
          "Des données techniques de base liées à l’utilisation du site peuvent également être collectées, telles que l’adresse IP, le type d’appareil, le navigateur et les statistiques de navigation, le cas échéant.",
        ],
      },
      {
        title: "4. Finalités du traitement",
        text: [
          "Les données personnelles sont traitées pour répondre aux demandes de contact, fournir des informations sur les véhicules, organiser des contacts commerciaux, gérer des propositions, améliorer le site et respecter les obligations légales.",
          "Les données ne seront pas utilisées à des fins incompatibles avec celles pour lesquelles elles ont été collectées.",
        ],
      },
      {
        title: "5. Base juridique",
        text: [
          "Le traitement peut être fondé sur le consentement de l’utilisateur, des démarches précontractuelles, le respect d’obligations légales ou l’intérêt légitime d’OTEN MOTORS à répondre aux demandes et améliorer ses services.",
        ],
      },
      {
        title: "6. Conservation des données",
        text: [
          "Les données personnelles seront conservées uniquement pendant la période nécessaire aux finalités pour lesquelles elles ont été collectées, sauf obligation légale de conservation plus longue.",
        ],
      },
      {
        title: "7. Partage des données",
        text: [
          "OTEN MOTORS ne vend ni ne cède de données personnelles à des tiers.",
          "Les données peuvent être partagées avec des tiers uniquement lorsque cela est nécessaire pour fournir des services, respecter des obligations légales ou avec le consentement de l’utilisateur.",
        ],
      },
      {
        title: "8. Droits des personnes concernées",
        text: [
          "L’utilisateur peut demander l’accès, la rectification, l’effacement, la limitation du traitement, l’opposition au traitement et la portabilité de ses données, conformément à la loi applicable.",
          "Pour exercer ces droits, veuillez contacter OTEN MOTORS à geral@otenmotors.com.",
          "L’utilisateur a également le droit de déposer une plainte auprès de l’autorité portugaise de protection des données.",
        ],
      },
      {
        title: "9. Sécurité",
        text: [
          "OTEN MOTORS adopte des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre la perte, l’accès non autorisé, l’altération ou la divulgation abusive.",
        ],
      },
      {
        title: "10. Modifications de cette Politique",
        text: [
          "OTEN MOTORS peut mettre à jour cette Politique de Confidentialité chaque fois que nécessaire.",
          "Les modifications seront publiées sur cette page.",
        ],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: Januar 2026",
    sections: [
      {
        title: "1. Geltungsbereich",
        text: [
          "OTEN MOTORS respektiert die Privatsphäre der Nutzer und verpflichtet sich, personenbezogene Daten zu schützen.",
          "Diese Datenschutzerklärung erklärt, wie wir personenbezogene Daten, die über diese Website bereitgestellt werden, erheben, verwenden, speichern und schützen.",
        ],
      },
      {
        title: "2. Verantwortlicher",
        text: [
          "Verantwortlich für die Verarbeitung personenbezogener Daten ist OTEN MOTORS.",
          "Kontakt: geral@otenmotors.com | +351 938 798 993.",
        ],
      },
      {
        title: "3. Erhobene personenbezogene Daten",
        text: [
          "Wir können personenbezogene Daten erheben, die vom Nutzer freiwillig bereitgestellt werden, wie Name, E-Mail, Telefonnummer und Nachrichten über Formulare oder Kontaktkanäle.",
          "Gegebenenfalls können auch grundlegende technische Daten zur Nutzung der Website erhoben werden, wie IP-Adresse, Gerätetyp, Browser und Navigationsstatistiken.",
        ],
      },
      {
        title: "4. Zwecke der Verarbeitung",
        text: [
          "Personenbezogene Daten werden verarbeitet, um Kontaktanfragen zu beantworten, Informationen zu Fahrzeugen bereitzustellen, Geschäftskontakte zu organisieren, Angebote zu verwalten, die Website zu verbessern und gesetzliche Pflichten zu erfüllen.",
          "Die Daten werden nicht für Zwecke verwendet, die mit den ursprünglichen Erhebungszwecken unvereinbar sind.",
        ],
      },
      {
        title: "5. Rechtsgrundlage",
        text: [
          "Die Verarbeitung kann auf der Einwilligung des Nutzers, vorvertraglichen Maßnahmen, der Erfüllung gesetzlicher Pflichten oder dem berechtigten Interesse von OTEN MOTORS an der Beantwortung von Anfragen und Verbesserung seiner Dienstleistungen beruhen.",
        ],
      },
      {
        title: "6. Aufbewahrung der Daten",
        text: [
          "Personenbezogene Daten werden nur so lange aufbewahrt, wie es zur Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.",
        ],
      },
      {
        title: "7. Weitergabe von Daten",
        text: [
          "OTEN MOTORS verkauft oder überträgt keine personenbezogenen Daten an Dritte.",
          "Daten können nur dann an Dritte weitergegeben werden, wenn dies zur Erbringung von Dienstleistungen, zur Erfüllung gesetzlicher Pflichten oder mit Zustimmung des Nutzers erforderlich ist.",
        ],
      },
      {
        title: "8. Rechte der betroffenen Personen",
        text: [
          "Der Nutzer kann Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit nach geltendem Recht verlangen.",
          "Zur Ausübung dieser Rechte kontaktieren Sie OTEN MOTORS unter geral@otenmotors.com.",
          "Der Nutzer hat außerdem das Recht, eine Beschwerde bei der portugiesischen Datenschutzbehörde einzureichen.",
        ],
      },
      {
        title: "9. Sicherheit",
        text: [
          "OTEN MOTORS ergreift geeignete technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, unbefugtem Zugriff, Veränderung oder unzulässiger Offenlegung zu schützen.",
        ],
      },
      {
        title: "10. Änderungen dieser Erklärung",
        text: [
          "OTEN MOTORS kann diese Datenschutzerklärung bei Bedarf aktualisieren.",
          "Änderungen werden auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },
}

export default function PrivacyPage() {
  const { language } = useLanguage()
  const page = content[language as keyof typeof content] || content.pt

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto px-4 pb-14 pt-28 md:pb-20 md:pt-32">
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