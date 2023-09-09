import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './Providers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comuna de Zavalla',
  description: 'En la página web de la Comuna de Zavalla vas a encontrar toda la información necesaria para mantenerte al tanto de todas las novedades del pueblo.',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy='afterInteractive' />
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
          });
          `,
        }}
      />
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
