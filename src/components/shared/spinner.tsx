'use client'

import { type ReactNode } from 'react'

import { useIsClient } from '@/hooks/use-is-client'

import { EllipsisLoader } from './ellipsis-loader'
import { useGetMe } from '@/api/user/queries/use-get-me'

export function Spinner({ children }: { children: ReactNode }) {
  const { isLoading, isError } = useGetMe()

  const isClient = useIsClient()

  if (!isClient) {
    return
  }

  if (isLoading || isError) {
    return (
      <div className='flex min-h-[calc(100vh-6rem)] items-center justify-center'>
        <EllipsisLoader />
      </div>
    )
  }

  return children
}
