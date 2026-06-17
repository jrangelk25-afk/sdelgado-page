<template>
  <component
    :is="tag"
    :href="href"
    :type="tag === 'button' ? 'button' : undefined"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :aria-disabled="disabled || loading"
    @click="emit('click', $event)"
    v-bind="$attrs"
  >
    <!-- Loading State -->
    <template v-if="loading">
      <svg class="spinner" viewBox="0 0 50 50" :class="spinnerClasses" aria-hidden="true">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          :stroke="spinnerColor"
          stroke-width="2"
        />
      </svg>
    </template>

    <!-- Normal Content -->
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Determine if this should render as a link or button
const tag = computed(() => (props.href ? 'a' : 'button'))

// Spinner color based on variant
const spinnerColor = computed(() => {
  switch (props.variant) {
    case 'primary':
      return '#000000'
    case 'outline':
      return '#FFD700'
    case 'secondary':
    default:
      return '#E8E8E8'
  }
})

// Spinner classes
const spinnerClasses = computed(() => ({
  'w-5 h-5 animate-spin': true,
}))

// Size classes
const sizeClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 transition-all duration-300 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2'
  switch (props.size) {
    case 'sm':
      return `${base} px-3 py-2 text-sm`
    case 'lg':
      return `${base} px-6 py-3 text-lg`
    case 'md':
    default:
      return `${base} px-4 py-2.5 text-base`
  }
})

// Variant and interaction classes
const variantClasses = computed(() => {
  const base = 'no-underline'
  const disabledState = props.disabled || props.loading 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : 'cursor-pointer'

  switch (props.variant) {
    case 'primary':
      // Gold button with black text - primary action
      return `${base} ${disabledState} bg-accent text-primary shadow-md transition-all duration-200 ease-out hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-px active:shadow-sm focus:ring-accent focus:ring-offset-dark`

    case 'secondary':
      // Dark button with light text - alternative action
      return `${base} ${disabledState} bg-border text-text shadow-md transition-all duration-200 ease-out hover:bg-gray-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-px active:shadow-sm focus:ring-text focus:ring-offset-dark`

    case 'outline':
      // Transparent with gold border - subtle action
      return `${base} ${disabledState} bg-transparent text-accent border-2 border-accent shadow-sm transition-all duration-200 ease-out hover:bg-yellow-500 hover:bg-opacity-10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-px active:shadow-none active:bg-yellow-500 active:bg-opacity-20 focus:ring-accent focus:ring-offset-dark`

    default:
      return base
  }
})

// Combine all classes
const buttonClasses = computed(() => [sizeClasses.value, variantClasses.value])
</script>

<style scoped>
/* Smooth animation for loading spinner */
.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Button base transitions */
button, a[type]:not([href="#"]) {
  transition: all var(--transition-base, 300ms ease-in-out);
}

/* Hover state lift effect */
button:not(:disabled):hover, 
a:not(:disabled):hover {
  transform: translateY(-2px);
}

/* Active state press effect */
button:not(:disabled):active, 
a:not(:disabled):active {
  transform: translateY(0px);
  transition-duration: 100ms;
}

/* Focus state for accessibility */
button:focus-visible, 
a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Disabled state */
button:disabled, 
a:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
