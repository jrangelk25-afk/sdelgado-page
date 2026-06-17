import { ref, onMounted, onUnmounted, Ref } from 'vue'

/**
 * Composable para lazy loading de imágenes con soporte WebP y srcset
 * Incluye detección de soporte WebP y generación dinámica de srcset
 */
export interface UseImageLoaderReturn {
  imageRef: Ref<HTMLImageElement | null>
  isLoaded: Ref<boolean>
  isError: Ref<boolean>
  supportsWebP: () => boolean
  generateSrcSet: (imagePath: string) => string
  loadImage: (src: string) => void
  setupIntersectionObserver: (src: string, fallbackSrc: string) => void
  getOptimizedUrl: (path: string, width?: number) => string
}

export function useImageLoader(): UseImageLoaderReturn {
  const imageRef = ref<HTMLImageElement | null>(null)
  const isLoaded = ref(false)
  const isError = ref(false)
  const observer = ref<IntersectionObserver | null>(null)

  // Detectar soporte de WebP
  const supportsWebP = (): boolean => {
    if (typeof window === 'undefined') return false
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    try {
      return canvas.toDataURL('image/webp').indexOf('image/webp') === 5
    } catch {
      return false
    }
  }

  // Generar srcset para diferentes tamaños
  const generateSrcSet = (imagePath: string): string => {
    const widths = [640, 1024, 1920]
    const withoutExt = imagePath.substring(0, imagePath.lastIndexOf('.'))
    const ext = imagePath.substring(imagePath.lastIndexOf('.') + 1)
    const format = supportsWebP() ? 'webp' : ext

    return widths
      .map((width) => `${withoutExt}-${width}w.${format} ${width}w`)
      .join(', ')
  }

  // Obtener URL optimizada
  const getOptimizedUrl = (path: string, width?: number): string => {
    if (path.startsWith('http')) return path
    
    if (width) {
      const withoutExt = path.substring(0, path.lastIndexOf('.'))
      const format = supportsWebP() ? 'webp' : 'jpg'
      return `${withoutExt}-${width}w.${format}`
    }
    
    return path
  }

  // Iniciar lazy loading
  const loadImage = (src: string) => {
    if (!imageRef.value) return

    const img = new Image()

    img.onload = () => {
      if (imageRef.value) {
        imageRef.value.src = src
        imageRef.value.style.opacity = '1'
        isLoaded.value = true
      }
    }

    img.onerror = () => {
      isError.value = true
    }

    img.src = src
  }

  // Setup Intersection Observer
  const setupIntersectionObserver = (src: string, fallbackSrc: string) => {
    if (!('IntersectionObserver' in window)) {
      loadImage(src)
      return
    }

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(src)
          if (observer.value) {
            observer.value.unobserve(imageRef.value!)
          }
        }
      })
    }, {
      rootMargin: '50px',
    })

    if (imageRef.value) {
      imageRef.value.src = fallbackSrc
      observer.value.observe(imageRef.value)
    }
  }

  onUnmounted(() => {
    if (observer.value && imageRef.value) {
      observer.value.unobserve(imageRef.value)
      observer.value.disconnect()
    }
  })

  return {
    imageRef,
    isLoaded,
    isError,
    supportsWebP,
    generateSrcSet,
    loadImage,
    setupIntersectionObserver,
    getOptimizedUrl,
  }
}

export default useImageLoader
