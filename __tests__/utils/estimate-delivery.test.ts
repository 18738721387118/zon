import { DeliveryEstimationError, estimateDeliveryCost } from '@/utils/estimate-delivery'

describe('estimateDeliveryCost', () => {
  test('рассчитывает доставку с доплатой за расстояние и вес', () => {
    expect(estimateDeliveryCost(10, 2)).toBe(525)
  })

  test('не добавляет доплаты при коротком расстоянии и легком весе', () => {
    expect(estimateDeliveryCost(2, 0.5)).toBe(200)
  })

  test('работает с дробными значениями', () => {
    expect(estimateDeliveryCost(3.5, 1.25)).toBe(237.5)
  })

  test('бросает ошибку при отрицательных значениях', () => {
    expect(() => estimateDeliveryCost(-1, 1)).toThrow(DeliveryEstimationError)
    expect(() => estimateDeliveryCost(5, -2)).toThrow('не могут быть отрицательными')
  })

  test('бросает ошибку при некорректных числах', () => {
    expect(() => estimateDeliveryCost(Number.NaN, 1)).toThrow(DeliveryEstimationError)
    expect(() => estimateDeliveryCost(2, Number.POSITIVE_INFINITY)).toThrow(
      DeliveryEstimationError,
    )
  })
})
