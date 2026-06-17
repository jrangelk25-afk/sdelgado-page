# Guía de Setup - Portafolio Sdelgado

## Prerequisitos

- Node.js (v18+)
- npm o yarn
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## Instalación Local

```bash
# Clonar el repositorio
git clone <repo-url>
cd sdelgado-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de la build de producción
npm run preview
```

## Estructura del Proyecto

```
sdelgado-web/
├── src/
│   ├── components/
│   │   ├── common/        # Header, Footer, Button
│   │   ├── sections/      # HeroSection, ImageGrid
│   │   └── ui/            # Card, Modal
│   ├── composables/       # Lógica reutilizable
│   ├── data/              # Datos del portafolio
│   ├── pages/             # Páginas principales
│   ├── router/            # Configuración de rutas
│   ├── assets/            # Imágenes, estilos, fuentes
│   ├── App.vue            # Componente raíz
│   └── main.ts            # Punto de entrada
├── public/                # Assets estáticos
├── index.html             # HTML principal
└── package.json           # Dependencias
```

## Variables de Configuración

Editar `src/data/tattooer.ts` para actualizar:
- Nombre del tatuador
- Foto de perfil
- Especialidades
- Información de contacto
- Enlaces de redes sociales

## Agregar Tatuajes al Portafolio

1. Editar `src/data/portfolio.ts`
2. Agregar item con estructura:
```typescript
{
  id: 15,
  title: "Nombre del Tatuaje",
  image: "/images/portfolio/15.jpg",
  thumbnail: "/images/portfolio/15-thumb.jpg",
  style: "Estilo",
  date: "2024-01-15",
  description: "Descripción breve",
  size: "Grande"
}
```

3. Colocar imágenes en `public/images/portfolio/`

## Actualizar Contenido

- **About**: `src/data/tattooer.ts` (sección `about`)
- **Aftercare**: `src/data/content.ts` (sección `aftercare`)
- **Contact**: Editar el formulario en `src/pages/Contact.vue`

## Composables Disponibles

- `useGallery()` - Navegación de galería con lightbox
- `useImageLoader()` - Lazy loading y optimización de imágenes
- `useSmoothScroll()` - Scroll suave a elementos
- `useContact()` - Validación y envío de formulario
- `useScrollAnimation()` - Animaciones al scroll

## Customización de Estilos

### Colores
- Primario (Oro): `#ffd700`
- Fondo: `#0f0f0f`
- Texto: `#e8e8e8`
- Acentos: `#1a1a1a`, `#2a2a2a`

Tailwind CSS está configurado para usar estos colores. Editar `tailwind.config.js` para cambiar.

### Animaciones
Las animaciones están en `src/assets/styles/animations.css`. Clases disponibles:
- `.animate-fade-in`
- `.animate-slide-up`
- `.animate-slide-in-left`
- `.animate-slide-in-right`
- `.animate-scale-in`

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Subir carpeta 'dist' a rama 'gh-pages'
```

## SEO

El proyecto incluye:
- Meta tags dinámicos por página
- Open Graph tags
- Twitter Card tags
- Schema.org structured data
- Sitemap.xml y robots.txt
- Keywords y descripción optimizadas

Actualizar URLs en `index.html` y `router/index.ts` para producción.

## Performance

Técnicas implementadas:
- Lazy loading de imágenes
- Code splitting por rutas
- WebP support detection
- Responsive images con srcset
- Minificación CSS/JS
- Gzip compression

Verificar con Lighthouse: Chrome DevTools → Lighthouse

## Troubleshooting

**Imágenes no cargan**
- Verificar que estén en `public/images/`
- Usar rutas relativas `/images/portfolio/...`

**Estilos no aplican**
- Limpiar caché: `rm -rf dist && npm run build`
- Verificar que Tailwind config esté activo

**Formulario no envía**
- Verificar que useContact está importado correctamente
- Revisar la consola del navegador para errores

## Contacto y Soporte

Para ayuda con el proyecto o reportar bugs, contactar a Sdelgado.
