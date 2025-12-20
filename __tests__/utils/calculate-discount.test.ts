import { PricingError, calculateDiscountedPrice } from '@/utils/calculate-discount'

describe('calculateDiscountedPrice', () => {
  test('корректно считает цену со скидкой', () => {
    expect(calculateDiscountedPrice(3500, 10)).toBe(3150)
  })

  test('округляет цену до двух знаков', () => {
    expect(calculateDiscountedPrice(199.99, 12.5)).toBe(174.99)
  })

  test('возвращает исходную цену без скидки', () => {
    expect(calculateDiscountedPrice(1000, 0)).toBe(1000)
  })

  test('обнуляет цену при скидке 100%', () => {
    expect(calculateDiscountedPrice(750, 100)).toBe(0)
  })

  test('бросает ошибку при некорректных данных', () => {
    expect(() => calculateDiscountedPrice(-10, 20)).toThrow(PricingError)
    expect(() => calculateDiscountedPrice(100, 120)).toThrow(
      'Скидка должна быть от 0 до 100%',
    )
  })
})
