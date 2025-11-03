'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/shared/button'
import { Card, CardContent } from '@/components/shared/card'

interface BestSellerCardProps {
  title: string
  price: number
  imageUrl: string
  rating: number
  isFavorite?: boolean
}

export function BestSellerCard({ title, price, imageUrl, rating }: BestSellerCardProps) {
  return (
    <Card className='w-full rounded-3xl border-none shadow-none'>
      <CardContent className='p-4'>
        <div className='w-full overflow-hidden rounded-2xl bg-white'>
          <Image
            src={imageUrl}
            alt={title}
            width={360}
            height={360}
            className='h-full w-full cursor-pointer object-contain transition-transform duration-500 ease-out hover:scale-107'
            priority={false}
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <span className='inline-flex items-center gap-1'>
            <Star className='h-4 w-4 fill-orange-300 text-orange-300' />
            <span className='text-foreground text-sm font-medium'>{rating}</span>
          </span>

          <div className='text-md font-medium'>{title}</div>
        </div>

        <div className='mt-2 flex items-center gap-2 leading-none font-semibold'>
          <span className='text-muted-foreground text-sm line-through'>
            {Math.floor(price * 1.3).toLocaleString('ru-RU')} ₽
          </span>
          <span className='text-lg'>{price.toLocaleString('ru-RU')} ₽</span>
        </div>

        <Button
          size='lg'
          className='text-md mt-3 w-full rounded-md font-semibold transition-opacity duration-300 hover:opacity-80'
        >
          Купить за {price.toLocaleString('ru-RU')} ₽
        </Button>
      </CardContent>
    </Card>
  )
}
