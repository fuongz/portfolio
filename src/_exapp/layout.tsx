import Header from '@/components/Shared/Header'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ display: 'swap', weight: ['300', '400', '500', '600', '700'], subsets: ['vietnamese', 'latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ5GTT6');`}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4R32XCF1J4"></Script>
        <Script id="google-analytic-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4R32XCF1J4');
`}
        </Script>
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
