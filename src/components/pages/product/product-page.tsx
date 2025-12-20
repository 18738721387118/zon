'use client'

import { ProductDescriptionSection } from './product-description-section'
import { ProductImageCard } from './product-image-card'

export function ProductPage() {
  return (
    <>
      <div className='text-md text-muted-foreground mb-6 pl-4 font-normal'>
        Главная &gt; Цветы &gt; <span className='text-zinc-400'>Саган-дайля</span>
      </div>

      <div className='grid grid-cols-2 gap-12'>
        <ProductImageCard />

        <ProductDescriptionSection />
      </div>
    </>
  )
}
