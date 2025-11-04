import Link from 'next/link'
import { ReactNode } from 'react'

import { Logo } from '@/components/shared/logo'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description: string
  link: {
    href: string
    title: string
    description: string
  }
}

export function AuthLayout({ children, title, description, link }: AuthLayoutProps) {
  return (
    <div className='relative container flex min-h-svh w-full flex-col items-center justify-center px-4 lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='text-primary relative hidden h-full flex-col p-10 lg:flex'>
        <div className='from-primary via-primary/90 to-primary/70 absolute inset-0 bg-linear-to-br'></div>
      </div>

      <div className='w-full px-4 py-8 sm:px-6 md:py-12'>
        <div className='mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-5'>
          <Logo className='h-8 w-24' />

          <div className='flex flex-col space-y-3'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-muted-foreground text-sm'>{description}</p>
          </div>
          <div className='p-0'>{children}</div>

          <p className='text-muted-foreground text-center text-sm'>
            {link.description}{' '}
            <Link href={link.href} className='text-primary font-medium'>
              {link.title}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
