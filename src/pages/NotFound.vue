<template>
  <div class="not-found-page">
    <div class="not-found-container">
      <div class="error-code">404</div>
      <h1 class="error-title">Página No Encontrada</h1>
      <p class="error-description">
        Parece que la página que buscas no existe o ha sido movida
      </p>

      <div class="actions">
        <router-link to="/" class="btn btn-primary">
          Volver a Inicio
        </router-link>
        <router-link to="/portfolio" class="btn btn-secondary">
          Ver Portafolio
        </router-link>
      </div>

      <!-- Decoration -->
      <div class="decoration">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  position: relative;
  overflow: hidden;
  margin-top: 70px;
}

.not-found-container {
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 2rem;
}

.error-code {
  font-size: 10rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
  animation: bounce 2s infinite;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: #a0a0a0;
  margin: 0 0 2rem 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
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

.btn-secondary {
  background-color: transparent;
  color: #ffd700;
  border: 2px solid #ffd700;
}

.btn-secondary:hover {
  background-color: rgba(255, 215, 0, 0.1);
  transform: translateY(-2px);
}

/* Decoration */
.decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.dot-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

.dot-2 {
  width: 150px;
  height: 150px;
  bottom: 15%;
  right: 10%;
  animation: float 8s ease-in-out infinite reverse;
}

.dot-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: 20%;
  animation: float 7s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .not-found-page {
    min-height: auto;
    padding: 3rem 1rem;
  }

  .error-code {
    font-size: 5rem;
  }

  .error-title {
    font-size: 1.8rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .dot {
    display: none;
  }
}
</style>
