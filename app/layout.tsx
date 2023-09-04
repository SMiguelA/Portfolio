import NavBar from '@/components/NavBar/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Providers } from '../redux/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Sierra', 
  description: 'Pagina de presentación Miguel Angel Sierra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Miguel Sierra</title>
        <meta property="og:title" content="Miguel Sierra" key="title"/>
        <meta name="google" content="notranslate" />
      </Head>
      <Head>
        <meta property="og:title" content="Miguel Sierra" key="title" />
      </Head>
      <Head>
        <meta name="description" content="Pagina de presentación Miguel Angel Sierra" />
        <meta property="og:description" content="Pagina de presentación Miguel Angel Sierra" />
      </Head>
      <Providers>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
