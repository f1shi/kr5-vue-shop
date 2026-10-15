<template>
  <header class="site-header">
    <div class="site-header__inner">
      <div class="site-header__brand">
        <h1>Vue Shop</h1>
        <p>Учебный интернет-магазин электроники на Vue 3 + Vite.</p>
      </div>

      <nav class="site-nav" aria-label="Основная навигация">
        <RouterLink to="/" class="site-nav__link">Главная</RouterLink>
        <RouterLink to="/catalog" class="site-nav__link">Каталог</RouterLink>
        <RouterLink to="/order" class="site-nav__link">Заявка</RouterLink>
        <RouterLink to="/cart" class="site-nav__link">Корзина</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  padding: 24px 16px;
  background-color: #111827;
  color: #ffffff;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
}

.site-header__brand h1,
.site-header__brand p {
  margin: 0;
}

.site-header__brand p {
  margin-top: 6px;
  color: #d1d5db;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.site-nav__link {
  color: #d1d5db;
  text-decoration: none;
}

.site-nav__link:hover,
.site-nav__link:focus-visible {
  color: #ffffff;
}

.site-nav__link.router-link-active {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 768px) {
  .site-header__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
