import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EUPHORIA & Co. - Lifestyle Collection',
  description: 'Your online shelf of feel-good things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}