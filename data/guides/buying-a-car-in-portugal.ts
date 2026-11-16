/**
 * Guia "Comprar carro em Portugal sendo estrangeiro" (só EN, FR e DE).
 *
 * Informação revista em novembro de 2026. As regras (NIF, cartas de condução,
 * taxas de registo) mudam: rever este ficheiro pelo menos uma vez por ano e
 * atualizar `reviewed`. As fontes oficiais estão no fim de cada idioma.
 */

export type GuideLocale = "en" | "fr" | "de"

export type GuideSection = {
  /** Âncora usada no índice (#id). */
  id: string
  title: string
  paragraphs: string[]
  /** Lista de pontos (aparece depois dos parágrafos). */
  list?: string[]
  /** Caixa de destaque no fim da secção. */
  tip?: string
}

export type GuideContent = {
  slug: string
  metaTitle: string
  description: string
  eyebrow: string
  title: string
  intro: string
  quick: { title: string; items: string[] }
  sections: GuideSection[]
  faq: { q: string; a: string }[]
  cta: { title: string; text: string; whatsapp: string; vehicles: string; whatsappMessage: string }
  sources: { label: string; url: string }[]
  labels: {
    toc: string
    faq: string
    sources: string
    reviewed: string
    readingTime: string
    disclaimer: string
    footerLink: string
    breadcrumbHome: string
  }
}

/** Data da última revisão do conteúdo (ISO). */
export const reviewed = "2026-11-12"
export const published = "2026-11-12"

const officialSources = {
  nif: "https://www.portaldasfinancas.gov.pt/",
  licence: "https://www.gov.pt/servicos/trocar-carta-de-conducao-estrangeira-por-portuguesa",
  registration: "https://justica.gov.pt/Servicos/Pedir-Documento-Unico-Automovel-Certificado-de-matricula",
  certificate: "https://justica.gov.pt/Servicos/Pedir-e-consultar-certidao-permanente-automovel",
  cash: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/lgt/pages/lgt63e.aspx",
  inspection: "https://www.gov.pt/pt/servicos/levar-o-carro-a-inspecao",
}

export const guide: Record<GuideLocale, GuideContent> = {
  en: {
    slug: "buying-a-car-in-portugal-as-a-foreigner",
    metaTitle: "Buying a car in Portugal as a foreigner (2026)",
    description:
      "Step-by-step guide for foreigners buying a car in Portugal: NIF, driving licence, payment, registration, insurance, IUC tax and warranty. Updated for 2026.",
    eyebrow: "Guide for foreigners",
    title: "Buying a car in Portugal as a foreigner",
    intro:
      "Whether you've just moved to Portugal or spend part of the year here, buying a car is simpler than it looks. This guide walks you through every step, from getting a tax number to driving away, in plain English.",
    quick: {
      title: "The short answer",
      items: [
        "Yes, foreigners can buy a car in Portugal, residents and non-residents alike.",
        "You need a valid ID (passport, EU ID card or residence card) and a Portuguese tax number (NIF).",
        "The car must be registered in your name within 60 days. When you buy from a dealer, the dealer usually does this for you.",
        "Insurance is mandatory before you drive. Third-party liability is the legal minimum.",
        "From a dealer, a used car comes with a legal warranty.",
      ],
    },
    sections: [
      {
        id: "nif",
        title: "1. Get a Portuguese tax number (NIF)",
        paragraphs: [
          "The NIF (Número de Identificação Fiscal) is your Portuguese tax number. You need it to buy and register a car, take out insurance and pay the annual road tax (IUC).",
          "Residents get it at a tax office (Finanças) or a Loja do Cidadão. Non-residents can also get one: you'll need your passport and a document showing your address abroad. Many people use an accountant or a lawyer to request it remotely.",
          "If you live outside the EU/EEA, owning a car creates a tax obligation in Portugal. In that case you'll generally need to either appoint a fiscal representative or activate electronic notifications on the Portal das Finanças. Guidance on this point varies, so confirm it with the tax authority (Autoridade Tributária) before you buy.",
        ],
        tip: "Already have a NIF from renting or buying a home? Use the same number: you only ever have one.",
      },
      {
        id: "licence",
        title: "2. Check that your driving licence is valid",
        paragraphs: [
          "EU and EEA licences are valid in Portugal. If you become resident, you must register your address with the IMT (the transport authority) within 60 days. It's free.",
          "If your licence is from outside the EU/EEA and you live in Portugal, you generally have two years from the start of your residence to exchange it for a Portuguese one. If your licence comes from a country that hasn't signed the international road traffic conventions, you must exchange it straight away.",
          "Since January 2026, exchanges are done online only, through the IMT portal. The fee is around €30 and you can keep driving with a provisional permit while you wait.",
        ],
        tip: "Exam requirements and deadlines depend on the country that issued your licence. Check your country's rules on the IMT website before you buy.",
      },
      {
        id: "choose",
        title: "3. Choose the car and check it properly",
        paragraphs: [
          "Buying from a dealer gives you more protection than buying from a private seller (see the warranty section below). Whoever you buy from, check these points before paying:",
        ],
        list: [
          "Service history: ask for the service book or invoices. In Portugal, around 1 in 5 buyers forget to ask.",
          "First registration date and mileage: they should match the documents and the service records.",
          "Next mandatory inspection (IPO): you can check the date on the IMT website with the number plate.",
          "Open recalls: since 2026, a car with an unrepaired recall fails its inspection.",
          "Registered owner and charges: the online \"certidão permanente automóvel\" (about €10) shows who owns the car and whether any loan or charge is registered against it.",
          "A test drive: always drive the car before you decide.",
        ],
      },
      {
        id: "payment",
        title: "4. Pay safely",
        paragraphs: [
          "Portugal limits cash payments. In general, you can't pay €3,000 or more in cash. Non-resident individuals who are not acting as a business can pay up to €10,000 in cash. Above these amounts, pay by bank transfer.",
          "Always ask for an invoice (fatura) with your name and NIF. You'll need it for the registration and as proof of purchase for the warranty.",
        ],
      },
      {
        id: "registration",
        title: "5. Register the car in your name",
        paragraphs: [
          "The change of ownership must be registered with the Registo Automóvel (IRN) within 60 days of the sale. The official fee is about €55 online or €65 at a registry desk (2026 prices). If you register late, the fee is higher.",
          "When you buy from a dealer, the dealer normally files the registration for you. Buying privately, seller and buyer fill in and sign the registration request together. As a foreigner, you'll show your passport or residence card together with your NIF.",
          "Once the registration is done, you'll receive the updated registration certificate (Certificado de Matrícula, formerly called DUA) by post. It usually takes a few weeks.",
        ],
        tip: "Ask the seller which documents you need to carry in the car until the new certificate arrives.",
      },
      {
        id: "insurance",
        title: "6. Insure the car before you drive",
        paragraphs: [
          "Third-party liability insurance is mandatory in Portugal. Comprehensive cover is optional. Insurers usually ask for your NIF, your driving licence, an address and the car's documents.",
          "Several insurers offer service in English. Arrange the policy to start on the day you pick up the car.",
        ],
      },
      {
        id: "after",
        title: "7. After you buy: IUC tax and inspections",
        paragraphs: [
          "The IUC (Imposto Único de Circulação) is an annual road tax paid by the registered owner. You can check and pay it on the Portal das Finanças. Before buying, ask the seller for proof that previous years' IUC has been paid.",
          "Mandatory inspection (IPO) for passenger cars: the first at 4 years from first registration, then every 2 years until the car is 8 years old, then every year.",
        ],
      },
      {
        id: "warranty",
        title: "8. Your warranty when buying from a dealer",
        paragraphs: [
          "Under Portuguese law (Decree-Law 84/2021), a used car bought from a professional seller has a legal warranty of 3 years. The seller can reduce it to 18 months, but only if you agree in writing.",
          "Buying from a private seller, there is no legal warranty from the seller. This is one of the main reasons to buy from a dealer.",
        ],
        tip: "Read the warranty clause in the sales contract before signing, and keep the invoice: it's your proof of purchase.",
      },
      {
        id: "abroad",
        title: "9. Taking the car to another country",
        paragraphs: [
          "If you plan to register the car in another country later, that country's import and tax rules apply. Tell the seller before you buy so they can give you all the documents you'll need, and check the rules in the destination country first.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a non-resident buy a car in Portugal?",
        a: "Yes. You need a valid ID and a Portuguese tax number (NIF). If you live outside the EU/EEA, check with the tax authority whether you need a fiscal representative or electronic notifications.",
      },
      {
        q: "Do I need a Portuguese address?",
        a: "Not to get a NIF as a non-resident: an address abroad is accepted. You do need an address where official letters reach you, and insurers usually ask for one.",
      },
      {
        q: "Can I pay for a car in cash?",
        a: "Only up to the legal limits: in general below €3,000. Non-resident individuals can pay up to €10,000 in cash. Above that, pay by bank transfer.",
      },
      {
        q: "How long does the registration take?",
        a: "The request must be filed within 60 days of the sale. Online registration is usually processed in a few working days, and the new registration certificate arrives by post in a few weeks.",
      },
      {
        q: "What warranty do I get on a used car?",
        a: "From a dealer, 3 years by law, or 18 months if you agree to that in writing. From a private seller, there is no legal warranty.",
      },
      {
        q: "Can I drive with my foreign licence?",
        a: "EU/EEA licences are valid. Residents with a licence from outside the EU/EEA generally have two years to exchange it, or must do so immediately if their country hasn't signed the international conventions. Check your country on the IMT website.",
      },
    ],
    cta: {
      title: "Looking for a car in Portugal?",
      text: "See our cars with real photos and full specs, or send us a message on WhatsApp with any question.",
      whatsapp: "Ask on WhatsApp",
      vehicles: "See available cars",
      whatsappMessage: "Hi! I read your guide on buying a car in Portugal as a foreigner and I have a question:",
    },
    sources: [
      { label: "Portal das Finanças: NIF and IUC", url: officialSources.nif },
      { label: "gov.pt: exchanging a foreign driving licence", url: officialSources.licence },
      { label: "Justiça: registration certificate (Certificado de Matrícula)", url: officialSources.registration },
      { label: "Justiça: certidão permanente automóvel", url: officialSources.certificate },
      { label: "Portal das Finanças: cash payment limits (art. 63.º-E LGT)", url: officialSources.cash },
      { label: "gov.pt: mandatory vehicle inspection", url: officialSources.inspection },
    ],
    labels: {
      toc: "In this guide",
      faq: "Frequently asked questions",
      sources: "Official sources",
      reviewed: "Last reviewed",
      readingTime: "{minutes} min read",
      disclaimer:
        "This guide is general information, not legal or tax advice. Rules and fees change, so always confirm with the official sources before you buy.",
      footerLink: "Guide: buying a car in Portugal",
      breadcrumbHome: "Home",
    },
  },

  fr: {
    slug: "acheter-une-voiture-au-portugal-etranger",
    metaTitle: "Acheter une voiture au Portugal en étant étranger",
    description:
      "Guide étape par étape pour acheter une voiture au Portugal en tant qu’étranger : NIF, permis, paiement, immatriculation, assurance, taxe IUC et garantie.",
    eyebrow: "Guide pour les étrangers",
    title: "Acheter une voiture au Portugal quand on est étranger",
    intro:
      "Que vous veniez de vous installer au Portugal ou que vous y passiez une partie de l’année, acheter une voiture est plus simple qu’il n’y paraît. Ce guide vous accompagne à chaque étape, du numéro fiscal jusqu’à la remise des clés.",
    quick: {
      title: "En bref",
      items: [
        "Oui, un étranger peut acheter une voiture au Portugal, qu’il soit résident ou non.",
        "Il vous faut une pièce d’identité valide (passeport, carte d’identité de l’UE ou titre de séjour) et un numéro fiscal portugais (NIF).",
        "La voiture doit être enregistrée à votre nom dans les 60 jours. Si vous achetez chez un professionnel, c’est généralement lui qui s’en charge.",
        "L’assurance est obligatoire avant de rouler. La responsabilité civile est le minimum légal.",
        "Chez un professionnel, une voiture d’occasion bénéficie d’une garantie légale.",
      ],
    },
    sections: [
      {
        id: "nif",
        title: "1. Obtenir un numéro fiscal portugais (NIF)",
        paragraphs: [
          "Le NIF (Número de Identificação Fiscal) est votre numéro fiscal portugais. Il est nécessaire pour acheter et immatriculer une voiture, souscrire une assurance et payer la taxe de circulation annuelle (IUC).",
          "Les résidents l’obtiennent dans un bureau des impôts (Finanças) ou une Loja do Cidadão. Les non-résidents peuvent aussi en obtenir un, avec leur passeport et un justificatif de leur adresse à l’étranger. Beaucoup passent par un comptable ou un avocat pour le demander à distance.",
          "Si vous vivez hors de l’UE/EEE, posséder une voiture crée une obligation fiscale au Portugal. Il faut alors en général désigner un représentant fiscal ou activer les notifications électroniques sur le Portal das Finanças. Les informations varient sur ce point : vérifiez auprès de l’administration fiscale (Autoridade Tributária) avant l’achat.",
        ],
        tip: "Vous avez déjà un NIF pour une location ou l’achat d’un logement ? Utilisez le même : on n’en a qu’un seul.",
      },
      {
        id: "licence",
        title: "2. Vérifier la validité de votre permis de conduire",
        paragraphs: [
          "Les permis de l’UE et de l’EEE sont valables au Portugal. Si vous devenez résident, vous devez enregistrer votre adresse auprès de l’IMT (l’autorité des transports) dans les 60 jours. C’est gratuit.",
          "Si votre permis a été délivré hors de l’UE/EEE et que vous vivez au Portugal, vous disposez en général de deux ans à compter du début de votre résidence pour l’échanger contre un permis portugais. S’il provient d’un pays qui n’a pas signé les conventions internationales sur la circulation routière, l’échange doit être fait immédiatement.",
          "Depuis janvier 2026, l’échange se fait uniquement en ligne, sur le portail de l’IMT. Les frais sont d’environ 30 € et un permis provisoire vous permet de continuer à conduire en attendant.",
        ],
        tip: "Les conditions (examen, délais) dépendent du pays qui a délivré votre permis. Consultez les règles de votre pays sur le site de l’IMT avant l’achat.",
      },
      {
        id: "choose",
        title: "3. Choisir la voiture et bien la vérifier",
        paragraphs: [
          "Acheter chez un professionnel vous protège davantage qu’un achat entre particuliers (voir la section garantie plus bas). Quel que soit le vendeur, vérifiez ces points avant de payer :",
        ],
        list: [
          "L’historique d’entretien : demandez le carnet ou les factures. Au Portugal, environ 1 acheteur sur 5 oublie de le demander.",
          "La date de première immatriculation et le kilométrage : ils doivent correspondre aux documents et à l’historique d’entretien.",
          "Le prochain contrôle technique (IPO) : la date se vérifie sur le site de l’IMT avec la plaque d’immatriculation.",
          "Les rappels en cours : depuis 2026, une voiture avec un rappel non réparé est refusée au contrôle technique.",
          "Le propriétaire et les charges : la « certidão permanente automóvel » en ligne (environ 10 €) indique le propriétaire et tout crédit ou charge inscrit sur la voiture.",
          "Un essai : conduisez toujours la voiture avant de vous décider.",
        ],
      },
      {
        id: "payment",
        title: "4. Payer en toute sécurité",
        paragraphs: [
          "Le Portugal limite les paiements en espèces. En règle générale, on ne peut pas payer 3 000 € ou plus en liquide. Les particuliers non résidents qui n’agissent pas à titre professionnel peuvent payer jusqu’à 10 000 € en espèces. Au-delà, payez par virement bancaire.",
          "Demandez toujours une facture (fatura) à votre nom avec votre NIF. Elle est nécessaire pour l’immatriculation et sert de preuve d’achat pour la garantie.",
        ],
      },
      {
        id: "registration",
        title: "5. Enregistrer la voiture à votre nom",
        paragraphs: [
          "Le changement de propriétaire doit être inscrit au Registo Automóvel (IRN) dans les 60 jours suivant la vente. Les frais officiels sont d’environ 55 € en ligne ou 65 € au guichet (tarifs 2026). En cas de retard, les frais sont plus élevés.",
          "Si vous achetez chez un professionnel, c’est normalement lui qui dépose la demande. Entre particuliers, vendeur et acheteur remplissent et signent ensemble la demande d’immatriculation. En tant qu’étranger, vous présentez votre passeport ou titre de séjour avec votre NIF.",
          "Une fois l’inscription faite, vous recevez par la poste le certificat d’immatriculation mis à jour (Certificado de Matrícula, anciennement DUA). Cela prend généralement quelques semaines.",
        ],
        tip: "Demandez au vendeur quels documents garder dans la voiture en attendant le nouveau certificat.",
      },
      {
        id: "insurance",
        title: "6. Assurer la voiture avant de rouler",
        paragraphs: [
          "L’assurance responsabilité civile est obligatoire au Portugal. L’assurance tous risques est facultative. Les assureurs demandent généralement votre NIF, votre permis, une adresse et les documents de la voiture.",
          "Prévoyez que le contrat commence le jour où vous récupérez la voiture.",
        ],
      },
      {
        id: "after",
        title: "7. Après l’achat : taxe IUC et contrôles techniques",
        paragraphs: [
          "L’IUC (Imposto Único de Circulação) est une taxe annuelle payée par le propriétaire enregistré. Vous pouvez la consulter et la payer sur le Portal das Finanças. Avant d’acheter, demandez au vendeur la preuve que l’IUC des années précédentes a été payé.",
          "Contrôle technique obligatoire (IPO) des voitures particulières : le premier 4 ans après la première immatriculation, puis tous les 2 ans jusqu’aux 8 ans de la voiture, puis tous les ans.",
        ],
      },
      {
        id: "warranty",
        title: "8. Votre garantie chez un professionnel",
        paragraphs: [
          "Selon la loi portugaise (décret-loi 84/2021), une voiture d’occasion achetée à un professionnel bénéficie d’une garantie légale de 3 ans. Le vendeur peut la réduire à 18 mois, mais uniquement avec votre accord écrit.",
          "Entre particuliers, le vendeur ne doit aucune garantie légale. C’est l’une des principales raisons d’acheter chez un professionnel.",
        ],
        tip: "Lisez la clause de garantie du contrat avant de signer et conservez la facture : c’est votre preuve d’achat.",
      },
      {
        id: "abroad",
        title: "9. Emmener la voiture dans un autre pays",
        paragraphs: [
          "Si vous prévoyez d’immatriculer la voiture dans un autre pays plus tard, ce sont les règles d’importation et fiscales de ce pays qui s’appliquent. Prévenez le vendeur avant l’achat pour qu’il vous remette tous les documents nécessaires, et renseignez-vous d’abord sur les règles du pays de destination.",
        ],
      },
    ],
    faq: [
      {
        q: "Un non-résident peut-il acheter une voiture au Portugal ?",
        a: "Oui. Il faut une pièce d’identité valide et un numéro fiscal portugais (NIF). Si vous vivez hors de l’UE/EEE, vérifiez auprès de l’administration fiscale si un représentant fiscal ou les notifications électroniques sont nécessaires.",
      },
      {
        q: "Faut-il une adresse au Portugal ?",
        a: "Pas pour obtenir un NIF de non-résident : une adresse à l’étranger est acceptée. Il vous faut en revanche une adresse où recevoir le courrier officiel, et les assureurs en demandent généralement une.",
      },
      {
        q: "Peut-on payer une voiture en espèces ?",
        a: "Seulement dans les limites légales : en général moins de 3 000 €. Les particuliers non résidents peuvent payer jusqu’à 10 000 € en espèces. Au-delà, payez par virement.",
      },
      {
        q: "Combien de temps prend l’immatriculation ?",
        a: "La demande doit être déposée dans les 60 jours suivant la vente. En ligne, elle est généralement traitée en quelques jours ouvrés, et le nouveau certificat arrive par la poste en quelques semaines.",
      },
      {
        q: "Quelle garantie pour une voiture d’occasion ?",
        a: "Chez un professionnel, 3 ans selon la loi, ou 18 mois si vous l’acceptez par écrit. Entre particuliers, aucune garantie légale.",
      },
      {
        q: "Puis-je conduire avec mon permis étranger ?",
        a: "Les permis de l’UE/EEE sont valables. Les résidents titulaires d’un permis hors UE/EEE disposent en général de deux ans pour l’échanger, ou doivent le faire immédiatement si leur pays n’a pas signé les conventions internationales. Vérifiez votre pays sur le site de l’IMT.",
      },
    ],
    cta: {
      title: "Vous cherchez une voiture au Portugal ?",
      text: "Découvrez nos voitures avec des photos réelles et une fiche complète, ou posez-nous vos questions sur WhatsApp.",
      whatsapp: "Écrire sur WhatsApp",
      vehicles: "Voir les voitures disponibles",
      whatsappMessage: "Bonjour ! J’ai lu votre guide sur l’achat d’une voiture au Portugal et j’ai une question :",
    },
    sources: [
      { label: "Portal das Finanças : NIF et IUC", url: officialSources.nif },
      { label: "gov.pt : échanger un permis étranger", url: officialSources.licence },
      { label: "Justiça : certificat d’immatriculation (Certificado de Matrícula)", url: officialSources.registration },
      { label: "Justiça : certidão permanente automóvel", url: officialSources.certificate },
      { label: "Portal das Finanças : limites de paiement en espèces (art. 63.º-E LGT)", url: officialSources.cash },
      { label: "gov.pt : contrôle technique obligatoire", url: officialSources.inspection },
    ],
    labels: {
      toc: "Dans ce guide",
      faq: "Questions fréquentes",
      sources: "Sources officielles",
      reviewed: "Dernière mise à jour",
      readingTime: "{minutes} min de lecture",
      disclaimer:
        "Ce guide fournit des informations générales et ne constitue pas un conseil juridique ou fiscal. Les règles et les tarifs évoluent : vérifiez toujours auprès des sources officielles avant l’achat.",
      footerLink: "Guide : acheter une voiture au Portugal",
      breadcrumbHome: "Accueil",
    },
  },

  de: {
    slug: "auto-kaufen-in-portugal-als-auslaender",
    metaTitle: "Auto kaufen in Portugal als Ausländer (2026)",
    description:
      "Schritt-für-Schritt-Ratgeber zum Autokauf in Portugal für Ausländer: NIF, Führerschein, Zahlung, Ummeldung, Versicherung, Kfz-Steuer IUC und Garantie.",
    eyebrow: "Ratgeber für Ausländer",
    title: "Auto kaufen in Portugal als Ausländer",
    intro:
      "Ob Sie gerade nach Portugal gezogen sind oder einen Teil des Jahres hier verbringen: Ein Autokauf ist einfacher, als er aussieht. Dieser Ratgeber führt Sie durch jeden Schritt – von der Steuernummer bis zur Schlüsselübergabe.",
    quick: {
      title: "Das Wichtigste in Kürze",
      items: [
        "Ja, Ausländer können in Portugal ein Auto kaufen – mit oder ohne Wohnsitz im Land.",
        "Sie brauchen einen gültigen Ausweis (Reisepass, EU-Personalausweis oder Aufenthaltstitel) und eine portugiesische Steuernummer (NIF).",
        "Das Auto muss innerhalb von 60 Tagen auf Sie umgeschrieben werden. Beim Kauf vom Händler übernimmt das in der Regel der Händler.",
        "Vor der ersten Fahrt ist eine Versicherung Pflicht. Die Haftpflicht ist das gesetzliche Minimum.",
        "Beim Händler hat ein Gebrauchtwagen eine gesetzliche Gewährleistung.",
      ],
    },
    sections: [
      {
        id: "nif",
        title: "1. Portugiesische Steuernummer (NIF) beantragen",
        paragraphs: [
          "Die NIF (Número de Identificação Fiscal) ist Ihre portugiesische Steuernummer. Sie brauchen sie, um ein Auto zu kaufen und anzumelden, eine Versicherung abzuschließen und die jährliche Kfz-Steuer (IUC) zu zahlen.",
          "Mit Wohnsitz in Portugal erhalten Sie die NIF beim Finanzamt (Finanças) oder in einem Loja do Cidadão. Auch ohne Wohnsitz ist das möglich: Sie brauchen Ihren Reisepass und einen Nachweis Ihrer Adresse im Ausland. Viele beantragen sie über einen Steuerberater oder Anwalt aus der Ferne.",
          "Wenn Sie außerhalb der EU/des EWR leben, entsteht durch den Besitz eines Autos eine Steuerpflicht in Portugal. Dann müssen Sie in der Regel einen steuerlichen Vertreter benennen oder die elektronischen Benachrichtigungen im Portal das Finanças aktivieren. Die Auskünfte dazu sind nicht einheitlich – klären Sie es vor dem Kauf mit der Steuerbehörde (Autoridade Tributária).",
        ],
        tip: "Sie haben schon eine NIF, etwa für eine Miete oder einen Immobilienkauf? Dann nutzen Sie dieselbe – jeder hat nur eine.",
      },
      {
        id: "licence",
        title: "2. Gültigkeit Ihres Führerscheins prüfen",
        paragraphs: [
          "Führerscheine aus der EU und dem EWR gelten in Portugal. Wenn Sie Ihren Wohnsitz nach Portugal verlegen, müssen Sie Ihre Adresse innerhalb von 60 Tagen beim IMT (der Verkehrsbehörde) registrieren. Das ist kostenlos.",
          "Haben Sie einen Führerschein aus einem Land außerhalb der EU/des EWR und leben in Portugal, haben Sie in der Regel zwei Jahre ab Beginn des Wohnsitzes Zeit, ihn in einen portugiesischen umzutauschen. Stammt er aus einem Land, das die internationalen Straßenverkehrsabkommen nicht unterzeichnet hat, müssen Sie ihn sofort umtauschen.",
          "Seit Januar 2026 ist der Umtausch nur noch online über das IMT-Portal möglich. Die Gebühr liegt bei etwa 30 €, und mit einer vorläufigen Fahrerlaubnis können Sie in der Zwischenzeit weiterfahren.",
        ],
        tip: "Prüfungen und Fristen hängen vom Ausstellungsland Ihres Führerscheins ab. Prüfen Sie die Regeln für Ihr Land vor dem Kauf auf der Website des IMT.",
      },
      {
        id: "choose",
        title: "3. Das Auto auswählen und gründlich prüfen",
        paragraphs: [
          "Beim Händler sind Sie besser geschützt als beim Privatkauf (siehe Abschnitt Gewährleistung unten). Egal, bei wem Sie kaufen – prüfen Sie vor der Zahlung diese Punkte:",
        ],
        list: [
          "Wartungshistorie: Fragen Sie nach dem Serviceheft oder den Rechnungen. In Portugal vergisst etwa jeder fünfte Käufer danach zu fragen.",
          "Erstzulassung und Kilometerstand: Sie sollten mit den Papieren und der Wartungshistorie übereinstimmen.",
          "Nächste Hauptuntersuchung (IPO): Das Datum lässt sich mit dem Kennzeichen auf der Website des IMT prüfen.",
          "Offene Rückrufe: Seit 2026 fällt ein Auto mit nicht erledigtem Rückruf durch die Hauptuntersuchung.",
          "Eingetragener Halter und Belastungen: Die Online-„certidão permanente automóvel“ (ca. 10 €) zeigt den Eigentümer und ob ein Kredit oder eine Belastung auf dem Auto eingetragen ist.",
          "Probefahrt: Fahren Sie das Auto immer, bevor Sie sich entscheiden.",
        ],
      },
      {
        id: "payment",
        title: "4. Sicher bezahlen",
        paragraphs: [
          "Portugal begrenzt Barzahlungen. Grundsätzlich dürfen Sie 3.000 € oder mehr nicht bar bezahlen. Privatpersonen ohne Wohnsitz in Portugal, die nicht gewerblich handeln, dürfen bis zu 10.000 € bar zahlen. Darüber hinaus zahlen Sie per Banküberweisung.",
          "Lassen Sie sich immer eine Rechnung (fatura) auf Ihren Namen mit Ihrer NIF ausstellen. Sie brauchen sie für die Ummeldung und als Kaufbeleg für die Gewährleistung.",
        ],
      },
      {
        id: "registration",
        title: "5. Das Auto auf Ihren Namen umschreiben",
        paragraphs: [
          "Der Eigentümerwechsel muss innerhalb von 60 Tagen nach dem Kauf beim Registo Automóvel (IRN) eingetragen werden. Die amtliche Gebühr beträgt etwa 55 € online oder 65 € am Schalter (Stand 2026). Bei verspäteter Anmeldung wird es teurer.",
          "Beim Kauf vom Händler stellt in der Regel der Händler den Antrag. Beim Privatkauf füllen Verkäufer und Käufer den Antrag gemeinsam aus und unterschreiben ihn. Als Ausländer legen Sie Ihren Reisepass oder Aufenthaltstitel zusammen mit Ihrer NIF vor.",
          "Nach der Eintragung erhalten Sie die aktualisierte Zulassungsbescheinigung (Certificado de Matrícula, früher DUA) per Post. Das dauert meist einige Wochen.",
        ],
        tip: "Fragen Sie den Verkäufer, welche Unterlagen Sie bis zum Eintreffen der neuen Bescheinigung im Auto mitführen müssen.",
      },
      {
        id: "insurance",
        title: "6. Das Auto vor der ersten Fahrt versichern",
        paragraphs: [
          "Die Kfz-Haftpflichtversicherung ist in Portugal Pflicht, eine Vollkaskoversicherung ist freiwillig. Versicherer verlangen in der Regel Ihre NIF, Ihren Führerschein, eine Adresse und die Fahrzeugpapiere.",
          "Lassen Sie die Versicherung an dem Tag beginnen, an dem Sie das Auto abholen.",
        ],
      },
      {
        id: "after",
        title: "7. Nach dem Kauf: Kfz-Steuer IUC und Hauptuntersuchung",
        paragraphs: [
          "Die IUC (Imposto Único de Circulação) ist eine jährliche Kfz-Steuer, die der eingetragene Halter zahlt. Sie können sie im Portal das Finanças einsehen und bezahlen. Lassen Sie sich vor dem Kauf vom Verkäufer nachweisen, dass die IUC der Vorjahre bezahlt ist.",
          "Hauptuntersuchung (IPO) für Pkw: die erste 4 Jahre nach der Erstzulassung, dann alle 2 Jahre, bis das Auto 8 Jahre alt ist, danach jährlich.",
        ],
      },
      {
        id: "warranty",
        title: "8. Ihre Gewährleistung beim Kauf vom Händler",
        paragraphs: [
          "Nach portugiesischem Recht (Gesetzesdekret 84/2021) hat ein Gebrauchtwagen vom gewerblichen Verkäufer eine gesetzliche Gewährleistung von 3 Jahren. Der Verkäufer kann sie auf 18 Monate verkürzen – aber nur mit Ihrer schriftlichen Zustimmung.",
          "Beim Privatkauf gibt es keine gesetzliche Gewährleistung des Verkäufers. Das ist einer der wichtigsten Gründe, beim Händler zu kaufen.",
        ],
        tip: "Lesen Sie die Gewährleistungsklausel im Kaufvertrag vor der Unterschrift und bewahren Sie die Rechnung auf: Sie ist Ihr Kaufnachweis.",
      },
      {
        id: "abroad",
        title: "9. Das Auto in ein anderes Land mitnehmen",
        paragraphs: [
          "Wenn Sie das Auto später in einem anderen Land zulassen möchten, gelten die Einfuhr- und Steuerregeln dieses Landes. Sagen Sie es dem Verkäufer vor dem Kauf, damit er Ihnen alle nötigen Unterlagen mitgibt, und informieren Sie sich vorab über die Regeln im Zielland.",
        ],
      },
    ],
    faq: [
      {
        q: "Kann man in Portugal ohne Wohnsitz ein Auto kaufen?",
        a: "Ja. Sie brauchen einen gültigen Ausweis und eine portugiesische Steuernummer (NIF). Wenn Sie außerhalb der EU/des EWR leben, klären Sie mit der Steuerbehörde, ob ein steuerlicher Vertreter oder elektronische Benachrichtigungen nötig sind.",
      },
      {
        q: "Brauche ich eine Adresse in Portugal?",
        a: "Nicht für die NIF ohne Wohnsitz: Eine Adresse im Ausland wird akzeptiert. Sie brauchen aber eine Adresse, an der Sie amtliche Post erhalten, und Versicherer fragen in der Regel danach.",
      },
      {
        q: "Kann ich ein Auto bar bezahlen?",
        a: "Nur bis zu den gesetzlichen Grenzen: grundsätzlich unter 3.000 €. Privatpersonen ohne Wohnsitz in Portugal dürfen bis zu 10.000 € bar zahlen. Darüber hinaus per Überweisung.",
      },
      {
        q: "Wie lange dauert die Ummeldung?",
        a: "Der Antrag muss innerhalb von 60 Tagen nach dem Kauf gestellt werden. Online wird er meist in wenigen Werktagen bearbeitet, und die neue Zulassungsbescheinigung kommt nach einigen Wochen per Post.",
      },
      {
        q: "Welche Gewährleistung habe ich bei einem Gebrauchtwagen?",
        a: "Beim Händler gesetzlich 3 Jahre, oder 18 Monate, wenn Sie dem schriftlich zustimmen. Beim Privatkauf gibt es keine gesetzliche Gewährleistung.",
      },
      {
        q: "Darf ich mit meinem ausländischen Führerschein fahren?",
        a: "Führerscheine aus der EU/dem EWR sind gültig. Wer in Portugal wohnt und einen Führerschein aus einem anderen Land hat, muss ihn in der Regel innerhalb von zwei Jahren umtauschen – oder sofort, wenn das Land die internationalen Abkommen nicht unterzeichnet hat. Prüfen Sie Ihr Land auf der Website des IMT.",
      },
    ],
    cta: {
      title: "Sie suchen ein Auto in Portugal?",
      text: "Sehen Sie sich unsere Autos mit echten Fotos und vollständigem Datenblatt an oder stellen Sie uns Ihre Fragen per WhatsApp.",
      whatsapp: "Per WhatsApp fragen",
      vehicles: "Verfügbare Autos ansehen",
      whatsappMessage: "Hallo! Ich habe Ihren Ratgeber zum Autokauf in Portugal gelesen und habe eine Frage:",
    },
    sources: [
      { label: "Portal das Finanças: NIF und IUC", url: officialSources.nif },
      { label: "gov.pt: ausländischen Führerschein umtauschen", url: officialSources.licence },
      { label: "Justiça: Zulassungsbescheinigung (Certificado de Matrícula)", url: officialSources.registration },
      { label: "Justiça: certidão permanente automóvel", url: officialSources.certificate },
      { label: "Portal das Finanças: Grenzen für Barzahlungen (Art. 63.º-E LGT)", url: officialSources.cash },
      { label: "gov.pt: Hauptuntersuchung", url: officialSources.inspection },
    ],
    labels: {
      toc: "In diesem Ratgeber",
      faq: "Häufige Fragen",
      sources: "Offizielle Quellen",
      reviewed: "Zuletzt aktualisiert",
      readingTime: "{minutes} Min. Lesezeit",
      disclaimer:
        "Dieser Ratgeber enthält allgemeine Informationen und ist keine Rechts- oder Steuerberatung. Regeln und Gebühren ändern sich – prüfen Sie vor dem Kauf immer die offiziellen Quellen.",
      footerLink: "Ratgeber: Autokauf in Portugal",
      breadcrumbHome: "Startseite",
    },
  },
}

export const guideLocales = Object.keys(guide) as GuideLocale[]

export function isGuideLocale(locale: string): locale is GuideLocale {
  return locale in guide
}

/** Encontra o idioma a que pertence um slug (ex.: o slug inglês aberto em /fr/…). */
export function guideLocaleForSlug(slug: string): GuideLocale | undefined {
  return guideLocales.find((locale) => guide[locale].slug === slug)
}

/** Tempo de leitura aproximado, em minutos (≈ 200 palavras por minuto). */
export function readingMinutes(content: GuideContent) {
  const text = [
    content.intro,
    ...content.quick.items,
    ...content.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.list ?? []), s.tip ?? ""]),
    ...content.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ")
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}
