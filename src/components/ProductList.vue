<template>
  <section class="products-section" aria-labelledby="products-title">
    <h2 id="products-title">Список товаров</h2>

    <div v-if="products.length > 0" class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', $event)"
      />
    </div>

    <p v-else class="products-empty">
      По выбранным условиям товары не найдены.
    </p>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>

<style scoped>
.products-section {
  display: grid;
  gap: 16px;
}

.products-section h2 {
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.products-empty {
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
</style>
