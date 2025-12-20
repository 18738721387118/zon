import { Star } from 'lucide-react'
import { cn } from '@/utils/class-names'

interface RatingStarsProps {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function RatingStars({
  rating,
  max = 5,
  size = 'md',
  showLabel = true,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className='inline-flex items-center gap-1'>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i + 1 <= rating

        return (
          <Star
            key={i}
            className={cn(
              sizeClasses[size],
              filled ? 'fill-orange-300 text-orange-300' : 'fill-orange-200 text-orange-200',
            )}
          />
        )
      })}
      {showLabel && (
        <span className={cn('text-foreground ml-1 font-medium', textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
