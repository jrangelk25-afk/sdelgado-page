<template>
  <teleport to="body">
    <transition name="modal">
      <div 
        v-if="isOpen" 
        class="modal-overlay" 
        @click.self="close"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? 'modal-title' : undefined"
      >
        <div class="modal-content" :class="{ [sizeClass]: true }">
          <!-- Header -->
          <div class="modal-header">
            <h2 v-if="title" id="modal-title" class="modal-title">{{ title }}</h2>
            <button
              class="modal-close"
              @click="close"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <slot></slot>
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

interface Props {
  isOpen: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const emit = defineEmits<{
  close: []
}>()

const sizeClass = computed(() => {
  return `modal-${props.size}`
})

const close = () => {
  emit('close')
}

// Handle ESC key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'auto'
    }
  }
)
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1400;
  padding: 1rem;
}

.modal-content {
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  border: 1px solid #2a2a2a;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: modalSlideIn 0.3s ease;
}

/* Sizes */
.modal-sm {
  width: 100%;
  max-width: 500px;
}

.modal-md {
  width: 100%;
  max-width: 700px;
}

.modal-lg {
  width: 100%;
  max-width: 900px;
}

/* Header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #2a2a2a;
}

.modal-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: #a0a0a0;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #ffd700;
}

.modal-close svg {
  width: 24px;
  height: 24px;
}

/* Body */
.modal-body {
  padding: 1.5rem;
  color: #e8e8e8;
}

/* Footer */
.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #2a2a2a;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes modalSlideIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .modal-sm,
  .modal-md,
  .modal-lg {
    max-width: 100%;
  }

  .modal-content {
    max-height: 100vh;
    border-radius: 0;
  }
}
</style>
