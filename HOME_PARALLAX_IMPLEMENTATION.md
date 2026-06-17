# Implementación de Parallax Scrolling para Home

## Paso 1: Instalar GSAP

```bash
npm install gsap
```

## Paso 2: Crear un Composable para Scroll Effects

Archivo: `src/composables/useParallax.ts`

```typescript
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallax() {
  const initParallax = () => {
    // Parallax effect para cada panel
    gsap.utils.toArray('.panel').forEach((panel: any) => {
      const background = panel.querySelector('.background')
      
      if (background) {
        gsap.to(background, {
          scrollTrigger: {
            trigger: panel,
            start: 'top center',
            end: 'bottom center',
            scrub: 1, // Smooth scrubbing
            onUpdate: (self) => {
              // Opcional: log progress
            }
          },
          y: (i: number) => -100 + i * 20, // Parallax speed
          ease: 'none'
        })
      }

      // Fade in/out del contenido
      const overlay = panel.querySelector('.overlay')
      if (overlay) {
        gsap.to(overlay, {
          scrollTrigger: {
            trigger: panel,
            start: 'top center',
            end: 'center center',
            scrub: 1
          },
          opacity: 1,
          ease: 'none'
        })
      }
    })

    // Refresh ScrollTrigger para asegurar que todo se actualiza
    ScrollTrigger.refresh()
  }

  const cleanUp = () => {
    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
  }

  onMounted(() => {
    // Esperar a que las imágenes se carguen
    window.addEventListener('load', initParallax)
    // También iniciar después de montar (por si ya están cargadas)
    setTimeout(initParallax, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('load', initParallax)
    cleanUp()
  })

  return { initParallax, cleanUp }
}
```

## Paso 3: Actualizar Home.vue

```vue
<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="panel hero-section">
      <img class="background" :src="sections[0].image" :alt="sections[0].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[0].title }}</h2>
        <p class="subtitle">WELCOME SCROLL DOWN</p>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="panel">
      <img class="background" :src="sections[1].image" :alt="sections[1].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[1].title }}</h2>
        <router-link :to="sections[1].link" class="cta">{{ sections[1].cta }}</router-link>
      </div>
    </section>

    <!-- World Famous Section -->
    <section class="panel">
      <img class="background" :src="sections[2].image" :alt="sections[2].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[2].title }}</h2>
        <router-link :to="sections[2].link" class="cta">{{ sections[2].cta }}</router-link>
      </div>
    </section>

    <!-- Tattoo Parlor Section -->
    <section class="panel">
      <img class="background" :src="sections[3].image" :alt="sections[3].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[3].title }}</h2>
        <router-link :to="sections[3].link" class="cta">{{ sections[3].cta }}</router-link>
      </div>
    </section>

    <!-- Piercing Studio Section -->
    <section class="panel">
      <img class="background" :src="sections[4].image" :alt="sections[4].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[4].title }}</h2>
        <router-link :to="sections[4].link" class="cta">{{ sections[4].cta }}</router-link>
      </div>
    </section>

    <!-- We See You Section -->
    <section class="panel">
      <img class="background" :src="sections[5].image" :alt="sections[5].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[5].title }}</h2>
        <router-link :to="sections[5].link" class="cta">{{ sections[5].cta }}</router-link>
      </div>
    </section>

    <!-- Get In Touch Section -->
    <section class="panel">
      <img class="background" :src="sections[6].image" :alt="sections[6].title" />
      <div class="overlay">
        <h2 class="title">{{ sections[6].title }}</h2>
        <a href="#" @click.prevent="handleBooking" class="cta">{{ sections[6].cta }}</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tattooer } from '@/data/tattooer'
import { useParallax } from '@/composables/useParallax'

// Initialize parallax effect
useParallax()

// Define sections with their data - using WebP images from public/img/hero
const sections = ref([
  {
    title: 'SDELGADO',
    image: '/img/hero/hero.webp',
    cta: 'WELCOME',
    link: '#',
  },
  {
    title: 'WELCOME',
    image: '/img/hero/welcome.webp',
    cta: 'OUR STORY',
    link: '/about',
  },
  {
    title: 'WORLD FAMOUS',
    image: '/img/hero/world-famous.webp',
    cta: 'OUR SHOP',
    link: '/portfolio',
  },
  {
    title: 'TATTOO PARLOR',
    image: '/img/hero/tattoo-parlor.webp',
    cta: 'THE ARTISTS',
    link: '/about',
  },
  {
    title: 'PIERCING STUDIO',
    image: '/img/hero/piercing-studio.webp',
    cta: 'THE PIERCERS',
    link: '/about',
  },
  {
    title: 'WE SEE YOU',
    image: '/img/hero/we-see-you.webp',
    cta: 'OUR CULTURE',
    link: '/about',
  },
  {
    title: 'GET IN TOUCH',
    image: '/img/hero/get-in-touch.webp',
    cta: 'BOOKING',
    link: '#',
  },
])

const handleBooking = () => {
  window.open(tattooer.bookingUrl, '_blank')
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.home-page {
  display: flex;
  flex-direction: column;
  background-color: #000000;
}

/* Panel Base Styles */
.panel {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  will-change: transform; /* Performance optimization */
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
  will-change: opacity; /* Performance optimization */
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

/* Hero Section Specific */
.hero-section .title {
  font-size: 5rem;
}

.hero-section .subtitle {
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .panel {
    height: 100vh;
  }

  .title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .hero-section .title {
    font-size: 3rem;
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
}

@media (max-width: 480px) {
  .panel {
    height: 100vh;
  }

  .title {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .hero-section .title {
    font-size: 2rem;
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
}
</style>
```

## Paso 4: Crear el Composable useParallax.ts

Si aún no existe, crear el archivo `src/composables/useParallax.ts` (completo arriba)

## Efectos Adicionales Opcionales

### 1. Fade In del Contenido al Entrar en Viewport

```typescript
gsap.to(overlay, {
  scrollTrigger: {
    trigger: panel,
    start: 'top 80%',
    end: 'top 20%',
  },
  opacity: 1,
  y: 0,
  duration: 1
})
```

### 2. Scale Zoom Effect

```typescript
gsap.to(background, {
  scrollTrigger: {
    trigger: panel,
    start: 'top center',
    end: 'bottom center',
    scrub: 1
  },
  scale: 1.1,
  ease: 'none'
})
```

### 3. Scroll Suave (ScrollSmoother)

Instalar:
```bash
npm install gsap
```

Agregar a Home.vue:

```typescript
import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother)

onMounted(() => {
  // Crear smooth scroller
  const smoother = ScrollSmoother.create({
    smooth: 2, // Suavidad (1-5)
    effects: true
  })
})
```

## Personalización de Velocidades de Parallax

Modifica el valor `y` en el composable para cambiar la velocidad:

```javascript
// Lento (usa más el fondo)
y: -30

// Medio (balance)
y: -80

// Rápido (se mueve mucho)
y: -150
```

## Performance Tips

1. **Usar `will-change`** en elementos que se animan
2. **Lazy load imágenes** con `loading="lazy"`
3. **Optimizar imágenes** (usar WebP ✅ ya lo hiciste)
4. **Throttle events** para móviles
5. **Kill ScrollTriggers** al desmontar componente

## Troubleshooting

### Parallax no funciona
- Verifica que GSAP está instalado
- Asegúrate que ScrollTrigger está registrado
- Revisa la consola de errores

### Performance lenta
- Reduce `scrub` a valores menores (0.5)
- Usa imágenes más pequeñas
- Activa hardware acceleration en CSS

### Problema en móviles
- GSAP maneja mobile bien, pero GSAP ScrollSmoother es mejor
- Usa `scrub: 0.6` en lugar de `scrub: 1` para móviles

## Testing

Para verificar que funciona:

1. Abre DevTools (F12)
2. Ve a Network tab
3. Abre la página
4. Haz scroll
5. Verifica que los efectos se aplican suavemente
