<template>
  <main class="app-main">
    <section class="home-page">
      <h2>Учебный интернет-магазин электроники на Vue</h2>
      <p>
        Это альтернативная SPA-версия интернет-магазина, который ранее был реализован на HTML, CSS, JavaScript и React.
      </p>
      <div class="home-page__actions">
        <RouterLink class="button-link" to="/catalog">
          Перейти в каталог
        </RouterLink>
        <RouterLink class="button-link button-link--secondary" to="/order">
          Оставить заявку
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.app-main {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
  padding-block: 32px;
}

.home-page {
  display: grid;
  gap: 20px;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
}

.home-page h2,
.home-page p {
  margin: 0;
}

.home-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.button-link {
  display: inline-flex;
  width: fit-content;
  padding: 10px 14px;
  color: #ffffff;
  background-color: #2563eb;
  border-radius: 8px;
  text-decoration: none;
}

.button-link--secondary {
  color: #1f2937;
  background-color: #e5e7eb;
}
</style>
