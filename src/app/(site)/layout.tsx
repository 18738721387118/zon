import { Header } from '@/components/layout/header'

export default function SiteLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='min-h-screen'>
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Header />
        {children}
      </main>
    </div>
  )
}
