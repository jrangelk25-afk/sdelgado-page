/**
 * Información del tatuador
 * Actualiza estos datos según sea necesario
 */

export interface Tattooer {
  name: string
  nameShort: string
  title: string
  bio: string
  specialties: string[]
  image: string
  email: string
  phone: string
  instagram: string
  whatsapp: string
  location: string
  mapLocation?: {
    latitude: number
    longitude: number
    address: string
    city: string
    googleMapsUrl: string
  }
  languages: string[]
  consultationFee: number
  minTattooPrice: number
  bookingUrl: string
  about: {
    intro: string
    story: string
    philosophy: string
    experience: string
    clientsSatisfied: string
  }
}

export const tattooer: Tattooer = {
  name: 'Sebastián Delgado',
  nameShort: 'Sdelgado',
  title: 'Tatuador Profesional',
  bio: 'Especialista en diseños únicos y personalizados con más de 10 años de experiencia en el arte del tatuaje.',
  specialties: [
    'Blackwork',
    'Microrealismo',
    'Geometría',
    'Puntillismo',
    'Línea Fina',
  ],
  image: '/images/profile.jpg',
  email: 'johandelgado91@gmail.com',
  phone: '+57 3243257550',
  instagram: 'https://www.instagram.com/sdelgado.tattoo/',
  whatsapp: 'https://wa.me/573243257550',
  location: 'Bucaramanga - Colombia',
  mapLocation: {
    latitude: 7.1118361,
    longitude: -73.1133527,
    address: 'Holy Fellas Studio',
    city: 'Cúcuta, Colombia',
    googleMapsUrl: 'https://www.google.com/maps/place/Holy+Fellas+Studio/@7.1118414,-73.1159276,17z/data=!3m1!4b1!4m6!3m5!1s0x8e683f916c8c9e0f:0xfeaf201827b24e6a!8m2!3d7.1118361!4d-73.1133527',
  },
  languages: ['Español', 'Inglés'],

  // Rates and booking
  consultationFee: 50,
  minTattooPrice: 100,
  bookingUrl: 'https://calendly.com/sdelgado/booking',

  // About section content
  about: {
    intro: 'Mi camino en el mundo del tatuaje comenzó en 2018, aunque realmente empezó mucho antes, con una pasión que me ha acompañado toda la vida: el dibujo.',
    story: 'Desde siempre encontré en el arte una forma de expresar ideas, emociones e historias. Con el tiempo tuve la oportunidad de conocer a un tatuador que me abrió las puertas de este oficio y me enseñó las bases fundamentales: desde preparar una estación de trabajo hasta comprender el funcionamiento de cada herramienta.\n\nDecidido a convertir esta pasión en una profesión, complementé mi aprendizaje con cursos de iniciación, sombras y color, mientras dedicaba largas horas a practicar y perfeccionar mi técnica...',
    philosophy: 'Mis primeros clientes fueron personas cercanas que confiaron en mí cuando apenas comenzaba. Gracias a su apoyo y a innumerables horas de práctica, fui construyendo experiencia y desarrollando mi propio estilo artístico. Desde entonces, he continuado aprendiendo, compartiendo con otros artistas y perfeccionando cada detalle de mi proceso.',
    experience: '6+ años de experiencia',
    clientsSatisfied: '200+',
  },
}

export default tattooer
