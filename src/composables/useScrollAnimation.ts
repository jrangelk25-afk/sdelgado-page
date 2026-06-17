/**
 * Composable para animaciones al scroll
 * Usa Intersection Observer para detectar elementos visibles
 */

export interface UseScrollAnimationReturn {
  observeElement: (element: Element, callback: (isVisible: boolean) => void, options?: IntersectionObserverInit) => void
  setupFadeInAnimation: () => void
  unobserveElement: (element: Element) => void
  disconnect: () => void
}

export function useScrollAnimation(): UseScrollAnimationReturn {
  let observer: IntersectionObserver | null = null

  const observeElement = (
    element: Element,
    callback: (isVisible: boolean) => void,
    options?: IntersectionObserverInit
  ) => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            callback(true)
          }
        })
      }, defaultOptions)
    }

    observer.observe(element)
  }

  const setupFadeInAnimation = () => {
    const elements = document.querySelectorAll('[data-fade-in]')
    elements.forEach((el) => {
      observeElement(el, () => {})
    })
  }

  const unobserveElement = (element: Element) => {
    if (observer) {
      observer.unobserve(element)
    }
  }

  const disconnect = () => {
    if (observer) {
      observer.disconnect()
    }
  }

  return {
    observeElement,
    setupFadeInAnimation,
    unobserveElement,
    disconnect,
  }
}

export default useScrollAnimation
