<template>
  <div class="aftercare-page">
    <!-- Hero Section -->
    <div class="aftercare-hero">
      <div class="container">
        <h1 class="aftercare-title">AFTERCARE</h1>
        <p class="aftercare-subtitle">
          {{ siteContent.aftercare.description }}
        </p>
      </div>
    </div>

    <!-- Sections -->
    <section class="sections-content">
      <div class="container">
        <h2 class="section-heading">HEALING GUIDE</h2>
        <div class="sections-grid">
          <div
            v-for="(section, index) in siteContent.aftercare.sections"
            :key="index"
            class="section-card"
          >
            <div class="section-number">{{ index + 1 }}</div>
            <h3 class="section-title">{{ section.title }}</h3>
            <p class="section-text">{{ section.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Warnings -->
    <section class="warnings-section">
      <div class="container">
        <h2 class="section-heading">IMPORTANT RECOMMENDATIONS</h2>
        <div class="warnings-grid">
          <div v-for="(warning, index) in siteContent.aftercare.warnings" :key="index" class="warning-item">
            <span class="warning-icon">⚠️</span>
            <p class="warning-text">{{ warning }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <div class="faq-list">
          <div
            v-for="(item, index) in siteContent.aftercare.faq"
            :key="index"
            class="faq-item"
            :class="{ open: expandedFaqIndex === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">HAVE MORE QUESTIONS?</h2>
          <p class="cta-text">
            Don't hesitate to contact me if you have questions about your tattoo care
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteContent } from '@/data/content'

const expandedFaqIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  expandedFaqIndex.value = expandedFaqIndex.value === index ? null : index
}
</script>

<style scoped>
.aftercare-page {
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
.aftercare-hero {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
  padding: 6rem 0;
  border-bottom: 1px solid #2a2a2a;
  margin-top: 70px;
  text-align: center;
}

.aftercare-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.aftercare-subtitle {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 400;
}

/* Sections */
.sections-content {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.section-heading {
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  text-align: center;
  margin: 0 0 3rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.section-card {
  background-color: #1a1a1a;
  padding: 2rem;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.section-card:hover {
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.05);
  transform: translateY(-4px);
}

.section-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 900;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-text {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.7;
}

/* Warnings Section */
.warnings-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.warnings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.warning-item {
  background: rgba(255, 215, 0, 0.02);
  border-left: 3px solid #ffd700;
  padding: 1.5rem;
  border-radius: 4px;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.warning-item:hover {
  background: rgba(255, 215, 0, 0.05);
  transform: translateX(4px);
}

.warning-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.warning-text {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.03);
}

.faq-item.open {
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.05);
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.faq-question:hover {
  color: #ffd700;
}

.faq-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: #ffd700;
}

.faq-item.open .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  margin: 0;
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.7;
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
  .aftercare-hero {
    padding: 3rem 0;
  }

  .aftercare-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .section-heading {
    font-size: 1.3rem;
  }

  .sections-grid {
    grid-template-columns: 1fr;
  }

  .warnings-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .sections-content {
    padding: 3rem 0;
  }

  .warnings-section {
    padding: 3rem 0;
  }

  .faq-section {
    padding: 3rem 0;
  }

  .cta-section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .aftercare-title {
    font-size: 1.5rem;
  }

  .section-heading {
    font-size: 1.1rem;
  }

  .cta-title {
    font-size: 1.3rem;
  }

  .faq-question {
    font-size: 0.85rem;
    padding: 1rem 1.5rem;
  }

  .section-text,
  .warning-text,
  .faq-answer p {
    font-size: 0.85rem;
  }
}
</style>
