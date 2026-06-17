<template>
  <div id="app" class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0f0f0f;
  color: #e8e8e8;
}

.main-content {
  flex: 1;
  margin-top: 70px;
}
</style>
