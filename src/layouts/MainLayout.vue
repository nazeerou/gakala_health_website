<template>
  <Header />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.main-content {
    flex: 1;
    min-height: calc(100vh - 80px - 300px);
    margin: 0;
    width: 100%;
}
</style>