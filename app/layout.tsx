import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oficina de IA - Domina a Inteligência Artificial',
  description: 'Aprende a usar Inteligência Artificial de forma prática e eficaz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
