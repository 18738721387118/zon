import { Geist } from 'next/font/google'

import './globals.css'
import { MotionClient } from '@/config/motion-client'
import { Providers } from '@/config/providers'

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
          <MotionClient />
          {children}
        </body>
      </Providers>
    </html>
  )
}
