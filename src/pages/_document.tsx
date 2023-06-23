import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

interface SEOMeta {
  name?: string
  content: string
  property?: string
  key?: string
}
class MyDocument extends Document {
  render(): JSX.Element {
    const meta: SEOMeta[] = [
      {
        name: 'description',
        content: "Phuong Phung's portfolio.",
        key: 'description',
      },
      {
        property: 'og:description',
        content: "Phuong Phung's portfolio.",
        key: 'og:description',
      },
      {
        property: 'og:type',
        content: 'website',
        key: 'og:type',
      },
      {
        property: 'og:image',
        content: process.env.NEXT_PUBLIC_ROOT_URL + '/og-default.png',
        key: 'og:image',
      },
      {
        property: 'og:image:alt',
        content: 'Banner for phuongphung.com',
        key: 'og:image:alt',
      },
      {
        property: 'og:image:width',
        content: '1280',
        key: 'og:image:width',
      },
      {
        property: 'og:image:height',
        content: '675',
        key: 'og:image:height',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
        key: 'twitter:card',
      },
      {
        property: 'twitter:creator',
        content: '@fuongzt',
        key: 'twitter:creator',
      },
      {
        property: 'twitter:description',
        content: "Phuong Phung's portfolio.",
        key: 'twitter:description',
      },
      {
        property: 'twitter:image',
        content: process.env.NEXT_PUBLIC_ROOT_URL + '/og-default.png',
        key: 'twitter:image',
      },
    ]

    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          {meta.map(({ name, content, property, key }) => (
            <meta key={key} name={name} property={property} content={content} />
          ))}

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
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
