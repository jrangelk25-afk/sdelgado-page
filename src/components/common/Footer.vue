<template>
  <footer class="bg-black border-t border-gray-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
        <!-- Brand Section -->
        <div class="flex flex-col gap-4">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            Sdelgado
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Tatuador profesional especializado en diseños únicos y personalizados con más de 6 años de experiencia.
          </p>
          <!-- Social Links -->
          <div class="flex gap-3 mt-2">
            <a
              :href="tattooer.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram"
              title="Sígueme en Instagram"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001-2.881 1.44 1.44 0 010 2.881z"/>
              </svg>
            </a>
            <a
              :href="tattooer.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black transition-all duration-300 hover:-translate-y-1"
              aria-label="WhatsApp"
              title="Contáctame por WhatsApp"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-2.997 1.746-4.888 5.32-4.888 9.048 0 1.959.404 3.86 1.199 5.652L2.97 21.7l6.175-1.62c1.997 1.086 4.088 1.66 6.251 1.66h.006c5.504 0 9.976-4.465 9.976-9.977 0-2.665-.57-5.17-1.693-7.583-1.123-2.412-2.747-4.57-4.885-6.04C15.009 2.577 12.662 2.08 10.051 2.08"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">{{ siteContent.footer.quickLinks }}</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                {{ siteContent.nav.home }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/portfolio"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                {{ siteContent.nav.portfolio }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                {{ siteContent.nav.about }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/aftercare"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                {{ siteContent.nav.aftercare }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                {{ siteContent.nav.contact }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Information Section -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Contacto</h4>
          <ul class="space-y-3">
            <li>
              <a
                :href="`mailto:${tattooer.email}`"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 break-all"
                aria-label="Enviar email"
              >
                {{ tattooer.email }}
              </a>
            </li>
            <li>
              <a
                :href="`tel:${tattooer.phone.replace(/\s/g, '')}`"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
                aria-label="Llamar por teléfono"
              >
                {{ tattooer.phone }}
              </a>
            </li>
            <li>
              <a
                :href="tattooer.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 inline-flex items-center gap-2"
                aria-label="Sígueme en Instagram"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                :href="tattooer.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 inline-flex items-center gap-2"
                aria-label="Contactar por WhatsApp"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-2.997 1.746-4.888 5.32-4.888 9.048 0 1.959.404 3.86 1.199 5.652L2.97 21.7l6.175-1.62c1.997 1.086 4.088 1.66 6.251 1.66h.006c5.504 0 9.976-4.465 9.976-9.977 0-2.665-.57-5.17-1.693-7.583-1.123-2.412-2.747-4.57-4.885-6.04C15.009 2.577 12.662 2.08 10.051 2.08"/>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <!-- Working Hours / Info Section -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Información</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">Especialidades</p>
              <p class="text-gray-400">
                {{ tattooer.specialties.slice(0, 3).join(', ') }}
              </p>
            </li>
            <li>
              <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">Experiencia</p>
              <p class="text-gray-400">{{ tattooer.about.experience }}</p>
            </li>
            <li>
              <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">Clientes Satisfechos</p>
              <p class="text-gray-400">{{ tattooer.about.clientsSatisfied }}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">{{ siteContent.footer.copyright }}</p>
        <div class="flex gap-4 text-sm">
          <a
            href="#privacy"
            class="text-gray-500 hover:text-amber-400 transition-colors duration-300"
            aria-label="Política de privacidad"
          >
            {{ siteContent.footer.privacy }}
          </a>
          <span class="text-gray-700">•</span>
          <a
            href="#legal"
            class="text-gray-500 hover:text-amber-400 transition-colors duration-300"
            aria-label="Aviso legal"
          >
            {{ siteContent.footer.legalNotice }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteContent } from '@/data/content'
import { tattooer } from '@/data/tattooer'
</script>

<style scoped>
/* Smooth transitions for interactive elements */
a {
  @apply transition-colors duration-300;
}

/* Ensure footer links have proper focus states for accessibility */
a:focus-visible {
  outline: 2px solid #FFD700;
  outline-offset: 2px;
}
</style>
