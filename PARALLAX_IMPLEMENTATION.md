# Parallax Scroll Implementation

## 📋 Descripción

Se ha implementado un **parallax scroll cinematográfico** usando GSAP ScrollTrigger. Las imágenes se desplazan a diferente velocidad que el contenido mientras el usuario scrollea, creando profundidad y un efecto premium.

## 🔧 Técnica: `scrub: true`

La clave está en usar `scrub: true` en ScrollTrigger, que sincroniza la animación directamente con el scroll en tiempo real:

```typescript
gsap.to(bg, {
  yPercent: 20,           // La imagen se mueve un 20%
  ease: 'none',
  scrollTrigger: {
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true           // ← Sincronización en tiempo real
  }
})
```

## 📁 Archivos

- **src/components/animations/ScrollSnap.vue**: Componente que aplica parallax
- **src/pages/Home.vue**: Página con 7 secciones full-screen

## 🎬 Cómo Funciona

```
Usuario scrollea 100px hacia abajo
├─ Contenido baja 100px
└─ Imagen baja solo 20px
   └─ Efecto parallax: la imagen se mueve más lentamente
```

## ✨ Características

✅ Sin snap automático  
✅ Scroll fluido y natural  
✅ Parallax sincronizado (`scrub: true`)  
✅ 7 secciones de 100vh cada una  
✅ Imágenes en `/img/hero/`  
✅ Responsive design  
✅ Performance optimizado  

## 🚀 Uso

El componente ScrollSnap es un wrapper simple que aplica parallax a todas las secciones `.panel`:

```vue
<!-- En Home.vue -->
<div class="home-page">
  <section class="panel">
    <img class="background" :src="image" />
    <div class="overlay">
      <!-- contenido -->
    </div>
  </section>
  <!-- más secciones... -->
</div>
```

El script del componente busca elementos `.panel` y aplica parallax automáticamente.

## 🎨 Personalización

### Cambiar intensidad del parallax

En `ScrollSnap.vue`, línea 19:

```typescript
yPercent: 20  // Cambiar 20 por otro valor
// 10 = parallax sutil
// 30 = parallax más pronunciado
// 50 = parallax muy fuerte
```

## 📊 Secciones

| # | Título | Imagen | 
|---|--------|--------|
| 1 | SDELGADO | hero.webp |
| 2 | WELCOME | welcome.webp |
| 3 | WORLD FAMOUS | world-famous.webp |
| 4 | TATTOO PARLOR | tattoo-parlor.webp |
| 5 | PIERCING STUDIO | piercing-studio.webp |
| 6 | WE SEE YOU | we-see-you.webp |
| 7 | GET IN TOUCH | get-in-touch.webp |

## ✅ Testing

1. Ejecutar: `npm run dev`
2. Ir a `http://localhost:5173/`
3. Scrollear lentamente
4. Observar que las imágenes se deslizan hacia arriba

## 🔍 Debug

En DevTools console:
```javascript
// Ver triggers activos
gsap.plugins.ScrollTrigger.getAll()

// Debe mostrar 7 triggers (uno por sección)
```

---

**Versión**: 1.0  
**Fecha**: June 12, 2026  
**Estado**: ✅ Implementado
