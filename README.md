# Контрольная работа №5: Vue-вариант

Тема: «Компонентная frontend-разработка на React или Vue с подготовкой проекта к подключению backend API».

## Практическая работа №25

Тема: «Vue 3 + Vite: основы реактивности, шаблоны и директивы».

Выполнено:

- создан проект `kr5-vue-shop`;
- проект создан через `npm create vue@latest`;
- проект запускается через `npm run dev`;
- очищен демонстрационный шаблон;
- создан файл `src/data/products.js`;
- реализован каталог товаров в `App.vue`;
- использован `<script setup>`;
- использованы `ref` и `computed`;
- использованы директивы `v-model`, `v-if`, `v-else`, `v-for`;
- использованы сокращения `:` для `v-bind` и `@` для `v-on`;
- реализован поиск товаров;
- реализована фильтрация по категории;
- реализована сортировка товаров;
- реализовано пустое состояние каталога;
- реализован базовый счётчик добавленных товаров.

## Практическая работа №26

Тема: «Vue: компоненты, свойства, v-model, маршрутизация».

Выполнено:

- проект `kr5-vue-shop` разделён на компоненты и страницы;
- установлен `vue-router@4`;
- создана папка `src/components`;
- создана папка `src/views`;
- создана папка `src/router`;
- создан компонент `AppHeader`;
- создан компонент `SearchInput`;
- создан компонент `CatalogControls`;
- создан компонент `ProductCard`;
- создан компонент `ProductList`;
- создана страница `HomePage`;
- создана страница `CatalogPage`;
- создана страница `ProductPage`;
- создана страница `OrderPage`;
- создана страница `CartPage`;
- создана страница `NotFoundPage`;
- настроены маршруты `/`, `/catalog`, `/catalog/:productId`, `/order`, `/cart`, `/:pathMatch(.*)*`;
- используется `RouterLink`;
- используется `RouterView`;
- данные передаются в компоненты через `props`;
- события передаются вверх через `emit`;
- используется компонентный `v-model`;
- страница товара получает `productId` из маршрута.

Функции форматирования цены, названия категории и пути к изображению вынесены в `src/utils/formatters.js`, чтобы не дублировать их в `ProductCard` и `ProductPage`.

## Передача данных между компонентами

- `CatalogPage` → `CatalogControls`: `v-model:search`, `v-model:category`, `v-model:sort`;
- `CatalogControls` → `SearchInput`: `v-model` через `defineModel()`;
- `CatalogPage` → `ProductList` → `ProductCard`: товары через `props`;
- `ProductCard` → `ProductList` → `CatalogPage`: событие `add-to-cart` через `emit`.

## Структура проекта

```text
kr5-vue-shop/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── CatalogControls.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductList.vue
│   │   └── SearchInput.vue
│   ├── data/
│   │   └── products.js
│   ├── router/
│   │   └── index.js
│   ├── utils/
│   │   └── formatters.js
│   ├── views/
│   │   ├── CartPage.vue
│   │   ├── CatalogPage.vue
│   │   ├── HomePage.vue
│   │   ├── NotFoundPage.vue
│   │   ├── OrderPage.vue
│   │   └── ProductPage.vue
│   ├── App.vue
│   └── main.js
├── README.md
└── package.json
```

## Связь с КР №5

Проект является альтернативной Vue-реализацией SPA-интернет-магазина. Основной вариант КР №5 выполнен на React в репозитории `kr5-react-shop`. Товары те же, что и в React-версии: 10 позиций магазина электроники.

На следующем занятии проект будет разделён на компоненты, будут рассмотрены props, emit, v-model и базовая маршрутизация.

## Запуск

```bash
npm install
npm run dev
```

## Автор

ФИО: Рыбаков Фёдор Иванович
Группа: эфбо-09-25
