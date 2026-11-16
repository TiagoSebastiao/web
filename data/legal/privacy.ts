/**
 * Política de Privacidade: texto nos 5 idiomas. A página está em app/[locale]/privacidade/page.tsx.
 * Os campos entre chavetas são preenchidos com config/site.ts (ver components/layout/legal-page.tsx).
 *
 * Reflete o que o site faz de facto: formulário de contacto enviado por e-mail (Resend),
 * alojamento na Vercel, estatísticas Vercel Web Analytics sem cookies, ligações para o
 * WhatsApp, e simulador/assistente que funcionam só no navegador. Se isto mudar
 * (ex.: newsletter, Google Analytics, mapa incorporado), esta política tem de mudar também.
 * Base: RGPD (Reg. UE 2016/679) e Lei n.º 58/2019. Não substitui aconselhamento jurídico.
 */
import type { Locale } from "@/data/vehicles"
import type { LegalContent } from "./index"

export const privacy: Record<Locale, LegalContent> = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        title: "1. Responsável pelo tratamento",
        text: [
          "O responsável pelo tratamento dos dados pessoais recolhidos através deste website é {company}, NIPC {nipc}, com sede em {office} (“OTEN MOTORS”).",
          "Para qualquer questão sobre privacidade ou para exercer os seus direitos, contacte-nos por {email} ou {phone}.",
        ],
      },
      {
        title: "2. Que dados tratamos",
        text: [
          "Formulário de contacto: nome, e-mail, telefone (opcional) e o conteúdo da mensagem.",
          "WhatsApp e telefone: quando nos contacta por estes meios, tratamos o seu número, o nome de perfil e o conteúdo da conversa, para lhe responder.",
          "Dados técnicos: o fornecedor de alojamento regista automaticamente dados técnicos de acesso (por exemplo, endereço IP, tipo de navegador e páginas pedidas), necessários ao funcionamento e à segurança do website.",
          "Estatísticas: usamos estatísticas de visitas agregadas e anónimas, sem cookies e sem identificar o visitante.",
          "Simulador de prestação e assistente “Que carro é para si?”: os valores e respostas que introduz são processados apenas no seu navegador e não são enviados nem guardados por nós.",
          "Não recolhemos categorias especiais de dados e pedimos que não as inclua nas mensagens.",
        ],
      },
      {
        title: "3. Finalidades e fundamentos",
        text: [
          "Responder a pedidos de informação, propostas de retoma ou de compra e preparar uma eventual venda: diligências pré-contratuais a seu pedido e execução de contrato (art. 6.º, n.º 1, al. b) do RGPD).",
          "Cumprir obrigações legais, nomeadamente fiscais, contabilísticas e de defesa do consumidor: obrigação legal (al. c).",
          "Garantir a segurança do website, prevenir abusos e obter estatísticas agregadas: interesse legítimo da OTEN MOTORS (al. f).",
          "Envio de novidades ou comunicações comerciais: apenas com o seu consentimento prévio (al. a), que pode retirar a qualquer momento.",
          "Não tomamos decisões exclusivamente automatizadas, incluindo definição de perfis, com efeitos jurídicos ou significativos para si.",
        ],
      },
      {
        title: "4. Durante quanto tempo guardamos os dados",
        text: [
          "Pedidos de contacto que não deem origem a um negócio: até 12 meses após o último contacto.",
          "Dados de clientes e documentos de venda: pelo prazo exigido por lei (em regra, 10 anos para documentos fiscais e contabilísticos) e, quanto ao necessário para a garantia, até ao fim dos respetivos prazos.",
          "Registos técnicos: pelo prazo definido pelo fornecedor de alojamento, em regra curto.",
          "Findos estes prazos, os dados são apagados ou anonimizados.",
        ],
      },
      {
        title: "5. Com quem partilhamos os dados",
        text: [
          "Prestadores de serviços que tratam dados por nossa conta (subcontratantes), vinculados por contrato e apenas para as finalidades indicadas: Vercel Inc. (alojamento do website e estatísticas sem cookies) e Resend (envio dos e-mails do formulário de contacto), bem como o nosso fornecedor de e-mail.",
          "WhatsApp (Meta): se optar por falar connosco pelo WhatsApp, os dados são também tratados pela WhatsApp, enquanto responsável autónomo, nos termos da sua própria política de privacidade.",
          "Entidades públicas, quando a lei o exija, e, em caso de venda, as entidades necessárias ao registo da viatura.",
          "Não vendemos nem cedemos dados pessoais a terceiros para fins comerciais.",
        ],
      },
      {
        title: "6. Transferências internacionais",
        text: [
          "Alguns prestadores (por exemplo, Vercel e Resend) podem tratar dados fora do Espaço Económico Europeu, nomeadamente nos Estados Unidos. Nesses casos, as transferências baseiam-se em mecanismos previstos no RGPD, como o Quadro de Privacidade de Dados UE-EUA ou cláusulas contratuais-tipo aprovadas pela Comissão Europeia.",
        ],
      },
      {
        title: "7. Os seus direitos",
        text: [
          "Tem direito de acesso, retificação, apagamento, limitação do tratamento, portabilidade e oposição, bem como de retirar o consentimento a qualquer momento, sem afetar a licitude do tratamento anterior.",
          "Para os exercer, contacte-nos por {email}. Respondemos no prazo de um mês, prorrogável nos termos do RGPD. Poderemos pedir informação para confirmar a sua identidade.",
          "Tem ainda o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em www.cnpd.pt.",
        ],
      },
      {
        title: "8. Segurança",
        text: [
          "Aplicamos medidas técnicas e organizativas adequadas para proteger os dados, incluindo ligação cifrada (HTTPS), acesso restrito e prestadores com garantias de segurança. Nenhum sistema é totalmente seguro, mas atuaremos de imediato perante qualquer incidente, nos termos da lei.",
        ],
      },
      {
        title: "9. Menores",
        text: [
          "Este website destina-se a maiores de 18 anos. Não recolhemos intencionalmente dados de menores.",
        ],
      },
      {
        title: "10. Alterações",
        text: [
          "Podemos atualizar esta Política. A versão em vigor é a publicada nesta página, com a data da última atualização.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: November 2026",
    sections: [
      {
        title: "1. Data controller",
        text: [
          "The controller of the personal data collected through this website is {company}, tax number {nipc}, with registered office at {office} (“OTEN MOTORS”).",
          "For any privacy question or to exercise your rights, contact us at {email} or {phone}.",
        ],
      },
      {
        title: "2. What data we process",
        text: [
          "Contact form: name, email, phone (optional) and the content of the message.",
          "WhatsApp and phone: when you contact us this way, we process your number, profile name and the content of the conversation in order to reply to you.",
          "Technical data: our hosting provider automatically logs technical access data (for example, IP address, browser type and pages requested), needed for the website to work and stay secure.",
          "Statistics: we use aggregated, anonymous visit statistics, without cookies and without identifying visitors.",
          "Payment simulator and “Which car is right for you?” assistant: the values and answers you enter are processed only in your browser and are not sent to or stored by us.",
          "We do not collect special categories of data and ask you not to include them in your messages.",
        ],
      },
      {
        title: "3. Purposes and legal bases",
        text: [
          "Answering enquiries and trade-in or purchase offers and preparing a possible sale: pre-contractual steps at your request and performance of a contract (Art. 6(1)(b) GDPR).",
          "Complying with legal obligations, in particular tax, accounting and consumer protection: legal obligation (Art. 6(1)(c)).",
          "Keeping the website secure, preventing abuse and producing aggregated statistics: legitimate interest of OTEN MOTORS (Art. 6(1)(f)).",
          "Sending news or marketing communications: only with your prior consent (Art. 6(1)(a)), which you can withdraw at any time.",
          "We do not take decisions based solely on automated processing, including profiling, that have legal or similarly significant effects on you.",
        ],
      },
      {
        title: "4. How long we keep data",
        text: [
          "Enquiries that do not lead to a sale: up to 12 months after the last contact.",
          "Customer data and sales documents: for the period required by law (as a rule, 10 years for tax and accounting documents) and, as needed for warranty purposes, until the end of the relevant periods.",
          "Technical logs: for the period set by the hosting provider, usually short.",
          "After these periods, data is deleted or anonymised.",
        ],
      },
      {
        title: "5. Who we share data with",
        text: [
          "Service providers processing data on our behalf (processors), bound by contract and only for the stated purposes: Vercel Inc. (website hosting and cookieless statistics) and Resend (sending contact-form emails), as well as our email provider.",
          "WhatsApp (Meta): if you choose to talk to us on WhatsApp, your data is also processed by WhatsApp, as an independent controller, under its own privacy policy.",
          "Public authorities where required by law and, in the event of a sale, the bodies needed to register the vehicle.",
          "We do not sell or pass on personal data to third parties for marketing purposes.",
        ],
      },
      {
        title: "6. International transfers",
        text: [
          "Some providers (for example, Vercel and Resend) may process data outside the European Economic Area, in particular in the United States. In such cases, transfers rely on GDPR mechanisms such as the EU-US Data Privacy Framework or standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        title: "7. Your rights",
        text: [
          "You have the right of access, rectification, erasure, restriction of processing, portability and objection, and to withdraw consent at any time, without affecting the lawfulness of prior processing.",
          "To exercise them, contact us at {email}. We reply within one month, which may be extended under the GDPR. We may ask for information to confirm your identity.",
          "You also have the right to lodge a complaint with the Portuguese data protection authority (CNPD), at www.cnpd.pt.",
        ],
      },
      {
        title: "8. Security",
        text: [
          "We apply appropriate technical and organisational measures to protect data, including encrypted connections (HTTPS), restricted access and providers with security guarantees. No system is completely secure, but we will act immediately on any incident, as required by law.",
        ],
      },
      {
        title: "9. Minors",
        text: ["This website is intended for people aged 18 or over. We do not knowingly collect data from minors."],
      },
      {
        title: "10. Changes",
        text: ["We may update this Policy. The version in force is the one published on this page, with the date of the last update."],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        text: [
          "El responsable del tratamiento de los datos personales recogidos a través de este sitio web es {company}, NIF {nipc}, con domicilio social en {office} (“OTEN MOTORS”).",
          "Para cualquier cuestión sobre privacidad o para ejercer sus derechos, contáctenos en {email} o {phone}.",
        ],
      },
      {
        title: "2. Qué datos tratamos",
        text: [
          "Formulario de contacto: nombre, correo electrónico, teléfono (opcional) y el contenido del mensaje.",
          "WhatsApp y teléfono: cuando nos contacta por estos medios, tratamos su número, nombre de perfil y el contenido de la conversación para responderle.",
          "Datos técnicos: el proveedor de alojamiento registra automáticamente datos técnicos de acceso (por ejemplo, dirección IP, tipo de navegador y páginas solicitadas), necesarios para el funcionamiento y la seguridad del sitio web.",
          "Estadísticas: utilizamos estadísticas de visitas agregadas y anónimas, sin cookies y sin identificar al visitante.",
          "Simulador de cuota y asistente “¿Qué coche es para usted?”: los valores y respuestas que introduce se procesan solo en su navegador y no se nos envían ni se guardan.",
          "No recogemos categorías especiales de datos y le pedimos que no las incluya en sus mensajes.",
        ],
      },
      {
        title: "3. Finalidades y bases jurídicas",
        text: [
          "Responder a solicitudes de información y a propuestas de compra o de vehículo a cuenta y preparar una posible venta: medidas precontractuales a petición suya y ejecución de contrato (art. 6.1.b RGPD).",
          "Cumplir obligaciones legales, en particular fiscales, contables y de protección del consumidor: obligación legal (art. 6.1.c).",
          "Garantizar la seguridad del sitio web, prevenir abusos y obtener estadísticas agregadas: interés legítimo de OTEN MOTORS (art. 6.1.f).",
          "Envío de novedades o comunicaciones comerciales: solo con su consentimiento previo (art. 6.1.a), que puede retirar en cualquier momento.",
          "No tomamos decisiones basadas únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, con efectos jurídicos o significativos para usted.",
        ],
      },
      {
        title: "4. Plazo de conservación",
        text: [
          "Solicitudes de contacto que no den lugar a una venta: hasta 12 meses después del último contacto.",
          "Datos de clientes y documentos de venta: durante el plazo exigido por la ley (por regla general, 10 años para documentos fiscales y contables) y, en lo necesario para la garantía, hasta el final de los plazos correspondientes.",
          "Registros técnicos: durante el plazo definido por el proveedor de alojamiento, normalmente breve.",
          "Transcurridos estos plazos, los datos se eliminan o anonimizan.",
        ],
      },
      {
        title: "5. Con quién compartimos los datos",
        text: [
          "Proveedores que tratan datos por nuestra cuenta (encargados del tratamiento), vinculados por contrato y solo para las finalidades indicadas: Vercel Inc. (alojamiento del sitio web y estadísticas sin cookies) y Resend (envío de los correos del formulario de contacto), así como nuestro proveedor de correo electrónico.",
          "WhatsApp (Meta): si decide hablar con nosotros por WhatsApp, sus datos también son tratados por WhatsApp, como responsable independiente, conforme a su propia política de privacidad.",
          "Autoridades públicas cuando la ley lo exija y, en caso de venta, las entidades necesarias para el registro del vehículo.",
          "No vendemos ni cedemos datos personales a terceros con fines comerciales.",
        ],
      },
      {
        title: "6. Transferencias internacionales",
        text: [
          "Algunos proveedores (por ejemplo, Vercel y Resend) pueden tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. En esos casos, las transferencias se basan en mecanismos previstos en el RGPD, como el Marco de Privacidad de Datos UE-EE. UU. o cláusulas contractuales tipo aprobadas por la Comisión Europea.",
        ],
      },
      {
        title: "7. Sus derechos",
        text: [
          "Tiene derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, así como a retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior.",
          "Para ejercerlos, contáctenos en {email}. Respondemos en el plazo de un mes, prorrogable conforme al RGPD. Podemos pedirle información para confirmar su identidad.",
          "También tiene derecho a presentar una reclamación ante la autoridad portuguesa de protección de datos (CNPD), en www.cnpd.pt.",
        ],
      },
      {
        title: "8. Seguridad",
        text: [
          "Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos, incluida la conexión cifrada (HTTPS), el acceso restringido y proveedores con garantías de seguridad. Ningún sistema es totalmente seguro, pero actuaremos de inmediato ante cualquier incidente, conforme a la ley.",
        ],
      },
      {
        title: "9. Menores",
        text: ["Este sitio web está dirigido a mayores de 18 años. No recogemos intencionadamente datos de menores."],
      },
      {
        title: "10. Modificaciones",
        text: ["Podemos actualizar esta Política. La versión vigente es la publicada en esta página, con la fecha de la última actualización."],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : novembre 2026",
    sections: [
      {
        title: "1. Responsable du traitement",
        text: [
          "Le responsable du traitement des données personnelles collectées via ce site est {company}, numéro fiscal {nipc}, dont le siège social est situé {office} (« OTEN MOTORS »).",
          "Pour toute question relative à la confidentialité ou pour exercer vos droits, contactez-nous à {email} ou au {phone}.",
        ],
      },
      {
        title: "2. Données traitées",
        text: [
          "Formulaire de contact : nom, e-mail, téléphone (facultatif) et contenu du message.",
          "WhatsApp et téléphone : lorsque vous nous contactez par ces moyens, nous traitons votre numéro, votre nom de profil et le contenu de la conversation afin de vous répondre.",
          "Données techniques : notre hébergeur enregistre automatiquement des données techniques d'accès (par exemple, adresse IP, type de navigateur et pages demandées), nécessaires au fonctionnement et à la sécurité du site.",
          "Statistiques : nous utilisons des statistiques de visites agrégées et anonymes, sans cookies et sans identifier le visiteur.",
          "Simulateur de mensualité et assistant « Quelle voiture vous convient ? » : les valeurs et réponses saisies sont traitées uniquement dans votre navigateur et ne nous sont ni transmises ni conservées.",
          "Nous ne collectons pas de catégories particulières de données et vous demandons de ne pas en inclure dans vos messages.",
        ],
      },
      {
        title: "3. Finalités et bases légales",
        text: [
          "Répondre aux demandes d'information et aux offres de reprise ou d'achat et préparer une éventuelle vente : mesures précontractuelles à votre demande et exécution du contrat (art. 6, par. 1, b) RGPD).",
          "Respecter les obligations légales, notamment fiscales, comptables et de protection des consommateurs : obligation légale (art. 6, par. 1, c)).",
          "Assurer la sécurité du site, prévenir les abus et établir des statistiques agrégées : intérêt légitime d'OTEN MOTORS (art. 6, par. 1, f)).",
          "Envoi d'actualités ou de communications commerciales : uniquement avec votre consentement préalable (art. 6, par. 1, a)), que vous pouvez retirer à tout moment.",
          "Nous ne prenons aucune décision fondée exclusivement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques ou significatifs à votre égard.",
        ],
      },
      {
        title: "4. Durée de conservation",
        text: [
          "Demandes de contact n'aboutissant pas à une vente : jusqu'à 12 mois après le dernier contact.",
          "Données clients et documents de vente : pendant la durée exigée par la loi (en règle générale, 10 ans pour les documents fiscaux et comptables) et, dans la mesure nécessaire à la garantie, jusqu'à la fin des délais correspondants.",
          "Journaux techniques : pendant la durée fixée par l'hébergeur, généralement courte.",
          "À l'issue de ces délais, les données sont supprimées ou anonymisées.",
        ],
      },
      {
        title: "5. Destinataires des données",
        text: [
          "Prestataires traitant des données pour notre compte (sous-traitants), liés par contrat et uniquement pour les finalités indiquées : Vercel Inc. (hébergement du site et statistiques sans cookies) et Resend (envoi des e-mails du formulaire de contact), ainsi que notre fournisseur de messagerie.",
          "WhatsApp (Meta) : si vous choisissez de nous contacter via WhatsApp, vos données sont également traitées par WhatsApp, en tant que responsable de traitement indépendant, conformément à sa propre politique de confidentialité.",
          "Autorités publiques lorsque la loi l'exige et, en cas de vente, les organismes nécessaires à l'immatriculation du véhicule.",
          "Nous ne vendons ni ne cédons de données personnelles à des tiers à des fins commerciales.",
        ],
      },
      {
        title: "6. Transferts internationaux",
        text: [
          "Certains prestataires (par exemple, Vercel et Resend) peuvent traiter des données en dehors de l'Espace économique européen, notamment aux États-Unis. Dans ce cas, les transferts reposent sur des mécanismes prévus par le RGPD, comme le cadre de protection des données UE-États-Unis ou des clauses contractuelles types approuvées par la Commission européenne.",
        ],
      },
      {
        title: "7. Vos droits",
        text: [
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition, ainsi que du droit de retirer votre consentement à tout moment, sans remettre en cause la licéité du traitement antérieur.",
          "Pour les exercer, contactez-nous à {email}. Nous répondons dans un délai d'un mois, prorogeable conformément au RGPD. Nous pouvons vous demander des informations pour confirmer votre identité.",
          "Vous avez également le droit d'introduire une réclamation auprès de l'autorité portugaise de protection des données (CNPD), sur www.cnpd.pt.",
        ],
      },
      {
        title: "8. Sécurité",
        text: [
          "Nous appliquons des mesures techniques et organisationnelles appropriées pour protéger les données, notamment une connexion chiffrée (HTTPS), un accès restreint et des prestataires offrant des garanties de sécurité. Aucun système n'est totalement sûr, mais nous agirons immédiatement en cas d'incident, conformément à la loi.",
        ],
      },
      {
        title: "9. Mineurs",
        text: ["Ce site s'adresse aux personnes âgées de 18 ans ou plus. Nous ne collectons pas sciemment de données concernant des mineurs."],
      },
      {
        title: "10. Modifications",
        text: ["Nous pouvons mettre à jour cette Politique. La version en vigueur est celle publiée sur cette page, avec la date de la dernière mise à jour."],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: November 2026",
    sections: [
      {
        title: "1. Verantwortlicher",
        text: [
          "Verantwortlicher für die über diese Website erhobenen personenbezogenen Daten ist {company}, Steuernummer {nipc}, mit Sitz in {office} („OTEN MOTORS“).",
          "Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte erreichen Sie uns unter {email} oder {phone}.",
        ],
      },
      {
        title: "2. Welche Daten wir verarbeiten",
        text: [
          "Kontaktformular: Name, E-Mail, Telefon (optional) und Inhalt der Nachricht.",
          "WhatsApp und Telefon: Wenn Sie uns auf diesem Weg kontaktieren, verarbeiten wir Ihre Nummer, Ihren Profilnamen und den Inhalt des Gesprächs, um Ihnen zu antworten.",
          "Technische Daten: Unser Hosting-Anbieter protokolliert automatisch technische Zugriffsdaten (z. B. IP-Adresse, Browsertyp und aufgerufene Seiten), die für den Betrieb und die Sicherheit der Website erforderlich sind.",
          "Statistiken: Wir nutzen aggregierte, anonyme Besuchsstatistiken ohne Cookies und ohne Identifizierung der Besucher.",
          "Ratenrechner und Assistent „Welches Auto passt zu Ihnen?“: Ihre Eingaben und Antworten werden nur in Ihrem Browser verarbeitet und weder an uns übermittelt noch gespeichert.",
          "Wir erheben keine besonderen Kategorien personenbezogener Daten und bitten Sie, solche nicht in Nachrichten anzugeben.",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen",
        text: [
          "Beantwortung von Anfragen sowie Inzahlungnahme- oder Ankaufsangeboten und Vorbereitung eines möglichen Kaufs: vorvertragliche Maßnahmen auf Ihre Anfrage und Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).",
          "Erfüllung gesetzlicher Pflichten, insbesondere steuer-, handels- und verbraucherrechtlicher: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).",
          "Sicherheit der Website, Missbrauchsvermeidung und aggregierte Statistiken: berechtigtes Interesse von OTEN MOTORS (Art. 6 Abs. 1 lit. f DSGVO).",
          "Versand von Neuigkeiten oder Werbung: nur mit Ihrer vorherigen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.",
          "Wir treffen keine ausschließlich automatisierten Entscheidungen einschließlich Profiling, die Ihnen gegenüber rechtliche oder ähnlich erhebliche Wirkung entfalten.",
        ],
      },
      {
        title: "4. Speicherdauer",
        text: [
          "Anfragen, die nicht zu einem Kauf führen: bis zu 12 Monate nach dem letzten Kontakt.",
          "Kundendaten und Verkaufsunterlagen: für die gesetzlich vorgeschriebene Dauer (in der Regel 10 Jahre für steuerliche und buchhalterische Unterlagen) und, soweit für die Gewährleistung nötig, bis zum Ende der jeweiligen Fristen.",
          "Technische Protokolle: für die vom Hosting-Anbieter festgelegte, in der Regel kurze Dauer.",
          "Nach Ablauf dieser Fristen werden die Daten gelöscht oder anonymisiert.",
        ],
      },
      {
        title: "5. Empfänger der Daten",
        text: [
          "Dienstleister, die Daten in unserem Auftrag verarbeiten (Auftragsverarbeiter), vertraglich gebunden und nur für die genannten Zwecke: Vercel Inc. (Hosting der Website und cookielose Statistiken) und Resend (Versand der E-Mails aus dem Kontaktformular) sowie unser E-Mail-Anbieter.",
          "WhatsApp (Meta): Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten auch von WhatsApp als eigenständig Verantwortlichem nach dessen eigener Datenschutzerklärung verarbeitet.",
          "Behörden, soweit gesetzlich vorgeschrieben, und im Falle eines Kaufs die für die Zulassung des Fahrzeugs erforderlichen Stellen.",
          "Wir verkaufen keine personenbezogenen Daten und geben sie nicht zu Werbezwecken an Dritte weiter.",
        ],
      },
      {
        title: "6. Internationale Übermittlungen",
        text: [
          "Einige Dienstleister (z. B. Vercel und Resend) können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten, insbesondere in den USA. In diesen Fällen stützen sich die Übermittlungen auf Mechanismen der DSGVO wie das EU-US Data Privacy Framework oder von der Europäischen Kommission genehmigte Standardvertragsklauseln.",
        ],
      },
      {
        title: "7. Ihre Rechte",
        text: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird.",
          "Zur Ausübung wenden Sie sich an {email}. Wir antworten innerhalb eines Monats; diese Frist kann gemäß DSGVO verlängert werden. Gegebenenfalls bitten wir um Angaben zur Bestätigung Ihrer Identität.",
          "Außerdem können Sie sich bei der portugiesischen Datenschutzbehörde (CNPD) beschweren: www.cnpd.pt.",
        ],
      },
      {
        title: "8. Sicherheit",
        text: [
          "Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz der Daten, darunter verschlüsselte Verbindungen (HTTPS), eingeschränkte Zugriffe und Dienstleister mit Sicherheitsgarantien. Kein System ist völlig sicher, doch wir handeln bei jedem Vorfall unverzüglich und gemäß den gesetzlichen Vorgaben.",
        ],
      },
      {
        title: "9. Minderjährige",
        text: ["Diese Website richtet sich an Personen ab 18 Jahren. Wir erheben wissentlich keine Daten von Minderjährigen."],
      },
      {
        title: "10. Änderungen",
        text: ["Wir können diese Datenschutzerklärung aktualisieren. Gültig ist die auf dieser Seite veröffentlichte Fassung mit dem Datum der letzten Aktualisierung."],
      },
    ],
  },
}
