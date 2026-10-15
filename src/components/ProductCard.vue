<template>
  <article
    class="product-card"
    :class="{ 'product-card--unavailable': !product.isAvailable }"
  >
    <img
      v-if="product.image"
      class="product-card__image"
      :src="getImageUrl(product.image)"
      :alt="product.title"
      width="640"
      height="480"
      loading="lazy"
    >

    <div class="product-card__body">
      <h3 class="product-card__title">
        <RouterLink :to="`/catalog/${product.id}`">
          {{ product.title }}
        </RouterLink>
      </h3>
      <p class="product-card__description">
        {{ product.description }}
      </p>
      <p class="product-card__price">
        {{ formatPrice(product.price) }}
      </p>
      <p class="product-card__meta">
        Категория: {{ getCategoryTitle(product.category) }}
      </p>
      <p class="product-card__meta">
        Рейтинг: {{ product.rating }}
      </p>
      <p class="product-card__status">
        {{ product.isAvailable ? 'В наличии' : 'Нет в наличии' }}
      </p>

      <div class="product-card__actions">
        <RouterLink class="product-card__link" :to="`/catalog/${product.id}`">
          Подробнее
        </RouterLink>
        <button
          class="product-card__button"
          type="button"
          :disabled="!product.isAvailable"
          @click="$emit('add-to-cart', product)"
        >
          {{ product.isAvailable ? 'Добавить' : 'Недоступно' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { formatPrice, getCategoryTitle, getImageUrl } from '../utils/formatters'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
}

.product-card--unavailable {
  opacity: 0.75;
}

.product-card__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background-color: #e5e7eb;
}

.product-card__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  padding: 16px;
}

.product-card__title {
  margin: 0;
  font-size: 20px;
}

.product-card__title a {
  color: inherit;
  text-decoration: none;
}

.product-card__title a:hover,
.product-card__title a:focus-visible {
  text-decoration: underline;
}

.product-card__description,
.product-card__meta,
.product-card__status {
  margin: 0;
}

.product-card__price {
  margin: 0;
  font-weight: 700;
}

.product-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.product-card__link,
.product-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  font: inherit;
  border-radius: 8px;
}

.product-card__link {
  color: #2563eb;
  border: 1px solid #2563eb;
  text-decoration: none;
}

.product-card__button {
  color: #ffffff;
  background-color: #2563eb;
  border: none;
  cursor: pointer;
}

.product-card__button:disabled {
  color: #4b5563;
  background-color: #e5e7eb;
  cursor: not-allowed;
}
</style>
