export interface Translations {
  [key: string]: {
    nav: {
      vehicles: string
      services: string
      contacts: string
    }
    hero: {
      title: string
      subtitle: string
      cta1: string
      cta2: string
    }
    mission: {
      title: string
      description: string
    }
    featured: {
      title: string
      viewDetails: string
      year: string
      km: string
      fuel: string
      transmission: string
      diesel: string
      gasoline: string
      electric: string
      hybrid: string
      automatic: string
      manual: string
      reserved: string 
      sold: string
    }
    about: {
      title: string
      description1: string
      description2: string
    }
    services: {
      title: string
      service1: string
      service1desc: string
      service2: string
      service2desc: string
      service3: string
      service3desc: string
    }
    contact: {
      title: string
      formTitle: string
      name: string
      email: string
      phone: string
      message: string
      send: string
      whatsapp: string
      call: string
      sendEmail: string
      contactButton: string
    }
    footer: {
      description: string
      links: string
      terms: string
      privacy: string
      cookies: string
      complaintsBook: string
      contacts: string
      social: string
      rights: string
    }
    vehicleDetail: {
      specifications: string
      equipment: string
      technicalData: string
      details: string
      registration: string
      fuelType: string
      motor: string
      category: string
      seats: string
      color: string
      doors: string
      origin: string
      weight: string
      engine: string
      power: string
      torque: string
      acceleration: string
      topSpeed: string
      consumption: string
      emissions: string
      dimensions: string
      length: string
      width: string
      height: string
      wheelbase: string
      trunkCapacity: string
      financing: string
      financingAvailable: string
      warranty: string
      ownerHistory: string
      serviceHistory: string
      backToVehicles: string
      contactUs: string
    }
  }
}

export const translations: Translations = {
  pt: {
    nav: {
      vehicles: "Veículos",
      services: "Serviços",
      contacts: "Contactos",
    },
    hero: {
      title: "NÓS AJUDAMOS A DAR O PRÓXIMO PASSO",
      subtitle: "Descubra a nossa seleção exclusiva de veículos, onde a qualidade e o prestígio se encontram",
      cta1: "Ver Veículos",
      cta2: "Fale Conosco",
    },
    mission: {
      title: "Nossa Missão",
      description:
        "Na OTEN MOTORS, o nosso compromisso vai muito além de uma simples venda — procuramos proporcionar uma experiência completa, transparente e totalmente personalizada na aquisição do seu veículo. Acreditamos que cada cliente é único, e é por isso que damos especial atenção às suas necessidades, expectativas e preferências. Selecionamos cuidadosamente cada viatura, garantindo elevados padrões de qualidade, desempenho e fiabilidade, para que cada escolha seja feita com total confiança. A nossa missão é clara: garantir não apenas a satisfação, mas também o agrado e a confiança de cada cliente, construindo relações duradouras baseadas em transparência, profissionalismo e compromisso.",
    },
    featured: {
      title: "Veículos em Destaque",
      viewDetails: "Ver Detalhes",
      year: "Ano",
      km: "Quilómetros",
      fuel: "Combustível",
      transmission: "Caixa",
      diesel: "Diesel",
      gasoline: "Gasolina",
      electric: "Elétrico",
      hybrid: "Híbrido",
      automatic: "Automática",
      manual: "Manual",
      reserved: "Reservado",
      sold: "Vendido",
    },
    about: {
      title: "Sobre Nós",
      description1:
        "A OTEN MOTORS posiciona-se como uma referência no mercado automóvel português, especializada na comercialização de veículos premium. Com uma equipa orientada para o detalhe, proporcionamos um acompanhamento próximo e personalizado em todas as etapas do processo.",
      description2:
        "Cada viatura é cuidadosamente selecionada e sujeita a uma rigorosa inspeção técnica, garantindo elevados padrões de qualidade e fiabilidade. Trabalhamos com marcas de excelência e disponibilizamos soluções de financiamento ajustadas, pensadas para responder às necessidades de cada cliente.",
    },
    services: {
      title: "Porquê Escolher-nos",
      service1: "Venda de Veículos Premium",
      service1desc: "Seleção exclusiva de automóveis de luxo das melhores marcas, cuidadosamente inspecionados",
      service2: "Financiamento Facilitado",
      service2desc: "Soluções de crédito personalizadas com as melhores taxas do mercado",
      service3: "Garantia Total",
      service3desc: "Todos os veículos com inspeção completa e garantia estendida para sua tranquilidade",
    },
    contact: {
      title: "Contactos",
      formTitle: "Envie-nos uma Mensagem",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      message: "Mensagem",
      send: "Enviar Mensagem",
      whatsapp: "WhatsApp",
      call: "Ligar",
      sendEmail: "Enviar Email",
      contactButton: "Contactar",
    },
    footer: {
      description: "Excelência na venda de veículos com foco no cliente e na confiança.",
      links: "Links",
      terms: "Termos e Condições",
      privacy: "Política de Privacidade",
      cookies: "Política de Cookies",
      complaintsBook: "Livro de Reclamações",
      contacts: "Contactos",
      social: "Redes Sociais",
      rights: "© 2026 OTEN MOTORS. Todos os direitos reservados.",
    },
    vehicleDetail: {
      specifications: "Especificações",
      equipment: "Equipamento",
      technicalData: "Dados Técnicos",
      details: "Detalhes",
      registration: "Registo",
      fuelType: "Combustível",
      motor: "Motor",
      category: "Categoria",
      seats: "Lugares",
      color: "Cor",
      doors: "Portas",
      origin: "Origem",
      weight: "Peso",
      engine: "Motor",
      power: "Potência",
      torque: "Binário",
      acceleration: "Aceleração 0-100 km/h",
      topSpeed: "Velocidade Máxima",
      consumption: "Consumo Médio",
      emissions: "Emissões CO₂",
      dimensions: "Dimensões",
      length: "Comprimento",
      width: "Largura",
      height: "Altura",
      wheelbase: "Distância entre eixos",
      trunkCapacity: "Capacidade da Bagageira",
      financing: "Financiamento",
      financingAvailable: "Financiamento disponível",
      warranty: "Garantia",
      ownerHistory: "Histórico de proprietários",
      serviceHistory: "Histórico de manutenção",
      backToVehicles: "Voltar aos Veículos",
      contactUs: "Contacte-nos",
    },
  },
  en: {
    nav: {
      vehicles: "Vehicles",
      services: "Services",
      contacts: "Contacts",
    },
    hero: {
      title: "WE HELP YOU TAKE THE NEXT STEP",
      subtitle: "Discover our exclusive selection of vehicles, where quality and prestige meet",
      cta1: "View Vehicles",
      cta2: "Contact Us",
    },
    mission: {
      title: "Our Mission",
      description:
        "At OTEN MOTORS, our commitment goes far beyond a simple sale — we aim to provide a complete, transparent, and fully personalized experience when acquiring your vehicle. We believe every client is unique, which is why we pay close attention to their needs, expectations, and preferences. Each vehicle is carefully selected to ensure high standards of quality, performance, and reliability, so every decision is made with total confidence. Our mission is clear: to ensure not only satisfaction, but also the trust and appreciation of each client, building long-lasting relationships based on transparency, professionalism, and commitment.",
    },
    featured: {
      title: "Featured Vehicles",
      viewDetails: "View Details",
      year: "Year",
      km: "Kilometers",
      fuel: "Fuel",
      transmission: "Transmission",
      diesel: "Diesel",
      gasoline: "Gasoline",
      electric: "Electric",
      hybrid: "Hybrid",
      automatic: "Automatic",
      manual: "Manual",
      reserved: "Reserved",
      sold: "Sold",
    },
    about: {
      title: "About Us",
      description1:
        "OTEN MOTORS positions itself as a reference in the Portuguese automotive market, specializing in the sale of premium vehicles. With a detail-oriented team, we provide close and personalized support throughout every stage of the process.",
      description2:
        "Each vehicle is carefully selected and subjected to a rigorous technical inspection, ensuring high standards of quality and reliability. We work with leading brands and offer tailored financing solutions designed to meet each client's needs.",
    },
        services: {
      title: "Why Choose Us",
      service1: "Premium Vehicle Sales",
      service1desc: "Exclusive selection of luxury cars from the best brands, carefully inspected",
      service2: "Easy Financing",
      service2desc: "Personalized credit solutions with the best market rates",
      service3: "Full Warranty",
      service3desc: "All vehicles with complete inspection and extended warranty for your peace of mind",
    },
    contact: {
      title: "Contact",
      formTitle: "Send us a Message",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      whatsapp: "WhatsApp",
      call: "Call",
      sendEmail: "Send Email",
      contactButton: "Contact",
    },
    footer: {
      description: "Excellence in vehicle sales with a focus on customer satisfaction and trust.",
      links: "Links",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      complaintsBook: "Complaints Book",
      contacts: "Contacts",
      social: "Social Media",
      rights: "© 2026 OTEN MOTORS. All rights reserved.",
    },
    vehicleDetail: {
      specifications: "Specifications",
      equipment: "Equipment",
      technicalData: "Technical Data",
      details: "Details",
      registration: "Registration",
      fuelType: "Fuel Type",
      motor: "Engine",
      category: "Category",
      seats: "Seats",
      color: "Color",
      doors: "Doors",
      origin: "Origin",
      weight: "Weight",
      engine: "Engine",
      power: "Power",
      torque: "Torque",
      acceleration: "Acceleration 0-100 km/h",
      topSpeed: "Top Speed",
      consumption: "Average Consumption",
      emissions: "CO₂ Emissions",
      dimensions: "Dimensions",
      length: "Length",
      width: "Width",
      height: "Height",
      wheelbase: "Wheelbase",
      trunkCapacity: "Trunk Capacity",
      financing: "Financing",
      financingAvailable: "Financing available",
      warranty: "Warranty",
      ownerHistory: "Owner history",
      serviceHistory: "Service history",
      backToVehicles: "Back to Vehicles",
      contactUs: "Contact Us",
    },
  },
  es: {
    nav: {
      vehicles: "Vehículos",
      services: "Servicios",
      contacts: "Contactos",
    },
    hero: {
      title: "TE AYUDAMOS A DAR EL SIGUIENTE PASO",
      subtitle: "Descubra nuestra selección exclusiva de vehículos, donde la calidad y el prestigio se encuentran",
      cta1: "Ver Vehículos",
      cta2: "Contáctenos",
    },
    mission: {
      title: "Nuestra Misión",
      description:
        "En OTEN MOTORS, nuestro compromiso va mucho más allá de una simple venta — buscamos ofrecer una experiencia completa, transparente y totalmente personalizada en la adquisición de su vehículo. Creemos que cada cliente es único, por eso prestamos especial atención a sus necesidades, expectativas y preferencias. Seleccionamos cuidadosamente cada vehículo, garantizando altos estándares de calidad, rendimiento y fiabilidad, para que cada decisión se tome con total confianza. Nuestra misión es clara: garantizar no solo la satisfacción, sino también la confianza y el agrado de cada cliente, construyendo relaciones duraderas basadas en la transparencia, el profesionalismo y el compromiso.",
    },
    featured: {
      title: "Vehículos Destacados",
      viewDetails: "Ver Detalles",
      year: "Año",
      km: "Kilómetros",
      fuel: "Combustible",
      transmission: "Transmisión",
      diesel: "Diésel",
      gasoline: "Gasolina",
      electric: "Eléctrico",
      hybrid: "Híbrido",
      automatic: "Automática",
      manual: "Manual",
      reserved: "Reservado",
      sold: "Vendido",
    },
    about: {
      title: "Sobre Nosotros",
      description1:
        "OTEN MOTORS se posiciona como una referencia en el mercado automotriz portugués, especializada en la comercialización de vehículos premium. Con un equipo orientado al detalle, ofrecemos un acompañamiento cercano y personalizado en todas las etapas del proceso.",
      description2:
        "Cada vehículo es cuidadosamente seleccionado y sometido a una rigurosa inspección técnica, garantizando altos estándares de calidad y fiabilidad. Trabajamos con marcas de excelencia y ofrecemos soluciones de financiación adaptadas a las necesidades de cada cliente.",
    },
    services: {
      title: "Por Qué Elegirnos",
      service1: "Venta de Vehículos Premium",
      service1desc: "Selección exclusiva de automóviles de lujo de las mejores marcas, cuidadosamente inspeccionados",
      service2: "Financiamiento Fácil",
      service2desc: "Soluciones de crédito personalizadas con las mejores tasas del mercado",
      service3: "Garantía Total",
      service3desc: "Todos los vehículos con inspección completa y garantía extendida para su tranquilidad",
    },
    contact: {
      title: "Contacto",
      formTitle: "Envíanos un Mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar Mensaje",
      whatsapp: "WhatsApp",
      call: "Llamar",
      sendEmail: "Enviar Correo",
      contactButton: "Contactar",
    },
    footer: {
      description: "Excelencia en la venta de vehículos con enfoque en el cliente y la confianza.",
      links: "Enlaces",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      cookies: "Política de Cookies",
      complaintsBook: "Libro de Reclamaciones",
      contacts: "Contactos",
      social: "Redes Sociales",
      rights: "© 2026 OTEN MOTORS. Todos los derechos reservados.",
    },
    vehicleDetail: {
      specifications: "Especificaciones",
      equipment: "Equipamiento",
      technicalData: "Datos Técnicos",
      details: "Detalles",
      registration: "Registro",
      fuelType: "Combustible",
      motor: "Motor",
      category: "Categoría",
      seats: "Asientos",
      color: "Color",
      doors: "Puertas",
      origin: "Origen",
      weight: "Peso",
      engine: "Motor",
      power: "Potencia",
      torque: "Par motor",
      acceleration: "Aceleración 0-100 km/h",
      topSpeed: "Velocidad Máxima",
      consumption: "Consumo Medio",
      emissions: "Emisiones CO₂",
      dimensions: "Dimensiones",
      length: "Longitud",
      width: "Anchura",
      height: "Altura",
      wheelbase: "Distancia entre ejes",
      trunkCapacity: "Capacidad del Maletero",
      financing: "Financiamiento",
      financingAvailable: "Financiamiento disponible",
      warranty: "Garantía",
      ownerHistory: "Historial de propietarios",
      serviceHistory: "Historial de mantenimiento",
      backToVehicles: "Volver a Vehículos",
      contactUs: "Contáctenos",
    },
  },
  fr: {
    nav: {
      vehicles: "Véhicules",
      services: "Services",
      contacts: "Contact",
    },
    hero: {
      title: "NOUS VOUS AIDONS À FRANCHIR LA PROCHAINE ÉTAPE",
      subtitle: "Découvrez notre sélection exclusive de véhicules, où qualité et prestige se rencontrent",
      cta1: "Voir les Véhicules",
      cta2: "Nous Contacter",
    },
    mission: {
      title: "Notre Mission",
      description:
      "Chez OTEN MOTORS, notre engagement va bien au-delà d'une simple vente — nous cherchons à offrir une expérience complète, transparente et entièrement personnalisée lors de l'acquisition de votre véhicule. Nous croyons que chaque client est unique, c'est pourquoi nous accordons une attention particulière à ses besoins, attentes et préférences. Chaque véhicule est soigneusement sélectionné afin de garantir des standards élevés de qualité, de performance et de fiabilité, pour que chaque décision soit prise en toute confiance. Notre mission est claire : garantir non seulement la satisfaction, mais aussi la confiance et l'appréciation de chaque client, en construisant des relations durables basées sur la transparence, le professionnalisme et l'engagement.",
    },
    featured: {
      title: "Véhicules en Vedette",
      viewDetails: "Voir les Détails",
      year: "Année",
      km: "Kilomètres",
      fuel: "Carburant",
      transmission: "Transmission",
      diesel: "Diesel",
      gasoline: "Essence",
      electric: "Électrique",
      hybrid: "Hybride",
      automatic: "Automatique",
      manual: "Manuelle",
      reserved: "Réservé",
      sold: "Vendu",
    },
    about: {
      title: "À Propos",
      description1:
        "OTEN MOTORS se positionne comme une référence sur le marché automobile portugais, spécialisée dans la commercialisation de véhicules premium. Avec une équipe attentive aux détails, nous offrons un accompagnement proche et personnalisé à chaque étape du processus.",
      description2:
        "Chaque véhicule est soigneusement sélectionné et soumis à une inspection technique rigoureuse, garantissant des standards élevés de qualité et de fiabilité. Nous travaillons avec des marques de référence et proposons des solutions de financement adaptées aux besoins de chaque client.",
    },
    services: {
      title: "Pourquoi Nous Choisir",
      service1: "Vente de Véhicules Premium",
      service1desc: "Sélection exclusive de voitures de luxe des meilleures marques, soigneusement inspectées",
      service2: "Financement Facile",
      service2desc: "Solutions de crédit personnalisées avec les meilleurs taux du marché",
      service3: "Garantie Totale",
      service3desc: "Tous les véhicules avec inspection complète et garantie étendue pour votre tranquillité",
    },
    contact: {
      title: "Contact",
      formTitle: "Envoyez-nous un Message",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      send: "Envoyer le Message",
      whatsapp: "WhatsApp",
      call: "Appeler",
      sendEmail: "Envoyer un Email",
      contactButton: "Contacter",
    },
    footer: {
      description: "Excellence dans la vente de véhicules avec une approche centrée sur le client et la confiance.",
      links: "Liens",
      terms: "Conditions Générales",
      privacy: "Politique de Confidentialité",
      cookies: "Politique des Cookies",
      complaintsBook: "Livre de Réclamations",
      contacts: "Contact",
      social: "Réseaux Sociaux",
      rights: "© 2026 OTEN MOTORS. Tous droits réservés.",
    },
    vehicleDetail: {
      specifications: "Spécifications",
      equipment: "Équipement",
      technicalData: "Données Techniques",
      details: "Détails",
      registration: "Immatriculation",
      fuelType: "Type de Carburant",
      motor: "Moteur",
      category: "Catégorie",
      seats: "Places",
      color: "Couleur",
      doors: "Portes",
      origin: "Origine",
      weight: "Poids",
      engine: "Moteur",
      power: "Puissance",
      torque: "Couple",
      acceleration: "Accélération 0-100 km/h",
      topSpeed: "Vitesse Maximale",
      consumption: "Consommation Moyenne",
      emissions: "Émissions CO₂",
      dimensions: "Dimensions",
      length: "Longueur",
      width: "Largeur",
      height: "Hauteur",
      wheelbase: "Empattement",
      trunkCapacity: "Capacité du Coffre",
      financing: "Financement",
      financingAvailable: "Financement disponible",
      warranty: "Garantie",
      ownerHistory: "Historique des propriétaires",
      serviceHistory: "Historique d'entretien",
      backToVehicles: "Retour aux Véhicules",
      contactUs: "Contactez-nous",
    },
  },
  de: {
    nav: {
      vehicles: "Fahrzeuge",
      services: "Dienstleistungen",
      contacts: "Kontakt",
    },
    hero: {
      title: "WIR HELFEN IHNEN, DEN NÄCHSTEN SCHRITT ZU MACHEN",
      subtitle: "Entdecken Sie unsere exklusive Auswahl an Fahrzeugen, wo Qualität und Prestige aufeinandertreffen",
      cta1: "Fahrzeuge ansehen",
      cta2: "Kontaktieren Sie uns",
    },
    mission: {
      title: "Unsere Mission",
      description:
        "Bei OTEN MOTORS geht unser Engagement weit über einen einfachen Verkauf hinaus — wir möchten eine vollständige, transparente und individuell abgestimmte Erfahrung beim Fahrzeugkauf bieten. Wir glauben, dass jeder Kunde einzigartig ist, weshalb wir besonderen Wert auf seine Bedürfnisse, Erwartungen und Wünsche legen. Jedes Fahrzeug wird sorgfältig ausgewählt, um hohe Standards in Bezug auf Qualität, Leistung und Zuverlässigkeit zu gewährleisten, damit jede Entscheidung mit voller Sicherheit getroffen werden kann. Unsere Mission ist klar: nicht nur Zufriedenheit, sondern auch Vertrauen und Wertschätzung jedes Kunden zu gewährleisten und langfristige Beziehungen auf Basis von Transparenz, Professionalität und Engagement aufzubauen.",
    },
    featured: {
      title: "Ausgewählte Fahrzeuge",
      viewDetails: "Details ansehen",
      year: "Jahr",
      km: "Kilometer",
      fuel: "Kraftstoff",
      transmission: "Getriebe",
      diesel: "Diesel",
      gasoline: "Benzin",
      electric: "Elektrisch",
      hybrid: "Hybrid",
      automatic: "Automatik",
      manual: "Manuell",
      reserved: "Reserviert",
      sold: "Verkauft"
    },
    about: {
      title: "Über Uns",
      description1:
        "OTEN MOTORS positioniert sich als Referenz auf dem portugiesischen Automobilmarkt und ist auf den Verkauf von Premiumfahrzeugen spezialisiert. Mit einem detailorientierten Team bieten wir eine persönliche und enge Betreuung in allen Phasen des Prozesses.",
      description2:
        "Jedes Fahrzeug wird sorgfältig ausgewählt und einer strengen technischen Prüfung unterzogen, um höchste Qualitäts- und Zuverlässigkeitsstandards zu gewährleisten. Wir arbeiten mit führenden Marken und bieten maßgeschneiderte Finanzierungslösungen, die auf die Bedürfnisse jedes Kunden abgestimmt sind.",
    },
    services: {
      title: "Warum uns wählen",
      service1: "Verkauf von Premium-Fahrzeugen",
      service1desc: "Exklusive Auswahl an Luxusautos der besten Marken, sorgfältig geprüft",
      service2: "Einfache Finanzierung",
      service2desc: "Personalisierte Kreditlösungen zu den besten Marktkonditionen",
      service3: "Vollständige Garantie",
      service3desc: "Alle Fahrzeuge mit vollständiger Inspektion und erweiterter Garantie für Ihre Sicherheit",
    },
    contact: {
      title: "Kontakt",
      formTitle: "Senden Sie uns eine Nachricht",
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      send: "Nachricht senden",
      whatsapp: "WhatsApp",
      call: "Anrufen",
      sendEmail: "E-Mail senden",
      contactButton: "Kontaktieren",
    },
    footer: {
      description: "Exzellenz im Fahrzeugverkauf mit Fokus auf Kundenzufriedenheit und Vertrauen.",
      links: "Links",
      terms: "Allgemeine Geschäftsbedingungen",
      privacy: "Datenschutzrichtlinie",
      cookies: "Cookie-Richtlinie",
      complaintsBook: "Beschwerdebuch",
      contacts: "Kontakt",
      social: "Soziale Medien",
      rights: "© 2026 OTEN MOTORS. Alle Rechte vorbehalten.",
    },
    vehicleDetail: {
      specifications: "Spezifikationen",
      equipment: "Ausstattung",
      technicalData: "Technische Daten",
      details: "Details",
      registration: "Zulassung",
      fuelType: "Kraftstoffart",
      motor: "Motor",
      category: "Kategorie",
      seats: "Sitzplätze",
      color: "Farbe",
      doors: "Türen",
      origin: "Herkunft",
      weight: "Gewicht",
      engine: "Motor",
      power: "Leistung",
      torque: "Drehmoment",
      acceleration: "Beschleunigung 0-100 km/h",
      topSpeed: "Höchstgeschwindigkeit",
      consumption: "Durchschnittsverbrauch",
      emissions: "CO₂-Emissionen",
      dimensions: "Abmessungen",
      length: "Länge",
      width: "Breite",
      height: "Höhe",
      wheelbase: "Radstand",
      trunkCapacity: "Kofferraumvolumen",
      financing: "Finanzierung",
      financingAvailable: "Finanzierung verfügbar",
      warranty: "Garantie",
      ownerHistory: "Besitzerhistorie",
      serviceHistory: "Wartungshistorie",
      backToVehicles: "Zurück zu Fahrzeugen",
      contactUs: "Kontaktieren Sie uns",
    },
  },
}
