import type { Metadata } from 'next'
import { Prata, Jost } from 'next/font/google'
import './globals.css'

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-prata',
  display: 'swap',
})

const jost = Jost({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Al Jefoon Tents | Events, Fabrication & Tensile Structures',
  description: 'Your vision, our execution. Premium tents, fabrication, and event equipment rental in the UAE.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${prata.variable} ${jost.variable}`}>
      <body className="bg-bone-white text-matte-charcoal selection:bg-burnt-clay selection:text-bone-white">
        {children}
      </body>
    </html>
  )
}
