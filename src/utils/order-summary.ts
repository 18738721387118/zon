export type OrderItem = {
  id: string
  price: number
  quantity: number
  discountPercent?: number
}

export class OrderSummaryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'OrderSummaryError'
  }
}

export function summarizeOrderItems(items: OrderItem[], deliveryFee: number) {
  if (!Array.isArray(items)) {
    throw new OrderSummaryError('Список позиций должен быть массивом')
  }

  if (!Number.isFinite(deliveryFee) || deliveryFee < 0) {
    throw new OrderSummaryError('Стоимость доставки должна быть неотрицательным числом')
  }

  let subtotal = 0
  let itemCount = 0

  for (const item of items) {
    if (!Number.isFinite(item.price) || item.price < 0) {
      throw new OrderSummaryError('Цена товара должна быть неотрицательным числом')
    }

    if (!Number.isFinite(item.quantity) || item.quantity < 0) {
      throw new OrderSummaryError('Количество товара должно быть неотрицательным числом')
    }

    const discountPercent = item.discountPercent ?? 0
    const boundedDiscount = Math.min(Math.max(discountPercent, 0), 100)
    const lineTotal = item.price * item.quantity * (1 - boundedDiscount / 100)

    subtotal += lineTotal
    itemCount += item.quantity
  }

  const taxRate = 0.08
  const tax = Math.round(subtotal * taxRate * 100) / 100
  const total = Math.round((subtotal + tax + deliveryFee) * 100) / 100

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax,
    deliveryFee,
    total,
    itemCount,
  }
}
