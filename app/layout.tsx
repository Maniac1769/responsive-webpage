import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhinav responsive App',
  description: 'Created by abhinav',
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
