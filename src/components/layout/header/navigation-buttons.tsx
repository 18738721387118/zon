import Image from 'next/image'
import Link from 'next/link'

import { ClientRoutes } from '@/constants/routes'

import { cn } from '@/utils/class-names'

const NAV_BUTTONS = [
  { href: ClientRoutes.LOGIN, src: '/person.svg', alt: 'Person', label: 'Войти' },
  { href: ClientRoutes.HOME, src: '/cart.svg', alt: 'Cart', label: 'Корзина' },
  // { href: ClientRoutes.HOME, src: '/favorite.svg', alt: 'Favorite', label: 'Избранное' },
]

interface NavigationButtonsProps {
  compact?: boolean
}

export function NavigationButtons({ compact = false }: NavigationButtonsProps) {
  const size = compact ? 20 : 24

  return (
    <div className={cn('flex items-center', compact ? 'gap-6' : 'gap-5')}>
      {NAV_BUTTONS.map(({ href, src, alt, label }) => (
        <Link
          key={compact ? 'compact-' + label : label}
          href={href}
          className='group flex flex-col items-center'
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn(
              compact ? 'size-5' : 'size-6',
              'transition-opacity duration-200 group-hover:opacity-75',
            )}
          />
          <span
            className={cn(
              'text-xs font-medium',
              compact && 'leading-none',
              'transition-opacity duration-200 group-hover:opacity-75',
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}
