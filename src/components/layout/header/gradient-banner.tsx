'use client'

import { MotionConfig, motion } from 'framer-motion'

import { useIsClient } from '@/hooks/use-is-client'

const dots = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  initialX: Math.random() * 150,
  initialY: Math.random() * 150,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}))

export function GradientBanner() {
  const isClient = useIsClient()

  if (!isClient) {
    return (
      <div className='from-primary/90 via-primary/70 to-primary/90 relative overflow-hidden rounded-b-2xl bg-linear-to-r py-4 text-center font-medium text-white'>
        <p className='relative z-10 text-lg sm:text-xl'>
          Распродажа 11.11 в самом разгаре —{' '}
          <span className='font-bold'>Скидки до 90%</span>
        </p>
      </div>
    )
  }

  return (
    <MotionConfig reducedMotion='user'>
      <div className='from-primary/90 via-primary/70 to-primary/90 relative overflow-hidden rounded-b-2xl bg-linear-to-r py-4 text-center font-medium text-white'>
        {dots.map(dot => (
          <motion.div
            key={dot.id}
            className='will-change-opacity pointer-events-none absolute transform-gpu rounded-full bg-white will-change-transform'
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.initialX}%`,
              top: `${dot.initialY}%`,
            }}
            initial={{ opacity: 0.12, scale: 1, y: 0 }}
            animate={{ opacity: [0.12, 0.3, 0.12], scale: [1, 1.2, 1], y: [0, -10, 0] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay: dot.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        <p className='relative z-10 text-lg sm:text-xl'>
          Распродажа 11.11 в самом разгаре —{' '}
          <span className='font-bold'>Скидки до 90%</span>
        </p>
      </div>
    </MotionConfig>
  )
}
