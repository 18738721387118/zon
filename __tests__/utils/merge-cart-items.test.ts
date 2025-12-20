import { CartItem, mergeCartItems } from '@/utils/merge-cart-items'

describe('mergeCartItems', () => {
  test('добавляет новый товар в корзину', () => {
    const item: CartItem = { id: 'rose', price: 500, quantity: 1 }
    const result = mergeCartItems([], item)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(item)
  })

  test('увеличивает количество существующей позиции и обновляет цену', () => {
    const existing: CartItem[] = [{ id: 'rose', price: 500, quantity: 1 }]
    const incoming: CartItem = { id: 'rose', price: 550, quantity: 2 }

    const result = mergeCartItems(existing, incoming)

    expect(result[0].quantity).toBe(3)
    expect(result[0].price).toBe(550)
    expect(existing[0].quantity).toBe(1)
  })

  test('удаляет позицию при неположительном количестве', () => {
    const existing: CartItem[] = [
      { id: 'rose', price: 500, quantity: 1 },
      { id: 'tulip', price: 300, quantity: 2 },
    ]

    const result = mergeCartItems(existing, { id: 'tulip', price: 300, quantity: 0 })

    expect(result).toHaveLength(1)
    expect(result.find(item => item.id === 'tulip')).toBeUndefined()
  })

  test('возвращает новый массив, не мутируя исходный', () => {
    const existing: CartItem[] = [{ id: 'orchid', price: 900, quantity: 1 }]
    const incoming: CartItem = { id: 'orchid', price: 900, quantity: 1 }

    const result = mergeCartItems(existing, incoming)

    expect(result).not.toBe(existing)
    expect(existing[0].quantity).toBe(1)
    expect(result[0].quantity).toBe(2)
  })

  test('бросает ошибку при некорректной корзине', () => {
    expect(() => mergeCartItems(null as unknown as CartItem[], { id: 'rose', price: 500, quantity: 1 })).toThrow(
      'корзина',
    )
  })
})
