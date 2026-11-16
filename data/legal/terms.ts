/**
 * Termos e Condições: texto nos 5 idiomas. A página está em app/[locale]/termos/page.tsx.
 *
 * Os campos entre chavetas ({company}, {nipc}, …) são preenchidos automaticamente com os
 * dados de config/site.ts (ver components/layout/legal-page.tsx). O que estiver vazio
 * aparece como "[…]".
 *
 * Base legal tida em conta: DL 7/2004 (comércio eletrónico), CSC art. 171.º, DL 84/2021
 * (garantias), DL 133/2009 e DL 81-C/2017 (crédito ao consumo e intermediários), DL 446/85
 * (cláusulas contratuais gerais), Lei 144/2015 (RAL), DL 156/2005 (Livro de Reclamações),
 * CDADC e DL 122/2000 (direitos de autor e bases de dados). Não substitui aconselhamento jurídico.
 */
import type { Locale } from "@/data/vehicles"
import type { LegalContent } from "./index"

export const terms: Record<Locale, LegalContent> = {
  pt: {
    title: "Termos e Condições",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        title: "1. Identificação",
        text: [
          "O website {site} é propriedade e da responsabilidade de {company}, {legalForm}, com sede em {office}, matriculada na {registry} sob o número único de matrícula e de pessoa coletiva {nipc}, com o capital social de {capital} (doravante “OTEN MOTORS”).",
          "Contactos: {email} · {phone}. OTEN MOTORS é o nome comercial sob o qual a sociedade exerce a atividade de comércio de veículos automóveis.",
        ],
      },
      {
        title: "2. Objeto e aceitação",
        text: [
          "Estes Termos regulam o acesso e a utilização do website. Ao utilizá-lo, o utilizador declara que leu e aceita estes Termos. Se não concordar, deve abster-se de o utilizar.",
          "Nada nestes Termos limita os direitos que a lei reconhece aos consumidores e que não possam ser afastados por acordo.",
        ],
      },
      {
        title: "3. Informação sobre as viaturas",
        text: [
          "A informação publicada (características, equipamento, quilómetros, fotografias, consumos e restantes dados) é prestada com rigor e de boa-fé, com base na documentação e na inspeção da viatura, e tem caráter informativo.",
          "Os dados técnicos de fábrica (potência, consumos, emissões, dimensões) são os indicados pelo fabricante para a versão e podem variar com o uso, o estado e as condições de condução. As fotografias são da própria viatura, mas cores e detalhes podem variar consoante o ecrã.",
          "A informação do website não constitui, por si só, proposta contratual. As características definitivas da viatura, o preço e as condições da venda constam do contrato ou da fatura, que prevalecem. Em caso de erro manifesto (por exemplo, de digitação no preço), a OTEN MOTORS informará o interessado antes de qualquer compra, podendo este desistir sem qualquer encargo.",
          "O utilizador pode e deve confirmar todos os dados connosco e ver a viatura antes de decidir.",
        ],
      },
      {
        title: "4. Preços, disponibilidade e reservas",
        text: [
          "Os preços são indicados em euros e incluem os impostos aplicáveis. Eventuais custos adicionais (por exemplo, registo de propriedade, transporte ou entrega ao domicílio) são sempre comunicados antes da compra.",
          "As viaturas estão sujeitas a venda prévia: a indicação “disponível” não garante a disponibilidade no momento do contacto. Uma viatura só fica reservada após confirmação escrita da OTEN MOTORS e nas condições aí acordadas.",
          "A OTEN MOTORS pode alterar preços e retirar viaturas do website a qualquer momento, sem prejuízo dos negócios já acordados por escrito.",
        ],
      },
      {
        title: "5. Garantia",
        text: [
          "Nas vendas a consumidores aplica-se a garantia legal de conformidade prevista no Decreto-Lei n.º 84/2021, de 18 de outubro, pela qual o vendedor responde. Nos bens usados, o prazo pode ser reduzido por acordo escrito, até ao mínimo de 18 meses, conforme o que constar do contrato de compra e venda. Esta garantia legal não pode ser excluída nem limitada para além do que a lei permite.",
          "Qualquer garantia adicional ou comercial (por exemplo, garantia mecânica ou extensão de garantia) indicada no website ou no contrato é prestada por uma empresa parceira, {warrantyPartner}, que é a única garante dessa garantia comercial, nos termos, coberturas, exclusões e procedimentos definidos no respetivo certificado ou contrato de garantia, entregue ao cliente.",
          "A OTEN MOTORS não é parte nem garante dessa garantia comercial, não responde pelas decisões da empresa parceira sobre a sua aplicação e limita-se a disponibilizar a respetiva informação, sem prejuízo da garantia legal referida acima.",
          "Os prazos e coberturas indicados nas páginas das viaturas são meramente informativos; prevalecem os do contrato de compra e venda e do certificado de garantia.",
        ],
      },
      {
        title: "6. Financiamento e crédito",
        text: [
          "A OTEN MOTORS não concede crédito, não é intermediária de crédito (nem a título acessório), não tem acordos com entidades financiadoras, não recebe comissões de crédito e não analisa, propõe, aprova nem encaminha pedidos de financiamento.",
          "O simulador de prestação disponível nas páginas das viaturas é uma ferramenta de cálculo para uso exclusivo do utilizador: os resultados dependem apenas dos valores que este introduz, são indicativos e não constituem proposta, oferta, recomendação ou publicidade a crédito.",
          "Qualquer crédito para a compra de uma viatura é contratado diretamente entre o cliente e uma instituição autorizada pelo Banco de Portugal, sob a exclusiva responsabilidade dessa instituição e do cliente. A OTEN MOTORS não é parte nesse contrato.",
        ],
      },
      {
        title: "7. Retomas e propostas de compra",
        text: [
          "As avaliações e propostas de retoma ou de compra de viaturas feitas à distância (por exemplo, por WhatsApp, com base em fotografias) são indicativas e não vinculativas. Ficam sempre sujeitas à inspeção presencial da viatura, à verificação da documentação, do historial e da inexistência de ónus ou encargos, e só se tornam vinculativas com acordo escrito.",
        ],
      },
      {
        title: "8. Propriedade intelectual",
        text: [
          "Todo o conteúdo do website, incluindo fotografias, textos, descrições, logótipos, design, código, organização e a base de dados de viaturas, é propriedade da OTEN MOTORS ou utilizado com autorização, e está protegido pelo Código do Direito de Autor e dos Direitos Conexos, pelo Código da Propriedade Industrial e pelo regime de proteção das bases de dados (Decreto-Lei n.º 122/2000).",
          "É proibido, sem autorização prévia e escrita da OTEN MOTORS: copiar, reproduzir, publicar ou reutilizar fotografias e textos, nomeadamente em anúncios de outras viaturas ou noutros websites; extrair conteúdos de forma automática (scraping, robôs ou semelhantes); integrar o website ou partes dele noutros sites (framing); e utilizar a marca ou o logótipo OTEN MOTORS.",
          "As marcas, modelos e logótipos de fabricantes automóveis pertencem aos respetivos titulares e são referidos apenas para identificar as viaturas, sem que isso implique qualquer relação com esses fabricantes.",
          "A violação destes direitos pode dar lugar a responsabilidade civil e criminal, nos termos da lei.",
        ],
      },
      {
        title: "9. Utilização do website",
        text: [
          "O utilizador compromete-se a usar o website de forma lícita e de boa-fé. É proibido, nomeadamente: introduzir vírus ou código malicioso; tentar aceder sem autorização a sistemas ou dados; sobrecarregar o website; enviar conteúdos falsos, ofensivos ou ilícitos através dos formulários; e fazer-se passar por outra pessoa.",
          "A OTEN MOTORS pode limitar ou bloquear o acesso a quem viole estes Termos, sem prejuízo de outras medidas legais.",
        ],
      },
      {
        title: "10. Ligações e serviços de terceiros",
        text: [
          "O website contém ligações para serviços de terceiros (por exemplo, WhatsApp, Standvirtual e redes sociais). Esses serviços são da responsabilidade dos respetivos titulares e regem-se pelos seus próprios termos e políticas. A OTEN MOTORS não controla nem responde pelo seu conteúdo, disponibilidade ou tratamento de dados.",
        ],
      },
      {
        title: "11. Responsabilidade",
        text: [
          "A OTEN MOTORS procura manter o website disponível, atualizado e sem erros, mas não garante que funcione sem interrupções, falhas técnicas ou imprecisões pontuais.",
          "Na medida permitida pela lei, a OTEN MOTORS não responde por danos resultantes da utilização ou da impossibilidade de utilização do website, de decisões tomadas apenas com base na informação nele publicada sem confirmação prévia, de ferramentas de cálculo ou sugestão (como o simulador de prestação ou o assistente “Que carro é para si?”), nem de serviços de terceiros.",
          "Esta limitação não se aplica a danos causados com dolo ou culpa grave, a danos à vida, à integridade física ou à saúde, nem aos direitos legais dos consumidores, nomeadamente à garantia legal de conformidade.",
        ],
      },
      {
        title: "12. Reclamações e resolução de litígios",
        text: [
          "O utilizador pode apresentar reclamação no Livro de Reclamações, disponível no estabelecimento e em formato eletrónico em www.livroreclamacoes.pt.",
          "Em caso de litígio de consumo, o consumidor pode recorrer à seguinte entidade de Resolução Alternativa de Litígios: {adr} ({adrUrl}). Mais informações no Portal do Consumidor (www.consumidor.gov.pt).",
        ],
      },
      {
        title: "13. Lei aplicável e foro",
        text: [
          "Estes Termos regem-se pela lei portuguesa. Para a resolução de litígios são competentes os tribunais portugueses, nos termos gerais da lei, sem prejuízo das regras imperativas de competência que protegem os consumidores.",
        ],
      },
      {
        title: "14. Alterações",
        text: [
          "A OTEN MOTORS pode alterar estes Termos a qualquer momento. A versão em vigor é a publicada nesta página, com a data da última atualização. Em caso de divergência entre versões em diferentes idiomas, prevalece a versão em português.",
        ],
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    updated: "Last updated: November 2026",
    sections: [
      {
        title: "1. Identification",
        text: [
          "The website {site} is owned and operated by {company}, {legalForm}, with registered office at {office}, registered with the {registry} under the single registration and tax number {nipc}, with a share capital of {capital} (“OTEN MOTORS”).",
          "Contacts: {email} · {phone}. OTEN MOTORS is the trade name under which the company carries out its motor vehicle trading business.",
        ],
      },
      {
        title: "2. Purpose and acceptance",
        text: [
          "These Terms govern access to and use of the website. By using it, the user confirms that they have read and accept these Terms. If you do not agree, please do not use the website.",
          "Nothing in these Terms limits the rights that the law grants to consumers and that cannot be waived by agreement.",
        ],
      },
      {
        title: "3. Information about the vehicles",
        text: [
          "The information published (specifications, equipment, mileage, photos, fuel consumption and other data) is provided carefully and in good faith, based on the vehicle's documents and inspection, and is for information purposes.",
          "Factory technical data (power, consumption, emissions, dimensions) are those stated by the manufacturer for the version and may vary with use, condition and driving conditions. The photos show the actual vehicle, but colours and details may vary depending on the screen.",
          "The information on the website is not, in itself, a contractual offer. The final characteristics of the vehicle, the price and the terms of sale are those set out in the contract or invoice, which prevail. In the event of an obvious error (for example, a typing error in the price), OTEN MOTORS will inform the interested party before any purchase, and they may withdraw at no cost.",
          "Users can and should confirm all details with us and see the vehicle before deciding.",
        ],
      },
      {
        title: "4. Prices, availability and reservations",
        text: [
          "Prices are shown in euros and include applicable taxes. Any additional costs (for example, ownership registration, transport or home delivery) are always disclosed before purchase.",
          "Vehicles are subject to prior sale: the “available” label does not guarantee availability at the time of contact. A vehicle is only reserved after written confirmation from OTEN MOTORS and under the conditions agreed therein.",
          "OTEN MOTORS may change prices and remove vehicles from the website at any time, without prejudice to transactions already agreed in writing.",
        ],
      },
      {
        title: "5. Warranty",
        text: [
          "Sales to consumers are covered by the legal guarantee of conformity under Portuguese Decree-Law No. 84/2021 of 18 October, for which the seller is responsible. For used goods, the period may be reduced by written agreement to a minimum of 18 months, as set out in the sales contract. This legal guarantee cannot be excluded or limited beyond what the law allows.",
          "Any additional or commercial warranty (for example, a mechanical warranty or warranty extension) mentioned on the website or in the contract is provided by a partner company, {warrantyPartner}, which is the sole guarantor of that commercial warranty, under the terms, coverage, exclusions and procedures set out in the warranty certificate or contract given to the customer.",
          "OTEN MOTORS is not a party to, nor the guarantor of, that commercial warranty, is not responsible for the partner company's decisions on how it applies, and merely makes the related information available, without prejudice to the legal guarantee mentioned above.",
          "The periods and coverage shown on the vehicle pages are for information only; those in the sales contract and warranty certificate prevail.",
        ],
      },
      {
        title: "6. Finance and credit",
        text: [
          "OTEN MOTORS does not grant credit, is not a credit intermediary (not even on an ancillary basis), has no agreements with lenders, receives no credit commissions and does not assess, propose, approve or forward finance applications.",
          "The monthly payment simulator on the vehicle pages is a calculation tool for the user's own use only: the results depend solely on the values the user enters, are indicative and are not a credit proposal, offer, recommendation or credit advertising.",
          "Any credit to buy a vehicle is entered into directly between the customer and an institution authorised by Banco de Portugal, under the sole responsibility of that institution and the customer. OTEN MOTORS is not a party to that contract.",
        ],
      },
      {
        title: "7. Trade-ins and purchase offers",
        text: [
          "Valuations and trade-in or purchase offers made remotely (for example, via WhatsApp, based on photos) are indicative and not binding. They are always subject to an in-person inspection of the vehicle and verification of its documents, history and the absence of any liens or charges, and only become binding with a written agreement.",
        ],
      },
      {
        title: "8. Intellectual property",
        text: [
          "All website content, including photos, texts, descriptions, logos, design, code, layout and the vehicle database, is owned by OTEN MOTORS or used with permission, and is protected by Portuguese copyright and industrial property law and by the legal protection of databases (Decree-Law No. 122/2000).",
          "Without the prior written consent of OTEN MOTORS, it is forbidden to: copy, reproduce, publish or reuse photos and texts, in particular in adverts for other vehicles or on other websites; extract content automatically (scraping, bots or similar); embed the website or parts of it in other sites (framing); or use the OTEN MOTORS name or logo.",
          "Car manufacturers' brands, models and logos belong to their respective owners and are mentioned only to identify the vehicles, without implying any relationship with those manufacturers.",
          "Infringement of these rights may give rise to civil and criminal liability under the law.",
        ],
      },
      {
        title: "9. Use of the website",
        text: [
          "Users agree to use the website lawfully and in good faith. In particular, it is forbidden to: introduce viruses or malicious code; attempt unauthorised access to systems or data; overload the website; send false, offensive or unlawful content through the forms; or impersonate another person.",
          "OTEN MOTORS may restrict or block access for anyone who breaches these Terms, without prejudice to other legal measures.",
        ],
      },
      {
        title: "10. Links and third-party services",
        text: [
          "The website contains links to third-party services (for example, WhatsApp, Standvirtual and social networks). These services are the responsibility of their owners and are governed by their own terms and policies. OTEN MOTORS does not control and is not responsible for their content, availability or handling of data.",
        ],
      },
      {
        title: "11. Liability",
        text: [
          "OTEN MOTORS strives to keep the website available, up to date and free of errors, but does not guarantee that it will work without interruptions, technical faults or occasional inaccuracies.",
          "To the extent permitted by law, OTEN MOTORS is not liable for damage arising from the use of, or inability to use, the website, from decisions taken solely on the basis of the information published without prior confirmation, from calculation or suggestion tools (such as the payment simulator or the “Which car is right for you?” assistant), or from third-party services.",
          "This limitation does not apply to damage caused by wilful misconduct or gross negligence, to harm to life, physical integrity or health, or to consumers' statutory rights, in particular the legal guarantee of conformity.",
        ],
      },
      {
        title: "12. Complaints and dispute resolution",
        text: [
          "Users may file a complaint in the Complaints Book (Livro de Reclamações), available at the premises and online at www.livroreclamacoes.pt.",
          "In the event of a consumer dispute, the consumer may contact the following Alternative Dispute Resolution body: {adr} ({adrUrl}). More information on the Consumer Portal (www.consumidor.gov.pt).",
        ],
      },
      {
        title: "13. Governing law and jurisdiction",
        text: [
          "These Terms are governed by Portuguese law. Portuguese courts have jurisdiction to settle disputes under the general rules of law, without prejudice to mandatory jurisdiction rules that protect consumers.",
        ],
      },
      {
        title: "14. Changes",
        text: [
          "OTEN MOTORS may amend these Terms at any time. The version in force is the one published on this page, with the date of the last update. In the event of any discrepancy between language versions, the Portuguese version prevails.",
        ],
      },
    ],
  },
  es: {
    title: "Términos y Condiciones",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      {
        title: "1. Identificación",
        text: [
          "El sitio web {site} es propiedad y responsabilidad de {company}, {legalForm}, con domicilio social en {office}, inscrita en la {registry} con el número único de matrícula y de identificación fiscal {nipc}, con un capital social de {capital} (en adelante, “OTEN MOTORS”).",
          "Contactos: {email} · {phone}. OTEN MOTORS es el nombre comercial con el que la sociedad ejerce su actividad de comercio de vehículos.",
        ],
      },
      {
        title: "2. Objeto y aceptación",
        text: [
          "Estos Términos regulan el acceso y el uso del sitio web. Al utilizarlo, el usuario declara que ha leído y acepta estos Términos. Si no está de acuerdo, debe abstenerse de utilizarlo.",
          "Nada en estos Términos limita los derechos que la ley reconoce a los consumidores y que no pueden excluirse por acuerdo.",
        ],
      },
      {
        title: "3. Información sobre los vehículos",
        text: [
          "La información publicada (características, equipamiento, kilómetros, fotografías, consumos y demás datos) se facilita con rigor y de buena fe, a partir de la documentación y la inspección del vehículo, y tiene carácter informativo.",
          "Los datos técnicos de fábrica (potencia, consumos, emisiones, dimensiones) son los indicados por el fabricante para la versión y pueden variar según el uso, el estado y las condiciones de conducción. Las fotografías son del propio vehículo, pero los colores y detalles pueden variar según la pantalla.",
          "La información del sitio web no constituye, por sí sola, una oferta contractual. Las características definitivas del vehículo, el precio y las condiciones de venta son las que constan en el contrato o la factura, que prevalecen. En caso de error manifiesto (por ejemplo, de escritura en el precio), OTEN MOTORS informará al interesado antes de cualquier compra, pudiendo este desistir sin coste alguno.",
          "El usuario puede y debe confirmar todos los datos con nosotros y ver el vehículo antes de decidir.",
        ],
      },
      {
        title: "4. Precios, disponibilidad y reservas",
        text: [
          "Los precios se indican en euros e incluyen los impuestos aplicables. Los posibles costes adicionales (por ejemplo, registro de propiedad, transporte o entrega a domicilio) se comunican siempre antes de la compra.",
          "Los vehículos están sujetos a venta previa: la indicación “disponible” no garantiza la disponibilidad en el momento del contacto. Un vehículo solo queda reservado tras confirmación escrita de OTEN MOTORS y en las condiciones acordadas.",
          "OTEN MOTORS puede modificar precios y retirar vehículos del sitio web en cualquier momento, sin perjuicio de las operaciones ya acordadas por escrito.",
        ],
      },
      {
        title: "5. Garantía",
        text: [
          "En las ventas a consumidores se aplica la garantía legal de conformidad prevista en el Decreto-Ley portugués n.º 84/2021, de 18 de octubre, de la que responde el vendedor. En los bienes usados, el plazo puede reducirse por acuerdo escrito hasta un mínimo de 18 meses, según conste en el contrato de compraventa. Esta garantía legal no puede excluirse ni limitarse más allá de lo que permite la ley.",
          "Cualquier garantía adicional o comercial (por ejemplo, garantía mecánica o extensión de garantía) indicada en el sitio web o en el contrato es prestada por una empresa colaboradora, {warrantyPartner}, que es la única garante de dicha garantía comercial, en los términos, coberturas, exclusiones y procedimientos definidos en el certificado o contrato de garantía entregado al cliente.",
          "OTEN MOTORS no es parte ni garante de dicha garantía comercial, no responde de las decisiones de la empresa colaboradora sobre su aplicación y se limita a facilitar la información correspondiente, sin perjuicio de la garantía legal antes mencionada.",
          "Los plazos y coberturas indicados en las páginas de los vehículos son meramente informativos; prevalecen los del contrato de compraventa y del certificado de garantía.",
        ],
      },
      {
        title: "6. Financiación y crédito",
        text: [
          "OTEN MOTORS no concede crédito, no es intermediaria de crédito (ni siquiera a título accesorio), no tiene acuerdos con entidades financieras, no percibe comisiones de crédito y no analiza, propone, aprueba ni tramita solicitudes de financiación.",
          "El simulador de cuota disponible en las páginas de los vehículos es una herramienta de cálculo para uso exclusivo del usuario: los resultados dependen solo de los valores que este introduce, son orientativos y no constituyen propuesta, oferta, recomendación ni publicidad de crédito.",
          "Cualquier crédito para la compra de un vehículo se contrata directamente entre el cliente y una entidad autorizada por el Banco de Portugal, bajo la exclusiva responsabilidad de dicha entidad y del cliente. OTEN MOTORS no es parte en ese contrato.",
        ],
      },
      {
        title: "7. Vehículos a cuenta y propuestas de compra",
        text: [
          "Las valoraciones y propuestas de compra o de entrega de vehículos a cuenta realizadas a distancia (por ejemplo, por WhatsApp, a partir de fotografías) son orientativas y no vinculantes. Quedan siempre sujetas a la inspección presencial del vehículo y a la comprobación de su documentación, su historial y la inexistencia de cargas o gravámenes, y solo son vinculantes mediante acuerdo escrito.",
        ],
      },
      {
        title: "8. Propiedad intelectual",
        text: [
          "Todo el contenido del sitio web, incluidas fotografías, textos, descripciones, logotipos, diseño, código, organización y la base de datos de vehículos, es propiedad de OTEN MOTORS o se utiliza con autorización, y está protegido por la legislación portuguesa de derechos de autor y de propiedad industrial y por el régimen de protección de las bases de datos (Decreto-Ley n.º 122/2000).",
          "Sin autorización previa y por escrito de OTEN MOTORS, queda prohibido: copiar, reproducir, publicar o reutilizar fotografías y textos, en particular en anuncios de otros vehículos o en otros sitios web; extraer contenidos de forma automatizada (scraping, robots o similares); integrar el sitio web o partes de él en otros sitios (framing); y utilizar la marca o el logotipo OTEN MOTORS.",
          "Las marcas, modelos y logotipos de los fabricantes de automóviles pertenecen a sus respectivos titulares y se mencionan solo para identificar los vehículos, sin que ello implique relación alguna con dichos fabricantes.",
          "La infracción de estos derechos puede dar lugar a responsabilidad civil y penal, conforme a la ley.",
        ],
      },
      {
        title: "9. Uso del sitio web",
        text: [
          "El usuario se compromete a utilizar el sitio web de forma lícita y de buena fe. En particular, queda prohibido: introducir virus o código malicioso; intentar acceder sin autorización a sistemas o datos; sobrecargar el sitio web; enviar contenidos falsos, ofensivos o ilícitos a través de los formularios; y suplantar a otra persona.",
          "OTEN MOTORS puede limitar o bloquear el acceso a quien incumpla estos Términos, sin perjuicio de otras medidas legales.",
        ],
      },
      {
        title: "10. Enlaces y servicios de terceros",
        text: [
          "El sitio web contiene enlaces a servicios de terceros (por ejemplo, WhatsApp, Standvirtual y redes sociales). Dichos servicios son responsabilidad de sus titulares y se rigen por sus propios términos y políticas. OTEN MOTORS no controla ni responde de su contenido, disponibilidad o tratamiento de datos.",
        ],
      },
      {
        title: "11. Responsabilidad",
        text: [
          "OTEN MOTORS procura mantener el sitio web disponible, actualizado y sin errores, pero no garantiza que funcione sin interrupciones, fallos técnicos o imprecisiones puntuales.",
          "En la medida permitida por la ley, OTEN MOTORS no responde de los daños derivados del uso o de la imposibilidad de uso del sitio web, de decisiones tomadas solo a partir de la información publicada sin confirmación previa, de herramientas de cálculo o sugerencia (como el simulador de cuota o el asistente “¿Qué coche es para usted?”), ni de servicios de terceros.",
          "Esta limitación no se aplica a daños causados con dolo o culpa grave, a daños a la vida, la integridad física o la salud, ni a los derechos legales de los consumidores, en particular la garantía legal de conformidad.",
        ],
      },
      {
        title: "12. Reclamaciones y resolución de litigios",
        text: [
          "El usuario puede presentar una reclamación en el Libro de Reclamaciones (Livro de Reclamações), disponible en el establecimiento y en formato electrónico en www.livroreclamacoes.pt.",
          "En caso de litigio de consumo, el consumidor puede recurrir a la siguiente entidad de Resolución Alternativa de Litigios: {adr} ({adrUrl}). Más información en el Portal del Consumidor (www.consumidor.gov.pt).",
        ],
      },
      {
        title: "13. Ley aplicable y jurisdicción",
        text: [
          "Estos Términos se rigen por la ley portuguesa. Son competentes para resolver los litigios los tribunales portugueses, conforme a las reglas generales de la ley, sin perjuicio de las normas imperativas de competencia que protegen a los consumidores.",
        ],
      },
      {
        title: "14. Modificaciones",
        text: [
          "OTEN MOTORS puede modificar estos Términos en cualquier momento. La versión vigente es la publicada en esta página, con la fecha de la última actualización. En caso de discrepancia entre versiones en distintos idiomas, prevalece la versión en portugués.",
        ],
      },
    ],
  },
  fr: {
    title: "Conditions générales",
    updated: "Dernière mise à jour : novembre 2026",
    sections: [
      {
        title: "1. Identification",
        text: [
          "Le site {site} est la propriété et relève de la responsabilité de {company}, {legalForm}, dont le siège social est situé {office}, immatriculée auprès de la {registry} sous le numéro unique d'immatriculation et d'identification fiscale {nipc}, au capital social de {capital} (ci-après « OTEN MOTORS »).",
          "Contacts : {email} · {phone}. OTEN MOTORS est le nom commercial sous lequel la société exerce son activité de commerce de véhicules automobiles.",
        ],
      },
      {
        title: "2. Objet et acceptation",
        text: [
          "Les présentes Conditions régissent l'accès au site et son utilisation. En l'utilisant, l'utilisateur déclare les avoir lues et les accepter. En cas de désaccord, il doit s'abstenir de l'utiliser.",
          "Rien dans ces Conditions ne limite les droits que la loi reconnaît aux consommateurs et auxquels il ne peut être dérogé par accord.",
        ],
      },
      {
        title: "3. Informations sur les véhicules",
        text: [
          "Les informations publiées (caractéristiques, équipements, kilométrage, photos, consommations et autres données) sont fournies avec rigueur et de bonne foi, sur la base des documents et de l'inspection du véhicule, et ont une valeur informative.",
          "Les données techniques d'usine (puissance, consommations, émissions, dimensions) sont celles indiquées par le constructeur pour la version et peuvent varier selon l'usage, l'état et les conditions de conduite. Les photos sont celles du véhicule lui-même, mais les couleurs et détails peuvent varier selon l'écran.",
          "Les informations du site ne constituent pas, à elles seules, une offre contractuelle. Les caractéristiques définitives du véhicule, le prix et les conditions de vente sont ceux figurant au contrat ou à la facture, qui prévalent. En cas d'erreur manifeste (par exemple, une faute de frappe dans le prix), OTEN MOTORS en informera l'intéressé avant tout achat, celui-ci pouvant renoncer sans frais.",
          "L'utilisateur peut et doit confirmer toutes les informations avec nous et voir le véhicule avant de se décider.",
        ],
      },
      {
        title: "4. Prix, disponibilité et réservations",
        text: [
          "Les prix sont indiqués en euros, taxes applicables comprises. Les éventuels frais supplémentaires (par exemple, immatriculation au nom de l'acheteur, transport ou livraison à domicile) sont toujours communiqués avant l'achat.",
          "Les véhicules sont proposés sous réserve de vente préalable : la mention « disponible » ne garantit pas la disponibilité au moment du contact. Un véhicule n'est réservé qu'après confirmation écrite d'OTEN MOTORS et aux conditions qui y sont convenues.",
          "OTEN MOTORS peut modifier les prix et retirer des véhicules du site à tout moment, sans préjudice des transactions déjà convenues par écrit.",
        ],
      },
      {
        title: "5. Garantie",
        text: [
          "Les ventes aux consommateurs bénéficient de la garantie légale de conformité prévue par le décret-loi portugais n° 84/2021 du 18 octobre, dont le vendeur est responsable. Pour les biens d'occasion, la durée peut être réduite par accord écrit jusqu'à un minimum de 18 mois, selon ce qui figure au contrat de vente. Cette garantie légale ne peut être exclue ni limitée au-delà de ce que la loi permet.",
          "Toute garantie complémentaire ou commerciale (par exemple, garantie mécanique ou extension de garantie) mentionnée sur le site ou au contrat est fournie par une entreprise partenaire, {warrantyPartner}, seul garant de cette garantie commerciale, selon les conditions, couvertures, exclusions et procédures définies dans le certificat ou contrat de garantie remis au client.",
          "OTEN MOTORS n'est ni partie ni garant de cette garantie commerciale, ne répond pas des décisions de l'entreprise partenaire quant à son application et se borne à mettre à disposition les informations correspondantes, sans préjudice de la garantie légale susmentionnée.",
          "Les durées et couvertures indiquées sur les pages des véhicules sont purement informatives ; celles du contrat de vente et du certificat de garantie prévalent.",
        ],
      },
      {
        title: "6. Financement et crédit",
        text: [
          "OTEN MOTORS n'accorde pas de crédit, n'est pas intermédiaire en crédit (pas même à titre accessoire), n'a conclu aucun accord avec des organismes de financement, ne perçoit aucune commission de crédit et n'analyse, ne propose, n'approuve ni ne transmet aucune demande de financement.",
          "Le simulateur de mensualité présent sur les pages des véhicules est un outil de calcul réservé à l'usage personnel de l'utilisateur : les résultats dépendent uniquement des valeurs qu'il saisit, sont indicatifs et ne constituent ni une proposition, ni une offre, ni une recommandation, ni une publicité de crédit.",
          "Tout crédit destiné à l'achat d'un véhicule est conclu directement entre le client et un établissement agréé par la Banque du Portugal, sous la seule responsabilité de cet établissement et du client. OTEN MOTORS n'est pas partie à ce contrat.",
        ],
      },
      {
        title: "7. Reprises et offres d'achat",
        text: [
          "Les estimations et offres de reprise ou d'achat de véhicules faites à distance (par exemple, par WhatsApp, sur la base de photos) sont indicatives et sans engagement. Elles restent toujours subordonnées à l'inspection du véhicule sur place et à la vérification de ses documents, de son historique et de l'absence de gages ou de charges, et ne deviennent contraignantes qu'avec un accord écrit.",
        ],
      },
      {
        title: "8. Propriété intellectuelle",
        text: [
          "L'ensemble du contenu du site, y compris photos, textes, descriptions, logos, design, code, organisation et base de données des véhicules, appartient à OTEN MOTORS ou est utilisé avec autorisation, et est protégé par le droit portugais d'auteur et de la propriété industrielle ainsi que par le régime de protection des bases de données (décret-loi n° 122/2000).",
          "Sans l'autorisation écrite préalable d'OTEN MOTORS, il est interdit de : copier, reproduire, publier ou réutiliser photos et textes, notamment dans des annonces d'autres véhicules ou sur d'autres sites ; extraire des contenus de manière automatisée (scraping, robots ou similaires) ; intégrer le site ou des parties de celui-ci dans d'autres sites (framing) ; et utiliser la marque ou le logo OTEN MOTORS.",
          "Les marques, modèles et logos des constructeurs automobiles appartiennent à leurs titulaires respectifs et ne sont cités que pour identifier les véhicules, sans que cela implique une quelconque relation avec ces constructeurs.",
          "La violation de ces droits peut engager la responsabilité civile et pénale de son auteur, conformément à la loi.",
        ],
      },
      {
        title: "9. Utilisation du site",
        text: [
          "L'utilisateur s'engage à utiliser le site de manière licite et de bonne foi. Il est notamment interdit : d'introduire des virus ou du code malveillant ; de tenter d'accéder sans autorisation à des systèmes ou à des données ; de surcharger le site ; d'envoyer des contenus faux, offensants ou illicites via les formulaires ; et d'usurper l'identité d'une autre personne.",
          "OTEN MOTORS peut restreindre ou bloquer l'accès de toute personne qui enfreint ces Conditions, sans préjudice d'autres mesures légales.",
        ],
      },
      {
        title: "10. Liens et services tiers",
        text: [
          "Le site contient des liens vers des services tiers (par exemple, WhatsApp, Standvirtual et réseaux sociaux). Ces services relèvent de la responsabilité de leurs titulaires et sont régis par leurs propres conditions et politiques. OTEN MOTORS ne contrôle pas et ne répond pas de leur contenu, de leur disponibilité ni du traitement des données qu'ils effectuent.",
        ],
      },
      {
        title: "11. Responsabilité",
        text: [
          "OTEN MOTORS s'efforce de maintenir le site disponible, à jour et sans erreurs, mais ne garantit pas qu'il fonctionne sans interruptions, défaillances techniques ou imprécisions ponctuelles.",
          "Dans la mesure permise par la loi, OTEN MOTORS ne répond pas des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le site, de décisions prises uniquement sur la base des informations publiées sans confirmation préalable, des outils de calcul ou de suggestion (comme le simulateur de mensualité ou l'assistant « Quelle voiture vous convient ? »), ni des services de tiers.",
          "Cette limitation ne s'applique pas aux dommages causés par dol ou faute lourde, aux atteintes à la vie, à l'intégrité physique ou à la santé, ni aux droits légaux des consommateurs, notamment la garantie légale de conformité.",
        ],
      },
      {
        title: "12. Réclamations et règlement des litiges",
        text: [
          "L'utilisateur peut déposer une réclamation dans le Livre de réclamations (Livro de Reclamações), disponible dans l'établissement et en ligne sur www.livroreclamacoes.pt.",
          "En cas de litige de consommation, le consommateur peut recourir à l'organisme de règlement extrajudiciaire des litiges suivant : {adr} ({adrUrl}). Plus d'informations sur le Portail du consommateur (www.consumidor.gov.pt).",
        ],
      },
      {
        title: "13. Droit applicable et juridiction",
        text: [
          "Les présentes Conditions sont régies par le droit portugais. Les tribunaux portugais sont compétents pour régler les litiges, selon les règles générales de la loi, sans préjudice des règles impératives de compétence protégeant les consommateurs.",
        ],
      },
      {
        title: "14. Modifications",
        text: [
          "OTEN MOTORS peut modifier ces Conditions à tout moment. La version en vigueur est celle publiée sur cette page, avec la date de la dernière mise à jour. En cas de divergence entre les versions linguistiques, la version portugaise prévaut.",
        ],
      },
    ],
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    updated: "Letzte Aktualisierung: November 2026",
    sections: [
      {
        title: "1. Anbieter",
        text: [
          "Die Website {site} ist Eigentum von und wird verantwortet durch {company}, {legalForm}, mit Sitz in {office}, eingetragen bei der {registry} unter der einheitlichen Register- und Steuernummer {nipc}, Stammkapital {capital} (nachfolgend „OTEN MOTORS“).",
          "Kontakt: {email} · {phone}. OTEN MOTORS ist der Handelsname, unter dem die Gesellschaft ihren Kraftfahrzeughandel betreibt.",
        ],
      },
      {
        title: "2. Gegenstand und Annahme",
        text: [
          "Diese Bedingungen regeln den Zugang zur Website und ihre Nutzung. Mit der Nutzung erklärt der Nutzer, sie gelesen zu haben und zu akzeptieren. Wer nicht einverstanden ist, sollte die Website nicht nutzen.",
          "Nichts in diesen Bedingungen schränkt Rechte ein, die Verbrauchern gesetzlich zustehen und die nicht vertraglich ausgeschlossen werden können.",
        ],
      },
      {
        title: "3. Angaben zu den Fahrzeugen",
        text: [
          "Die veröffentlichten Angaben (Merkmale, Ausstattung, Kilometerstand, Fotos, Verbrauch und sonstige Daten) werden sorgfältig und nach bestem Wissen auf Grundlage der Fahrzeugunterlagen und der Prüfung des Fahrzeugs gemacht und dienen der Information.",
          "Technische Werksangaben (Leistung, Verbrauch, Emissionen, Abmessungen) entsprechen den Herstellerangaben für die Version und können je nach Nutzung, Zustand und Fahrbedingungen abweichen. Die Fotos zeigen das tatsächliche Fahrzeug, Farben und Details können jedoch je nach Bildschirm abweichen.",
          "Die Angaben auf der Website stellen für sich genommen kein verbindliches Angebot dar. Maßgeblich für die endgültigen Merkmale des Fahrzeugs, den Preis und die Verkaufsbedingungen sind Vertrag bzw. Rechnung. Bei offensichtlichen Fehlern (z. B. einem Tippfehler beim Preis) informiert OTEN MOTORS den Interessenten vor jedem Kauf; dieser kann dann kostenfrei Abstand nehmen.",
          "Der Nutzer kann und sollte alle Angaben bei uns bestätigen lassen und das Fahrzeug vor seiner Entscheidung besichtigen.",
        ],
      },
      {
        title: "4. Preise, Verfügbarkeit und Reservierungen",
        text: [
          "Die Preise sind in Euro angegeben und enthalten die anfallenden Steuern. Etwaige Zusatzkosten (z. B. Umschreibung, Transport oder Lieferung nach Hause) werden stets vor dem Kauf mitgeteilt.",
          "Zwischenverkauf vorbehalten: Der Hinweis „verfügbar“ garantiert keine Verfügbarkeit zum Zeitpunkt der Kontaktaufnahme. Ein Fahrzeug gilt erst nach schriftlicher Bestätigung durch OTEN MOTORS und zu den darin vereinbarten Bedingungen als reserviert.",
          "OTEN MOTORS kann Preise jederzeit ändern und Fahrzeuge von der Website entfernen; bereits schriftlich vereinbarte Geschäfte bleiben unberührt.",
        ],
      },
      {
        title: "5. Garantie",
        text: [
          "Bei Verkäufen an Verbraucher gilt die gesetzliche Gewährleistung (Vertragsmäßigkeit) nach dem portugiesischen Gesetzesdekret Nr. 84/2021 vom 18. Oktober, für die der Verkäufer haftet. Bei gebrauchten Waren kann die Frist durch schriftliche Vereinbarung auf mindestens 18 Monate verkürzt werden, wie im Kaufvertrag angegeben. Diese gesetzliche Gewährleistung kann nicht über das gesetzlich zulässige Maß hinaus ausgeschlossen oder beschränkt werden.",
          "Jede zusätzliche oder kommerzielle Garantie (z. B. Gebrauchtwagen- oder Anschlussgarantie), die auf der Website oder im Vertrag genannt wird, wird von einem Partnerunternehmen, {warrantyPartner}, gewährt. Dieses ist alleiniger Garantiegeber dieser kommerziellen Garantie, nach den im dem Kunden übergebenen Garantiezertifikat bzw. -vertrag festgelegten Bedingungen, Leistungen, Ausschlüssen und Verfahren.",
          "OTEN MOTORS ist weder Vertragspartei noch Garantiegeber dieser kommerziellen Garantie, haftet nicht für die Entscheidungen des Partnerunternehmens über ihre Anwendung und stellt lediglich die entsprechenden Informationen bereit; die oben genannte gesetzliche Gewährleistung bleibt unberührt.",
          "Die auf den Fahrzeugseiten genannten Fristen und Leistungen dienen nur der Information; maßgeblich sind Kaufvertrag und Garantiezertifikat.",
        ],
      },
      {
        title: "6. Finanzierung und Kredit",
        text: [
          "OTEN MOTORS vergibt keine Kredite, ist kein Kreditvermittler (auch nicht nebenberuflich), hat keine Vereinbarungen mit Finanzierungsinstituten, erhält keine Kreditprovisionen und prüft, unterbreitet, genehmigt oder leitet keine Finanzierungsanträge weiter.",
          "Der Ratenrechner auf den Fahrzeugseiten ist ein Rechenwerkzeug ausschließlich zur eigenen Verwendung durch den Nutzer: Die Ergebnisse hängen allein von den eingegebenen Werten ab, sind unverbindlich und stellen weder ein Kreditangebot noch eine Empfehlung oder Kreditwerbung dar.",
          "Ein Kredit zum Kauf eines Fahrzeugs wird direkt zwischen dem Kunden und einem von der Banco de Portugal zugelassenen Institut abgeschlossen, in alleiniger Verantwortung dieses Instituts und des Kunden. OTEN MOTORS ist nicht Partei dieses Vertrags.",
        ],
      },
      {
        title: "7. Inzahlungnahme und Ankaufsangebote",
        text: [
          "Bewertungen sowie Angebote zur Inzahlungnahme oder zum Ankauf von Fahrzeugen, die aus der Ferne erstellt werden (z. B. per WhatsApp anhand von Fotos), sind unverbindlich. Sie stehen stets unter dem Vorbehalt einer Besichtigung des Fahrzeugs vor Ort und der Prüfung von Unterlagen, Historie und Lastenfreiheit und werden erst durch schriftliche Vereinbarung verbindlich.",
        ],
      },
      {
        title: "8. Geistiges Eigentum",
        text: [
          "Sämtliche Inhalte der Website, einschließlich Fotos, Texte, Beschreibungen, Logos, Design, Code, Aufbau und Fahrzeugdatenbank, sind Eigentum von OTEN MOTORS oder werden mit Erlaubnis verwendet und sind durch das portugiesische Urheber- und Gewerbeschutzrecht sowie den Datenbankschutz (Gesetzesdekret Nr. 122/2000) geschützt.",
          "Ohne vorherige schriftliche Zustimmung von OTEN MOTORS ist es untersagt: Fotos und Texte zu kopieren, zu vervielfältigen, zu veröffentlichen oder wiederzuverwenden, insbesondere in Anzeigen für andere Fahrzeuge oder auf anderen Websites; Inhalte automatisiert auszulesen (Scraping, Bots o. Ä.); die Website ganz oder teilweise in andere Seiten einzubinden (Framing); sowie Name oder Logo OTEN MOTORS zu verwenden.",
          "Marken, Modellbezeichnungen und Logos der Fahrzeughersteller gehören ihren jeweiligen Inhabern und werden nur zur Bezeichnung der Fahrzeuge genannt; eine Verbindung zu diesen Herstellern besteht dadurch nicht.",
          "Verstöße gegen diese Rechte können zivil- und strafrechtlich verfolgt werden.",
        ],
      },
      {
        title: "9. Nutzung der Website",
        text: [
          "Der Nutzer verpflichtet sich, die Website rechtmäßig und nach Treu und Glauben zu nutzen. Untersagt ist insbesondere: Viren oder Schadcode einzuschleusen; unbefugt auf Systeme oder Daten zuzugreifen; die Website zu überlasten; über die Formulare falsche, beleidigende oder rechtswidrige Inhalte zu senden; und sich als eine andere Person auszugeben.",
          "OTEN MOTORS kann Personen, die gegen diese Bedingungen verstoßen, den Zugang beschränken oder sperren; weitere rechtliche Schritte bleiben vorbehalten.",
        ],
      },
      {
        title: "10. Links und Dienste Dritter",
        text: [
          "Die Website enthält Links zu Diensten Dritter (z. B. WhatsApp, Standvirtual und soziale Netzwerke). Diese Dienste liegen in der Verantwortung ihrer Betreiber und unterliegen deren eigenen Bedingungen und Richtlinien. OTEN MOTORS hat keinen Einfluss auf deren Inhalte, Verfügbarkeit oder Datenverarbeitung und übernimmt dafür keine Haftung.",
        ],
      },
      {
        title: "11. Haftung",
        text: [
          "OTEN MOTORS bemüht sich, die Website verfügbar, aktuell und fehlerfrei zu halten, garantiert aber keinen Betrieb ohne Unterbrechungen, technische Störungen oder vereinzelte Ungenauigkeiten.",
          "Soweit gesetzlich zulässig, haftet OTEN MOTORS nicht für Schäden aus der Nutzung oder Nichtnutzbarkeit der Website, aus Entscheidungen, die allein aufgrund der veröffentlichten Angaben ohne vorherige Bestätigung getroffen wurden, aus Rechen- oder Empfehlungswerkzeugen (wie dem Ratenrechner oder dem Assistenten „Welches Auto passt zu Ihnen?“) oder aus Diensten Dritter.",
          "Diese Beschränkung gilt nicht für Schäden aus Vorsatz oder grober Fahrlässigkeit, für Schäden an Leben, Körper oder Gesundheit sowie für gesetzliche Verbraucherrechte, insbesondere die gesetzliche Gewährleistung.",
        ],
      },
      {
        title: "12. Beschwerden und Streitbeilegung",
        text: [
          "Beschwerden können im Beschwerdebuch (Livro de Reclamações) eingetragen werden, das in der Betriebsstätte und online unter www.livroreclamacoes.pt zur Verfügung steht.",
          "Bei Verbraucherstreitigkeiten kann sich der Verbraucher an folgende Stelle zur alternativen Streitbeilegung wenden: {adr} ({adrUrl}). Weitere Informationen im Verbraucherportal (www.consumidor.gov.pt).",
        ],
      },
      {
        title: "13. Anwendbares Recht und Gerichtsstand",
        text: [
          "Diese Bedingungen unterliegen portugiesischem Recht. Zuständig für Streitigkeiten sind die portugiesischen Gerichte nach den allgemeinen gesetzlichen Regeln, unbeschadet zwingender Zuständigkeitsvorschriften zum Schutz von Verbrauchern.",
        ],
      },
      {
        title: "14. Änderungen",
        text: [
          "OTEN MOTORS kann diese Bedingungen jederzeit ändern. Gültig ist die auf dieser Seite veröffentlichte Fassung mit dem Datum der letzten Aktualisierung. Bei Abweichungen zwischen den Sprachfassungen ist die portugiesische Fassung maßgeblich.",
        ],
      },
    ],
  },
}
