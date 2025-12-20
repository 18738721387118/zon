'use client'

import Link from 'next/link'

import { Cart } from '@/components/icons/cart'
import { ClientRoutes } from '@/constants/client-routes'
import { useCartStore } from '@/store/cart-store'
import { cn } from '@/utils/class-names'

interface CartButtonProps {
  compact?: boolean
}

export function CartButton({ compact = false }: CartButtonProps) {
  const totalItems = useCartStore(state => state.getTotalItems())

  return (
    <Link href={ClientRoutes.CART} className='group relative flex flex-col items-center'>
      <div className='relative'>
        <Cart
          className={cn(
            compact ? 'size-5' : 'size-6',
            'group-hover:text-primary transition-colors duration-200',
          )}
          aria-label='Корзина'
        />
        {totalItems > 0 && (
          <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white'>
            {totalItems > 9 ? '9+' : totalItems}
          </span>
        )}
      </div>

      <span
        className={cn(
          'text-xs font-medium',
          compact && 'leading-none',
          'group-hover:text-primary transition-colors duration-200',
        )}
      >
        Корзина
      </span>
    </Link>
  )
}
