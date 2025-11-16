import { ReviewsSection } from '@/components/pages/home/about-us-section'
import { BestSellersSection } from '@/components/pages/home/best-sellers-section'
import { HeroSection } from '@/components/pages/home/hero-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BestSellersSection />
      <ReviewsSection />
    </>
  )
}
