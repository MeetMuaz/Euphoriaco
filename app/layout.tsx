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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}