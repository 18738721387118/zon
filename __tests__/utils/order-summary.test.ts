import { OrderItem, OrderSummaryError, summarizeOrderItems } from '@/utils/order-summary'

describe('summarizeOrderItems', () => {
  test('считает сумму, доставку и налог', () => {
    const items: OrderItem[] = [
      { id: 'rose', price: 500, quantity: 2 },
      { id: 'tulip', price: 300, quantity: 1, discountPercent: 10 },
    ]

    const summary = summarizeOrderItems(items, 250)

    expect(summary.subtotal).toBe(1270)
    expect(summary.tax).toBe(101.6)
    expect(summary.deliveryFee).toBe(250)
    expect(summary.total).toBe(1621.6)
    expect(summary.itemCount).toBe(3)
  })

  test('учитывает скидку в 100% и не уходит в минус', () => {
    const items: OrderItem[] = [
      { id: 'gift', price: 400, quantity: 1, discountPercent: 150 },
      { id: 'card', price: 50, quantity: 2, discountPercent: 50 },
    ]

    const summary = summarizeOrderItems(items, 0)

    expect(summary.subtotal).toBe(50)
    expect(summary.total).toBe(54)
  })

  test('возвращает доставку даже при пустом списке', () => {
    const summary = summarizeOrderItems([], 199)

    expect(summary.subtotal).toBe(0)
    expect(summary.tax).toBe(0)
    expect(summary.total).toBe(199)
    expect(summary.itemCount).toBe(0)
  })

  test('бросает ошибку при некорректной доставке', () => {
    expect(() => summarizeOrderItems([], -10)).toThrow(OrderSummaryError)
  })

  test('бросает ошибку при некорректной позиции', () => {
    const items: OrderItem[] = [{ id: 'rose', price: -5, quantity: 1 }]

    expect(() => summarizeOrderItems(items, 100)).toThrow('Цена товара должна быть неотрицательным числом')
  })
})
