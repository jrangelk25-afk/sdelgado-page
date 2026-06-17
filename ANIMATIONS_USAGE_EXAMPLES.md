# Ejemplos de Uso - Componentes de Animación

## 📚 Ejemplos Prácticos

### Ejemplo 1: Sección Simple (Como en Home)

```vue
<template>
  <ParallaxPanel 
    background-image="/img/hero/world-famous.webp"
    alt-text="World Famous"
  >
    <FadeInContent>
      <AnimatedTitle size="large">WORLD FAMOUS</AnimatedTitle>
      <AnimatedCTA text="OUR SHOP" href="/portfolio" />
    </FadeInContent>
  </ParallaxPanel>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'
import AnimatedCTA from '@/components/animations/AnimatedCTA.vue'

useScrollAnimations()
</script>
```

---

### Ejemplo 2: Hero Section

```vue
<template>
  <ParallaxPanel 
    background-image="/img/hero/hero.webp"
    alt-text="Hero"
  >
    <FadeInContent>
      <AnimatedTitle size="hero">SDELGADO</AnimatedTitle>
      <AnimatedSubtitle>WELCOME SCROLL DOWN</AnimatedSubtitle>
    </FadeInContent>
  </ParallaxPanel>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'
import AnimatedSubtitle from '@/components/animations/AnimatedSubtitle.vue'

useScrollAnimations()
</script>
```

---

### Ejemplo 3: Con Múltiples CTAs

```vue
<template>
  <ParallaxPanel 
    background-image="/img/hero/booking.webp"
    alt-text="Booking"
  >
    <FadeInContent>
      <AnimatedTitle size="large">GET IN TOUCH</AnimatedTitle>
      <div class="cta-container">
        <AnimatedCTA text="BOOKING" href="https://calendly.com" external />
        <AnimatedCTA text="INSTAGRAM" href="https://instagram.com" external />
      </div>
    </FadeInContent>
  </ParallaxPanel>
</template>

<style scoped>
.cta-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .cta-container {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
```

---

### Ejemplo 4: Configuración Personalizada

```vue
<template>
  <div class="portfolio-page">
    <ParallaxPanel 
      background-image="/img/portfolio/hero.webp"
      alt-text="Portfolio"
    >
      <FadeInContent>
        <AnimatedTitle size="large">OUR PORTFOLIO</AnimatedTitle>
      </FadeInContent>
    </ParallaxPanel>
  </div>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'

// Configuración más agresiva
useScrollAnimations({
  scrubValue: 0.5,        // Más suave
  parallaxSpeed: -150,    // Más dramático
  disableOnMobile: false  // Parallax también en móviles
})
</script>
```

---

### Ejemplo 5: Usando con Event Handlers

```vue
<template>
  <ParallaxPanel 
    background-image="/img/hero/contact.webp"
    alt-text="Contact"
  >
    <FadeInContent>
      <AnimatedTitle size="large">CONTACT US</AnimatedTitle>
      <AnimatedCTA 
        text="SEND MESSAGE" 
        @click="openContactForm"
      />
      <AnimatedCTA 
        text="CALL NOW" 
        @click="callUs"
      />
    </FadeInContent>
  </ParallaxPanel>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'
import AnimatedCTA from '@/components/animations/AnimatedCTA.vue'

useScrollAnimations()

const openContactForm = () => {
  console.log('Abriendo formulario de contacto')
  // Lógica aquí
}

const callUs = () => {
  window.location.href = 'tel:+1234567890'
}
</script>
```

---

### Ejemplo 6: Dentro de una Lista/Grid

```vue
<template>
  <div class="portfolio-grid">
    <div v-for="item in portfolioItems" :key="item.id" class="portfolio-item">
      <ParallaxPanel 
        :background-image="item.image"
        :alt-text="item.title"
      >
        <FadeInContent>
          <AnimatedTitle size="medium">{{ item.title }}</AnimatedTitle>
          <AnimatedSubtitle>{{ item.style }}</AnimatedSubtitle>
          <AnimatedCTA :text="`VIEW ${item.title}`" :href="`/portfolio/${item.id}`" />
        </FadeInContent>
      </ParallaxPanel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'
import AnimatedSubtitle from '@/components/animations/AnimatedSubtitle.vue'
import AnimatedCTA from '@/components/animations/AnimatedCTA.vue'

useScrollAnimations()

const portfolioItems = ref([
  { id: 1, title: 'Rosa Realista', image: '/img/portfolio/1.jpg', style: 'Realismo' },
  { id: 2, title: 'Dragón', image: '/img/portfolio/2.jpg', style: 'Neotradional' },
  // ...más items
])
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  height: 400px;
}
</style>
```

---

### Ejemplo 7: Página Completa (About Page)

```vue
<template>
  <div class="about-page">
    <!-- Hero -->
    <ParallaxPanel 
      background-image="/img/about/hero.webp"
      alt-text="About Me"
    >
      <FadeInContent>
        <AnimatedTitle size="hero">ABOUT ME</AnimatedTitle>
        <AnimatedSubtitle>Tattooist & Artist</AnimatedSubtitle>
      </FadeInContent>
    </ParallaxPanel>

    <!-- Story Section -->
    <section class="content-section">
      <div class="container">
        <AnimatedTitle size="large">MY STORY</AnimatedTitle>
        <p class="description">{{ tattooer.about.story }}</p>
        <AnimatedCTA text="READ MORE" href="#philosophy" />
      </div>
    </section>

    <!-- Philosophy Section -->
    <ParallaxPanel 
      background-image="/img/about/philosophy.webp"
      alt-text="Philosophy"
    >
      <FadeInContent>
        <AnimatedTitle size="large">MY PHILOSOPHY</AnimatedTitle>
        <AnimatedSubtitle>Quality. Hygiene. Detail.</AnimatedSubtitle>
      </FadeInContent>
    </ParallaxPanel>
  </div>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import { tattooer } from '@/data/tattooer'
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
import FadeInContent from '@/components/animations/FadeInContent.vue'
import AnimatedTitle from '@/components/animations/AnimatedTitle.vue'
import AnimatedSubtitle from '@/components/animations/AnimatedSubtitle.vue'
import AnimatedCTA from '@/components/animations/AnimatedCTA.vue'

useScrollAnimations()
</script>

<style scoped>
.content-section {
  background-color: #1a1a1a;
  color: #e8e8e8;
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a0a0a0;
  margin-bottom: 2rem;
}
</style>
```

---

## 🎯 Tips de Uso

### 1. Siempre Inicializar useScrollAnimations

```vue
<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'

// ⭐ Obligatorio para que funcione
useScrollAnimations()
</script>
```

### 2. Usar FadeInContent para Agrupar

```vue
<!-- ❌ No recomendado - animaciones separadas -->
<AnimatedTitle class="js-fade-in">Title</AnimatedTitle>
<AnimatedCTA class="js-fade-in">Button</AnimatedCTA>

<!-- ✅ Recomendado - animación coordinada -->
<FadeInContent>
  <AnimatedTitle>Title</AnimatedTitle>
  <AnimatedCTA>Button</AnimatedCTA>
</FadeInContent>
```

### 3. Responsive Titles

```vue
<!-- ✅ Selecciona el tamaño correcto -->
<AnimatedTitle size="hero">Hero Page</AnimatedTitle>      <!-- 5rem -->
<AnimatedTitle size="large">Section Title</AnimatedTitle> <!-- 4rem -->
<AnimatedTitle size="medium">Subsection</AnimatedTitle>   <!-- 2.5rem -->
<AnimatedTitle size="small">Label</AnimatedTitle>         <!-- 1.8rem -->
```

### 4. CTAs Versátiles

```vue
<!-- Router link interno -->
<AnimatedCTA text="PORTFOLIO" href="/portfolio" />

<!-- Link externo -->
<AnimatedCTA text="INSTAGRAM" href="https://instagram.com" external />

<!-- Click handler -->
<AnimatedCTA text="BOOK NOW" @click="handleBooking" />

<!-- Active state -->
<AnimatedCTA text="ACTIVE" href="/" is-active />
```

### 5. Configuración según Página

```vue
<!-- Home: Parallax agresivo -->
<script setup>
useScrollAnimations({
  parallaxSpeed: -100,  // Estándar
  scrubValue: 1
})
</script>

<!-- About: Parallax sutil -->
<script setup>
useScrollAnimations({
  parallaxSpeed: -50,   // Más sutil
  scrubValue: 0.5
})
</script>

<!-- Portfolio: Parallax dramático -->
<script setup>
useScrollAnimations({
  parallaxSpeed: -150,  // Muy dramático
  scrubValue: 1.5,
  disableOnMobile: false
})
</script>
```

---

## 🚀 Performance Tips

### 1. Lazy Load Imágenes

```vue
<ParallaxPanel 
  background-image="/img/hero/hero.webp"
  alt-text="Hero"
>
  <!-- GSAP se encarga del performance -->
</ParallaxPanel>
```

### 2. Optimizar Imágenes

```bash
# Usar WebP (ya lo hacemos) ✅
# Tamaño recomendado: 1920x1080 o superior
# Peso: 150-300KB después de compresión
```

### 3. Desactivar Parallax en Móviles

```vue
<script setup>
useScrollAnimations({
  disableOnMobile: true,  // Por defecto
  mobileBreakpoint: 768
})
</script>
```

---

## ⚠️ Errores Comunes

### Error 1: useScrollAnimations no inicializado

```vue
<!-- ❌ No funciona - sin useScrollAnimations -->
<template>
  <ParallaxPanel background-image="/img/hero.webp">
    <AnimatedTitle>Esto no animará</AnimatedTitle>
  </ParallaxPanel>
</template>

<!-- ✅ Funciona - con useScrollAnimations -->
<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
useScrollAnimations()
</script>
```

### Error 2: Componentes no importados

```vue
<!-- ❌ Esto causa error -->
<template>
  <ParallaxPanel /> <!-- No está importado -->
</template>

<!-- ✅ Correcto -->
<script setup>
import ParallaxPanel from '@/components/animations/ParallaxPanel.vue'
</script>
```

### Error 3: Tamaño de ParallaxPanel no correcto

```vue
<!-- ❌ Parallax no es visible si no es 100vh -->
<ParallaxPanel background-image="/img/hero.webp" />

<!-- ✅ ParallaxPanel siempre es 100vh automáticamente -->
```

---

## 🎓 Recursos Adicionales

- [ANIMATIONS_ARCHITECTURE.md](./ANIMATIONS_ARCHITECTURE.md) - Arquitectura técnica
- [HOME_PARALLAX_IMPLEMENTATION.md](./HOME_PARALLAX_IMPLEMENTATION.md) - Guía de implementación
- [SCROLL_EFFECTS_COMPARISON.md](./SCROLL_EFFECTS_COMPARISON.md) - Comparación de efectos

