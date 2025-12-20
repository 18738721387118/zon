'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'

import { Button } from '@/components/shared/button'
import { CartItem as CartItemType } from '@/store/cart-store'

interface CartItemProps {
  item: CartItemType
  onRemove: (id: string) => void
}

export function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className='flex items-center gap-4 rounded-lg border p-4'>
      <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100'>
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex flex-1 flex-col gap-1'>
        <h3 className='font-semibold'>{item.name}</h3>
        <p className='text-muted-foreground text-sm'>Количество: {item.quantity}</p>
        <p className='font-semibold'>{item.price.toLocaleString('ru-RU')} ₽</p>
      </div>

      <Button
        variant='outline'
        size='sm'
        onClick={() => onRemove(item.id)}
        className='flex-shrink-0'
      >
        <Trash2 className='h-4 w-4' />
      </Button>
    </div>
  )
}
