import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationConfig {
  scrubValue?: number
  parallaxSpeed?: number
  scaleEffect?: boolean
  fadeRange?: { start: string; end: string }
  disableOnMobile?: boolean
  mobileBreakpoint?: number
  smoothScroll?: boolean
}

const DEFAULT_CONFIG: ScrollAnimationConfig = {
  scrubValue: 1,
  parallaxSpeed: -100,
  scaleEffect: true,
  fadeRange: { start: 'top 80%', end: 'top 20%' },
  disableOnMobile: true,
  mobileBreakpoint: 768,
  smoothScroll: true,
}

let isInitialized = ref(false)
let lenis: Lenis | null = null

export function useScrollAnimations(config: ScrollAnimationConfig = {}) {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config }

  const isMobile = () => {
    return window.innerWidth < mergedConfig.mobileBreakpoint!
  }

  const shouldDisableAnimation = () => {
    return mergedConfig.disableOnMobile && isMobile()
  }

  // Initialize Lenis for smooth scrolling
  const initLenis = () => {
    if (!mergedConfig.smoothScroll || isMobile()) return

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    let raf = (time: number) => {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis!.raf(time * 1000)
    })
  }

  const initParallaxEffects = () => {
    if (shouldDisableAnimation()) return

    gsap.utils.toArray<any>('.js-parallax-panel').forEach((panel) => {
      const background = panel.querySelector('.js-parallax-bg')

      if (background) {
        gsap.to(background, {
          scrollTrigger: {
            trigger: panel,
            start: 'top center',
            end: 'bottom center',
            scrub: mergedConfig.scrubValue,
            markers: false,
          },
          y: mergedConfig.parallaxSpeed,
          ease: 'none',
        })
      }
    })

    ScrollTrigger.refresh()
  }

  const initScaleEffects = () => {
    if (!mergedConfig.scaleEffect || shouldDisableAnimation()) return

    gsap.utils.toArray<any>('.js-parallax-bg').forEach((bg) => {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: bg.closest('.js-parallax-panel'),
          start: 'top center',
          end: 'bottom center',
          scrub: mergedConfig.scrubValue,
          markers: false,
        },
        scale: 1,
        ease: 'none',
      })

      // Set initial scale
      bg.style.transformOrigin = 'center center'
      gsap.set(bg, { scale: 1.1 })
    })
  }

  const initFadeInEffects = () => {
    if (shouldDisableAnimation()) return

    gsap.utils.toArray<any>('.js-fade-in').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: mergedConfig.fadeRange!.start,
          end: mergedConfig.fadeRange!.end,
          scrub: mergedConfig.scrubValue,
          markers: false,
        },
        opacity: 0,
        y: 50,
        ease: 'power2.out',
      })
    })
  }

  const initAllAnimations = () => {
    if (isInitialized.value) return

    if (mergedConfig.smoothScroll) {
      initLenis()
    }

    initParallaxEffects()
    initScaleEffects()
    initFadeInEffects()

    isInitialized.value = true
  }

  const killAllAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    if (lenis) {
      lenis.destroy()
      lenis = null
    }

    isInitialized.value = false
  }

  const refreshAnimations = () => {
    ScrollTrigger.refresh()
    if (lenis) {
      lenis.resize()
    }
  }

  const handleWindowResize = () => {
    // Reinitialize on resize (mobile/desktop toggle)
    killAllAnimations()
    setTimeout(() => {
      initAllAnimations()
    }, 100)
  }

  onMounted(() => {
    // Wait for images to load
    window.addEventListener('load', initAllAnimations)
    // Also initialize after a small delay in case images are cached
    setTimeout(initAllAnimations, 100)
    // Handle window resize
    window.addEventListener('resize', handleWindowResize)
  })

  onUnmounted(() => {
    window.removeEventListener('load', initAllAnimations)
    window.removeEventListener('resize', handleWindowResize)
    killAllAnimations()
  })

  return {
    initAllAnimations,
    killAllAnimations,
    refreshAnimations,
    isMobile,
  }
}
