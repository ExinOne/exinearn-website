import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExinEarn 返利水龙头',
  description: '购物获得额外奖励，积少成多收益丰',
  generator: 'ExinEarn'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
