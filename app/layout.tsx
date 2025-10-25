import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oficina de IA | Domina a Inteligência Artificial',
  description: 'A tua oficina para criar imagens perfeitas, vídeos incríveis e agentes excepcionais com IA. Aprende com João Coucelo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

