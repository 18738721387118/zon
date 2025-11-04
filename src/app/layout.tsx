import { Geist } from 'next/font/google'

import './globals.css'
import { FramerMotion } from '@/config/framer-motion'
import { Providers } from '@/config/providers'
import { Sonner } from '@/config/sonner'

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
      <Providers>
        <body className={`${geist.className} antialiased`}>
          <FramerMotion />
          {children}
          <Sonner />
        </body>
      </Providers>
    </html>
  )
}
