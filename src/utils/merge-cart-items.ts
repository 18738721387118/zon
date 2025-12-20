export type CartItem = {
  id: string
  name?: string
  price: number
  quantity: number
}

export function mergeCartItems(cartItems: CartItem[], incomingItem: CartItem): CartItem[] {
  if (!Array.isArray(cartItems)) {
    throw new Error('Текущая корзина должна быть массивом')
  }

  if (incomingItem.quantity <= 0) {
    return cartItems.filter(item => item.id !== incomingItem.id)
  }

  const existingIndex = cartItems.findIndex(item => item.id === incomingItem.id)

  if (existingIndex === -1) {
    return [...cartItems, { ...incomingItem }]
  }

  const updatedItem: CartItem = {
    ...cartItems[existingIndex],
    ...incomingItem,
    quantity: cartItems[existingIndex].quantity + incomingItem.quantity,
  }

  return cartItems.map((item, index) => (index === existingIndex ? updatedItem : item))
}
