'use client'

import { useScrollVisibility } from '@/hooks/use-scroll-visibility'

import { GradientBanner } from './gradient-banner'
import { LogoSection } from './logo-section'
import { NavigationButtons } from './navigation-buttons'
import { cn } from '@/utils/class-names'

export function SiteHeader() {
  const { isVisible, instantHide } = useScrollVisibility({
    showAt: 80,
    hideAt: 32,
    predictiveOffWindow: 140,
  })

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

      <div
        aria-hidden={!isVisible}
        className={cn(
          'fixed inset-x-0 top-0 z-50',
          isVisible ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div
            className={cn(
              'bg-background/70 mt-2 transform-gpu rounded-2xl shadow-sm backdrop-blur-md will-change-[transform,backdrop-filter]',
              isVisible
                ? 'translate-y-0 opacity-100 transition-[opacity,transform] duration-300'
                : cn(
                    instantHide ? 'duration-0' : 'duration-150',
                    '-translate-y-4 opacity-0 transition-[opacity,transform]',
                  ),
            )}
          >
            <div className='relative flex w-full items-center justify-between px-4 py-2'>
              <LogoSection />
              <div className='hidden items-center md:flex'>
                <NavigationButtons compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
