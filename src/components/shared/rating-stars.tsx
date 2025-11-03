import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating: number
  max?: number
}

export function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  return (
    <div className='inline-flex items-center gap-1'>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i + 1 <= rating

        return (
          <Star
            key={i}
            className={`h-4 w-4 ${
              filled ? 'fill-orange-300 text-orange-300' : 'fill-orange-200 text-orange-200'
            }`}
          />
        )
      })}
      <span className='text-foreground ml-1 text-sm font-medium'>{rating.toFixed(1)}</span>
    </div>
  )
}
