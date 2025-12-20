'use server'

import { cookies } from 'next/headers'
import Link from 'next/link'

import { Person } from '@/components/icons/person'

import { ClientRoutes } from '@/constants/client-routes'
import { CookieKeys } from '@/constants/cookie-keys'

import { cn } from '@/utils/class-names'
import { CartButton } from './cart-button'

interface NavigationButtonsProps {
  compact?: boolean
}

export async function NavigationButtons({ compact = false }: NavigationButtonsProps) {
  const isAuthorized = Boolean((await cookies()).get(CookieKeys.ACCESS_TOKEN)?.value)

  return (
    <div className={cn('flex items-center', compact ? 'gap-6' : 'gap-5')}>
      <Link
        href={isAuthorized ? ClientRoutes.ACCOUNT : ClientRoutes.LOGIN}
        className='group flex flex-col items-center'
      >
        <Person
          className={cn(
            compact ? 'size-5' : 'size-6',
            'group-hover:text-primary transition-colors duration-200',
          )}
          aria-label='Профиль'
        />

        <span
          className={cn(
            'text-xs font-medium',
            compact && 'leading-none',
            'group-hover:text-primary transition-colors duration-200',
          )}
        >
          {isAuthorized ? 'Профиль' : 'Войти'}
        </span>
      </Link>

      <CartButton compact={compact} />
    </div>
  )
}
