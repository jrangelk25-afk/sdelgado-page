<template>
  <section class="hero" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <!-- Overlay -->
    <div class="hero-overlay"></div>

    <!-- Content -->
    <div class="hero-container">
      <div class="hero-content">
        <h1 v-if="title" class="hero-title">{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>

        <!-- Slot for custom content -->
        <slot></slot>

        <!-- CTA Buttons -->
        <div v-if="(primaryCta || secondaryCta)" class="hero-ctas">
          <button
            v-if="primaryCta"
            class="btn btn-primary"
            @click="$emit('primary-cta')"
          >
            {{ primaryCta }}
          </button>
          <button
            v-if="secondaryCta"
            class="btn btn-outline"
            @click="$emit('secondary-cta')"
          >
            {{ secondaryCta }}
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div v-if="showScroll" class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  backgroundImage?: string
  primaryCta?: string
  secondaryCta?: string
  showScroll?: boolean
  minHeight?: string
}

withDefaults(defineProps<Props>(), {
  backgroundImage: '/images/hero-bg.jpg',
  minHeight: '100vh',
  showScroll: true,
})

defineEmits<{
  'primary-cta': []
  'secondary-cta': []
}>()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: v-bind(minHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7),
    rgba(15, 15, 15, 0.5)
  );
}

.hero-container {
  position: relative;
  z-index: 10;
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  text-align: center;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #e8e8e8;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background-color: #ffd700;
  color: #000000;
}

.btn-primary:hover {
  background-color: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

.btn-outline {
  background-color: transparent;
  color: #ffd700;
  border: 2px solid #ffd700;
}

.btn-outline:hover {
  background-color: rgba(255, 215, 0, 0.1);
  transform: translateY(-2px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 30px;
  height: 50px;
  border: 2px solid #ffd700;
  border-radius: 15px;
  position: relative;
  background: rgba(255, 215, 0, 0.1);
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 10px;
  background: #ffd700;
  border-radius: 1px;
  animation: slideDown 1.5s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes slideDown {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-ctas {
    gap: 0.5rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
