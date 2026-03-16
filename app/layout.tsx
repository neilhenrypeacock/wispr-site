import type { Metadata } from 'next'
import { Outfit, Jost } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'wispr — your daily coaching companion',
  description: 'Personalised audio coaching episodes, generated daily, just for you. wispr learns who you are and gets better every day.',
  openGraph: {
    title: 'wispr — your daily coaching companion',
    description: 'Personalised audio coaching episodes, generated daily, just for you.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jost.variable}`}>
      <body className="bg-ink text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
