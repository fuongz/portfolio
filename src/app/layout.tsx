import './globals.css'

import { Metadata } from 'next'
import Script from 'next/script'
import { Bricolage_Grotesque, Inconsolata, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from './providers'

const sansSerifFont = Inter({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const displayFont = Bricolage_Grotesque({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  subsets: ['latin'],
})

const monoFont = Inconsolata({
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'fuongz',
  description:
    'Personal website of Phuong Phung, a software engineer who found his true passion in programming, topics: technology, slice of life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={sansSerifFont.className}
      suppressHydrationWarning={true}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ5GTT6');`}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4R32XCF1J4"
        ></Script>
        <Script id="google-analytic-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4R32XCF1J4');
`}
        </Script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${monoFont.variable} ${displayFont.variable} antialiased relative`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
