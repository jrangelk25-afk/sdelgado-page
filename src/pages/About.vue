<template>
  <div class="about-page">
    <!-- Hero Section -->
    <div class="about-hero">
      <div class="container">
        <h1 class="about-title">{{ tattooer.name }}</h1>
        <p class="about-subtitle">TATUADOR PROFESIONAL DESDE {{ startYear }}</p>
      </div>
    </div>

    <!-- Intro Section -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <h2 class="intro-heading">MI HISTORIA</h2>
          <p class="intro-text">
            {{ tattooer.about.intro }}
          </p>
        </div>
      </div>
    </section>

    <!-- First Story Section - Profile Image Left -->
    <section class="story-section story-left">
      <div class="container">
        <div class="story-grid">
          <div class="story-image">
            <img src="/img/about/perfil.webp" :alt="tattooer.name" />
          </div>
          <div class="story-content">
            <h2 class="story-heading">EL VIAJE</h2>
            <p class="story-text">
              {{ tattooer.about.story }}
            </p>
            <blockquote class="story-quote">
              <p class="quote-text">
                "Cada día, después de trabajar, seguía dibujando y tatuando para mejorar, convencido de que la constancia era el camino para crecer."
              </p>
              <p class="quote-author">— {{ tattooer.name }}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <div class="container">
        <div class="philosophy-content">
          <h2 class="philosophy-heading">CONSTRUCCIÓN DE EXPERIENCIA</h2>
          <p class="philosophy-text">
            {{ tattooer.about.philosophy }}
          </p>
          <blockquote class="philosophy-quote">
            <p class="quote-text">
              "Hoy veo cada tatuaje como una colaboración única. Mi objetivo es transformar ideas en piezas que acompañen a mis clientes durante toda la vida, combinando creatividad, técnica y dedicación en cada proyecto."
            </p>
            <p class="quote-author">— {{ tattooer.name }}</p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Second Story Section - Image Right -->
    <section class="story-section story-right">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2 class="story-heading">APRENDIZAJE CONTINUO</h2>
            <p class="story-text">
              Complementé mi aprendizaje con cursos de iniciación, sombras y color, mientras dedicaba largas horas a practicar y perfeccionar mi técnica. 
              Mi dedicación ha sido incesante, buscando siempre el crecimiento y la excelencia en cada trazo.
            </p>
            <p class="story-text">
              Mis primeros clientes fueron personas cercanas que confiaron en mí cuando apenas comenzaba. Gracias a su apoyo y a innumerables horas 
              de práctica, fui construyendo experiencia y desarrollando mi propio estilo artístico.
            </p>
            <blockquote class="story-quote">
              <p class="quote-text">
                "Seguí dibujando y compartiendo con otros artistas, perfeccionando cada detalle de mi proceso."
              </p>
              <p class="quote-author">— {{ tattooer.name }}</p>
            </blockquote>
          </div>
          <div class="story-image">
            <img src="/img/about/about-1.jpeg" alt="Proceso de trabajo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Third Story Section - Image Left -->
    <section class="story-section story-left">
      <div class="container">
        <div class="story-grid">
          <div class="story-image">
            <img src="/img/about/about-2.jpeg" alt="Arte del tatuaje" />
          </div>
          <div class="story-content">
            <h2 class="story-heading">FILOSOFÍA DE TRABAJO</h2>
            <p class="story-text">
              Para mí, cada cliente es una colaboración única. No solo creo tatuajes, sino que transformo ideas en piezas duraderas que acompañarán 
              a mis clientes de por vida. Combino creatividad, técnica refinada y dedicación absoluta en cada proyecto.
            </p>
            <p class="story-text">
              La calidad, la higiene y la atención al detalle son los pilares de mi trabajo. Creo que cada tatuaje debe ser una obra maestra 
              personalizada que refleje la historia y la identidad de quien lo lleva.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section class="specialties-section">
      <div class="container">
        <h2 class="section-title">ESPECIALIDADES</h2>
        <p class="section-description">
          Dominamos una variedad de estilos y técnicas para crear diseños únicos
        </p>

        <div class="specialties-grid">
          <div v-for="specialty in tattooer.specialties" :key="specialty" class="specialty-card">
            <h3 class="specialty-name">{{ specialty }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">{{ tattooer.about.experience }}</div>
            <div class="stat-label">Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ tattooer.about.clientsSatisfied }}</div>
            <div class="stat-label">Clientes Satisfechos</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ tattooer.specialties.length }}+</div>
            <div class="stat-label">Estilos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿QUIERES TRABAJAR CONMIGO?</h2>
          <p class="cta-text">
            Contacta conmigo para discutir tu idea y crear algo único juntos
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Iniciar Consulta
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { tattooer } from '@/data/tattooer'

const startYear = new Date().getFullYear() - 10
</script>

<style scoped>
.about-page {
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
.about-hero {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
  padding: 6rem 0;
  border-bottom: 1px solid #2a2a2a;
  margin-top: 70px;
  text-align: center;
}

.about-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.about-subtitle {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 400;
}

/* Intro Section */
.intro-section {
  padding: 4rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.intro-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.intro-heading {
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.intro-text {
  font-size: 1.1rem;
  color: #a0a0a0;
  margin: 0 0 1.5rem 0;
  line-height: 1.8;
}

.intro-description {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}

/* Story Section */
.story-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.story-left .story-grid {
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image content";
}

.story-right .story-grid {
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content image";
}

.story-grid {
  display: grid;
  gap: 4rem;
  align-items: center;
}

.story-image {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 3/4;
  border: 1px solid #2a2a2a;
  grid-area: image;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.story-image:hover img {
  transform: scale(1.02);
}

.story-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-area: content;
}

.story-heading {
  font-size: 1.8rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.story-text {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}

.story-quote {
  background-color: rgba(255, 215, 0, 0.02);
  border-left: 3px solid #ffd700;
  padding: 1.5rem;
  margin: 0;
  border-radius: 2px;
}

.quote-text {
  font-size: 1rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0 0 0.8rem 0;
  font-style: italic;
}

.quote-author {
  font-size: 0.85rem;
  color: #ffd700;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Philosophy Section */
.philosophy-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.03) 0%, rgba(0, 0, 0, 0) 100%);
  border-bottom: 1px solid #2a2a2a;
}

.philosophy-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-heading {
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.philosophy-text {
  font-size: 1.05rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
}

.philosophy-description {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}

.philosophy-quote {
  background-color: rgba(255, 215, 0, 0.02);
  border-left: 3px solid #ffd700;
  padding: 1.5rem;
  margin: 0;
  border-radius: 2px;
  margin-top: 1.5rem;
}
.specialties-section {
  padding: 5rem 0;
  background-color: #1a1a1a;
  border-bottom: 1px solid #2a2a2a;
}

.section-title {
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-description {
  font-size: 0.95rem;
  color: #a0a0a0;
  text-align: center;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.specialty-card {
  background-color: #0f0f0f;
  padding: 2rem;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.specialty-card:hover {
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.03);
  transform: translateY(-4px);
}

.specialty-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 0.5rem 0;
}

.stat-label {
  font-size: 0.85rem;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
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
  .about-hero {
    padding: 3rem 0;
  }

  .about-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .story-left .story-grid,
  .story-right .story-grid {
    grid-template-columns: 1fr;
    grid-template-areas: unset;
  }

  .story-section {
    padding: 3rem 0;
  }

  .story-image {
    aspect-ratio: 4/3;
  }

  .story-heading {
    font-size: 1.3rem;
  }

  .intro-heading {
    font-size: 1.3rem;
  }

  .philosophy-heading {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .specialties-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 1.5rem;
  }

  .story-heading {
    font-size: 1.1rem;
  }

  .specialties-grid {
    grid-template-columns: 1fr;
  }
}
</style>
