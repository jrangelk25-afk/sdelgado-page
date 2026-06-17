import { ref, computed, Ref, ComputedRef, onMounted, onUnmounted, watch } from 'vue'

/**
 * Composable para manejar la galería de imágenes con lightbox
 * Incluye navegación por teclado (flechas, ESC)
 */
export interface UseGalleryReturn {
  isLightboxOpen: Ref<boolean>
  currentImageIndex: Ref<number>
  currentImage: ComputedRef<any>
  hasNext: ComputedRef<boolean>
  hasPrev: ComputedRef<boolean>
  openLightbox: (imageArray: any[], startIndex?: number) => void
  closeLightbox: () => void
  nextImage: () => void
  prevImage: () => void
  goToImage: (index: number) => void
}

export function useGallery(): UseGalleryReturn {
  const isLightboxOpen = ref(false)
  const currentImageIndex = ref(0)
  const images = ref<any[]>([])

  const currentImage = computed(() => {
    return images.value[currentImageIndex.value]
  })

  const hasNext = computed(() => {
    return currentImageIndex.value < images.value.length - 1
  })

  const hasPrev = computed(() => {
    return currentImageIndex.value > 0
  })

  const openLightbox = (imageArray: any[], startIndex: number = 0) => {
    images.value = imageArray
    currentImageIndex.value = startIndex
    isLightboxOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    isLightboxOpen.value = false
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (hasNext.value) {
      currentImageIndex.value++
    }
  }

  const prevImage = () => {
    if (hasPrev.value) {
      currentImageIndex.value--
    }
  }

  const goToImage = (index: number) => {
    if (index >= 0 && index < images.value.length) {
      currentImageIndex.value = index
    }
  }

  // Keyboard navigation
  const handleKeydown = (event: KeyboardEvent) => {
    if (!isLightboxOpen.value) return

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        nextImage()
        break
      case 'ArrowLeft':
        event.preventDefault()
        prevImage()
        break
      case 'Escape':
        event.preventDefault()
        closeLightbox()
        break
    }
  }

  watch(isLightboxOpen, (newVal) => {
    if (newVal) {
      document.addEventListener('keydown', handleKeydown)
    } else {
      document.removeEventListener('keydown', handleKeydown)
    }
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  return {
    isLightboxOpen,
    currentImageIndex,
    currentImage,
    hasNext,
    hasPrev,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    goToImage,
  }
}

export default useGallery
