/**
 * Contenido estático del sitio
 * Textos, mensajes, FAQs y otra información
 */

export interface NavContent {
  home: string
  portfolio: string
  about: string
  shop: string
  aftercare: string
  contact: string
  booking: string
}

export interface HeroContent {
  title: string
  subtitle: string
  cta: string
  ctaSecondary: string
}

export interface AboutContent {
  title: string
  intro: string
  story: string
  specialties: string
}

export interface PortfolioContent {
  title: string
  description: string
  viewAll: string
  filter: string
}

export interface AftercareSection {
  title: string
  content: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface AftercareContent {
  title: string
  description: string
  sections: AftercareSection[]
  faq: FAQItem[]
  warnings: string[]
}

export interface ContactMethod {
  label: string
  value: string
  icon: string
}

export interface ContactFormLabels {
  name: string
  email: string
  phone: string
  message: string
  submit: string
  sending: string
  success: string
  error: string
}

export interface ContactContent {
  title: string
  description: string
  form: ContactFormLabels
  methods: ContactMethod[]
}

export interface FooterContent {
  copyright: string
  quickLinks: string
  followUs: string
  legalNotice: string
  privacy: string
}

export interface MessagesContent {
  loading: string
  error: string
  success: string
  goBack: string
  noResults: string
  comingSoon: string
}

export interface SiteContent {
  nav: NavContent
  hero: HeroContent
  about: AboutContent
  portfolio: PortfolioContent
  aftercare: AftercareContent
  contact: ContactContent
  footer: FooterContent
  messages: MessagesContent
}

export const siteContent: SiteContent = {
  // Navigation
  nav: {
    home: 'Home',
    portfolio: 'Portfolio',
    about: 'About',
    shop: 'Shop',
    aftercare: 'Aftercare',
    contact: 'Contact',
    booking: 'Booking',
  },

  // Hero Section
  hero: {
    title: 'Tatuador Profesional',
    subtitle: 'Diseños únicos y personalizados',
    cta: 'Reservar Cita',
    ctaSecondary: 'Ver Portafolio',
  },

  // About Section
  about: {
    title: 'Acerca de Mí',
    intro: 'Bienvenido a mi estudio de tatuajes',
    story: 'Especialista en diseños únicos con más de 10 años de experiencia. Cada tatuaje es una obra de arte personalizada.',
    specialties: 'Especialidades',
  },

  // Portfolio Section
  portfolio: {
    title: 'Portafolio',
    description: 'Explora mi galería de trabajos',
    viewAll: 'Ver Todo',
    filter: 'Filtrar por Estilo',
  },

  // Aftercare
  aftercare: {
    title: 'Cuidados Post-Tatuaje',
    description: 'Guía completa de cuidados para tu nuevo tatuaje',

    sections: [
      {
        title: 'Primeras 24 Horas',
        content: 'Mantén la venda durante 2-3 horas. Luego lava suavemente con agua tibia y jabón antibacterial. Seca con palmadas suaves.',
      },
      {
        title: 'Semana 1',
        content: 'Lava 2-3 veces al día. Aplica crema cicatrizante recomendada. Evita agua caliente, piscinas y mar. No rasques ni frottes.',
      },
      {
        title: 'Semana 2-3',
        content: 'Continúa la higiene regular. La descamación es normal. Mantén hidratado. Evita exposición directa al sol.',
      },
      {
        title: 'Mes Completo',
        content: 'La cicatrización externa está lista pero la interna continúa. Usa protector solar SPF 50+. Evita ejercicio intenso.',
      },
    ],

    faq: [
      {
        question: '¿Cuándo puedo mojar el tatuaje?',
        answer: 'Después de las primeras 2-3 horas puedes lavarlo suavemente. Evita remojarlo durante al menos 2 semanas.',
      },
      {
        question: '¿Puedo ir al gym?',
        answer: 'Se recomienda esperar al menos 3-4 semanas antes de ejercicio intenso. Los primeros días, solo caminatas ligeras.',
      },
      {
        question: '¿Qué crema debo usar?',
        answer: 'Usa crema cicatrizante antibacterial recomendada. Evita vaselina y aceites muy grasosos.',
      },
      {
        question: '¿Hay complicaciones normales?',
        answer: 'Hinchazón, enrojecimiento leve y comezón son normales. Si hay pus o inflamación excesiva, contacta a un médico.',
      },
      {
        question: '¿Cuándo puedo tatuarme otra vez?',
        answer: 'Espera al menos 4-6 semanas antes de otro tatuaje en área diferente. En la misma área, mínimo 2-3 meses.',
      },
      {
        question: '¿El tatuaje duele durante los cuidados?',
        answer: 'Dolor leve a molestia durante lavado es normal. Si es dolor agudo, podría haber complicación.',
      },
    ],

    warnings: [
      'No rasques ni frotes el tatuaje',
      'Evita agua caliente y exposición solar directa',
      'No nades en piscinas, mar o lagos durante 2 semanas',
      'No practiques ejercicio intenso durante 1 semana',
      'Si ves signos de infección, consulta a un médico',
    ],
  },

  // Contact
  contact: {
    title: 'Contacto',
    description: 'Ponte en contacto para consultas, booking o preguntas.',
    form: {
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      submit: 'Enviar',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente!',
      error: 'Error al enviar mensaje. Intenta de nuevo.',
    },
    methods: [
      { label: 'Email', value: 'contact@sdelgado.com', icon: 'mail' },
      { label: 'WhatsApp', value: '+57 3243257550', icon: 'whatsapp' },
      { label: 'Instagram', value: '@sdelgado.tattoo', icon: 'instagram' },
      { label: 'Teléfono', value: '+57 3243257550', icon: 'phone' },
    ],
  },

  // Footer
  footer: {
    copyright: '© 2026 Sdelgado. Todos los derechos reservados.',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Sígueme',
    legalNotice: 'Aviso Legal',
    privacy: 'Privacidad',
  },

  // Common Messages
  messages: {
    loading: 'Cargando...',
    error: 'Algo salió mal. Intenta de nuevo.',
    success: 'Operación exitosa!',
    goBack: 'Volver atrás',
    noResults: 'No se encontraron resultados.',
    comingSoon: 'Próximamente...',
  },
}

export default siteContent
