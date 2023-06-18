import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mano GUIAS',
  description: 'Guias criados pelo Mano_Imp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ProgressBar />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
