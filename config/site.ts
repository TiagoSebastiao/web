/**
 * Configuração central do website.
 *
 * Tudo o que for contacto, redes sociais, links externos ou dados legais
 * da empresa muda AQUI, e o resto do site atualiza-se sozinho.
 */
export const siteConfig = {
  name: "OTEN MOTORS",
  url: "https://www.otenmotors.com",

  contact: {
    /** Formato internacional, sem espaços (usado em links tel: e no JSON-LD). */
    phone: "+351967339061",
    /** Como aparece escrito no site. */
    phoneDisplay: "+351 967 339 061",
    /** Número do WhatsApp, só dígitos, com indicativo. */
    whatsapp: "351967339061",
    email: "geral@otenmotors.com",
  },

  /** Stand da OTEN MOTORS no Standvirtual (todas as viaturas anunciadas). */
  standvirtualUrl: "https://otenmotors.standvirtual.com/inventory",

  social: {
    instagram: "https://www.instagram.com/otenmotors/",
    facebook: "https://www.facebook.com/otenmotors/",
    tiktok: "https://www.tiktok.com/@otenmotors",
    youtube: "https://www.youtube.com/@otenmotors",
  },

  /** Link oficial do Livro de Reclamações Eletrónico. */
  complaintsBookUrl: "https://www.livroreclamacoes.pt/Inicio/",

  /**
   * Dados legais da empresa — PREENCHER COM OS DADOS PÚBLICOS DA CERTIDÃO PERMANENTE.
   * Aparecem no rodapé e nas páginas legais (Termos, Privacidade, Cookies).
   * Obrigatórios por lei num website de empresa: DL 7/2004 (art. 10.º) e
   * Código das Sociedades Comerciais (art. 171.º). Campos vazios não aparecem no rodapé
   * e surgem como "[…]" nas páginas legais, para ser fácil ver o que falta.
   */
  legal: {
    /** Firma/denominação social, ex.: "OTEN MOTORS, Lda." */
    companyName: "Hugo Sebastião – Unipessoal, Lda.",
    /** Tipo de sociedade, ex.: "sociedade por quotas" */
    legalForm: "sociedade unipessoal por quotas",
    /** NIPC (= número de matrícula na Conservatória do Registo Comercial). */
    nipc: "519179161",
    /** Sede social (morada completa). */
    registeredOffice: "Rua 5 de Outubro, Lote 34, n.º 11, R/C Esq., Montalvo, 2250-221 Constância",
    /** Conservatória do Registo Comercial onde está matriculada, ex.: "Conservatória do Registo Comercial de Lisboa". */
    commercialRegistry: "Conservatória do Registo Comercial",
    /** Capital social, ex.: "5 000,00 €" (obrigatório para sociedades por quotas e anónimas). */
    shareCapital: "5 000,00 €",
    /**
     * Morada do stand/estabelecimento. A sede acima NÃO é a morada do stand: enquanto isto
     * estiver vazio, os textos legais não indicam morada de estabelecimento.
     */
    showroomAddress: "",
    /** Entidade de Resolução Alternativa de Litígios (nome e link). Lei 144/2015, art. 18.º. */
    adrEntityName: "CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo",
    adrEntityUrl: "https://www.cniacc.pt",
    /**
     * Empresa parceira que presta a garantia comercial das viaturas (não é a OTEN MOTORS).
     * Nome e link aparecem nos Termos e Condições.
     */
    warrantyPartnerName: "GTS – Garantia Automóvel, Lda.",
    warrantyPartnerUrl: "",
  },

  /**
   * Simulador de prestação (página de cada viatura). A taxa introduzida pelo utilizador
   * tem de estar entre minRate e maxRate. maxRate = taxa máxima legal (TAEG) para crédito
   * automóvel de usados fixada pelo Banco de Portugal — ATUALIZAR TODOS OS TRIMESTRES em
   * https://clientebancario.bportugal.pt/taxas-maximas-de-credito-aos-consumidores
   */
  creditSimulator: {
    minRate: 1,
    maxRate: 14.3,
    /** Trimestre a que se refere maxRate (aparece nas letras pequenas). */
    maxRatePeriod: { pt: "4.º trimestre de 2026", en: "Q4 2026", es: "4.º trimestre de 2026", fr: "4e trimestre 2026", de: "4. Quartal 2026" },
  },
} as const

/** Link para o WhatsApp, opcionalmente com uma mensagem pré-preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
