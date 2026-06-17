<template>
  <h2 :class="['animated-title', `animated-title--${size}`, 'js-fade-in']">
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'small' | 'medium' | 'large' | 'hero'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
})

const sizeClass = computed(() => ({
  'animated-title--small': props.size === 'small',
  'animated-title--medium': props.size === 'medium',
  'animated-title--large': props.size === 'large',
  'animated-title--hero': props.size === 'hero',
}))
</script>

<style scoped>
.animated-title {
  margin: 0;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  will-change: opacity, transform;
}

.animated-title--small {
  font-size: 1.8rem;
}

.animated-title--medium {
  font-size: 2.5rem;
}

.animated-title--large {
  font-size: 4rem;
}

.animated-title--hero {
  font-size: 5rem;
}

@media (max-width: 768px) {
  .animated-title--small {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  .animated-title--medium {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .animated-title--large {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .animated-title--hero {
    font-size: 3rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 480px) {
  .animated-title--small {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .animated-title--medium {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .animated-title--large {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .animated-title--hero {
    font-size: 2rem;
    letter-spacing: 1px;
  }
}
</style>
