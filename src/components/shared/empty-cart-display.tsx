import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { Button } from './button'
import { ClientRoutes } from '@/constants/client-routes'

export function EmptyCartDisplay() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4'>
      <ShoppingBag className='h-24 w-24 text-gray-300' />
      <h2 className='text-2xl font-bold'>Корзина пуста</h2>
      <p className='text-muted-foreground mb-4'>Добавьте товары, чтобы начать покупки</p>
      <Link href={ClientRoutes.HOME}>
        <Button size='lg'>Перейти к покупкам</Button>
      </Link>
    </div>
  )
}
