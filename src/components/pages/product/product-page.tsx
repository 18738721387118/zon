'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { getFlowerById } from '@/data/flowers'
import { ClientRoutes } from '@/constants/client-routes'
import { ProductDescriptionSection } from './product-description-section'
import { ProductImageCard } from './product-image-card'
import { Button } from '@/components/shared/button'

interface ProductPageProps {
  productId: string
}

export function ProductPage({ productId }: ProductPageProps) {
  const router = useRouter()
  const flower = getFlowerById(productId)

  if (!flower) {
    return (
      <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4'>
        <h2 className='text-2xl font-bold'>Товар не найден</h2>
        <p className='text-muted-foreground'>Запрошенный товар не существует</p>
        <Button onClick={() => router.push(ClientRoutes.HOME)}>Вернуться на главную</Button>
      </div>
    )
  }

  return (
    <>
      <div className='text-md text-muted-foreground mb-6 pl-4 font-normal'>
        <Link href={ClientRoutes.HOME} className='hover:text-foreground transition-colors'>
          Главная
        </Link>{' '}
        &gt; Цветы &gt; <span className='text-zinc-400'>{flower.name}</span>
      </div>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        <ProductImageCard image={flower.image} name={flower.name} />

        <ProductDescriptionSection flower={flower} />
      </div>
    </>
  )
}
