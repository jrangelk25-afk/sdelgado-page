/**
 * Datos del portafolio - Galería de tatuajes
 * Formato: id, title, image, style, date, description
 */

export interface PortfolioItem {
  id: number
  title: string
  image: string
  thumbnail: string
  style: string
  date: string
  description: string
  size: 'Pequeño' | 'Mediano' | 'Grande' | 'Extra Grande'
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Serpiente Geométrica',
    image: '/images/portfolio/1.jpg',
    thumbnail: '/images/portfolio/1-thumb.jpg',
    style: 'Geometría',
    date: '2026-01-15',
    description: 'Diseño geométrico con líneas precisas y simetría perfecta.',
    size: 'Grande',
  },
  {
    id: 2,
    title: 'Rosa Realista',
    image: '/images/portfolio/2.jpg',
    thumbnail: '/images/portfolio/2-thumb.jpg',
    style: 'Microrealismo',
    date: '2026-01-10',
    description: 'Rosa en blanco y negro con detalles fotorrealistas.',
    size: 'Mediano',
  },
  {
    id: 3,
    title: 'Águila Tradicional',
    image: '/images/portfolio/3.jpg',
    thumbnail: '/images/portfolio/3-thumb.jpg',
    style: 'Blackwork',
    date: '2026-01-05',
    description: 'Águila con estilo blackwork clásico.',
    size: 'Grande',
  },
  {
    id: 4,
    title: 'Luna Minimalista',
    image: '/images/portfolio/4.jpg',
    thumbnail: '/images/portfolio/4-thumb.jpg',
    style: 'Línea Fina',
    date: '2026-12-28',
    description: 'Diseño de línea fina con trazo limpio y delicado.',
    size: 'Pequeño',
  },
  {
    id: 5,
    title: 'Dragón Puntillismo',
    image: '/images/portfolio/5.jpg',
    thumbnail: '/images/portfolio/5-thumb.jpg',
    style: 'Puntillismo',
    date: '2023-12-20',
    description: 'Dragón realizado completamente con técnica de puntillismo.',
    size: 'Extra Grande',
  },
  {
    id: 6,
    title: 'Brújula Blackwork',
    image: '/images/portfolio/6.jpg',
    thumbnail: '/images/portfolio/6-thumb.jpg',
    style: 'Blackwork',
    date: '2023-12-15',
    description: 'Brújula en blackwork con patrones complejos.',
    size: 'Mediano',
  },
  {
    id: 7,
    title: 'Mandala Geométrico',
    image: '/images/portfolio/7.jpg',
    thumbnail: '/images/portfolio/7-thumb.jpg',
    style: 'Geometría',
    date: '2023-12-10',
    description: 'Mandala intrincado con geometría sagrada.',
    size: 'Grande',
  },
  {
    id: 8,
    title: 'Tinta Puntillismo',
    image: '/images/portfolio/8.jpg',
    thumbnail: '/images/portfolio/8-thumb.jpg',
    style: 'Puntillismo',
    date: '2023-12-05',
    description: 'Diseño abstracto con técnica de puntillismo orgánico.',
    size: 'Mediano',
  },
  {
    id: 9,
    title: 'Lobo en Microrealismo',
    image: '/images/portfolio/9.jpg',
    thumbnail: '/images/portfolio/9-thumb.jpg',
    style: 'Microrealismo',
    date: '2023-11-30',
    description: 'Retrato de lobo con texturas en microrealismo.',
    size: 'Grande',
  },
  {
    id: 10,
    title: 'Flor Línea Fina',
    image: '/images/portfolio/10.jpg',
    thumbnail: '/images/portfolio/10-thumb.jpg',
    style: 'Línea Fina',
    date: '2023-11-25',
    description: 'Flor con técnica de línea fina delicada.',
    size: 'Mediano',
  },
  {
    id: 11,
    title: 'Fénix Blackwork',
    image: '/images/portfolio/11.jpg',
    thumbnail: '/images/portfolio/11-thumb.jpg',
    style: 'Blackwork',
    date: '2023-11-20',
    description: 'Fénix resurgiendo de las llamas en blackwork.',
    size: 'Grande',
  },
  {
    id: 12,
    title: 'Constelación Línea Fina',
    image: '/images/portfolio/12.jpg',
    thumbnail: '/images/portfolio/12-thumb.jpg',
    style: 'Línea Fina',
    date: '2023-11-15',
    description: 'Constelación celestial con trazo de línea fina.',
    size: 'Pequeño',
  },
]

// Funciones de utilidad
export const getPortfolioItemById = (id: number): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id)
}

export const getPortfolioByStyle = (style: string): PortfolioItem[] => {
  return portfolioItems.filter(item => item.style === style)
}

export const getAllStyles = (): string[] => {
  return [...new Set(portfolioItems.map(item => item.style))]
}

export const getRandomPortfolioItems = (count: number = 3): PortfolioItem[] => {
  const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export default portfolioItems
