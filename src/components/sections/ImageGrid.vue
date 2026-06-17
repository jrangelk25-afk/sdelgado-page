<template>
  <section class="image-grid-section">
    <div class="container">
      <!-- Title -->
      <div v-if="title || description" class="section-header">
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <p v-if="description" class="section-description">{{ description }}</p>
      </div>

      <!-- Grid -->
      <div class="image-grid" :class="{ [gridColsClass]: true }">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="grid-item"
          @click="openLightbox(index)"
        >
          <img
            :src="item.thumbnail || item.image"
            :alt="item.title"
            loading="lazy"
            class="grid-image"
          />
          <div class="grid-overlay">
            <span class="view-text">Ver</span>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div v-if="viewAllUrl" class="view-all-container">
        <router-link :to="viewAllUrl" class="btn btn-outline">
          {{ viewAllText }}
        </router-link>
      </div>
    </div>

    <!-- Lightbox -->
    <Modal :is-open="isLightboxOpen" @close="closeLightbox">
      <div class="lightbox-content">
        <img :src="currentImage?.image" :alt="currentImage?.title" />
        <h3 v-if="currentImage?.title" class="lightbox-title">
          {{ currentImage.title }}
        </h3>
        <p v-if="currentImage?.description" class="lightbox-description">
          {{ currentImage.description }}
        </p>
      </div>

      <template #footer>
        <button
          v-if="hasPrev"
          class="btn btn-secondary"
          @click="prevImage"
        >
          ← Anterior
        </button>
        <button
          v-if="hasNext"
          class="btn btn-secondary"
          @click="nextImage"
        >
          Siguiente →
        </button>
      </template>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGallery } from '@/composables/useGallery'
import Modal from '@/components/ui/Modal.vue'

interface GridItem {
  id: number
  title: string
  image: string
  thumbnail?: string
  description?: string
  [key: string]: any
}

interface Props {
  items: GridItem[]
  title?: string
  description?: string
  columns?: 2 | 3 | 4
  viewAllUrl?: string
  viewAllText?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  viewAllText: 'Ver Todo',
})

const {
  isLightboxOpen,
  currentImage,
  hasNext,
  hasPrev,
  openLightbox: openGallery,
  closeLightbox,
  nextImage,
  prevImage,
} = useGallery()

const gridColsClass = computed(() => {
  return `grid-cols-${props.columns}`
})

const openLightbox = (index: number) => {
  openGallery(props.items, index)
}
</script>

<style scoped>
.image-grid-section {
  padding: 4rem 0;
}

.container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem 0;
}

.section-description {
  font-size: 1.1rem;
  color: #a0a0a0;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Grid */
.image-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
  aspect-ratio: 1;
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
}

.grid-item:hover {
  border-color: #ffd700;
  transform: translateY(-4px);
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover .grid-image {
  transform: scale(1.05);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-item:hover .grid-overlay {
  opacity: 1;
}

.view-text {
  color: #ffd700;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* View All Button */
.view-all-container {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 0.6rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
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

.btn-secondary {
  background-color: #2a2a2a;
  color: #e8e8e8;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.btn-secondary:hover {
  background-color: #3a3a3a;
}

/* Lightbox */
.lightbox-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
  max-height: 70vh;
  object-fit: cover;
}

.lightbox-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.lightbox-description {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-cols-4 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .image-grid-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
