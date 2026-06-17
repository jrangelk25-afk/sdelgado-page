<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md transition-all duration-300"
    :class="{ 'shadow-lg py-2': isSticky, 'py-4': !isSticky }"
  >
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link 
        to="/" 
        class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
      >
        <div class="w-50 h-10 flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Sdelgado Logo" 
            class="w-full h-full object-contain"
          />
        </div>
      </router-link>

      <!-- Navigation Toggle (Mobile) -->
      <button
        class="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        :class="{ 'is-open': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation"
      >
        <span 
          class="w-6 h-0.5 bg-white rounded transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white rounded transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white rounded transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
        ></span>
      </button>

      <!-- Navigation Menu -->
      <nav 
        class="hidden md:flex items-center gap-8 transition-all duration-300"
        :class="{ 
          'fixed top-16 left-0 right-0 bottom-0 flex-col gap-4 bg-black/99 p-8 overflow-y-auto !flex z-50 md:relative md:top-auto md:left-auto md:right-auto md:bottom-auto md:bg-transparent md:p-0 md:flex-row md:gap-8 md:!flex md:z-auto': isMobileMenuOpen 
        }"
        role="navigation"
        aria-label="Navegación principal"
      >
        <router-link
          v-for="(label, route) in navLinks"
          :key="route"
          :to="`/${route === 'home' ? '' : route}`"
          class="text-gray-300 text-sm hover:text-amber-400 transition-colors duration-300 relative group"
          @click="closeMobileMenu"
        >
          {{ label }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </router-link>

        <!-- CTA Button -->
        <button
          class="px-4 py-2 bg-amber-400 text-black font-semibold rounded hover:bg-amber-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/30 w-full md:w-auto text-center"
          @click="handleBooking"
          aria-label="Booking"
        >
          Booking
        </button>
      </nav>

      <!-- Mobile Menu Overlay (for visibility) -->
      <transition name="fade">
        <div 
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/50 md:hidden z-40"
          @click="closeMobileMenu"
        ></div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { siteContent } from '@/data/content'

const isMobileMenuOpen = ref(false)
const isSticky = ref(false)

const navLinks: Record<string, string> = {
  home: siteContent.nav.home,
  portfolio: siteContent.nav.portfolio,
  about: siteContent.nav.about,
  shop: siteContent.nav.shop,
  aftercare: siteContent.nav.aftercare,
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

const handleBooking = () => {
  closeMobileMenu()
  // Navigate to contact/booking page
  window.location.href = '/contact'
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
