// @ts-nocheck
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { DefineComponent } from 'vue'

// Lazy load pages for code splitting
const Home = () => import('@/pages/Home.vue') as Promise<{ default: DefineComponent }>
const Portfolio = () => import('@/pages/Portfolio.vue') as Promise<{ default: DefineComponent }>
const About = () => import('@/pages/About.vue') as Promise<{ default: DefineComponent }>
const Shop = () => import('@/pages/Shop.vue') as Promise<{ default: DefineComponent }>
const Aftercare = () => import('@/pages/Aftercare.vue') as Promise<{ default: DefineComponent }>
const Contact = () => import('@/pages/Contact.vue') as Promise<{ default: DefineComponent }>
const NotFound = () => import('@/pages/NotFound.vue') as Promise<{ default: DefineComponent }>

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Sdelgado - Tatuador Profesional | Portafolio de Tatuajes',
      description: 'Portafolio profesional de tatuajes. Especialista en diseños únicos y personalizados.',
      ogImage: '/og-image.jpg',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portafolio - Sdelgado | Galería de Trabajos',
      description: 'Galería completa de trabajos realizados. Explora nuestros diseños y estilos.',
      ogImage: '/portfolio-og.jpg',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Acerca de - Sdelgado | Conoce al Tatuador',
      description: 'Conoce la historia, filosofía y especialidades del tatuador.',
      ogImage: '/about-og.jpg',
    },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: 'Shop - Sdelgado | Diseños Exclusivos de Ropa',
      description: 'Colección exclusiva de ropa con diseños inspirados en el arte del tatuaje.',
      ogImage: '/shop-og.jpg',
    },
  },
  {
    path: '/aftercare',
    name: 'Aftercare',
    component: Aftercare,
    meta: {
      title: 'Cuidados Post-tatuaje - Sdelgado | Guía Completa',
      description: 'Guía detallada de cuidados post-tatuaje y preguntas frecuentes.',
      ogImage: '/aftercare-og.jpg',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contacto - Sdelgado | Reserva tu Cita',
      description: 'Ponte en contacto para consultas, booking o preguntas sobre nuestros servicios.',
      ogImage: '/contact-og.jpg',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Página No Encontrada - Sdelgado',
      description: 'La página que buscas no existe.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si el usuario usó el botón atrás, devuelve la posición guardada
    if (savedPosition) {
      return savedPosition
    }
    // Si hay un anchor/hash, scroll a ese elemento
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
    // Por defecto, scroll al top
    return { top: 0, behavior: 'smooth' }
  },
})

// Update page title and meta tags
router.beforeEach((to, from, next) => {
  // Update title
  const title = (to.meta.title as string) || 'Sdelgado - Tatuador Profesional'
  document.title = title

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      (to.meta.description as string) || 'Portafolio profesional de tatuajes'
    )
  }

  // Update OG tags for social sharing
  const metaOg = document.querySelector('meta[property="og:title"]')
  if (metaOg) {
    metaOg.setAttribute('content', title)
  }

  next()
})

export default router
