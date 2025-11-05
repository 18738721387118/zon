import { BestSellersSection } from '@/components/features/home/best-sellers-section'
import { HeroSection } from '@/components/features/home/hero-section'
import { ReviewsSection } from '@/components/features/home/about-us-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BestSellersSection />
      <ReviewsSection />
    </>
  )
}
