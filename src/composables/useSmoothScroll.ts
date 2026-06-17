/**
 * Composable para smooth scroll
 */
export interface UseSmoothScrollReturn {
  scrollToElement: (selector: string) => void
  scrollToTop: () => void
  scrollToHash: (hash: string) => void
  isScrollAtTop: () => boolean
  isScrollAtBottom: () => boolean
}

export function useSmoothScroll(): UseSmoothScrollReturn {
  const scrollToElement = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToHash = (hash: string) => {
    if (hash) {
      const id = hash.replace('#', '')
      scrollToElement(`#${id}`)
    }
  }

  const isScrollAtTop = (): boolean => {
    return window.scrollY === 0
  }

  const isScrollAtBottom = (): boolean => {
    return (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    )
  }

  return {
    scrollToElement,
    scrollToTop,
    scrollToHash,
    isScrollAtTop,
    isScrollAtBottom,
  }
}

export default useSmoothScroll
