<template>
  <component
    :is="tag"
    :to="href"
    :href="href"
    @click="handleClick"
    :class="['animated-cta', 'js-fade-in', { 'animated-cta--active': isActive }]"
  >
    <span class="animated-cta__text">{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  text: string
  href?: string
  isActive?: boolean
  variant?: 'primary' | 'secondary'
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  external: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const tag = computed(() => {
  if (props.external) return 'a'
  if (props.href && !props.href.startsWith('http')) return 'router-link'
  return 'a'
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.animated-cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 2px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
  margin-top: 1rem;
  will-change: background-color, color, transform;
}

.animated-cta:hover,
.animated-cta--active {
  background: #ffffff;
  color: #000000;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .animated-cta {
    padding: 0.8rem 2rem;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 480px) {
  .animated-cta {
    padding: 0.6rem 1.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
}
</style>
