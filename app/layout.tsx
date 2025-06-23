import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shifa Circle',
  description: 'Shifa Circle is a non-profit organization dedicated to providing accessible healthcare services.',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
