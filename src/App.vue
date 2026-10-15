<template>
  <div class="app">
    <header class="site-header">
      <div class="site-header__inner">
        <h1>Vue Shop</h1>
        <p>Учебный интернет-магазин электроники на Vue 3 + Vite.</p>
      </div>
    </header>

    <main class="app-main">
      <section class="catalog-page">
        <div class="catalog-page__header">
          <h2>Каталог товаров</h2>
          <p>
            Найдено товаров: <strong>{{ visibleProducts.length }}</strong>
          </p>
          <p>
            Добавлено товаров: <strong>{{ addedCount }}</strong>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { products } from './data/products'

const searchQuery = ref('')
const selectedCategory = ref('all')
const sortType = ref('default')
const addedCount = ref(0)

const visibleProducts = computed(() => {
  return products
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  color: #1f2937;
  background-color: #f8fafc;
}

.site-header {
  padding: 32px 16px;
  background-color: #111827;
  color: #ffffff;
}

.site-header__inner,
.app-main {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
}

.site-header h1,
.site-header p {
  margin: 0;
}

.site-header p {
  margin-top: 8px;
  color: #d1d5db;
}

.app-main {
  padding-block: 32px;
}

.catalog-page {
  display: grid;
  gap: 24px;
}

.catalog-page__header {
  display: grid;
  gap: 8px;
}

.catalog-page__header h2,
.catalog-page__header p {
  margin: 0;
}
</style>
