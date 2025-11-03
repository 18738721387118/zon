'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollVisibilityProps {
  showAt?: number
  hideAt?: number
  predictiveOffWindow?: number
}

export function useScrollVisibility({
  showAt = 80,
  hideAt = 32,
  predictiveOffWindow = 140,
}: UseScrollVisibilityProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [instantHide, setInstantHide] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const dy = y - lastY.current
      const goingUp = dy < -2
      const goingDown = dy > 2

      let nextVisible = isVisible
      let nextInstant = false

      if (y > showAt && goingDown) {
        nextVisible = true
      } else if (y < hideAt) {
        nextVisible = false
        nextInstant = true
      } else if (goingUp && y < predictiveOffWindow) {
        nextVisible = false
        nextInstant = true
      }

      if (nextVisible !== isVisible) {
        setInstantHide(nextInstant)
        setIsVisible(nextVisible)
      }
      lastY.current = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isVisible, showAt, hideAt, predictiveOffWindow])

  return { isVisible, instantHide }
}
