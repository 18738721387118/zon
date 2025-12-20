import type { ReactNode } from 'react'

import { Spinner } from '@/components/shared/spinner'

export default function AccountLayout({ children }: { children: ReactNode }) {
  return <Spinner>{children}</Spinner>
}
