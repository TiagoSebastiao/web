"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

const content = {
  pt: {
    title: "Termos e Condições",
    updated: "Última atualização: janeiro de 2026",
    sections: [
      {
        title: "1. Identificação",
        text: [
          "O presente website é propriedade da OTEN MOTORS e destina-se à divulgação de veículos automóveis, serviços associados e contactos comerciais.",
          "Para qualquer questão relacionada com o website ou com os veículos apresentados, poderá contactar-nos através do email geral@otenmotors.com ou do telefone +351 938 798 993.",
        ],
      },
      {
        title: "2. Utilização do website",
        text: [
          "Ao aceder e utilizar este website, o utilizador aceita os presentes Termos e Condições.",
          "O utilizador compromete-se a utilizar o website de forma lícita, correta e respeitadora dos direitos da OTEN MOTORS e de terceiros.",
        ],
      },
      {
        title: "3. Informação sobre veículos",
        text: [
          "A informação apresentada sobre veículos, incluindo preços, imagens, características, quilometragem, equipamentos, disponibilidade e demais dados, tem caráter meramente informativo.",
          "Apesar do cuidado na atualização dos conteúdos, poderão existir erros, omissões ou alterações sem aviso prévio.",
          "Antes de qualquer decisão de compra, o utilizador deverá confirmar todos os dados diretamente com a OTEN MOTORS.",
        ],
      },
      {
        title: "4. Preços e disponibilidade",
        text: [
          "Os preços apresentados podem ser alterados sem aviso prévio.",
          "A disponibilidade dos veículos está sujeita a confirmação.",
          "A publicação de um veículo no website não constitui uma proposta contratual vinculativa.",
        ],
      },
      {
        title: "5. Imagens e conteúdos",
        text: [
          "As imagens apresentadas podem ser ilustrativas ou representar o veículo anunciado, devendo ser sempre confirmadas junto da OTEN MOTORS.",
          "Todos os conteúdos do website, incluindo textos, imagens, logótipos, elementos gráficos e estrutura visual, estão protegidos por direitos de propriedade intelectual.",
        ],
      },
      {
        title: "6. Ligações externas",
        text: [
          "Este website poderá conter ligações para websites de terceiros.",
          "A OTEN MOTORS não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses websites externos.",
        ],
      },
      {
        title: "7. Responsabilidade",
        text: [
          "A OTEN MOTORS não garante que o website esteja permanentemente disponível, livre de erros ou interrupções.",
          "A OTEN MOTORS não será responsável por danos resultantes da utilização ou impossibilidade de utilização do website, salvo nos casos legalmente previstos.",
        ],
      },
      {
        title: "8. Alterações aos Termos e Condições",
        text: [
          "A OTEN MOTORS reserva-se o direito de alterar os presentes Termos e Condições a qualquer momento.",
          "As alterações produzirão efeitos após a sua publicação no website.",
        ],
      },
      {
        title: "9. Lei aplicável",
        text: [
          "Os presentes Termos e Condições regem-se pela legislação portuguesa.",
          "Em caso de litígio, será competente o foro português legalmente aplicável.",
        ],
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "1. Identification",
        text: [
          "This website is owned by OTEN MOTORS and is intended to present vehicles, related services and commercial contacts.",
          "For any question related to the website or the vehicles displayed, you may contact us at geral@otenmotors.com or +351 938 798 993.",
        ],
      },
      {
        title: "2. Website use",
        text: [
          "By accessing and using this website, the user accepts these Terms and Conditions.",
          "The user undertakes to use the website lawfully, correctly and in respect of the rights of OTEN MOTORS and third parties.",
        ],
      },
      {
        title: "3. Vehicle information",
        text: [
          "Information about vehicles, including prices, images, specifications, mileage, equipment, availability and other data, is provided for information purposes only.",
          "Although we take care to keep content updated, errors, omissions or changes may occur without prior notice.",
          "Before making any purchase decision, the user should confirm all details directly with OTEN MOTORS.",
        ],
      },
      {
        title: "4. Prices and availability",
        text: [
          "Prices shown may be changed without prior notice.",
          "Vehicle availability is subject to confirmation.",
          "The publication of a vehicle on the website does not constitute a binding contractual offer.",
        ],
      },
      {
        title: "5. Images and content",
        text: [
          "Images may be illustrative or represent the advertised vehicle and should always be confirmed with OTEN MOTORS.",
          "All website content, including texts, images, logos, graphic elements and visual structure, is protected by intellectual property rights.",
        ],
      },
      {
        title: "6. External links",
        text: [
          "This website may contain links to third-party websites.",
          "OTEN MOTORS is not responsible for the content, privacy policies or practices of external websites.",
        ],
      },
      {
        title: "7. Liability",
        text: [
          "OTEN MOTORS does not guarantee that the website will be permanently available, error-free or uninterrupted.",
          "OTEN MOTORS shall not be liable for damages resulting from the use or inability to use the website, except where required by law.",
        ],
      },
      {
        title: "8. Changes to the Terms and Conditions",
        text: [
          "OTEN MOTORS reserves the right to change these Terms and Conditions at any time.",
          "Changes will take effect after being published on the website.",
        ],
      },
      {
        title: "9. Applicable law",
        text: [
          "These Terms and Conditions are governed by Portuguese law.",
          "In the event of a dispute, the legally applicable Portuguese court shall have jurisdiction.",
        ],
      },
    ],
  },
  es: {
    title: "Términos y Condiciones",
    updated: "Última actualización: enero de 2026",
    sections: [
      {
        title: "1. Identificación",
        text: [
          "Este sitio web es propiedad de OTEN MOTORS y está destinado a la divulgación de vehículos, servicios asociados y contactos comerciales.",
          "Para cualquier cuestión relacionada con el sitio web o los vehículos presentados, puede contactarnos por email en geral@otenmotors.com o por teléfono en +351 938 798 993.",
        ],
      },
      {
        title: "2. Uso del sitio web",
        text: [
          "Al acceder y utilizar este sitio web, el usuario acepta estos Términos y Condiciones.",
          "El usuario se compromete a utilizar el sitio web de forma lícita, correcta y respetuosa con los derechos de OTEN MOTORS y de terceros.",
        ],
      },
      {
        title: "3. Información sobre vehículos",
        text: [
          "La información presentada sobre vehículos, incluyendo precios, imágenes, características, kilometraje, equipamiento, disponibilidad y otros datos, tiene carácter meramente informativo.",
          "Aunque se procura mantener los contenidos actualizados, pueden existir errores, omisiones o cambios sin previo aviso.",
          "Antes de cualquier decisión de compra, el usuario deberá confirmar todos los datos directamente con OTEN MOTORS.",
        ],
      },
      {
        title: "4. Precios y disponibilidad",
        text: [
          "Los precios mostrados pueden modificarse sin previo aviso.",
          "La disponibilidad de los vehículos está sujeta a confirmación.",
          "La publicación de un vehículo en el sitio web no constituye una oferta contractual vinculante.",
        ],
      },
      {
        title: "5. Imágenes y contenidos",
        text: [
          "Las imágenes pueden ser ilustrativas o representar el vehículo anunciado y deben confirmarse siempre con OTEN MOTORS.",
          "Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, elementos gráficos y estructura visual, están protegidos por derechos de propiedad intelectual.",
        ],
      },
      {
        title: "6. Enlaces externos",
        text: [
          "Este sitio web puede contener enlaces a sitios web de terceros.",
          "OTEN MOTORS no se responsabiliza por el contenido, políticas de privacidad o prácticas de dichos sitios externos.",
        ],
      },
      {
        title: "7. Responsabilidad",
        text: [
          "OTEN MOTORS no garantiza que el sitio web esté permanentemente disponible, libre de errores o interrupciones.",
          "OTEN MOTORS no será responsable por daños derivados del uso o imposibilidad de uso del sitio web, salvo en los casos legalmente previstos.",
        ],
      },
      {
        title: "8. Cambios en los Términos y Condiciones",
        text: [
          "OTEN MOTORS se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento.",
          "Los cambios surtirán efecto tras su publicación en el sitio web.",
        ],
      },
      {
        title: "9. Ley aplicable",
        text: [
          "Estos Términos y Condiciones se rigen por la legislación portuguesa.",
          "En caso de litigio, será competente el tribunal portugués legalmente aplicable.",
        ],
      },
    ],
  },
  fr: {
    title: "Conditions Générales",
    updated: "Dernière mise à jour : janvier 2026",
    sections: [
      {
        title: "1. Identification",
        text: [
          "Ce site web appartient à OTEN MOTORS et vise à présenter des véhicules, des services associés et des contacts commerciaux.",
          "Pour toute question relative au site ou aux véhicules présentés, vous pouvez nous contacter à geral@otenmotors.com ou au +351 938 798 993.",
        ],
      },
      {
        title: "2. Utilisation du site",
        text: [
          "En accédant à ce site et en l’utilisant, l’utilisateur accepte les présentes Conditions Générales.",
          "L’utilisateur s’engage à utiliser le site de manière licite, correcte et respectueuse des droits d’OTEN MOTORS et des tiers.",
        ],
      },
      {
        title: "3. Informations sur les véhicules",
        text: [
          "Les informations sur les véhicules, y compris les prix, images, caractéristiques, kilométrage, équipements, disponibilité et autres données, sont fournies à titre indicatif.",
          "Malgré le soin apporté à la mise à jour des contenus, des erreurs, omissions ou modifications peuvent survenir sans préavis.",
          "Avant toute décision d’achat, l’utilisateur doit confirmer toutes les informations directement auprès d’OTEN MOTORS.",
        ],
      },
      {
        title: "4. Prix et disponibilité",
        text: [
          "Les prix affichés peuvent être modifiés sans préavis.",
          "La disponibilité des véhicules est soumise à confirmation.",
          "La publication d’un véhicule sur le site ne constitue pas une offre contractuelle contraignante.",
        ],
      },
      {
        title: "5. Images et contenus",
        text: [
          "Les images peuvent être illustratives ou représenter le véhicule annoncé et doivent toujours être confirmées auprès d’OTEN MOTORS.",
          "Tous les contenus du site, y compris textes, images, logos, éléments graphiques et structure visuelle, sont protégés par des droits de propriété intellectuelle.",
        ],
      },
      {
        title: "6. Liens externes",
        text: [
          "Ce site peut contenir des liens vers des sites tiers.",
          "OTEN MOTORS n’est pas responsable du contenu, des politiques de confidentialité ou des pratiques de ces sites externes.",
        ],
      },
      {
        title: "7. Responsabilité",
        text: [
          "OTEN MOTORS ne garantit pas que le site sera disponible en permanence, sans erreurs ni interruptions.",
          "OTEN MOTORS ne pourra être tenue responsable des dommages résultant de l’utilisation ou de l’impossibilité d’utiliser le site, sauf dans les cas prévus par la loi.",
        ],
      },
      {
        title: "8. Modifications des Conditions Générales",
        text: [
          "OTEN MOTORS se réserve le droit de modifier les présentes Conditions Générales à tout moment.",
          "Les modifications prendront effet après leur publication sur le site.",
        ],
      },
      {
        title: "9. Loi applicable",
        text: [
          "Les présentes Conditions Générales sont régies par la loi portugaise.",
          "En cas de litige, le tribunal portugais légalement compétent sera applicable.",
        ],
      },
    ],
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    updated: "Letzte Aktualisierung: Januar 2026",
    sections: [
      {
        title: "1. Identifikation",
        text: [
          "Diese Website gehört OTEN MOTORS und dient der Präsentation von Fahrzeugen, damit verbundenen Dienstleistungen und Geschäftskontakten.",
          "Bei Fragen zur Website oder zu den präsentierten Fahrzeugen kontaktieren Sie uns bitte unter geral@otenmotors.com oder +351 938 798 993.",
        ],
      },
      {
        title: "2. Nutzung der Website",
        text: [
          "Durch den Zugriff auf und die Nutzung dieser Website akzeptiert der Nutzer diese Allgemeinen Geschäftsbedingungen.",
          "Der Nutzer verpflichtet sich, die Website rechtmäßig, korrekt und unter Achtung der Rechte von OTEN MOTORS und Dritten zu nutzen.",
        ],
      },
      {
        title: "3. Fahrzeuginformationen",
        text: [
          "Informationen zu Fahrzeugen, einschließlich Preisen, Bildern, Eigenschaften, Kilometerstand, Ausstattung, Verfügbarkeit und sonstigen Daten, dienen ausschließlich Informationszwecken.",
          "Trotz sorgfältiger Aktualisierung können Fehler, Auslassungen oder Änderungen ohne vorherige Ankündigung auftreten.",
          "Vor jeder Kaufentscheidung sollte der Nutzer alle Angaben direkt bei OTEN MOTORS bestätigen.",
        ],
      },
      {
        title: "4. Preise und Verfügbarkeit",
        text: [
          "Angezeigte Preise können ohne vorherige Ankündigung geändert werden.",
          "Die Verfügbarkeit der Fahrzeuge ist vorbehaltlich Bestätigung.",
          "Die Veröffentlichung eines Fahrzeugs auf der Website stellt kein verbindliches Vertragsangebot dar.",
        ],
      },
      {
        title: "5. Bilder und Inhalte",
        text: [
          "Bilder können illustrativ sein oder das beworbene Fahrzeug darstellen und sollten stets bei OTEN MOTORS bestätigt werden.",
          "Alle Inhalte der Website, einschließlich Texte, Bilder, Logos, grafische Elemente und visuelle Struktur, sind durch geistige Eigentumsrechte geschützt.",
        ],
      },
      {
        title: "6. Externe Links",
        text: [
          "Diese Website kann Links zu Websites Dritter enthalten.",
          "OTEN MOTORS übernimmt keine Verantwortung für Inhalte, Datenschutzrichtlinien oder Praktiken externer Websites.",
        ],
      },
      {
        title: "7. Haftung",
        text: [
          "OTEN MOTORS garantiert nicht, dass die Website dauerhaft verfügbar, fehlerfrei oder unterbrechungsfrei ist.",
          "OTEN MOTORS haftet nicht für Schäden, die aus der Nutzung oder Unmöglichkeit der Nutzung der Website entstehen, außer in gesetzlich vorgesehenen Fällen.",
        ],
      },
      {
        title: "8. Änderungen der Allgemeinen Geschäftsbedingungen",
        text: [
          "OTEN MOTORS behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern.",
          "Änderungen werden nach ihrer Veröffentlichung auf der Website wirksam.",
        ],
      },
      {
        title: "9. Anwendbares Recht",
        text: [
          "Diese Allgemeinen Geschäftsbedingungen unterliegen portugiesischem Recht.",
          "Im Streitfall ist das gesetzlich zuständige portugiesische Gericht zuständig.",
        ],
      },
    ],
  },
}

export default function TermsPage() {
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