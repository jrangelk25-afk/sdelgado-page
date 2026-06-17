import { onMounted, onUnmounted, ref } from 'vue'

interface ParallaxConfig {
  speed?: number // Multiplier for scroll distance (0.5 = half speed, -0.2 = reverse)
  threshold?: number // Pixels from top to start effect
}

/**
 * Composable for handling parallax scroll effect on background images
 * Uses CSS inset and height for smooth performance
 * 
 * @example
 * const { parallaxRef } = useParallax({ speed: 0.5 })
 * // In template: <div ref="parallaxRef" class="background"></div>
 */
export function useParallax(config: ParallaxConfig = {}) {
  const { speed = 0.5, threshold = 0 } = config
  const parallaxRef = ref<HTMLElement | null>(null)
  let animationFrameId: number | null = null

  const handleScroll = () => {
    if (!parallaxRef.value) return

    // Get element position relative to viewport
    const element = parallaxRef.value
    const rect = element.getBoundingClientRect()
    const elementTop = rect.top
    const windowHeight = window.innerHeight

    // Check if element is in viewport
    if (elementTop > windowHeight || elementTop + rect.height < 0) {
      return
    }

    // Calculate parallax offset
    // When element enters viewport from bottom, apply parallax effect
    const offset = elementTop * speed

    // Apply transform with GPU acceleration
    element.style.transform = `translateY(${offset}px)`
  }

  const onScroll = () => {
    // Use requestAnimationFrame for smooth 60fps performance
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    animationFrameId = requestAnimationFrame(handleScroll)
  }

  onMounted(() => {
    // Initial call
    handleScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
  })

  return { parallaxRef }
}
