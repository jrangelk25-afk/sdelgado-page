<template>
  <p :class="['animated-subtitle', 'js-fade-in']">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'instruction' | 'description'
}>()
</script>

<style scoped>
.animated-subtitle {
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.8;
  will-change: opacity, transform;
}

@media (max-width: 768px) {
  .animated-subtitle {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 480px) {
  .animated-subtitle {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
}
</style>
