import Image from 'next/image'

import { Card, CardContent } from '@/components/shared/card'

export function ProductImageCard() {
  return (
    <Card className='min-w-0 rounded-3xl border-none shadow-none'>
      <CardContent className='p-4'>
        <div className='w-full overflow-hidden rounded-2xl bg-white'>
          <Image
            src='/flower-product.png'
            alt='Product'
            width={1200}
            height={1200}
            className='h-full w-full cursor-pointer object-contain transition-transform duration-500 ease-out hover:scale-105'
            priority={false}
          />
        </div>
      </CardContent>
    </Card>
  )
}
