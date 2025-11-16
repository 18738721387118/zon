import { GradientBanner } from './gradient-banner'
import { LogoSection } from './logo-section'
import { NavigationButtons } from './navigation-buttons'
import { ScrollableHeader } from './scrollable-header'

export async function SiteHeader() {
  return (
    <>
      <header className='mb-6 transition-all duration-300'>
        <div className='mx-auto max-w-7xl bg-white px-4 py-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 w-full items-center justify-between'>
            <LogoSection />
            <div className='hidden items-center md:flex'>
              <NavigationButtons />
            </div>
          </div>
        </div>
        <GradientBanner />
      </header>

      <ScrollableHeader>
        <div className='relative flex w-full items-center justify-between px-4 py-2'>
          <LogoSection />
          <div className='hidden items-center md:flex'>
            <NavigationButtons compact />
          </div>
        </div>
      </ScrollableHeader>
    </>
  )
}
