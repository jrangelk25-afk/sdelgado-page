<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!containerRef.value) return

  const sections = gsap.utils.toArray<HTMLElement>('.panel')

  sections.forEach((section) => {
    const bg = section.querySelector('.background') as HTMLElement

    if (bg) {
      gsap.to(bg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers: false
        }
      })
    }
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.killTweensOf('*')
  })
})
</script>

<template>
  <div ref="containerRef" class="home-page">
    <slot />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
