<template>
  <section class="parallax-panel js-parallax-panel">
    <img class="parallax-panel__background js-parallax-bg" :src="backgroundImage" :alt="altText" />
    <div class="parallax-panel__overlay">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  backgroundImage: string
  altText?: string
}>()
</script>

<style scoped>
.parallax-panel {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.parallax-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
  pointer-events: none;
}

.parallax-panel__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  will-change: transform;
  transform: scale(1.1); /* Efecto "respirar" inicial */
}

.parallax-panel__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  gap: 2rem;
}

@media (max-width: 768px) {
  .parallax-panel {
    height: 100vh;
  }

  .parallax-panel__background {
    transform: scale(1); /* Sin scale en mobile para mejor performance */
  }
}
</style>
