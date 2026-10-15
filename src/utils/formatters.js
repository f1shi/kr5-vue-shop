const categoryMap = {
  smartphones: 'Смартфоны',
  laptops: 'Ноутбуки',
  headphones: 'Наушники',
  accessories: 'Аксессуары'
}

export function formatPrice(price) {
  return `${price.toLocaleString('ru-RU')} руб.`
}

export function getCategoryTitle(category) {
  return categoryMap[category] || category
}

export function getImageUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`
}
