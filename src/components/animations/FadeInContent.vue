<template>
  <div class="fade-in-content js-fade-in">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  delay?: number
}>()
</script>

<style scoped>
.fade-in-content {
  will-change: opacity, transform;
  opacity: 0; /* Inicia invisible para que GSAP lo anime */
  transform: translateY(50px); /* Inicia 50px abajo */
}
</style>
