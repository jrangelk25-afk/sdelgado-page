# Guía de Deployment - Portafolio Sdelgado

## Pre-Deployment Checklist

- [ ] Actualizar URL del sitio en `index.html`
- [ ] Actualizar URLs en `router/index.ts`
- [ ] Agregar imágenes del portafolio
- [ ] Probar en navegadores múltiples
- [ ] Verificar responsive en móvil
- [ ] Correr Lighthouse audit
- [ ] Configurar dominio

## Opción 1: Vercel (Recomendado)

Vercel es la plataforma más fácil para deployar Vue 3 + Vite.

### Pasos:

1. **Crear cuenta en Vercel**
   - Ir a https://vercel.com
   - Registrarse con GitHub

2. **Conectar repositorio**
   ```bash
   # Opción A: Usar Vercel CLI
   npm install -g vercel
   vercel
   
   # Opción B: Usando el dashboard
   # Import Project → Seleccionar repositorio
   ```

3. **Configurar proyecto**
   - Framework: Vue.js
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy automático**
   - Los cambios en main branch se despliegan automáticamente
   - Pull requests obtienen preview URLs

### Ventajas:
- Deployments automáticos
- CDN global
- SSL gratis
- Preview en PRs
- Analytics incluido

## Opción 2: Netlify

### Pasos:

1. **Crear cuenta**
   - https://netlify.com

2. **Conectar repositorio**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Configurar en dashboard**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Configurar dominio**
   - Domain settings → Connect custom domain

### Ventajas:
- Fácil de configurar
- CDN global
- Pre-rendering automático
- Functions incluidas

## Opción 3: GitHub Pages

### Pasos:

1. **Editar vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/sebas-page/',  // o '/' si es un user site
   })
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Subir a rama gh-pages**
   ```bash
   npx gh-pages -d dist
   ```

4. **Configurar en GitHub**
   - Settings → Pages
   - Source: gh-pages branch

## Opción 4: Self-Hosted (VPS/Servidor)

### Requerimientos:
- Servidor con Node.js
- Nginx o Apache
- SSL certificate

### Pasos:

1. **Build localmente**
   ```bash
   npm run build
   ```

2. **Subir archivos**
   ```bash
   scp -r dist/* user@host:/var/www/html/
   ```

3. **Configurar Nginx**
   ```nginx
   server {
     listen 443 ssl;
     server_name sdelgado.com;
     root /var/www/html;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
     
     ssl_certificate /etc/letsencrypt/live/sdelgado.com/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/sdelgado.com/privkey.pem;
   }
   ```

4. **SSL con Let's Encrypt**
   ```bash
   sudo certbot certonly --standalone -d sdelgado.com
   ```

## Post-Deployment

### 1. SEO Checklist
- [ ] Registrar en Google Search Console
- [ ] Registrar en Bing Webmaster Tools
- [ ] Submitter sitemap.xml
- [ ] Verificar robots.txt
- [ ] Verificar meta tags

### 2. Performance
```bash
# Lighthouse audit
# Chrome DevTools → Lighthouse
# Target: Performance >90, Accessibility >90, SEO >90
```

### 3. Analytics
```html
<!-- Agregar a index.html si usas Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Monitoreo
- Uptime monitoring con Pingdom/UptimeRobot
- Error tracking con Sentry
- Performance monitoring con Vercel Analytics

## Actualizaciones Continuas

### Agregar nuevos tatuajes:
1. Editar `src/data/portfolio.ts`
2. Subir imágenes a `public/images/portfolio/`
3. Commit y push
4. Auto-deploy en Vercel/Netlify

### Actualizar contenido:
1. Editar archivos en `src/data/`
2. Commit y push
3. Auto-deploy

## CI/CD Pipeline (Opcional)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Troubleshooting

### Sitio no carga en dominio personalizado
- Verificar DNS records
- Verificar certificado SSL
- Verificar settings en plataforma

### 404 en rutas específicas
- Asegurarse que servidor redirige a index.html
- Verificar router configuration

### Imágenes no cargan
- Verificar rutas (deben ser `/images/...`)
- Verificar que están en `public/images/`
- Verificar permisos de archivo

### Build fallu
```bash
# Limpiar y reintentar
rm -rf node_modules dist
npm install
npm run build
```

## Dominio Personalizado

### 1. Comprar dominio
- Registrar en Namecheap, GoDaddy, etc.

### 2. Configurar DNS
Apuntar A records a plataforma (Vercel/Netlify)

### 3. Activar SSL
- Vercel/Netlify lo hace automáticamente
- Esperar 24-48 horas para propagación

## Costos Estimados

| Plataforma | Costo | Notas |
|-----------|-------|-------|
| Vercel    | Gratis | $20+ para features premium |
| Netlify   | Gratis | $19+ para features premium |
| Dominio   | $10-15/año | Varía por registrador |
| Email     | $6/mes | Opcional, Google Workspace |

## Soporte

Para problemas, consultar:
- Docs oficial de la plataforma
- Stack Overflow
- Vue 3 Discord community
