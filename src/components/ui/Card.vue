<template>
  <div class="card" :class="{ hoverable }">
    <!-- Image -->
    <div v-if="image" class="card-image">
      <img :src="image" :alt="title" loading="lazy" />
    </div>

    <!-- Content -->
    <div class="card-content">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <p v-if="description" class="card-description">{{ description }}</p>

      <!-- Slot for additional content -->
      <slot></slot>

      <!-- Footer -->
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  hoverable: true,
})
</script>

<style scoped>
.card {
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card.hoverable:hover {
  border-color: #ffd700;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.15);
}

/* Image */
.card-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card.hoverable:hover .card-image img {
  transform: scale(1.05);
}

/* Content */
.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.card-description {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.5;
  flex: 1;
}

/* Footer */
.card-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #2a2a2a;
}
</style>
