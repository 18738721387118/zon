'use client'

import { MotionGlobalConfig } from 'framer-motion'
import { useEffect } from 'react'

export function MotionClient() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      MotionGlobalConfig.skipAnimations = true
    }
  }, [])

  return null
}
