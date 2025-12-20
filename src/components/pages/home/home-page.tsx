import { ProductCard } from '@/components/shared/product-card'
import { FLOWERS } from '@/data/flowers'
import { ReviewsSection } from './about-us-section'
import { HeroSection } from './hero-section'

export function Home() {
  return (
    <>
      <HeroSection />

      {/* Flower Catalog */}
      <section className='py-12'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold'>Наш каталог</h2>
          <p className='text-muted-foreground mt-2'>
            Выберите идеальный букет для любого повода
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {FLOWERS.map(flower => (
            <ProductCard
              key={flower.id}
              id={flower.id}
              name={flower.name}
              price={flower.price}
              originalPrice={flower.originalPrice}
              image={flower.image}
              rating={flower.rating}
              reviews={flower.reviews}
            />
          ))}
        </div>
      </section>

      <ReviewsSection />
    </>
  )
}
