import { SiteHeader } from '@/components/layout/header/site-header'
import { Home } from '@/components/pages/home/home-page'

export default function HomePage() {
  return (
    <>
      <div className='min-h-screen'>
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SiteHeader showBanner={true} />
          <Home />
        </main>
      </div>
    </>
  )
}
