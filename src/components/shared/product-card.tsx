'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

import { Button } from './button'
import { RatingStars } from './rating-stars'
import { cn } from '@/utils/class-names'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviews: number
  className?: string
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  className,
}: ProductCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)

  return (
    <Link href={`/product/${id}`}>
      <div
        className={cn(
          'group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg',
          className,
        )}
      >
        {discount > 0 && (
          <div className='absolute right-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white'>
            -{discount}%
          </div>
        )}

        <div className='aspect-square overflow-hidden bg-gray-50'>
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
        </div>

        <div className='p-4'>
          <div className='mb-2 flex items-center gap-2'>
            <RatingStars rating={rating} size='sm' />
            <span className='text-muted-foreground text-xs'>({reviews})</span>
          </div>

          <h3 className='mb-2 line-clamp-2 font-semibold group-hover:text-primary transition-colors'>
            {name}
          </h3>

          <div className='mb-3 flex items-center gap-2'>
            <span className='text-xl font-bold'>{price.toLocaleString('ru-RU')} ₽</span>
            {originalPrice > price && (
              <span className='text-muted-foreground text-sm line-through'>
                {originalPrice.toLocaleString('ru-RU')} ₽
              </span>
            )}
          </div>

          <Button
            size='sm'
            className='w-full'
            onClick={e => {
              e.preventDefault()
            }}
          >
            <ShoppingCart className='mr-2 h-4 w-4' />
            В корзину
          </Button>
        </div>
      </div>
    </Link>
  )
}
