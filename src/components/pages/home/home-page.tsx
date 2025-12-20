import { ReviewsSection } from './about-us-section'
import { BestSellersSection } from './best-sellers-section'
import { HeroSection } from './hero-section'

export function Home() {
  return (
    <>
      <HeroSection />
      <BestSellersSection />
      <ReviewsSection />
    </>
  )
}
