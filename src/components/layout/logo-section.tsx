import Link from 'next/link'

import { LogoIcon } from '@/components/shared/logo-icon'

import { ClientRoutes } from '@/constants/routes'

export function LogoSection() {
  return (
    <div className='flex items-center gap-3'>
      <Link href={ClientRoutes.HOME} className='flex items-center'>
        <LogoIcon className='h-8 w-24' />
      </Link>
    </div>
  )
}
