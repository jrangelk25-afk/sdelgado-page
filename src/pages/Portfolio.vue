<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <div class="portfolio-hero">
      <div class="container">
        <h1 class="portfolio-title">PORTFOLIO</h1>
        <p class="portfolio-subtitle">
          Explora la colección completa de trabajos realizados
        </p>
      </div>
    </div>

    <!-- Filters Section -->
    <section class="filters-section" v-if="uniqueStyles.length > 1">
      <div class="container">
        <h2 class="filters-heading">FILTER BY STYLE</h2>
        <div class="filters">
          <button
            :class="['filter-btn', { active: selectedStyle === null }]"
            @click="selectedStyle = null"
          >
            All Works
          </button>
          <button
            v-for="style in uniqueStyles"
            :key="style"
            :class="['filter-btn', { active: selectedStyle === style }]"
            @click="selectedStyle = style"
          >
            {{ style }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="container">
        <ImageGrid
          :items="filteredPortfolio"
          :columns="3"
        />

        <!-- No results message -->
        <div v-if="filteredPortfolio.length === 0" class="no-results">
          <p>No hay trabajos en esta categoría</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿TE INTERESA UN DISEÑO SIMILAR?</h2>
          <p class="cta-text">
            Contacta conmigo para consultar sobre tu proyecto
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Empezar Consulta
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ImageGrid from '@/components/sections/ImageGrid.vue'
import { portfolioItems, getAllStyles } from '@/data/portfolio'
import type { PortfolioItem } from '@/data/portfolio'

const selectedStyle = ref<string | null>(null)
const uniqueStyles = getAllStyles()

const filteredPortfolio = computed((): PortfolioItem[] => {
  if (selectedStyle.value === null) {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.style === selectedStyle.value)
})
</script>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* Hero Section */
.portfolio-hero {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
  padding: 6rem 0;
  border-bottom: 1px solid #2a2a2a;
  margin-top: 70px;
  text-align: center;
}

.portfolio-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.portfolio-subtitle {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 400;
}

/* Filters Section */
.filters-section {
  padding: 4rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.filters-heading {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 2rem 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #ffd700;
  background-color: transparent;
  color: #ffd700;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.filter-btn:hover {
  background-color: rgba(255, 215, 0, 0.1);
  transform: translateY(-2px);
}

.filter-btn.active {
  background-color: #ffd700;
  color: #000000;
  border-color: #ffd700;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

/* Gallery Section */
.gallery-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.no-results {
  text-align: center;
  padding: 4rem 1rem;
  color: #a0a0a0;
  font-size: 1.1rem;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  border-top: 1px solid #2a2a2a;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-text {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0 0 2rem 0;
  line-height: 1.8;
}

.btn {
  padding: 0.85rem 2rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background-color: #ffd700;
  color: #000000;
}

.btn-primary:hover {
  background-color: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-hero {
    padding: 3rem 0;
  }

  .portfolio-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .filters-heading {
    font-size: 1.3rem;
  }

  .filters {
    gap: 0.75rem;
  }

  .filter-btn {
    padding: 0.65rem 1.2rem;
    font-size: 0.8rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .gallery-section {
    padding: 3rem 0;
  }

  .filters-section {
    padding: 2rem 0;
  }

  .cta-section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .portfolio-title {
    font-size: 1.5rem;
  }

  .filters-heading {
    font-size: 1.1rem;
  }

  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.75rem;
  }

  .cta-title {
    font-size: 1.3rem;
  }
}
</style>
