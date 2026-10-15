<template>
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

      <CatalogControls
        v-model:search="searchQuery"
        v-model:category="selectedCategory"
        v-model:sort="sortType"
      />

      <ProductList
        :products="visibleProducts"
        @add-to-cart="handleAddToCart"
      />
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import CatalogControls from '../components/CatalogControls.vue'
import ProductList from '../components/ProductList.vue'
import { products } from '../data/products'

const searchQuery = ref('')
const selectedCategory = ref('all')
const sortType = ref('default')
const addedCount = ref(0)

const visibleProducts = computed(() => {
  let result = [...products]
  const query = searchQuery.value.trim().toLowerCase()

  if (query) {
    result = result.filter((product) =>
      product.title.toLowerCase().includes(query)
    )
  }

  if (selectedCategory.value !== 'all') {
    result = result.filter((product) =>
      product.category === selectedCategory.value
    )
  }

  if (sortType.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  }

  if (sortType.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  }

  if (sortType.value === 'title-asc') {
    result.sort((a, b) => a.title.localeCompare(b.title))
  }

  return result
})

function handleAddToCart(product) {
  console.log(`Товар добавлен: ${product.title}`)
  addedCount.value += 1
}
</script>

<style scoped>
.app-main {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
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
