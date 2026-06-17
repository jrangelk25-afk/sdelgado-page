<template>
  <div class="shop-page">
    <!-- Hero Section -->
    <div class="shop-hero">
      <div class="container">
        <h1 class="shop-title">SHOP</h1>
        <p class="shop-subtitle">Exclusive clothing designs inspired by the art of tattoo</p>
      </div>
    </div>

    <!-- Shop Intro Section -->
    <section class="shop-intro">
      <div class="container">
        <div class="intro-content">
          <h2 class="intro-heading">OUR COLLECTION</h2>
          <p class="intro-text">
            Unique pieces designed for true lovers of art and self-expression. 
            Each design is an extension of our philosophy: creativity, quality and authenticity.
          </p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-section">
      <div class="container">
        <div class="products-grid">
          <div v-for="i in 12" :key="i" class="product-card">
            <div class="product-image">
              <!-- Placeholder for product image -->
              <div class="image-placeholder">
                <div class="placeholder-content">
                  <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span class="placeholder-text">Product Image</span>
                </div>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Product {{ i }}</h3>
              <p class="product-description">Exclusive design</p>
              <div class="product-footer">
                <span class="product-price">$0.00</span>
                <button class="add-to-cart">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">HAVE AN IDEA?</h2>
          <p class="cta-text">
            Contact us to create a custom design for your clothing
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Request Customization
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Shop page component
</script>

<style scoped>
.shop-page {
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
.shop-hero {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
  padding: 6rem 0;
  border-bottom: 1px solid #2a2a2a;
  margin-top: 70px;
  text-align: center;
}

.shop-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.shop-subtitle {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 400;
}

/* Shop Intro Section */
.shop-intro {
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
  font-size: 1rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}

/* Products Section */
.products-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.03);
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.1);
}

.product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #0f0f0f;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(0, 0, 0, 0.1));
  border-bottom: 1px solid #2a2a2a;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: #666;
}

.placeholder-icon {
  width: 48px;
  height: 48px;
  opacity: 0.5;
}

.placeholder-text {
  font-size: 0.85rem;
  opacity: 0.6;
}

.product-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-description {
  font-size: 0.85rem;
  color: #a0a0a0;
  margin: 0;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #2a2a2a;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffd700;
}

.add-to-cart {
  background-color: #ffd700;
  color: #000000;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart:hover {
  background-color: #ffed4e;
  transform: scale(1.1);
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
  .shop-hero {
    padding: 3rem 0;
  }

  .shop-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .intro-heading {
    font-size: 1.3rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .shop-title {
    font-size: 1.5rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .product-card {
    border-radius: 4px;
  }

  .product-info {
    padding: 1rem;
  }

  .product-name {
    font-size: 0.9rem;
  }

  .add-to-cart {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
}
</style>
