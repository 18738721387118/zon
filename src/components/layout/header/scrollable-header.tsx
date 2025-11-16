'use client'

import { PropsWithChildren } from 'react'

import { useScrollVisibility } from '@/hooks/use-scroll-visibility'

import { cn } from '@/utils/class-names'

export function ScrollableHeader({ children }: PropsWithChildren) {
  const { isVisible, instantHide } = useScrollVisibility({
    showAt: 80,
    hideAt: 32,
    predictiveOffWindow: 140,
  })

  return (
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
            'bg-background/70 mt-2 transform-gpu rounded-2xl py-1.5 shadow-sm backdrop-blur-md will-change-[transform,backdrop-filter]',
            isVisible
              ? 'translate-y-0 opacity-100 transition-[opacity,transform] duration-300'
              : cn(
                  instantHide ? 'duration-0' : 'duration-150',
                  '-translate-y-4 opacity-0 transition-[opacity,transform]',
                ),
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
