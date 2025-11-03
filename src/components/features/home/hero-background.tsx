'use client'

import { MotionConfig, motion } from 'framer-motion'

export function HeroBackground() {
  return (
    <MotionConfig reducedMotion='user'>
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='bg-primary/2 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl'
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
        />

        <motion.div
          className='bg-primary/2 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl'
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            delay: 1,
          }}
        />
      </div>
    </MotionConfig>
  )
}
