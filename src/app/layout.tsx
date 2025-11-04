import { Geist } from 'next/font/google'

import './globals.css'
import { FramerMotion } from '@/config/framer-motion'
import { Sonner } from '@/config/sonner'
import { TanstackQuery } from '@/config/tanstack-query'

const geist = Geist({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <TanstackQuery>
        <body className={`${geist.className} antialiased`}>
          <FramerMotion />
          {children}
          <Sonner />
        </body>
      </TanstackQuery>
    </html>
  )
}
