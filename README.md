# Sdelgado - Portafolio Web de Tatuador

Sitio web profesional para Sdelgado, tatuador independiente. Construido con Vue 3, Vite y Tailwind CSS.

## 🚀 Quick Start

### Requisitos
- Node.js 20.11+ 
- pnpm

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd sdelgado-web

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview de build
pnpm run preview
```

El sitio estará disponible en `http://localhost:5173/`

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── fonts/          # Fuentes locales
│   └── styles/         # CSS global, variables, animaciones
├── components/
│   ├── common/         # Header, Footer, Button, etc.
│   ├── sections/       # HeroSection, ImageGrid, etc.
│   └── ui/             # Modal, Lightbox, Card, etc.
├── composables/        # Lógica reutilizable (Vue 3)
│   ├── useGallery.js
│   ├── useImageLoader.js
│   ├── useSmoothScroll.js
│   └── useContact.js
├── data/               # Datos estáticos
│   ├── tattooer.js     # Información del tatuador
│   ├── portfolio.js    # Galería de tatuajes
│   └── content.js      # Textos y contenido
├── pages/              # Componentes de página (rutas)
│   ├── Home.vue
│   ├── Portfolio.vue
│   ├── About.vue
│   ├── Aftercare.vue
│   ├── Contact.vue
│   └── NotFound.vue
├── router/
│   └── index.js        # Configuración de Vue Router
├── App.vue             # Componente raíz
└── main.js             # Punto de entrada
```

## 🎨 Personalización

### Actualizar Información del Tatuador

Edita `src/data/tattooer.js`:

```javascript
export const tattooer = {
  name: 'Tu Nombre',
  email: 'tu@email.com',
  instagram: 'https://instagram.com/tuinstagram',
  // ...
}
```

### Actualizar Galería

Edita `src/data/portfolio.js`:

```javascript
export const portfolioItems = [
  {
    id: 1,
    title: 'Nombre del Tatuaje',
    image: '/images/portfolio/1.jpg',
    style: 'Estilo',
    date: '2024-01-15',
    description: 'Descripción',
  },
  // ...
]
```

### Agregar Contenido Estático

Edita `src/data/content.js` para textos de secciones, FAQs, etc.

## 🎯 Características Principales

- ✅ **Responsive**: Mobile-first design
- ✅ **SEO**: Meta tags dinámicos, Open Graph, Structured data
- ✅ **Performance**: Lazy loading de imágenes, code splitting
- ✅ **Accesibilidad**: ARIA labels, navegación por teclado
- ✅ **Dark Mode**: Tema oscuro elegante
- ✅ **Lightbox**: Galería interactiva
- ✅ **Formulario de Contacto**: Validación y múltiples canales
- ✅ **Animaciones**: Smooth scroll, fade-ins, transiciones

## 📊 Stack Tecnológico

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Router**: Vue Router 4
- **Estilos**: Tailwind CSS v4
- **CSS-in-JS**: PostCSS

## 📖 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio con hero section |
| `/portfolio` | Galería completa de trabajos |
| `/about` | Información del tatuador |
| `/aftercare` | Guía de cuidados post-tatuaje |
| `/contact` | Formulario de contacto |

## 🔧 Desarrollo

### Comandos disponibles

```bash
# Desarrollo
pnpm run dev

# Build
pnpm run build

# Preview de build
pnpm run preview

# Tests
pnpm run test:run

# Lint (si está configurado)
pnpm run lint
```

### Agregar Nuevos Componentes

1. Crear archivo en `src/components/`
2. Importar en la página donde se use
3. Usar con `<ComponentName />`

### Agregar Nuevas Rutas

1. Crear archivo en `src/pages/`
2. Agregar ruta en `src/router/index.js`
3. Accesible en `router-link` o navegación

## 📱 Responsive

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recomendado)

```bash
pnpm add -g vercel
vercel
```

### Netlify

```bash
pnpm add -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

Editar `vite.config.js` y agregar `base: '/repo-name/'`

## 🔐 Variables de Entorno

Crear `.env.local`:

```
VITE_API_URL=https://api.ejemplo.com
VITE_WHATSAPP_NUMBER=+1234567890
```

## 📝 Notas de Desarrollo

- Las páginas usan lazy loading automático
- Los datos están centralizados en `/data/`
- Los composables contienen lógica reutilizable
- Los estilos usan Tailwind CSS utilities
- Las animaciones están en `/assets/styles/animations.css`

## 🐛 Troubleshooting

### "Port 5173 ya está en uso"
```bash
pnpm run dev -- --port 3000
```

### Build falla
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Imágenes no cargan
Verificar que estén en `/public/images/` y usar rutas relativas

## 📄 Licencia

© 2024 Sdelgado. Todos los derechos reservados.

## 📞 Soporte

Para cambios o mejoras, contacta directamente.

---

**Last Updated**: Junio 2024
**Status**: ✅ En Desarrollo
