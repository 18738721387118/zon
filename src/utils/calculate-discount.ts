export class PricingError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PricingError'
  }
}

export function calculateDiscountedPrice(price: number, discountPercent: number): number {
  if (!Number.isFinite(price) || !Number.isFinite(discountPercent)) {
    throw new PricingError('Цена и скидка должны быть числами')
  }

  if (price < 0) {
    throw new PricingError('Цена не может быть отрицательной')
  }

  if (discountPercent < 0 || discountPercent > 100) {
    throw new PricingError('Скидка должна быть от 0 до 100%')
  }

  const result = price * (1 - discountPercent / 100)

  return Math.round(result * 100) / 100
}
