<template>
  <div class="home-page">
    <!-- SDELGADO Section -->
    <section class="panel panel-hero" :ref="(el) => setPanelRef(0, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[0].image})`, backgroundSize: sections[0].bgSize, backgroundPosition: sections[0].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[0].title }}</h2>
        <p class="subtitle">{{ sections[0].subtitle }}</p>
      </div>
    </section>

    <!-- Welcome Section - HERO -->
    <section class="panel panel-section-1" :ref="(el) => setPanelRef(1, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[1].image})`, backgroundSize: sections[1].bgSize, backgroundPosition: sections[1].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[1].title }}</h2>
        <router-link :to="sections[1].link" class="cta">{{ sections[1].cta }}</router-link>
      </div>
    </section>

    <!-- World Famous Section -->
    <section class="panel panel-section-2" :ref="(el) => setPanelRef(2, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[2].image})`, backgroundSize: sections[2].bgSize, backgroundPosition: sections[2].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[2].title }}</h2>
        <router-link :to="sections[2].link" class="cta">{{ sections[2].cta }}</router-link>
      </div>
    </section>

    <!-- Tattoo Parlor Section -->
    <section class="panel panel-section-3" :ref="(el) => setPanelRef(3, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[3].image})`, backgroundSize: sections[3].bgSize, backgroundPosition: sections[3].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[3].title }}</h2>
        <router-link :to="sections[3].link" class="cta">{{ sections[3].cta }}</router-link>
      </div>
    </section>

    <!-- Piercing Studio Section -->
    <section class="panel panel-section-4" :ref="(el) => setPanelRef(4, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[4].image})`, backgroundSize: sections[4].bgSize, backgroundPosition: sections[4].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[4].title }}</h2>
        <router-link :to="sections[4].link" class="cta">{{ sections[4].cta }}</router-link>
      </div>
    </section>

    <!-- We See You Section -->
    <section class="panel panel-section-5" :ref="(el) => setPanelRef(5, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[5].image})`, backgroundSize: sections[5].bgSize, backgroundPosition: sections[5].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[5].title }}</h2>
        <router-link :to="sections[5].link" class="cta">{{ sections[5].cta }}</router-link>
      </div>
    </section>

    <!-- Get In Touch Section -->
    <section class="panel panel-section-6" :ref="(el) => setPanelRef(6, el as HTMLElement)" :style="{ backgroundImage: `url(${sections[6].image})`, backgroundSize: sections[6].bgSize, backgroundPosition: sections[6].bgPosition }">
      <div class="overlay">
        <h2 class="title">{{ sections[6].title }}</h2>
        <a href="#" @click.prevent="handleBooking" class="cta">{{ sections[6].cta }}</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { tattooer } from '@/data/tattooer'

/**
 * Obtener ancho de pantalla actual
 */
const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

/**
 * Obtener sections adaptadas al tamaño de pantalla
 * Edita las configuraciones de móvil y desktop según necesites
 */
const getSections = () => {
  const isMobile = screenWidth.value <= 768

  if (isMobile) {
    // ======== CONFIGURACIÓN PARA MÓVILES (≤768px) ========
    // Puedes editar bgPosition y los valores de speed/offset para ajustar el parallax
    return [
      {
        title: 'SDELGADO',
        subtitle: 'Professional Tattoo Artist',
        image: '/img/hero/hero.webp',
        cta: 'WELCOME',
        link: '#',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -150,
        mobileSpeed: -0.4,
      },
      {
        title: 'WELCOME',
        image: '/img/hero/welcome.webp',
        cta: 'OUR STORY',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -40,
        mobileSpeed: -0.15,
      },
      {
        title: 'WORLD FAMOUS',
        image: '/img/hero/world-famous.webp',
        cta: 'OUR SHOP',
        link: '/portfolio',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -70,
        mobileSpeed: -0.18,
      },
      {
        title: 'TATTOO PARLOR',
        image: '/img/hero/tattoo-parlor.webp',
        cta: 'THE ARTISTS',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -90,
        mobileSpeed: -0.2,
      },
      {
        title: 'SHOP',
        image: '/img/hero/piercing-studio.webp',
        cta: 'VIEW DESIGNS',
        link: '/shop',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -70,
        mobileSpeed: -0.18,
      },
      {
        title: 'WE SEE YOU',
        image: '/img/hero/we-see-you.webp',
        cta: 'OUR CULTURE',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -75,
        mobileSpeed: -0.19,
      },
      {
        title: 'GET IN TOUCH',
        image: '/img/hero/get-in-touch.webp',
        cta: 'BOOKING',
        link: '#',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: 0,
        speed: 0,
        mobileInitialOffset: -80,
        mobileSpeed: -0.2,
      },
    ]
  } else {
    // ======== CONFIGURACIÓN PARA DESKTOP (>768px) ========
    return [
      {
        title: 'SDELGADO',
        subtitle: 'Professional Tattoo Artist',
        image: '/img/hero/hero.webp',
        cta: 'WELCOME',
        link: '#',
        bgSize: 'cover',
        bgPosition: 'center 20%',
        initialOffset: -510,
        speed: -0.5,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'WELCOME',
        image: '/img/hero/welcome.webp',
        cta: 'OUR STORY',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center 80%',
        initialOffset: -300,
        speed: -0.5,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'WORLD FAMOUS',
        image: '/img/hero/world-famous.webp',
        cta: 'OUR SHOP',
        link: '/portfolio',
        bgSize: 'cover',
        bgPosition: 'center 80%',
        initialOffset: -500,
        speed: -0.6,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'TATTOO PARLOR',
        image: '/img/hero/tattoo-parlor.webp',
        cta: 'THE ARTISTS',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center center',
        initialOffset: -1000,
        speed: -0.6,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'SHOP',
        image: '/img/hero/piercing-studio.webp',
        cta: 'View designs',
        link: '/shop',
        bgSize: 'cover',
        bgPosition: 'center 80%',
        initialOffset: -300,
        speed: -0.6,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'WE SEE YOU',
        image: '/img/hero/we-see-you.webp',
        cta: 'OUR CULTURE',
        link: '/about',
        bgSize: 'cover',
        bgPosition: 'center 80%',
        initialOffset: -300,
        speed: -0.6,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
      {
        title: 'GET IN TOUCH',
        image: '/img/hero/get-in-touch.webp',
        cta: 'BOOKING',
        link: '#',
        bgSize: 'cover',
        bgPosition: 'center 80%',
        initialOffset: -750,
        speed: -0.6,
        mobileInitialOffset: 0,
        mobileSpeed: 0,
      },
    ]
  }
}

// Define sections con configuración reactiva según el tamaño de pantalla
const sections = computed(() => getSections())

// Store panel refs for scroll effect
const panelRefs = ref<HTMLElement[]>([])
let animationFrameId: number | null = null

const setPanelRef = (index: number, el: HTMLElement | null) => {
  if (el) {
    panelRefs.value[index] = el
  }
}

/**
 * Obtener configuración adaptada según el tamaño de pantalla
 */
const getResponsiveConfig = (screenWidth: number) => {
  if (screenWidth <= 768) {
    return {
      isMobile: true,
      effectRangeMultiplier: 1.2,
      disableParallax: false,
    }
  }
  return {
    isMobile: false,
    effectRangeMultiplier: 1,
    disableParallax: false,
  }
}

/**
 * Handle scroll effect - reveals image from top to bottom
 * Each panel has independent configuration for parallax effect
 * - initialOffset: starting position of the background
 * - speed: how fast the background moves relative to scroll
 */
const handleScroll = () => {
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const screenWidthVal = window.innerWidth

  // Obtener configuración adaptada al tamaño de pantalla
  const config = getResponsiveConfig(screenWidthVal)

  panelRefs.value.forEach((panel, index) => {
    if (!panel) return

    // En móviles, usar valores específicos de móvil
    if (config.disableParallax) {
      const section = sections.value[index]
      panel.style.backgroundPosition = section.bgPosition
      return
    }

    // Get panel position and configuration
    const panelTop = panel.offsetTop
    const panelHeight = panel.offsetHeight
    const section = sections.value[index]

    // Extender el rango donde se aplica el efecto
    const effectStart = panelTop - (viewportHeight * config.effectRangeMultiplier)
    const effectEnd = panelTop + panelHeight + (viewportHeight * config.effectRangeMultiplier)

    // Solo aplicar si está en el rango extendido
    if (scrollY < effectStart || scrollY > effectEnd) {
      return
    }

    // Calcular el progreso desde que entra hasta que sale
    const totalDistance = effectEnd - effectStart
    const distanceScrolled = scrollY - effectStart
    const scrollProgress = distanceScrolled / totalDistance

    // Usar valores específicos de móvil o desktop
    const useInitialOffset = config.isMobile ? section.mobileInitialOffset : section.initialOffset
    const useSpeed = config.isMobile ? section.mobileSpeed : section.speed

    // Usar el progreso para calcular el offset
    let bgShift = useInitialOffset + ((scrollProgress - 0.5) * 2 * viewportHeight * useSpeed)

    // Limitar el rango del desplazamiento para evitar espacios en blanco (solo en móvil)
    if (config.isMobile) {
      const maxShift = 50
      bgShift = Math.max(-maxShift, Math.min(maxShift, bgShift))
    }

    panel.style.backgroundPosition = `center ${bgShift}px`
  })
}

/**
 * Optimized scroll handler with requestAnimationFrame
 */
const onScroll = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  animationFrameId = requestAnimationFrame(handleScroll)
}

onMounted(() => {
  // Actualizar screenWidth inicial
  screenWidth.value = window.innerWidth
  
  // Initial scroll call
  handleScroll()
  
  // Add scroll listener
  window.addEventListener('scroll', onScroll, { passive: true })
  
  // Agregar listener para detectar cambios de tamaño de pantalla
  const handleResize = () => {
    screenWidth.value = window.innerWidth
  }
  window.addEventListener('resize', handleResize)
  
  // Cleanup en onUnmounted
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', handleResize)
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
  })
})


const handleBooking = () => {
  window.open(tattooer.bookingUrl, '_blank')
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  background-color: #000000;
}

.panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

/* Hero section - full screen minus header */
.panel-hero {
  height: 100vh;
  display: flex;
}

/* Asegura que el home-page no tiene padding que reduzca el espacio */
.home-page {
  padding-top: 0;
  margin-top: 0;
}

/* First section */
.panel-section-1 {
  height: 80vh;
}

/* Content sections - 80vh */
.panel-section-2 {
  height: 80vh;
}

.panel-section-3 {
  height: 80vh;
}

.panel-section-4 {
  height: 80vh;
}

.panel-section-5 {
  height: 80vh;
}

.panel-section-6 {
  height: 80vh;
}

.panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  gap: 2rem;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.subtitle {
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.8;
}

.cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 2px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
  margin-top: 1rem;
}

.cta:hover {
  background: #ffffff;
  color: #000000;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1024px) {
  /* Tablet */
  .panel-hero {
    height: 100vh !important;
  }

  .panel-section-1,
  .panel-section-2,
  .panel-section-3,
  .panel-section-4,
  .panel-section-5,
  .panel-section-6 {
    height: 70vh;
  }

  .title {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .cta {
    padding: 0.9rem 2.2rem;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
  }

  .overlay {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  /* Tablet pequeño / Mobile grande */
  .panel-hero {
    height: 100vh !important;
  }

  .panel-section-1,
  .panel-section-2,
  .panel-section-3,
  .panel-section-4,
  .panel-section-5,
  .panel-section-6 {
    height: 70vh;
  }

  .title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .cta {
    padding: 0.8rem 2rem;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .overlay {
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {
  /* Mobile */
  .panel-hero {
    height: 100vh !important;
  }

  .panel-section-1,
  .panel-section-2,
  .panel-section-3,
  .panel-section-4,
  .panel-section-5,
  .panel-section-6 {
    height: 75vh;
  }

  .title {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }

  .cta {
    padding: 0.6rem 1.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }

  .overlay {
    gap: 1rem;
  }
}

@media (max-width: 360px) {
  /* Mobile muy pequeño */
  .panel-hero {
    height: 75vh !important;
  }

  .panel-section-1,
  .panel-section-2,
  .panel-section-3,
  .panel-section-4,
  .panel-section-5,
  .panel-section-6 {
    height: 50vh;
  }

  .title {
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }

  .subtitle {
    font-size: 0.65rem;
    letter-spacing: 0.3px;
  }

  .cta {
    padding: 0.5rem 1.2rem;
    font-size: 0.65rem;
    letter-spacing: 0.3px;
  }

  .overlay {
    gap: 0.8rem;
  }
}
</style>
