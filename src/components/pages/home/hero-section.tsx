'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/button'

import { ClientRoutes } from '@/constants/client-routes'

export function HeroSection() {
  return (
    <section className='mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-6 py-16 text-center sm:space-y-8 sm:py-20 md:py-28 lg:py-32'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'>
          Цветы для любых случаев
          <br className='sm:hidden' /> с <br className='hidden sm:block' />
          <span className='from-primary to-primary/60 bg-linear-to-br bg-clip-text text-transparent'>
            Zon
          </span>
        </h1>

        <p className='text-muted-foreground mx-auto max-w-xs leading-relaxed sm:max-w-sm sm:text-base md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl'>
          Онлайн-магазин свежих цветов и букетов. Выбирай, заказывай и дари радость —
          быстро, удобно и со вкусом.
        </p>
      </div>

      <div className='flex gap-4'>
        <Button size='lg' className='rounded-md' asChild>
          <Link href={ClientRoutes.HOME}>
            <ShoppingCart />
            Начать покупки
          </Link>
        </Button>
      </div>
    </section>
  )
}
