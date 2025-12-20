'use client'

import Link from 'next/link'

import { Button } from '@/components/shared/button'
import { EmptyCartDisplay } from '@/components/shared/empty-cart-display'

import { ClientRoutes } from '@/constants/client-routes'

import { CartItem } from './cart-item'
import { useCartStore } from '@/store/cart-store'

export function CartPage() {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const totalPrice = useCartStore(state => state.getTotalPrice())

  if (items.length === 0) {
    return <EmptyCartDisplay />
  }

  return (
    <div className='mx-auto max-w-4xl py-8'>
      <h1 className='mb-6 text-3xl font-bold'>Корзина</h1>

      <div className='space-y-4'>
        {items.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>

      <div className='mt-8 rounded-lg border bg-gray-50 p-6'>
        <div className='flex items-center justify-between text-xl font-bold'>
          <span>Итого:</span>
          <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
        </div>

        <Link href={ClientRoutes.CHECKOUT}>
          <Button size='lg' className='mt-4 w-full'>
            Оформить заказ
          </Button>
        </Link>
      </div>
    </div>
  )
}
