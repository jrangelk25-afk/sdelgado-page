# Comparación de Efectos de Scroll Identificados

## Lo que Body Electric hace al hacer Scroll

### 1. **Parallax Background** ⭐ PRINCIPAL
```
Desktop:                           Mobile:
┌─────────────────────────────────┐  ┌──────────────┐
│ TÍTULO                          │  │ TÍTULO       │
│ (mueve lentamente)              │  │ (menos        │
│                                 │  │  paralelo)   │
│  BG (se mueve aún más lento)    │  │ BG (fijo)    │
└─────────────────────────────────┘  └──────────────┘

Efecto: La imagen de fondo se mueve a 30-50% de la velocidad del scroll
Resultado: Sensación de profundidad 3D
```

### 2. **Fade In/Out de Elementos**
```
Scrolling Up:              Scrolling Down:
[Hidden] ───────────────> [Visible] ───────────────> [Hidden]
opacity: 0                opacity: 1                opacity: 0

Transición suave en 1-2 segundos
```

### 3. **Scale/Zoom Subtle**
```
Al entrar:  scale: 0.95  ──> scale: 1.0  ──> scale: 1.05  (al salir)
Crea efecto de "enfoque" a medida que se ve la sección
```

### 4. **Overlay Oscuro Consistente**
```
Capa negra semi-transparente (rgba(0,0,0,0.35))
Mejora legibilidad del texto sobre cualquier imagen
```

---

## Comparación de Librerías para Implementar

| Característica | CSS Puro | GSAP | Lenis | Locomotive |
|---|---|---|---|---|
| **Parallax Precisión** | 2/5 | 5/5 ⭐ | 4/5 | 4/5 |
| **Performance** | 5/5 | 5/5 ⭐ | 4/5 | 3/5 |
| **Curva Aprendizaje** | 1/5 ⭐ | 3/5 | 2/5 | 4/5 |
| **Mobile Support** | 2/5 | 5/5 ⭐ | 4/5 | 3/5 |
| **Tamaño Bundle** | 0KB | ~13KB | ~20KB | ~30KB |
| **Documentación** | N/A | 5/5 ⭐ | 4/5 | 3/5 |
| **Comunidad** | N/A | 5/5 ⭐ | 4/5 | 3/5 |
| **Edad/Estabilidad** | ⭐ | 15+ años ⭐ | Nuevo | Maduro |

### RECOMENDACIÓN: **GSAP + ScrollTrigger** ⭐⭐⭐⭐⭐

---

## Parámetros GSAP ScrollTrigger para Body Electric Style

```javascript
// Parallax ligero (sutíl)
{
  scrollTrigger: {
    trigger: panel,
    scrub: 1,           // Suave
    start: 'top center',
    end: 'bottom center'
  },
  y: -50,              // Movimiento suave
  ease: 'none'
}

// Parallax con Fade
{
  scrollTrigger: {
    trigger: panel,
    scrub: 1,
    start: 'top 80%',
    end: 'top 20%'
  },
  opacity: 1,
  y: 0,
  duration: 1
}

// Parallax Agresivo (más notorio)
{
  scrollTrigger: {
    trigger: panel,
    scrub: 1,
    start: 'top center',
    end: 'bottom center'
  },
  y: -150,             // Movimiento notable
  ease: 'none'
}
```

---

## Flujo de Scroll en Body Electric

```
HERO SECTION (Parallax lento)
    ↓ SCROLL ↓
WELCOME (Fade in + Parallax)
    ↓ SCROLL ↓
WORLD FAMOUS (Parallax + Scale)
    ↓ SCROLL ↓
TATTOO PARLOR (Parallax + Fade)
    ↓ SCROLL ↓
PIERCING STUDIO (Parallax)
    ↓ SCROLL ↓
WE SEE YOU (Parallax + Opacity)
    ↓ SCROLL ↓
GET IN TOUCH (Parallax final)
    ↓ SCROLL ↓
FOOTER/NEXT PAGE
```

---

## Velocidades de Parallax Recomendadas

```
Fondo muy lento:        y: -30   (0.2x velocidad scroll)
Fondo lento:            y: -60   (0.4x velocidad scroll)
Fondo equilibrado:      y: -100  (0.7x velocidad scroll)  ⭐
Fondo rápido:           y: -150  (1.0x velocidad scroll)
Fondo muy rápido:       y: -200  (1.3x velocidad scroll)
```

---

## Ajustes para Mobile

Body Electric probablemente desactiva parallax en móviles porque:
- Mejor performance
- Mejor experiencia de usuario
- Menos "temblonas" las animaciones

```javascript
const isMobile = window.innerWidth < 768

if (!isMobile) {
  // Aplicar parallax solo en desktop
  gsap.to(background, {
    scrollTrigger: {
      trigger: panel,
      scrub: 1
    },
    y: -100,
    ease: 'none'
  })
}
```

---

## Ejemplos de Efectos Visuales

### Efecto 1: Parallax Simple
```
Usuario scrollea hacia abajo 100px
Fondo se mueve solo 30px
Resultado: Fondo "se queda atrás"
```

### Efecto 2: Fade + Parallax
```
Al entrar al viewport:
- opacity: 0 → 1
- y: 50 → 0
- Simultáneamente el fondo parallaxea

Resultado: Entrada suave con sensación de profundidad
```

### Efecto 3: Scale + Parallax
```
Scale crece de 0.95 → 1.05
Al mismo tiempo, parallax mueve el fondo
Resultado: Efecto "enfoque" profesional
```

---

## Checklist de Implementación

- [ ] Instalar GSAP: `npm install gsap`
- [ ] Crear composable `useParallax.ts`
- [ ] Agregar `will-change: transform` al CSS
- [ ] Importar composable en Home.vue
- [ ] Testear en Chrome
- [ ] Testear en Firefox
- [ ] Testear en Safari
- [ ] Testear en Mobile
- [ ] Optimizar velocidades
- [ ] Desactivar parallax en móviles si es necesario
- [ ] Verificar performance (60 FPS)
- [ ] Deploy y verificar en producción

---

## Recursos Útiles

- GSAP Docs: https://gsap.com/docs/v3/
- ScrollTrigger Guide: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP Examples: https://codepen.io/collection/gapQzZ
- Performance Tips: https://gsap.com/resources/help/
