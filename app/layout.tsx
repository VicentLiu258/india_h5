import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AA.GAME - Join and Have Fun',
  description: 'Join aa.game quickly and have fun openly',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
