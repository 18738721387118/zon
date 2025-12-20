export interface Flower {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  description: string
  rating: number
  reviews: number
  category: string
}

export const FLOWERS: Flower[] = [
  {
    id: 'sagan-dailya-001',
    name: 'Саган-дайля',
    price: 3500,
    originalPrice: 4550,
    image: '/flower-product.png',
    description:
      'Букет из 15 веток ромашковых хризантем, оформленный в крафтовую бумагу. Ширина букета — от 40 до 55 см, в зависимости от степени раскрытия; длина — около 55 см. Упаковка — крафт. Хризантемы — любимые цветы многих людей, полюбившиеся способностью долго стоять в воде, сохраняя свежесть и наполняя пространство приятным ароматом.',
    rating: 4.7,
    reviews: 7,
    category: 'Хризантемы',
  },
  {
    id: 'rose-bouquet-002',
    name: 'Букет роз "Нежность"',
    price: 4200,
    originalPrice: 5460,
    image: '/flower-product.png',
    description:
      'Роскошный букет из 25 роз нежно-розового цвета. Идеальный подарок для выражения чувств. Розы отборные, с крупными бутонами и приятным ароматом. Букет дополнен зеленью и упакован в элегантную крафтовую бумагу.',
    rating: 4.9,
    reviews: 15,
    category: 'Розы',
  },
  {
    id: 'tulip-mix-003',
    name: 'Тюльпаны микс',
    price: 2800,
    originalPrice: 3640,
    image: '/flower-product.png',
    description:
      'Яркий весенний букет из 35 разноцветных тюльпанов. Сочетание красных, желтых, розовых и белых тюльпанов создает праздничное настроение. Отлично подходит для поздравлений и романтических жестов.',
    rating: 4.6,
    reviews: 12,
    category: 'Тюльпаны',
  },
  {
    id: 'lily-elegance-004',
    name: 'Лилии "Элегантность"',
    price: 3900,
    originalPrice: 5070,
    image: '/flower-product.png',
    description:
      'Изысканная композиция из белых лилий с нежным ароматом. Букет из 7 крупных лилий, дополненных зеленью и декоративными элементами. Идеально подходит для торжественных мероприятий и деловых подарков.',
    rating: 4.8,
    reviews: 9,
    category: 'Лилии',
  },
  {
    id: 'carnation-classic-005',
    name: 'Гвоздики классические',
    price: 2100,
    originalPrice: 2730,
    image: '/flower-product.png',
    description:
      'Классический букет из красных гвоздик. Символ любви и преданности. 21 свежая гвоздика с крепкими стеблями и насыщенным цветом. Простота и элегантность в одном букете.',
    rating: 4.5,
    reviews: 8,
    category: 'Гвоздики',
  },
  {
    id: 'orchid-premium-006',
    name: 'Орхидея в горшке',
    price: 5500,
    originalPrice: 7150,
    image: '/flower-product.png',
    description:
      'Экзотическая орхидея фаленопсис в керамическом горшке. Идеальный подарок, который будет радовать получателя долгие месяцы. Цветет белыми цветами с нежным ароматом. Поставляется с инструкцией по уходу.',
    rating: 5.0,
    reviews: 18,
    category: 'Орхидеи',
  },
  {
    id: 'sunflower-joy-007',
    name: 'Подсолнухи "Радость"',
    price: 3200,
    originalPrice: 4160,
    image: '/flower-product.png',
    description:
      'Солнечный букет из 9 ярких подсолнухов. Символизирует оптимизм, радость и энергию. Крупные головки подсолнухов создают яркое и позитивное настроение. Отлично подходит для летних праздников.',
    rating: 4.7,
    reviews: 11,
    category: 'Подсолнухи',
  },
  {
    id: 'peony-dream-008',
    name: 'Пионы "Мечта"',
    price: 6800,
    originalPrice: 8840,
    image: '/flower-product.png',
    description:
      'Роскошный букет из 15 пионов нежно-розового цвета. Сезонный товар, доступен весной и в начале лета. Пионы — символ романтики и процветания. Крупные, ароматные бутоны в элегантной упаковке.',
    rating: 4.9,
    reviews: 22,
    category: 'Пионы',
  },
]

export function getFlowerById(id: string): Flower | undefined {
  return FLOWERS.find(flower => flower.id === id)
}

export function getFlowersByCategory(category: string): Flower[] {
  return FLOWERS.filter(flower => flower.category === category)
}
