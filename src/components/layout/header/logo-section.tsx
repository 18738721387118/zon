import Link from 'next/link'

import { Logo } from '@/components/icons/logo'

import { ClientRoutes } from '@/constants/client-routes'

export function LogoSection() {
  return (
    <div className='flex items-center gap-3'>
      <Link href={ClientRoutes.HOME} className='flex items-center'>
        <Logo className='h-8 w-24' />
      </Link>
    </div>
  )
}
