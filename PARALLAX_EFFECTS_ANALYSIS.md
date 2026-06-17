# Análisis de Efectos de Scroll - Body Electric Tattoo

## Efectos Identificados

Body Electric Tattoo implementa **Parallax Scrolling**, un efecto donde los elementos se mueven a diferentes velocidades cuando el usuario hace scroll.

### Características principales observadas:

1. **Parallax de Imagen de Fondo**
   - La imagen de fondo se mueve más lentamente que el contenido
   - Crea una ilusión de profundidad 3D
   - El fondo parece "estar atrás" del contenido

2. **Fade In/Out de Elementos**
   - Los títulos y CTA aparecen/desaparecen suavemente al scroll
   - Transiciones suaves entre secciones

3. **Scale Transform**
   - Los elementos pueden crecer o achicarse ligeramente
   - Efecto de "zoom" controlado por scroll

4. **Translación de Y (vertical)**
   - Movimiento vertical de elementos basado en posición de scroll

---

## Opciones de Implementación para Vue.js

### Opción 1: CSS puro + Intersection Observer (Recomendado para rendimiento)
**Ventajas:**
- ✅ Mejor rendimiento
- ✅ Sin dependencias
- ✅ Funciona en todos los navegadores modernos

**Desventajas:**
- Menos preciso (se basa en viewport visibility)
- Animaciones más limitadas

```css
/* Ejemplo CSS */
.panel {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

### Opción 2: GSAP + ScrollTrigger (Más profesional)
**Ventajas:**
- ✅ Control preciso y suave
- ✅ Muchas animaciones disponibles
- ✅ Mejor performance optimization
- ✅ ScrollSmoother para scroll suave
- ✅ Compatible con Mobile

**Desventajas:**
- Requiere librería externa (pero es estándar en la industria)
- Licencia: Gratuita para uso comercial

**Librerías necesarias:**
```bash
npm install gsap
```

### Opción 3: Lenis (Scroll Suave + Parallax)
**Ventajas:**
- ✅ Scroll ultra suave (como en videojuegos)
- ✅ Fácil implementación
- ✅ Muy popular en web moderno

**Desventajas:**
- Requiere librería adicional
- Puede afectar el comportamiento del scroll nativo

**Librerías necesarias:**
```bash
npm install @studio-freight/lenis
```

---

## Implementación Recomendada: GSAP + ScrollTrigger

### Por qué GSAP es ideal para tu proyecto:

1. **Parallax preciso**: Control exacto de velocidad de movimiento
2. **ScrollSmoother**: Scroll suave nativo
3. **Performance**: Optimizado para aplicaciones web
4. **Community**: Documentación excelente y comunidad activa
5. **Flexibilidad**: Funciona con cualquier framework

### Estructura básica:

```vue
<template>
  <div class="home-page">
    <section class="panel" ref="panel1">
      <img class="background" :src="image1" />
      <div class="overlay">
        <h2>SECTION 1</h2>
      </div>
    </section>
    
    <section class="panel" ref="panel2">
      <img class="background" :src="image2" />
      <div class="overlay">
        <h2>SECTION 2</h2>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Parallax effect on background
  gsap.utils.toArray('.panel').forEach((panel) => {
    gsap.to(panel.querySelector('.background'), {
      scrollTrigger: {
        trigger: panel,
        scrub: 1, // Smooth scrubbing
        markers: false
      },
      y: (i) => i * 100, // Speed multiplier
      ease: 'none'
    })
  })
})
</script>

<style scoped>
.panel {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
```

---

## Efecto Específico: Parallax con ScrollTrigger

### Parámetros clave:

```javascript
gsap.to(elemento, {
  scrollTrigger: {
    trigger: elemento,        // Elemento que activa la animación
    start: "top center",       // Cuándo empieza (viewport de elemento)
    end: "bottom center",      // Cuándo termina
    scrub: 1,                  // Suavidad (0-3, 1 es suave)
    markers: false,            // Debug markers
    pin: false,                // Fijar elemento mientras anima
  },
  y: -100,                     // Movimiento vertical (parallax)
  opacity: 1,                  // Fade in/out
  scale: 1.05,                 // Zoom
  duration: 1                  // Duración total (menos relevante con scrub)
})
```

### Velocidades de Parallax comunes:

- `y: -50` → Movimiento lento (fondo)
- `y: -100` → Movimiento medio
- `y: -150` → Movimiento rápido
- `y: 0` → Sin movimiento (contenido se queda fijo)

---

## Ejemplo Completo para Tu Proyecto

Ver el archivo: `HOME_PARALLAX_IMPLEMENTATION.md`

---

## Alternativas Ligeras (CSS puro)

Si prefieres no añadir librerías, puedes usar CSS puro:

```css
.panel {
  background-attachment: fixed;  /* Efecto parallax básico */
}

@supports (background-attachment: fixed) {
  .panel {
    background-attachment: fixed;
  }
}

/* Fallback para navegadores que no soportan */
@supports not (background-attachment: fixed) {
  .panel {
    background-attachment: scroll;
  }
}
```

**Limitaciones:**
- Control limitado
- No funciona bien en mobile
- Menos opciones de personalización

---

## Recomendación Final

**Usa GSAP + ScrollTrigger porque:**
1. Body Electric probablemente usa algo similar
2. Es el estándar de la industria
3. Mejor control y performance
4. Compatible con mobile
5. Fácil de integrar en Vue 3

**Próximos pasos:**
1. Instalar GSAP
2. Crear composable para scroll effects
3. Aplicar parallax a cada panel
4. Optimizar performance con `will-change`
