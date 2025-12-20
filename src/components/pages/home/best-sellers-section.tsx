import { BestSellerCard } from './best-seller-card'

export function BestSellersSection() {
  return (
    <div className='mb-16'>
      <div className='mb-6 text-4xl font-medium'>Каталог</div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <BestSellerCard
          title='Саган-дайля'
          price={890}
          imageUrl='/flower-product.png'
          rating={4.7}
        />
        <BestSellerCard
          title='Ежовик гребенчатый'
          price={1363}
          imageUrl='/flower-product.png'
          rating={4.9}
        />
        <BestSellerCard
          title='Рейши лакированный'
          price={1580}
          imageUrl='/flower-product.png'
          rating={4.8}
        />
        <BestSellerCard
          title='Чага берёзовая'
          price={740}
          imageUrl='/flower-product.png'
          rating={4.6}
        />
      </div>
    </div>
  )
}
